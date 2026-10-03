import { Container } from "@/components/layout/container";
import { portfolio } from "@/data/portfolio";

export function ServiceCta() {
  return (
    <section className="bg-mist pb-16 sm:pb-20 lg:pb-24" aria-labelledby="service-cta-heading">
      <Container>
        <div className="grid items-center gap-6 rounded-[1.5rem] border border-white/10 bg-navy p-6 text-cream sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 lg:p-10">
          <div>
            <p className="eyebrow text-cyan">خطوتك التالية</p>
            <h2 id="service-cta-heading" className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
              عندك متجر سلة أو بتجهّز متجر جديد؟
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              أرسل لي رابط متجرك أو تفاصيل مشروعك، ونحدّد معًا نطاق العمل المناسب.
            </p>
          </div>

          <a
            href={portfolio.person.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={portfolio.person.whatsapp.ariaLabel}
            className="button-primary w-full md:w-auto"
          >
            ناقش مشروعك
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
