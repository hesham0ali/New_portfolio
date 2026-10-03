import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const visibleTestimonials =
    process.env.NODE_ENV === "development"
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.verified);

  if (visibleTestimonials.length === 0) return null;

  const containsDemoContent = visibleTestimonials.some(
    (testimonial) => !testimonial.verified,
  );

  const gridClass =
    visibleTestimonials.length === 1
      ? "max-w-3xl"
      : visibleTestimonials.length === 2
        ? "md:grid-cols-2"
        : visibleTestimonials.length === 5
          ? "md:grid-cols-2 lg:grid-cols-6"
          : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-shell scroll-mt-20 bg-mist"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="آراء العملاء"
            title="تجارب من عملاء عملت معهم"
            description={
              containsDemoContent
                ? "معاينة تطويرية لمحتوى تجريبي غير منشور، جاهز للاستبدال بآراء عملاء معتمدة."
                : "آراء من عملاء عملت معهم على مشاريع ومتاجر مختلفة."
            }
          />
        </Reveal>

        <Stagger className={`mt-10 grid items-stretch gap-5 ${gridClass}`}>
          {visibleTestimonials.map((testimonial, index) => {
            const clientDetails = [
              testimonial.clientRole,
              testimonial.company,
            ].filter(Boolean);
            const balancedFiveCardClass =
              visibleTestimonials.length === 5
                ? index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
                : "";
            const projectLabel = testimonial.project
              ? testimonial.project.startsWith("مشروع")
                ? testimonial.project
                : `مشروع ${testimonial.project}`
              : undefined;

            return (
              <StaggerItem
                key={testimonial.id}
                as="article"
                className={`motion-card-interaction flex h-full min-w-0 flex-col rounded-[1.25rem] border border-navy/10 bg-white p-6 sm:p-8 ${balancedFiveCardClass}`}
              >
                <blockquote className="text-lg leading-9 text-slate-700">
                  <p>{testimonial.quote}</p>
                </blockquote>

                <footer className="mt-auto border-t border-navy/10 pt-6">
                  <div className="flex min-w-0 items-center gap-3.5">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar.src}
                        alt={testimonial.avatar.alt}
                        width={44}
                        height={44}
                        className="size-11 shrink-0 rounded-full object-cover"
                      />
                    ) : null}

                    <div className="min-w-0">
                      <cite className="block font-semibold not-italic text-navy">
                        {testimonial.clientName}
                      </cite>
                      {clientDetails.length > 0 ? (
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {clientDetails.join(" · ")}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {testimonial.project ? (
                    <p className="mt-4 text-xs font-medium text-blue">
                      {projectLabel}
                    </p>
                  ) : null}

                  {testimonial.source ? (
                    <a
                      href={testimonial.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-blue"
                    >
                      {testimonial.source.label ?? "عرض المصدر"}
                      <span aria-hidden="true" className="me-2">
                        ↗
                      </span>
                    </a>
                  ) : null}
                </footer>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
