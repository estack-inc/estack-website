import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

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
    title: "デジタルツイン基盤における改修およびインフラ環境構築支援",
    tech: "C#、Python",
  },
  {
    title:
      "天候観測システムの情報を元にAIによる画像解析を行うシステムの開発支援",
    tech: "AIシステム開発経験、数学、Python",
  },
  {
    title: "福祉関係系大手求人サイトの開発・運用支援",
    tech: "PHP、Laravel、アジャイル開発",
  },
  {
    title: "通信会社大手のECサイトのインフラシステム開発支援",
    tech: "Java、SQL",
  },
  {
    title: "小売企業大手の業務管理システムのリプレイス開発支援",
    tech: "SQL（CRED）、Java、Asteria",
  },
  {
    title:
      "通信会社大手のキャッシュレスシステムアプリの店舗側システム開発支援",
    tech: "JavaScript、TypeScript、React",
  },
  {
    title: "製薬会社大手のドキュメント管理システムのエンハンス開発支援",
    tech: "Java、Spring boot、HTML/CSS/JavaScript、Azure、Box",
  },
];

export default function SESPage() {
  return (
    <>
      <PageHeader
        title="システムエンジニアリングサービス"
        subtitle="System Engineering Service"
      />

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-[1fr_280px] gap-6 md:gap-10 items-center">
          <p className="text-xs md:text-sm text-zinc-700 leading-relaxed">
            最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。
            <br />
            <br />
            テクノロジーのスキルと問題解決能力を高めながら、様々な業界で経験を積むことが可能です。チームワークとコミュニケーション能力が求められ、多様なキャリアパスが開かれます。また、技術的成長だけでなく、個人の成長も促す魅力的なフィールドです。
          </p>
          <div className="aspect-square max-w-[280px] mx-auto md:mx-0 flex items-center justify-center">
            <Image
              src="/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg"
              alt=""
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-brand mb-2 font-display text-center">
            Merit
          </p>
          <h2 className="text-lg md:text-2xl font-bold mb-8 text-center">
            主な利点
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {MERITS.map((m) => (
              <li
                key={m.n}
                className="rounded-lg bg-white p-4 border border-zinc-100"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs font-bold font-display mb-2">
                  {m.n}
                </span>
                <h3 className="font-bold text-xs mb-1">{m.title}</h3>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-brand mb-2 font-display text-center">
            Work
          </p>
          <h2 className="text-lg md:text-2xl font-bold mb-8 text-center">
            技術支援実績
          </h2>
          <ul className="space-y-2.5">
            {WORKS.map((w, i) => (
              <li
                key={i}
                className="rounded-lg bg-zinc-50 px-5 py-4 border border-zinc-100"
              >
                <p className="font-semibold text-xs md:text-sm mb-1">
                  {w.title}
                </p>
                <p className="text-[11px] text-brand">{w.tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-brand mb-2 font-display text-center">
            Other Service
          </p>
          <h2 className="text-lg md:text-2xl font-bold mb-6 text-center">
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
              <p className="text-[10px] font-semibold tracking-[0.25em] text-brand mb-1 font-display">
                System Integration
              </p>
              <p className="text-sm font-bold group-hover:text-brand transition-colors">
                システムインテグレーション →
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
