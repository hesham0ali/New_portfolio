type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${inverse ? "text-cyan" : "text-blue"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${inverse ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-pretty text-base leading-7 sm:text-lg ${
            inverse ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
