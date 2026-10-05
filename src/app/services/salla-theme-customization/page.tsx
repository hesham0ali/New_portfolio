import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { personId, portfolio, siteUrl, websiteId } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects/get-projects";
import {
  sallaThemeCustomizationDescription,
  sallaThemeCustomizationTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const pagePath = "/services/salla-theme-customization";
const pageUrl = `${siteUrl}${pagePath}`;
const socialTitle = `${sallaThemeCustomizationTitle} | هشام علي`;
const themeInquiryMessage = `مرحبًا هشام، وصلت من صفحة تخصيص وتطوير ثيم سلة.

رابط المتجر:
التعديل أو التطوير المطلوب:
`;

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description: sallaThemeCustomizationDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: socialTitle,
    description: sallaThemeCustomizationDescription,
    locale: "ar_SA",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: sallaThemeCustomizationDescription,
    images: [twitterImageUrl],
  },
};

const customizationNeeds = [
  "إعدادات الثيم الحالية لا تكفي لتنفيذ التصميم المطلوب.",
  "تحتاج إلى تعديل شكل عنصر موجود أو سلوكه.",
  "تحتاج إلى Custom CSS يتجاوز الخيارات المتاحة.",
  "تحتاج إلى JavaScript لسلوك تفاعلي أو تجربة مخصصة.",
  "تحتاج إلى Component جديد يمكن التحكم فيه من إعدادات الثيم.",
  "تحتاج إلى تحسين Responsive لمقاسات أو Sections محددة.",
  "لديك ثيم قائم وتريد تطويره بدلًا من تغييره بالكامل.",
];

const implementationCapabilities = [
  {
    title: "Custom Salla Theme Development",
    description: "تطوير Theme مخصص لمنصة سلة بما يتناسب مع تصميم وهوية المشروع عندما يكون ذلك مدعومًا ومناسبًا للنطاق.",
  },
  {
    title: "Theme Customization",
    description: "تعديل وتطوير Theme قائم بدل بناء Theme جديد عندما يكون ذلك هو الحل الأنسب.",
  },
  {
    title: "Custom Sections",
    description: "تطوير Sections مخصصة يمكن استخدامها داخل واجهات المتجر.",
  },
  {
    title: "Frontend Development",
    description: "تنفيذ التعديلات المطلوبة باستخدام التقنيات المناسبة لبيئة Salla Themes.",
  },
  {
    title: "CSS & JavaScript Customization",
    description: "تنفيذ تعديلات Frontend مخصصة عندما لا تكون خيارات الثيم الافتراضية كافية.",
  },
  {
    title: "Frontend fixes داخل الثيم",
    description: "تحليل وحل مشاكل الواجهة والسلوك المتجاوب التي تقع ضمن نطاق تطوير الثيم.",
  },
];

const integrationServices = [
  {
    title: "Custom Store Features",
    description: "تطوير خصائص أو واجهات إضافية حسب احتياج المتجر وإمكانيات منصة سلة.",
  },
  {
    title: "External Integrations",
    description: "ربط المتجر مع خدمات وأنظمة خارجية عندما تكون APIs أو Integrations المناسبة متاحة.",
  },
  {
    title: "API Integration",
    description: "تنفيذ تكاملات باستخدام APIs عند الحاجة وضمن الحدود الفنية المتاحة.",
  },
  {
    title: "Automation",
    description: "ربط بعض العمليات مع Automation Tools عندما يكون ذلك مناسبًا لطبيعة المشروع.",
  },
  {
    title: "Technical Troubleshooting",
    description: "تحليل وحل المشاكل التقنية المتعلقة بواجهة المتجر أو التكاملات التي تقع ضمن نطاق التطوير.",
  },
];

const twilightExamples = [
  "Custom promotional section",
  "Structured content block",
  "Custom product أو content presentation",
  "Configurable visual section",
];

const storeDesignScope = [
  "هيكلة المتجر والصفحات",
  "طريقة عرض المحتوى والمنتجات",
  "التسلسل البصري",
  "UX وتجهيز واجهة المتجر",
];

const themeCustomizationScope = [
  "تعديلات على مستوى الكود",
  "CSS وJavaScript",
  "سلوكيات مخصصة",
  "Custom Components وTwilight",
];

const process = [
  {
    title: "فهم المطلوب",
    description: "نحدد التعديل المطلوب والمشكلة الحالية.",
  },
  {
    title: "مراجعة الثيم",
    description: "نحدد هل يمكن تنفيذ المطلوب من الإعدادات أم يحتاج إلى كود.",
  },
  {
    title: "تحديد نطاق التنفيذ",
    description: "CSS، JavaScript، تعديل Component، أو Twilight حسب الحاجة.",
  },
  {
    title: "التنفيذ والاختبار",
    description: "نطبق التعديل ونراجع السلوك على المقاسات المناسبة.",
  },
  {
    title: "التسليم والتوضيح",
    description: "نوضح ما تم تعديله وأي نقاط مهمة للصيانة أو الاستخدام.",
  },
];

const existingThemeReasons = [
  "الثيم الحالي يدعم معظم الهيكل المطلوب بالفعل.",
  "المطلوب محصور في Sections أو سلوكيات محددة.",
  "الهدف هو تجنب تعقيد إعادة بناء غير ضرورية.",
];

const commonCustomization = [
  "CSS",
  "تعديلات Frontend على الـ Layout",
  "Responsive fixes",
  "تحسينات JavaScript",
  "تعديلات على Components موجودة",
];

const projectDependent = [
  "Custom Twilight Components",
  "سلوكيات مخصصة معقدة",
  "إعادة هيكلة كبيرة للثيم",
  "تطوير ثيم كامل من الصفر",
  "ربط خدمات خارجية",
];

const faqs = [
  {
    question: "هل يمكن تعديل ثيم سلة موجود؟",
    answer:
      "نعم. تعديل الثيمات الحالية جزء أساسي من الخدمة، بعد مراجعة هيكل الثيم والتعديل المطلوب.",
  },
  {
    question: "هل كل تعديل يحتاج JavaScript؟",
    answer:
      "لا. يمكن تنفيذ بعض التعديلات من إعدادات الثيم أو باستخدام CSS فقط، ويُستخدم JavaScript عندما يكون هناك سلوك تفاعلي مطلوب.",
  },
  {
    question: "متى نحتاج إلى Twilight؟",
    answer:
      "عندما نحتاج إلى Component مخصص يندمج داخل الثيم ويتيح للتاجر التحكم في المحتوى أو الإعدادات المناسبة من لوحة الثيم.",
  },
  {
    question: "هل يمكن التحكم في الـComponent المخصص؟",
    answer:
      "يمكن في الحالات المناسبة إضافة إعدادات محددة للـComponent، ويُحدد مستوى التحكم حسب طبيعته ومتطلبات المشروع.",
  },
  {
    question: "هل يمكن تنفيذ تعديل دون تغيير الثيم بالكامل؟",
    answer:
      "نعم، وهذا غالبًا هو الخيار العملي إذا كان الثيم الحالي مناسبًا وكانت التعديلات محددة في الشكل أو السلوك.",
  },
  {
    question: "هل يمكن بناء ثيم كامل من الصفر؟",
    answer:
      "يمكن ذلك حسب متطلبات المشروع، لكنه نطاق مستقل ولا يُفترض تلقائيًا ضمن خدمة التخصيص الحالية.",
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

export default async function SallaThemeCustomizationPage() {
  const sho9 = await getProjectBySlug("sho9");
  if (!sho9) throw new Error("The published Sho9 project is required.");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: socialTitle,
        description: sallaThemeCustomizationDescription,
        inLanguage: "ar",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "تطوير وبرمجة ثيم سلة",
        serviceType: "تطوير وبرمجة ثيمات سلة وتخصيصها",
        description: sallaThemeCustomizationDescription,
        url: pageUrl,
        provider: { "@id": personId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات تطوير وبرمجة ثيمات سلة",
          itemListElement: [
            ...implementationCapabilities.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
              },
            })),
            {
              "@type": "OfferCatalog",
              name: "Development & Integrations",
              itemListElement: integrationServices.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
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
            name: "تطوير ثيم سلة",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const project = sho9.metadata;
  const themeInquiryUrl = createWhatsAppServiceUrl(
    portfolio.person.whatsapp.url,
    themeInquiryMessage,
  );
  const technicalTags = project.tags.filter((tag) =>
    ["Salla", "تخصيص Theme", "CSS", "JavaScript"].includes(tag),
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
                تطوير ثيم سلة
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">تطوير وبرمجة ثيمات سلة</p>
                <h1 className="mt-5 max-w-5xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  تطوير ثيم سلة وبرمجته بتخصيصات تتجاوز الخيارات الجاهزة
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  أطور الثيمات الحالية، وأنفذ تخصيصات CSS وJavaScript، وأبني Sections وComponents مخصصة باستخدام Twilight عندما يحتاج المتجر إلى Frontend أعمق من الإعدادات العادية.
                </p>
                <a
                  href={themeInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portfolio.person.whatsapp.ariaLabel}
                  className="button-primary mt-8"
                >
                  ناقش التعديل المطلوب
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <aside className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-7">
                <p className="eyebrow text-cyan">نطاق الخدمة</p>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  تعديل الواجهة، تحسين الـ Responsive، إضافة سلوكيات مخصصة، وبناء Components قابلة للإدارة من داخل الثيم.
                </p>
                <div className="mt-6 flex flex-wrap gap-2" aria-label="تقنيات التخصيص">
                  {["CSS", "JavaScript", "Twilight"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs font-bold text-cyan"
                      dir="ltr"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="needed-heading">
          <Container>
            <SectionHeading
              id="needed-heading"
              eyebrow="عندما لا تكفي الإعدادات"
              title="متى تحتاج إلى تخصيص أو تطوير ثيم سلة؟"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {customizationNeeds.map((item, index) => (
                <article
                  key={item}
                  className="motion-card-interaction rounded-[1.25rem] border border-navy/10 bg-white p-6"
                >
                  <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 leading-7 text-slate-700" dir="auto">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="proof-heading">
          <Container>
            <SectionHeading
              eyebrow="دليل من مشروع فعلي"
              id="proof-heading"
              title="تخصيص ثيم موثق باستخدام CSS وJavaScript"
              description="مشروع Sho9 يوضح عملًا فعليًا داخل متجر سلة شمل تصميم الواجهة وتطويرها وتخصيص الثيم."
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
                  <h3 className="mt-4 text-3xl font-extrabold text-navy">{project.title}</h3>
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
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="تقنيات مدعومة في بيانات المشروع">
                    {technicalTags.map((tag) => (
                      <li key={tag} className="rounded-full bg-mist px-3 py-2 text-sm font-bold text-navy" dir="auto">
                        {tag}
                      </li>
                    ))}
                  </ul>
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
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="implementation-heading">
          <Container>
            <SectionHeading
              id="implementation-heading"
              eyebrow="داخل الثيم"
              title="ما الذي يمكن تنفيذه داخل الثيم؟"
              description="يركز التنفيذ على Frontend الثيم وإمكانياته، ويُحدد النطاق النهائي بعد مراجعة المطلوب والثيم الحالي."
            />
            <ul className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {implementationCapabilities.map((item) => (
                <li key={item.title} className="min-h-40 bg-white p-5 sm:p-6">
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
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              الخدمة لا تفترض تطوير Backend أو تطبيقات أو تكاملات خارجية غير مؤكدة؛ أي ربط خارجي يتم تقييمه كنطاق منفصل.
            </p>
          </Container>
        </section>

        <section id="integrations-heading" className="section-shell scroll-mt-20 bg-cream" aria-labelledby="integrations-title">
          <Container>
            <SectionHeading
              id="integrations-title"
              eyebrow="التطوير والتكاملات"
              title="خصائص وتكاملات حسب الإمكانيات المتاحة"
              description="يُراجع أي تكامل أو Automation فنيًا قبل اعتماده، لأن التنفيذ يعتمد على إمكانيات منصة سلة وتوفر APIs أو أدوات ربط مناسبة."
            />
            <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {integrationServices.map((item) => (
                <article key={item.title} className="min-h-40 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue" />
                    <h3 className="font-bold leading-7 text-navy" dir="auto">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600" dir="auto">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              لا يتم الوعد بأي تكامل قبل التأكد من توفر الصلاحيات، التوثيق، وحدود التنفيذ المناسبة داخل بيئة سلة.
            </p>
          </Container>
        </section>

        <section className="section-shell bg-navy text-cream" aria-labelledby="twilight-heading">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <SectionHeading
                  id="twilight-heading"
                  eyebrow="Twilight Components"
                  title="عندما تحتاج إلى Component مخصص وقابل للتحكم"
                  description="يساعد Twilight على دمج Component مخصص داخل الثيم مع إعدادات تتيح للتاجر التحكم في المحتوى أو الخصائص المطلوبة."
                  inverse
                />
                <p className="mt-7 max-w-2xl border-s-2 border-cyan ps-5 text-lg leading-8 text-cream">
                  يمكن بناء بعض الـComponents بحيث يسهل التحكم فيها من إعدادات الثيم دون الرجوع إلى الكود مع كل تعديل.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  يُحدد مستوى التحكم حسب طبيعة الـComponent؛ فليست كل التخصيصات مناسبة للتحويل إلى إعدادات قابلة للتعديل.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold">أمثلة عملية</h3>
                <CheckList items={twilightExamples} inverse />
              </div>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="comparison-heading">
          <Container>
            <SectionHeading
              id="comparison-heading"
              eyebrow="اختيار الخدمة المناسبة"
              title="ما الفرق بين تصميم المتجر وتخصيصه وتطوير الثيم؟"
              description="تصميم المتجر يحدد الشكل والهيكلة، وتخصيص المتجر يكيّف الثيم القائم، بينما ينفذ تطوير الثيم تغييرات Frontend أعمق باستخدام الكود."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <p className="eyebrow text-blue">تصميم المتجر</p>
                <h3 className="mt-4 text-2xl font-extrabold text-navy">الهيكلة، العرض، وتجربة الاستخدام</h3>
                <CheckList items={storeDesignScope} />
                <Link
                  href="/services/salla-store-design"
                  className="button-secondary mt-7"
                >
                  تصميم وتطوير متجر سلة
                  <span aria-hidden="true">←</span>
                </Link>
              </article>
              <article className="rounded-[1.5rem] bg-navy p-6 text-cream sm:p-8">
                <p className="eyebrow text-cyan">تخصيص وتطوير الثيم</p>
                <h3 className="mt-4 text-2xl font-extrabold">تنفيذ تغييرات تقنية داخل الـ Theme</h3>
                <CheckList items={themeCustomizationScope} inverse />
              </article>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="process-heading">
          <Container>
            <SectionHeading
              id="process-heading"
              eyebrow="من التقييم للتسليم"
              title="طريقة تنفيذ التعديلات"
              description="تساعد كل خطوة على اختيار الحل الأنسب قبل الانتقال إلى تطوير أعمق داخل الثيم."
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, index) => (
                <li key={step.title} className="rounded-[1.25rem] border border-navy/10 bg-white p-5">
                  <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600" dir="auto">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="existing-theme-heading">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <SectionHeading
                id="existing-theme-heading"
                eyebrow="الحل العملي أولًا"
                title="هل أحتاج إلى بناء ثيم جديد من الصفر؟"
                description="ليس دائمًا. يكون تعديل الثيم الحالي هو الخيار العملي عندما يدعم أساسه المتطلبات المطلوبة."
              />
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-navy">يكون تعديل الثيم الحالي مناسبًا عندما:</h3>
                <CheckList items={existingThemeReasons} />
                <p className="mt-7 border-t border-navy/10 pt-5 text-sm leading-7 text-slate-600">
                  تطوير ثيم كامل من الصفر نطاق مستقل، ويُقترح فقط عندما تستدعي متطلبات المشروع ذلك.
                </p>
              </article>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-navy text-cream" aria-labelledby="scope-heading">
          <Container>
            <SectionHeading
              id="scope-heading"
              eyebrow="حدود التنفيذ"
              title="ما الذي يُحدد حسب كل مشروع؟"
              description="يفصل النطاق بين التخصيصات المعتادة والتطوير الذي يحتاج إلى مراجعة فنية وتسعير مستقل."
              inverse
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold">تخصيصات شائعة</h3>
                <CheckList items={commonCustomization} inverse />
              </article>
              <article className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold">يتحدد حسب المشروع</h3>
                <CheckList items={projectDependent} inverse />
              </article>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="faq-heading">
          <Container>
            <SectionHeading
              id="faq-heading"
              eyebrow="أسئلة شائعة"
              title="إجابات عن تخصيص وتطوير الثيم"
              description="يُحدد نوع الحل بعد مراجعة الثيم والتعديل المطلوب، دون افتراض أن كل تغيير يحتاج إلى تطوير كبير."
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
              <p className="eyebrow text-white">حدد الحل المناسب</p>
              <h2 id="final-cta-heading" className="mt-4 text-balance text-4xl leading-[1.35] font-extrabold sm:text-5xl lg:text-6xl">
                هل يحتاج ثيم متجرك إلى تخصيص بسيط أم تطوير برمجي أعمق؟
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
                أرسل رابط المتجر ووصفًا مختصرًا للمطلوب لنحدد هل الحل Custom CSS، أو JavaScript، أو تعديل Component، أو تطويرًا أعمق داخل الثيم.
              </p>
              <a
                href={themeInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.person.whatsapp.ariaLabel}
                className="button-contact-primary mt-8 min-w-56"
              >
                أرسل تفاصيل التعديل
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
