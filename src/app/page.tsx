import Link from "next/link";
import { LocationBadge } from "@/components/location-badge";
import { Logo } from "@/components/logo";
import { UserMilestone } from "@/components/user-milestone";

export default function Home() {
  return (
    <div className="bg-background flex-1">
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <Logo className="mb-10" />

              <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-foreground">
                  We Build Products People Actually Use.
                </span>
                <br />
              </h1>

              <p className="text-muted-foreground mt-6 max-w-2xl text-lg md:text-xl">
                lottaprojects is a product studio in{" "}
                <LocationBadge className="mx-0.5 align-middle text-[0.95em]" />.
                We design, ship, and grow apps — no client work.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
                <Link
                  href="/jobs"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-white transition-all hover:bg-primary/80"
                >
                  Job listings
                </Link>
                <a
                  href="#contact"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-medium transition-all"
                >
                  Contact us
                </a>
              </div>

              <UserMilestone />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="products" className="scroll-mt-32 py-20 sm:py-24">
          <div className="flex flex-col gap-32 sm:gap-40">
            <div className="flex scroll-mt-32 flex-col gap-12">
              <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-foreground max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    Own the Idea.
                    <br />
                    <span className="text-muted-foreground/50">
                      Ship It From Frankfurt.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
                <p className="text-muted-foreground mx-auto max-w-2xl text-center text-lg">
                  We build apps and own every part of them — product,
                  design, engineering, growth. Small team, no client work, no
                  pitch decks. Just software we&apos;d actually use, now at
                  500,000+ users and counting.
                </p>
              </div>

              <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
                <p className="text-muted-foreground mx-auto max-w-2xl text-center text-lg">
                  We&apos;re growing and looking for creators, engineers, and
                  partnership managers who want to build things that matter — not
                  bill hours.{" "}
                  <Link
                    href="/jobs"
                    className="text-foreground font-medium underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    View open roles
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-32 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-foreground max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Get in Touch.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg">
                Questions, partnerships, or just want to say hi? We&apos;d love to
                hear from you.
              </p>
              <a
                href="mailto:hello@lottaprojects.com"
                className="text-foreground mt-6 text-lg font-medium underline underline-offset-4 transition-colors hover:text-primary"
              >
                hello@lottaprojects.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
