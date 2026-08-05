import { ProjectCard } from "./ProjectCard";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function ProjectGrid({ projects }: { projects: ResolvedProjectMetadata[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-navy/20 bg-white p-8 text-center text-slate-600">
        No projects match this category.
      </div>
    );
  }

  return (
    <Stagger className="grid items-stretch gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <StaggerItem key={project.slug} className="h-full">
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
