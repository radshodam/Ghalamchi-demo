"use client";

/**
 * @fileoverview Route-level error boundary for article detail.
 */

import { useEffect } from "react";
import { Container } from "@/shared/components/layout/container";
import { ErrorState } from "@/shared/components/ui/error-state";

/**
 * Route-level error boundary for article detail.
 *
 * @param {{ error: Error & { digest?: string }, reset: () => void }} props Error and reset function.
 * @returns {JSX.Element} Error UI with retry option.
 */
export default function ArticleDetailError({
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
        title="بارگذاری مقاله ناموفق بود"
        message={error.message || "لطفاً دوباره تلاش کنید."}
        onRetry={reset}
      />
    </Container>
  );
}
