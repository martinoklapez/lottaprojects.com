import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Jobs — lottaprojects",
  description:
    "Join lottaprojects. Open roles: UGC Creator, Fullstack TypeScript Engineer, Key Account Manager.",
};

const openings = [
  {
    title: "UGC Creator",
    type: "Full-time · Remote",
    description:
      "Create authentic user-generated content for our products. You know how to hook an audience on TikTok and Instagram, understand trends, and can deliver polished short-form video on a consistent schedule.",
  },
  {
    title: "Fullstack TypeScript Software Engineer",
    type: "Full-time · Frankfurt",
    description:
      "Build and ship across our stack: React Native for mobile, Cloudflare Workers at the edge, and PostgreSQL on the backend. You write type-safe TypeScript end to end and care about performance, reliability, and clean architecture.",
  },
  {
    title: "Key Account Manager",
    type: "Full-time · Remote or Frankfurt",
    description:
      "Manage relationships with our content creators and close new creator partnerships. You combine strong communication skills with a knack for spotting talent and negotiating deals that work for everyone.",
  },
];

function applyMailto(role: string) {
  const subject = encodeURIComponent(`Application: ${role}`);
  return `mailto:hello@lottaprojects.com?subject=${subject}`;
}

export default function JobsPage() {
  return (
    <PageShell title="Jobs">
      <p>
        We&apos;re a small product studio building apps used by over half a
        million people. If you want to own what you build — not bill hours for
        someone else&apos;s roadmap — we&apos;d love to hear from you.
      </p>

      <div className="space-y-4 pt-4">
        {openings.map((job) => (
          <div
            key={job.title}
            className="border-border rounded-xl border p-5"
          >
            <h2 className="text-foreground text-lg font-semibold">
              {job.title}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">{job.type}</p>
            <p className="mt-3">{job.description}</p>
            <a
              href={applyMailto(job.title)}
              className="bg-primary hover:bg-primary/80 mt-5 inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-medium text-white transition-all"
            >
              Apply for this role
            </a>
          </div>
        ))}
      </div>

      <p className="pt-6">
        Don&apos;t see a perfect fit?{" "}
        <Link
          href={applyMailto("Open Application")}
          className="text-foreground font-medium underline underline-offset-4 transition-colors hover:text-primary"
        >
          Send us an open application
        </Link>
        .
      </p>
    </PageShell>
  );
}
