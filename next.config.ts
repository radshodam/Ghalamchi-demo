/**
 * @fileoverview Next.js config: image policy and optional BFF API proxy rewrites.
 * When `API_PROXY_TARGET` is set, `/api/*` is forwarded to that origin
 * (Katib-style same-origin proxy). Leave it empty to use local Route Handlers.
 */

import type { NextConfig } from "next";

/**
 * Builds rewrite rules for the optional upstream API.
 *
 * @returns {Promise<Array<{source: string, destination: string}>>} Rewrite list.
 */
async function apiProxyRewrites() {
  const target = process.env.API_PROXY_TARGET?.replace(/\/$/, "");

  if (!target) {
    return [];
  }

  return [
    {
      source: "/api/:path*",
      destination: `${target}/api/:path*`,
    },
  ];
}

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return apiProxyRewrites();
  },
};

export default nextConfig;
