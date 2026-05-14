"use client";

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
  { title: "お知らせ", href: "/news", items: [] },
  {
    title: "採用情報",
    href: "/recruit",
    items: [
      { label: "メッセージ", href: "/recruit#message" },
      { label: "社内ブログ", href: "/recruit#blog" },
      { label: "募集中職種", href: "/recruit#jobs" },
    ],
  },
  { title: "お問い合わせ", href: "/contact", items: [] },
];

export default function Footer() {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-zinc-50 pt-16 md:pt-20 pb-6">
      {/* 上部左右に丸みをつけた白い背景パネル */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-white rounded-t-[40px] md:rounded-t-[60px] -z-0 shadow-[0_-2px_8px_rgba(0,0,0,0.03)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-10">
          <div className="lg:w-1/5">
            <Link href="/" aria-label="eSTACK ホーム" className="inline-block">
              <Image
                src="/logo.svg"
                alt="eSTACK"
                width={180}
                height={68}
                className="h-14 md:h-16 w-auto"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 lg:flex-1">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <Link
                  href={group.href}
                  className="block font-semibold text-base text-zinc-900 hover:text-brand mb-4"
                >
                  {group.title}
                </Link>
                {group.items.length > 0 && (
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-sm text-zinc-600 hover:text-brand"
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

        <div className="pt-6 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-zinc-500">© 2018 eSTACK,INC.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-700">
            <li>
              <Link href="/security" className="underline hover:no-underline hover:text-brand">
                情報セキュリティ方針
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="underline hover:no-underline hover:text-brand">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/recruit/privacy-policy" className="underline hover:no-underline hover:text-brand">
                リクルートプライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={scrollTop}
          aria-label="ページ上部へ"
          className="absolute right-5 md:right-8 -top-6 group inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 hover:text-brand transition-colors"
        >
          <span>Page top</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs group-hover:bg-brand-light transition-colors">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
