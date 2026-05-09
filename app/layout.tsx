import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estack.co.jp"),
  title: {
    default: "eSTACK(イースタック)株式会社",
    template: "%s | eSTACK(イースタック)株式会社",
  },
  description:
    "Web技術に特化した技術支援、及びシステム・サービス開発を行っております。Web技術の中でも短期開発に向いているPHP、Rubyを得意としており、多くのお客様にスピーディーで高品質なサービス提供を行っております。",
  openGraph: {
    type: "website",
    siteName: "eSTACK(イースタック)株式会社",
    images: ["/og-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
