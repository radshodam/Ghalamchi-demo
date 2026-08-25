/**
 * @fileoverview Persian labels and selector options for academic groups.
 */

import type { AcademicGroup, AcademicGroupFilter } from "@/features/articles/types/article";

/**
 * Persian labels and selector options for academic groups.
 */
export interface AcademicGroupOption {
  value: AcademicGroupFilter;
  label: string;
}

/**
 * Persian labels for each academic group.
 */
export const ACADEMIC_GROUP_LABELS: Record<AcademicGroup, string> = {
  elementary: "دبستان",
  "middle-school": "متوسطه اول",
  "high-school": "متوسطه دوم",
  konkur: "کنکور",
};

/**
 * Selector options for the academic group filter dropdown.
 */
export const ACADEMIC_GROUP_OPTIONS: readonly AcademicGroupOption[] = [
  { value: "all", label: "همه" },
  { value: "elementary", label: ACADEMIC_GROUP_LABELS.elementary },
  { value: "middle-school", label: ACADEMIC_GROUP_LABELS["middle-school"] },
  { value: "high-school", label: ACADEMIC_GROUP_LABELS["high-school"] },
  { value: "konkur", label: ACADEMIC_GROUP_LABELS.konkur },
] as const;
