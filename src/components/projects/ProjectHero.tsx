import Image from "next/image";
import Link from "next/link";
import { ProjectPlaceholder } from "@/components/ui/project-placeholder";
import { TagList } from "@/components/ui/tag-list";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function ProjectHero({ project }: { project: ResolvedProjectMetadata }) {
  const arabic = /[\u0600-\u06ff]/.test(
    `${project.title} ${project.summary}`,
  );
  const isSho9 = project.slug === "sho9";

  return (
    <header lang={arabic ? "ar" : "en"} dir={arabic ? "rtl" : "ltr"}>
      <nav
        aria-label={arabic ? "مسار الصفحة" : "Breadcrumb"}
        className="flex flex-wrap items-center gap-2 text-sm text-slate-600"
      >
        <Link href="/" className="link-underline font-bold text-blue">
          {arabic ? "الرئيسية" : "Home"}
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/projects" className="link-underline font-bold text-blue">
          {arabic ? "الأعمال" : "Projects"}
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.shortTitle}</span>
      </nav>

      <p className="eyebrow mt-10 text-blue">
        {isSho9 ? "مشروع على منصة سلة" : project.category}
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-[1.3] font-extrabold text-navy sm:text-6xl">
        {isSho9 ? project.shortTitle : project.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
        {project.summary}
      </p>

      <dl className="mt-8 grid gap-5 border-y border-navy/10 py-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="eyebrow text-slate-500">{arabic ? "الدور" : "Role"}</dt>
          <dd className="mt-2 font-bold text-navy">{project.role}</dd>
        </div>
        {isSho9 ? (
          <div>
            <dt className="eyebrow text-slate-500">المنصة</dt>
            <dd className="mt-2 font-bold text-navy" dir="ltr">
              Salla
            </dd>
          </div>
        ) : (
          <div>
            <dt className="eyebrow text-slate-500">
              {arabic ? "السنة" : "Year"}
            </dt>
            <dd className="mt-2 font-bold text-navy" dir="ltr">
              {project.year}
            </dd>
          </div>
        )}
        <div>
          <dt className="eyebrow text-slate-500">
            {isSho9 ? "الحالة" : arabic ? "التصنيف" : "Categories"}
          </dt>
          <dd className="mt-2 font-bold text-navy">
            {isSho9 ? "متجر قائم" : project.categories.join(" · ")}
          </dd>
        </div>
        {project.maintenance ? (
          <div>
            <dt className="eyebrow text-slate-500">المتابعة</dt>
            <dd className="mt-2 font-bold text-navy">{project.maintenance}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white">
        {project.cover ? (
          <div
            className="relative"
            style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
          >
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1120px"
              style={{ objectPosition: project.cover.position ?? "top" }}
              className="object-cover"
            />
          </div>
        ) : project.slug === "sho9" ? (
          <div className="project-visual flex min-h-72 flex-col justify-between p-7 sm:min-h-96 sm:p-10">
            <span className="eyebrow text-blue">مشروع متجر سلة</span>
            <div>
              <p
                className="text-5xl font-extrabold text-navy sm:text-7xl"
                dir="ltr"
              >
                SHO9
              </p>
              <p className="mt-4 text-xl font-bold text-navy">
                تصميم وتطوير متجر سلة من البداية للنهاية
              </p>
              <p className="mt-2 text-sm text-slate-600" dir="ltr">
                sho9.com
              </p>
            </div>
          </div>
        ) : (
          <ProjectPlaceholder
            number={String(project.order).padStart(2, "0")}
            category={project.category}
            title={project.title}
          />
        )}
      </div>

      <div className="mt-6">
        <TagList items={project.tags} label={arabic ? "التقنيات" : "Technologies"} />
      </div>

      {project.links.live || project.links.github ? (
        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {arabic ? "زيارة المتجر" : "View live website"}
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
              {arabic ? "عرض الكود" : "View on GitHub"}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
