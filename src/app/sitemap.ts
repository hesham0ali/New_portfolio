import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";
import { getAllPublishedProjects } from "@/lib/projects/get-projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllPublishedProjects();

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/salla-store-design`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
