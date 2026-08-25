/**
 * @fileoverview GET /api/articles — mocked article catalog.
 */

import { NextResponse } from "next/server";
import { MOCK_ARTICLES } from "@/features/articles/data/mock-articles";

/**
 * GET /api/articles — mocked article catalog.
 *
 * @returns {NextResponse} JSON response with all articles.
 */
export function GET() {
  return NextResponse.json(MOCK_ARTICLES);
}
