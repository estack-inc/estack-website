import Link from "next/link";

type Props = {
  href: string;
  label: string;
  size?: "md" | "sm";
};

// 旧サイトと同じ「楕円ピル+円矢印」CTAリンク。
// 通常: 白背景+黒文字+オレンジ円+白矢印
// ホバー: オレンジ背景+白文字+白円+オレンジ矢印
export default function PillLink({ href, label, size = "md" }: Props) {
  const padding =
    size === "sm" ? "pl-5 pr-1 py-1" : "pl-7 md:pl-8 pr-1.5 py-1.5";
  const text = size === "sm" ? "text-xs" : "text-sm";
  const circle =
    size === "sm" ? "h-6 w-6 text-[11px]" : "h-9 w-9 md:h-10 md:w-10 text-base";
  return (
    <Link
      href={href}
      className={`group mt-7 inline-flex items-center gap-3 ${padding} rounded-full bg-white border border-zinc-300 ${text} font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-brand hover:border-brand hover:text-white`}
    >
      {label}
      <span
        className={`inline-flex ${circle} items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-white group-hover:text-brand`}
      >
        →
      </span>
    </Link>
  );
}
