/**
 * @fileoverview Next.js 16 Proxy (replaces deprecated `middleware.ts`).
 * Runs at the network boundary before routes render: redirects and
 * correlation headers. Optional API reverse-proxy lives in `next.config.ts`.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REQUEST_ID_HEADER = "x-request-id";
const APP_ENV_HEADER = "x-app-env";

/**
 * Intercepts each matched request before App Router rendering.
 *
 * @param {NextRequest} request Incoming request from the Next.js server.
 * @returns {NextResponse} Redirect to `/articles`, or the forwarded response.
 */
export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/articles", request.url));
  }

  const requestId =
    request.headers.get(REQUEST_ID_HEADER) ?? crypto.randomUUID();
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV ?? "development";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REQUEST_ID_HEADER, requestId);
  requestHeaders.set(APP_ENV_HEADER, appEnv);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(REQUEST_ID_HEADER, requestId);
  response.headers.set(APP_ENV_HEADER, appEnv);

  return response;
}

/**
 * Skip static assets so the proxy does not run on images, fonts, or chunks.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
