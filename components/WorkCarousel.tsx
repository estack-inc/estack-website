"use client";

import { useEffect, useState } from "react";

export type Work = {
  title: string;
  tech: string;
};

type Props = {
  works: Work[];
  intervalMs?: number;
};

// 旧サイトの「技術支援実績」と同じ、ステップ式カルーセル。
// 一定時間表示 → 1 枚分スライド → また停止、を繰り返す（左→右に流れる）。
// カード幅は固定（280px）で、ビューポート幅に応じて表示枚数が変わる。
// 末尾に先頭の数枚を複製してシームレスループ。
export default function WorkCarousel({ works, intervalMs = 3500 }: Props) {
  const n = works.length;
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  // step が n に到達したら、アニメ完了後に瞬時に 0 へ巻き戻す
  useEffect(() => {
    if (step !== n) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setStep(0);
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setAnimate(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }, 800);
    return () => clearTimeout(t);
  }, [step, n]);

  // 末尾に先頭の数枚を複製（シームレスループ用）
  const reel = [...works, ...works.slice(0, 5)];

  // カード幅 (px) — モバイル 260px / デスクトップ 280px
  // ステップごとに 1 枚分 (カード幅 + gap) シフトする
  const CARD_W = 280;
  const GAP = 16;
  const STRIDE = CARD_W + GAP;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex"
        style={{
          gap: `${GAP}px`,
          transform: `translateX(-${step * STRIDE}px)`,
          transition: animate ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {reel.map((w, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ width: `${CARD_W}px` }}
          >
            <div className="h-full rounded-2xl bg-zinc-50 p-5 md:p-6 border border-zinc-100">
              <p className="font-semibold text-sm md:text-base mb-3 leading-snug">
                {w.title}
              </p>
              <p className="text-xs text-brand">{w.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
