"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Space_Grotesk } from "next/font/google"

import { aerotropolisSlidePaths } from "@/lib/aerotropolis-slides"
import { bainInstantRetailSlidePaths } from "@/lib/bain-instant-retail-slides"
import { cfaGrowthResearchChallengeSlidePaths } from "@/lib/cfa-growth-research-challenge-slides"
import { citiGmc2026SlidePaths } from "@/lib/citi-gmc-2026-slides"
import { datathonSupplyChainSlidePaths } from "@/lib/datathon-supply-chain-slides"
import { flourishKpmg2026SlidePaths } from "@/lib/flourish-kpmg-2026-slides"
import { pathologyHeSlidePaths } from "@/lib/pathology-he-slides"
import { temuHkEntry2026SlidePaths } from "@/lib/temu-hk-entry-2026-slides"
import { ubsFinance2026SlidePaths } from "@/lib/ubs-finance-2026-slides"
import { cn } from "@/lib/utils"

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] })

type Mission = {
  title: string
  subtitle: string
  href: string
  images: string[]
  accent: "blue" | "green" | "amber" | "red" | "purple"
}

const MISSIONS: Mission[] = [
  {
    title: "Supply Chain Optimization",
    subtitle: "First Place · Supply Chain / Operations",
    href: "/data/datathon-2025-supply-chain",
    images: [...datathonSupplyChainSlidePaths()],
    accent: "blue",
  },
  {
    title: "Growth-Based Repricing Framework",
    subtitle: "CFA Institute Research Challenge · Top 60",
    href: "/data/future-financial-analyst",
    images: [...cfaGrowthResearchChallengeSlidePaths()],
    accent: "blue",
  },
  {
    title: "Cost-Efficient Alpha",
    subtitle: "Healthcare · Biotech",
    href: "/data/citi-global-market-challenge-2026",
    images: [...citiGmc2026SlidePaths()],
    accent: "blue",
  },
  {
    title: "Instant Retail Profitability Strategy",
    subtitle: "Retail · Platform Economy",
    href: "/business/bain-instant-retail-profitability-strategy",
    images: [...bainInstantRetailSlidePaths()],
    accent: "green",
  },
  {
    title: "H&E Tumour vs Immune Cells",
    subtitle: "Pathology · Medical Imaging",
    href: "/data/pathology-image-classification",
    images: [...pathologyHeSlidePaths()],
    accent: "purple",
  },
  {
    title: "Aerotropolis South Connector",
    subtitle: "Top6 · Project Management · Infrastructure / Transport",
    href: "/business/aerotropolis-south-connector-2026",
    images: [...aerotropolisSlidePaths()],
    accent: "green",
  },
  {
    title: "Long BeOne, Short Akeso",
    subtitle: "Retail · Platform Economy",
    href: "/business/ubs-finance-challenge-2026",
    images: [...ubsFinance2026SlidePaths()],
    accent: "green",
  },
  {
    title: "Flourish — KPMG Case Competition",
    subtitle: "Education · Workforce & Talent",
    href: "/business/flourish-kpmg-case-competition-2026",
    images: [...flourishKpmg2026SlidePaths()],
    accent: "green",
  },
  {
    title: "Temu Hong Kong Market Entry Strategy",
    subtitle: "Competition · Strategy · Cross-Border Commerce",
    href: "/business/temu-hk-entry-strategy-2026",
    images: [...temuHkEntry2026SlidePaths()],
    accent: "green",
  },
]

export function MissionHighlights() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const [canLeft, setCanLeft] = React.useState(false)
  const [canRight, setCanRight] = React.useState(true)

  const syncArrows = React.useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const maxLeft = el.scrollWidth - el.clientWidth
    setCanLeft(el.scrollLeft > 6)
    setCanRight(el.scrollLeft < maxLeft - 6)
  }, [])

  React.useEffect(() => {
    syncArrows()
    const onResize = () => syncArrows()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [syncArrows])

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(260, Math.round(el.clientWidth * 0.75)) * dir
    el.scrollBy({ left: amount, behavior: "smooth" })
    window.setTimeout(() => syncArrows(), 220)
  }

  return (
    <div className="pt-4">
      <div className="mb-4 text-center">
        <h3 className={`${display.className} text-xl font-semibold tracking-tight text-slate-100 md:text-2xl`}>
          Featured mission
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-[0.95rem]">
          Structured problem-solving across real-world business and data challenges.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-black/80 to-transparent md:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-black/80 to-transparent md:w-12" />
        {canLeft ? (
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="absolute left-2 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/10 bg-black/35 p-2 text-slate-200/85 backdrop-blur-md transition hover:bg-black/45 md:left-3"
            aria-label="Scroll missions left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        ) : null}
        {canRight ? (
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="absolute right-2 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/10 bg-black/35 p-2 text-slate-200/85 backdrop-blur-md transition hover:bg-black/45 md:right-3"
            aria-label="Scroll missions right"
          >
            <ChevronRight className="h-4 w-4 animate-[mission-hint_1.3s_ease-in-out_infinite]" />
          </button>
        ) : null}

        <div
          ref={scrollerRef}
          onScroll={syncArrows}
          className={cn(
            "missions-scroll relative z-0 flex gap-2.5 overflow-x-auto pb-2 pt-1",
            "snap-x snap-mandatory scroll-px-4 px-3 md:gap-3 md:scroll-px-6 md:px-4"
          )}
        >
          {MISSIONS.map((m) => (
            <MissionCard key={m.href} mission={m} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes mission-hint {
          0% {
            transform: translateX(0);
            opacity: 0.55;
          }
          55% {
            transform: translateX(6px);
            opacity: 0.95;
          }
          100% {
            transform: translateX(0);
            opacity: 0.55;
          }
        }
      `}</style>
    </div>
  )
}

function MissionCard({ mission }: { mission: Mission }) {
  const [idx, setIdx] = React.useState(0)
  const n = mission.images.length

  React.useEffect(() => {
    if (n <= 1) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % n)
    }, 2600)
    return () => window.clearInterval(t)
  }, [n])

  const src = mission.images[idx] ?? mission.images[0] ?? "/placeholder.svg"

  const cardInner = (
    <>
      <div className={cn("pointer-events-none absolute -inset-16 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accentBg(mission.accent))} />

      <div className="relative aspect-[5/3] w-full overflow-hidden border-b border-white/[0.06] bg-black/40">
        <Image
          src={src}
          alt={mission.title}
          fill
          sizes="200px"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-75" />
        <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-100/90 backdrop-blur-md">
          <ArrowUpRight className="h-3 w-3" />
          OPEN
        </div>
      </div>

      <div className="relative p-2.5">
        <div className="line-clamp-2 text-[13px] font-semibold leading-snug text-slate-100">
          {mission.title}
        </div>
        <div className="mt-1 text-[10px] leading-snug text-slate-500">{mission.subtitle}</div>
        {n > 1 && n < 8 ? (
          <div className="mt-1.5 flex items-center gap-1">
            {mission.images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-0.5 rounded-full transition-all",
                  i === idx ? "w-2.5 bg-slate-300" : "w-1 bg-white/22"
                )}
              />
            ))}
          </div>
        ) : n > 1 ? (
          <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-slate-400/90 transition-[width] duration-300 ease-out"
              style={{ width: `${((idx + 1) / n) * 100}%` }}
            />
          </div>
        ) : null}
      </div>
    </>
  )

  const cardClass = cn(
    "group relative flex min-w-[min(10.5rem,62vw)] max-w-[11.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white/[0.035] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition",
    "ring-1 ring-white/[0.05] hover:-translate-y-0.5 hover:bg-white/[0.05] hover:ring-white/[0.09] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] active:translate-y-0"
  )

  return (
    <Link href={mission.href} className={cardClass}>
      {cardInner}
    </Link>
  )
}

// Subtle "scroll →" hint animation
// (Global keyframes live in this component file via Tailwind's arbitrary animation.)

function accentBg(a: Mission["accent"]) {
  switch (a) {
    case "green":
      return "bg-emerald-500/12"
    case "amber":
      return "bg-amber-500/12"
    case "red":
      return "bg-rose-500/12"
    case "purple":
      return "bg-fuchsia-500/12"
    case "blue":
    default:
      return "bg-sky-500/12"
  }
}
