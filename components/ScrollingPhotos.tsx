import Image from "next/image";

type Props = {
  photos: string[];
  className?: string;
};

// 写真を右から左へ無限スクロールするストリップ
// 同じ写真の連を 2 セット連結し translateX で半分動かす
export default function ScrollingPhotos({ photos, className = "" }: Props) {
  const reel = [...photos, ...photos];
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex w-max animate-scroll-x gap-4 md:gap-6">
        {reel.map((src, i) => (
          <div
            key={i}
            className="relative w-[280px] h-[200px] md:w-[400px] md:h-[260px] shrink-0 overflow-hidden rounded-md"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 280px, 400px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
