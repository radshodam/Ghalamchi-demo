/**
 * @fileoverview Utility for composing conditional className strings.
 */

/**
 * Composes conditional className strings by filtering out falsy values.
 *
 * @param {Array<string | false | null | undefined>} classes Class names to combine.
 * @returns {string} Combined className string.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
