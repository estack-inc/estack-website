import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

// TODO: Phase 2 で microCMS 連携。当面はハードコード
const NEWS_DETAIL: Record<
  string,
  { date: string; category: string; title: string; body: string }
> = {
  "20251216": {
    date: "2025.12.16",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    body: "労働者派遣法に基づく情報提供を掲載いたしました。詳細は当社までお問い合わせください。",
  },
  "20250527": {
    date: "2025.05.27",
    category: "お知らせ",
    title: "本社を移転しました",
    body: "本社を東京都多摩市鶴牧１丁目２番地１号サンシエールビル3階に移転いたしました。",
  },
  "20241007": {
    date: "2024.10.07",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    body: "労働者派遣法に基づく情報提供を掲載いたしました。",
  },
  "20240530-renewal": {
    date: "2024.05.30",
    category: "お知らせ",
    title: "ホームページをリニューアルしました！",
    body: "この度、ホームページをリニューアルいたしました。今後ともよろしくお願いいたします。",
  },
  "20240530-haken": {
    date: "2024.05.30",
    category: "お知らせ",
    title: "「労働者派遣業務」の許可を取得しました！",
    body: "労働者派遣業務の許可（派 13-317114）を取得いたしました。",
  },
  "20230614": {
    date: "2023.06.14",
    category: "お知らせ",
    title: "ISMS認証(ISO27001)を取得しました。",
    body: "情報セキュリティマネジメントシステム（ISMS）認証 ISO/IEC27001:2022 を取得いたしました。",
  },
};

export async function generateStaticParams() {
  return Object.keys(NEWS_DETAIL).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = NEWS_DETAIL[slug];
  if (!item) return { title: "お知らせ" };
  return { title: item.title };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = NEWS_DETAIL[slug];

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader title="お知らせ" subtitle="News" />

      <section className="py-10 md:py-16">
        <article className="mx-auto max-w-3xl px-5 md:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
            <Link href="/" className="hover:text-brand">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-brand">
              お知らせ
            </Link>
            <span>/</span>
            <span className="truncate">{item.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-zinc-500">{item.date}</span>
            <span className="text-xs font-semibold text-brand">
              {item.category}
            </span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold mb-8 leading-tight">
            {item.title}
          </h1>

          <div className="prose prose-sm md:prose-base max-w-none">
            <p className="text-sm md:text-base text-zinc-700 leading-loose whitespace-pre-line">
              {item.body}
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 text-sm font-semibold text-zinc-900 hover:opacity-70"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs">
                ←
              </span>
              お知らせ一覧へ戻る
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
