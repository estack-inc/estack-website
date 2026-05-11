import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "eSTACKについて",
};

const STATS = [
  { label: "創立", value: "6", unit: "期目" },
  { label: "社員数", value: "42", unit: "名" },
  { label: "平均年齢", value: "36.6", unit: "歳" },
  { label: "離職率", value: "1.7", unit: "%" },
];

const MEMBERS = [
  { dept: "IT事業部", code: "H.S", note: "会社設立時から働いています。今は業務委託先で、リーダー的なことをやっています。eSTACKは自由度が高く、上下問わずメンバー同士の距離がとても近い会社で、やりたいことも話せば環境を整えてくれるので、一緒に頑張りましょう" },
  { dept: "IT事業部", code: "R.K", note: "将来の夢はゲームプログラマでした。1度夢への心を折られるも持ち前のコミュニケーション力でeSTACKへ入社。仕事しやすい環境や相談しやすい風通しの良さで現在進行系で成長中！！！" },
  { dept: "IT事業部", code: "A.K", note: "やらない後悔よりやる後悔　迷ったらやる" },
  { dept: "IT事業部", code: "K.C", note: "短くても、やれば前に進める。" },
  { dept: "事業推進部", code: "N.T", note: "挑戦を楽しむ" },
  { dept: "総務部", code: "R.T", note: "「諦めない心」を大切にしてます！" },
  { dept: "IT事業部", code: "S.K", note: "今できることに向き合い続ける" },
  { dept: "IT事業部", code: "T.I", note: "生きることは学びの機会と出会うこと" },
  { dept: "IT事業部", code: "K.N", note: "可能な限り家から出たくない" },
  { dept: "IT事業部", code: "K.W", note: "eSTACKに転職し3年になります。臆病な性格の私ですが、eSTACKの方々の後押しのおかげで、現在も安心して挑戦を続けていられています。悪戦苦闘する日々ではありますが、自分の成長を少しずつ、そして、たしかに実感できております。" },
  { dept: "IT事業部", code: "M.K", note: "若いエネルギーに負けないように！" },
  { dept: "IT事業部", code: "M.K", note: "内面の成長に挑戦する" },
];

const COMPANY = [
  {
    label: "会社名",
    value: (
      <>
        eSTACK株式会社
        <br />
        eSTACK,INC.
      </>
    ),
  },
  { label: "代表取締役", value: "竹田 賢史" },
  {
    label: "所在地",
    value: (
      <div className="space-y-3">
        <div>
          <p>本社</p>
          <p className="text-sm text-zinc-700">
            〒206-0034　東京都多摩市鶴牧１丁目２番地１号サンシエールビル3階
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=東京都多摩市鶴牧１丁目２番地１号"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand hover:underline"
          >
            Googleマップで見る →
          </a>
        </div>
        <div>
          <p>東京事業所</p>
          <p className="text-sm text-zinc-700">
            〒160-0022　東京都新宿区新宿1-16-10 モニーレ御苑前804（コスモス御苑ビル8階）
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=東京都新宿区新宿1-16-10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand hover:underline"
          >
            Googleマップで見る →
          </a>
        </div>
      </div>
    ),
  },
  { label: "TEL", value: "042-401-8803" },
  { label: "資本金", value: "1,000万円" },
  {
    label: "事業内容",
    value: (
      <ul className="space-y-1">
        <li>システムインテグレーション事業</li>
        <li>システムエンジニアリングサービス事業</li>
      </ul>
    ),
  },
  {
    label: "保有資格",
    value: (
      <ul className="space-y-1">
        <li>ISO/IEC27001:2022</li>
        <li>労働者派遣事業許可番号　派 13-317114</li>
      </ul>
    ),
  },
  {
    label: "取引銀行",
    value: (
      <ul className="space-y-1">
        <li>多摩信用金庫</li>
        <li>住信SBIネット銀行</li>
        <li>住信レミット</li>
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="eSTACKについて" subtitle="About" />

      {/* 代表メッセージ */}
      <section id="message" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">代表メッセージ</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-5 text-sm md:text-base text-zinc-700 leading-loose">
              <p>
                当社、eSTACK株式会社では、IT業界の急速な進展に伴い、常に先端を行く革新と提案を心がけています。
              </p>
              <p>
                私たちの核となるのは「従業員主役の文化」であり、これにより各個人が情報を積極的に取り入れ、主体的に動くことが可能です。全従業員がこの業界での成長と共に、真の専門家へと進化していくことを目指しています。
              </p>
              <p>
                長年の経験と熱意をもって、私たちは日々、新たな技術を取り入れ、お客様に最適なソリューションを提供してまいります。
              </p>
              <p>
                持続可能な成長と、常にお客様の期待を超えるサービスを提供することが、私たちeSTACKの使命です。
              </p>
              <p className="pt-4 text-sm">
                代表取締役
                <br />
                <span className="text-lg font-semibold">竹田 賢史</span>
              </p>
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-zinc-100">
              <Image
                src="/images/s-2001x2400_v-frms_webp_3d556af1-6866-4eb3-8a23-80fc27ce17d3_small.webp"
                alt="代表取締役 竹田 賢史"
                width={500}
                height={625}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section id="philosophy" className="py-16 md:py-24 bg-brand text-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] mb-4 font-display">
            Philosophy
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            私達の成長は100％の熱意と
            <br />
            50％能力で成し遂げられる。
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-loose">
            我々の事業は一人の優秀な人材がいるだけでは到底成し遂げられないことがほとんどです。
            <br />
            そのため事業成功には熱意とチームワークが非常に重要となります。弊社では日々事業に熱意を注ぎ、信頼し合えるチーム作りを行い事業に取り組んでまいります。
          </p>
        </div>
      </section>

      {/* 数字で見る */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display text-center">
            Numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            数字で見るeSTACK
          </h2>
          <p className="text-xs text-zinc-500 text-center mb-12">
            （2024年5月現在）
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((s) => (
              <li
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xs text-zinc-500 mb-2">{s.label}</p>
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-brand font-display">
                    {s.value}
                  </span>
                  <span className="text-sm text-zinc-700">{s.unit}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* メンバー紹介 */}
      <section id="members" className="py-16 md:py-24 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display text-center">
            Members
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            メンバー紹介
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {MEMBERS.map((m, i) => (
              <li
                key={i}
                className="rounded-lg bg-white p-5 md:p-6 border border-zinc-100"
              >
                <p className="text-xs text-brand font-semibold mb-1">{m.dept}</p>
                <p className="text-lg font-bold mb-3 font-display">{m.code}</p>
                <p className="text-xs text-zinc-600 leading-relaxed">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Recruit */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
            <Image
              src="/images/s-2400x1571_v-frms_webp_71df778e-335b-4f00-a9da-50991eedb423_middle.webp"
              alt=""
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              働く仲間を
              <br />
              募集しています
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-8">
              エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
            </p>
            <Link
              href="/recruit"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-light transition-colors"
            >
              採用情報へ
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-16 md:py-24 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display text-center">
            Company
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            会社概要
          </h2>
          <dl className="divide-y divide-zinc-200 bg-white rounded-lg overflow-hidden">
            {COMPANY.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-6 px-5 md:px-8 py-5"
              >
                <dt className="text-sm font-semibold text-zinc-700">
                  {row.label}
                </dt>
                <dd className="text-sm text-zinc-700">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
