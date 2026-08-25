/**
 * @fileoverview Article detail presentation for `/articles/:id`.
 */

import Image from "next/image";
import Link from "next/link";
import { ACADEMIC_GROUP_LABELS } from "@/features/articles/constants/academic-groups";
import type { Article } from "@/features/articles/types/article";
import { urls } from "@/shared/config/urls";
import { formatPublishedDate } from "@/shared/lib/format-date";

interface ArticleDetailProps {
  /** Article loaded from the API. */
  article: Article;
}

/**
 * Renders title, cover, group, date, and description.
 *
 * @param {ArticleDetailProps} props Component props.
 * @returns {JSX.Element} Article detail layout.
 */
export function ArticleDetail({ article }: ArticleDetailProps) {
  const imageSrc = article.imageUrl ?? "/images/article-fallback.svg";

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Link
        href={urls.site.articles}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 transition-colors"
      >
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        بازگشت به فهرست مقالات
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
            {ACADEMIC_GROUP_LABELS[article.academicGroup]}
          </span>
          <time className="text-sm text-ink-500" dateTime={article.publishedAt}>
            {formatPublishedDate(article.publishedAt)}
          </time>
        </div>
        <h1 className="text-3xl font-black leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-3xl bg-paper-100 shadow-xl">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-base leading-8 text-ink-700 sm:text-lg">{article.description}</p>
      </div>
    </article>
  );
}
