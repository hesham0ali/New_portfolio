import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceCard } from "@/components/services/service-card";
import { portfolio, siteUrl, websiteId } from "@/data/portfolio";
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
          itemListElement: portfolio.expertise.map((service, index) => ({
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
              <Link href="/" className="link-underline hover:text-cream">
                الرئيسية
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-300">
                الخدمات
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">مصمم ومطور متاجر سلة</p>
                <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  خدمات تصميم وتطوير متاجر سلة
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  أقدّم خدمات تصميم وتجهيز وتخصيص متاجر سلة، إلى جانب تطوير الثيمات والتكاملات والتحسينات التقنية للمتاجر الجديدة والقائمة.
                </p>
              </div>

              <aside className="rounded-[1.25rem] border border-white/15 bg-white/5 p-6 sm:p-7">
                <p className="eyebrow text-cyan">اختر ما يناسب متجرك</p>
                <p className="mt-4 leading-8 text-slate-300">
                  راجع نطاق كل خدمة، ثم أرسل تفاصيل مشروعك مباشرة عبر واتساب برسالة مهيأة للخدمة التي اخترتها.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="services-list-heading">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow text-blue">الخدمات</p>
              <h2 id="services-list-heading" className="mt-4 text-3xl font-semibold leading-[1.4] text-navy sm:text-4xl">
                اختر الخدمة الأقرب لاحتياجك
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                إذا كان مشروعك يجمع أكثر من خدمة، اختر الأقرب واذكر بقية التفاصيل في الرسالة.
              </p>
            </div>

            <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
              {portfolio.expertise.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  inquiryUrl={createWhatsAppServiceUrl(
                    portfolio.person.whatsapp.url,
                    service.inquiryTemplate,
                  )}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
