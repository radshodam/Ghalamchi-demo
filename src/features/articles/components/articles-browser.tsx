"use client";

/**
 * @fileoverview Article list shell: hero, filters, and filtered results.
 */

import { useMemo } from "react";
import { ArticleFilters } from "@/features/articles/components/article-filters";
import { ArticleList } from "@/features/articles/components/article-list";
import { ArticlesHero } from "@/features/articles/components/articles-hero";
import { useArticleFilters } from "@/features/articles/hooks/use-article-filters";
import { filterAndSortArticles } from "@/features/articles/lib/filter-articles";
import type { Article } from "@/features/articles/types/article";
import { EmptyState } from "@/shared/components/ui/empty-state";

interface ArticlesBrowserProps {
  /** Full article collection returned by the API. */
  articles: Article[];
}

/**
 * Client browser for search, academic-group filter, sort, and empty state.
 *
 * @param {ArticlesBrowserProps} props Component props.
 * @returns {JSX.Element} Interactive articles experience.
 */
export function ArticlesBrowser({ articles }: ArticlesBrowserProps) {
  const { filters, setFilters } = useArticleFilters();

  const visibleArticles = useMemo(
    () => filterAndSortArticles(articles, filters),
    [articles, filters],
  );

  return (
    <div className="space-y-8">
      <ArticlesHero />

      <ArticleFilters filters={filters} onChange={setFilters} />

      {visibleArticles.length === 0 ? (
        <EmptyState
          title="مقاله‌ای پیدا نشد"
          description="با این جستجو یا فیلتر نتیجه‌ای وجود ندارد. عبارت را تغییر دهید یا گروه دیگری را انتخاب کنید."
        />
      ) : (
        <ArticleList articles={visibleArticles} />
      )}
    </div>
  );
}
