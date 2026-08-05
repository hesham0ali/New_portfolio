import type {
  ProjectMetadata,
  ResolvedProjectMetadata,
} from "./project-types";

export function validateProjectMetadataValue(
  value: unknown,
  filename: string,
  publicDirectory: string,
): ProjectMetadata;

export function assertUniqueProjectSlugs(
  projects: Array<{ metadata: { slug: string }; filename: string }>,
): void;

export function resolveProjectMetadataImages(
  metadata: ProjectMetadata,
  filename: string,
  publicDirectory: string,
): Promise<ResolvedProjectMetadata>;
