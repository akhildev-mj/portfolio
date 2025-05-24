import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akhildev MJ | Data Scientist & Full Stack Developer",
  description:
    "Portfolio of Akhildev MJ, showcasing data science projects and full stack development work",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
