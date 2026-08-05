import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-shell scroll-mt-24 bg-mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Client-facing software delivery across connected platforms."
          />
        </Reveal>

        <Reveal>
        <article className="mt-12 rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow text-blue">{experience.period}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-navy">
                {experience.role}
              </h3>
              <p className="mt-2 text-lg font-medium text-blue">{experience.company}</p>
              <p className="mt-5 leading-7 text-slate-600">{experience.description}</p>
            </div>

            <div className="border-t border-navy/10 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className="eyebrow text-blue">Responsibilities</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 border-t border-navy/10 pt-7">
            <p className="eyebrow mb-4 text-blue">Technology environment</p>
            <TagList items={experience.environment} />
          </div>
        </article>
        </Reveal>
      </Container>
    </section>
  );
}
