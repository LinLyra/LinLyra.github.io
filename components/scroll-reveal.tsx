"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * "soft" is subtle for premium feel.
   * Avoid large transforms for readability/perf.
   */
  variant?: "soft" | "up" | "scale"
  /**
   * Delay in ms, useful for staggered grids.
   */
  delayMs?: number
}

export function ScrollReveal({
  className,
  children,
  variant = "soft",
  delayMs = 0,
  ...props
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion and avoid any heavy effects on touch-only devices.
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduced) {
      setShown(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e?.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "60px 0px -10% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        variant === "soft" && "reveal--soft",
        variant === "up" && "reveal--up",
        variant === "scale" && "reveal--scale",
        shown && "reveal--shown",
        className
      )}
      style={{ ["--reveal-delay" as any]: `${delayMs}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

