type ProjectPlaceholderProps = {
  number: string;
  category: string;
  title: string;
  className?: string;
};

export function ProjectPlaceholder({
  number,
  category,
  title,
  className = "",
}: ProjectPlaceholderProps) {
  return (
    <div
      className={`project-visual relative isolate overflow-hidden border-b border-navy/10 px-6 py-8 sm:px-8 ${className}`}
      aria-hidden="true"
    >
      <div className="project-orbit project-orbit-one" />
      <div className="project-orbit project-orbit-two" />
      <div className="relative flex min-h-40 flex-col justify-between sm:min-h-48">
        <div className="flex items-start justify-between gap-5">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
            Selected work
          </span>
          <span className="font-mono text-5xl font-semibold tracking-[-0.08em] text-blue sm:text-6xl">
            {number}
          </span>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-blue">
            {category}
          </p>
          <p className="mt-2 max-w-md text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
