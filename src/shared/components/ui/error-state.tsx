/**
 * @fileoverview Retryable error panel for failed data fetching.
 */

import { Button } from "@/shared/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

/**
 * Understandable error UI with an optional retry action.
 *
 * @param {ErrorStateProps} props Title, message, and retry handler.
 * @returns {JSX.Element} Alert region.
 */
export function ErrorState({
  title = "مشکلی پیش آمد",
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="rounded-3xl border border-brand-200 bg-brand-50 px-6 py-12 text-center"
      role="alert"
    >
      <p className="text-lg font-semibold text-brand-800">{title}</p>
      <p className="mt-2 text-sm leading-7 text-ink-700">{message}</p>
      {onRetry ? (
        <Button className="mt-5" onClick={onRetry}>
          تلاش دوباره
        </Button>
      ) : null}
    </div>
  );
}
