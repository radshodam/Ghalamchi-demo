/**
 * @fileoverview Labeled native select used by group and sort filters.
 */

import { cn } from "@/shared/lib/cn";
import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  /** Visible field label associated via `htmlFor`. */
  label: string;
  /** Options rendered inside the native select. */
  options: readonly SelectOption[];
}

/**
 * Accessible select with a required label.
 *
 * @param {SelectProps} props Native select props plus `label` and `options`.
 * @returns {JSX.Element} Labeled select.
 */
export function Select({ id, label, options, className, ...props }: SelectProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink-700">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border border-paper-200 bg-paper-50 px-4 text-sm text-ink-900 shadow-sm transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
