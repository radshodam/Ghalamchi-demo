/**
 * @fileoverview Primary, secondary, and ghost buttons.
 */

import { cn } from "@/shared/lib/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Defaults to the brand-red primary action. */
  variant?: "primary" | "secondary" | "ghost";
}

/**
 * Shared button used by error retry and similar actions.
 *
 * @param {ButtonProps} props Native button props plus `variant`.
 * @returns {JSX.Element} Styled button.
 */
export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-60",
        variant === "primary" && "bg-brand-600 text-white hover:bg-brand-700",
        variant === "secondary" &&
          "border border-paper-200 bg-white text-ink-800 hover:bg-paper-50",
        variant === "ghost" && "text-brand-700 hover:bg-brand-50",
        className,
      )}
      {...props}
    />
  );
}
