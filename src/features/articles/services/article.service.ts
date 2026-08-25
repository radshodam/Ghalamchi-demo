/**
 * @fileoverview Article API access layer used by list and detail pages.
 */

import { endpoints } from "@/shared/config/urls";
import { apiClient } from "@/shared/lib/api-client";
import type { Article } from "@/features/articles/types/article";

/**
 * Article API service object for fetching article data.
 */
export const articleService = {
  /**
   * Fetches all articles from the API.
   *
   * @returns {Promise<Article[]>} Array of articles.
   */
  list(): Promise<Article[]> {
    return apiClient<Article[]>(endpoints.articles.list());
  },

  /**
   * Fetches a single article by ID.
   *
   * @param {string} id Article identifier.
   * @returns {Promise<Article>} Article details.
   */
  detail(id: string): Promise<Article> {
    return apiClient<Article>(endpoints.articles.detail(id));
  },
};
