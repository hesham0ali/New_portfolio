import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { portfolio, siteUrl, websiteId } from "@/data/portfolio";
import { getAllPublishedProjects } from "@/lib/projects/get-projects";
import { socialImage, twitterImageUrl } from "@/lib/seo";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const projectsTitle = "أعمال هشام علي | مطور سلة";
const projectsDescription =
  "أعمال مختارة لهشام علي في تصميم وتجهيز وتطوير متاجر سلة.";

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
  const sallaProjects = projects.filter((project) =>
    project.categories.includes("Salla"),
  );
  if (sallaProjects.length === 0) {
    throw new Error("At least one published Salla project is required.");
  }

  const technicalProjects = projects.filter(
    (project) => !project.categories.includes("Salla"),
  );
  const technicalCategories = [
    ...new Set(technicalProjects.flatMap((project) => project.categories)),
  ].sort((a, b) => a.localeCompare(b));
  const pageUrl = `${siteUrl}/projects`;
  const projectsInquiryUrl = createWhatsAppServiceUrl(
    portfolio.person.whatsapp.url,
    `مرحبًا هشام، وصلت من صفحة أعمالك وأرغب في مناقشة متجري على سلة.

رابط المتجر إن وجد:
المطلوب:
`,
  );
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
                مشروعات مختارة لمتاجر على منصة سلة.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                استعرض نماذج من العمل ونطاق المساهمة في كل مشروع بدون مبالغة في الملكية أو النتائج.
              </p>
            </Reveal>

            <section className="mt-14" aria-labelledby="salla-projects-heading">
              <Reveal>
                <p className="eyebrow text-blue">متاجر منفذة على سلة</p>
                <h2
                  id="salla-projects-heading"
                  className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
                >
                  متاجر سلة والتجارة الإلكترونية
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                  نماذج حقيقية لمتاجر سلة في مجالات الألعاب والمنتجات الرقمية،
                  والإلكترونيات والاتصالات، والمنتجات السعودية.
                </p>
              </Reveal>
              <div className="mt-8">
                <ProjectGrid projects={sallaProjects} eagerFirstImage />
              </div>
            </section>

            {technicalProjects.length > 0 ? (
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
            ) : null}

            <section className="mt-16 border-t border-navy/10 pt-10" aria-labelledby="projects-cta-heading">
              <div className="flex flex-col gap-5 rounded-[1.25rem] bg-navy p-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="eyebrow text-cyan">الخطوة التالية</p>
                  <h2 id="projects-cta-heading" className="mt-3 text-2xl font-semibold leading-[1.45] sm:text-3xl">
                    عجبك مستوى التنفيذ وعايز نراجع متجرك؟
                  </h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                    ابعت رابط متجر سلة والمطلوب تغييره أو تنفيذه، ونحدد الخدمة والنطاق المناسبين.
                  </p>
                </div>
                <a
                  href={projectsInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary shrink-0"
                  aria-label="أرسل رابط متجرك بعد مشاهدة الأعمال عبر واتساب — يفتح في نافذة جديدة"
                >
                  أرسل رابط متجرك
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
