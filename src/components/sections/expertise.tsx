import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="service" className="section-shell scroll-mt-20 bg-mist">
      <Container>
        <SectionHeading
          eyebrow="الخدمة"
          title="خدمات تصميم وتطوير متاجر سلة"
          description="أساعدك في تجهيز متجر جديد أو تحسين متجر قائم، من التصميم والتخصيص إلى التطوير والتكاملات ضمن إمكانيات منصة سلة."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.expertise.map((item) => (
            <article key={item.number} className="flex min-h-full flex-col bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  {item.label ? (
                    <p className="font-mono text-xs font-bold uppercase text-blue" dir="ltr">
                      {item.label}
                    </p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-extrabold leading-snug text-navy">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                  {item.number}
                </span>
              </div>
              <p className="mt-4 max-w-xl leading-7 text-slate-600" dir="auto">
                {item.description}
              </p>
              {item.href && item.ctaLabel ? (
                <Link
                  href={item.href}
                  className="motion-arrow-link mt-6 inline-flex items-center gap-2 self-start font-bold text-blue"
                >
                  {item.ctaLabel}
                  <span aria-hidden="true" className="motion-arrow">←</span>
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 border-t border-navy/10 pt-7 md:grid-cols-2">
          <Link
            href="/services/salla-store-design"
            className="motion-card-interaction flex items-center justify-between gap-5 rounded-[1.25rem] border border-navy/10 bg-white p-5 text-navy"
          >
            <span>
              <span className="block text-sm font-bold text-blue">تصميم وتجهيز المتجر</span>
              <span className="mt-1 block leading-7 text-slate-600">الهيكلة، العرض، وتجربة الاستخدام</span>
            </span>
            <span aria-hidden="true" className="motion-arrow text-blue">←</span>
          </Link>
          <Link
            href="/services/salla-theme-customization"
            className="motion-card-interaction flex items-center justify-between gap-5 rounded-[1.25rem] border border-navy/10 bg-navy p-5 text-cream"
          >
            <span>
              <span className="block text-sm font-bold text-cyan">تخصيص وتطوير الثيم</span>
              <span className="mt-1 block leading-7 text-slate-300">CSS، JavaScript، وTwilight</span>
            </span>
            <span aria-hidden="true" className="motion-arrow text-cyan">←</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
