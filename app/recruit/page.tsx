import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";
import ScrollingPhotos from "@/components/ScrollingPhotos";

export const metadata = {
  title: "採用情報",
};

// 旧サイトと同じ、ヒーロー直下の横スクロール写真用（2 つのコラージュ画像を繰り返し）
const HERO_PHOTOS = [
  "/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp",
  "/images/s-2400x1571_v-frms_webp_71df778e-335b-4f00-a9da-50991eedb423_middle.webp",
];

const JOBS = [
  {
    label: "中途",
    title: "ITエンジニア中途採用",
    body: "わくわくする仕事環境で私達と楽しく働きませんか。キャリアアップを考慮した人生設計をサポートいたします。",
    href: "/recruit/mid",
    available: true,
    photo: "/images/recruit-22feab3e.webp",
  },
  {
    label: "新卒",
    title: "未経験採用",
    body: "現在募集は行っておりません",
    href: "#",
    available: false,
    photo: "/images/recruit-eee1f48b.webp",
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeader title="採用情報" subtitle="Career" />

      {/* ヒーロー直下：旧サイトと同じ、横にスクロールする写真ストリップ */}
      <section className="py-6 md:py-10 overflow-hidden">
        <ScrollingPhotos photos={HERO_PHOTOS} />
      </section>

      {/* メッセージ */}
      <section id="message" className="relative py-10 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-8 leading-tight">
            わくわくできる人
            <br />
            楽しく仕事がしたい人
          </h2>
          <p className="text-sm md:text-base text-zinc-700 leading-relaxed text-center">
            エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
            弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
          </p>
        </div>
      </section>

      {/* 社内ブログ */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Blog
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
            社内ブログ
          </h2>
          <p className="text-center text-sm text-zinc-600 mb-6">
            コンテンツを準備中です。
          </p>
          <div className="flex justify-center">
            <PillLink href="/news" label="記事一覧へ" />
          </div>
        </div>
      </section>

      {/* セクション間の装飾オレンジリボン（旧サイトと同じ） */}
      <div className="w-full pointer-events-none overflow-hidden">
        <Image
          src="/wave-ribbon.svg"
          alt=""
          width={2191}
          height={251}
          className="w-full h-auto"
          aria-hidden
        />
      </div>

      {/* 募集中職種 — 旧サイトと同じく写真付きカード 2 枚 */}
      <section id="jobs" className="py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Jobs
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 text-center">
            募集中職種
          </h2>
          <ul className="grid md:grid-cols-2 gap-5 md:gap-8">
            {JOBS.map((j) => {
              const CardInner = (
                <>
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={j.photo}
                      alt=""
                      width={600}
                      height={400}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <span
                      className={`inline-flex rounded-full text-white text-xs font-medium px-3 py-0.5 mb-3 ${
                        j.available ? "bg-brand" : "bg-zinc-400"
                      }`}
                    >
                      {j.label}
                    </span>
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-2 ${
                        j.available
                          ? "group-hover:text-brand transition-colors"
                          : ""
                      }`}
                    >
                      {j.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {j.body}
                    </p>
                  </div>
                </>
              );
              return (
                <li key={j.title}>
                  {j.available ? (
                    <Link
                      href={j.href}
                      className="block group rounded-2xl bg-white border border-zinc-200 hover:border-brand transition-colors overflow-hidden h-full"
                    >
                      {CardInner}
                    </Link>
                  ) : (
                    <div className="rounded-2xl bg-white border border-zinc-200 overflow-hidden h-full opacity-60">
                      {CardInner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
