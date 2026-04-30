"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

type Mission = {
  title: string
  subtitle: string
  href: string
  images: string[]
  accent: "blue" | "green" | "amber" | "red" | "purple"
}

const MISSIONS: Mission[] = [
  {
    title: "Supply Chain Optimization (24h)",
    subtitle: "Datathon · Supply Chain / Operations",
    href: "/data/datathon-2025-supply-chain",
    images: ["/data/dataslide.png", "/data/datacet.png", "/competition/sudatalogo.jpg"],
    accent: "blue",
  },
  {
    title: "H&E Tumour vs Immune Cells",
    subtitle: "Course project · Healthcare / Medical Imaging",
    href: "/data/pathology-image-classification",
    images: ["/competition/check.png", "/competition/check2.png", "/competition/COMAPlogo.svg"],
    accent: "purple",
  },
  {
    title: "Aerotropolis South Connector",
    subtitle: "Case · Infrastructure / Transport",
    href: "/business/aerotropolis-south-connector-2026",
    images: ["/competition/Kordamentha.png", "/competition/commonwealth.png", "/competition/rblogo.png"],
    accent: "green",
  },
  {
    title: "Aussie Adventure",
    subtitle: "Hackathon · Travel / Consumer App",
    href: "/product/aussie-adventure",
    images: ["/competition/canvalogo.png", "/competition/advxlogo.jpg", "/competition/yolo1.png"],
    accent: "amber",
  },
]

export function MissionHighlights() {
  return (
    <div className="pt-2">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">
            MISSION HIGHLIGHTS
          </div>
          <div className="mt-2 text-xl font-semibold text-gray-100">Top Missions</div>
          <div className="mt-1 text-sm text-gray-300/78">
            Hover to preview. Click to enter.
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {MISSIONS.map((m) => (
          <MissionCard key={m.href} mission={m} />
        ))}
      </div>
    </div>
  )
}

function MissionCard({ mission }: { mission: Mission }) {
  const [idx, setIdx] = React.useState(0)
  const timer = React.useRef<number | null>(null)

  const start = () => {
    if (timer.current != null) return
    timer.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % mission.images.length)
    }, 900)
  }

  const stop = () => {
    if (timer.current != null) {
      window.clearInterval(timer.current)
      timer.current = null
    }
    setIdx(0)
  }

  React.useEffect(() => () => stop(), [])

  return (
    <Link
      href={mission.href}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-4 backdrop-blur-xl transition",
        "border-white/10 hover:border-white/18 hover:bg-white/[0.04]"
      )}
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      <div className={cn("pointer-events-none absolute -inset-16 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accentBg(mission.accent))} />

      <div className="relative flex items-start gap-4">
        <div className="relative h-16 w-24 overflow-hidden rounded-xl border border-white/10 bg-black/25">
          <Image
            src={mission.images[idx] ?? mission.images[0] ?? "/placeholder.svg"}
            alt={mission.title}
            fill
            sizes="96px"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-gray-100">{mission.title}</div>
          <div className="mt-1 truncate text-xs text-white/60">{mission.subtitle}</div>
          <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/40 opacity-0 transition group-hover:opacity-100">
            Preview playing
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </Link>
  )
}

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

