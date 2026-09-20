import Link from "next/link";
import type { ProjectNavigation as Navigation } from "@/lib/projects/project-types";

export function ProjectNavigation({
  previous,
  next,
  locale = "en",
}: Navigation & { locale?: "ar" | "en" }) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label={locale === "ar" ? "التنقل بين المشاريع" : "Project navigation"}
      className="mt-16 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="project-navigation-card rounded-[1.25rem] border border-navy/10 bg-white p-5 transition-colors hover:border-blue/30"
        >
          <span className="eyebrow text-slate-500">
            <span aria-hidden="true" className="motion-arrow inline-block">
              {locale === "ar" ? "→" : "←"}
            </span>{" "}
            {locale === "ar" ? "المشروع السابق" : "Previous project"}
          </span>
          <span className="mt-2 block font-semibold text-navy">{previous.shortTitle}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="project-navigation-card rounded-[1.25rem] border border-navy/10 bg-white p-5 text-start transition-colors hover:border-blue/30 sm:text-end"
        >
          <span className="eyebrow text-slate-500">
            {locale === "ar" ? "المشروع التالي" : "Next project"}{" "}
            <span aria-hidden="true" className="motion-arrow inline-block">
              {locale === "ar" ? "←" : "→"}
            </span>
          </span>
          <span className="mt-2 block font-semibold text-navy">{next.shortTitle}</span>
        </Link>
      ) : null}
    </nav>
  );
}
