/**
 * @fileoverview Labeled text input used by article search.
 */

import { cn } from "@/shared/lib/cn";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visible field label associated via `htmlFor`. */
  label: string;
}

/**
 * Accessible text input with a required label.
 *
 * @param {InputProps} props Native input props plus `label`.
 * @returns {JSX.Element} Labeled input.
 */
export function Input({ id, label, className, ...props }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border border-paper-200 bg-paper-50 px-4 text-sm text-ink-900 shadow-sm transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200",
          className,
        )}
        {...props}
      />
    </div>
  );
}
