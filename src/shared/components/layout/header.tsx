/**
 * @fileoverview Global header with brand logo and short product context.
 */

import Link from "next/link";
import { BrandLogo } from "@/shared/components/layout/brand-logo";
import { Container } from "@/shared/components/layout/container";
import { urls } from "@/shared/config/urls";

/**
 * Sticky site header for all pages.
 *
 * @returns {JSX.Element} Header landmark.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-paper-200/80 bg-white/85 shadow-sm backdrop-blur-md">
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          href={urls.site.articles}
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <BrandLogo />
        </Link>
        <p className="hidden text-sm text-ink-600 sm:block">مرورگر محتوای آموزشی</p>
      </Container>
      <div className="h-1 bg-linear-to-l from-brand-600 via-gold-400 to-brand-500" />
    </header>
  );
}
