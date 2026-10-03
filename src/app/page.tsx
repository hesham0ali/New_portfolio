import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { HomeFaq } from "@/components/sections/home-faq";
import { Projects } from "@/components/sections/projects";
import { ServiceCta } from "@/components/sections/service-cta";
import { ServicePackages } from "@/components/sections/service-packages";
import { Testimonials } from "@/components/sections/testimonials";
import { getProjectBySlug } from "@/lib/projects/get-projects";

export default async function Home() {
  const sho9 = await getProjectBySlug("sho9");
  if (!sho9) throw new Error("The published Sho9 project is required.");

  return (
    <>
      <a href="#main-content" className="skip-link">
        انتقل إلى المحتوى
      </a>
      <SiteHeader homePage />
      <main id="main-content" tabIndex={-1}>
        <Hero project={sho9.metadata} />
        <ServicePackages compact />
        <Projects project={sho9.metadata} />
        <Expertise />
        <Testimonials />
        <HomeFaq />
        <ServiceCta />
      </main>
      <SiteFooter />
    </>
  );
}
