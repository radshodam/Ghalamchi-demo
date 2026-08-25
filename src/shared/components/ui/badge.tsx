/**
 * @fileoverview Compact status/group badge.
 */

import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Displays a compact status or group badge with brand colors.
 *
 * @param {BadgeProps} props Component props.
 * @returns {JSX.Element} Styled badge element.
 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800",
        className,
      )}
    >
      {children}
    </span>
  );
}
