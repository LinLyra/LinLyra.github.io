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

// 如果你的文件在 components/ui/galaxy-background.tsx
// 路径改成 "@/components/ui/galaxy-background"
const GalaxyBackground = dynamic(
  () => import("@/components/galaxy-background"), // 仅默认导出，不再尝试 m.GalaxyBackground
  { ssr: false, loading: () => null }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* 背景只在客户端挂载后渲染，并包错误边界，避免崩全页 */}
        <ClientOnly>
          <QuietBoundary fallback={null}>
            <GalaxyBackground />
          </QuietBoundary>
        </ClientOnly>

        {/* 页面内容也包一层兜底 */}
        <QuietBoundary fallback={<div className="p-8 text-gray-300">Something went wrong. Please refresh.</div>}>
          {children}
        </QuietBoundary>
      </body>
    </html>
  );
}
