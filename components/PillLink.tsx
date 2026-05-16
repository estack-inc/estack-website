import Link from "next/link";

type Props = {
  href: string;
  label: string;
  size?: "md" | "sm";
  direction?: "forward" | "back";
};

// 旧サイト実測ベースのピルボタン:
// 高さ 60px / 内側パディング 12px / 角丸 78px / ボーダー 2px / 文字 16px weight 600
// 通常: 白背景 + 黒文字 + オレンジ円 + 矢印
// ホバー: オレンジ背景 + 白文字 + 白円 + オレンジ矢印（色反転）
export default function PillLink({ href, label, size = "md", direction = "forward" }: Props) {
  const isMd = size === "md";
  const isBack = direction === "back";

  const arrow = isBack ? "←" : "→";
  const heightClass = isMd ? "h-[60px]" : "h-11";
  const padClass = isBack
    ? isMd
      ? "pl-3 pr-10"
      : "pl-2 pr-7"
    : isMd
      ? "pl-10 pr-3"
      : "pl-7 pr-2";
  const textClass = isMd ? "text-base" : "text-sm";
  const circleClass = isMd ? "h-8 w-8 text-sm" : "h-7 w-7 text-xs";

  const circle = (
    <span
      className={`inline-flex ${circleClass} items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-white group-hover:text-brand`}
    >
      {arrow}
    </span>
  );

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-6 rounded-full border-2 border-zinc-100 bg-white text-zinc-800 font-semibold shadow-sm transition-colors hover:bg-brand hover:border-brand hover:text-white ${heightClass} ${padClass} ${textClass}`}
    >
      {isBack && circle}
      {label}
      {!isBack && circle}
    </Link>
  );
}
