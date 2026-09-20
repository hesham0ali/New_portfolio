import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const productionUrl = "https://www.heshamali.com";
const homepageTitle =
  "هشام علي | مطور سلة — تصميم وتطوير متاجر سلة";
const homepageDescription =
  "هشام علي، مطور سلة متخصص في تصميم وتطوير متاجر سلة، تخصيص الثيم، تحسين الواجهة وتجربة المتجر على الجوال.";
const outdatedTitle =
  "Hesham Ali | Software Engineer — Backend, WordPress & E-commerce";

const sourceFiles = [
  ".env.example",
  "src/app/layout.tsx",
  "src/app/opengraph-image.tsx",
  "src/app/twitter-image.tsx",
  "src/app/icon.tsx",
  "src/app/apple-icon.tsx",
  "src/app/projects/page.tsx",
  "src/app/projects/[slug]/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/data/portfolio.ts",
  "src/lib/seo.ts",
];

const failures = [];
const warnings = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function decodeHtml(value) {
  return value
    ?.replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getMeta(head, key, value) {
  const tags = head.match(/<meta\s+[^>]*>/g) ?? [];
  for (const tag of tags) {
    const attributes = Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
        match[1],
        decodeHtml(match[2]),
      ]),
    );
    if (attributes[key] === value) return attributes.content;
  }
  return undefined;
}

function getLink(head, rel) {
  const tags = head.match(/<link\s+[^>]*>/g) ?? [];
  for (const tag of tags) {
    const attributes = Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
        match[1],
        decodeHtml(match[2]),
      ]),
    );
    if (attributes.rel === rel) return attributes.href;
  }
  return undefined;
}

async function exists(relativePath) {
  try {
    await stat(path.join(rootDirectory, relativePath));
    return true;
  } catch {
    return false;
  }
}

const sources = new Map(
  await Promise.all(
    sourceFiles.map(async (relativePath) => [
      relativePath,
      await readFile(path.join(rootDirectory, relativePath), "utf8"),
    ]),
  ),
);
const allSource = [...sources.values()].join("\n");

check(!allSource.includes(outdatedTitle), "outdated WordPress-only title remains");
check(
  sources.get(".env.example")?.trim() ===
    `NEXT_PUBLIC_SITE_URL=${productionUrl}`,
  ".env.example must define the production NEXT_PUBLIC_SITE_URL",
);
check(
  sources.get("src/data/portfolio.ts")?.includes(productionUrl),
  "site URL fallback must use the production domain",
);
check(
  sources.get("src/app/layout.tsx")?.includes("metadataBase: new URL(siteUrl)"),
  "root metadataBase is missing",
);
check(
  sources.get("src/app/layout.tsx")?.includes('<html lang="ar" dir="rtl"'),
  "root Arabic language or RTL direction is missing",
);
check(
  sources.get("src/lib/seo.ts")?.includes(homepageTitle) &&
    sources.get("src/lib/seo.ts")?.includes(homepageDescription),
  "homepage title or description does not match the approved copy",
);
check(
  await exists("src/app/opengraph-image.tsx"),
  "root Open Graph image route is missing",
);
check(
  await exists("src/app/twitter-image.tsx"),
  "root X image route is missing",
);
check(await exists("src/app/icon.tsx"), "generated browser icon route is missing");
check(
  await exists("src/app/apple-icon.tsx"),
  "generated Apple icon route is missing",
);
check(
  /size\s*=\s*\{\s*width:\s*1200,\s*height:\s*630\s*\}/s.test(
    sources.get("src/app/opengraph-image.tsx") ?? "",
  ),
  "Open Graph image must declare 1200x630 dimensions",
);
check(
  sources.get("src/app/layout.tsx")?.includes('card: "summary_large_image"'),
  "root X summary_large_image metadata is missing",
);
check(
  sources.get("src/app/layout.tsx")?.includes("icons: {") &&
    sources.get("src/app/layout.tsx")?.includes('url: "/apple-icon"'),
  "root icon or Apple icon metadata is missing",
);
check(
  !sources.get("src/app/projects/[slug]/page.tsx")?.includes("/logo.png"),
  "project social fallback must not use /logo.png",
);

const builtHomePath = path.join(rootDirectory, ".next", "server", "app", "index.html");
if (await exists(".next/server/app/index.html")) {
  const builtStat = await stat(builtHomePath);
  const sourceStats = await Promise.all(
    sourceFiles.map((relativePath) => stat(path.join(rootDirectory, relativePath))),
  );
  const newestSource = Math.max(...sourceStats.map((entry) => entry.mtimeMs));

  if (builtStat.mtimeMs < newestSource) {
    warnings.push("generated metadata is stale; run npm run build, then rerun seo:validate");
  } else {
    const html = await readFile(builtHomePath, "utf8");
    const head = html.slice(0, html.indexOf("</head>") + 7);
    const title = decodeHtml(head.match(/<title>([^<]*)<\/title>/)?.[1]);
    const description = getMeta(head, "name", "description");
    const canonical = getLink(head, "canonical");
    const ogTitle = getMeta(head, "property", "og:title");
    const ogDescription = getMeta(head, "property", "og:description");
    const ogLocale = getMeta(head, "property", "og:locale");
    const ogImage = getMeta(head, "property", "og:image");
    const ogWidth = getMeta(head, "property", "og:image:width");
    const ogHeight = getMeta(head, "property", "og:image:height");
    const twitterCard = getMeta(head, "name", "twitter:card");
    const icon = getLink(head, "icon");
    const appleIcon = getLink(head, "apple-touch-icon");

    check(title === homepageTitle, `generated homepage title is incorrect: ${title}`);
    check(
      description === homepageDescription,
      "generated homepage description is incorrect",
    );
    check(canonical === productionUrl, `generated canonical is incorrect: ${canonical}`);
    check(ogTitle === homepageTitle, `generated og:title is incorrect: ${ogTitle}`);
    check(
      ogDescription === homepageDescription,
      "generated og:description is incorrect",
    );
    check(ogLocale === "ar_SA", `generated og:locale is incorrect: ${ogLocale}`);
    check(
      ogImage?.startsWith(`${productionUrl}/opengraph-image`) === true,
      `generated og:image must be an absolute production URL: ${ogImage}`,
    );
    check(ogWidth === "1200" && ogHeight === "630", "generated OG dimensions are invalid");
    check(twitterCard === "summary_large_image", "generated X card metadata is invalid");
    check(Boolean(icon), "generated favicon/icon link is missing");
    check(Boolean(appleIcon), "generated Apple icon link is missing");
    check(!head.includes("localhost"), "generated metadata contains localhost");
    check(!head.includes("vercel.app"), "generated metadata contains vercel.app");
    check(!head.includes(outdatedTitle), "generated metadata contains the outdated title");
    check(/<html[^>]*lang="ar"[^>]*dir="rtl"/.test(html), "generated HTML is not Arabic RTL");
    check(!ogImage?.includes("logo.png"), "generated og:image falls back to logo.png");

    const projectFiles = (await readdir(path.join(rootDirectory, ".next", "server", "app", "projects")))
      .filter((filename) => filename.endsWith(".html"));
    if (projectFiles.length > 0) {
      const projectHtml = await readFile(
        path.join(rootDirectory, ".next", "server", "app", "projects", projectFiles[0]),
        "utf8",
      );
      const projectHead = projectHtml.slice(0, projectHtml.indexOf("</head>") + 7);
      const projectOgImage = getMeta(projectHead, "property", "og:image");
      check(
        projectOgImage?.startsWith(productionUrl) === true,
        `project og:image must be absolute: ${projectOgImage}`,
      );
      check(
        !projectOgImage?.includes("logo.png"),
        "project fallback still uses logo.png",
      );
    }
  }
} else {
  warnings.push("generated metadata is unavailable until npm run build completes");
}

for (const warning of warnings) process.stdout.write(`Warning: ${warning}\n`);

if (failures.length > 0) {
  for (const failure of failures) process.stderr.write(`SEO validation failed: ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write("SEO source and available generated metadata checks passed.\n");
}
