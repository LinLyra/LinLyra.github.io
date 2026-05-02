"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

import { aerotropolisSlidePaths } from "@/lib/aerotropolis-slides"
import { getFeaturedEmbedUrl } from "@/lib/featured-embed-urls"
import { pathologyHeSlidePaths } from "@/lib/pathology-he-slides"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
    title: "Supply Chain Optimization (SUDATA × SUBAA Datathon)",
    subtitle: "First Place · Supply Chain / Operations",
    href: "/data/datathon-2025-supply-chain",
    images: ["/data/dataslide.png", "/data/datacet.png", "/competition/sudatalogo.jpg"],
    accent: "blue",
  },
  {
    title: "H&E Tumour vs Immune Cells",
    subtitle: "Pathology · Medical Imaging",
    href: "/data/pathology-image-classification",
    images: [...pathologyHeSlidePaths(), "/competition/check.png", "/competition/check2.png", "/competition/COMAPlogo.svg"],
    accent: "purple",
  },
  {
    title: "Aerotropolis South Connector",
    subtitle: "Case Competition · Infrastructure / Transport",
    href: "/business/aerotropolis-south-connector-2026",
    images: [...aerotropolisSlidePaths()],
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
    <div className="pt-6">
      <div className="mb-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Featured work</p>
        <h3 className="mt-2 text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">项目深度</h3>
        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-500 md:text-sm">
          Deeper dives — click to preview the Notion write-up in-site when configured, then continue on the project page.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-black/80 to-transparent md:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-black/80 to-transparent md:w-12" />

        <div
          className={cn(
            "missions-scroll relative z-0 flex gap-2.5 overflow-x-auto pb-2 pt-1",
            "snap-x snap-mandatory scroll-px-3 md:gap-3 md:scroll-px-1"
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
  const router = useRouter()
  const [idx, setIdx] = React.useState(0)
  const [embedOpen, setEmbedOpen] = React.useState(false)
  const n = mission.images.length

  const embedUrl = getFeaturedEmbedUrl(mission.href)

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

  const onDialogChange = React.useCallback(
    (open: boolean) => {
      setEmbedOpen(open)
      if (!open) router.push(mission.href)
    },
    [mission.href, router]
  )

  const cardInner = (
    <>
      <div className={cn("pointer-events-none absolute -inset-16 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accentBg(mission.accent))} />

      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-black/35">
        <Image
          src={src}
          alt={mission.title}
          fill
          sizes="220px"
          className="object-cover transition duration-500 ease-out"
          priority={false}
        />
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
    "group relative flex min-w-[min(11.5rem,68vw)] max-w-[13rem] shrink-0 snap-start flex-col overflow-hidden rounded-lg border bg-white/[0.04] backdrop-blur-xl transition",
    "border-white/12 hover:-translate-y-0.5 hover:border-white/22 hover:shadow-md hover:shadow-black/45",
    "ring-1 ring-transparent hover:ring-white/5"
  )

  if (embedUrl) {
    return (
      <>
        <button type="button" onClick={() => setEmbedOpen(true)} className={cn(cardClass, "cursor-pointer text-left")}>
          {cardInner}
        </button>

        <Dialog open={embedOpen} onOpenChange={onDialogChange}>
          <DialogContent className="max-h-[90vh] max-w-[min(96vw,920px)] gap-0 overflow-hidden border-white/15 bg-[#0b0b12] p-0">
            <DialogHeader className="flex flex-row items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <DialogTitle className="truncate pr-8 text-left text-sm font-semibold text-slate-100">
                {mission.title}
              </DialogTitle>
              <button
                type="button"
                className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close and open project page"
                onClick={() => onDialogChange(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </DialogHeader>
            <div className="relative min-h-[min(78vh,720px)] w-full bg-black/40">
              <iframe
                title={mission.title}
                src={embedUrl}
                className="h-[min(78vh,720px)] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="border-t border-white/10 px-4 py-2 text-[11px] text-slate-500">
                If the embed is blank, Notion may block iframes — use the project page &quot;View more&quot; link instead.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <Link href={mission.href} className={cardClass}>
      {cardInner}
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
