import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { person, contact } = portfolio;

  return (
    <section id="contact" className="contact-grid scroll-mt-20 bg-blue py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-white">جاهز نبدأ؟</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.4] sm:text-5xl lg:text-[3.5rem]">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
            {contact.description}
          </p>
          <a
            href={person.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={person.whatsapp.ariaLabel}
            className="button-contact-primary mt-8 min-w-56"
          >
            {person.whatsapp.label}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="mt-7 flex justify-center gap-5 text-sm font-semibold">
            <a
              href={person.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white"
            >
              LinkedIn
            </a>
            <a
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
