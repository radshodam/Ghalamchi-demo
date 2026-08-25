/**
 * @fileoverview Centered page container with responsive horizontal padding.
 */

import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centered page container with responsive horizontal padding.
 *
 * @param {ContainerProps} props Component props.
 * @returns {JSX.Element} Container div with max-width and padding.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
