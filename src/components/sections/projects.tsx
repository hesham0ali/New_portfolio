import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/lib/projects/get-projects";

export async function Projects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="section-shell scroll-mt-24 bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Connected systems, custom platforms, and practical delivery."
            description="A concise selection across CRM systems, backend integrations, WordPress Multisite, Salla e-commerce, and existing-platform improvement."
          />
        </Reveal>

        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link href="/projects" className="button-secondary">
              View All Projects
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
