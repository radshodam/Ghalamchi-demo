/**
 * @fileoverview Root layout: RTL, Vazirmatn, header, and footer.
 */

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Footer } from "@/shared/components/layout/footer";
import { Header } from "@/shared/components/layout/header";
import { env } from "@/shared/config/env";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: "مرورگر محتوای آموزشی | قلمچی",
    template: "%s | قلمچی",
  },
  description: "جستجو و مشاهده مقالات آموزشی بر اساس گروه تحصیلی",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

/**
 * HTML shell shared by every route.
 *
 * @param {LayoutProps<"/">} props Next.js layout props.
 * @returns {JSX.Element} Document structure.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-ink-800">
        <Header />
        <main className="flex-1 py-6 sm:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
