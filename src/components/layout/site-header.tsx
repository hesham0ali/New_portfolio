import { portfolio } from "@/data/portfolio";
import { ActiveNavigation } from "@/components/motion/ActiveNavigation";
import { Container } from "./container";
import { MobileNavigation } from "./mobile-navigation";
import { SiteLogo } from "./site-logo";

export function SiteHeader({ homePage = false }: { homePage?: boolean }) {
  const navigation = portfolio.navigation.map((item) => ({
    ...item,
    href: homePage ? item.href : `/${item.href}`,
  }));
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-cream backdrop-blur-md">
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <SiteLogo priority />

        <ActiveNavigation items={navigation} />

        <a
          href={portfolio.person.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={portfolio.person.whatsapp.ariaLabel}
          className="button-primary hidden shrink-0 lg:inline-flex"
        >
          {portfolio.person.whatsapp.label}
        </a>

        <MobileNavigation
          items={navigation}
          whatsapp={portfolio.person.whatsapp}
        />
      </Container>
    </header>
  );
}
