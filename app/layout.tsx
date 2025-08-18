// app/layout.tsx —— 纯 Server 组件
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lyra’s Universe",
    template: "%s | Lyra’s Universe",
  },
  description: "Interactive 3D portfolio of Lyra (Next.js + R3F).",
  // 可选：去掉 v0 的 generator
  // generator: undefined,
};

// 3D 背景只在客户端渲染（保持原样）
const GalaxyBackground = dynamic(
  () => import("@/components/galaxy-background"),
  { ssr: false, loading: () => null }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* 背景层（客户端渲染） */}
        <GalaxyBackground />
        {/* 页面内容 */}
        {children}
      </body>
    </html>
  );
}


