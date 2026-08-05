import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function CommerceSpotlight() {
  return (
    <section className="section-shell overflow-hidden bg-navy text-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WordPress & E-commerce"
            title="From custom business logic to complete online store delivery."
            description="My work covers both custom WordPress engineering and complete Salla client delivery."
            inverse
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/15 lg:grid-cols-2">
          {portfolio.spotlight.map((item) => (
            <StaggerItem key={item.title} as="article" className="bg-navy-light p-6 sm:p-8 lg:p-10">
              <p className="eyebrow text-cyan">{item.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">{item.description}</p>
              <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                {item.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-sm leading-6 text-slate-200">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                    {capability}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xl font-medium leading-8">
              Need a custom WordPress feature or a complete e-commerce store?
            </p>
            <a
              href={portfolio.person.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuss your project with Hesham on WhatsApp (opens in a new tab)"
              className="button-primary shrink-0"
            >
              Discuss Your Project
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
