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

// 路径按你的实际修改（components/ 或 components/ui/）
const GalaxyBackground = dynamic(() => import("@/components/galaxy-background"), {
  ssr: false,
  loading: () => null,
});

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
        <GalaxyBackground />
        {children}
      </body>
    </html>
  );
}

