"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  intervalMs?: number;
  aspectClass?: string;
  fill?: boolean;
};

// クロスフェード方式のスライドショー。
// すべての写真を同じ位置に重ねて配置し、現在表示中のものだけ opacity=1、
// それ以外は opacity=0 にする。CSS transition で滑らかに切り替わる。
// 横スライドと違い、遷移中も画面には常に 1 枚しか見えない（一瞬たりとも 2 枚並ばない）。
// fill=true で親要素の高さいっぱいに広げる（Philosophy 背景用途）。
export default function SlideshowPhotos({
  photos,
  intervalMs = 4500,
  aspectClass = "aspect-[16/9] md:aspect-[2000/1080]",
  fill = false,
}: Props) {
  const n = photos.length;
  const [current, setCurrent] = useState(0);

  // 自動再生
  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  return (
    <div className={`relative w-full overflow-hidden bg-zinc-900 ${fill ? "h-full" : aspectClass}`}>
      {photos.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
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
      {/* ドットインジケーター */}
      {n > 1 && (
        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`写真 ${i + 1} を表示`}
              className={`h-2 w-2 rounded-full transition-colors ${
                current === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
