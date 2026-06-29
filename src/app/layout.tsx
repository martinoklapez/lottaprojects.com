import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "lottaprojects — Product Studio",
  description:
    "lottaprojects is a product studio in Frankfurt, Germany. We build and grow apps — trusted by 500,000+ users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
