import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";

type Article = {
  date: string;
  category: string;
  title: string;
  body: string;
};

// TODO: Phase 2 で microCMS 連携。当面はハードコード
const NEWS_DETAIL: Record<string, Article> = {
  "20251216": {
    date: "2025.12.16",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    body:
      "労働者派遣法第２３条第５項の規定に基づき、下記事業所における労働者派遣事業の状況を公開いたします。（2025年10月1日現在）\n\nマージン率等の情報提供について（令和6年度：令和6年5月1日～令和7年4月30日）",
  },
  "20250527": {
    date: "2025.05.27",
    category: "お知らせ",
    title: "本社を移転しました",
    body:
      "平素は格別のご高配を賜り、誠にありがとうございます。\nこのたび弊社は、業務拡充に伴い、本社を下記の通り移転いたしましので、\nお知らせ申し上げます。\n\nこれを機に、社員一同より一層の努力を重ね、皆様のご期待に沿うよう努めて参ります。\n今後とも変わらぬご支援ご愛顧を賜りますようお願い申し上げます。\n\n【新住所】\n〒206-0034\n東京都多摩市鶴牧１−２−１　サンシエールビル3階\n\n【業務開始日】\n2025年5月25日\n\n今後とも何卒よろしくお願い申し上げます。\nお近くにお越しの際は是非お立ち寄りください。",
  },
  "20241007": {
    date: "2024.10.07",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    body:
      "労働者派遣法第２３条第５項の規定に基づき、下記事業所における労働者派遣事業の状況を公開いたします。（2024年10月1日現在）\n\nマージン率等の情報提供について（令和５年度：令和６年２月１日～令和６年４月３０日）",
  },
  "20240530-renewal": {
    date: "2024.05.30",
    category: "お知らせ",
    title: "ホームページをリニューアルしました！",
    body:
      "この度、ホームページを全面的にリニューアルいたしました。\n\nより使いやすいホームページを目指して、デザインとページの構成を見直しました。\n\n今後とも、どうぞよろしくお願い申し上げます。",
  },
  "20240530-haken": {
    date: "2024.05.30",
    category: "お知らせ",
    title: "「労働者派遣業務」の許可を取得しました！",
    body: "弊社は、「労働者派遣業務」の許可を取得いたしました。",
  },
  "20230614": {
    date: "2023.06.14",
    category: "お知らせ",
    title: "ISMS認証(ISO27001)を取得しました。",
    body:
      "弊社は、情報セキュリティマネジメントシステム（ISMS）の国際規格である「ISO/IEC 27001:2022」の認証を以下の通り取得しました。\n\n【適用規格】\nISO/IEC 27001:2022\n\n【登録番号】\nJP23/00000196\n\n【認証登録範囲】\nソフトウェア受託開発\nシステムエンジニアサービスの管理\n\n【認証機関】\nSGSジャパン株式会社\n\n【認証登録日】\n2023年6月14日\n\n「情報セキュリティ方針」を全社員が認識し、情報セキュリティマネジメントシステムの継続的な運用・改善に努めてまいります。今後とも、情報資産をあらゆる脅威から守り、お取引先をはじめとする利害関係者の信頼に応えるよう尽力いたします。",
  },
};

const ORDERED_SLUGS = [
  "20251216",
  "20250527",
  "20241007",
  "20240530-renewal",
  "20240530-haken",
  "20230614",
];

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

  // その他のお知らせ（自分以外）
  const others = ORDERED_SLUGS.filter((s) => s !== slug).map((s) => ({
    slug: s,
    ...NEWS_DETAIL[s],
  }));

  return (
    <>
      <PageHeader title="お知らせ" />

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
            <span className="text-sm text-zinc-500">{item.date}</span>
            <span className="text-sm font-semibold text-brand">
              {item.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 leading-tight">
            {item.title}
          </h1>

          <div className="text-base md:text-lg text-zinc-700 leading-loose whitespace-pre-line">
            {item.body}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200 flex justify-center">
            <PillLink href="/news" label="記事一覧へ" />
          </div>
        </article>
      </section>

      {/* その他のお知らせ */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display">
            Other News
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            その他のお知らせ
          </h2>
          <ul className="divide-y divide-zinc-200">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/news/${o.slug}`}
                  className="grid md:grid-cols-[120px_120px_1fr] gap-2 md:gap-6 items-center py-5 hover:opacity-70 transition"
                >
                  <p className="text-sm text-zinc-500">{o.date}</p>
                  <p className="text-sm font-semibold text-brand">
                    {o.category}
                  </p>
                  <p className="text-base font-medium">{o.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
