import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { Sho9CaseStudy } from "@/components/projects/Sho9CaseStudy";
import { personId, portfolio, siteUrl, websiteId } from "@/data/portfolio";
import {
  getAllPublishedProjects,
  getProjectBySlug,
  getProjectNavigation,
} from "@/lib/projects/get-projects";
import { socialImage } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const sho9Title = "Sho9 | مشروع متجر سلة — Hesham Ali";
const sho9Description =
  "دراسة حالة لمتجر Sho9 على منصة سلة توضح دور هشام علي في تصميم وتطوير المتجر من البداية للنهاية، وتخصيص الثيم باستخدام CSS وJavaScript، والمتابعة والصيانة المستمرة.";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getAllPublishedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const { metadata } = project;
  const path = `/projects/${metadata.slug}`;
  const sho9 = metadata.slug === "sho9";
  const projectTitle = sho9 ? sho9Title : `${metadata.title} | هشام علي`;
  const projectDescription = sho9 ? sho9Description : metadata.summary;
  const projectSocialImage = metadata.cover
    ? {
        url: new URL(metadata.cover.src, siteUrl).toString(),
        alt: metadata.cover.alt,
        width: metadata.cover.width,
        height: metadata.cover.height,
      }
    : {
        ...socialImage,
        url: new URL(socialImage.url, siteUrl).toString(),
      };

  return {
    title: sho9 ? { absolute: projectTitle } : metadata.title,
    description: projectDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: projectTitle,
      description: projectDescription,
      url: path,
      locale: "ar_SA",
      images: [projectSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description: projectDescription,
      images: [projectSocialImage.url],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const navigation = await getProjectNavigation(slug);
  const { Content, metadata } = project;
  const isSho9 = metadata.slug === "sho9";
  const arabic = /[\u0600-\u06ff]/.test(
    `${metadata.summary} ${metadata.overview}`,
  );
  const pageUrl = `${siteUrl}/projects/${metadata.slug}`;
  const projectName = isSho9 ? sho9Title : `${metadata.title} | هشام علي`;
  const projectDescription = isSho9 ? sho9Description : metadata.summary;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: projectName,
        description: projectDescription,
        inLanguage: arabic ? "ar" : "en",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": `${pageUrl}#creative-work` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#creative-work`,
        name: isSho9 ? "Sho9" : metadata.title,
        ...(isSho9 ? { alternateName: "شوب ستور — Sho9" } : {}),
        description: metadata.summary,
        url: pageUrl,
        author: { "@id": personId },
        inLanguage: arabic ? "ar" : "en",
        keywords: metadata.tags.join(", "),
        ...(metadata.cover ? { image: `${siteUrl}${metadata.cover.src}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "الأعمال",
            item: `${siteUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: metadata.shortTitle,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        {arabic ? "انتقل إلى المحتوى" : "Skip to main content"}
      </a>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="bg-cream"
        lang={arabic ? "ar" : "en"}
        dir={arabic ? "rtl" : "ltr"}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <article className="section-shell">
          <Container>
            <ProjectHero project={metadata} />

            {isSho9 ? (
              <Sho9CaseStudy project={metadata} />
            ) : (
              <div className="mx-auto mt-14 max-w-3xl">
                <Reveal>
                  <section aria-labelledby="project-overview">
                    <h2
                      id="project-overview"
                      className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
                    >
                      ملخص المشروع
                    </h2>
                    <p className="mt-4 leading-8 text-slate-700">
                      {metadata.overview}
                    </p>

                    <h3 className="mt-9 text-xl font-semibold tracking-tight text-navy">
                      المساهمات الأساسية
                    </h3>
                    <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                      {metadata.contributions.map((contribution) => (
                        <li key={contribution} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue"
                          />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>

                <Reveal>
                  <div className="mt-12 border-t border-navy/10 pt-1">
                    <Content />
                  </div>
                </Reveal>

                {metadata.gallery.length > 0 ? (
                  <Reveal>
                    <ProjectGallery images={metadata.gallery} />
                  </Reveal>
                ) : null}

                <Reveal>
                  <aside className="mt-14 rounded-[1.5rem] bg-navy p-6 text-cream sm:p-8">
                    <p className="eyebrow text-cyan">ناقش مشروعًا مشابهًا</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                      عندك مشروع تقني وتحتاج تناقش نطاق التنفيذ؟
                    </h2>
                    <a
                      href={portfolio.person.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={portfolio.person.whatsapp.ariaLabel}
                      className="motion-arrow-link button-primary mt-6"
                    >
                      {portfolio.person.whatsapp.label}
                      <span
                        aria-hidden="true"
                        className="motion-arrow inline-block"
                      >
                        ↗
                      </span>
                    </a>
                  </aside>
                </Reveal>

                <ProjectNavigation {...navigation} locale={arabic ? "ar" : "en"} />
              </div>
            )}

            {isSho9 ? (
              <div className="mx-auto mt-16 max-w-5xl">
                <ProjectNavigation {...navigation} locale="ar" />
              </div>
            ) : null}
          </Container>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
