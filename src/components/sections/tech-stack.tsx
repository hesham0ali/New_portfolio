import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function TechStack() {
  return (
    <section className="section-shell bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tools & Technologies"
            title="A practical stack for connected business systems."
            description="Grouped by the work they support—not as a list of buzzwords."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.stack.map((group) => (
              <article key={group.title} className="rounded-[1.25rem] border border-navy/10 bg-white p-6">
                <h3 className="text-lg font-semibold tracking-tight text-navy">{group.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-px w-3 shrink-0 bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
