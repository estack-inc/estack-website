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
// 一定時間表示 → 1 枚分スライド → また停止、を繰り返す。
// 末尾に先頭の数枚を複製してシームレスループ。
// 両端の ＜ ＞ ボタンで前後にスライドできる。
export default function WorkCarousel({ works, intervalMs = 3500 }: Props) {
  const n = works.length;
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  // 自動再生
  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  // step が n に到達したら、アニメ完了後に瞬時に 0 へ巻き戻す（前方無感ループ）
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

  const CARD_W = 280;
  const GAP = 16;
  const STRIDE = CARD_W + GAP;

  const handleNext = () => {
    setAnimate(true);
    setStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (step <= 0) {
      // step n（reel 上は works[0] の複製位置）に瞬時にジャンプしてから n-1 へアニメ
      setAnimate(false);
      setStep(n);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setStep(n - 1);
        });
      });
    } else {
      setAnimate(true);
      setStep((s) => s - 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
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
              <div className="h-full rounded-2xl bg-white p-5 md:p-6 border border-zinc-100">
                <p className="font-semibold text-sm md:text-base mb-3 leading-snug">
                  {w.title}
                </p>
                <p className="text-xs text-brand">{w.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 前のスライドへ */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="前の実績へ"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 2L2 10L12 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 次のスライドへ */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="次の実績へ"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M2 2L12 10L2 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
