/**
 * @fileoverview Responsive grid of ArticleCard components.
 */

import { ArticleCard } from "@/features/articles/components/article-card";
import type { Article } from "@/features/articles/types/article";

interface ArticleListProps {
  articles: Article[];
}

/**
 * Renders a responsive grid of ArticleCard components.
 *
 * @param {ArticleListProps} props Component props.
 * @returns {JSX.Element} Grid of article cards.
 */
export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
