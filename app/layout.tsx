import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import QuietBoundary from "@/components/quiet-boundary";
import ClientOnly from "@/components/client-only";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

// 路径按你的实际改：如果文件在 components/ui，就把下面的路径改成 "@/components/ui/galaxy-background"
const GalaxyBackground = dynamic(
  () =>
    import("@/components/galaxy-background").then(
      (m) => m.default ?? m.GalaxyBackground // 兼容默认导出 / 命名导出
    ),
  { ssr: false, loading: () => null }        // 服务端完全不渲染
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* 背景：只在客户端挂载后再渲染，并包上错误边界 */}
        <ClientOnly>
          <QuietBoundary fallback={null}>
            <GalaxyBackground />
          </QuietBoundary>
        </ClientOnly>

        {/* 页面内容也包一层，避免任何子组件把整页打崩 */}
        <QuietBoundary fallback={<div className="p-8 text-gray-300">Something went wrong. Please refresh.</div>}>
          {children}
        </QuietBoundary>
      </body>
    </html>
  );
}
