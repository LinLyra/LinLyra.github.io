import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ShipConsole from "@/components/ShipConsole";
import { DeferredVisualEffects } from "@/components/deferred-visual-effects";

export const metadata: Metadata = {
  title: {
    default: "Lyra’s Universe",
    template: "%s | Lyra’s Universe",
  },
  description: "Interactive 3D portfolio of Lyra (Next.js + R3F).",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <DeferredVisualEffects />
        {children}
        <ShipConsole />
      </body>
    </html>
  );
}
