import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio, siteUrl } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects/get-projects";
import {
  sallaStoreDesignDescription,
  sallaStoreDesignTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";

const pagePath = "/services/salla-store-design";
const pageUrl = `${siteUrl}${pagePath}`;
const socialTitle = `${sallaStoreDesignTitle} | Hesham Ali`;

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
  "بتبدأ متجر جديد على سلة وعايز تطلع بشكل منظم من البداية.",
  "عندك متجر قائم والصفحة الرئيسية أو الأقسام محتاجين إعادة ترتيب.",
  "شكل الثيم الحالي مش بيعكس هوية البراند.",
  "تجربة الموبايل محتاجة تحسين.",
  "عرض المنتجات والعروض محتاج تنظيم أو وضوح أكتر.",
  "محتاج تعديلات تتجاوز إعدادات الثيم الأساسية.",
];

const includedServices = [
  "إعداد المتجر من الصفر",
  "تنظيم الصفحة الرئيسية",
  "ترتيب الأقسام والـ Navigation",
  "تحسين Product Cards وعرض المنتجات",
  "تنظيم الـ Sections حسب أولوية المحتوى",
  "تطبيق الهوية البصرية",
  "تحسين تجربة الموبايل",
  "Responsive adjustments",
  "تعديل الثيم الموجود",
  "تنفيذ UI بسيط مناسب للمشروع",
  "Custom CSS عند الحاجة",
  "JavaScript بسيط عند الحاجة",
];

const designScope = [
  "تخطيط الواجهة",
  "هيكلة الصفحة الرئيسية",
  "ترتيب المحتوى وأولوياته",
  "طريقة عرض المنتجات",
  "تجربة الموبايل",
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
    title: "نفهم المتجر",
    description: "نفهم المنتجات، الجمهور، الهوية، والثيم الحالي.",
  },
  {
    title: "نحدد المشاكل",
    description: "نراجع الصفحة الرئيسية، الأقسام، المنتجات، وتجربة الموبايل.",
  },
  {
    title: "نرتب الأولويات",
    description: "نحدد إيه اللي يحتاج تصميم وإيه اللي يحتاج تعديل تقني.",
  },
  {
    title: "ننفذ",
    description: "نطبق التعديلات داخل المتجر والثيم.",
  },
  {
    title: "نراجع",
    description: "نعمل QA على المقاسات، التفاعل، والموبايل.",
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
  "رابط المتجر لو موجود",
  "نوع الثيم",
  "الهوية البصرية لو موجودة",
  "المنتجات أو الأقسام الرئيسية",
  "أمثلة مرجعية لو موجودة",
  "أهم المشاكل الحالية",
  "أي متطلبات خاصة",
];

const faqs = [
  {
    question: "هل لازم أغير الثيم الحالي؟",
    answer:
      "مش بالضرورة. الأول بنراجع الثيم الحالي وإمكانياته، وبعدها نحدد هل التعديلات المطلوبة ممكنة عليه ولا تغيير الثيم هيكون أنسب.",
  },
  {
    question: "هل التصميم يشمل الموبايل؟",
    answer:
      "أيوه. مراجعة وتنظيم التجربة على الموبايل جزء أساسي من الخدمة، بجانب الديسكتوب.",
  },
  {
    question: "هل ممكن تعمل تعديلات بالكود؟",
    answer:
      "أيوه، ممكن تنفيذ Custom CSS وJavaScript بسيط حسب احتياج المشروع. التعديلات المتقدمة بيتحدد نطاقها بشكل منفصل.",
  },
  {
    question: "هل ممكن تشتغل على متجر قائم؟",
    answer:
      "أيوه. ممكن مراجعة متجر قائم، إعادة ترتيب واجهته، وتحسين الثيم وتجربة الاستخدام بدون البدء من الصفر.",
  },
  {
    question: "هل ممكن تعمل ثيم سلة كامل من الصفر؟",
    answer:
      "تطوير ثيم كامل من الصفر ممكن حسب نطاق المشروع، لكنه أقرب لخدمة تطوير الثيم التقني وبيتحدد بعد مراجعة المتطلبات بالتفصيل.",
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
        description: sallaStoreDesignDescription,
        inLanguage: "ar",
        mainEntity: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "تصميم وتجهيز متجر سلة",
        serviceType: "تصميم وتجهيز واجهات متاجر سلة",
        description: sallaStoreDesignDescription,
        url: pageUrl,
        provider: {
          "@type": "Person",
          name: portfolio.person.name,
          url: siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
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
              <Link href="/" className="link-underline hover:text-cream">
                الرئيسية
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-300">
                تصميم متجر سلة
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">تصميم وتجهيز متاجر سلة</p>
                <h1 className="mt-5 max-w-5xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  تصميم وتجهيز متجر سلة من الصفر بما يناسب هوية متجرك وتجربة عملائك
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  من إعداد المتجر وتنظيم الصفحات، لحد تصميم الواجهة وتنفيذ التعديلات داخل الثيم، مع دعم تخصيصات CSS وJavaScript حسب احتياج المشروع.
                </p>
                <a
                  href={portfolio.person.whatsapp.url}
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
                  إعداد المتجر، تنظيم الصفحة الرئيسية، تحسين عرض المنتجات، وتجربة متجاوبة على الموبايل والديسكتوب.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="service-fit-heading">
          <Container>
            <SectionHeading
              id="service-fit-heading"
              eyebrow="مناسبة لمين؟"
              title="الخدمة مناسبة ليك لو متجرك محتاج أكتر من مجرد ثيم جاهز"
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

        <section className="section-shell bg-mist" aria-labelledby="included-heading">
          <Container>
            <SectionHeading
              id="included-heading"
              eyebrow="نطاق التنفيذ"
              title="إيه اللي ممكن يدخل ضمن تصميم وتجهيز متجر سلة؟"
              description="النطاق النهائي بيتحدد حسب حالة المتجر والثيم والمتطلبات، لكن الخدمة ممكن تشمل البنود التالية."
            />
            <ul className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {includedServices.map((item) => (
                <li key={item} className="flex min-h-24 items-center gap-3 bg-white p-5 sm:p-6">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue" />
                  <span className="font-bold leading-7 text-navy" dir="auto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="design-development-heading">
          <Container>
            <SectionHeading
              id="design-development-heading"
              eyebrow="تحديد الاحتياج"
              title="إمتى الموضوع بيكون تصميم، وإمتى يحتاج تطوير ثيم؟"
              description="الفصل بينهم من البداية بيوضح نطاق الشغل ويحدد أنسب طريقة للتنفيذ."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <p className="eyebrow text-blue">تصميم وتجهيز المتجر</p>
                <h3 className="mt-4 text-2xl font-extrabold text-navy">يركز على الواجهة وتجربة الاستخدام</h3>
                <CheckList items={designScope} />
              </article>
              <article className="rounded-[1.5rem] bg-navy p-6 text-cream sm:p-8">
                <p className="eyebrow text-cyan">تطوير الثيم</p>
                <h3 className="mt-4 text-2xl font-extrabold">يكون مطلوب لما التعديل يحتاج منطق أو سلوك مخصص</h3>
                <CheckList items={developmentScope} inverse />
                <p className="mt-7 border-t border-white/15 pt-5 text-sm leading-7 text-slate-400">
                  تطوير الثيم التقني خدمة مستقلة يتم تحديدها حسب المتطلبات. صفحة الخدمة التفصيلية هتتوفر لاحقًا.
                </p>
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
              description="خطوات عملية وواضحة تساعدنا نحدد المطلوب قبل التنفيذ ونراجعه بعده."
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

        <section className="section-shell bg-cream" aria-labelledby="proof-heading">
          <Container>
            <SectionHeading
              id="proof-heading"
              eyebrow="دليل من الشغل"
              title="مثال من شغل حقيقي على سلة"
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
                  <Link href="/projects/sho9" className="button-secondary mt-7">
                    شاهد تفاصيل المشروع
                    <span aria-hidden="true">←</span>
                  </Link>
                </div>
              </div>
            </article>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="scope-heading">
          <Container>
            <SectionHeading
              id="scope-heading"
              eyebrow="حدود واضحة"
              title="إيه اللي الخدمة تشملُه وإيه اللي بيتحدد حسب المشروع؟"
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
                eyebrow="قبل البداية"
                title="إيه اللي بحتاجه منك قبل البداية؟"
                description="المعلومات دي بتخليني أفهم حالة المتجر وأحدد المطلوب بشكل أدق."
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
              title="إجابات سريعة قبل ما نتكلم"
              description="تفاصيل التنفيذ النهائية بتعتمد على حالة المتجر والثيم ونطاق التعديلات."
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
              <p className="eyebrow text-white">خلينا نراجع المتجر</p>
              <h2 id="final-cta-heading" className="mt-4 text-balance text-4xl leading-[1.35] font-extrabold sm:text-5xl lg:text-6xl">
                لو عندك متجر سلة ومحتاج تطوير فعلي في الشكل والتجربة، ابعتلي رابط المتجر
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
                أراجع الوضع الحالي ونحدد هل المطلوب تصميم، تخصيص، أو تطوير أعمق داخل الثيم.
              </p>
              <a
                href={portfolio.person.whatsapp.url}
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
