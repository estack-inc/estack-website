import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PillLink from "@/components/PillLink";
import ScrollingPhotos from "@/components/ScrollingPhotos";

// Philosophy & 働く仲間カルーセル用のキャリア写真
const CAREER_PHOTOS = [
  "/images/s-2000x1080_v-frms_webp_8b9af719-692f-4469-aa68-01dc36603302_regular.webp",
  "/images/s-2000x1080_v-frms_webp_eba8a87b-4db3-49ad-b4d8-b809f2a38f56_regular.webp",
  "/images/s-2000x1080_v-frms_webp_fff9b2ef-9134-4ad2-86a0-1f7a5c0de2b2_regular.webp",
  "/images/s-2000x1080_v-frms_webp_48cfa3d7-9308-40c0-b591-8b468bcf645d_regular.webp",
  "/images/s-2000x1080_v-frms_webp_12af3b53-a3ff-4300-8d54-39cfd1c32bd2_regular.webp",
];

export const metadata = {
  title: "eSTACKについて",
};

const STATS = [
  { label: "創立", value: "6", unit: "期目" },
  { label: "社員数", value: "42", unit: "名" },
  { label: "平均年齢", value: "36.6", unit: "歳" },
  { label: "離職率", value: "1.7", unit: "%" },
];

type Member = {
  dept: string;
  code: string;
  note: string;
  photo?: { default: string; hover: string };
};

// 上段：シニアメンバー 2人（大きく表示）
const MEMBERS_TOP: Member[] = [
  {
    dept: "IT事業部",
    code: "H.S",
    note: "会社設立時から働いています。今は業務委託先で、リーダー的なことをやっています。eSTACKは自由度が高く、上下問わずメンバー同士の距離がとても近い会社で、やりたいことも話せば環境を整えてくれるので、一緒に頑張りましょう",
    photo: {
      default: "/images/s-896x896_v-fs_webp_ca5d420b-602d-4d74-88d9-256dc4b09e45_small.webp",
      hover: "/images/s-896x896_v-fs_webp_750703e1-4d18-4618-90cf-c39f48d547a4_small.webp",
    },
  },
  {
    dept: "IT事業部",
    code: "R.K",
    note: "将来の夢はゲームプログラマでした。1度夢への心を折られるも持ち前のコミュニケーション力でeSTACKへ入社。仕事しやすい環境や相談しやすい風通しの良さで現在進行系で成長中！！！",
    photo: {
      default: "/images/s-896x896_v-fs_webp_0df0c2fe-ce5f-4d82-8916-e255b9b74ef4_small.webp",
      hover: "/images/s-896x896_v-fs_webp_c2e989f5-6778-499f-afc6-62a57451c476_small.webp",
    },
  },
];

// 中段：4人（中くらいの写真）
const MEMBERS_MID: Member[] = [
  {
    dept: "IT事業部",
    code: "A.K",
    note: "やらない後悔よりやる後悔　迷ったらやる",
    photo: {
      default: "/images/s-896x896_v-fs_webp_6c2638f5-231b-48f5-a57d-0f140acd7877_small.webp",
      hover: "/images/s-896x896_v-fs_webp_28e4a404-2ac1-4d52-b53d-05293b0f4feb_small.webp",
    },
  },
  {
    dept: "IT事業部",
    code: "K.C",
    note: "短くても、やれば前に進める。",
    photo: {
      default: "/images/s-896x896_v-fs_webp_56bca069-0b42-434e-8e7b-ad49bc786682_small.webp",
      hover: "/images/s-896x896_v-fs_webp_b40d4008-6471-45b8-ae87-d5a2d43353f7_small.webp",
    },
  },
  {
    dept: "事業推進部",
    code: "N.T",
    note: "挑戦を楽しむ",
    photo: {
      default: "/images/s-896x896_v-fs_webp_e79056c6-0037-45e2-82ab-bbffe9e79204_small.webp",
      hover: "/images/s-896x896_v-fs_webp_fc85f9ab-1e81-4699-af9e-aa5c94ac5fd0_small.webp",
    },
  },
  {
    dept: "総務部",
    code: "R.T",
    note: "「諦めない心」を大切にしてます！",
    photo: {
      default: "/images/s-896x896_v-fs_webp_61317385-e80b-419d-8def-49701a2cb65b_small.webp",
      hover: "/images/s-896x896_v-fs_webp_d999f401-1ff7-415a-9836-ae92186ada53_small.webp",
    },
  },
];

// 下段：6人（写真なし、文字のみコンパクト）
const MEMBERS_BOTTOM: Member[] = [
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
      <section id="message" className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">代表メッセージ</h2>
          <div className="grid md:grid-cols-[1fr_440px] gap-6 md:gap-12 items-start">
            <div className="space-y-5 text-base md:text-lg text-zinc-700 leading-loose">
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
                <span className="text-2xl font-semibold">竹田 賢史</span>
              </p>
            </div>
            {/* CEO 写真：旧サイト実測 502×581 を基準に max-w 440px / aspect [502/581] */}
            <div className="group relative aspect-[502/581] w-full max-w-[440px] mx-auto md:mx-0">
              <Image
                src="/images/s-2000x2400_v-frms_webp_bb8c1f33-aff9-4f8f-bace-b4cb9f6e94ee_small.webp"
                alt=""
                width={502}
                height={581}
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover rounded-md translate-x-2 translate-y-2 rotate-3 shadow-sm transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:z-10 group-hover:shadow-md"
              />
              <Image
                src="/images/s-2001x2400_v-frms_webp_3d556af1-6866-4eb3-8a23-80fc27ce17d3_small.webp"
                alt="代表取締役 竹田 賢史"
                width={502}
                height={581}
                className="absolute inset-0 w-full h-full object-cover rounded-md shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:translate-x-2 group-hover:translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 理念 — 厚いオレンジ帯（テキスト左寄せ） */}
      <section id="philosophy" className="mt-12 md:mt-16 bg-brand text-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
            私達の成長は100％の熱意と
            <br />
            50％能力で成し遂げられる。
          </h2>
          <p className="max-w-3xl text-sm md:text-base leading-loose">
            我々の事業は一人の優秀な人材がいるだけでは到底成し遂げられないことがほとんどです。
            そのため事業成功には熱意とチームワークが非常に重要となります。弊社では日々事業に熱意を注ぎ、信頼し合えるチーム作りを行い事業に取り組んでまいります。
          </p>
        </div>
      </section>

      {/* 理念帯の下に流れる写真ストリップ */}
      <section className="pb-12 md:pb-16">
        <ScrollingPhotos photos={CAREER_PHOTOS} />
      </section>

      {/* 数字で見る — 旧サイトと同じ単一画像を貼り付け、(2024年5月現在) は画像右下に重ねる */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            数字で見るeSTACK
          </h2>
          <div className="relative">
            <Image
              src="/images/s-2400x1711_v-frms_webp_9047178b-1b14-4625-8ba6-6bd061047dd5_regular.webp"
              alt="数字で見るeSTACK：売上割合 6割SES / 4割受託、年齢別割合、平均年齢36.6歳、技術スキル PHP / JAVA / JavaScript / PMO / インフラ / AWS、平均月収 30万（経験2年目）/ 42万（経験5年目）/ 50万（経験10年目）"
              width={2400}
              height={1711}
              className="w-full h-auto"
            />
            <p className="absolute right-2 bottom-2 md:right-4 md:bottom-4 text-xs md:text-sm text-zinc-500 bg-white/80 px-2 py-1 rounded">
              （2024年5月現在）
            </p>
          </div>
        </div>
      </section>

      {/* メンバー紹介 */}
      <section id="members" className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10">
            メンバー紹介
          </h2>
          {/* 上段：シニア2人（大きく） */}
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
            {MEMBERS_TOP.map((m, i) => (
              <MemberCardWithPhoto key={`top-${i}`} member={m} size="lg" />
            ))}
          </ul>

          {/* 中段：4人（中サイズ） */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {MEMBERS_MID.map((m, i) => (
              <MemberCardWithPhoto key={`mid-${i}`} member={m} size="md" />
            ))}
          </ul>

          {/* 下段：6人（文字のみ、コンパクト） */}
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {MEMBERS_BOTTOM.map((m, i) => (
              <li
                key={`bottom-${i}`}
                className="rounded-lg bg-white p-4 border border-zinc-100"
              >
                <p className="text-xs text-brand font-medium mb-1">
                  {m.dept}
                </p>
                <p className="text-xl font-semibold mb-2 font-display">{m.code}</p>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-4">
                  {m.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Recruit — 集合写真 + 下にキャリア写真が右→左にスクロール */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 items-center">
          <div className="aspect-[3/2] rounded-lg overflow-hidden bg-zinc-100">
            <Image
              src="/images/s-2000x1334_v-frms_webp_58696a5c-7d32-467e-a022-1101d551f504_small.webp"
              alt="eSTACK メンバー集合写真"
              width={700}
              height={467}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              働く仲間を
              <br />
              募集しています
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed mb-8">
              エンジニアという職業が好きな人、楽しくエンジニアとして活動したい人ぜひ弊社で働きませんか？
            </p>
            <PillLink href="/recruit" label="採用情報へ" />
          </div>
        </div>
      </section>

      {/* 採用 CTA 下のスクロール写真ストリップ */}
      <section className="pb-8 md:pb-12">
        <ScrollingPhotos photos={CAREER_PHOTOS} />
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-medium text-brand mb-2 font-display text-center">
            Company
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            会社概要
          </h2>
          <dl className="divide-y divide-zinc-200 bg-white rounded-lg overflow-hidden">
            {COMPANY.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-5 px-4 md:px-6 py-3.5"
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

function MemberCardWithPhoto({
  member,
  size,
}: {
  member: Member;
  size: "lg" | "md";
}) {
  if (!member.photo) return null;
  const isLg = size === "lg";
  return (
    <li className="group rounded-lg bg-white overflow-hidden border border-zinc-100">
      <div className={`relative aspect-square ${isLg ? "m-4 mb-6" : "m-3 mb-4"}`}>
        <Image
          src={member.photo.hover}
          alt=""
          width={448}
          height={448}
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover rounded-md rotate-3 shadow-sm transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:z-10 group-hover:shadow-md ${
            isLg ? "translate-x-2 translate-y-2" : "translate-x-1.5 translate-y-1.5"
          }`}
        />
        <Image
          src={member.photo.default}
          alt=""
          width={448}
          height={448}
          className={`absolute inset-0 w-full h-full object-cover rounded-md shadow-md transition-all duration-500 group-hover:rotate-3 ${
            isLg
              ? "group-hover:translate-x-2 group-hover:translate-y-2"
              : "group-hover:translate-x-1.5 group-hover:translate-y-1.5"
          }`}
        />
      </div>
      <div className={isLg ? "p-6 md:p-8" : "p-4 md:p-5"}>
        <p
          className={`text-brand font-semibold mb-1 ${
            isLg ? "text-sm" : "text-xs"
          }`}
        >
          {member.dept}
        </p>
        <p
          className={`font-semibold font-display ${
            isLg ? "text-2xl mb-4" : "text-base mb-2"
          }`}
        >
          {member.code}
        </p>
        <p
          className={`text-zinc-600 leading-relaxed ${
            isLg ? "text-sm" : "text-xs"
          }`}
        >
          {member.note}
        </p>
      </div>
    </li>
  );
}
