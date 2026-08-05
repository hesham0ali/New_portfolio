import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";

export function Education() {
  const { education } = portfolio;

  return (
    <section className="bg-cream pb-20 sm:pb-24 lg:pb-32">
      <Container>
        <Reveal>
        <div className="grid gap-7 border-y border-navy/15 py-9 lg:grid-cols-[0.45fr_1.55fr] lg:items-start lg:gap-14">
          <p className="eyebrow text-blue">Education</p>
          <div className="grid gap-6 md:grid-cols-[1fr_0.85fr] md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-3xl">
                {education.degree}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{education.institution}</p>
              <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-blue">
                {education.graduation}
              </p>
            </div>
            <p className="leading-7 text-slate-600">{education.description}</p>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
