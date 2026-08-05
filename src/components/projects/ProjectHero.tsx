import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { ProjectPlaceholder } from "@/components/ui/project-placeholder";
import { TagList } from "@/components/ui/tag-list";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function ProjectHero({ project }: { project: ResolvedProjectMetadata }) {
  return (
    <header>
      <Link href="/projects" className="link-underline font-semibold text-blue">
        ← Back to Projects
      </Link>

      <Stagger trigger="mount" delay={0.03}>
        <StaggerItem>
          <p className="eyebrow mt-10 text-blue">{project.category}</p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
            {project.title}
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            {project.summary}
          </p>
        </StaggerItem>
        <StaggerItem>
          <dl className="mt-8 grid gap-4 border-y border-navy/10 py-6 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-slate-500">Role</dt>
              <dd className="mt-2 font-semibold text-navy">{project.role}</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate-500">Year</dt>
              <dd className="mt-2 font-semibold text-navy">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate-500">Categories</dt>
              <dd className="mt-2 font-semibold text-navy">
                {project.categories.join(" · ")}
              </dd>
            </div>
          </dl>
        </StaggerItem>
      </Stagger>

      <Reveal trigger="mount" delay={0.28}>
        <div className="mt-8">
          {project.cover ? (
            <div
              className="relative overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white"
              style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1120px"
                style={{ objectPosition: project.cover.position ?? "center" }}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white">
              <ProjectPlaceholder
                number={String(project.order).padStart(2, "0")}
                category={project.category}
                title={project.title}
              />
            </div>
          )}
        </div>
      </Reveal>

      <Reveal trigger="mount" delay={0.34}>
        <div className="mt-6">
          <TagList items={project.tags} />
        </div>
      </Reveal>

      {project.links.live || project.links.github ? (
        <Reveal trigger="mount" delay={0.38}>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                View Live Website
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                View on GitHub
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </Reveal>
      ) : null}
    </header>
  );
}
