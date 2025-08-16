import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import QuietBoundary from "@/components/quiet-boundary";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

// 路径按你的实际：如果文件在 components/ui，就改成 "@/components/ui/galaxy-background"
const GalaxyBackground = dynamic(
  () =>
    import("@/components/galaxy-background").then(
      (m) => m.default ?? m.GalaxyBackground   // ✅ 兼容默认导出或命名导出
    ),
  { ssr: false, loading: () => null }           // ✅ 关闭 SSR（导出时不加载 three）
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
        {/* ✅ 背景单独包一层，避免它崩全局 */}
        <QuietBoundary fallback={null}>
          <GalaxyBackground />
        </QuietBoundary>

        {/* ✅ 页面内容也包一层，防止某个页面组件把整页打崩 */}
        <QuietBoundary fallback={<div className="p-8 text-gray-300">Something went wrong. Please refresh.</div>}>
          {children}
        </QuietBoundary>
      </body>
    </html>
  );
}


