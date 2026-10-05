import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/data/portfolio";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

const homeCtaMessage = `مرحبًا هشام، وصلت من موقعك وأرغب في تحديد نطاق مناسب لمتجر سلة.

رابط المتجر إن وجد:
المطلوب:
`;

export function ServiceCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-mist pb-16 sm:pb-20 lg:pb-24" aria-labelledby="service-cta-heading">
      <Container>
        <Reveal>
        <div className="grid items-center gap-6 rounded-[1.1rem] border border-white/10 bg-navy p-6 text-cream sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 lg:p-10">
          <div>
            <p className="eyebrow text-cyan">خطوتك التالية</p>
            <h2 id="service-cta-heading" className="mt-3 text-2xl font-semibold leading-[1.45] sm:text-3xl">
              عندك متجر سلة أو مشروع جديد؟
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              أرسل لي رابط متجرك أو تفاصيل مشروعك، ونحدّد معًا نطاق العمل المناسب.
            </p>
          </div>

          <a
            href={createWhatsAppServiceUrl(portfolio.person.whatsapp.url, homeCtaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={portfolio.person.whatsapp.ariaLabel}
            className="button-primary w-full md:w-auto"
          >
            ناقش مشروعك
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
