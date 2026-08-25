/**
 * @fileoverview Mock educational articles covering all academic groups.
 */

import type { Article } from "@/features/articles/types/article";

/**
 * Mock educational articles covering all academic groups.
 */
export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "چگونه برای آزمون بعدی برنامه‌ریزی کنیم؟",
    description:
      "چند روش ساده برای برنامه‌ریزی بهتر بین دو آزمون و مدیریت انرژی در طول ترم.",
    academicGroup: "high-school",
    publishedAt: "2026-08-15T10:00:00Z",
    imageUrl: "/images/article-1.svg",
  },
  {
    id: "2",
    title: "راهنمای جمع‌بندی کنکور",
    description:
      "نکاتی برای مرور و جمع‌بندی مطالب پیش از کنکور، بدون انباشته شدن حجم درس‌ها.",
    academicGroup: "konkur",
    publishedAt: "2026-08-10T08:30:00Z",
    imageUrl: null,
  },
  {
    id: "3",
    title: "تقویت املا در دوره دبستان",
    description:
      "فعالیت‌های کوتاه خانگی که به دانش‌آموز کمک می‌کند واژه‌ها را دقیق‌تر بنویسد.",
    academicGroup: "elementary",
    publishedAt: "2026-08-18T09:00:00Z",
    imageUrl: "/images/article-3.svg",
  },
  {
    id: "4",
    title: "یادگیری مفهومی ریاضی متوسطه اول",
    description:
      "چطور به‌جای حفظ فرمول، مسئله‌های ریاضی را مرحله‌به‌مرحله بفهمیم و حل کنیم.",
    academicGroup: "middle-school",
    publishedAt: "2026-08-12T14:20:00Z",
    imageUrl: "/images/article-4.svg",
  },
  {
    id: "5",
    title: "تندخوانی برای امتحانات نهایی",
    description:
      "تکنیک‌هایی برای خواندن هدفمند کتاب درسی و خلاصه‌برداری مفید قبل از امتحان.",
    academicGroup: "high-school",
    publishedAt: "2026-08-05T11:45:00Z",
    imageUrl: "/images/article-5.svg",
  },
  {
    id: "6",
    title: "مدیریت زمان در جلسه کنکور",
    description:
      "چگونه زمان هر درس را تقسیم کنیم و با سؤال‌های وقت‌گیر مواجه شویم.",
    academicGroup: "konkur",
    publishedAt: "2026-08-20T07:15:00Z",
    imageUrl: "/images/article-6.svg",
  },
  {
    id: "7",
    title: "بازی‌های آموزشی برای علوم دبستان",
    description:
      "ایده‌هایی ساده با وسایل خانه که مفاهیم علوم را برای دانش‌آموز جذاب می‌کند.",
    academicGroup: "elementary",
    publishedAt: "2026-07-28T16:00:00Z",
    imageUrl: null,
  },
  {
    id: "8",
    title: "مهارت مطالعه تاریخ در متوسطه اول",
    description:
      "روش خط زمانی و داستان‌محور برای به‌خاطر سپردن رویدادها، بدون حفظ طوطی‌وار.",
    academicGroup: "middle-school",
    publishedAt: "2026-08-01T12:10:00Z",
    imageUrl: "/images/article-8.svg",
  },
  {
    id: "9",
    title: "مرور شیمی یازدهم در یک هفته",
    description:
      "یک برنامه فشرده و واقع‌بینانه برای جمع‌بندی فصل‌های مهم شیمی پایه یازدهم.",
    academicGroup: "high-school",
    publishedAt: "2026-08-22T13:00:00Z",
    imageUrl: "/images/article-9.svg",
  },
  {
    id: "10",
    title: "اشتباهات رایج در انتخاب رشته کنکور",
    description:
      "قبل از انتخاب رشته، این خطاهای پرتکرار را بشناسید تا تصمیم آگاهانه‌تری بگیرید.",
    academicGroup: "konkur",
    publishedAt: "2026-07-22T10:40:00Z",
    imageUrl: null,
  },
];

/**
 * Finds an article by its ID from the mock data.
 *
 * @param {string} id Article identifier to search for.
 * @returns {Article | undefined} Article if found, undefined otherwise.
 */
export function findArticleById(id: string): Article | undefined {
  return MOCK_ARTICLES.find((article) => article.id === id);
}
