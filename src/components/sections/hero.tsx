import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero-grid scroll-mt-24 overflow-hidden bg-navy text-cream">
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.7fr)] lg:gap-20">
          <Stagger trigger="mount" delay={0.04}>
            <StaggerItem>
              <p className="eyebrow text-cyan">{portfolio.hero.eyebrow}</p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-[4.75rem]">
                {portfolio.hero.headline}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                  {portfolio.hero.description}
                </p>
                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  {portfolio.hero.supportingText}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#projects" className="button-primary">
                  View My Work
                </a>
                <a
                  href={portfolio.person.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portfolio.person.whatsapp.ariaLabel}
                  className="button-secondary-dark"
                >
                  {portfolio.person.whatsapp.label}
                </a>
                <a href={portfolio.person.cvUrl} download className="button-text-dark">
                  Download CV
                  <span aria-hidden="true">↘</span>
                </a>
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal trigger="mount" delay={0.28}>
            <aside className="border-l border-white/15 pl-6 sm:pl-8" aria-label="Professional focus">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                Current focus
              </p>
              <p className="mt-5 text-xl font-medium leading-8 text-cream">
                {portfolio.person.role}
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                <span className="inline-block size-2 rounded-full bg-cyan" aria-hidden="true" />
                {portfolio.person.location}
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal trigger="mount" delay={0.38}>
          <div className="mt-16 grid border-y border-white/15 sm:grid-cols-3 lg:mt-24">
            {portfolio.proof.map((item) => (
              <div
                key={item.value}
                className="border-b border-white/15 py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <p className="font-mono text-2xl font-semibold tracking-[-0.04em] text-cyan sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
