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
import { socialImage, twitterImageUrl } from "@/lib/seo";

const projectsTitle = "أعمال هشام علي | مطور سلة";
const projectsDescription =
  "أعمال مختارة لهشام علي تشمل متاجر سلة ومشروعات تقنية أخرى.";

export const metadata: Metadata = {
  title: "أعمال مختارة",
  description: projectsDescription,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    title: projectsTitle,
    description: projectsDescription,
    url: "/projects",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: projectsTitle,
    description: projectsDescription,
    images: [twitterImageUrl],
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
        انتقل إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-cream">
        <section className="section-shell min-h-[70vh]">
          <Container>
            <Reveal trigger="mount">
              <p className="eyebrow text-blue">أعمال مختارة</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.3] text-navy sm:text-6xl">
                مشروعات متاجر سلة وأعمال تقنية أخرى.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                استعرض نماذج من العمل ونطاق المساهمة في كل مشروع بدون مبالغة في الملكية أو النتائج.
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
