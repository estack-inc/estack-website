import Image from "next/image";
import Link from "next/link";
import PillLink from "@/components/PillLink";

const NEWS_DEFAULT_THUMB =
  "/images/s-2400x1350_v-frms_webp_86d4ce22-2dc4-417e-9371-93561f248630_small.webp";

const NEWS_ITEMS = [
  {
    date: "2025.12.16",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    href: "/news/20251216",
    thumb: NEWS_DEFAULT_THUMB,
  },
  {
    date: "2025.05.27",
    category: "お知らせ",
    title: "本社を移転しました",
    href: "/news/20250527",
    thumb:
      "/images/s-3846x2066_v-frms_webp_5398baec-1793-4e60-b51d-dbf5e66469ac_small.webp",
  },
  {
    date: "2024.10.07",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    href: "/news/20241007",
    thumb: NEWS_DEFAULT_THUMB,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* 動画を画面全体に背景として表示 */}
        <div className="absolute inset-0 -z-0">
          <video
            src="/videos/hero-pc.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hidden md:block"
          />
          <video
            src="/videos/hero-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover md:hidden"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-12 md:pt-28 md:pb-24 min-h-[420px] md:min-h-[560px]">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-7xl font-semibold leading-tight tracking-wide">
              技術で支え、
              <br />
              共に成長する
            </h1>
            <p className="mt-6 max-w-xl text-sm md:text-base text-zinc-800 leading-relaxed">
              プロフェッショナリズムを常に意識し、専門技術を最大限に活用して
              <br className="hidden md:inline" />
              お客様に高品質なWeb技術に特化した技術支援、
              <br className="hidden md:inline" />
              及びシステム・サービス開発を提供します。
            </p>
            <PillLink href="/about" label="eSTACKについて" />
          </div>
        </div>
      </section>

      {/* News ticker */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex items-center gap-4 md:gap-6">
          <span className="inline-flex shrink-0 items-center rounded-full bg-brand px-3 py-1 text-[10px] font-semibold text-white tracking-wider">
            お知らせ
          </span>
          <span className="text-xs text-zinc-500 shrink-0 hidden md:inline">
            {NEWS_ITEMS[0].date}
          </span>
          <Link
            href={NEWS_ITEMS[0].href}
            className="flex-1 truncate text-sm text-zinc-700 hover:text-brand"
          >
            {NEWS_ITEMS[0].title}
          </Link>
          <Link
            href="/news"
            className="shrink-0 text-zinc-400 hover:text-brand"
            aria-label="お知らせ一覧へ"
          >
            →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start mb-12 md:mb-16">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] text-brand mb-3 font-display">
                Services
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">サービス</h2>
            </div>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed pt-2">
              弊社では古典的な顧客主体の受動的なサービス形態ではなく、
              提案主体の能動的なサービス形態にてお客様にサービスをご提供しております。
              提案主体だからこそお客様に寄り添い、1社1社にマッチしたご提案を徹底しております。
            </p>
          </div>

          <div className="space-y-10 md:space-y-14">
            <ServiceCard
              imageSrc="/images/s-580x580_b86f18e5-c9da-4e03-857c-5a294ba3a79c.svg"
              eyebrow="System Integration"
              title="システムインテグレーション"
              description="システムインテグレーション（SI）は、異なるITシステムやソフトウェアを統合し、一つの連携した効率的なシステムを構築するプロセスです。このアプローチにより、企業はデータを一元化し、業務プロセスを自動化することが可能となり、全体的な運用効率とビジネスの柔軟性を大幅に向上させることができます。"
              href="/service/system-integration"
            />
            <ServiceCard
              imageSrc="/images/s-584x580_4e84b74a-a2d2-4fd3-b924-30cd59a19dc1.svg"
              eyebrow="System Engineering Service"
              title="システムエンジニアリングサービス"
              description="最新技術を駆使して業務を効率化し問題を解決する専門的なサービスです。テクノロジーのスキルと問題解決能力を高めながら、様々な業界で経験を積むことが可能です。チームワークとコミュニケーション能力が求められ、多様なキャリアパスが開かれます。また、技術的成長だけでなく、個人の成長も促す魅力的なフィールドです。"
              href="/service/system-engineering-service"
            />
          </div>
        </div>
      </section>

      {/* Work — 斜めのフレームで写真を並べる */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "/images/s-2000x1080_v-frms_webp_8b9af719-692f-4469-aa68-01dc36603302_regular.webp", rotate: "-rotate-3" },
              { src: "/images/s-2400x1571_v-frms_webp_71df778e-335b-4f00-a9da-50991eedb423_middle.webp", rotate: "rotate-2" },
              { src: "/images/s-2000x1080_v-frms_webp_eba8a87b-4db3-49ad-b4d8-b809f2a38f56_regular.webp", rotate: "-rotate-2" },
              { src: "/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp", rotate: "rotate-3" },
              { src: "/images/s-2000x1080_v-frms_webp_fff9b2ef-9134-4ad2-86a0-1f7a5c0de2b2_regular.webp", rotate: "-rotate-3" },
              { src: "/images/s-2400x1250_v-frms_webp_c2ff8c63-996c-43fd-9d7b-b3105683b65b_small.webp", rotate: "rotate-2" },
            ].map((item, i) => (
              <div
                key={item.src}
                className={`aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md transform ${item.rotate} hover:rotate-0 transition-transform duration-500`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-sm font-medium tracking-[0.3em] text-brand mb-3 font-display">
              News
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold">お知らせ</h2>
          </div>
          <ul className="grid grid-cols-3 gap-3 md:gap-5">
            {NEWS_ITEMS.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="block group">
                  <div className="aspect-[4/3] overflow-hidden rounded bg-zinc-100 mb-3">
                    <Image
                      src={item.thumb}
                      alt=""
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mb-1">{item.date}</p>
                  <p className="text-xs font-medium text-brand mb-2">
                    {item.category}
                  </p>
                  <p className="text-base font-semibold leading-relaxed group-hover:text-brand transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-6">
            <PillLink href="/news" label="お知らせ一覧へ" size="sm" />
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
            <div className="aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src="/images/s-2000x1080_v-frms_webp_8b9af719-692f-4469-aa68-01dc36603302_regular.webp"
                alt=""
                width={1000}
                height={667}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.3em] text-brand mb-3 font-display">
                Career
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">採用情報</h2>
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed mb-8">
                エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
                弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
              </p>
              <PillLink href="/recruit" label="採用情報へ" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
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
      <div className="aspect-square max-w-[420px] md:max-w-[520px] mx-auto flex items-center justify-center">
        <Image
          src={imageSrc}
          alt=""
          width={520}
          height={520}
          className="w-full h-full object-contain animate-float-main"
        />
      </div>
      <div>
        <p className="text-sm font-medium tracking-[0.25em] text-brand mb-3 font-display">
          {eyebrow}
        </p>
        <h3 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
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
