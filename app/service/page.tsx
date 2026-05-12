import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "サービス一覧",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader title="サービス" subtitle="Services" />

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            技術で支え、
            <br />
            共に成長する
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-zinc-700 leading-relaxed">
            <p>
              プロフェッショナリズムを心に刻み、日々の活動において高い専門性を追求しています。私たちは、常に変化し続けるテクノロジーの最先端に立ち、その進化に対応すべく努力しています。
            </p>
            <p>
              お客様に対しては、これらの専門技術を最大限に活用し、個別のニーズに合わせた高品質なWeb技術に特化した技術支援を提供いたします。
            </p>
            <p>
              また、システム・サービス開発においては、お客様のビジョンを共有し、革新的かつ堅牢なソリューションを提案し、実現いたします。お互いに協力し、成長し合いながら、常に最高水準のサービスを提供することをお約束いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8 space-y-10 md:space-y-14">
          <ServiceItem
            imageSrc="/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
            eyebrow="System Integration"
            title="システムインテグレーション"
            description="システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。このアプローチにより、企業はデータを一元化し、業務プロセスを自動化することが可能となり、全体的な運用効率とビジネスの柔軟性を大幅に向上させることができます。"
            href="/service/system-integration"
          />
          <ServiceItem
            imageSrc="/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg"
            eyebrow="System Engineering Service"
            title="システムエンジニアリングサービス"
            description="最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。テクノロジーのスキルと問題解決能力を高めながら、様々な業界で経験を積むことが可能です。チームワークとコミュニケーション能力が求められ、多様なキャリアパスが開かれます。また、技術的成長だけでなく、個人の成長も促す魅力的なフィールドです。"
            href="/service/system-engineering-service"
            reversed
          />
        </div>
      </section>
    </>
  );
}

function ServiceItem({
  imageSrc,
  eyebrow,
  title,
  description,
  href,
  reversed = false,
}: {
  imageSrc: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  reversed?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
        reversed ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="aspect-square max-w-[320px] md:max-w-[380px] mx-auto flex items-center justify-center">
        <Image
          src={imageSrc}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.25em] text-brand mb-2 font-display">
          {eyebrow}
        </p>
        <h3 className="text-lg md:text-2xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-zinc-700 leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-brand transition-colors"
        >
          詳しく見る
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white text-[9px]">→</span>
        </Link>
      </div>
    </div>
  );
}
