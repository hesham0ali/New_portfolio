import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { CommerceSpotlight } from "@/components/sections/commerce-spotlight";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { WorkingStyle } from "@/components/sections/working-style";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader homePage />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <CommerceSpotlight />
        <Experience />
        <TechStack />
        <WorkingStyle />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
