import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "お知らせ一覧",
};

const CATEGORIES = ["全て", "お知らせ", "社内ブログ", "メディア掲載", "プレスリリース"];

// TODO: microCMS 連携で動的に取得する
const NEWS = [
  {
    date: "2025.12.16",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    slug: "20251216",
  },
  {
    date: "2025.05.27",
    category: "お知らせ",
    title: "本社を移転しました",
    slug: "20250527",
  },
  {
    date: "2024.10.07",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    slug: "20241007",
  },
  {
    date: "2024.05.30",
    category: "お知らせ",
    title: "ホームページをリニューアルしました！",
    slug: "20240530-renewal",
  },
  {
    date: "2024.05.30",
    category: "お知らせ",
    title: "「労働者派遣業務」の許可を取得しました！",
    slug: "20240530-haken",
  },
  {
    date: "2023.06.14",
    category: "お知らせ",
    title: "ISMS認証(ISO27001)を取得しました。",
    slug: "20230614",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader title="お知らせ" subtitle="News" />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          {/* カテゴリ */}
          <ul className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c, i) => (
              <li key={c}>
                <button
                  type="button"
                  className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors ${
                    i === 0
                      ? "bg-brand text-white border-brand"
                      : "bg-white text-zinc-700 border-zinc-300 hover:border-brand hover:text-brand"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>

          {/* 記事一覧 */}
          <ul className="divide-y divide-zinc-200">
            {NEWS.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/news/${n.slug}`}
                  className="grid md:grid-cols-[120px_120px_1fr] gap-2 md:gap-6 items-center py-5 md:py-6 hover:opacity-70 transition"
                >
                  <p className="text-xs text-zinc-500">{n.date}</p>
                  <p className="text-xs font-semibold text-brand">
                    {n.category}
                  </p>
                  <p className="text-sm font-medium">{n.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
