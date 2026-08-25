/**
 * @fileoverview Typed public environment for development, staging, and production.
 */

/**
 * Typed, validated public environment.
 * Next inlines NEXT_PUBLIC_* at build time, so each stage must be built
 * with the matching env file (see package.json scripts).
 */

export const APP_ENVS = ["development", "staging", "production"] as const;

export type AppEnv = (typeof APP_ENVS)[number];

function readEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parseAppEnv(value: string): AppEnv {
  if (APP_ENVS.includes(value as AppEnv)) {
    return value as AppEnv;
  }

  throw new Error(
    `Invalid NEXT_PUBLIC_APP_ENV "${value}". Expected one of: ${APP_ENVS.join(", ")}`,
  );
}

const appEnv = parseAppEnv(
  readEnv("NEXT_PUBLIC_APP_ENV", "development"),
);

export const env = {
  appEnv,
  isDevelopment: appEnv === "development",
  isStaging: appEnv === "staging",
  isProduction: appEnv === "production",
  siteUrl: readEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  apiBaseUrl: readEnv(
    "NEXT_PUBLIC_API_BASE_URL",
    "http://localhost:3000",
  ).replace(/\/$/, ""),
} as const;
