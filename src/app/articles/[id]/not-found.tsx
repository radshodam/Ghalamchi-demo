/**
 * @fileoverview Article-level 404 when the id is missing from the dataset.
 */

import Link from "next/link";
import { Container } from "@/shared/components/layout/container";
import { urls } from "@/shared/config/urls";

/**
 * Article-level 404 when the id is missing from the dataset.
 *
 * @returns {JSX.Element} Not-found message with link back to articles.
 */
export default function ArticleNotFound() {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-paper-200 bg-white px-8 py-16 text-center shadow-lg">
        <div className="mb-6 rounded-full bg-brand-50 p-4">
          <svg className="size-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">مقاله پیدا نشد</h1>
        <p className="mt-3 max-w-md text-base leading-7 text-ink-600">این مقاله وجود ندارد یا حذف شده است.</p>
        <div className="mt-8">
          <Link
            href={urls.site.articles}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            بازگشت به مقالات
          </Link>
        </div>
      </div>
    </Container>
  );
}
