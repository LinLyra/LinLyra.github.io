// app/layout.tsx —— 纯 Server 组件
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

// 3D 背景只在客户端渲染
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

