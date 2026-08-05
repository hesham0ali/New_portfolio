import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="expertise" className="section-shell scroll-mt-24 bg-mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What I Work On"
            title="Practical software solutions across backend, WordPress, integrations, and e-commerce."
            description="Four connected areas of practice, grounded in real business workflows and client delivery."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 md:grid-cols-2">
          {portfolio.expertise.map((item) => (
            <StaggerItem key={item.number} as="article" className="motion-card-interaction bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-5">
                <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.035em] text-navy sm:text-3xl">
                  {item.title}
                </h3>
                <span className="font-mono text-sm font-semibold text-blue">{item.number}</span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
              <ul className="mt-7 grid gap-2 border-t border-navy/10 pt-6 sm:grid-cols-2">
                {item.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-2 text-sm leading-6 text-slate-700">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-blue" />
                    {capability}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
