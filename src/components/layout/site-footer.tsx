import { Container } from "./container";
import { portfolio } from "@/data/portfolio";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy py-8 text-slate-300">
      <Container className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-3">
          <SiteLogo size="footer" />
          <p>
            © 2026 Hesham Ali. Software Engineer focused on backend systems,
            WordPress, integrations, and e-commerce.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href={`mailto:${portfolio.person.email}`}
            className="link-underline w-fit text-cream"
          >
            {portfolio.person.email}
          </a>
          <a href="#top" className="link-underline w-fit text-cream">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
