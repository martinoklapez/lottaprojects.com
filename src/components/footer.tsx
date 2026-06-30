import Link from "next/link";
import { CopyrightYear } from "./copyright-year";
import { LocationBadge } from "./location-badge";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-border mt-auto border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-3">
          <Logo />
          <LocationBadge />
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end">
            <Link
              href="/jobs"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/imprint"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Imprint
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
          <p className="text-muted-foreground text-xs">
            © <CopyrightYear /> lottaprojects
          </p>
        </div>
      </div>
    </footer>
  );
}
