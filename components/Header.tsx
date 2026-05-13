"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "eSTACKについて" },
  { href: "/service", label: "サービス" },
  { href: "/news", label: "お知らせ" },
  { href: "/recruit", label: "採用情報" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-zinc-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center" aria-label="eSTACK ホーム">
          <Image
            src="/logo.svg"
            alt="eSTACK"
            width={120}
            height={45}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-zinc-900 px-7 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            お問い合わせ
          </Link>
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white hover:opacity-90 transition-opacity"
          >
            <span className="sr-only">メニュー</span>
            {open ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <span className="flex items-center gap-[3px]">
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-zinc-100 bg-white">
          <nav className="flex flex-col px-5 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-zinc-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
