/**
 * @fileoverview Articles list page: fetches the catalog and renders the browser.
 */

import { Suspense } from "react";
import type { Metadata } from "next";
import { ArticlesBrowser } from "@/features/articles/components/articles-browser";
import { articleService } from "@/features/articles/services/article.service";
import { Container } from "@/shared/components/layout/container";
import { ArticleGridSkeleton } from "@/shared/components/ui/skeletons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "مقالات آموزشی",
};

/**
 * Articles list page: fetches the catalog and renders the browser.
 *
 * @returns {Promise<JSX.Element>} Articles browser with loading state.
 */
export default async function ArticlesPage() {
  const articles = await articleService.list();

  return (
    <Container>
      <Suspense fallback={<ArticleGridSkeleton />}>
        <ArticlesBrowser articles={articles} />
      </Suspense>
    </Container>
  );
}
