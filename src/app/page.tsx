import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { HomeFaq } from "@/components/sections/home-faq";
import { Projects } from "@/components/sections/projects";
import { ServiceCta } from "@/components/sections/service-cta";
import {
  getAllPublishedProjects,
  getProjectBySlug,
} from "@/lib/projects/get-projects";

export default async function Home() {
  const [sho9, allProjects] = await Promise.all([
    getProjectBySlug("sho9"),
    getAllPublishedProjects(),
  ]);
  if (!sho9) throw new Error("The published Sho9 project is required.");
  const additionalSallaProjects = allProjects.filter(
    (project) =>
      project.slug !== "sho9" && project.categories.includes("Salla"),
  );

  return (
    <>
      <a href="#main-content" className="skip-link">
        انتقل إلى المحتوى
      </a>
      <SiteHeader homePage />
      <main id="main-content" tabIndex={-1}>
        <Hero project={sho9.metadata} />
        <Expertise />
        <Projects
          project={sho9.metadata}
          additionalProjects={additionalSallaProjects}
        />
        <HomeFaq />
        <ServiceCta />
      </main>
      <SiteFooter />
    </>
  );
}
