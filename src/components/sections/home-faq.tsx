import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/data/home-faqs";

export function HomeFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="home-faq-heading"
      className="section-shell scroll-mt-20 bg-cream"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="home-faq-heading"
            eyebrow="أسئلة شائعة"
            title="إجابات سريعة قبل بدء المشروع"
            description="تعتمد التفاصيل النهائية على حالة المتجر ونطاق التصميم أو التطوير المطلوب."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 divide-y divide-navy/10 overflow-hidden rounded-[1.25rem] border border-navy/10 bg-white">
            {homeFaqs.map((faq, index) => (
              <details key={faq.question} className="group p-6 sm:p-7" open={index === 0}>
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-lg font-semibold leading-8 text-navy marker:content-none focus-visible:outline-[3px] focus-visible:outline-cyan focus-visible:outline-offset-4">
                  <h3 className="text-lg font-semibold leading-8">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl font-normal text-blue transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
