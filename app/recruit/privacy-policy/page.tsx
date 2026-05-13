import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "リクルートプライバシーポリシー",
};

export default function RecruitPrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="リクルートプライバシーポリシー"
        subtitle="Recruit Privacy Policy"
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm md:text-base text-zinc-700 leading-loose mb-12">
            eSTACK株式会社（以下、当社）は、採用活動に伴い応募者の皆さまから取得する個人情報の重要性を認識し、以下に記載する通知文の内容に準拠し、細心の注意をもって管理を行い、適切な取扱及び保護に努めます。
          </p>

          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-brand pl-4 mb-4">
            個人情報の利用目的
          </h2>
          <p className="font-semibold mb-2">(1) 従業員管理での利用</p>
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-loose mb-6 space-y-1">
            <li>労務管理を行う目的</li>
            <li>保険業務を行う目的</li>
            <li>緊急時の連絡を行う目的</li>
            <li>社内コミュニケーションを図る目的</li>
            <li>広告（求人含む）を目的としたインターネットサイトの掲載をする目的</li>
          </ul>
          <p className="font-semibold mb-2">(2) 採用活動での利用</p>
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-loose mb-10 space-y-1">
            <li>採用合否の判断をする目的</li>
            <li>採用後の雇用手続きをする目的</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-brand pl-4 mb-4">
            個人情報の第三者提供
          </h2>
          <p className="text-sm md:text-base text-zinc-700 leading-loose mb-3">
            当社は以下の場合を除き、取得した応募者の皆さまの個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-loose mb-10 space-y-1">
            <li>個人情報の第三者提供を行う旨を別途個別に明示し、応募者の同意を得た場合。</li>
            <li>応募者の生命、健康、財産などの重大な利益を保護するために必要な場合。</li>
            <li>法令等の要請による場合。</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-brand pl-4 mb-4">
            業務委託に伴う個人情報の取扱の委託
          </h2>
          <p className="text-sm md:text-base text-zinc-700 leading-loose mb-10">
            当社は業務で必要な範囲内で個人情報を委託する場合は、委託先との間で守秘業務契約を締結し、個人情報の適切な取扱及び保護を行うよう指示・監督を行います。
          </p>

          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-brand pl-4 mb-4">
            個人情報に関するお問い合わせ、及びご請求について
          </h2>
          <p className="text-sm md:text-base text-zinc-700 leading-loose mb-3">
            (1) 応募者の皆様はご自分の個人情報について、当社に対して下記のお問い合わせ、並びにご請求をすることができます。
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-loose mb-3 space-y-1">
            <li>当社が保有している応募者の皆様の個人情報についてのお問い合わせ</li>
            <li>当社が保有している応募者の皆様の個人情報に誤りがある場合には、訂正または削除のご請求</li>
            <li>当社が保有している応募者の皆様の個人情報の利用または第三者への提供の停止のご請求</li>
          </ul>
          <p className="text-sm md:text-base text-zinc-700 leading-loose mb-3">
            (2) 上記(1)の1.から3.のお問い合わせ並びにご請求をされる場合には、下記にご連絡いただきますようお願いいたします。
          </p>
          <div className="bg-zinc-50 rounded-lg p-5 my-6 text-sm text-zinc-700 space-y-1">
            <p>
              ［窓口］〒206-0033 東京都多摩市落合1-6-4 バルキープラザ703
            </p>
            <p>eSTACK株式会社　総務部採用担当　宛</p>
            <p>
              mail:{" "}
              <a
                href="mailto:soumu@estack.co.jp"
                className="text-brand underline hover:no-underline"
              >
                soumu@estack.co.jp
              </a>
            </p>
          </div>
          <p className="text-sm md:text-base text-zinc-700 leading-loose">
            (3) 当社では、応募者からご提出いただいた履歴書等の応募書類を返却いたしません。あらかじめご了承ください。
          </p>
        </div>
      </section>
    </>
  );
}
