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
  const raw = process.env[name];
  const value =
    raw === undefined || raw === null || raw === "" ? fallback : raw;

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parseAppEnv(value: string): AppEnv {
  const raw = (value ?? "").toString().trim().toLowerCase();

  if (APP_ENVS.includes(raw as AppEnv)) {
    return raw as AppEnv;
  }

  // Try to infer from Vercel's environment variable when available.
  const vercel = process.env.VERCEL_ENV?.toString().trim().toLowerCase();
  if (vercel === "production") return "production";
  if (vercel === "preview") return "staging";
  if (vercel === "development") return "development";

  // If the provided value looks like a URL, warn and fall back to production.
  if (raw.startsWith("http") || raw.includes(".")) {
    // eslint-disable-next-line no-console
    console.warn(
      `NEXT_PUBLIC_APP_ENV has invalid value "${value}"; falling back to 'production'.`,
    );
    return "production";
  }

  // Last resort: warn and default to production to avoid build-time throws.
  // eslint-disable-next-line no-console
  console.warn(
    `Invalid NEXT_PUBLIC_APP_ENV "${value}"; expected one of: ${APP_ENVS.join(", ")}. Falling back to 'production'.`,
  );
  return "production";
}

const appEnv = parseAppEnv(readEnv("NEXT_PUBLIC_APP_ENV", "development"));

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
