/**
 * @fileoverview Route-level loading UI for article detail.
 */

import { Container } from "@/shared/components/layout/container";
import { ArticleDetailSkeleton } from "@/shared/components/ui/skeletons";

/**
 * Route-level loading UI for article detail.
 *
 * @returns {JSX.Element} Loading state with skeleton.
 */
export default function ArticleDetailLoading() {
  return (
    <Container>
      <ArticleDetailSkeleton />
    </Container>
  );
}
