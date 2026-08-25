"use client";

/**
 * @fileoverview URL-backed hook for article search, group, and sort state.
 */

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  articleFiltersToSearchParams,
  parseArticleFilters,
} from "@/features/articles/lib/article-query";
import type { ArticleListFilters } from "@/features/articles/types/article";

/**
 * URL-backed hook for article search, group, and sort state.
 *
 * @returns {{ filters: ArticleListFilters, setFilters: (patch: Partial<ArticleListFilters>) => void }} Filter state and updater function.
 */
export function useArticleFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => parseArticleFilters(searchParams),
    [searchParams],
  );

  const setFilters = useCallback(
    (patch: Partial<ArticleListFilters>) => {
      const current = parseArticleFilters(searchParams);
      const next = articleFiltersToSearchParams({ ...current, ...patch });
      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return { filters, setFilters };
}
