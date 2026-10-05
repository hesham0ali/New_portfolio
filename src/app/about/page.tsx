import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { personId, portfolio, siteUrl, websiteId } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects/get-projects";
import {
  aboutDescription,
  aboutTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";

const pagePath = "/about";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: { absolute: aboutTitle },
  description: aboutDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: aboutTitle,
    description: aboutDescription,
    locale: "ar_SA",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [twitterImageUrl],
  },
};

const specializations = [
  {
    number: "01",
    title: "تصميم وتجهيز متاجر سلة",
    description:
      "إعداد المتجر، تنظيم الصفحة الرئيسية والأقسام، تحسين عرض المنتجات، ومراجعة تجربة الموبايل.",
    href: "/services/salla-store-design",
    linkLabel: "تفاصيل تصميم وتجهيز متاجر سلة",
  },
  {
    number: "02",
    title: "تخصيص وتطوير الثيمات",
    description:
      "تعديل الثيم الموجود باستخدام CSS وJavaScript، وتنفيذ إصلاحات Responsive وتعديلات Frontend حسب الحاجة.",
    href: "/services/salla-theme-customization",
    linkLabel: "تفاصيل تخصيص وتطوير ثيمات سلة",
  },
  {
    number: "03",
    title: "Components مخصصة باستخدام Twilight",
    description:
      "بناء Sections مخصصة وقابلة للتحكم من إعدادات الثيم عندما يحتاج المتجر حلًا يتجاوز المكونات الجاهزة.",
    href: "/services/salla-theme-customization#twilight-heading",
    linkLabel: "اعرف أكتر عن Twilight Components",
  },
];

const workingPrinciples = [
  "أفهم احتياج المتجر قبل التنفيذ.",
  "أفرق بين اللي ينفع يتعمل من إعدادات الثيم واللي يحتاج كود.",
  "أفضل تعديل الموجود لما يكون مناسب بدل إعادة البناء بدون داعي.",
  "أراجع التنفيذ على الموبايل والديسكتوب.",
  "أحافظ على إن الحل يبقى واضح وقابل للصيانة قدر الإمكان.",
];

const toolkit = [
  "HTML",
  "CSS",
  "JavaScript",
  "Salla Themes",
  "Twilight",
  "Responsive Frontend",
  "Git / GitHub",
];

const audiences = [
  "أصحاب متاجر سلة اللي بيبدأوا متجر جديد ويحتاجوا تجهيز واضح من البداية.",
  "براندات محتاجة إعادة تصميم واجهة المتجر أو تطبيق هويتها البصرية.",
  "فرق عندها متجر قائم ويحتاج تخصيص ثيم أو تعديلات Frontend.",
  "متاجر موجهة بشكل أساسي للسوق السعودي والعملاء الناطقين بالعربية.",
];

export default async function AboutPage() {
  const sho9 = await getProjectBySlug("sho9");
  if (!sho9) throw new Error("The published Sho9 project is required.");

  const project = sho9.metadata;
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile-page`,
        url: pageUrl,
        name: aboutTitle,
        description: aboutDescription,
        inLanguage: "ar",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
            name: "عن هشام علي",
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
            __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className="hero-grid overflow-hidden bg-navy text-cream">
          <Container className="py-14 sm:py-20 lg:py-24">
            <nav
              aria-label="مسار الصفحة"
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <Link href="/" className="touch-link link-underline hover:text-cream">
                الرئيسية
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-300">
                عن هشام علي
              </span>
            </nav>

            <div className="mt-9 grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-cyan">عن هشام علي</p>
                <h1 className="mt-5 max-w-5xl text-balance text-4xl leading-[1.3] font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.25]">
                  هشام علي: الخبرة، التخصص، وطريقة العمل
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  أنا مطور واجهات أركز على متاجر سلة، من تنظيم تجربة المتجر وتصميمها إلى تنفيذ تعديلات Frontend باستخدام CSS وJavaScript وTwilight عند الحاجة.
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                  أركز بشكل أساسي على المتاجر الإلكترونية الموجهة للسوق السعودي والعربي.
                </p>
                <a
                  href={portfolio.person.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portfolio.person.whatsapp.ariaLabel}
                  className="button-primary mt-8"
                >
                  ناقش مشروعك معي
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <aside className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-7">
                <p className="eyebrow text-cyan">التخصص الأساسي</p>
                <p className="mt-4 text-xl font-extrabold leading-8">
                  واجهات متاجر سلة من الهيكلة والتصميم لحد التنفيذ داخل الثيم.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="مجالات التخصص">
                  {["Salla", "Frontend", "CSS", "JavaScript", "Twilight"].map(
                    (item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs font-bold text-cyan"
                        dir="ltr"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="specializations-heading">
          <Container>
            <SectionHeading
              id="specializations-heading"
              eyebrow="التخصص"
              title="إيه اللي بشتغل عليه؟"
              description="شغلي يربط بين تجهيز المتجر، شكل الواجهة، والتنفيذ التقني داخل ثيم سلة حسب مستوى التخصيص المطلوب."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {specializations.map((item) => (
                <article
                  key={item.number}
                  className="motion-card-interaction flex flex-col rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-7"
                >
                  <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                    {item.number}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold leading-9 text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-700" dir="auto">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="motion-arrow-link mt-auto inline-flex min-h-11 items-center gap-2 pt-7 font-bold text-blue"
                  >
                    {item.linkLabel}
                    <span aria-hidden="true" className="motion-arrow inline-block">
                      ←
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell bg-navy text-cream" aria-labelledby="work-style-heading">
          <Container>
            <SectionHeading
              id="work-style-heading"
              eyebrow="تنفيذ عملي"
              title="طريقة شغلي"
              description="الهدف هو اختيار مستوى التنفيذ المناسب للمشكلة، ثم تسليمه بشكل واضح على المقاسات الأساسية."
              inverse
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {workingPrinciples.map((principle, index) => (
                <li
                  key={principle}
                  className="rounded-[1.25rem] border border-white/15 bg-white/5 p-5"
                >
                  <span className="font-mono text-sm font-bold text-cyan" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 leading-7 text-slate-300">{principle}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="toolkit-heading">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading
                id="toolkit-heading"
                eyebrow="Technical toolkit"
                title="الأدوات والتقنيات اللي بستخدمها"
                description="أستخدم التقنية المناسبة لتنفيذ الواجهة داخل سلة، مع الحفاظ على بساطة الحل وقابليته للصيانة."
              />
              <div>
                <ul className="grid gap-3 sm:grid-cols-2" aria-label="التقنيات الأساسية">
                  {toolkit.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-16 items-center gap-3 rounded-[1rem] border border-navy/10 bg-white px-5 font-bold text-navy"
                      dir="auto"
                    >
                      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-[1.25rem] border border-navy/10 bg-white p-6">
                  <p className="font-extrabold text-navy">دعم اتجاه الـ UI عند الحاجة</p>
                  <p className="mt-3 leading-8 text-slate-700">
                    أستخدم Google Stitch وClaude Design للمساعدة في تكوين اتجاهات أو Mockups بسيطة للواجهة عند الحاجة، ثم أنفذ الحل المناسب مباشرة داخل ثيم سلة.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="real-work-heading">
          <Container>
            <SectionHeading
              id="real-work-heading"
              eyebrow="دليل من الشغل"
              title="شغل فعلي"
              description="مشروع Sho9 هو المثال الحالي على تصميم وتطوير متجر على منصة سلة من البداية للنهاية."
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
                  <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                    {project.overview}
                  </p>
                  <dl className="mt-7 border-y border-navy/10 py-6">
                    <div>
                      <dt className="text-sm text-slate-600">الدور</dt>
                      <dd className="mt-2 font-bold leading-7 text-navy">{project.role}</dd>
                    </div>
                  </dl>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Link href="/projects/sho9" className="button-secondary">
                      شاهد تفاصيل مشروع Sho9
                      <span aria-hidden="true">←</span>
                    </Link>
                    <Link href="/projects" className="link-underline font-bold text-blue">
                      استعرض كل الأعمال والخبرات التقنية
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </section>

        <section className="section-shell bg-mist" aria-labelledby="salla-focus-heading">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading
                id="salla-focus-heading"
                eyebrow="Salla storefronts"
                title="ليه تركيزي الأساسي على متاجر سلة؟"
              />
              <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
                <p className="text-lg leading-9 text-slate-700">
                  العمل على متجر سلة يجمع بين هيكلة الواجهة، الـ UI، تخصيص الـ Frontend، والتنفيذ التقني داخل الثيم. احتياجات كتير بتكون في المساحة بين إعدادات الثيم الجاهزة والتطوير المخصص بالكامل؛ ودوري هو تحديد المستوى الأنسب للتنفيذ وتطبيقه بدون تعقيد غير ضروري.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-shell bg-cream" aria-labelledby="audience-heading">
          <Container>
            <SectionHeading
              id="audience-heading"
              eyebrow="نطاق المشاريع"
              title="بشتغل مع مين؟"
              description="التركيز الأساسي على متاجر وبراندات سلة الموجهة للسوق السعودي والعربي."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {audiences.map((item, index) => (
                <li
                  key={item}
                  className="flex min-h-28 gap-4 rounded-[1.25rem] border border-navy/10 bg-white p-6"
                >
                  <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-8 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="section-shell bg-navy text-cream" aria-labelledby="profiles-heading">
          <Container>
            <SectionHeading
              id="profiles-heading"
              eyebrow="External profiles"
              title="روابط مهنية"
              description="الملفات المهنية المتاحة حاليًا لمراجعة الخبرة التقنية والكود."
              inverse
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={portfolio.person.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="motion-card-interaction flex min-h-28 items-center justify-between gap-5 rounded-[1.25rem] border border-white/15 bg-white/5 p-6"
                aria-label="زيارة ملف هشام علي المهني على LinkedIn — يفتح في نافذة جديدة"
              >
                <span>
                  <span className="block text-sm text-slate-400">الملف المهني</span>
                  <span className="mt-2 block text-2xl font-extrabold">LinkedIn</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-cyan">↗</span>
              </a>
              <a
                href={portfolio.person.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="motion-card-interaction flex min-h-28 items-center justify-between gap-5 rounded-[1.25rem] border border-white/15 bg-white/5 p-6"
                aria-label="زيارة حساب هشام علي على GitHub — يفتح في نافذة جديدة"
              >
                <span>
                  <span className="block text-sm text-slate-400">مشروعات وكود</span>
                  <span className="mt-2 block text-2xl font-extrabold">GitHub</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-cyan">↗</span>
              </a>
            </div>
          </Container>
        </section>

        <section
          className="contact-grid bg-blue py-16 text-white sm:py-20 lg:py-24"
          aria-labelledby="final-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-white">حدد أنسب نطاق للتنفيذ</p>
              <h2
                id="final-cta-heading"
                className="mt-4 text-balance text-4xl leading-[1.35] font-extrabold sm:text-5xl lg:text-6xl"
              >
                لو عندك متجر سلة وعايز تعرف أنسب طريقة لتنفيذ التعديل
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
                ابعت رابط المتجر أو وصف مختصر للمشروع، ونحدد هل المطلوب تجهيز، تصميم، تخصيص ثيم، أو تطوير Frontend أعمق.
              </p>
              <a
                href={portfolio.person.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.person.whatsapp.ariaLabel}
                className="button-contact-primary mt-8 min-w-56"
              >
                تواصل معي
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
