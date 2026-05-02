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
        "group relative max-w-sm overflow-hidden rounded-2xl border border-white/12",
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))]",
        "p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-[20px]",
        "transition duration-300 ease-out will-change-transform",
        "hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-400/55",
        "hover:shadow-[0_0_22px_rgba(129,140,248,0.45),0_0_60px_rgba(129,140,248,0.18)]",
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
