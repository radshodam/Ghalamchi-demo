/**
 * @fileoverview Client-side search, group filter, and date sort.
 */

import type {
  Article,
  ArticleListFilters,
} from "@/features/articles/types/article";

/**
 * Case-insensitive Persian string comparison.
 *
 * @param {string} haystack The string to search within.
 * @param {string} needle The string to search for.
 * @returns {boolean} True if needle is found in haystack (case-insensitive).
 */
function includesInsensitive(haystack: string, needle: string): boolean {
  return haystack.toLocaleLowerCase("fa").includes(needle.toLocaleLowerCase("fa"));
}

/**
 * Filters and sorts articles based on search, group, and sort order.
 *
 * @param {Article[]} articles Array of articles to filter.
 * @param {ArticleListFilters} filters Filter criteria.
 * @returns {Article[]} Filtered and sorted articles.
 */
export function filterAndSortArticles(
  articles: Article[],
  filters: ArticleListFilters,
): Article[] {
  const query = filters.search.trim();

  const filtered = articles.filter((article) => {
    const matchesGroup =
      filters.group === "all" || article.academicGroup === filters.group;
    const matchesSearch = query.length === 0 || includesInsensitive(article.title, query);

    return matchesGroup && matchesSearch;
  });

  return filtered.sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime();
    const timeB = new Date(b.publishedAt).getTime();

    return filters.sort === "newest" ? timeB - timeA : timeA - timeB;
  });
}
