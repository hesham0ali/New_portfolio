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
    title: "إنشاء وتجهيز متجر سلة",
    description: "إعداد المتجر وضبط الإعدادات الأساسية المطلوبة قبل الإطلاق.",
  },
  {
    title: "إعداد صفحات المتجر",
    description: "تجهيز وتنظيم الصفحات الأساسية والمحتوى المطلوب داخل المتجر.",
  },
  {
    title: "تنظيم الأقسام والتصنيفات",
    description: "إنشاء وترتيب التصنيفات بما يجعل الوصول للمنتجات أسهل.",
  },
  {
    title: "رفع وتنظيم المنتجات",
    description: "إضافة المنتجات والصور والوصف والبيانات وتنظيمها داخل المتجر.",
  },
  {
    title: "إعداد خيارات الدفع والشحن",
    description: "ضبط الخيارات المتاحة للمتجر، مع ترك أي إجراءات اعتماد خارجية لصاحب المتجر.",
  },
  {
    title: "تصميم واجهة متجر سلة",
    description: "تصميم وتنظيم الـHome Page والصفحات الرئيسية للمتجر.",
  },
  {
    title: "تخصيص بصري للثيم",
    description: "تعديل شكل الـTheme الحالي من خلال الخيارات المتاحة ليتناسب مع هوية العلامة التجارية.",
  },
  {
    title: "تصميم أقسام المتجر",
    description: "تصميم وترتيب Sections لعرض المنتجات والعروض والمحتوى بصورة واضحة.",
  },
  {
    title: "تصميم المحتوى البصري",
    description: "تصميم Banners وصور الأقسام والعناصر البصرية المستخدمة داخل المتجر.",
  },
  {
    title: "Responsive Design",
    description: "التأكد من أن تجربة المتجر تعمل جيدًا على الجوال والـTablet والـDesktop.",
  },
  {
    title: "تحسين تجربة المستخدم",
    description: "تحسين ترتيب المحتوى والتنقل ووضوح الـCTAs ومسار المستخدم داخل المتجر.",
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
      "Google Merchant Center عندما يكون المتجر والمنتجات مؤهلين",
      "Basic Technical SEO للعناوين والوصف وبنية الصفحات والفهرسة",
      "Tracking Setup عندما تكون الأدوات مدعومة ومتاحة للمشروع",
    ],
  },
  {
    id: "support-heading",
    eyebrow: "تطوير ودعم المتاجر القائمة",
    title: "تحسين متجر سلة موجود بدل البدء من الصفر",
    description:
      "أراجع المتجر القائم، وأحدد فرص التحسين، وأنفذ التعديلات التصميمية أو التقنية التي تقع ضمن نطاق الواجهة والثيم.",
    items: [
      "Store Audit",
      "Store Redesign",
      "UX Improvements",
      "Technical Improvements داخل النطاق المتاح",
      "Bug Fixing لمشاكل Frontend أو Theme أو Integrations",
      "Ongoing Development حسب احتياج المتجر",
    ],
  },
];

const designScope = [
  "تخطيط الواجهة",
  "هيكلة الصفحة الرئيسية",
  "ترتيب المحتوى وأولوياته",
  "طريقة عرض المنتجات",
  "تجربة الجوال",
  "الاتساق البصري",
];

const developmentScope = [
  "سلوك مخصص باستخدام JavaScript",
  "مكونات مخصصة",
  "منطق متقدم داخل الثيم",
  "تغييرات تتجاوز إعدادات الثيم المعتادة",
];

const process = [
  {
    title: "فهم المتجر",
    description: "نراجع المنتجات والجمهور والهوية والثيم الحالي.",
  },
  {
    title: "تحديد الاحتياج",
    description: "نراجع الصفحة الرئيسية والأقسام والمنتجات وتجربة الجوال.",
  },
  {
    title: "ترتيب الأولويات",
    description: "نحدد ما يحتاج إلى تصميم وما يتطلب تعديلًا تقنيًا.",
  },
  {
    title: "التنفيذ",
    description: "نطبق التعديلات داخل المتجر والثيم.",
  },
  {
    title: "المراجعة",
    description: "نجري QA على المقاسات والتفاعل وتجربة الجوال.",
  },
];

const usuallyIncluded = [
  "إعداد المتجر",
  "تنظيم واجهة المتجر",
  "تحسينات Responsive",
  "هيكلة الصفحة الرئيسية",
  "تحسين عرض المنتجات",
  "الاتساق البصري",
  "تعديلات الثيم الأساسية",
];

const scopedSeparately = [
  "JavaScript متقدم",
  "مكونات مخصصة",
  "تطوير Twilight",
  "ربط خدمات خارجية",
  "منطق متقدم ومخصص داخل الثيم",
];

const startingRequirements = [
  "رابط المتجر إن كان قائمًا",
  "نوع الثيم",
  "الهوية البصرية إن كانت متوفرة",
  "المنتجات أو الأقسام الرئيسية",
  "أمثلة مرجعية إن كانت متوفرة",
  "أهم المشاكل الحالية",
  "أي متطلبات خاصة",
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
      "نعم. يمكن تنفيذ Custom CSS وJavaScript حسب احتياج المشروع، بينما تُقيّم التعديلات المتقدمة ويُحدد نطاقها بصورة مستقلة.",
  },
  {
    question: "هل يمكن العمل على متجر قائم؟",
    answer:
      "نعم. يمكن مراجعة متجر قائم، وإعادة ترتيب واجهته، وتحسين الثيم وتجربة الاستخدام دون البدء من الصفر.",
  },
  {
    question: "هل يمكن تطوير ثيم سلة كامل من الصفر؟",
    answer:
      "يمكن تطوير ثيم كامل من الصفر حسب نطاق المشروع، لكنه يندرج ضمن خدمة تطوير الثيم التقني ويُحدد بعد مراجعة المتطلبات بالتفصيل.",
  },
];

function CheckList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span
            aria-hidden="true"
            className={`mt-2.5 size-2 shrink-0 rounded-full ${inverse ? "bg-cyan" : "bg-blue"}`}
          />
          <span className={inverse ? "text-slate-300" : "text-slate-700"} dir="auto">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
              title="ما الذي يمكن أن يشمله تصميم وتطوير متجر سلة؟"
              description="تجمع الخدمة بين تجهيز المتجر وتصميم واجهته وتخصيصه بما يناسب هوية العلامة التجارية. ويُحدد النطاق النهائي وفق حالة المتجر والثيم والمتطلبات."
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
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="connected-services-heading">
          <Container>
            <SectionHeading
              id="connected-services-heading"
              eyebrow="خدمات مرتبطة"
              title="خدمات مكملة ضمن مشروع المتجر"
              description="قد تكون بعض الاحتياجات جزءًا من مشروع تجهيز متجر سلة أو تحسينه، لذلك تُحدد ضمن نطاق العمل بحسب متطلبات المشروع."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {connectedServiceGroups.map((group) => (
                <article
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-24 rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8"
                  aria-labelledby={`${group.id}-title`}
                >
                  <p className="eyebrow text-blue">{group.eyebrow}</p>
                  <h3 id={`${group.id}-title`} className="mt-4 text-2xl font-extrabold text-navy">
                    {group.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-700">{group.description}</p>
                  <CheckList items={group.items} />
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="design-development-heading">
          <Container>
            <SectionHeading
              id="design-development-heading"
              eyebrow="تحديد الاحتياج"
              title="متى يكون المطلوب تصميمًا أو تخصيصًا أو تطوير ثيم؟"
              description="تصميم المتجر يهتم بالشكل والهيكلة وتجربة الاستخدام، وتخصيص المتجر يكيّف الثيم القائم، أما تطوير الثيم فيشمل العمل البرمجي الأعمق."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <p className="eyebrow text-blue">تصميم وتجهيز المتجر</p>
                <h3 className="mt-4 text-2xl font-extrabold text-navy">يركز على الواجهة وتجربة الاستخدام</h3>
                <CheckList items={designScope} />
              </article>
              <article className="rounded-[1.5rem] bg-navy p-6 text-cream sm:p-8">
                <p className="eyebrow text-cyan">تطوير الثيم</p>
                <h3 className="mt-4 text-2xl font-extrabold">مناسب عندما يتطلب التعديل منطقًا أو سلوكًا مخصصًا</h3>
                <CheckList items={developmentScope} inverse />
                <div className="mt-7 border-t border-white/15 pt-5 text-sm leading-7 text-slate-400">
                  <p>تطوير الثيم التقني خدمة مستقلة يتم تحديدها حسب المتطلبات.</p>
                  <Link
                    href="/services/salla-theme-customization"
                    className="link-underline mt-3 inline-flex font-bold text-cyan"
                  >
                    تفاصيل تخصيص وتطوير ثيمات سلة ←
                  </Link>
                </div>
              </article>
            </div>
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
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

        <section className="section-shell bg-mist" aria-labelledby="scope-heading">
          <Container>
            <SectionHeading
              id="scope-heading"
              eyebrow="حدود واضحة"
              title="ما الذي تشمله الخدمة وما الذي يُحدد حسب المشروع؟"
              description="بعض البنود جزء معتاد من تجهيز الواجهة، والبنود التقنية المتقدمة تحتاج تقييم ونطاق مستقل."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-navy">عادةً ضمن الخدمة</h3>
                <CheckList items={usuallyIncluded} />
              </article>
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-navy">يتحدد حسب نطاق المشروع</h3>
                <CheckList items={scopedSeparately} />
              </article>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="requirements-heading">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading
                id="requirements-heading"
                eyebrow="قبل البدء"
                title="ما المعلومات المطلوبة قبل البدء؟"
                description="تساعدني هذه المعلومات على فهم حالة المتجر وتحديد المطلوب بدقة أكبر."
              />
              <ul className="grid gap-3 sm:grid-cols-2">
                {startingRequirements.map((item, index) => (
                  <li key={item} className="flex min-h-20 items-center gap-4 rounded-[1.1rem] border border-navy/10 bg-white p-5">
                    <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold leading-7 text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
