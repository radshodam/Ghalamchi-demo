# Educational Content Browser

Simplified article browser for students across academic groups. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home route redirects to `/articles`.

| Script | Env file | Purpose |
| --- | --- | --- |
| `npm run dev` | `.env.development` | Local development |
| `npm run dev:staging` | `.env.staging` | Run against staging env values |
| `npm run build:production` / `npm run start:production` | `.env.production` | Production build & start |
| `npm run lint` | — | ESLint |

Copy `.env.example` when adding a new machine. Stage-specific files are:

- `.env.development`
- `.env.staging`
- `.env.production`

`NEXT_PUBLIC_*` values are inlined at **build** time. Change API hosts in the matching env file before a real deploy.

## Architecture decisions

- **Feature-based layout.** Article UI, hooks, types, mock data, and the article service live under `src/features/articles`. Shared primitives, env, and the URL catalog live under `src/shared`.
- **Katib-style URL catalog.** `src/shared/config/urls.ts` is the only place that composes site and API paths. Feature code calls `articleService` instead of hard-coding `/api/articles`.
- **Typed env.** `src/shared/config/env.ts` validates `NEXT_PUBLIC_APP_ENV` (`development` \| `staging` \| `production`) and base URLs.
- **URL as source of truth for filters.** Search, academic group, and sort are stored in the query string (`/articles?group=konkur&search=کنکور&sort=newest`) so refresh and share restore the same view.
- **Same service for list and detail.** Pages load data through `articleService` (`GET /api/articles` and `GET /api/articles/:id`). Route `loading.tsx` / `error.tsx` cover loading and retry. Missing ids render `not-found`. Filter, search, and sort stay on the client and are synced to the URL.
- **No `any`.** Academic groups, sort order, and filter params are narrowed with type guards. Invalid query values fall back to defaults.
- **RTL + educational palette.** `dir="rtl"` and Vazirmatn. Colors: paper background, teal primary, ink text, group badges (teal / sky / amber / violet).
- **Accessible controls.** Labeled search and selects, focus rings, status/alert roles for loading, empty, and error states.

## Project structure

```text
src/
  app/                         # App Router: pages, loading/error, API routes
  features/articles/           # Article domain
  shared/config/               # Env + URL catalog
  shared/components/           # Reusable UI and layout
  shared/lib/                  # API client, date formatting
public/images/                 # Cover art + fallback illustration
```

## Mock API

- `GET /api/articles` — 10 sample articles (Persian) covering every academic group
- `GET /api/articles/:id` — single article, `404` when missing
