import { portfolio } from "@/data/portfolio";
import { Container } from "./container";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  const { person } = portfolio;

  return (
    <footer className="border-t border-white/10 bg-navy py-8 text-slate-300">
      <Container className="flex flex-col gap-6 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SiteLogo size="footer" />
          <p className="mt-3 text-slate-300">مطور متاجر سلة</p>
          <p className="mt-1 text-xs text-slate-400" dir="ltr">
            Design &amp; Development for Salla Stores
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={person.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={person.whatsapp.ariaLabel}
            className="button-primary w-full sm:w-auto"
          >
            ناقش مشروعك
            <span aria-hidden="true">↗</span>
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={person.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-cream"
            >
              LinkedIn
            </a>
            <a
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-cream"
            >
              GitHub
            </a>
            <a href="#top" className="link-underline text-cream">
              للأعلى
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
