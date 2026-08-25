"use client";

/**
 * @fileoverview Root error boundary replacing the document when the root layout fails.
 */

import { useEffect } from "react";
import { Container } from "@/shared/components/layout/container";
import { ErrorState } from "@/shared/components/ui/error-state";

/**
 * Root error boundary replacing the document when the root layout fails.
 *
 * @param {{ error: Error & { digest?: string }, reset: () => void }} props Error and reset function.
 * @returns {JSX.Element} Error UI with retry option.
 */
export default function GlobalError({
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
    <html lang="fa" dir="rtl">
      <body>
        <Container className="py-16">
          <ErrorState
            title="خطای غیرمنتظره"
            message={error.message || "لطفاً صفحه را دوباره بارگذاری کنید."}
            onRetry={reset}
          />
        </Container>
      </body>
    </html>
  );
}
