import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { ComponentType } from "react";
import {
  assertUniqueProjectSlugs,
  resolveProjectMetadataImages,
  validateProjectMetadata,
} from "./project-schema";
import type {
  ProjectModule,
  ProjectNavigation,
  ResolvedProjectMetadata,
} from "./project-types";

type RawProjectModule = {
  default: ComponentType;
  metadata: unknown;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");
const publicDirectory = path.join(process.cwd(), "public");

function sortProjects(projects: ProjectModule[]) {
  return projects.sort(
    (a, b) =>
      a.metadata.order - b.metadata.order ||
      b.metadata.year - a.metadata.year ||
      a.metadata.title.localeCompare(b.metadata.title),
  );
}

const loadProjects = cache(async (): Promise<ProjectModule[]> => {
  const filenames = (await readdir(projectsDirectory))
    .filter((filename) => filename.endsWith(".mdx"))
    .sort();

  const projects = await Promise.all(
    filenames.map(async (filename): Promise<ProjectModule> => {
      const project = (await import(
        `../../../content/projects/${filename}`
      )) as RawProjectModule;

      if (typeof project.default !== "function") {
        throw new Error(
          `[content/projects/${filename}] Missing a default MDX content export`,
        );
      }

      const authoredMetadata = validateProjectMetadata(
        project.metadata,
        filename,
        publicDirectory,
      );
      const metadata = await resolveProjectMetadataImages(
        authoredMetadata,
        filename,
        publicDirectory,
      );

      return {
        metadata,
        Content: project.default,
        filename,
      };
    }),
  );

  assertUniqueProjectSlugs(projects);

  return sortProjects(projects);
});

async function publishedProjects() {
  const projects = await loadProjects();
  return projects.filter((project) => project.metadata.status === "published");
}

export async function getAllPublishedProjects(): Promise<ResolvedProjectMetadata[]> {
  return (await publishedProjects()).map((project) => project.metadata);
}

export async function getFeaturedProjects(): Promise<ResolvedProjectMetadata[]> {
  return (await publishedProjects())
    .filter((project) => project.metadata.featured)
    .slice(0, 4)
    .map((project) => project.metadata);
}

export async function getAllProjectCategories(): Promise<string[]> {
  const projects = await publishedProjects();
  return [...new Set(projects.flatMap((project) => project.metadata.categories))]
    .sort((a, b) => a.localeCompare(b));
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectModule | null> {
  const projects = await publishedProjects();
  return projects.find((project) => project.metadata.slug === slug) ?? null;
}

export async function getProjectNavigation(
  slug: string,
): Promise<ProjectNavigation> {
  const projects = await publishedProjects();
  const index = projects.findIndex((project) => project.metadata.slug === slug);

  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[index - 1]?.metadata ?? null,
    next: projects[index + 1]?.metadata ?? null,
  };
}
