import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "ITエンジニア中途採用",
};

const ITEMS = [
  { label: "募集職種", value: "ITエンジニア" },
  {
    label: "応募資格",
    value: (
      <>
        学歴不問・年齢不問
        <br />
        <span className="text-xs text-zinc-500">
          ※ブランク・経験が浅くても大歓迎
        </span>
      </>
    ),
  },
  {
    label: "給与",
    value: (
      <>
        月収 350,000円以上
        <br />
        <span className="text-xs text-zinc-500">
          ※能力により応じて決定いたします
        </span>
      </>
    ),
  },
  { label: "勤務地", value: "東京23区" },
  {
    label: "勤務時間",
    value: (
      <>
        10:00〜19:00
        <br />
        <span className="text-xs text-zinc-500">
          ※仕事内容により異なる場合がございます
        </span>
      </>
    ),
  },
  { label: "年間休日数", value: "126日以上" },
  { label: "休日", value: "土日祝日、夏季休暇、冬季休暇" },
  { label: "福利厚生", value: "社会保険、厚生年金、雇用保険" },
];

export default function MidCareerPage() {
  return (
    <>
      <PageHeader title="ITエンジニア中途採用" subtitle="Mid Career" />

      <section className="pb-2">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500">
            <Link href="/" className="hover:text-brand">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/recruit" className="hover:text-brand">
              採用情報
            </Link>
            <span>/</span>
            <span>ITエンジニア中途採用</span>
          </nav>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <dl className="divide-y divide-zinc-200 bg-zinc-50 rounded-lg overflow-hidden">
            {ITEMS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 px-5 md:px-8 py-5"
              >
                <dt className="text-sm font-semibold text-zinc-700">
                  {row.label}
                </dt>
                <dd className="text-sm text-zinc-700 leading-relaxed">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold mb-3 font-display">
            Entry
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">エントリー</h2>
          <p className="text-sm md:text-base mb-8">
            eSTACKへのエントリーこちらから
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recruit/entry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand hover:bg-zinc-100 transition-colors"
            >
              エントリーする
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/recruit#jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand transition-colors"
            >
              募集中職種へ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
