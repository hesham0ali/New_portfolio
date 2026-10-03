import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

export function Hero({ project }: { project: ResolvedProjectMetadata }) {
  return (
    <section id="home" className="hero-grid scroll-mt-20 overflow-hidden bg-navy text-cream">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.75fr)] lg:gap-16">
          <Reveal trigger="mount" distance={12}>
            <p className="eyebrow text-cyan">مصمم ومطور متاجر سلة</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.38] font-semibold sm:text-5xl lg:text-[3.65rem] lg:leading-[1.3]">
              {portfolio.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {portfolio.hero.description}
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              {portfolio.hero.supportingText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={portfolio.person.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.person.whatsapp.ariaLabel}
                className="button-primary"
              >
                {portfolio.person.whatsapp.label}
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#work" className="button-secondary-dark">
                شوف شغلي
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.08} distance={12}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative block overflow-hidden rounded-[1.15rem] border border-white/15 bg-navy-light transition-colors duration-200 hover:border-cyan/35 focus-visible:outline-offset-4"
              aria-label="عرض مشروع شوب ستور"
            >
            {project.cover ? (
              <div
                className="relative aspect-[4/3]"
                style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
              >
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectPosition: project.cover.position ?? "top" }}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transform-none"
                />
              </div>
            ) : (
              <div className="project-visual flex min-h-72 w-full flex-col justify-between p-7 text-navy sm:aspect-[4/3] sm:p-9">
                <div className="flex items-start justify-between gap-5">
                  <span className="eyebrow text-blue">مشروع حقيقي على سلة</span>
                  <span className="size-3 rounded-full bg-cyan ring-4 ring-cyan/25" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-4xl font-extrabold sm:text-5xl" dir="ltr">
                    SHO9
                  </p>
                  <p className="mt-3 text-lg font-bold">تصميم وتطوير من البداية للنهاية</p>
                  <p className="mt-2 text-sm text-slate-600" dir="ltr">
                    sho9.com
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm font-medium sm:px-6">
              <span>شوب ستور — Sho9</span>
              <span aria-hidden="true" className="motion-arrow text-cyan">↖</span>
            </div>
            </Link>
          </Reveal>
        </div>

        <dl className="mt-12 grid border-y border-white/15 sm:grid-cols-3 lg:mt-16">
          {portfolio.proof.map((item) => (
            <div
              key={item.value}
              className="border-b border-white/15 py-5 last:border-b-0 sm:border-b-0 sm:border-s sm:px-6 sm:first:border-s-0 sm:first:pe-0 sm:last:ps-0"
            >
              <dt className="text-sm leading-6 text-slate-300">{item.label}</dt>
              <dd className="mt-1 font-medium text-cyan" dir="auto">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
