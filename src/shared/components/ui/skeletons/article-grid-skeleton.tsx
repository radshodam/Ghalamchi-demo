/**
 * @fileoverview Loading skeleton matching the article grid layout.
 */

/**
 * Loading skeleton matching the article grid layout.
 *
 * @returns {JSX.Element} Skeleton loading state for article grid.
 */
export function ArticleGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-paper-200 bg-white"
        >
          <div className="aspect-16/10 animate-pulse rounded-t-3xl bg-paper-200" />
          <div className="space-y-4 p-5">
            <div className="h-4 w-24 animate-pulse rounded bg-paper-200" />
            <div className="h-5 w-full animate-pulse rounded bg-paper-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-paper-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
