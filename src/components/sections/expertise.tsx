import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import {
  primaryServices,
  serviceCapabilities,
  uncertainServiceMessage,
} from "@/data/service-model";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

export function Expertise() {
  return (
    <section id="service" className="section-shell scroll-mt-20 bg-mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الخدمتان الأساسيتان"
            title="ابدأ من احتياج متجرك، ثم نحدد نطاق التنفيذ"
            description="المسار الأول لتصميم وتجهيز تجربة المتجر، والثاني للتخصيص والتطوير التقني داخل الثيم. أما الإعداد والتتبع والتكاملات والدعم فتدخل كقدرات ضمن المسار المناسب."
          />
        </Reveal>

        <Stagger className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          {primaryServices.map((service) => (
            <StaggerItem key={service.id} as="article" className="motion-card-interaction flex min-h-full flex-col rounded-[1.1rem] border border-navy/10 bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5 border-b border-navy/10 pb-5">
                <div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-slate-600" dir="ltr">
                    {service.label}
                  </p>
                  <h3 className="mt-2.5 text-2xl font-semibold leading-[1.5] text-navy">
                    {service.title}
                  </h3>
                </div>
                <span className="shrink-0 font-mono text-sm font-semibold text-blue" dir="ltr">
                  {service.number}
                </span>
              </div>
              <p className="mt-5 leading-8 text-slate-700">{service.audience}</p>
              <ul className="mt-5 grid gap-2.5">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="button-secondary mt-auto self-start pt-3">
                {service.ctaLabel}
                <span aria-hidden="true">←</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <section className="mt-14 border-t border-navy/10 pt-10" aria-labelledby="home-capabilities-heading">
            <div className="max-w-3xl">
              <p className="eyebrow text-blue">قدرات تحت الخدمتين</p>
              <h3 id="home-capabilities-heading" className="mt-4 text-2xl font-semibold leading-[1.45] text-navy sm:text-3xl">
                احتياجات مكملة تُضم إلى نطاق المشروع عند الحاجة
              </h3>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.1rem] border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCapabilities.map((capability) => (
                <article key={capability.title} className="bg-white p-5 sm:p-6">
                  <h4 className="font-semibold leading-7 text-navy">{capability.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 rounded-[1rem] border border-blue/20 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-semibold text-navy">مش متأكد أنهي خدمة مناسبة؟</p>
            <p className="mt-2 leading-7 text-slate-600">ابعت رابط متجرك والمطلوب، وأنا أحدد معاك الأنسب.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="button-secondary">كل التفاصيل</Link>
            <a
              href={createWhatsAppServiceUrl(portfolio.person.whatsapp.url, uncertainServiceMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
              aria-label="أرسل رابط متجرك والمطلوب عبر واتساب — يفتح في نافذة جديدة"
            >
              ساعدني أختار
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
