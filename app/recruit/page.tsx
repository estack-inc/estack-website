import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";
import ScrollingPhotos from "@/components/ScrollingPhotos";

export const metadata = {
  title: "採用情報",
};

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

      {/* ヒーロー直下：横スクロール写真ストリップ */}
      <section className="py-6 md:py-10 overflow-hidden">
        <ScrollingPhotos photos={HERO_PHOTOS} />
      </section>

      {/* メッセージ — 旧サイト準拠：白ボックスを左寄せ＋写真下半分にオーバーラップ＋本文左寄せ */}
      <section id="message" className="relative -mt-20 md:-mt-36 mb-10 md:mb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-10">
          <div className="bg-white rounded-lg shadow-xl px-7 py-10 md:px-14 md:py-14 max-w-2xl ml-0 md:ml-12">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 leading-tight">
              わくわくできる人
              <br />
              楽しく仕事がしたい人
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
              弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
            </p>
          </div>
        </div>
      </section>

      {/* 社内ブログ — 旧サイト準拠：左寄せ、大きめのフォント */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
            社内ブログ
          </h2>
          <p className="text-sm text-zinc-600 mb-6">
            コンテンツを準備中です。
          </p>
          <div>
            <PillLink href="/news" label="記事一覧へ" />
          </div>
        </div>
      </section>

      {/* 募集中職種 — 旧サイト準拠：wave.svg をカード背面に配置し、カードに隠れて左右の波だけ見える */}
      <section id="jobs" className="relative py-10 md:py-16 overflow-hidden">
        {/* 背面リボン：カード中央を横切り、カードに隠されて左右の山だけ可視 */}
        <Image
          src="/wave.svg"
          alt=""
          width={1512}
          height={348}
          aria-hidden
          className="absolute left-0 top-[-45%] w-full pointer-events-none -z-0"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10">
            募集中職種
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
            {JOBS.map((j) => {
              const CardInner = (
                <>
                  {/* 写真は白ボックスの中に余白を持たせて配置（やや小さめ） */}
                  <div className="p-5 md:p-6 pb-3 md:pb-4">
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={j.photo}
                        alt=""
                        width={600}
                        height={300}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <span
                      className={`inline-flex rounded-full text-white text-xs font-medium px-3 py-0.5 mb-3 ${
                        j.available ? "bg-brand" : "bg-zinc-400"
                      }`}
                    >
                      {j.label}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-3 ${
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
                      className="block group rounded-3xl bg-white border border-zinc-200 hover:border-brand transition-colors overflow-hidden h-full shadow-sm"
                    >
                      {CardInner}
                    </Link>
                  ) : (
                    /* 未経験採用は募集無しなのでグレー背景で目立たせない */
                    <div className="rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden h-full">
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
