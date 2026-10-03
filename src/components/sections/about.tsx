import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";

export function About() {
  const { about, person } = portfolio;

  return (
    <section id="about" className="section-shell scroll-mt-20 bg-mist">
      <Container>
        <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow text-blue">عني</p>
            <h2 className="mt-4 text-4xl font-semibold text-navy">{about.heading}</h2>
            <p className="mt-3 text-lg font-medium text-blue">{about.paragraphs[0]}</p>
          </div>
          <div className="border-t border-navy/15 pt-6 lg:mt-8">
            <p className="max-w-3xl text-lg leading-9 text-slate-700">
              {about.paragraphs[1]}
            </p>
            <Link href="/about" className="button-secondary mt-7">
              اعرف أكتر عني
              <span aria-hidden="true">←</span>
            </Link>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
              <a
                href={person.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-blue"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href={person.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-blue"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
