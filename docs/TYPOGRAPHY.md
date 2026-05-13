# タイポグラフィ仕様

旧サイト（estack.co.jp、STUDIO 製）の computed style を Playwright で実測した結果に基づくサイズ表。
新サイト（Next.js 版）は **Noto Sans JP** + **Montserrat** をフォールバックとして使用する。

## 使用フォント

| 旧サイト（モリサワ） | 重み | 用途 | 新サイト代替 |
| --- | --- | --- | --- |
| ゴシックMB101 DB JIS2004 | 600 (Demi Bold) | 見出し | Noto Sans JP 600 |
| ゴシックMB101 M JIS2004 | 500 (Medium) | サブ見出し・ナビ | Noto Sans JP 500 |
| ゴシックMB101 R JIS2004 | 400 (Regular) | 本文 | Noto Sans JP 400 |
| Montserrat | 400-500 | 英字・数字・Eyebrow | Montserrat（変更なし） |

## サイズ・重み一覧（旧サイト実測値 @ 1440px viewport）

| 用途 | 旧サイズ | 旧重み | 旧フォント | Tailwind クラス（新サイト） |
| --- | --- | --- | --- | --- |
| TOP ヒーロー h1（技術で支え、共に成長する） | **72px** | 600 | MB101 DB | `text-7xl font-semibold` |
| ページ大見出し h1（eSTACKについて／システムインテグレーション／採用情報 等） | **48px** | 600 | MB101 DB | `text-5xl font-semibold` |
| セクション h2（サービス／サービス内容） | **48–40px** | 600 | MB101 DB | `text-5xl` または `text-4xl font-semibold` |
| サブセクション h3（システムインテグレーション／その他サービス） | **40–32px** | 600 | MB101 DB | `text-4xl` または `text-3xl font-semibold` |
| カードタイトル（システム評価と戦略策定／竹田 賢史） | **24px** | 600 | MB101 DB | `text-2xl font-semibold` |
| 小カード見出し（H.S／データ一元化／お知らせ記事タイトル） | **20px** | 600 | MB101 M | `text-xl font-semibold` |
| 重要本文（代表メッセージ／採用メッセージ） | **18px** | 500 | MB101 M | `text-lg` |
| 通常本文（一般説明文） | **16px** | 400-500 | MB101 M/R | `text-base` |
| 詳細テキスト | **14px** | 400-500 | MB101 M/R | `text-sm` |
| ナビ（ホーム／サービス 等） | **14px** | 500 | MB101 M | `text-sm font-medium` |
| 補足（日付／注記） | **12px** | 400 | MB101 R | `text-xs` |
| Eyebrow（Services／Career／About 等） | **14–16px** | 400-500 | Montserrat | `text-sm font-display font-medium tracking-[0.3em]` |

## ページ大見出しの統一規則

旧サイト確認済み：すべてのページ大見出し（h1）は **48px / Demi Bold** で統一されている。

- `/about` のページタイトル「eSTACKについて」
- `/service/system-integration` のページタイトル「システムインテグレーション」
- `/recruit` のページタイトル「採用情報」

→ `components/PageHeader.tsx` で `text-5xl font-semibold` をベースに統一。

唯一の例外は **TOP のヒーロー h1**（72px = `text-7xl`）。ファーストビューでのインパクト用。

## 行間（line-height）

| 要素 | 旧サイト lh | Tailwind |
| --- | --- | --- |
| 大見出し（72px） | 86.4px = 1.2 | `leading-tight` |
| ページ見出し（48px） | 48-72px = 1.0-1.5 | `leading-tight` または `leading-normal` |
| 本文（14-16px） | 約 1.5-2.0 | `leading-relaxed` または `leading-loose` |

## 重み（font-weight）の注意点

旧サイトのモリサワ DB（Demi Bold）は **weight 600**。
これまで新サイトでは `font-bold`（700）を使っていた箇所が多かったが、より細めに調整する。

- 見出し → `font-semibold`（600）
- ナビ・サブ → `font-medium`（500）
- 本文 → `font-normal`（400）

## 検証手順

旧サイトに対する実測は `.context/scraping/typography-audit.js` で再現可能。
ビューポート 1440×900 で各ページの `getComputedStyle` を取得して比較する。
