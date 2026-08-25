/**
 * @fileoverview Article detail page for `/articles/:id`.
 */

import { notFound } from "next/navigation";
import { ArticleDetail } from "@/features/articles/components/article-detail";
import { articleService } from "@/features/articles/services/article.service";
import type { Article } from "@/features/articles/types/article";
import { Container } from "@/shared/components/layout/container";
import { ApiError } from "@/shared/lib/api-client";

export const dynamic = "force-dynamic";

/**
 * Generates metadata for the article detail page.
 *
 * @param {PageProps<"/articles/[id]">} context Page context with params.
 * @returns {Promise<Metadata>} Page metadata with article title.
 */
export async function generateMetadata({
  params,
}: PageProps<"/articles/[id]">) {
  const { id } = await params;

  try {
    const article = await articleService.detail(id);
    return { title: article.title };
  } catch {
    return { title: "مقاله پیدا نشد" };
  }
}

/**
 * Article detail page for `/articles/:id`.
 *
 * @param {PageProps<"/articles/[id]">} context Page context with params.
 * @returns {Promise<JSX.Element>} Article detail or not-found page.
 */
export default async function ArticlePage({
  params,
}: PageProps<"/articles/[id]">) {
  const { id } = await params;
  let article: Article;

  try {
    article = await articleService.detail(id);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }

  return (
    <Container>
      <ArticleDetail article={article} />
    </Container>
  );
}
