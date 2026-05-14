import Link from "next/link";

type Props = {
  href: string;
  label: string;
  size?: "md" | "sm";
};

// 旧サイト実測ベースのピルボタン:
// 高さ 60px / 内側パディング 12px 12px 12px 40px / 角丸 78px / ボーダー 2px / 文字 16px weight 600
// 通常: 白背景 + 黒文字 + オレンジ円 + 白矢印
// ホバー: オレンジ背景 + 白文字 + 白円 + オレンジ矢印（色反転）
export default function PillLink({ href, label, size = "md" }: Props) {
  const isMd = size === "md";
  return (
    <Link
      href={href}
      className={`group mt-7 inline-flex items-center gap-3 rounded-full border-2 border-zinc-100 bg-white text-zinc-800 font-semibold shadow-sm transition-colors hover:bg-brand hover:border-brand hover:text-white ${
        isMd
          ? "pl-10 pr-3 py-3 text-base"
          : "pl-7 pr-2 py-2 text-sm"
      }`}
    >
      {label}
      <span
        className={`inline-flex items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-white group-hover:text-brand ${
          isMd ? "h-9 w-9 text-sm" : "h-7 w-7 text-xs"
        }`}
      >
        →
      </span>
    </Link>
  );
}
