import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { personId, portfolio, siteUrl, websiteId } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects/get-projects";
import {
  sallaStoreDesignDescription,
  sallaStoreDesignTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const pagePath = "/services/salla-store-design";
const pageUrl = `${siteUrl}${pagePath}`;
const socialTitle = `${sallaStoreDesignTitle} | هشام علي`;
const designInquiryMessage = `مرحبًا هشام، وصلت من صفحة تصميم وتجهيز متجر سلة.

رابط المتجر إن وجد:
المطلوب تصميمه أو تحسينه:
`;

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description: sallaStoreDesignDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: socialTitle,
    description: sallaStoreDesignDescription,
    locale: "ar_SA",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: sallaStoreDesignDescription,
    images: [twitterImageUrl],
  },
};

const audienceNeeds = [
  "تبدأ متجرًا جديدًا على سلة وتريد تجهيزه بصورة منظمة من البداية.",
  "لديك متجر قائم وتحتاج واجهته أو أقسامه إلى إعادة ترتيب.",
  "الثيم الحالي لا يعكس هوية علامتك التجارية.",
  "تجربة المتجر على الجوال تحتاج إلى تحسين.",
  "عرض المنتجات والعروض يحتاج إلى تنظيم ووضوح أكبر.",
  "تريد إعادة تصميم الواجهة ضمن إمكانيات الثيم قبل اللجوء إلى تطوير برمجي أعمق.",
];

const includedServices = [
  {
    title: "تجهيز متجر جديد للإطلاق",
    description: "إعداد الصفحات والخيارات الأساسية ومراجعة جاهزية المتجر.",
  },
  {
    title: "تنظيم الصفحات والأقسام",
    description: "ترتيب المحتوى والتصنيفات ليسهل على العميل الوصول للمنتجات.",
  },
  {
    title: "تنظيم المنتجات والمحتوى",
    description: "رفع وترتيب المنتجات والصور والبيانات ضمن النطاق المتفق عليه.",
  },
  {
    title: "تصميم واجهة واضحة",
    description: "تنظيم الصفحة الرئيسية والعروض بما يناسب هوية العلامة التجارية.",
  },
  {
    title: "تحسين تجربة الجوال",
    description: "مراجعة وضوح المحتوى والتنقل والعناصر المهمة على الشاشات الصغيرة.",
  },
  {
    title: "إعادة تصميم متجر قائم",
    description: "تحسين الواجهة الحالية بدل البدء من الصفر عندما يكون ذلك هو الحل الأنسب.",
  },
];

const connectedServiceGroups = [
  {
    id: "google-seo-heading",
    eyebrow: "Google وSEO وTracking",
    title: "تجهيز أساسيات القياس والظهور",
    description:
      "إعداد البنية الأساسية التي تساعدك على قياس أداء المتجر ومراجعة أساسيات ظهوره، دون وعود بترتيب أو زيارات أو مبيعات مضمونة.",
    items: [
      "Google Analytics",
      "Google Search Console",
      "أساسيات التتبع المدعومة للمشروع",
    ],
  },
  {
    id: "support-heading",
    eyebrow: "تطوير ودعم المتاجر القائمة",
    title: "تحسين متجر سلة موجود بدل البدء من الصفر",
    description:
      "أراجع المتجر القائم، وأحدد فرص التحسين، وأنفذ تعديلات الواجهة المناسبة ضمن نطاق المشروع.",
    items: [
      "مراجعة واجهة المتجر",
      "إعادة التصميم وتحسين تجربة الاستخدام",
      "معالجة مشاكل الواجهة ضمن النطاق المتاح",
    ],
  },
];

const process = [
  {
    title: "مراجعة المتجر",
    description: "نفهم حالة المتجر والمشكلة والنتيجة المطلوبة.",
  },
  {
    title: "تحديد النطاق",
    description: "نتفق على الصفحات والعناصر التي سيتم تحسينها.",
  },
  {
    title: "التنفيذ",
    description: "نجهز المحتوى ونطبق تحسينات الواجهة المتفق عليها.",
  },
  {
    title: "المراجعة والتسليم",
    description: "نراجع المتجر على الجوال وسطح المكتب قبل التسليم.",
  },
];

const faqs = [
  {
    question: "هل أحتاج إلى تغيير الثيم الحالي؟",
    answer:
      "ليس بالضرورة. نراجع أولًا الثيم الحالي وإمكانياته، ثم نحدد هل يمكن تنفيذ التعديلات المطلوبة عليه أم أن تغيير الثيم سيكون أنسب.",
  },
  {
    question: "هل يشمل التصميم تجربة الجوال؟",
    answer:
      "نعم. مراجعة التجربة على الجوال وتنظيمها جزء أساسي من الخدمة، إلى جانب سطح المكتب.",
  },
  {
    question: "هل يمكن تنفيذ تعديلات برمجية؟",
    answer:
      "نعم، لكن التعديلات التي تحتاج إلى كود أو سلوك مخصص تندرج ضمن خدمة تطوير الثيم ويُحدد نطاقها بعد المراجعة.",
  },
  {
    question: "هل يمكن العمل على متجر قائم؟",
    answer:
      "نعم. يمكن مراجعة متجر قائم، وإعادة ترتيب واجهته، وتحسين الثيم وتجربة الاستخدام دون البدء من الصفر.",
  },
];

export default async function SallaStoreDesignPage() {
  const [sho9, ipple, alkahwaElbeshia] = await Promise.all([
    getProjectBySlug("sho9"),
    getProjectBySlug("ipple"),
    getProjectBySlug("alkahwa-elbeshia"),
  ]);
  if (!sho9 || !ipple || !alkahwaElbeshia) {
    throw new Error("The published Salla projects are required.");
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: socialTitle,
        description: sallaStoreDesignDescription,
        inLanguage: "ar",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "تصميم وتجهيز وتحسين متجر سلة",
        serviceType: "تصميم وتجهيز وتحسين متاجر سلة",
        description: sallaStoreDesignDescription,
        url: pageUrl,
        provider: { "@id": personId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات تصميم وتطوير متاجر سلة",
          itemListElement: [
            ...includedServices.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
              },
            })),
            ...connectedServiceGroups.map((group) => ({
              "@type": "OfferCatalog",
              name: group.eyebrow,
              itemListElement: group.items.map((item) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: item,
                },
              })),
            })),
          ],
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
            name: "تصميم متجر سلة",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const project = sho9.metadata;
  const designInquiryUrl = createWhatsAppServiceUrl(
    portfolio.person.whatsapp.url,
    designInquiryMessage,
  );

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
            __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
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
                تصميم متجر سلة
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">تصميم وتجهيز وتحسين المتجر</p>
                <h1 className="mt-5 max-w-5xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  تصميم متجر سلة وتجهيزه أو تحسين متجر قائم
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  من إنشاء المتجر وتجهيز صفحاته إلى تنظيم الواجهة والمنتجات وتحسين تجربة الاستخدام على الجوال، مع رفع المحتوى عندما يكون ضمن نطاق المشروع.
                </p>
                <a
                  href={designInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portfolio.person.whatsapp.ariaLabel}
                  className="button-primary mt-8"
                >
                  ناقش متجرك معي
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <aside className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-7">
                <p className="eyebrow text-cyan">نطاق الخدمة</p>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  إعداد المتجر للإطلاق، وتنظيم الصفحة الرئيسية، وتحسين عرض المنتجات، وتقديم تجربة متجاوبة على الجوال وسطح المكتب.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="service-fit-heading">
          <Container>
            <SectionHeading
              id="service-fit-heading"
              eyebrow="لمن تناسب الخدمة؟"
              title="لمتجر جديد يحتاج تجهيزًا متكاملًا أو متجر قائم يحتاج إلى تحسين"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audienceNeeds.map((item, index) => (
                <article
                  key={item}
                  className="motion-card-interaction rounded-[1.25rem] border border-navy/10 bg-white p-6"
                >
                  <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="proof-heading">
          <Container>
            <SectionHeading
              id="proof-heading"
              eyebrow="دليل من مشروع فعلي"
              title="تصميم وتطوير متجر قائم على منصة سلة"
              description="مشروع Sho9 يوضح نطاقًا موثقًا شمل تصميم المتجر وتطويره وتنظيم واجهته وتخصيص الثيم."
            />
            <article className="mt-10 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_22px_60px_rgba(10,25,47,0.07)]">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="project-visual flex min-h-72 flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-blue">Salla Store</span>
                    <span className="rounded-full border border-navy/15 bg-white/70 px-3 py-1.5 text-xs font-bold text-navy">
                      مشروع قائم
                    </span>
                  </div>
                  <div>
                    <p className="text-5xl font-extrabold text-navy sm:text-6xl" dir="ltr">
                      SHO9
                    </p>
                    <p className="mt-3 text-sm text-slate-600" dir="ltr">
                      sho9.com
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-9 lg:p-10">
                  <p className="eyebrow text-blue">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-8 text-slate-700">{project.summary}</p>
                  <dl className="mt-7 grid gap-5 border-y border-navy/10 py-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm text-slate-600">الدور</dt>
                      <dd className="mt-2 font-bold leading-7 text-navy">{project.role}</dd>
                    </div>
                    {project.maintenance ? (
                      <div>
                        <dt className="text-sm text-slate-600">المتابعة</dt>
                        <dd className="mt-2 font-bold leading-7 text-navy">{project.maintenance}</dd>
                      </div>
                    ) : null}
                  </dl>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Link href="/projects/sho9" className="button-secondary">
                      شاهد تفاصيل المشروع
                      <span aria-hidden="true">←</span>
                    </Link>
                    <Link href="/projects" className="touch-link link-underline font-bold text-blue">
                      شاهد بقية أعمال سلة
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[ipple.metadata, alkahwaElbeshia.metadata].map((example) => (
                <Link
                  key={example.slug}
                  href={`/projects/${example.slug}`}
                  className="motion-card-interaction rounded-[1.1rem] border border-navy/10 bg-white p-5 sm:p-6"
                >
                  <span className="eyebrow text-blue">مثال إضافي لتصميم متجر سلة</span>
                  <span className="mt-3 block text-xl font-semibold text-navy">
                    {example.title}
                  </span>
                  <span className="mt-3 block leading-7 text-slate-600">
                    {example.summary}
                  </span>
                  <span className="motion-arrow-link mt-4 inline-flex items-center gap-2 font-semibold text-blue">
                    شاهد المشروع
                    <span aria-hidden="true" className="motion-arrow">←</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="customization-heading" className="section-shell scroll-mt-20 bg-cream" aria-labelledby="included-heading">
          <Container>
            <SectionHeading
              id="included-heading"
              eyebrow="نطاق التنفيذ"
              title="ما الذي يمكن تحسينه في متجرك؟"
              description="يتحدد النطاق حسب حالة المتجر، لكن التركيز يبقى على وضوح الواجهة وسهولة التصفح وجاهزية المحتوى."
            />
            <ul className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {includedServices.map((item) => (
                <li key={item.title} className="min-h-36 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue" />
                    <h3 className="font-bold leading-7 text-navy" dir="auto">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600" dir="auto">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {connectedServiceGroups.map((group) => (
                <article
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-24 rounded-[1.1rem] border border-navy/10 bg-white p-5 sm:p-6"
                  aria-labelledby={`${group.id}-title`}
                >
                  <p className="text-sm font-semibold text-blue">{group.eyebrow}</p>
                  <h3 id={`${group.id}-title`} className="mt-2 text-xl font-semibold text-navy">
                    {group.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{group.description}</p>
                </article>
              ))}
            </div>
            <aside className="mt-8 flex flex-col gap-4 rounded-[1.1rem] bg-navy p-5 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="font-semibold">هل المطلوب يحتاج إلى برمجة داخل الثيم؟</p>
                <p className="mt-2 leading-7 text-slate-300">
                  التعديلات التي تتجاوز الشكل والتنظيم تنتقل إلى خدمة تطوير الثيم.
                </p>
              </div>
              <Link href="/services/salla-theme-customization" className="button-primary shrink-0">
                اعرف الفرق
                <span aria-hidden="true">←</span>
              </Link>
            </aside>
          </Container>
        </section>

        <section className="section-shell bg-navy text-cream" aria-labelledby="process-heading">
          <Container>
            <SectionHeading
              id="process-heading"
              eyebrow="من البداية للتسليم"
              title="طريقة العمل"
              description="خطوات عملية وواضحة لتحديد المطلوب قبل التنفيذ ومراجعته بعد الإنجاز."
              inverse
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <li key={step.title} className="rounded-[1.25rem] border border-white/15 bg-white/5 p-5">
                  <span className="font-mono text-sm font-bold text-cyan" dir="ltr">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="faq-heading">
          <Container>
            <SectionHeading
              id="faq-heading"
              eyebrow="أسئلة شائعة"
              title="إجابات سريعة قبل التواصل"
              description="تعتمد تفاصيل التنفيذ النهائية على حالة المتجر والثيم ونطاق التعديلات."
            />
            <div className="mt-10 divide-y divide-navy/10 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group p-6 sm:p-7" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-navy marker:content-none">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-2xl font-normal text-blue group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-8 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="contact-grid bg-blue py-16 text-white sm:py-20 lg:py-24" aria-labelledby="final-cta-heading">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-white">لنراجع احتياج متجرك</p>
              <h2 id="final-cta-heading" className="mt-4 text-balance text-4xl leading-[1.35] font-extrabold sm:text-5xl lg:text-6xl">
                هل لديك متجر سلة جديد أو متجر قائم يحتاج إلى تحسين؟
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
                أرسل رابط المتجر أو وصفًا مختصرًا للمشروع لنحدد هل المطلوب تصميمًا، أو تخصيصًا للمتجر، أو تطويرًا أعمق داخل الثيم.
              </p>
              <a
                href={designInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.person.whatsapp.ariaLabel}
                className="button-contact-primary mt-8 min-w-56"
              >
                تواصل عبر واتساب
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
