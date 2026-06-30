import { Logo } from "@/components/logo";

export function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex-1">
      <main className="flex-1 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-8 lg:px-12">
          <Logo className="mb-8" />
          <h1 className="text-foreground mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
