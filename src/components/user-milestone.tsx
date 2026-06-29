const AVERAGE_RATING = 4.3;

const STAR_PATH =
  "M12 2.5l2.83 5.74 6.33.92-4.58 4.47 1.08 6.3L12 16.9l-5.66 2.97 1.08-6.3-4.58-4.47 6.33-.92L12 2.5z";

function Star({ fill, index }: { fill: number; index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`rating-star-grad-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F9D976" />
          <stop offset="100%" stopColor="#E5A318" />
        </linearGradient>
        <clipPath id={`rating-star-clip-${index}`}>
          <rect x="0" y="0" width={24 * fill} height="24" />
        </clipPath>
      </defs>

      <path
        fill="#ECECEC"
        stroke="#E0E0E0"
        strokeWidth="0.35"
        strokeLinejoin="round"
        d={STAR_PATH}
      />

      {fill > 0 && (
        <path
          fill={`url(#rating-star-grad-${index})`}
          clipPath={`url(#rating-star-clip-${index})`}
          d={STAR_PATH}
        />
      )}
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return <Star key={i} index={i} fill={fill} />;
      })}
    </div>
  );
}

function MilestoneStat({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center sm:px-8 sm:py-8">
      <p className="bg-linear-to-br from-foreground via-foreground to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent tabular-nums sm:text-5xl md:text-6xl">
        {value}
      </p>
      {children}
      <p className="text-foreground mt-2 text-base font-semibold tracking-tight sm:text-lg">
        {label}
      </p>
    </div>
  );
}

export function UserMilestone() {
  return (
    <div
      className="relative mt-14 w-full max-w-3xl"
      aria-label={`${AVERAGE_RATING} average rating, over 500,000 users across our products`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="border-border/80 relative overflow-hidden rounded-3xl border bg-linear-to-b from-primary/6 via-background to-background">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:24px_24px] opacity-40"
          aria-hidden="true"
        />

        <div className="border-border relative grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <MilestoneStat value="500,000+" label="Users across our products." />

          <MilestoneStat
            value={AVERAGE_RATING.toFixed(1)}
            label="Average rating."
          >
            <div className="mt-3.5">
              <StarRating rating={AVERAGE_RATING} />
            </div>
          </MilestoneStat>
        </div>
      </div>
    </div>
  );
}
