/**
 * @fileoverview Article domain types, filters, and type guards.
 */

export const ACADEMIC_GROUPS = [
  "elementary",
  "middle-school",
  "high-school",
  "konkur",
] as const;

export type AcademicGroup = (typeof ACADEMIC_GROUPS)[number];

export interface Article {
  id: string;
  title: string;
  description: string;
  academicGroup: AcademicGroup;
  publishedAt: string;
  imageUrl: string | null;
}

export const SORT_ORDERS = ["newest", "oldest"] as const;

export type SortOrder = (typeof SORT_ORDERS)[number];

export type AcademicGroupFilter = AcademicGroup | "all";

export interface ArticleListFilters {
  search: string;
  group: AcademicGroupFilter;
  sort: SortOrder;
}

/**
 * Type guard to check if a value is a valid AcademicGroup.
 *
 * @param {string} value Value to check.
 * @returns {value is AcademicGroup} True if value is a valid AcademicGroup.
 */
export function isAcademicGroup(value: string): value is AcademicGroup {
  return ACADEMIC_GROUPS.includes(value as AcademicGroup);
}

/**
 * Type guard to check if a value is a valid SortOrder.
 *
 * @param {string} value Value to check.
 * @returns {value is SortOrder} True if value is a valid SortOrder.
 */
export function isSortOrder(value: string): value is SortOrder {
  return SORT_ORDERS.includes(value as SortOrder);
}
