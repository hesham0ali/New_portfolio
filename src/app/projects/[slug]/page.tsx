import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { portfolio, siteUrl } from "@/data/portfolio";
import {
  getAllPublishedProjects,
  getProjectBySlug,
  getProjectNavigation,
} from "@/lib/projects/get-projects";
import { socialImage } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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
  const projectTitle = `${metadata.title} | هشام علي`;
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
    title: metadata.title,
    description: metadata.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: projectTitle,
      description: metadata.summary,
      url: path,
      images: [projectSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description: metadata.summary,
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
  const arabic = metadata.slug === "sho9";
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: metadata.title,
    description: metadata.summary,
    url: `${siteUrl}/projects/${metadata.slug}`,
    author: { "@type": "Person", name: portfolio.person.name },
    dateCreated: String(metadata.year),
    keywords: metadata.tags.join(", "),
    ...(metadata.cover
      ? { image: `${siteUrl}${metadata.cover.src}` }
      : { image: new URL(socialImage.url, siteUrl).toString() }),
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

            <div className="mx-auto mt-14 max-w-3xl">
              <Reveal>
              <section aria-labelledby="project-overview">
                <h2 id="project-overview" className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  {arabic ? "ملخص المشروع" : "Project overview"}
                </h2>
                <p className="mt-4 leading-8 text-slate-700">{metadata.overview}</p>

                <h3 className="mt-9 text-xl font-semibold tracking-tight text-navy">
                  {arabic ? "المساهمة الأساسية" : "Primary contributions"}
                </h3>
                <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                  {metadata.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
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
                <p className="eyebrow text-cyan">
                  {arabic ? "عندك متجر على سلة؟" : "Discuss a similar project"}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {arabic
                    ? "ابعتلي رابط متجرك وخليني أشوف إيه اللي ممكن نشتغل عليه."
                    : "Have a project you would like to discuss?"}
                </h2>
                <a
                  href={portfolio.person.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portfolio.person.whatsapp.ariaLabel}
                  className="motion-arrow-link button-primary mt-6"
                >
                  {portfolio.person.whatsapp.label}
                  <span aria-hidden="true" className="motion-arrow inline-block">
                    ↗
                  </span>
                </a>
              </aside>
              </Reveal>

              <ProjectNavigation {...navigation} locale={arabic ? "ar" : "en"} />
            </div>
          </Container>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
