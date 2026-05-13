import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "エントリー",
};

export default function EntryPage() {
  return (
    <>
      <PageHeader title="エントリー" subtitle="Entry" />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <p className="text-center text-sm md:text-base text-zinc-700 mb-2">
            ご応募お待ちしております。
          </p>
          <p className="text-center text-sm md:text-base text-zinc-700 mb-10">
            ご不明な点がございましたら遠慮なくお問い合わせください。
          </p>

          {/* TODO: Phase 3 でサーバーアクション実装 */}
          <form className="space-y-6">
            <Field label="お名前" required>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-brand outline-none"
              />
            </Field>

            <Field label="フリガナ" required>
              <input
                type="text"
                name="kana"
                required
                className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-brand outline-none"
              />
            </Field>

            <Field label="メールアドレス" required>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-brand outline-none"
              />
            </Field>

            <Field label="業界経験" required>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="experience"
                    value="未経験"
                    required
                  />
                  未経験
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="experience"
                    value="キャリア"
                    required
                  />
                  キャリア
                </label>
              </div>
            </Field>

            <Field label="履歴書">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="block text-sm text-zinc-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand file:text-white hover:file:bg-brand-light"
              />
            </Field>

            <Field label="お問い合わせ内容" required>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-brand outline-none resize-y"
              />
            </Field>

            <div className="space-y-3 pt-4">
              <Link
                href="/recruit/privacy-policy"
                className="text-sm text-brand underline hover:no-underline"
              >
                プライバシーポリシー
              </Link>
              <label className="flex items-center gap-3">
                <span className="inline-flex shrink-0 items-center rounded-full bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 text-[10px] font-semibold">
                  必須
                </span>
                <input
                  type="checkbox"
                  required
                  className="rounded border-zinc-300"
                />
                <span className="text-sm">プライバシーポリシーに同意する</span>
              </label>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-12 py-3 text-sm font-semibold text-white hover:bg-brand transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 mb-2">
        <span
          className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold border ${
            required
              ? "bg-red-50 text-red-600 border-red-200"
              : "bg-zinc-100 text-zinc-600 border-zinc-300"
          }`}
        >
          {required ? "必須" : "任意"}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </label>
      {children}
    </div>
  );
}
