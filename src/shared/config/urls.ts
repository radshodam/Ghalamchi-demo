/**
 * @fileoverview Katib-style URL catalog for site routes, assets, and API paths.
 * Compose every HTTP path from this file instead of scattering string literals.
 */

import { env } from "@/shared/config/env";

export const urls = {
  site: {
    origin: env.siteUrl,
    articles: "/articles",
    /**
     * Builds an article detail path.
     *
     * @param {string} id Article identifier.
     * @returns {string} Site path for the article page.
     */
    article: (id: string) => `/articles/${id}`,
  },
  assets: {
    logo: "/logo/Ghalam-Chi-Logo.webp",
  },
  api: {
    origin: env.apiBaseUrl,
    articles: "/api/articles",
    /**
     * Builds an article API path.
     *
     * @param {string} id Article identifier.
     * @returns {string} API path for a single article.
     */
    article: (id: string) => `/api/articles/${id}`,
  },
} as const;

export const endpoints = {
  articles: {
    /**
     * Absolute list endpoint, used by the server-side article service.
     *
     * @returns {string} Full URL for `GET /api/articles`.
     */
    list: () => `${urls.api.origin}${urls.api.articles}`,
    /**
     * Absolute detail endpoint.
     *
     * @param {string} id Article identifier.
     * @returns {string} Full URL for `GET /api/articles/:id`.
     */
    detail: (id: string) => `${urls.api.origin}${urls.api.article(id)}`,
  },
} as const;
