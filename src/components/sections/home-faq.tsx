"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/data/home-faqs";

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="home-faq-heading"
      className="scroll-mt-20 bg-cream py-10"
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
          <div className="mt-7 divide-y divide-navy/10 overflow-hidden rounded-[1.25rem] border border-navy/10 bg-white">
            {homeFaqs.map((faq, index) => (
              <div key={faq.question} className="px-5 sm:px-6">
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? null : index))
                    }
                    className="flex min-h-13 w-full items-center justify-between gap-5 rounded-sm py-1 text-start text-base font-semibold leading-7 text-navy transition-colors hover:text-blue focus-visible:outline-[3px] focus-visible:outline-cyan focus-visible:outline-offset-2 sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-2xl font-normal text-blue transition-transform duration-200 motion-reduce:transition-none ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={openIndex !== index}
                  className="pb-4"
                >
                  <p className="max-w-3xl text-[0.95rem] leading-7 text-slate-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
