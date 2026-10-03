import type { ServicePackageItem } from "@/types/portfolio";

type PackageCardProps = {
  servicePackage: ServicePackageItem;
  inquiryUrl: string;
  featuresLimit?: number;
};

export function PackageCard({
  servicePackage,
  inquiryUrl,
  featuresLimit,
}: PackageCardProps) {
  const titleId = `package-${servicePackage.id}-title`;
  const visibleFeatures = featuresLimit
    ? servicePackage.features.slice(0, featuresLimit)
    : servicePackage.features;

  return (
    <article
      aria-labelledby={titleId}
      className="motion-card-interaction flex h-full min-w-0 flex-col rounded-[1.25rem] border border-navy/10 bg-white p-6 sm:p-7"
    >
      <div className="border-b border-navy/10 pb-5">
        <p
          className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-blue"
          dir="ltr"
        >
          {servicePackage.englishLabel}
        </p>
        <h3
          id={titleId}
          className="mt-2.5 text-2xl font-semibold leading-[1.5] text-navy"
        >
          {servicePackage.title}
        </h3>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold text-blue">مناسبة لـ</p>
        <p className="mt-1.5 text-sm leading-7 font-medium text-navy">
          {servicePackage.audience}
        </p>
      </div>

      <p className="mt-4 text-[0.95rem] leading-7 text-slate-600">
        {servicePackage.description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-navy">تشمل:</p>
        <ul className="mt-3 grid gap-2.5">
          {visibleFeatures.map((feature) => (
            <li key={feature} className="flex min-w-0 gap-3 text-sm leading-7 text-slate-600">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue"
              />
              <span className="min-w-0" dir="auto">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-navy/10 pt-6">
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${servicePackage.ctaLabel} عبر واتساب — يفتح في نافذة جديدة`}
          className="button-primary w-full"
        >
          {servicePackage.ctaLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
