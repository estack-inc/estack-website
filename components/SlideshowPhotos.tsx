"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  intervalMs?: number;
};

// 1 枚ずつ表示し、一定時間後に右から左へスライドして次へ切り替わるスライドショー。
// 写真リストを 2 セット連結して translateX で1ステップずつ左に流す。
// リストの境界を越えたタイミングで瞬時に先頭へ無感ジャンプ。
export default function SlideshowPhotos({ photos, intervalMs = 4500 }: Props) {
  const n = photos.length;
  const [step, step_set] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => {
      step_set((s) => s + 1);
    }, intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  // step が n に達したらアニメ無しで 0 に戻す（無感ループ）
  useEffect(() => {
    if (step >= n) {
      // 遷移が終わったタイミングで瞬時に巻き戻す
      const t = setTimeout(() => {
        setEnableTransition(false);
        step_set(0);
        // 次フレームで transition を再有効化
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setEnableTransition(true));
        });
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [step, n]);

  // 写真リストを 2 セット連結（途切れず流すため）
  const reel = [...photos, ...photos];

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden">
      <div
        className={`flex h-full ${enableTransition ? "transition-transform duration-[1000ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${step * 100}%)`, width: `${reel.length * 100}%` }}
      >
        {reel.map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-full shrink-0" style={{ width: `${100 / reel.length}%` }}>
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      {/* ドットインジケーター */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => step_set(i)}
            aria-label={`写真 ${i + 1} を表示`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === step % n ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
