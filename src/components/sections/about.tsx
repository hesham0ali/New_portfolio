import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 bg-cream">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading eyebrow="About Me" title={portfolio.about.heading} />
            <div className="space-y-5 border-t border-navy/15 pt-7 text-base leading-8 text-slate-700 lg:mt-9">
              {portfolio.about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-lg font-medium text-navy" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
