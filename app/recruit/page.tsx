import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";

export const metadata = {
  title: "採用情報",
};

const JOBS = [
  {
    label: "中途",
    title: "ITエンジニア中途採用",
    body: "わくわくする仕事環境で私達と楽しく働きませんか。キャリアアップを考慮した人生設計をサポートいたします。",
    href: "/recruit/mid",
    available: true,
  },
  {
    label: "新卒",
    title: "未経験採用",
    body: "現在募集は行っておりません",
    href: "#",
    available: false,
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeader title="採用情報" subtitle="Career" />

      {/* メッセージ */}
      <section id="message" className="relative py-10 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="aspect-[16/6] md:aspect-[3/1] rounded-lg overflow-hidden bg-zinc-100 mb-8 relative">
            <Image
              src="/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp"
              alt=""
              width={1800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-5 leading-tight">
            わくわくできる人
            <br />
            楽しく仕事がしたい人
          </h2>
          <p className="max-w-2xl mx-auto text-xs md:text-sm text-zinc-700 leading-relaxed text-center">
            エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
            弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
          </p>
        </div>
      </section>

      {/* 社内ブログ */}
      <section className="py-10 md:py-14 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-brand mb-2 font-display text-center">
            Blog
          </p>
          <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center">
            社内ブログ
          </h2>
          <p className="text-center text-xs text-zinc-600 mb-5">
            コンテンツを準備中です。
          </p>
          <div className="flex justify-center">
            <PillLink href="/news" label="記事一覧へ" size="sm" />
          </div>
        </div>
      </section>

      {/* 募集中職種 */}
      <section id="jobs" className="py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-brand mb-2 font-display text-center">
            Jobs
          </p>
          <h2 className="text-lg md:text-2xl font-semibold mb-8 text-center">
            募集中職種
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {JOBS.map((j) => (
              <li key={j.title}>
                {j.available ? (
                  <Link
                    href={j.href}
                    className="block group rounded-lg bg-white border border-zinc-200 hover:border-brand transition-colors p-5 h-full"
                  >
                    <span className="inline-flex rounded-full bg-brand text-white text-[10px] px-2.5 py-0.5 mb-3">
                      {j.label}
                    </span>
                    <h3 className="text-sm font-semibold mb-2 group-hover:text-brand transition-colors">
                      {j.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {j.body}
                    </p>
                  </Link>
                ) : (
                  <div className="rounded-lg bg-white border border-zinc-200 p-5 h-full opacity-60">
                    <span className="inline-flex rounded-full bg-zinc-400 text-white text-[10px] px-2.5 py-0.5 mb-3">
                      {j.label}
                    </span>
                    <h3 className="text-sm font-semibold mb-2">{j.title}</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {j.body}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
