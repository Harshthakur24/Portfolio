import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Router from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Portfolio",
  description: "Developed by Harsh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" overflow-y-scroll no-scrollbar" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
