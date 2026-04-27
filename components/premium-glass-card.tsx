"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { playCardClick } from "@/lib/sound"

type PremiumGlassCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  tiltMaxDeg?: number
  children?: React.ReactNode
}

export const PremiumGlassCard = React.forwardRef<HTMLDivElement, PremiumGlassCardProps>(
  ({ className, tiltMaxDeg = 6, onMouseMove, onMouseLeave, onClick, ...props }, ref) => {
    const localRef = React.useRef<HTMLDivElement | null>(null)

    const setRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        localRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref) ref.current = node
      },
      [ref]
    )

    return (
      <div
        ref={setRef}
        className={cn("premium-glass-card", className)}
        onMouseMove={(e) => {
          const el = localRef.current
          if (!el) return

          const rect = el.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const px = x / rect.width
          const py = y / rect.height

          const ry = (px - 0.5) * 2 * tiltMaxDeg
          const rx = -(py - 0.5) * 2 * tiltMaxDeg

          el.style.setProperty("--pgc-rx", `${rx.toFixed(3)}deg`)
          el.style.setProperty("--pgc-ry", `${ry.toFixed(3)}deg`)
          el.style.setProperty("--pgc-mx", `${(px * 100).toFixed(2)}%`)
          el.style.setProperty("--pgc-my", `${(py * 100).toFixed(2)}%`)

          onMouseMove?.(e)
        }}
        onMouseLeave={(e) => {
          const el = localRef.current
          if (el) {
            el.style.setProperty("--pgc-rx", `0deg`)
            el.style.setProperty("--pgc-ry", `0deg`)
            el.style.setProperty("--pgc-mx", `50%`)
            el.style.setProperty("--pgc-my", `50%`)
          }
          onMouseLeave?.(e)
        }}
        onClick={(e) => {
          playCardClick()
          onClick?.(e)
        }}
        {...props}
      >
        <span aria-hidden="true" className="premium-glass-noise" />
        <span aria-hidden="true" className="premium-glass-meteor" />
        {props.children}
      </div>
    )
  }
)

PremiumGlassCard.displayName = "PremiumGlassCard"

