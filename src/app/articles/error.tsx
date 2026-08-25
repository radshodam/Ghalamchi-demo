"use client";

/**
 * @fileoverview Route-level error boundary for `/articles`.
 */

import { useEffect } from "react";
import { Container } from "@/shared/components/layout/container";
import { ErrorState } from "@/shared/components/ui/error-state";

/**
 * Route-level error boundary for `/articles`.
 *
 * @param {{ error: Error & { digest?: string }, reset: () => void }} props Error and reset function.
 * @returns {JSX.Element} Error UI with retry option.
 */
export default function ArticlesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <ErrorState
        title="بارگذاری مقالات ناموفق بود"
        message={error.message || "لطفاً دوباره تلاش کنید."}
        onRetry={reset}
      />
    </Container>
  );
}
