import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="service" className="section-shell scroll-mt-20 bg-mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الخدمة"
            title="خدمات تصميم وتطوير متاجر سلة"
            description="أساعدك في تجهيز متجر جديد أو تحسين متجر قائم، من التصميم والتخصيص إلى التطوير والتكاملات ضمن إمكانيات منصة سلة."
          />
        </Reveal>

        <div className="mt-7">
          <Link href="/services" className="button-secondary">
            استعرض كل الخدمات
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        <Stagger className="mt-10 grid gap-px overflow-hidden rounded-[1.1rem] border border-navy/10 bg-navy/10 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.expertise.map((item) => (
            <StaggerItem key={item.number} as="article" className="motion-card-interaction flex min-h-full flex-col bg-white p-6 sm:p-7">
              <div>
                <span className="font-mono text-xs font-medium text-blue" dir="ltr">
                  {item.number}
                </span>
                {item.label ? (
                  <p className="mt-5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-slate-600" dir="ltr">
                    {item.label}
                  </p>
                ) : null}
                <h3 className="mt-2.5 text-[1.4rem] font-semibold leading-[1.5] text-navy" dir="auto">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 max-w-xl text-[0.97rem] leading-7 text-slate-600" dir="auto">
                {item.description}
              </p>
              {item.href && item.ctaLabel ? (
                <Link
                  href={item.href}
                  className="motion-arrow-link mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-blue"
                >
                  {item.ctaLabel}
                  <span aria-hidden="true" className="motion-arrow">←</span>
                </Link>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 grid gap-4 border-t border-navy/10 pt-7 md:grid-cols-2">
          <Link
            href="/services/salla-store-design"
            className="motion-card-interaction flex items-center justify-between gap-5 rounded-[0.9rem] border border-navy/10 bg-white p-5 text-navy"
          >
            <span>
              <span className="block text-sm font-semibold text-blue">تصميم وتجهيز المتجر</span>
              <span className="mt-1 block leading-7 text-slate-600">الهيكلة، العرض، وتجربة الاستخدام</span>
            </span>
            <span aria-hidden="true" className="motion-arrow text-blue">←</span>
          </Link>
          <Link
            href="/services/salla-theme-customization"
            className="motion-card-interaction flex items-center justify-between gap-5 rounded-[0.9rem] border border-navy/10 bg-navy p-5 text-cream"
          >
            <span>
              <span className="block text-sm font-semibold text-cyan">تخصيص وتطوير الثيم</span>
              <span className="mt-1 block leading-7 text-slate-300">CSS، JavaScript، وTwilight</span>
            </span>
            <span aria-hidden="true" className="motion-arrow text-cyan">←</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
