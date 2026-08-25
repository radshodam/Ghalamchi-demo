"use client";

/**
 * @fileoverview Search, academic-group, and sort controls bound to URL state.
 */

import { ACADEMIC_GROUP_OPTIONS } from "@/features/articles/constants/academic-groups";
import type {
  AcademicGroupFilter,
  ArticleListFilters,
  SortOrder,
} from "@/features/articles/types/article";
import { Input } from "@/shared/components/ui/input";
import { Select } from "@/shared/components/ui/select";
import { useEffect, useState } from "react";
import { useDebounce } from "@/shared/hooks/use-debounce";

const SORT_OPTIONS = [
  { value: "newest", label: "جدیدترین" },
  { value: "oldest", label: "قدیمی‌ترین" },
] as const;

interface ArticleFiltersProps {
  /** Current filter values mirrored from the URL. */
  filters: ArticleListFilters;
  /**
   * Patches one or more filter fields and writes them to the query string.
   *
   * @param {Partial<ArticleListFilters>} patch Filter fields to update.
   */
  onChange: (patch: Partial<ArticleListFilters>) => void;
}

/**
 * Filter bar for the articles page.
 *
 * @param {ArticleFiltersProps} props Component props.
 * @returns {JSX.Element} Accessible filter controls.
 */
export function ArticleFilters({ filters, onChange }: ArticleFiltersProps) {
  const [localSearch, setLocalSearch] = useState(filters.search ?? "");

  useEffect(() => {
    setLocalSearch(filters.search ?? "");
  }, [filters.search]);

  const debouncedSearch = useDebounce(localSearch, 1000);

  useEffect(() => {
    if (debouncedSearch !== filters.search) {
      onChange({ search: debouncedSearch });
    }
  }, [debouncedSearch, filters.search, onChange]);

  return (
    <section
      aria-label="فیلتر مقالات"
      className="grid grid-cols-1 gap-5 rounded-3xl border border-paper-200 bg-white p-5 shadow-md sm:grid-cols-2 sm:p-6 lg:grid-cols-3"
    >
      <div className="sm:col-span-2 lg:col-span-1">
        <Input
          id="article-search"
          label="جستجو بر اساس عنوان"
          type="search"
          value={localSearch}
          onChange={(event) => setLocalSearch(event.target.value)}
          placeholder="مثلاً کنکور"
          autoComplete="off"
        />
      </div>
      <Select
        id="article-group"
        label="گروه تحصیلی"
        value={filters.group}
        options={ACADEMIC_GROUP_OPTIONS}
        onChange={(event) =>
          onChange({ group: event.target.value as AcademicGroupFilter })
        }
      />
      <Select
        id="article-sort"
        label="مرتب‌سازی"
        value={filters.sort}
        options={SORT_OPTIONS}
        onChange={(event) =>
          onChange({ sort: event.target.value as SortOrder })
        }
      />
    </section>
  );
}
