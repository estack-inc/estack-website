import Image from "next/image";
import Link from "next/link";

const FOOTER_GROUPS = [
  {
    title: "eSTACKについて",
    href: "/about",
    items: [
      { label: "代表メッセージ", href: "/about#message" },
      { label: "理念", href: "/about#philosophy" },
      { label: "メンバー紹介", href: "/about#members" },
      { label: "会社概要", href: "/about#company" },
    ],
  },
  {
    title: "サービス",
    href: "/service",
    items: [
      {
        label: "システムエンジニアリングサービス",
        href: "/service/system-engineering-service",
      },
      {
        label: "システムインテグレーション",
        href: "/service/system-integration",
      },
    ],
  },
  {
    title: "お知らせ",
    href: "/news",
    items: [],
  },
  {
    title: "採用情報",
    href: "/recruit",
    items: [
      { label: "メッセージ", href: "/recruit#message" },
      { label: "募集中職種", href: "/recruit#jobs" },
    ],
  },
  {
    title: "お問い合わせ",
    href: "/contact",
    items: [],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <Link href="/" aria-label="eSTACK ホーム">
              <Image
                src="/logo.svg"
                alt="eSTACK"
                width={140}
                height={52}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:flex-1">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <Link
                  href={group.href}
                  className="block font-semibold text-sm text-zinc-900 hover:text-brand mb-3"
                >
                  {group.title}
                </Link>
                {group.items.length > 0 && (
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-xs text-zinc-600 hover:text-brand"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-500">© 2018 eSTACK,INC.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-600">
            <li>
              <Link href="/security" className="hover:text-brand">
                情報セキュリティ方針
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-brand">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/recruit/privacy-policy" className="hover:text-brand">
                リクルートプライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
