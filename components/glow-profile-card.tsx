"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type GlowProfileCardProps = {
  className?: string
  children: React.ReactNode
}

/** Glass card with hover border glow + mouse-follow spotlight (CSS vars --x / --y). */
export function GlowProfileCard({ className, children }: GlowProfileCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const setSpot = React.useCallback((clientX: number, clientY: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--x", `${clientX - r.left}px`)
    el.style.setProperty("--y", `${clientY - r.top}px`)
  }, [])

  const onMove = (e: React.MouseEvent) => setSpot(e.clientX, e.clientY)

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--x", `${r.width * 0.5}px`)
    el.style.setProperty("--y", `${r.height * 0.35}px`)
  }

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--x", `${r.width * 0.5}px`)
    el.style.setProperty("--y", `${r.height * 0.35}px`)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative max-w-sm overflow-hidden rounded-2xl",
        "bg-[linear-gradient(155deg,rgba(99,102,241,0.12),rgba(15,15,22,0.92))]",
        "p-6 text-center shadow-[0_20px_56px_rgba(0,0,0,0.55)] backdrop-blur-[22px]",
        "ring-1 ring-indigo-400/20 transition duration-300 ease-out will-change-transform",
        "hover:-translate-y-2 hover:scale-[1.02] hover:ring-fuchsia-400/35",
        "hover:shadow-[0_0_28px_rgba(167,139,250,0.35),0_0_70px_rgba(56,189,248,0.12)]",
        className
      )}
      style={
        {
          ["--x" as string]: "50%",
          ["--y" as string]: "35%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x) var(--y), rgba(255,255,255,0.14), transparent 42%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(18,18,28,0.55)]" />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
