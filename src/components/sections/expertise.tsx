import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="service" className="section-shell scroll-mt-20 bg-mist">
      <Container>
        <SectionHeading
          eyebrow="الخدمة"
          title="إيه اللي أقدر أشتغل عليه في متجرك؟"
          description="خدمة واحدة متكاملة لمتجر سلة، من ترتيب الواجهة إلى التخصيص الفني وتحسين تجربة الاستخدام."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 md:grid-cols-2">
          {portfolio.expertise.map((item) => (
            <article key={item.number} className="bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-2xl font-extrabold text-navy">{item.title}</h3>
                <span className="font-mono text-sm font-bold text-blue" dir="ltr">
                  {item.number}
                </span>
              </div>
              <p className="mt-4 max-w-xl leading-7 text-slate-600" dir="auto">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
