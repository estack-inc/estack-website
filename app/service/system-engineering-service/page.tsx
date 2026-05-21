import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "システムエンジニアリングサービス",
  description:
    "システムエンジニアリングサービスは、最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。",
};

const MERITS = [
  {
    n: "1",
    title: "技術スキルの向上と多様化",
    body: "多様なプロジェクトやクライアントとの仕事を通じて、新しい技術やツール、プログラミング言語を学ぶ機会が豊富にあります。",
  },
  {
    n: "2",
    title: "問題解決能力の向上",
    body: "多様な課題対応がエンジニアの汎用性と市場価値を向上させます。",
  },
  {
    n: "3",
    title: "プロフェッショナルネットワークの拡大",
    body: "プロジェクトとクライアントとの連携が、広範なキャリア選択とネットワーク拡大に繋がります。",
  },
  {
    n: "4",
    title: "キャリアの柔軟性",
    body: "システムエンジニアリングの経験は、異業種転職の際に強みとなります。",
  },
  {
    n: "5",
    title: "最新の産業動向と技術トレンドへの露出",
    body: "最新技術の使用で技術トレンドを学び、市場に適応するスキルが向上します。",
  },
  {
    n: "6",
    title: "プロジェクトマネジメントとリーダーシップスキルの強化",
    body: "プロジェクト管理を通じてマネジメントとリーダーシップスキルが養われ、将来的に高位職への道が開けます。",
  },
];

const WORKS = [
  {
    n: "1",
    title: "デジタルツイン基盤における改修およびインフラ環境構築支援",
    tech: "C#、Python",
  },
  {
    n: "2",
    title:
      "天候観測システムの情報を元にAIによる画像解析を行うシステムの開発支援",
    tech: "AIシステム開発経験、数学、Python",
  },
  {
    n: "3",
    title: "福祉関係系大手求人サイトの開発・運用支援",
    tech: "PHP、Laravel、アジャイル開発",
  },
  {
    n: "4",
    title: "通信会社大手のECサイトのインフラシステム開発支援",
    tech: "Java、SQL",
  },
  {
    n: "5",
    title: "小売企業大手の業務管理システムのリプレイス開発支援",
    tech: "SQL（CRED）、Java、Asteria",
  },
  {
    n: "6",
    title:
      "通信会社大手のキャッシュレスシステムアプリの店舗側システム開発支援",
    tech: "JavaScript、TypeScript、React",
  },
  {
    n: "7",
    title: "製薬会社大手のドキュメント管理システムのエンハンス開発支援",
    tech: "Java、Spring boot、HTML/CSS/JavaScript、Azure、Box",
  },
];

export default function SESPage() {
  return (
    <>
      {/* Hero — 旧サイトと同じく、左に文言・右にイラスト、下にオレンジリボン */}
      <section className="relative pt-10 md:pt-16 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1fr_440px] gap-8 md:gap-12 items-end">
          <div>
            <p className="text-sm font-medium text-brand mb-2 font-display">
              System Engineering Service
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 md:mb-8">
              システムエンジニアリングサービス
            </h1>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed max-w-xl">
              最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。
              <br />
              <br />
              テクノロジーのスキルと問題解決能力を高めながら、様々な業界で経験を積むことが可能です。チームワークとコミュニケーション能力が求められ、多様なキャリアパスが開かれます。また、技術的成長だけでなく、個人の成長も促す魅力的なフィールドです。
            </p>
          </div>
          <div className="mx-auto md:mx-0 w-full max-w-[360px] md:max-w-[440px]">
            <Image
              src="/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg"
              alt=""
              width={440}
              height={440}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        <div className="mt-4 md:mt-6 w-full pointer-events-none overflow-hidden">
          <Image
            src="/wave-ribbon.svg"
            alt=""
            width={2191}
            height={251}
            className="w-full h-auto"
            aria-hidden
            priority
          />
        </div>
      </section>

      {/* 主な利点 — 旧サイトと同じく 3×2 グリッド（番号 + タイトルが横並び、説明が下） */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Merit
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center">
            主な利点
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {MERITS.map((m) => (
              <li key={m.n}>
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="shrink-0 inline-flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-brand text-white text-xs md:text-sm font-semibold font-display">
                    {m.n}
                  </span>
                  <h3 className="font-bold text-sm md:text-base leading-tight">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 技術支援実績 — 旧サイトと同じく、番号付きカードで一覧表示 */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center">
            技術支援実績
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {WORKS.map((w) => (
              <li
                key={w.n}
                className="rounded-2xl bg-zinc-50 p-5 md:p-6 border border-zinc-100"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-semibold font-display mb-3">
                  {w.n}
                </span>
                <p className="font-semibold text-sm md:text-base mb-2 leading-snug">
                  {w.title}
                </p>
                <p className="text-xs text-brand">{w.tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* その他サービス — 新サイトの設計を維持（SI への導線） */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Other Service
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            その他サービス
          </h2>
          <Link
            href="/service/system-integration"
            className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 group rounded-lg bg-white border border-zinc-100 hover:border-brand transition-colors p-4 md:p-5 max-w-xl mx-auto"
          >
            <Image
              src="/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
              alt=""
              width={140}
              height={140}
              className="w-full h-auto"
            />
            <div>
              <p className="text-xs font-medium text-brand mb-1 font-display">
                System Integration
              </p>
              <p className="text-base font-semibold group-hover:text-brand transition-colors">
                システムインテグレーション →
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
