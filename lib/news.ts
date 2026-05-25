// サイト全体で共通利用するニュース一覧（TOP/News/Header MegaMenu で参照）

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  slug: string;
};

export const NEWS_ITEMS: NewsItem[] = [
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

export function newsHref(item: NewsItem) {
  return `/news/${item.slug}`;
}
