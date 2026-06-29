import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — lottaprojects",
  description: "Privacy policy for lottaprojects and our products.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <p>Last updated: June 2026</p>

      <div>
        <p className="text-foreground font-medium">1. Who we are</p>
        <p>
          lottaprojects is a product studio based in Frankfurt, Germany. This
          policy describes how we handle personal data when you visit our
          website or use our products.
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">2. Data we collect</p>
        <p>
          When you visit this website, we may collect basic technical data such
          as your IP address, browser type, and pages visited. If you contact us
          or apply for a job, we process the information you provide (e.g. name,
          email, application materials).
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">3. How we use your data</p>
        <p>
          We use your data to operate our website, respond to inquiries,
          process job applications, and improve our products. We do not sell
          your personal data.
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">4. Legal basis</p>
        <p>
          Processing is based on your consent, contractual necessity, or our
          legitimate interests in operating and improving our services, in
          accordance with the GDPR.
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">5. Your rights</p>
        <p>
          You have the right to access, rectify, delete, or restrict processing
          of your personal data, as well as the right to data portability and to
          lodge a complaint with a supervisory authority.
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">6. Contact</p>
        <p>
          For privacy-related questions, contact us at{" "}
          <a
            href="mailto:hello@lottaprojects.com"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            hello@lottaprojects.com
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
