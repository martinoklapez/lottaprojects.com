import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "/" }: LogoProps) {
  const wordmark = (
    <span className="text-[1.125rem] leading-none font-semibold tracking-tight sm:text-xl">
      <span className="text-foreground">lotta</span>
      <span className="text-muted-foreground">projects</span>
    </span>
  );

  if (!href) {
    return <span className={`inline-flex ${className}`}>{wordmark}</span>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex transition-opacity hover:opacity-80 ${className}`}
    >
      {wordmark}
    </Link>
  );
}
