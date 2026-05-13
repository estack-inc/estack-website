import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "システムインテグレーション",
  description:
    "システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。",
};

const SERVICES = [
  {
    n: "1",
    title: "システム評価と戦略策定",
    body: "既存のIT環境を詳細に分析し、ビジネスのニーズに応じた改善計画を策定します。",
  },
  {
    n: "2",
    title: "カスタマイズソリューションの提供",
    body: "独自のビジネス要件に合わせたITソリューションを設計し、効率的な実装を支援します。",
  },
  {
    n: "3",
    title: "プロジェクト管理",
    body: "ITプロジェクトの計画から実施、監視までを一手に担い、目標達成を確実にします。",
  },
  {
    n: "4",
    title: "セキュリティ強化",
    body: "最新のセキュリティ技術を用いて、企業の情報資産を保護します。",
  },
];

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
      <PageHeader
        title="システムインテグレーション"
        subtitle="System Integration"
      />

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-center">
          <div className="aspect-square max-w-[280px] mx-auto md:mx-0 flex items-center justify-center">
            <Image
              src="/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
              alt=""
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
            システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。このアプローチにより、企業はデータを一元化し、業務プロセスを自動化することが可能となり、全体的な運用効率とビジネスの柔軟性を大幅に向上させることができます。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium tracking-[0.3em] text-brand mb-2 font-display text-center">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            サービス内容
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <li
                key={s.n}
                className="flex gap-4 rounded-lg bg-white p-4 border border-zinc-100"
              >
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-semibold font-display">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-medium tracking-[0.3em] text-brand mb-2 font-display text-center">
            Merit
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            主な利点
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {MERITS.map((m) => (
              <li
                key={m.n}
                className="rounded-lg bg-white p-4 border border-zinc-100"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs font-semibold font-display mb-2">
                  {m.n}
                </span>
                <h3 className="font-semibold text-base mb-2">{m.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium tracking-[0.3em] text-brand mb-2 font-display text-center">
            Other Service
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
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
              <p className="text-xs font-medium tracking-[0.25em] text-brand mb-1 font-display">
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
