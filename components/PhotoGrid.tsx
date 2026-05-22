import Image from "next/image";

// 旧サイトの象徴的なフォトグリッド：
// - 6 枚の写真がオレンジ格子の中に並ぶ（写真同士の境界線がオレンジ）
// - グリッド全体が右斜に傾いている
// - 3 カラム構成：両端カラムは上方向、中央カラムは下方向にゆっくり縦スクロール
// - 写真を 2 セット繋げてシームレスループ（CSS animation で translateY 0 → -50%）

const PHOTOS = [
  "/images/s-2000x1080_v-frms_webp_8b9af719-692f-4469-aa68-01dc36603302_regular.webp",
  "/images/s-2400x1571_v-frms_webp_71df778e-335b-4f00-a9da-50991eedb423_middle.webp",
  "/images/s-2000x1080_v-frms_webp_eba8a87b-4db3-49ad-b4d8-b809f2a38f56_regular.webp",
  "/images/s-2400x1571_v-frms_webp_74b0d62b-a554-4459-a3dc-95674adefa7b_middle.webp",
  "/images/s-2000x1080_v-frms_webp_fff9b2ef-9134-4ad2-86a0-1f7a5c0de2b2_regular.webp",
  "/images/s-2400x1250_v-frms_webp_c2ff8c63-996c-43fd-9d7b-b3105683b65b_small.webp",
];

// カラムに割り振る写真（2 枚ずつ）
const COL_LEFT = [PHOTOS[0], PHOTOS[1]];
const COL_MID = [PHOTOS[2], PHOTOS[3]];
const COL_RIGHT = [PHOTOS[4], PHOTOS[5]];

function Photo({ src }: { src: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200">
      <Image
        src={src}
        alt=""
        width={600}
        height={450}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function Column({
  photos,
  direction,
}: {
  photos: string[];
  direction: "up" | "down";
}) {
  // 2 セット繋げてシームレスループ
  const reel = [...photos, ...photos];
  return (
    <div className="overflow-hidden h-full">
      <div
        className={`flex flex-col gap-[6px] md:gap-[10px] ${
          direction === "up" ? "animate-scroll-y-up" : "animate-scroll-y-down"
        }`}
      >
        {reel.map((src, i) => (
          <Photo key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export default function PhotoGrid() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      {/* 外側コンテナ：高さ固定。中身を傾けて拡大表示する */}
      <div className="relative mx-auto h-[420px] md:h-[600px] max-w-7xl px-5 md:px-8">
        <div className="absolute inset-0 overflow-hidden">
          {/* 傾き＋スケールで端まで埋める */}
          <div className="absolute inset-0 origin-center rotate-[6deg] scale-[1.25] bg-brand p-[6px] md:p-[10px]">
            <div className="grid h-full grid-cols-3 gap-[6px] md:gap-[10px]">
              <Column photos={COL_LEFT} direction="up" />
              <Column photos={COL_MID} direction="down" />
              <Column photos={COL_RIGHT} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
