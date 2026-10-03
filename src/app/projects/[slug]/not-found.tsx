import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="section-shell min-h-[65vh] bg-cream">
        <Container className="text-center">
          <p className="eyebrow text-blue">المشروع غير موجود</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy">
            هذا المشروع غير متاح.
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-700">
            قد يكون المشروع غير منشور أو أن الرابط غير صحيح.
          </p>
          <Link href="/projects" className="button-primary mt-8">
            عرض كل الأعمال
          </Link>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
