import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Imprint — lottaprojects",
  description: "Legal information and contact details for lottaprojects.",
};

export default function ImprintPage() {
  return (
    <PageShell title="Imprint">
      <p className="text-foreground font-medium">Information pursuant to § 5 TMG</p>

      <div>
        <p className="text-foreground font-medium">lottaprojects</p>
        <p>Neue Mainzer Straße 84</p>
        <p>60311 Frankfurt am Main</p>
      </div>

      <div>
        <p className="text-foreground font-medium">Contact</p>
        <p>
          Email:{" "}
          <a
            href="mailto:hello@lottaprojects.com"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            hello@lottaprojects.com
          </a>
        </p>
      </div>

      <div>
        <p className="text-foreground font-medium">
          Responsible for content pursuant to § 18 Abs. 2 MStV
        </p>
        <p>lottaprojects</p>
        <p>Neue Mainzer Straße 84</p>
        <p>60311 Frankfurt am Main</p>
      </div>

      <div>
        <p className="text-foreground font-medium">Dispute resolution</p>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . We are not obliged or willing to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </p>
      </div>
    </PageShell>
  );
}
