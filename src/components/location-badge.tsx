export function LocationBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`border-border text-foreground inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-sm font-medium whitespace-nowrap ${className}`}
    >
      <span
        className="relative inline-flex h-3.5 w-5 shrink-0 overflow-hidden rounded-sm"
        aria-hidden="true"
      >
        <span className="absolute inset-0 flex flex-col">
          <span className="h-1/3 bg-black" />
          <span className="h-1/3 bg-[#DD0000]" />
          <span className="h-1/3 bg-[#FFCE00]" />
        </span>
      </span>
      Frankfurt, Germany
    </span>
  );
}
