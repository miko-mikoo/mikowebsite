import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIKO - 你正在寻找的伙伴",
  description: "还在担心没有一个有力温暖的伙伴吗，认识MIKO，和她一起探索更大的世界吧",
  keywords: "Miko, AIGC, 提示词工程, AI产品经理, AI应用, AI产品运营, AI对话",
  authors: [{ name: "云中江树" }],
  creator: "云中江树",
  publisher: "LangGPT社区",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://pocketai.com",
    siteName: "MIKO GAO",
    title: "MIKO - 最好的伙伴（之一）",
    description: "发现MIKO，发现AI，发现未来更多可能",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "口袋AI - 智能对话助手",
    description: "基于中文模型优化的AI对话助手，为中文用户提供极致的对话体验。",
    images: ["/twitter-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}