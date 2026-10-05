import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";
import { Container } from "./container";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  const { person } = portfolio;
  const footerInquiryUrl = createWhatsAppServiceUrl(
    person.whatsapp.url,
    `مرحبًا هشام، وصلت من موقعك وأرغب في مناقشة متجر على سلة.

رابط المتجر إن وجد:
المطلوب:
`,
  );

  return (
    <footer className="border-t border-white/10 bg-navy pt-8 pb-[calc(6rem+env(safe-area-inset-bottom))] text-slate-300">
      <Container className="grid gap-7 text-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <SiteLogo size="footer" />
          <p className="mt-3 text-slate-300">مطور متاجر سلة</p>
          <p className="mt-1 text-xs text-slate-400" dir="ltr">
            Design &amp; Development for Salla Stores
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <nav aria-label="روابط الموقع">
            <ul className="flex flex-wrap items-center gap-x-5">
              {[
                ["الرئيسية", "/"],
                ["الخدمات", "/services"],
                ["الأعمال", "/projects"],
                ["عني", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="touch-link link-underline text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={footerInquiryUrl}
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
              className="touch-link link-underline text-cream"
            >
              LinkedIn
            </a>
            <a
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-link link-underline text-cream"
            >
              GitHub
            </a>
            <a href="#top" className="touch-link link-underline text-cream">
              للأعلى
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
