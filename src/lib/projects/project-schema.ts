import type { ProjectMetadata } from "./project-types";
import { validateProjectMetadataValue } from "./project-schema-core.mjs";

export function validateProjectMetadata(
  value: unknown,
  filename: string,
  publicDirectory: string,
): ProjectMetadata {
  return validateProjectMetadataValue(value, filename, publicDirectory);
}

export {
  assertUniqueProjectSlugs,
  resolveProjectMetadataImages,
} from "./project-schema-core.mjs";
