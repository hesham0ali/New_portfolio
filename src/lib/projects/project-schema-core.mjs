import { realpath, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const statuses = new Set(["draft", "published"]);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const supportedExtensions = new Map([
  [".avif", "avif"],
  [".gif", "gif"],
  [".jpeg", "jpeg"],
  [".jpg", "jpeg"],
  [".png", "png"],
  [".webp", "webp"],
]);
const supportedFormats = new Set(["avif", "gif", "jpeg", "png", "webp"]);
const imageMetadataCache = new Map();

function fail(filename, field, message) {
  throw new Error(
    `[content/projects/${filename}] Invalid metadata field "${field}": ${message}`,
  );
}

function failImage(filename, field, resolvedPath, reason) {
  fail(filename, field, `${reason}; resolved image path: ${resolvedPath}`);
}

function record(value, filename, field = "metadata") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(filename, field, "expected an object");
  }
  return value;
}

function text(value, filename, field) {
  if (typeof value !== "string" || value.trim().length === 0) {
    fail(filename, field, "expected a non-empty string");
  }
  return value.trim();
}

function textArray(value, filename, field) {
  if (!Array.isArray(value) || value.length === 0) {
    fail(filename, field, "expected a non-empty array of strings");
  }

  return value.map((item, index) => text(item, filename, `${field}[${index}]`));
}

function optionalUrl(value, filename, field) {
  if (value === undefined || value === null) return null;
  const parsed = text(value, filename, field);

  try {
    const url = new URL(parsed);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      fail(filename, field, "expected an HTTP or HTTPS URL");
    }
  } catch {
    fail(filename, field, "expected a valid absolute HTTP or HTTPS URL or null");
  }

  return parsed;
}

function projectImage(value, filename, field, slug, publicDirectory) {
  const image = record(value, filename, field);
  const projectDirectory = path.resolve(publicDirectory, "projects", slug);
  const unresolvedPath = path.resolve(
    projectDirectory,
    typeof image.file === "string" ? image.file : "",
  );
  if (typeof image.file !== "string" || image.file.trim().length === 0) {
    failImage(
      filename,
      `${field}.file`,
      unresolvedPath,
      "expected a non-empty relative filename or nested path",
    );
  }

  const file = image.file.trim();
  const resolvedPath = path.resolve(projectDirectory, file);
  if (typeof image.alt !== "string" || image.alt.trim().length === 0) {
    failImage(
      filename,
      `${field}.alt`,
      resolvedPath,
      "expected non-empty alt text",
    );
  }

  const caption = image.caption;
  const position = image.position;

  if (
    caption !== undefined &&
    (typeof caption !== "string" || caption.trim().length === 0)
  ) {
    failImage(
      filename,
      `${field}.caption`,
      resolvedPath,
      "expected a non-empty string when provided",
    );
  }
  if (
    position !== undefined &&
    (typeof position !== "string" || position.trim().length === 0)
  ) {
    failImage(
      filename,
      `${field}.position`,
      resolvedPath,
      "expected a non-empty string when provided",
    );
  }

  return {
    file,
    alt: image.alt.trim(),
    ...(caption === undefined ? {} : { caption: caption.trim() }),
    ...(position === undefined ? {} : { position: position.trim() }),
  };
}

function projectGallery(value, filename, slug, publicDirectory) {
  if (!Array.isArray(value)) {
    fail(filename, "gallery", "expected an array");
  }

  return value.map((item, index) =>
    projectImage(
      item,
      filename,
      `gallery[${index}]`,
      slug,
      publicDirectory,
    ),
  );
}

export function validateProjectMetadataValue(value, filename, publicDirectory) {
  const input = record(value, filename);
  const slug = text(input.slug, filename, "slug");
  const expectedSlug = filename.replace(/\.mdx$/, "");

  if (!slugPattern.test(slug)) {
    fail(filename, "slug", "use lowercase letters, numbers, and hyphens only");
  }
  if (slug !== expectedSlug) {
    fail(filename, "slug", `must match the filename (${expectedSlug})`);
  }

  const status = text(input.status, filename, "status");
  if (!statuses.has(status)) {
    fail(filename, "status", 'expected "draft" or "published"');
  }
  if (typeof input.featured !== "boolean") {
    fail(filename, "featured", "expected a boolean");
  }
  if (!Number.isInteger(input.year) || input.year < 2000) {
    fail(filename, "year", "expected a four-digit year");
  }
  if (!Number.isInteger(input.order) || input.order < 0) {
    fail(filename, "order", "expected a non-negative integer");
  }

  const contributions = textArray(
    input.contributions,
    filename,
    "contributions",
  );
  if (contributions.length > 5) {
    fail(filename, "contributions", "use no more than five primary contributions");
  }

  const links = record(input.links, filename, "links");
  const cover =
    input.cover === undefined || input.cover === null
      ? null
      : projectImage(input.cover, filename, "cover", slug, publicDirectory);

  return {
    slug,
    title: text(input.title, filename, "title"),
    shortTitle: text(input.shortTitle, filename, "shortTitle"),
    category: text(input.category, filename, "category"),
    categories: textArray(input.categories, filename, "categories"),
    tags: textArray(input.tags, filename, "tags"),
    year: input.year,
    role: text(input.role, filename, "role"),
    featured: input.featured,
    order: input.order,
    status,
    summary: text(input.summary, filename, "summary"),
    overview: text(input.overview, filename, "overview"),
    contributions,
    cover,
    gallery: projectGallery(input.gallery, filename, slug, publicDirectory),
    links: {
      live: optionalUrl(links.live, filename, "links.live"),
      github: optionalUrl(links.github, filename, "links.github"),
    },
  };
}

export function assertUniqueProjectSlugs(projects) {
  const slugs = new Map();

  for (const project of projects) {
    const existing = slugs.get(project.metadata.slug);
    if (existing) {
      throw new Error(
        `[content/projects/${project.filename}] Duplicate slug "${project.metadata.slug}"; already used by ${existing}`,
      );
    }
    slugs.set(project.metadata.slug, project.filename);
  }
}

function resolveSafeImagePath(image, slug, filename, field, publicDirectory) {
  const projectDirectory = path.resolve(publicDirectory, "projects", slug);
  const candidatePath = path.resolve(projectDirectory, image.file);
  const fieldName = `${field}.file`;

  if (
    path.posix.isAbsolute(image.file) ||
    path.win32.isAbsolute(image.file) ||
    image.file.includes("\\")
  ) {
    failImage(
      filename,
      fieldName,
      candidatePath,
      "expected a relative path using forward slashes",
    );
  }

  const segments = image.file.split("/");
  if (segments.some((segment) => segment === "..")) {
    failImage(filename, fieldName, candidatePath, 'path must not contain ".."');
  }
  if (segments.some((segment) => segment === "" || segment === ".")) {
    failImage(
      filename,
      fieldName,
      candidatePath,
      "expected a normalized relative filename or nested path",
    );
  }

  const projectRoot = `${projectDirectory}${path.sep}`;
  if (!candidatePath.startsWith(projectRoot)) {
    failImage(
      filename,
      fieldName,
      candidatePath,
      `path must resolve inside public/projects/${slug}/`,
    );
  }

  const extension = path.extname(image.file).toLowerCase();
  if (!supportedExtensions.has(extension)) {
    failImage(
      filename,
      fieldName,
      candidatePath,
      `unsupported image extension "${extension || "none"}"; use AVIF, GIF, JPEG, PNG, or WebP`,
    );
  }

  return candidatePath;
}

function inspectImageFile(filePath, slug, publicDirectory) {
  const cacheKey = `${slug}\0${filePath}`;
  const cached = imageMetadataCache.get(cacheKey);
  if (cached) return cached;

  const pending = (async () => {
    let imageFile;
    try {
      imageFile = await stat(filePath);
    } catch (error) {
      if (error && typeof error === "object" && error.code === "ENOENT") {
        throw new Error("referenced image does not exist");
      }
      throw new Error(
        `could not access image file: ${error instanceof Error ? error.message : String(error)}`,
      );
    }

    if (!imageFile.isFile()) {
      throw new Error("resolved image path is not a file");
    }

    const [actualFilePath, actualProjectsRoot] = await Promise.all([
      realpath(filePath),
      realpath(path.resolve(publicDirectory, "projects")),
    ]);
    const allowedProjectRoot = `${path.resolve(actualProjectsRoot, slug)}${path.sep}`;
    if (!actualFilePath.startsWith(allowedProjectRoot)) {
      throw new Error(`image resolves outside public/projects/${slug}/`);
    }

    let metadata;
    try {
      metadata = await sharp(filePath).metadata();
    } catch (error) {
      throw new Error(
        `could not read image metadata: ${error instanceof Error ? error.message : String(error)}`,
      );
    }

    if (!metadata.format || !supportedFormats.has(metadata.format)) {
      throw new Error(
        `unsupported decoded image format "${metadata.format ?? "unknown"}"`,
      );
    }
    if (
      !Number.isInteger(metadata.width) ||
      metadata.width <= 0 ||
      !Number.isInteger(metadata.height) ||
      metadata.height <= 0
    ) {
      throw new Error("image width and height must resolve to positive integers");
    }

    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
    };
  })();

  imageMetadataCache.set(cacheKey, pending);
  pending.catch(() => imageMetadataCache.delete(cacheKey));
  return pending;
}

async function resolveProjectImage(
  image,
  slug,
  filename,
  field,
  publicDirectory,
) {
  const filePath = resolveSafeImagePath(
    image,
    slug,
    filename,
    field,
    publicDirectory,
  );

  let dimensions;
  try {
    dimensions = await inspectImageFile(filePath, slug, publicDirectory);
  } catch (error) {
    failImage(
      filename,
      `${field}.file`,
      filePath,
      error instanceof Error ? error.message : String(error),
    );
  }

  const extension = path.extname(image.file).toLowerCase();
  const expectedFormat = supportedExtensions.get(extension);
  if (dimensions.format !== expectedFormat) {
    failImage(
      filename,
      `${field}.file`,
      filePath,
      `file extension ${extension} does not match decoded ${dimensions.format} image data`,
    );
  }

  return {
    src: `/projects/${slug}/${image.file}`,
    alt: image.alt,
    ...(image.caption === undefined ? {} : { caption: image.caption }),
    ...(image.position === undefined ? {} : { position: image.position }),
    width: dimensions.width,
    height: dimensions.height,
  };
}

export async function resolveProjectMetadataImages(
  metadata,
  filename,
  publicDirectory,
) {
  const seenGalleryFiles = new Map();

  for (const [index, image] of metadata.gallery.entries()) {
    const field = `gallery[${index}]`;
    const filePath = resolveSafeImagePath(
      image,
      metadata.slug,
      filename,
      field,
      publicDirectory,
    );
    const duplicateKey =
      process.platform === "win32" || process.platform === "darwin"
        ? filePath.toLowerCase()
        : filePath;
    const firstField = seenGalleryFiles.get(duplicateKey);
    if (firstField) {
      failImage(
        filename,
        `${field}.file`,
        filePath,
        `duplicates ${firstField}.file`,
      );
    }
    seenGalleryFiles.set(duplicateKey, field);
  }

  const [cover, gallery] = await Promise.all([
    metadata.cover
      ? resolveProjectImage(
          metadata.cover,
          metadata.slug,
          filename,
          "cover",
          publicDirectory,
        )
      : null,
    Promise.all(
      metadata.gallery.map((image, index) =>
        resolveProjectImage(
          image,
          metadata.slug,
          filename,
          `gallery[${index}]`,
          publicDirectory,
        ),
      ),
    ),
  ]);

  return { ...metadata, cover, gallery };
}
