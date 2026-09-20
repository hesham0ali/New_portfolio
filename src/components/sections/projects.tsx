import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

const scope = ["تصميم الواجهة", "تطوير المتجر", "تخصيص الثيم", "صيانة مستمرة"];

export function Projects({ project }: { project: ResolvedProjectMetadata }) {
  return (
    <section id="work" className="section-shell scroll-mt-20 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="مشروع مميز"
          title="شوب ستور — Sho9"
          description="تصميم وتطوير متجر شوب ستور على منصة سلة من البداية للنهاية، مع متابعة وصيانة مستمرة للمتجر."
        />

        <article className="mt-10 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_22px_60px_rgba(10,25,47,0.07)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-72 overflow-hidden border-b border-navy/10 lg:min-h-[32rem] lg:border-b-0 lg:border-e">
              {project.cover ? (
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  style={{ objectPosition: project.cover.position ?? "top" }}
                  className="object-cover"
                />
              ) : (
                <div className="project-visual flex h-full min-h-72 flex-col justify-between p-7 sm:p-10 lg:min-h-[32rem]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-blue">Salla Store</span>
                    <span className="rounded-full border border-navy/15 bg-white/70 px-3 py-1.5 text-xs font-bold text-navy">
                      مشروع قائم
                    </span>
                  </div>
                  <div>
                    <p className="text-5xl font-extrabold text-navy sm:text-7xl" dir="ltr">
                      SHO9
                    </p>
                    <p className="mt-4 max-w-lg text-xl font-bold leading-8 text-navy">
                      تصميم وتطوير متجر سلة من البداية للنهاية
                    </p>
                    <p className="mt-3 text-sm text-slate-600" dir="ltr">
                      https://sho9.com
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <p className="eyebrow text-blue">نطاق العمل</p>
              <h3 className="mt-4 text-3xl font-extrabold text-navy">
                تصميم، تطوير، ومتابعة مستمرة
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                دوري في المشروع شمل تصميم وتطوير المتجر بالكامل، ثم متابعة صيانته بشكل مستمر.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="نطاق العمل في المشروع">
                {scope.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-navy/12 bg-mist px-3 py-2 text-sm font-bold text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={project.links.live ?? "https://sho9.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  زيارة المتجر
                  <span aria-hidden="true">↗</span>
                </a>
                <Link href={`/projects/${project.slug}`} className="button-secondary">
                  تفاصيل المشروع
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
