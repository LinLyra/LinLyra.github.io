"use client"

import dynamic from "next/dynamic"
import * as React from "react"

const GalaxyBackground = dynamic(() => import("@/components/galaxy-background"), {
  ssr: false,
  loading: () => null,
})

const CursorTrail = dynamic(
  () => import("@/components/cursor-trail").then((m) => m.CursorTrail),
  { ssr: false, loading: () => null },
)

function shouldSkipHeavy(): boolean {
  if (typeof window === "undefined") return true
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  // Only show always-on effects on desktop-like pointers.
  const fine = window.matchMedia?.("(pointer: fine)")?.matches
  const hover = window.matchMedia?.("(hover: hover)")?.matches
  // Save-Data users and slow connections should avoid always-on WebGL.
  const conn = (navigator as any).connection as
    | { saveData?: boolean; effectiveType?: string }
    | undefined
  const saveData = !!conn?.saveData
  const slow = conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g"
  return !!reduced || !fine || !hover || saveData || slow
}

export function DeferredVisualEffects() {
  const [enable, setEnable] = React.useState(false)

  React.useEffect(() => {
    if (shouldSkipHeavy()) return

    // Mount right after first paint so the galaxy feels "synchronous",
    // but still doesn't block initial render.
    const id = window.requestAnimationFrame(() => setEnable(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  if (!enable) return null

  return (
    <>
      <GalaxyBackground />
      <CursorTrail />
    </>
  )
}

