import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="プライバシーポリシー" showWave={false} size="compact" />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-base text-zinc-700 leading-loose mb-12">
            eSTACK株式会社（以下、当社）は、お問い合わせから取得する個人情報の重要性を認識し、以下に記載する通知文の内容に準拠し、細心の注意をもって管理を行い、適切な取扱及び保護に努めます。
          </p>

          <h2 className="text-2xl font-bold text-[#363636] mb-4">
            個人情報の利用目的
          </h2>
          <p className="font-semibold mb-2 text-base text-zinc-700">事業での利用</p>
          <ul className="list-disc list-inside text-base text-zinc-700 leading-loose mb-10 space-y-1">
            <li>事業を遂行する目的</li>
            <li>委託事業を遂行する目的</li>
            <li>派遣事業を遂行する目的</li>
            <li>プロダクト製品のセールスを遂行する目的</li>
            <li>問い合わせに回答する目的</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#363636] mb-4">
            個人情報の第三者提供
          </h2>
          <p className="text-base text-zinc-700 leading-loose mb-3">
            当社は以下の場合を除き、取得したお問い合わせ者の個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc list-inside text-base text-zinc-700 leading-loose mb-10 space-y-1">
            <li>個人情報の第三者提供を行う旨を別途個別に明示し、お問い合わせ者の同意を得た場合。</li>
            <li>応募者の生命、健康、財産などの重大な利益を保護するために必要な場合。</li>
            <li>法令等の要請による場合。</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#363636] mb-4">
            業務委託に伴う個人情報の取扱の委託
          </h2>
          <p className="text-base text-zinc-700 leading-loose mb-10">
            当社は業務で必要な範囲内で個人情報を委託する場合は、委託先との間で守秘業務契約を締結し、個人情報の適切な取扱及び保護を行うよう指示・監督を行います。
          </p>

          <h2 className="text-2xl font-bold text-[#363636] mb-4">
            個人情報に関するお問い合わせ、及びご請求について
          </h2>
          <p className="text-base text-zinc-700 leading-loose mb-3">
            (1) 応募者の皆様はご自分の個人情報について、当社に対して下記のお問い合わせ、並びにご請求をすることができます。
          </p>
          <ul className="list-disc list-inside text-base text-zinc-700 leading-loose mb-3 space-y-1">
            <li>当社が保有しているお問い合わせ者の個人情報についてのお問い合わせ</li>
            <li>当社が保有しているお問い合わせ者の個人情報に誤りがある場合には、訂正または削除のご請求</li>
            <li>当社が保有しているお問い合わせ者の個人情報の利用または第三者への提供の停止のご請求</li>
          </ul>
          <p className="text-base text-zinc-700 leading-loose mb-10">
            (2) 上記(1)の1.から3.のお問い合わせ並びにご請求をされる場合には、お問い合わせフォームよりご連絡いただきますようお願いいたします。
          </p>

          <p className="text-sm text-zinc-600 leading-loose mt-12 pt-8 border-t border-zinc-200">
            本ポリシーの内容は、法令の変更や社内ポリシーの見直しにより、予告なく変更されることがあります。変更後のポリシーは、本ウェブサイトに掲載することにより効力を生じるものとします。
          </p>
        </div>
      </section>
    </>
  );
}
