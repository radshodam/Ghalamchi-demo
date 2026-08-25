/**
 * @fileoverview Accessible loading spinner.
 */

import { cn } from "@/shared/lib/cn";

interface SpinnerProps {
  className?: string;
  label?: string;
}

/**
 * Accessible loading spinner with optional label.
 *
 * @param {SpinnerProps} props Component props.
 * @returns {JSX.Element} Loading spinner element.
 */
export function Spinner({ className, label = "در حال بارگذاری" }: SpinnerProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-3 py-16", className)}
      role="status"
      aria-live="polite"
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600" />
      <span className="text-sm text-ink-600">{label}</span>
    </div>
  );
}
