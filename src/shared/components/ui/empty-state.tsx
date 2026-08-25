/**
 * @fileoverview Empty-results placeholder for filtered article lists.
 */

interface EmptyStateProps {
  title: string;
  description: string;
}

/**
 * Friendly empty state instead of a blank page.
 *
 * @param {EmptyStateProps} props Copy to display.
 * @returns {JSX.Element} Status region.
 */
export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div
      className="rounded-3xl border border-dashed border-brand-200 bg-brand-50/50 px-6 py-16 text-center"
      role="status"
    >
      <p className="text-lg font-semibold text-ink-900">{title}</p>
      <p className="mt-2 text-sm leading-7 text-ink-600">{description}</p>
    </div>
  );
}
