/**
 * @fileoverview Hero header for the article catalog.
 */

/**
 * Hero section for the article browser.
 *
 * @returns {JSX.Element} Highlighted intro block above filters and results.
 */
export function ArticlesHero() {
  return (
    <header className="overflow-hidden rounded-[28px] border border-stone-200 bg-gradient-to-br from-white via-brand-50/40 to-brand-100/20 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-100 px-3 py-1.5 text-[11px] font-bold tracking-[0.02em] text-brand-700">
          محتوای آموزشی
        </span>
      </div>

      <h1 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
        مقالات را پیدا کن، بخوان، جمع‌بندی کن
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        بر اساس عنوان جستجو کنید، گروه تحصیلی را انتخاب کنید و فهرست را از جدیدترین
        تا قدیمی‌ترین مرتب کنید.
      </p>
    </header>
  );
}
