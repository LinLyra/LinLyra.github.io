"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { aerotropolisSlidePaths } from "@/lib/aerotropolis-slides"
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
    subtitle: "Research Build · Supply Chain / Operations",
    href: "/data/datathon-2025-supply-chain",
    images: ["/data/dataslide.png", "/data/datacet.png", "/competition/sudatalogo.jpg"],
    accent: "blue",
  },
  {
    title: "H&E Tumour vs Immune Cells",
    subtitle: "Research Build · Medical Imaging",
    href: "/data/pathology-image-classification",
    images: ["/competition/check.png", "/competition/check2.png", "/competition/COMAPlogo.svg"],
    accent: "purple",
  },
  {
    title: "Aerotropolis South Connector",
    subtitle: "Case Competition · Infrastructure / Transport",
    href: "/business/aerotropolis-south-connector-2026",
    images: [
      ...aerotropolisSlidePaths(),
      "/competition/Kordamentha.png",
      "/competition/commonwealth.png",
      "/competition/rblogo.png",
    ],
    accent: "green",
  },
  {
    title: "Aussie Adventure",
    subtitle: "Hackathon · Travel / Consumer App",
    href: "/product/aussie-adventure",
    images: ["/competition/canvalogo.png", "/competition/advxlogo.jpg", "/competition/yolo1.png"],
    accent: "amber",
  },
  {
    title: "AgentLens — AI Agent Evaluation Platform",
    subtitle: "Product Build · AI / Developer Tools",
    href: "/product/agentlens",
    images: ["/competition/microsoftlogo.png", "/competition/yolo1.png", "/competition/advxlogo.jpg"],
    accent: "red",
  },
  {
    title: "Technology Risk & ESG Consulting",
    subtitle: "Industry Internship · Banking / Risk / ESG",
    href: "/business/mercer-business-analyst",
    images: ["/experience/mercer.png", "/competition/commonwealth.png", "/competition/rblogo.png"],
    accent: "green",
  },
]

export function MissionHighlights() {
  return (
    <div className="pt-4">
      <div className="max-w-3xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Featured</div>
        <h3 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-50 md:text-[2rem]">
          Featured Missions
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-[0.95rem] md:leading-relaxed">
          Selected missions across different worlds — each one a different problem, the same commitment to impact.
        </p>
      </div>

      <div className="relative mt-6">
        <div
          className={cn(
            "missions-scroll flex gap-3 overflow-x-auto pb-2 pt-1",
            "snap-x snap-mandatory scroll-px-3 md:scroll-px-0"
          )}
        >
          {MISSIONS.map((m) => (
            <MissionCard key={m.href} mission={m} />
          ))}
        </div>
      </div>
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
    }, 2800)
    return () => window.clearInterval(t)
  }, [n])

  const src = mission.images[idx] ?? mission.images[0] ?? "/placeholder.svg"

  return (
    <Link
      href={mission.href}
      className={cn(
        "group relative flex min-w-[min(14rem,72vw)] max-w-[16rem] shrink-0 snap-start flex-col overflow-hidden rounded-xl border bg-white/[0.04] backdrop-blur-xl transition",
        "border-white/12 hover:-translate-y-1 hover:border-white/22 hover:shadow-lg hover:shadow-black/40"
      )}
    >
      <div className={cn("pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accentBg(mission.accent))} />

      <div className="relative aspect-[5/3] w-full overflow-hidden border-b border-white/10 bg-black/35">
        <Image
          src={src}
          alt={mission.title}
          fill
          sizes="260px"
          className="object-cover transition duration-500 ease-out"
          priority={false}
        />
      </div>

      <div className="relative p-3">
        <div className="line-clamp-2 text-sm font-semibold leading-snug text-slate-100 md:text-[0.95rem]">
          {mission.title}
        </div>
        <div className="mt-1.5 text-[11px] leading-snug text-slate-500 md:text-[12px]">{mission.subtitle}</div>
        {n > 1 && n < 8 ? (
          <div className="mt-2 flex items-center gap-1">
            {mission.images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all",
                  i === idx ? "w-3 bg-slate-300" : "w-1 bg-white/22"
                )}
              />
            ))}
          </div>
        ) : n > 1 ? (
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-slate-400/90 transition-[width] duration-300 ease-out"
              style={{ width: `${((idx + 1) / n) * 100}%` }}
            />
          </div>
        ) : null}
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
