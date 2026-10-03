import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { siteUrl, websiteId } from "@/data/portfolio";
import { getAllPublishedProjects } from "@/lib/projects/get-projects";
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
    locale: "ar_SA",
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
  const projects = await getAllPublishedProjects();
  const sho9 = projects.find((project) => project.slug === "sho9");
  if (!sho9) throw new Error("The published Sho9 project is required.");

  const technicalProjects = projects.filter((project) => project.slug !== "sho9");
  const technicalCategories = [
    ...new Set(technicalProjects.flatMap((project) => project.categories)),
  ].sort((a, b) => a.localeCompare(b));
  const pageUrl = `${siteUrl}/projects`;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: projectsTitle,
    description: projectsDescription,
    inLanguage: "ar",
    isPartOf: { "@id": websiteId },
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        انتقل إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <section className="section-shell">
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

            <section className="mt-14" aria-labelledby="salla-projects-heading">
              <Reveal>
                <p className="eyebrow text-blue">الدليل التجاري الأساسي</p>
                <h2
                  id="salla-projects-heading"
                  className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
                >
                  متاجر سلة والتجارة الإلكترونية
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                  مشروع Sho9 هو أوضح مثال حالي على تصميم وتطوير متجر سلة وتخصيص
                  الثيم مع المتابعة المستمرة.
                </p>
              </Reveal>
              <div className="mt-8 max-w-5xl">
                <ProjectCard project={sho9} />
              </div>
            </section>

            <section
              className="mt-20 border-t border-navy/10 pt-14"
              aria-labelledby="technical-projects-heading"
            >
              <Reveal>
                <p className="eyebrow text-blue">خبرة أوسع</p>
                <h2
                  id="technical-projects-heading"
                  className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
                >
                  خبرات تقنية أخرى
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                  مشروعات في WordPress وReact توضّح خبرة تقنية أوسع،
                  وتأتي بعد التخصص التجاري الأساسي في متاجر سلة.
                </p>
              </Reveal>
              <div className="mt-10">
                <ProjectFilters
                  projects={technicalProjects}
                  categories={technicalCategories}
                />
              </div>
            </section>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
