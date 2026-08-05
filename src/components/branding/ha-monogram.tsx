type HaMonogramProps = {
  size: number;
  color?: string;
};

export function HaMonogram({
  size,
  color = "#59e1d4",
}: HaMonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 96"
      role="img"
      aria-label="HA"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M14 10h14v31h22L62 10h16l32 76H94L84 61H49l-8 25H26l10-31h-8v31H14V10Zm40 38h25L69 23 54 48Z"
      />
    </svg>
  );
}
