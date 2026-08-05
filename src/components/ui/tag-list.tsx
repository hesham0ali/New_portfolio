type TagListProps = {
  items: string[];
  inverse?: boolean;
};

export function TagList({ items, inverse = false }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] ${
            inverse
              ? "border-white/15 bg-white/5 text-slate-200"
              : "border-navy/12 bg-white/70 text-slate-700"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
