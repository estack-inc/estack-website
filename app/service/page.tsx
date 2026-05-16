import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";

export const metadata = {
  title: "サービス一覧",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader title="サービス" />

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            技術で支え、
            <br />
            共に成長する
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-700 leading-loose">
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
            variant="si"
            eyebrow="System Integration"
            title="システムインテグレーション"
            description="システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。このアプローチにより、企業はデータを一元化し、業務プロセスを自動化することが可能となり、全体的な運用効率とビジネスの柔軟性を大幅に向上させることができます。"
            href="/service/system-integration"
          />
          <ServiceItem
            variant="ses"
            eyebrow="System Engineering Service"
            title="システムエンジニアリングサービス"
            description="最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。テクノロジーのスキルと問題解決能力を高めながら、様々な業界で経験を積むことが可能です。チームワークとコミュニケーション能力が求められ、多様なキャリアパスが開かれます。また、技術的成長だけでなく、個人の成長も促す魅力的なフィールドです。"
            href="/service/system-engineering-service"
          />
        </div>
      </section>
    </>
  );
}

function ServiceItem({
  variant,
  eyebrow,
  title,
  description,
  href,
}: {
  variant: "si" | "ses";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}) {
  const imageSrc =
    variant === "si"
      ? "/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
      : "/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg";
  const circleSrc =
    variant === "si"
      ? "/images/s-357x357_ac68ffd8-3b0e-470f-b8ea-0ce4eb149d2c.svg"
      : "/images/s-357x357_bee8ff2e-8613-4535-8b42-44529ddb319b.svg";
  const dotSrc =
    variant === "si"
      ? "/images/s-165x183_73486b20-41ee-40e0-99b3-21f2a2f12cd0.svg"
      : "/images/s-165x183_01ce5f45-036a-4823-8858-6c7005f0d337.svg";

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="relative aspect-square w-full max-w-[420px] md:max-w-[520px] mx-auto">
        <Image
          src={circleSrc}
          alt=""
          width={357}
          height={357}
          aria-hidden
          className={
            variant === "si"
              ? "absolute left-[42%] top-[16%] w-[62%] aspect-square animate-float-deco"
              : "absolute left-[3%] top-[-2%] w-[62%] aspect-square animate-float-deco"
          }
        />
        <Image
          src={dotSrc}
          alt=""
          width={165}
          height={183}
          aria-hidden
          className={
            variant === "si"
              ? "absolute left-[5%] bottom-[2%] w-[29%] z-10"
              : "absolute left-[71%] bottom-[-9%] w-[29%] z-10"
          }
        />
        <Image
          src={imageSrc}
          alt=""
          width={520}
          height={520}
          className="relative z-30 w-full h-full object-contain animate-float-main"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-brand mb-3 font-display">
          {eyebrow}
        </p>
        <h3 className="text-2xl md:text-4xl font-semibold mb-5 leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-zinc-700 leading-relaxed mb-7">
          {description}
        </p>
        <PillLink href={href} label="詳しく見る" />
      </div>
    </div>
  );
}
