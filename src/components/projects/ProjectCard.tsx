import Image from "next/image";
import Link from "next/link";
import { AnimatedProjectCard } from "@/components/motion/AnimatedProjectCard";
import { ProjectPlaceholder } from "@/components/ui/project-placeholder";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function ProjectCard({
  project,
  eagerImage = false,
}: {
  project: ResolvedProjectMetadata;
  eagerImage?: boolean;
}) {
  const number = String(project.order).padStart(2, "0");
  const arabic = /[\u0600-\u06ff]/.test(
    `${project.title} ${project.summary}`,
  );

  return (
    <AnimatedProjectCard>
      <div className="flex h-full flex-col" lang={arabic ? "ar" : "en"} dir={arabic ? "rtl" : "ltr"}>
        <Link
          href={`/projects/${project.slug}`}
          className="project-card-media relative aspect-[16/10] overflow-hidden focus-visible:outline-offset-[-3px]"
          aria-label={`${arabic ? "عرض مشروع" : "View project"}: ${project.title}`}
        >
          {project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              loading={eagerImage ? "eager" : "lazy"}
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
        </Link>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="eyebrow text-blue">{project.role}</p>
          <h3 className="mt-3 text-2xl font-semibold text-navy">
            <Link href={`/projects/${project.slug}`} className="touch-link link-underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
          <div className="mt-auto pt-7">
            <Link
              href={`/projects/${project.slug}`}
              className="motion-arrow-link inline-flex min-h-11 items-center gap-2 font-semibold text-blue"
            >
              {arabic ? "تفاصيل المشروع" : "View project"}
              <span aria-hidden="true" className="motion-arrow inline-block">
                {arabic ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedProjectCard>
  );
}
