"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  intervalMs?: number;
};

// 1 枚ずつ表示し、一定時間後にスライドで次へ切り替わるスライドショー。
// 旧サイトの「働く仲間」下のキャリア写真と同等の動作。
export default function SlideshowPhotos({ photos, intervalMs = 4500 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [photos.length, intervalMs]);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden">
      {photos.map((src, i) => {
        const offset = (i - index + photos.length) % photos.length;
        // 表示中: 0, 次: 1（右側待機）, 前: -1（左側退避）
        const xClass =
          offset === 0
            ? "translate-x-0"
            : offset === 1
              ? "translate-x-full"
              : "-translate-x-full";
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${xClass}`}
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
        );
      })}
      {/* ドットインジケーター */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`写真 ${i + 1} を表示`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
