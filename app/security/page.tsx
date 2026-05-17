import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "情報セキュリティ方針",
};

const ITEMS = [
  {
    title: "経営者の責任",
    body: "当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。",
  },
  {
    title: "社内体制の整備",
    body: "当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。",
  },
  {
    title: "従業員の取組み",
    body: "当社の従業員は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。",
  },
  {
    title: "法令及び契約上の要求事項の遵守",
    body: "当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守するとともに、お客様の期待に応えます。",
  },
  {
    title: "違反及び事故への対応",
    body: "当社は、情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努めます。",
  },
  {
    title: "気候変動への対応",
    body: "当社は、気候変動が情報セキュリティに与えるリスクを認識し、災害対策やエネルギー効率向上など環境負荷の低減を通じて、安全で持続可能な情報資産の保護に努めます。",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader title="情報セキュリティ方針" showWave={false} />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-base text-zinc-700 leading-loose mb-12">
            eSTACK株式会社（以下、当社）は、当社の情報資産、並びにお客様からお預かりした情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
          </p>

          <div className="space-y-10">
            {ITEMS.map((item) => (
              <div key={item.title}>
                <h2 className="text-2xl font-bold text-zinc-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-base text-zinc-700 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200 text-sm text-zinc-700 space-y-1">
            <p>制定日：2023年2月10日</p>
            <p>改定日：2024年12月18日</p>
            <p className="pt-2">eSTACK株式会社</p>
            <p>代表取締役　竹田賢史</p>
          </div>
        </div>
      </section>
    </>
  );
}
