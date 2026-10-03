import Link from "next/link";
import type { ExpertiseItem } from "@/types/portfolio";

type ServiceCardProps = {
  service: ExpertiseItem;
  inquiryUrl: string;
};

export function ServiceCard({ service, inquiryUrl }: ServiceCardProps) {
  const titleId = `service-${service.number}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="motion-card-interaction flex min-h-full flex-col rounded-[1.25rem] border border-navy/10 bg-white p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-5 border-b border-navy/10 pb-5">
        <div>
          <p
            className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-slate-600"
            dir="ltr"
          >
            {service.label}
          </p>
          <h2
            id={titleId}
            className="mt-2.5 text-2xl font-semibold leading-[1.5] text-navy"
          >
            {service.title}
          </h2>
        </div>
        <span className="shrink-0 font-mono text-sm font-semibold text-blue" dir="ltr">
          {service.number}
        </span>
      </div>

      <p className="mt-5 leading-8 text-slate-700">{service.description}</p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-navy">يشمل:</p>
        <ul className="mt-3 grid gap-2.5">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex gap-3 text-sm leading-7 text-slate-600">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
              <span dir="auto">{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-navy/10 pt-6">
        {service.href && service.ctaLabel ? (
          <Link href={service.href} className="button-secondary">
            {service.ctaLabel}
            <span aria-hidden="true">←</span>
          </Link>
        ) : null}
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`اطلب خدمة ${service.title} من هشام على واتساب — يفتح في نافذة جديدة`}
          className="button-primary"
        >
          اطلب الخدمة
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
