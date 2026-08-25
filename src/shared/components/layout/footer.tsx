/**
 * @fileoverview Site footer.
 */

import { Container } from "@/shared/components/layout/container";

/**
 * Renders the page footer.
 *
 * @returns {JSX.Element} Footer landmark.
 */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-paper-200 bg-white/70">
      <Container className="py-7 text-center text-xs text-ink-500 sm:text-sm">
        محتوای آموزشی ساده‌شده برای دانش‌آموزان دوره‌های مختلف
      </Container>
    </footer>
  );
}
