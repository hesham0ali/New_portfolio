import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function WorkingStyle() {
  return (
    <section className="section-shell bg-mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How I Approach Work"
            title="Understand clearly. Build practically. Validate carefully."
          />
        </Reveal>

        <Stagger as="ol" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.principles.map((principle) => (
            <StaggerItem key={principle.number} as="li" className="motion-card-interaction rounded-[1.25rem] border border-navy/10 bg-white p-6">
              <span className="font-mono text-sm font-semibold text-blue">{principle.number}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-navy">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
