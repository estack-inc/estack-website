// template.tsx は layout と違ってナビゲーション毎に再マウントされるので、
// CSS アニメーションを使ったページ遷移演出に最適。
// 旧サイトのような「一旦白い画面 → ぽーっとフェードイン」を再現する。
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-fade-in">{children}</div>;
}
