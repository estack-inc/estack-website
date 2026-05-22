import Image from "next/image";
import Link from "next/link";
import PillLink from "@/components/PillLink";

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
    <section className="relative py-10 md:py-16 overflow-hidden">
      {/* 背景の装飾オレンジリボン（左に下向きカーブ・右に上向きカーブ、白カードの背景） */}
      <Image
        src="/wave.svg"
        alt=""
        width={1512}
        height={348}
        aria-hidden
        className="absolute -left-32 top-[420px] w-[60%] pointer-events-none -z-0 hidden md:block"
      />
      <Image
        src="/wave.svg"
        alt=""
        width={1512}
        height={348}
        aria-hidden
        className="absolute -right-32 top-[1100px] w-[60%] pointer-events-none -z-0 hidden md:block scale-x-[-1]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        {/* タイトル＋パンくず */}
        <div className="mb-8 md:mb-10">
          <span className="inline-flex rounded-full bg-brand text-white text-xs font-medium px-3 py-0.5 mb-3">
            中途
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            ITエンジニア中途採用
          </h1>
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

        {/* 白いカード：募集要項＋エントリーを内包（旧サイトと同じレイアウト） */}
        <div className="bg-white rounded-2xl shadow-lg border border-zinc-100 p-6 md:p-10">
          <dl className="divide-y divide-zinc-200">
            {ITEMS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 py-5"
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

          {/* エントリーセクション（同じカードの中、区切り線で分離） */}
          <div className="mt-10 pt-10 border-t border-zinc-200 flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-medium text-brand mb-1 font-display">
                Entry
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                エントリー
              </h2>
              <p className="text-sm text-zinc-700">
                eSTACKへのエントリーこちらから
              </p>
            </div>
            <Link
              href="/recruit/entry"
              aria-label="エントリーする"
              className="shrink-0 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-brand text-white shadow-md hover:opacity-90 transition-opacity"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M2 8H14M9 3L14 8L9 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* カード下のリンク：募集中職種へ */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <PillLink href="/recruit#jobs" label="募集中職種へ" />
        </div>
      </div>
    </section>
  );
}
