import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import {
  getAllProjectCategories,
  getAllPublishedProjects,
} from "@/lib/projects/get-projects";

export const metadata: Metadata = {
  title: "Projects | Hesham Ali",
  description:
    "Selected backend, integration, WordPress, automation, and e-commerce projects by Hesham Ali.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Hesham Ali",
    description:
      "Backend systems, integrations, WordPress platforms, automation, and e-commerce delivery.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const [projects, categories] = await Promise.all([
    getAllPublishedProjects(),
    getAllProjectCategories(),
  ]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-cream">
        <section className="section-shell min-h-[70vh]">
          <Container>
            <Reveal trigger="mount">
              <p className="eyebrow text-blue">Project archive</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
                Backend, WordPress, integration, and e-commerce work.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                Explore selected client-facing work across custom systems, existing-platform improvement, and complete digital delivery.
              </p>
            </Reveal>

            <div className="mt-12">
              <ProjectFilters projects={projects} categories={categories} />
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
