"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { NEWS_ITEMS, newsHref } from "@/lib/news";

type Props = {
  open: boolean;
  onClose: () => void;
};

// 旧サイト準拠の全画面メガメニュー：
// - 左半分：Menu（eSTACKについて / サービス / 採用情報 のサブ項目 + お問い合わせ）
// - 右半分：News 一覧（少し背景色が濃い）
export default function MegaMenu({ open, onClose }: Props) {
  // ESC で閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // メニュー表示中は背景スクロールを止める
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 grid grid-cols-1 md:grid-cols-2 bg-[#fefaef] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="メインメニュー"
    >
      {/* ロゴ（左上） */}
      <div className="absolute top-5 md:top-6 left-5 md:left-8 z-10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center"
          aria-label="eSTACK ホーム"
        >
          <Image
            src="/logo.svg"
            alt="eSTACK"
            width={180}
            height={68}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>
      </div>

      {/* 左半分：Menu */}
      <div className="px-5 md:px-12 pt-28 md:pt-32 pb-10 md:pb-16 flex flex-col">
        <div className="w-full max-w-md md:ml-auto md:mr-4">
          <p className="text-brand text-xl md:text-2xl font-bold mb-6 md:mb-8 font-display">
            Menu
          </p>

          {/* eSTACKについて */}
          <MenuSection
            title="eSTACKについて"
            items={[
              { label: "代表メッセージ", href: "/about#message" },
              { label: "理念", href: "/about#philosophy" },
              { label: "メンバー", href: "/about#members" },
              { label: "会社概要", href: "/about#company" },
            ]}
            onClose={onClose}
            columns={2}
          />

          {/* サービス */}
          <MenuSection
            title="サービス"
            items={[
              {
                label: "システムインテグレーション",
                href: "/service/system-integration",
              },
              {
                label: "システムエンジニアリングサービス",
                href: "/service/system-engineering-service",
              },
            ]}
            onClose={onClose}
            columns={2}
          />

          {/* 採用情報（サブなしの見出しのみ・本体ページへ） */}
          <div className="mb-6 md:mb-8">
            <Link
              href="/recruit"
              onClick={onClose}
              className="text-lg md:text-xl font-bold border-b border-zinc-900 pb-1 hover:text-brand transition-colors"
            >
              採用情報
            </Link>
          </div>

          {/* お問い合わせ（大きなオレンジボタン） */}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand text-white text-base md:text-lg font-semibold px-8 py-4 md:py-5 hover:opacity-90 transition-opacity"
          >
            お問い合わせ
          </Link>
        </div>
      </div>

      {/* 右半分：News（背景色を少し濃く） */}
      <div className="bg-[#f5edd9] px-5 md:px-12 pt-10 md:pt-32 pb-10 md:pb-16 flex flex-col">
        <div className="w-full max-w-md md:mr-auto md:ml-4">
          <p className="text-brand text-xl md:text-2xl font-bold mb-6 md:mb-8 font-display">
            News
          </p>
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {NEWS_ITEMS.map((item) => (
              <li
                key={item.slug}
                className="border-b border-zinc-300/70 pb-2 md:pb-3"
              >
                <Link
                  href={newsHref(item)}
                  onClick={onClose}
                  className="group flex items-baseline gap-3 md:gap-5 text-sm hover:text-brand transition-colors"
                >
                  <span className="shrink-0 text-zinc-500 text-xs md:text-sm font-medium">
                    {item.date}
                  </span>
                  <span className="font-medium text-zinc-800 group-hover:text-brand transition-colors">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Link
              href="/news"
              onClick={onClose}
              className="group inline-flex items-center gap-3 rounded-full bg-white border-2 border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-800 hover:bg-brand hover:border-brand hover:text-white transition-colors"
            >
              お知らせをもっと見る
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-sm group-hover:bg-white group-hover:text-brand transition-colors">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuSection({
  title,
  items,
  onClose,
  columns,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
  columns: 1 | 2;
}) {
  return (
    <div className="mb-6 md:mb-8">
      <h3 className="text-lg md:text-xl font-bold border-b border-zinc-900 pb-1 mb-4">
        {title}
      </h3>
      <ul
        className={`grid gap-2 md:gap-3 ${
          columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              onClick={onClose}
              className="block rounded-full bg-white border border-zinc-200 px-5 py-3 text-sm text-center font-medium text-zinc-800 hover:bg-brand hover:text-white hover:border-brand transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
