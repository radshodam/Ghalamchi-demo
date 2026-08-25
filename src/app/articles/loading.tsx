/**
 * @fileoverview Route-level loading UI for `/articles`.
 */

import { ArticleGridSkeleton } from "@/shared/components/ui/skeletons";
import { Container } from "@/shared/components/layout/container";

/**
 * Route-level loading UI for `/articles`.
 *
 * @returns {JSX.Element} Loading state with skeleton.
 */
export default function ArticlesLoading() {
  return (
    <Container>
      <ArticleGridSkeleton />
    </Container>
  );
}
