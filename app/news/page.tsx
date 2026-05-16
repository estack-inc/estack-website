"use client";

import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const CATEGORIES = ["全て", "お知らせ", "社内ブログ", "メディア掲載", "プレスリリース"];

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
  const [selected, setSelected] = useState("全て");
  const filtered = selected === "全て" ? NEWS : NEWS.filter((n) => n.category === selected);

  return (
    <>
      <PageHeader title="お知らせ" />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          {/* カテゴリ — クリックで filter */}
          <ul className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setSelected(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                    selected === c
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
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-zinc-500">
              該当する記事はありません。
            </p>
          ) : (
            <ul className="divide-y divide-zinc-200">
              {filtered.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/news/${n.slug}`}
                    className="grid md:grid-cols-[120px_120px_1fr] gap-2 md:gap-6 items-center py-5 md:py-6 hover:opacity-70 transition"
                  >
                    <p className="text-sm text-zinc-500">{n.date}</p>
                    <p className="text-sm font-semibold text-brand">
                      {n.category}
                    </p>
                    <p className="text-base font-medium">{n.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
