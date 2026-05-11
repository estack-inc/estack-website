import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

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
      <section id="message" className="relative py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-zinc-100 mb-12 relative">
            <Image
              src="/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp"
              alt=""
              width={1600}
              height={1050}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 leading-tight">
            わくわくできる人
            <br />
            楽しく仕事がしたい人
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-700 leading-loose text-center">
            エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
            <br />
            弊社ではスキルアップはもちろん、キャリアパスを考慮した人生設計、人脈作り、人間関係の構築なども一緒に築き上げていきます。
          </p>
        </div>
      </section>

      {/* 社内ブログ */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display text-center">
            Blog
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            社内ブログ
          </h2>
          <p className="text-center text-sm text-zinc-600 mb-8">
            コンテンツを準備中です。
          </p>
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-light transition-colors"
            >
              記事一覧へ
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 募集中職種 */}
      <section id="jobs" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display text-center">
            Jobs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            募集中職種
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {JOBS.map((j) => (
              <li key={j.title}>
                {j.available ? (
                  <Link
                    href={j.href}
                    className="block group rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-brand transition-colors p-8 h-full"
                  >
                    <span className="inline-flex rounded-full bg-brand text-white text-xs px-3 py-1 mb-4">
                      {j.label}
                    </span>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-brand transition-colors">
                      {j.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {j.body}
                    </p>
                  </Link>
                ) : (
                  <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-8 h-full opacity-60">
                    <span className="inline-flex rounded-full bg-zinc-400 text-white text-xs px-3 py-1 mb-4">
                      {j.label}
                    </span>
                    <h3 className="text-lg font-bold mb-3">{j.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
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
