import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDirectory = path.join(rootDirectory, "content", "projects");
const publicDirectory = path.join(rootDirectory, "public", "projects");
const dryRun = process.argv.includes("--dry-run");

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function commaSeparated(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function nextOrder() {
  const files = (await readdir(contentDirectory)).filter((file) => file.endsWith(".mdx"));
  const orders = await Promise.all(
    files.map(async (file) => {
      const source = await readFile(path.join(contentDirectory, file), "utf8");
      return Number(source.match(/\border:\s*(\d+)/)?.[1] ?? 0);
    }),
  );
  return Math.max(0, ...orders) + 1;
}

async function askRequired(ask, prompt, defaultValue = "") {
  while (true) {
    const answer = (await ask(
      defaultValue ? `${prompt} (${defaultValue}): ` : `${prompt}: `,
    )).trim();
    const value = answer || defaultValue;
    if (value) return value;
    process.stdout.write(`${prompt} is required.\n`);
  }
}

async function askYesNo(ask, prompt, defaultValue) {
  const hint = defaultValue ? "Y/n" : "y/N";

  while (true) {
    const answer = (await ask(`${prompt} (${hint}): `)).trim().toLowerCase();
    if (!answer) return defaultValue;
    if (answer === "y" || answer === "yes") return true;
    if (answer === "n" || answer === "no") return false;
    process.stdout.write("Please answer yes or no.\n");
  }
}

function printProjectSummary({ slug, published, featured }) {
  process.stdout.write("\nProject summary\n");
  process.stdout.write(`MDX file: content/projects/${slug}.mdx\n`);
  process.stdout.write(`Image folder: public/projects/${slug}/\n`);
  process.stdout.write(`Project details URL: http://localhost:3000/projects/${slug}\n`);
  process.stdout.write(`Published: ${published ? "Yes" : "No"}\n`);
  process.stdout.write(`Homepage featured: ${featured ? "Yes" : "No"}\n`);
  process.stdout.write("Projects page: http://localhost:3000/projects\n");
  process.stdout.write(
    "\nImage workflow\n" +
      `1. Place images in public/projects/${slug}/\n` +
      "2. Set cover.file\n" +
      "3. Add gallery file names\n" +
      "4. Add alt text\n" +
      "5. Run npm run projects:validate\n",
  );
}

let readline;
let scriptedAnswers = [];

if (process.stdin.isTTY) {
  readline = createInterface({ input: process.stdin, output: process.stdout });
} else {
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  scriptedAnswers = input.split(/\r?\n/);
}

const ask = async (prompt) => {
  if (readline) return readline.question(prompt);
  process.stdout.write(prompt);
  return scriptedAnswers.shift() ?? "";
};

try {
  const title = await askRequired(ask, "Project title");
  const defaultSlug = slugify(title);
  const slug = slugify(await askRequired(ask, "Slug", defaultSlug));
  if (!slug) throw new Error("The slug must contain letters or numbers.");

  const summary = await askRequired(ask, "Short summary");
  const yearText = await askRequired(ask, "Year", String(new Date().getFullYear()));
  const year = Number(yearText);
  if (!Number.isInteger(year) || year < 2000) {
    throw new Error("Year must be a four-digit number.");
  }

  const role = await askRequired(ask, "Role");
  const primaryCategory = await askRequired(ask, "Primary category");
  const additionalCategories = commaSeparated(
    await ask("Additional categories (comma-separated, optional): "),
  );
  const tags = commaSeparated(await askRequired(ask, "Technology tags (comma-separated)"));
  if (tags.length === 0) throw new Error("Add at least one technology tag.");
  const published = await askYesNo(ask, "Publish this project now?", true);
  const featured = await askYesNo(ask, "Show it on the homepage?", false);
  const categories = [...new Set([primaryCategory, ...additionalCategories])];
  const order = await nextOrder();
  const contentPath = path.join(contentDirectory, `${slug}.mdx`);
  const assetPath = path.join(publicDirectory, slug);

  if ((await exists(contentPath)) || (await exists(assetPath))) {
    throw new Error(`A project file or asset directory already exists for "${slug}".`);
  }

  const metadata = `import { defineProjectMetadata } from "@/lib/projects/project-types"

export const metadata = defineProjectMetadata({
  slug: ${JSON.stringify(slug)},
  title: ${JSON.stringify(title)},
  shortTitle: ${JSON.stringify(title)},
  category: ${JSON.stringify(primaryCategory)},
  categories: ${JSON.stringify(categories)},
  tags: ${JSON.stringify(tags)},
  year: ${year},
  role: ${JSON.stringify(role)},
  featured: ${featured},
  order: ${order},
  status: ${JSON.stringify(published ? "published" : "draft")},
  summary: ${JSON.stringify(summary)},
  overview: "TODO: Add a concise, factual project overview before publishing.",
  contributions: [
    "TODO: Add a supported primary contribution before publishing.",
  ],
  // Place the cover file in public/projects/${slug}/, then replace null with:
  // { file: "cover.webp", alt: "Describe the image", position: "center" }
  cover: null,
  // Add gallery items as { file: "screen.webp", alt: "Describe the image" }.
  // Each item may also include caption and position. Dimensions are detected automatically.
  gallery: [],
  // Add only confirmed, public HTTP or HTTPS URLs. Leave either value null when unavailable.
  links: {
    live: null,
    github: null,
  },
})

## Project context

TODO: Explain the supported project context without adding confidential or unconfirmed information.

## What this work represents

TODO: Summarize the skills demonstrated by this work without inventing outcomes or metrics.
`;

  if (dryRun) {
    process.stdout.write(`\nDry run complete. No files were created.\n`);
    process.stdout.write(`Content: ${path.relative(rootDirectory, contentPath)}\n`);
    process.stdout.write(`Assets: ${path.relative(rootDirectory, assetPath)}/\n`);
  } else {
    await mkdir(assetPath, { recursive: false });
    await writeFile(contentPath, metadata, { encoding: "utf8", flag: "wx" });
    process.stdout.write(`\nCreated content/projects/${slug}.mdx\n`);
    process.stdout.write(`Created public/projects/${slug}/\n`);
  }
  printProjectSummary({ slug, published, featured });
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
} finally {
  readline?.close();
}
