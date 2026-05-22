import Image from "next/image";

// 旧サイトの象徴的なフォトグリッド：
// - オレンジ格子の中に複数枚の写真が並ぶ
// - グリッド全体が右斜に傾いている
// - 3 カラム構成：両端カラムは上方向、中央カラムは下方向にゆっくり縦スクロール
// - 写真を 2 セット繋げてシームレスループ（CSS animation で translateY 0 → -50%）

// 旧サイトから持ってきた 1200x1200 正方形写真。b9d4fd80（女性写真）を
// バルコニー 2 人の写真（既存 eba8a87b）に差替
const TOP_PHOTOS = [
  "/images/top-grid-4c4fecce.webp",
  "/images/top-grid-13622e87.webp",
  "/images/top-grid-1ead799f.webp",
  "/images/top-grid-22d19368.webp",
  "/images/top-grid-31b1f73a.webp",
  "/images/top-grid-3c7f1986.webp",
  "/images/top-grid-5a7a964f.webp",
  "/images/top-grid-8b1abc3e.webp",
  "/images/s-2000x1080_v-frms_webp_eba8a87b-4db3-49ad-b4d8-b809f2a38f56_regular.webp",
];

// 3 カラムに 3 枚ずつ割り振り
const COL_LEFT = TOP_PHOTOS.slice(0, 3);
const COL_MID = TOP_PHOTOS.slice(3, 6);
const COL_RIGHT = TOP_PHOTOS.slice(6, 9);

function Photo({ src }: { src: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-200">
      <Image
        src={src}
        alt=""
        width={600}
        height={600}
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
        className={`flex flex-col gap-[12px] md:gap-[20px] ${
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
      {/* 外側コンテナ：高さ固定・画面いっぱいに広がる。全体の 4 角は丸い */}
      <div className="relative h-[500px] md:h-[750px] w-full">
        <div className="absolute inset-0 overflow-hidden rounded-[40px] md:rounded-[80px]">
          {/* 傾き 8 度＋scale 1.4：回転で生じる四隅の三角隙間と、
              bg-brand パディングのエッジが見えないように scale を上げる */}
          <div className="absolute inset-0 origin-center rotate-[8deg] scale-[1.4] bg-brand p-[12px] md:p-[20px]">
            {/* scale 1.4 で回転すると中央列が視覚的に圧を持つ。
                中央列を狭く（2fr）、両端列を広く（3fr）配分して、
                クリッピング後の見かけ幅を均等に近づける。 */}
            <div className="grid h-full grid-cols-[3fr_2fr_3fr] gap-[12px] md:gap-[20px]">
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
