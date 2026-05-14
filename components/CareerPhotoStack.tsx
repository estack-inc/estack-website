"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  photos: string[];
};

// 採用セクション用：3枚の写真を斜めに重ねて表示
// クリックで次の写真が前面に出る
export default function CareerPhotoStack({ photos }: Props) {
  const [order, setOrder] = useState<number[]>(photos.map((_, i) => i));

  const handleClick = () => {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const rotations = ["rotate-0", "-rotate-3", "rotate-3"];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="次の写真を表示"
      className="relative aspect-[5/6] w-full max-w-[440px] mx-auto cursor-pointer"
    >
      {order.map((photoIdx, stackIdx) => {
        const isTop = stackIdx === 0;
        return (
          <div
            key={photoIdx}
            className={`absolute inset-0 transition-all duration-500 ease-out ${rotations[stackIdx]} ${
              isTop ? "z-30 shadow-xl" : stackIdx === 1 ? "z-20 shadow-lg translate-x-4 translate-y-4" : "z-10 shadow-md -translate-x-4 translate-y-8"
            }`}
            style={{
              opacity: isTop ? 1 : stackIdx === 1 ? 0.95 : 0.85,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg border-[6px] md:border-[8px] border-white bg-zinc-100">
              <Image
                src={photos[photoIdx]}
                alt=""
                fill
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </button>
  );
}
