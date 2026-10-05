import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const demonstratedCapabilities = [
  {
    title: "العمل داخل متجر سلة",
    description: "المشروع منفذ على منصة Salla، والرابط المباشر للمتجر متاح للزيارة.",
  },
  {
    title: "تصميم وتطوير الواجهة",
    description: "نطاق الدور الموثق هو تصميم وتطوير المتجر من البداية للنهاية.",
  },
  {
    title: "تخصيص الثيم",
    description: "بيانات المشروع تسجل تخصيص الثيم والعمل باستخدام CSS وJavaScript.",
  },
  {
    title: "دعم مستمر",
    description: "المشروع يتضمن متابعة وصيانة مستمرة وفق المعلومات المنشورة.",
  },
];

const relatedServices = [
  {
    title: "تصميم وتجهيز متجر سلة",
    description: "للمتاجر اللي تحتاج تنظيم الواجهة وتجهيز تجربة المتجر من البداية.",
    href: "/services/salla-store-design",
    label: "تفاصيل خدمة تصميم متجر سلة",
  },
  {
    title: "تخصيص وتطوير ثيم سلة",
    description: "لتعديلات الثيم وتنفيذ تغييرات Frontend باستخدام CSS وJavaScript.",
    href: "/services/salla-theme-customization",
    label: "تفاصيل خدمة تخصيص الثيم",
  },
];

export function Sho9CaseStudy({
  project,
}: {
  project: ResolvedProjectMetadata;
}) {
  const projectInquiryUrl = createWhatsAppServiceUrl(
    portfolio.person.whatsapp.url,
    `مرحبًا هشام، وصلت من مشروع ${project.shortTitle} وأرغب في مناقشة متجر مشابه على سلة.

رابط المتجر إن وجد:
المطلوب:
`,
  );

  return (
    <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
      <section
        aria-labelledby="project-context-heading"
        className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"
      >
        <div>
          <p className="eyebrow text-blue">سياق موثق</p>
          <h2
            id="project-context-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
          >
            عن المشروع
          </h2>
        </div>
        <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-700">{project.overview}</p>
          <p className="mt-5 leading-8 text-slate-600">
            المتاح من بيانات المشروع يوضح المنصة، نطاق دور هشام، الأدوات التقنية
            المسجلة، واستمرار المتابعة. لا تنسب دراسة الحالة للمشروع مشكلة تجارية
            أو نتيجة غير موثقة.
          </p>
        </div>
      </section>

      <section aria-labelledby="project-role-heading">
        <div className="max-w-3xl">
          <p className="eyebrow text-blue">النطاق المؤكد</p>
          <h2
            id="project-role-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
          >
            دوري في المشروع
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">{project.role}.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-[1.5rem] border border-navy/10 bg-navy p-6 text-cream sm:p-8">
            <p className="eyebrow text-cyan">Platform</p>
            <h3 className="mt-4 text-2xl font-extrabold">Salla</h3>
            <p className="mt-3 leading-8 text-slate-300">
              متجر إلكتروني قائم على منصة سلة ومتاح عبر رابطه المباشر.
            </p>
          </article>
          <article className="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8">
            <p className="eyebrow text-blue">Frontend scope</p>
            <h3 className="mt-4 text-2xl font-extrabold text-navy">
              تصميم، تطوير، وتخصيص الثيم
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              نطاق المشروع المنشور يربط العمل بالواجهة، تخصيص الثيم، واستخدام
              CSS وJavaScript.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="implementation-heading">
        <div className="max-w-3xl">
          <p className="eyebrow text-blue">تنفيذ موثق</p>
          <h2
            id="implementation-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
          >
            إيه اللي اتنفذ؟
          </h2>
        </div>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-2">
          {project.contributions.map((contribution, index) => (
            <li key={contribution} className="min-h-36 bg-white p-6 sm:p-8">
              <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 font-bold leading-8 text-navy">{contribution}</p>
            </li>
          ))}
        </ol>
      </section>

      {project.maintenance ? (
        <section
          aria-labelledby="maintenance-heading"
          className="rounded-[1.75rem] bg-navy p-6 text-cream sm:p-9 lg:p-12"
        >
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="eyebrow text-cyan">Ongoing work</p>
              <h2
                id="maintenance-heading"
                className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl"
              >
                الدعم والصيانة
              </h2>
            </div>
            <div>
              <p className="text-xl font-extrabold leading-9">
                {project.maintenance} للمتجر.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                ده يثبت استمرار العلاقة بالمشروع بعد التنفيذ. البيانات المنشورة لا
                تحدد SLA أو مواعيد استجابة أو تكرارًا ثابتًا للصيانة، لذلك لا يتم
                افتراض أي منها هنا.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="proof-heading">
        <div className="max-w-3xl">
          <p className="eyebrow text-blue">قدرات، مش نتائج تجارية</p>
          <h2
            id="proof-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
          >
            المشروع بيوضح إيه؟
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            Sho9 دليل على نطاق تنفيذ داخل متجر سلة. الصفحة لا تدّعي زيادة مبيعات
            أو Conversion rate أو أي نتيجة تجارية غير موثقة.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {demonstratedCapabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.25rem] border border-navy/10 bg-white p-6"
            >
              <h3 className="text-xl font-extrabold text-navy">{item.title}</h3>
              <p className="mt-3 leading-8 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 rounded-[1.25rem] border border-blue/20 bg-blue/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="leading-8 text-slate-700">
            اعرف أكتر عن تخصص هشام وطريقة شغله مع متاجر سلة.
          </p>
          <Link href="/about" className="button-secondary shrink-0">
            عن هشام علي
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="related-services-heading">
        <div className="max-w-3xl">
          <p className="eyebrow text-blue">الخطوة المناسبة حسب احتياجك</p>
          <h2
            id="related-services-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
          >
            خدمات مرتبطة بالمشروع
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {relatedServices.map((service) => (
            <article
              key={service.href}
              className="flex flex-col rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8"
            >
              <h3 className="text-2xl font-extrabold text-navy">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-700">{service.description}</p>
              <Link
                href={service.href}
                className="motion-arrow-link mt-auto inline-flex min-h-11 items-center gap-2 pt-7 font-bold text-blue"
              >
                {service.label}
                <span aria-hidden="true" className="motion-arrow inline-block">
                  ←
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="project-cta-heading"
        className="contact-grid overflow-hidden rounded-[1.75rem] bg-navy p-6 text-cream sm:p-9 lg:p-12"
      >
        <p className="eyebrow text-cyan">مشروع مشابه</p>
        <h2
          id="project-cta-heading"
          className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl"
        >
          عندك متجر سلة وعايز تنفذ تعديلات مشابهة؟
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          ابعت رابط المتجر ووصف مختصر للمطلوب، ونحدد هل الاحتياج تصميم، تخصيص
          ثيم، أو تعديل Frontend.
        </p>
        <a
          href={projectInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={portfolio.person.whatsapp.ariaLabel}
          className="button-primary mt-8"
        >
          تواصل معي
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
