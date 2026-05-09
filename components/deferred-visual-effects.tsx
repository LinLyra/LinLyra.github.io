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

    // If intro is playing, wait until it has been marked played.
    const introPlayed = (() => {
      try {
        return sessionStorage.getItem("introPlayed") === "1"
      } catch {
        return false
      }
    })()

    const start = () => setEnable(true)

    if (introPlayed) {
      // Defer to idle so we don't compete with first paint.
      const ric = (window as any).requestIdleCallback as
        | ((cb: () => void, opts?: { timeout: number }) => number)
        | undefined
      if (ric) {
        const id = ric(start, { timeout: 1200 })
        return () => (window as any).cancelIdleCallback?.(id)
      }
      const t = window.setTimeout(start, 400)
      return () => window.clearTimeout(t)
    }

    // Poll briefly for intro end (it sets sessionStorage).
    const t = window.setInterval(() => {
      try {
        if (sessionStorage.getItem("introPlayed") === "1") {
          window.clearInterval(t)
          start()
        }
      } catch {
        // ignore
      }
    }, 200)
    // No IntroSplash in tree → introPlayed may never flip; cap wait so WebGL still loads.
    const hard = window.setTimeout(() => {
      window.clearInterval(t)
      start()
    }, 2000)

    return () => {
      window.clearInterval(t)
      window.clearTimeout(hard)
    }
  }, [])

  if (!enable) return null

  return (
    <>
      <GalaxyBackground />
      <CursorTrail />
    </>
  )
}

