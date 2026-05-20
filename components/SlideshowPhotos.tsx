"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  intervalMs?: number;
  aspectClass?: string;
  fill?: boolean;
};

// 1 枚ずつ表示し、一定時間後に右から左へスライドして次へ切り替わるスライドショー。
// 写真リストの末尾に先頭写真をもう一度追加し、最後の遷移が終わったタイミングで
// アニメ無しで先頭へ戻すことで無感ループを実現する。
// fill=true で親要素の高さいっぱいに広げる（Philosophy 背景用途）。
export default function SlideshowPhotos({
  photos,
  intervalMs = 4500,
  aspectClass = "aspect-[16/9] md:aspect-[2000/1080]",
  fill = false,
}: Props) {
  const n = photos.length;
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  // 自動再生
  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  // step が n に到達したら、アニメ完了後に瞬時に 0 へ巻き戻す（無感ループ）
  useEffect(() => {
    if (step !== n) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setStep(0);
      // 次フレームで再びアニメ有効化
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setAnimate(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }, 1000);
    return () => clearTimeout(t);
  }, [step, n]);

  // photos の末尾に先頭をもう一度（シームレスループのため）
  const reel = [...photos, photos[0] ?? ""];
  const reelLen = reel.length;
  // translateX は inner track の幅に対する % なので 100/reelLen を乗ずる
  const translatePct = step * (100 / reelLen);

  // aspect-ratio から子要素に percentage 高さを連鎖させると、一部ブラウザで
  // height が解決されず IMG が natural サイズで描画され、スライド毎に高さが
  // 不揃いに見える事象が出る。height を明示的な vw 値で固定して回避する。
  // 16/9 → 0.5625vw, 2000/1080 → 0.54vw
  const containerHeightClass = fill
    ? "h-full"
    : "h-[56.25vw] md:h-[54vw]";

  return (
    <div className={`relative w-full overflow-hidden bg-zinc-900 ${containerHeightClass}`}>
      <div
        className="flex h-full"
        style={{
          width: `${reelLen * 100}%`,
          transform: `translateX(-${translatePct}%)`,
          transition: animate ? "transform 1s ease-in-out" : "none",
        }}
      >
        {reel.map((src, i) => (
          <div
            key={i}
            className="relative h-full shrink-0"
            style={{ width: `${100 / reelLen}%` }}
          >
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
      {n > 1 && (
        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setAnimate(true);
                setStep(i);
              }}
              aria-label={`写真 ${i + 1} を表示`}
              className={`h-2 w-2 rounded-full transition-colors ${
                step % n === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
