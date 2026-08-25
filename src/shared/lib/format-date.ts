/**
 * @fileoverview Persian (fa-IR) publication date formatting.
 */

const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * Formats an ISO date string to Persian (fa-IR) locale.
 *
 * @param {string} isoDate ISO date string to format.
 * @returns {string} Persian formatted date or original string if invalid.
 */
export function formatPublishedDate(isoDate: string): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  return dateFormatter.format(date);
}
