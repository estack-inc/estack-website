import Image from "next/image";
import Link from "next/link";

const NEWS_ITEMS = [
  {
    date: "2025.12.16",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    href: "/news",
  },
  {
    date: "2025.05.27",
    category: "お知らせ",
    title: "本社を移転しました",
    href: "/news",
  },
  {
    date: "2024.10.07",
    category: "お知らせ",
    title: "労働者派遣法に基づく情報提供",
    href: "/news",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 w-full pointer-events-none -z-0">
          <Image
            src="/wave.svg"
            alt=""
            width={1512}
            height={348}
            className="w-full h-auto"
            aria-hidden
            priority
          />
        </div>
        <div className="absolute -right-12 top-8 md:-right-20 md:top-12 pointer-events-none -z-0">
          <Image
            src="/images/s-1500x1500_91bf90b8-200c-4a0c-8cb2-8323513d8c61.svg"
            alt=""
            width={420}
            height={420}
            className="w-[200px] md:w-[340px] opacity-95"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-wide">
            技術で支え、
            <br />
            共に成長する
          </h1>
          <p className="mt-6 max-w-xl text-xs md:text-sm text-zinc-700 leading-relaxed">
            プロフェッショナリズムを常に意識し、専門技術を最大限に活用して
            <br className="hidden md:inline" />
            お客様に高品質なWeb技術に特化した技術支援、
            <br className="hidden md:inline" />
            及びシステム・サービス開発を提供します。
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-brand transition-colors"
          >
            eSTACKについて
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-[10px]">→</span>
          </Link>
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
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-brand mb-2 font-display">
              Services
            </p>
            <h2 className="text-xl md:text-3xl font-bold mb-4">サービス</h2>
            <p className="max-w-2xl mx-auto text-xs md:text-sm text-zinc-700 leading-relaxed">
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
              reversed
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl bg-brand p-6 md:p-12">
            <div className="text-center mb-8 text-white">
              <p className="text-xs font-semibold tracking-[0.3em] mb-2 font-display opacity-90">
                Work
              </p>
              <h2 className="text-xl md:text-3xl font-bold mb-3">実績</h2>
              <p className="max-w-xl mx-auto text-xs md:text-sm leading-relaxed opacity-95">
                eSTACKが携わった開発、技術支援などの実績をご紹介いたします。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-3xl mx-auto">
              {[
                "/images/s-2400x1571_v-frms_webp_71df778e-335b-4f00-a9da-50991eedb423_middle.webp",
                "/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp",
                "/images/s-2400x1250_v-frms_webp_2efc1785-93a8-4de3-91ec-93373a224ffd_small.webp",
                "/images/s-2400x1250_v-frms_webp_c2ff8c63-996c-43fd-9d7b-b3105683b65b_small.webp",
                "/images/s-2400x1350_v-frms_webp_86d4ce22-2dc4-417e-9371-93561f248630_small.webp",
                "/images/s-3846x2066_v-frms_webp_5398baec-1793-4e60-b51d-dbf5e66469ac_small.webp",
              ].map((src) => (
                <div
                  key={src}
                  className="aspect-[4/3] overflow-hidden rounded-md bg-white"
                >
                  <Image
                    src={src}
                    alt=""
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-brand mb-2 font-display">
              News
            </p>
            <h2 className="text-xl md:text-3xl font-bold">お知らせ</h2>
          </div>
          <ul className="grid grid-cols-3 gap-3 md:gap-5">
            {NEWS_ITEMS.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="block group">
                  <div className="aspect-[4/3] overflow-hidden rounded bg-zinc-100 mb-3">
                    <Image
                      src="/images/s-2400x1350_v-frms_webp_86d4ce22-2dc4-417e-9371-93561f248630_small.webp"
                      alt=""
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] text-zinc-500 mb-1">{item.date}</p>
                  <p className="text-[10px] font-semibold text-brand mb-1">
                    {item.category}
                  </p>
                  <p className="text-xs font-medium leading-relaxed group-hover:text-brand transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-right mt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-brand transition-colors"
            >
              お知らせ一覧へ
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white text-[9px]">→</span>
            </Link>
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
              <p className="text-xs font-semibold tracking-[0.3em] text-brand mb-2 font-display">
                Career
              </p>
              <h2 className="text-xl md:text-3xl font-bold mb-4">採用情報</h2>
              <p className="text-xs md:text-sm text-zinc-700 leading-relaxed mb-6">
                エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
                弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
              </p>
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-brand transition-colors"
              >
                採用情報へ
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white text-[9px]">→</span>
              </Link>
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
