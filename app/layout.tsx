
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

        <GalaxyBackground />

        {children}
      </body>
    </html>
  );
}


