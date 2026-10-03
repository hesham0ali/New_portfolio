import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function WorkingStyle() {
  return (
    <section className="section-shell bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="طريقة الشغل"
            title="خطوات واضحة من المراجعة للتسليم."
          />
        </Reveal>

        <Reveal>
        <ol className="mt-10 grid border-y border-navy/15 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.principles.map((principle) => (
            <li
              key={principle.number}
              className="border-b border-navy/15 py-6 last:border-b-0 sm:border-b sm:border-s sm:px-6 sm:nth-[2n+1]:border-s-0 lg:border-b-0 lg:first:border-s-0"
            >
              <span className="font-mono text-sm font-medium text-blue" dir="ltr">
                {principle.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-navy">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600" dir="auto">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
        </Reveal>
      </Container>
    </section>
  );
}
