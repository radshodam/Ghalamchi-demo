/**
 * @fileoverview Loading skeleton for article detail page.
 */

/**
 * Loading skeleton for article detail page.
 *
 * @returns {JSX.Element} Skeleton loading state for article detail.
 */
export function ArticleDetailSkeleton() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="h-10 w-40 animate-pulse rounded-xl bg-paper-200" />
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-32 animate-pulse rounded-full bg-paper-200" />
          <div className="h-5 w-24 animate-pulse rounded bg-paper-200" />
        </div>
        <div className="h-12 w-3/4 animate-pulse rounded bg-paper-200" />
      </div>
      <div className="aspect-video animate-pulse rounded-3xl bg-paper-200" />
      <div className="space-y-3">
        <div className="h-5 w-full animate-pulse rounded bg-paper-200" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-paper-200" />
        <div className="h-5 w-4/6 animate-pulse rounded bg-paper-200" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-paper-200" />
      </div>
    </div>
  );
}
