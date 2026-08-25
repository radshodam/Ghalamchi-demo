/**
 * @fileoverview Reusable article card for the educational content grid.
 */

import Image from "next/image";
import Link from "next/link";
import { ACADEMIC_GROUP_LABELS } from "@/features/articles/constants/academic-groups";
import type { AcademicGroup, Article } from "@/features/articles/types/article";
import { urls } from "@/shared/config/urls";
import { formatPublishedDate } from "@/shared/lib/format-date";
import { cn } from "@/shared/lib/cn";

const GROUP_BADGE_CLASS: Record<AcademicGroup, string> = {
  elementary: "bg-amber-50 text-amber-900",
  "middle-school": "bg-orange-50 text-orange-800",
  "high-school": "bg-brand-50 text-brand-800",
  konkur: "bg-rose-50 text-rose-800",
};

interface ArticleCardProps {
  /** Article to render. */
  article: Article;
}

/**
 * Displays cover, title, description, group, and date inside a link card.
 *
 * @param {ArticleCardProps} props Component props.
 * @returns {JSX.Element} Article teaser card.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  const imageSrc = article.imageUrl ?? "/images/article-fallback.svg";

  return (
    <article className="group h-full">
      <Link
        href={urls.site.article(article.id)}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-paper-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-paper-100">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1.5 text-xs font-semibold",
                GROUP_BADGE_CLASS[article.academicGroup],
              )}
            >
              {ACADEMIC_GROUP_LABELS[article.academicGroup]}
            </span>
            <time className="text-xs text-ink-500" dateTime={article.publishedAt}>
              {formatPublishedDate(article.publishedAt)}
            </time>
          </div>
          <h2 className="line-clamp-2 text-lg font-bold leading-7 text-ink-900">
            {article.title}
          </h2>
          <p className="line-clamp-3 text-sm leading-7 text-ink-600">{article.description}</p>
        </div>
      </Link>
    </article>
  );
}
