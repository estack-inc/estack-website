"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "@/components/MegaMenu";

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
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
        <Link href="/" className="flex items-center" aria-label="eSTACK ホーム">
          <Image
            src="/logo.svg"
            alt="eSTACK"
            width={180}
            height={68}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>

        <div className="ml-auto flex items-center gap-5 md:gap-8">
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
            className="hidden md:inline-flex h-14 items-center justify-center rounded-full border border-zinc-700 px-10 text-base font-semibold text-zinc-800 hover:bg-brand hover:border-brand hover:text-white transition-colors"
          >
            お問い合わせ
          </Link>
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white hover:opacity-90 transition-opacity"
          >
            <span className="sr-only">メニュー</span>
            {open ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="flex items-center gap-[4px]">
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
