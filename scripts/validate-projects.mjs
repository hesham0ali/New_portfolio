import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  assertUniqueProjectSlugs,
  resolveProjectMetadataImages,
  validateProjectMetadataValue,
} from "../src/lib/projects/project-schema-core.mjs";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDirectory = path.join(rootDirectory, "content", "projects");
const publicDirectory = path.join(rootDirectory, "public");

function extractMetadata(source, filename) {
  const marker = "export const metadata = defineProjectMetadata(";
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error(
      `[content/projects/${filename}] Missing exported defineProjectMetadata(...) object`,
    );
  }

  const objectStart = source.indexOf("{", markerIndex + marker.length);
  const objectEnd = source.indexOf("\n})", objectStart);
  if (objectStart === -1 || objectEnd === -1) {
    throw new Error(
      `[content/projects/${filename}] Could not read the exported metadata object`,
    );
  }

  try {
    return vm.runInNewContext(
      `(${source.slice(objectStart, objectEnd + 2)})`,
      Object.create(null),
      { timeout: 100, filename },
    );
  } catch (error) {
    throw new Error(
      `[content/projects/${filename}] Could not evaluate metadata: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

try {
  const filenames = (await readdir(contentDirectory))
    .filter((filename) => filename.endsWith(".mdx"))
    .sort();

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const source = await readFile(path.join(contentDirectory, filename), "utf8");
      const authoredMetadata = validateProjectMetadataValue(
        extractMetadata(source, filename),
        filename,
        publicDirectory,
      );
      const metadata = await resolveProjectMetadataImages(
        authoredMetadata,
        filename,
        publicDirectory,
      );
      return { metadata, filename };
    }),
  );

  assertUniqueProjectSlugs(projects);
  process.stdout.write(`Validated ${projects.length} project files successfully.\n`);
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
