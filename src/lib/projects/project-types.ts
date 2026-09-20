import type { ComponentType } from "react";

export type ProjectStatus = "draft" | "published";

export type ProjectLinks = {
  live?: string | null;
  github?: string | null;
};

export type ProjectImage = {
  file: string;
  alt: string;
  caption?: string;
  position?: string;
};

export type ResolvedProjectImage = Omit<ProjectImage, "file"> & {
  src: string;
  width: number;
  height: number;
};

export type ProjectMetadata = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  categories: string[];
  tags: string[];
  year: number;
  role: string;
  featured: boolean;
  order: number;
  status: ProjectStatus;
  summary: string;
  overview: string;
  contributions: string[];
  maintenance?: string | null;
  cover?: ProjectImage | null;
  links: ProjectLinks;
  gallery: ProjectImage[];
};

export type ResolvedProjectMetadata = Omit<
  ProjectMetadata,
  "cover" | "gallery"
> & {
  cover: ResolvedProjectImage | null;
  gallery: ResolvedProjectImage[];
};

export type ProjectModule = {
  metadata: ResolvedProjectMetadata;
  Content: ComponentType;
  filename: string;
};

export type ProjectNavigation = {
  previous: ResolvedProjectMetadata | null;
  next: ResolvedProjectMetadata | null;
};

export function defineProjectMetadata(
  metadata: ProjectMetadata,
): ProjectMetadata {
  return metadata;
}
