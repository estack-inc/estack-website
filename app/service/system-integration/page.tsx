import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "システムインテグレーション",
  description:
    "システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。",
};

// 「サービス内容」（旧サイト準拠の縦並び 4 ステップ）
const SERVICES = [
  {
    n: "1",
    title: "システム評価と戦略策定",
    body: "既存のIT環境を詳細に分析し、ビジネスのニーズに応じた改善計画を策定します。",
    photo:
      "/images/s-2000x1080_v-frms_webp_cc1b59af-a8e7-4d2b-ad09-86dba2360d50_regular.webp",
  },
  {
    n: "2",
    title: "カスタマイズソリューションの提供",
    body: "独自のビジネス要件に合わせたITソリューションを設計し、効率的な実装を支援します。",
    photo: "/images/recruit-banner.webp",
  },
  {
    n: "3",
    title: "プロジェクト管理",
    body: "ITプロジェクトの計画から実施、監視までを一手に担い、目標達成を確実にします。",
    photo:
      "/images/s-2000x1080_v-frms_webp_12af3b53-a3ff-4300-8d54-39cfd1c32bd2_regular.webp",
  },
  {
    n: "4",
    title: "セキュリティ強化",
    body: "最新のセキュリティ技術を用いて、企業の情報資産を保護します。",
  },
];

// 「主な利点」（旧サイトと同じ 8 項目、横並び番号+タイトル）
const MERITS = [
  {
    n: "1",
    title: "データ一元化",
    body: "複数のシステムからのデータを統合することで、情報の一貫性とアクセシビリティが向上します。",
  },
  {
    n: "2",
    title: "運用効率の向上",
    body: "異なるシステム間でのデータとプロセスのシームレスな連携により、業務の自動化と効率化が促進されます。",
  },
  {
    n: "3",
    title: "コスト削減",
    body: "個々のシステムの維持管理に必要なコストを削減し、ITインフラ全体の運用コストを最適化します。",
  },
  {
    n: "4",
    title: "ビジネスの柔軟性",
    body: "新たなビジネス要求や技術的変化に迅速に対応するためのシステムの柔軟性が向上します。",
  },
  {
    n: "5",
    title: "生産性の向上",
    body: "効率的なITソリューションにより、業務プロセスがスムーズになり、生産性が向上します。",
  },
  {
    n: "6",
    title: "コスト効率の改善",
    body: "最適な技術投資により、運用コストの削減とROIの最大化を実現します。",
  },
  {
    n: "7",
    title: "競争力の強化",
    body: "革新的な技術を取り入れることで、市場における競争力を高めます。",
  },
  {
    n: "8",
    title: "リスク管理",
    body: "先進のリスク管理戦略で、ビジネスを潜在的な脅威から守ります。",
  },
];

export default function SystemIntegrationPage() {
  return (
    <>
      {/* Hero — 旧サイトと同じく、左に文言・右にイラスト、下にオレンジリボン */}
      <section className="relative pt-10 md:pt-16 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1fr_440px] gap-8 md:gap-12 items-end">
          <div>
            <p className="text-sm font-medium text-brand mb-2 font-display">
              System Integration
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 md:mb-8">
              システムインテグレーション
            </h1>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed max-w-xl">
              システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。このアプローチにより、企業はデータを一元化し、業務プロセスを自動化することが可能となり、全体的な運用効率とビジネスの柔軟性を大幅に向上させることができます。
            </p>
          </div>
          <div className="mx-auto md:mx-0 w-full max-w-[360px] md:max-w-[440px]">
            <Image
              src="/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
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

      {/* サービス内容 — 旧サイトと同じ縦並び 4 ステップ（番号 + タイトル + 説明 + 写真 + ↓ 矢印） */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center">
            サービス内容
          </h2>
          <div className="rounded-3xl bg-zinc-50 p-5 md:p-8">
            {SERVICES.map((s, i) => (
              <div key={s.n}>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_180px] gap-4 md:gap-6 items-center bg-white rounded-2xl p-5 md:p-6">
                  <span className="shrink-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand text-white text-base md:text-lg font-semibold font-display">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg md:text-2xl mb-2 md:mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                  {s.photo && (
                    <div className="hidden md:block aspect-[5/3] w-full max-w-[180px] overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={s.photo}
                        alt=""
                        width={180}
                        height={108}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                {i < SERVICES.length - 1 && (
                  <div
                    className="flex justify-center py-3 md:py-4 text-brand"
                    aria-hidden
                  >
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14L0 0H20L10 14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 主な利点 — 旧サイトと同じく 4×2 グリッド（番号 + タイトル が横並び、説明が下） */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Merit
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center">
            主な利点
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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

      {/* その他サービス — 新サイトの設計を維持（SES への導線） */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Other Service
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            その他サービス
          </h2>
          <Link
            href="/service/system-engineering-service"
            className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 group rounded-lg bg-white border border-zinc-100 hover:border-brand transition-colors p-4 md:p-5 max-w-xl mx-auto"
          >
            <Image
              src="/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg"
              alt=""
              width={140}
              height={140}
              className="w-full h-auto"
            />
            <div>
              <p className="text-xs font-medium text-brand mb-1 font-display">
                System Engineering Service
              </p>
              <p className="text-base font-semibold group-hover:text-brand transition-colors">
                システムエンジニアリングサービス →
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
