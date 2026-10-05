import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServicePackages } from "@/components/sections/service-packages";
import { ServiceCard } from "@/components/services/service-card";
import { portfolio, siteUrl, websiteId } from "@/data/portfolio";
import {
  primaryServices,
  serviceCapabilities,
  uncertainServiceMessage,
} from "@/data/service-model";
import {
  servicesDescription,
  servicesTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const pagePath = "/services";
const pageUrl = `${siteUrl}${pagePath}`;
const socialTitle = `${servicesTitle} | هشام علي`;

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description: servicesDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: socialTitle,
    description: servicesDescription,
    locale: "ar_SA",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: servicesDescription,
    images: [twitterImageUrl],
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: socialTitle,
        description: servicesDescription,
        inLanguage: "ar",
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: primaryServices.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": `${siteUrl}/#person` },
              ...(service.href
                ? { url: new URL(service.href.split("#")[0], siteUrl).toString() }
                : {}),
            },
          })),
        },
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
            name: "الخدمات",
            item: pageUrl,
          },
        ],
      },
    ],
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
            __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className="hero-grid overflow-hidden bg-navy text-cream">
          <Container className="py-14 sm:py-20 lg:py-24">
            <nav aria-label="مسار الصفحة" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="touch-link link-underline hover:text-cream">
                الرئيسية
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-300">
                الخدمات
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">دليل اختيار الخدمة</p>
                <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  خدمات متاجر سلة حسب احتياج مشروعك
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  أعمل عبر مسارين واضحين: تصميم وتجهيز المتجر، أو تخصيص وتطوير الثيم. وتدخل بقية الاحتياجات كقدرات ضمن المسار الأنسب.
                </p>
              </div>

              <aside className="rounded-[1.25rem] border border-white/15 bg-white/5 p-6 sm:p-7">
                <p className="eyebrow text-cyan">ابدأ من احتياجك</p>
                <p className="mt-4 leading-8 text-slate-300">
                  هل تحتاج إلى تنظيم شكل وتجربة المتجر، أم إلى تعديل تقني داخل الثيم؟ بعد اختيار المسار نحدد الباقة أو نطاق التنفيذ.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="services-list-heading">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow text-blue">الخدمتان الأساسيتان</p>
              <h2 id="services-list-heading" className="mt-4 text-3xl font-semibold leading-[1.4] text-navy sm:text-4xl">
                ما المشكلة التي تريد حلها في متجرك؟
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                اختر المسار الأقرب للمشكلة الحالية. القدرات المكملة والباقات تظهر بعده ولا تمثل خدمات متنافسة.
              </p>
            </div>

            <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
              {primaryServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  inquiryUrl={createWhatsAppServiceUrl(
                    portfolio.person.whatsapp.url,
                    service.inquiryTemplate,
                  )}
                />
              ))}
            </div>

            <section className="mt-14 border-t border-navy/10 pt-10" aria-labelledby="capabilities-heading">
              <div className="max-w-3xl">
                <p className="eyebrow text-blue">قدرات مكملة</p>
                <h2 id="capabilities-heading" className="mt-4 text-2xl font-semibold leading-[1.45] text-navy sm:text-3xl">
                  تُضاف تحت الخدمة المناسبة حسب احتياج المشروع
                </h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {serviceCapabilities.map((capability) => (
                  <article key={capability.title} className="rounded-[1.1rem] border border-navy/10 bg-white p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-navy">{capability.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{capability.description}</p>
                    <Link href={capability.parentHref} className="touch-link motion-arrow-link mt-4 gap-2 text-sm font-semibold text-blue">
                      {capability.parentLabel}
                      <span aria-hidden="true" className="motion-arrow">←</span>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <aside className="mt-10 flex flex-col gap-4 rounded-[1.1rem] border border-blue/20 bg-blue/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="font-semibold text-navy">مش متأكد أنهي خدمة مناسبة؟</p>
                <p className="mt-2 leading-7 text-slate-600">ابعت رابط متجرك والمطلوب، وأنا أحدد معاك المسار الأنسب.</p>
              </div>
              <a
                href={createWhatsAppServiceUrl(portfolio.person.whatsapp.url, uncertainServiceMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary shrink-0"
                aria-label="أرسل رابط متجرك والمطلوب عبر واتساب — يفتح في نافذة جديدة"
              >
                ساعدني أختار
                <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </Container>
        </section>

        <ServicePackages />
      </main>
      <SiteFooter />
    </>
  );
}
