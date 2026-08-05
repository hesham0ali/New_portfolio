import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { person, contact } = portfolio;

  return (
    <section id="contact" className="contact-grid scroll-mt-24 bg-blue py-20 text-white sm:py-24 lg:py-28">
      <Container className="relative">
        <Reveal>
        <p className="eyebrow text-white/75">Contact</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{contact.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={person.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={person.whatsapp.ariaLabel}
              className="button-contact-primary"
            >
              {person.whatsapp.label}
              <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${person.email}`} className="button-contact-secondary">
              Send Me an Email
              <span aria-hidden="true">↗</span>
            </a>
            <a href={person.linkedInUrl} className="button-contact-secondary">
              Connect on LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
            {person.githubUrl ? (
              <a href={person.githubUrl} className="button-contact-secondary">
                View GitHub
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <a href={person.cvUrl} download className="button-contact-utility">
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/25 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${person.email}`} className="link-underline w-fit text-white">
            {person.email}
          </a>
          <p>{person.location}</p>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
