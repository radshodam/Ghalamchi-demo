/**
 * @fileoverview GET /api/articles/:id — mocked article detail.
 */

import { NextResponse } from "next/server";
import { findArticleById } from "@/features/articles/data/mock-articles";

/**
 * GET /api/articles/:id — mocked article detail.
 *
 * @param {Request} _request Incoming request (unused).
 * @param {{ params: Promise<{ id: string }> }} context Route context with params.
 * @returns {Promise<NextResponse>} JSON response with article or 404 error.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const article = findArticleById(id);

  if (!article) {
    return NextResponse.json(
      { message: "مقاله مورد نظر پیدا نشد." },
      { status: 404 },
    );
  }

  return NextResponse.json(article);
}
