/**
 * @fileoverview Parse and serialize article filters from the URL query string.
 */

import {
  isAcademicGroup,
  isSortOrder,
  type ArticleListFilters,
} from "@/features/articles/types/article";

export const DEFAULT_ARTICLE_FILTERS: ArticleListFilters = {
  search: "",
  group: "all",
  sort: "newest",
};

type SearchParamValue = string | string[] | undefined;

/**
 * Extracts the first value from a URL search parameter.
 *
 * @param {SearchParamValue} value The search parameter value.
 * @returns {string} First string value or empty string.
 */
function firstParam(value: SearchParamValue): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

/**
 * Parses and validates URL search params into a typed filter object.
 * Unknown values fall back to safe defaults instead of crashing the page.
 */
export function parseArticleFilters(
  params: Record<string, SearchParamValue> | URLSearchParams,
): ArticleListFilters {
  const read = (key: string): string => {
    if (params instanceof URLSearchParams) {
      return params.get(key) ?? "";
    }

    return firstParam(params[key]);
  };

  const group = read("group");
  const sort = read("sort");

  return {
    search: read("search").trim(),
    group: group === "all" || group === "" ? "all" : isAcademicGroup(group) ? group : "all",
    sort: isSortOrder(sort) ? sort : DEFAULT_ARTICLE_FILTERS.sort,
  };
}

/**
 * Converts article filters to URLSearchParams for query string serialization.
 *
 * @param {ArticleListFilters} filters Filter object to serialize.
 * @returns {URLSearchParams} URL search parameters.
 */
export function articleFiltersToSearchParams(
  filters: ArticleListFilters,
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.search) {
    params.set("search", filters.search);
  }

  if (filters.group !== "all") {
    params.set("group", filters.group);
  }

  params.set("sort", filters.sort);

  return params;
}
