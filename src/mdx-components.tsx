import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import type { ResolvedProjectImage } from "@/lib/projects/project-types";

function MdxLink({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className="font-semibold text-blue underline decoration-blue/35 underline-offset-4 transition-colors hover:decoration-blue"
    />
  );
}

function MdxImage({ src, alt = "" }: ComponentPropsWithoutRef<"img">) {
  if (typeof src !== "string") return null;
  return (
    <span className="my-8 block overflow-hidden rounded-[1.25rem] border border-navy/10 bg-white">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 100vw, 760px"
        className="h-auto w-full object-cover"
      />
    </span>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-[1.25rem] border border-blue/20 bg-blue/5 p-5 sm:p-6">
      {title ? <p className="font-semibold text-navy">{title}</p> : null}
      <div className={title ? "mt-2" : undefined}>{children}</div>
    </aside>
  );
}

export function ProjectImageGallery({ images }: { images: ResolvedProjectImage[] }) {
  return <ProjectGallery images={images} />;
}

export function FactGrid({
  items,
}: {
  items: Array<{ value: string; label: string }>;
}) {
  return (
    <dl className="my-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={`${item.value}-${item.label}`} className="rounded-xl border border-navy/10 bg-white p-5">
          <dt className="text-sm leading-6 text-slate-600">{item.label}</dt>
          <dd className="mt-1 text-xl font-semibold text-navy">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy sm:text-3xl" {...props} />,
    h3: (props) => <h3 className="mt-9 text-xl font-semibold tracking-tight text-navy" {...props} />,
    p: (props) => <p className="mt-4 leading-8 text-slate-700" {...props} />,
    ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-slate-700 marker:text-blue" {...props} />,
    ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-700 marker:font-semibold marker:text-blue" {...props} />,
    a: MdxLink,
    img: MdxImage,
    Callout,
    ProjectImageGallery,
    FactGrid,
    ...components,
  };
}
