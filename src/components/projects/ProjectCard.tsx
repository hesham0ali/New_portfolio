import Image from "next/image";
import Link from "next/link";
import { AnimatedProjectCard } from "@/components/motion/AnimatedProjectCard";
import { ProjectPlaceholder } from "@/components/ui/project-placeholder";
import { TagList } from "@/components/ui/tag-list";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function ProjectCard({ project }: { project: ResolvedProjectMetadata }) {
  const number = String(project.order).padStart(2, "0");

  return (
    <AnimatedProjectCard>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline-offset-[-3px]"
      >
        <div className="project-card-media relative aspect-[16/10] overflow-hidden">
          {project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectPosition: project.cover.position ?? "center" }}
              className="border-b border-navy/10 object-cover"
            />
          ) : (
            <ProjectPlaceholder
              number={number}
              category={project.category}
              title={project.title}
              className="h-full"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-navy transition-colors group-hover:text-blue group-focus-within:text-blue">
            {project.title}
          </h3>
          <p className="mt-3 font-medium leading-7 text-slate-800">
            {project.summary}
          </p>
          <p className="mt-4 leading-7 text-slate-600">{project.overview}</p>

          <div className="mt-6 border-t border-navy/10 pt-6">
            <p className="eyebrow text-blue">Primary contribution</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {project.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <TagList items={project.tags} />
          </div>

          <span className="link-underline mt-7 w-fit font-semibold text-blue">
            View project
            <span aria-hidden="true" className="project-card-arrow inline-block">
              ↗
            </span>
          </span>
        </div>
      </Link>
    </AnimatedProjectCard>
  );
}
