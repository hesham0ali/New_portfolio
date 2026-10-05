import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { PackageCard } from "@/components/services/package-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { servicePackages } from "@/data/service-packages";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";

type ServicePackagesProps = {
  compact?: boolean;
  className?: string;
};

export function ServicePackages({
  compact = false,
  className = "bg-cream",
}: ServicePackagesProps) {
  const headingId = compact ? "home-packages-heading" : "services-packages-heading";

  return (
    <section
      id="packages"
      aria-labelledby={headingId}
      className={`section-shell scroll-mt-20 ${className}`}
    >
      <Container>
        <Reveal>
          <SectionHeading
            id={headingId}
            eyebrow="خيارات النطاق"
            title="بعد تحديد الخدمة، اختر نطاقًا مبدئيًا للتنفيذ"
            description="الباقات ليست خدمات منفصلة؛ هي نقاط بداية لتحديد حجم العمل داخل تصميم المتجر أو تطوير الثيم، ثم يتأكد النطاق بعد مراجعة احتياجك."
          />
        </Reveal>

        <Stagger className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {servicePackages.map((servicePackage) => (
            <StaggerItem key={servicePackage.id} className="h-full min-w-0">
              <PackageCard
                servicePackage={servicePackage}
                inquiryUrl={createWhatsAppServiceUrl(
                  portfolio.person.whatsapp.url,
                  servicePackage.whatsappMessage,
                )}
                featuresLimit={compact ? 4 : undefined}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-7 text-sm leading-7 text-slate-600">
          يتم تحديد التكلفة بعد مراجعة نطاق ومتطلبات المشروع.
        </p>
      </Container>
    </section>
  );
}
