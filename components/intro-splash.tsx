"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type IntroSplashProps = {
  children: React.ReactNode
}

function shouldSkipIntro(): boolean {
  if (typeof window === "undefined") return true
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  return !!reduced
}

export function IntroSplash({ children }: IntroSplashProps) {
  const [show, setShow] = useState(false)
  const [shattering, setShattering] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const vRef = useRef<HTMLVideoElement | null>(null)
  const progressTimersRef = useRef<number[]>([])

  // Show intro on mobile/iPad too; only skip for reduced-motion users.
  const enabled = useMemo(() => !shouldSkipIntro(), [])

  useEffect(() => {
    if (!enabled) return
    if (typeof window === "undefined") return
    const played = sessionStorage.getItem("introPlayed")
    if (played === "1") return
    setShow(true)
  }, [enabled])

  useEffect(() => {
    if (!show) return
    if (typeof window === "undefined") return

    const v = vRef.current
    setVideoReady(false)
    setProgress(0)
    progressTimersRef.current.forEach((t) => window.clearTimeout(t))
    progressTimersRef.current = []
    const hardTimeout = window.setTimeout(() => beginExit(), 4200)

    const onEnded = () => beginExit()
    const onLoaded = () => setVideoReady(true)
    v?.addEventListener("ended", onEnded)
    v?.addEventListener("loadeddata", onLoaded)

    // Aggressive load to get first frame earlier.
    try {
      v?.load()
    } catch {}

    // Try to autoplay (muted + playsInline). If blocked, skip quickly.
    v?.play().catch(() => {
      window.setTimeout(() => beginExit(), 400)
    })

    return () => {
      window.clearTimeout(hardTimeout)
      v?.removeEventListener("ended", onEnded)
      v?.removeEventListener("loadeddata", onLoaded)
      progressTimersRef.current.forEach((t) => window.clearTimeout(t))
      progressTimersRef.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  useEffect(() => {
    if (!show) return
    if (!videoReady) return
    if (typeof window === "undefined") return

    // Start fake progress only after first frame is available.
    const milestones: Array<[number, number]> = [
      [0, 0],
      [260, 12],
      [690, 27],
      [1120, 43],
      [1900, 68],
      [2820, 91],
      [3500, 100],
    ]
    progressTimersRef.current.forEach((t) => window.clearTimeout(t))
    progressTimersRef.current = milestones.map(([ms, val]) =>
      window.setTimeout(() => setProgress(val), ms),
    )

    return () => {
      progressTimersRef.current.forEach((t) => window.clearTimeout(t))
      progressTimersRef.current = []
    }
  }, [show, videoReady])

  const beginExit = () => {
    if (shattering) return
    setShattering(true)
    try {
      sessionStorage.setItem("introPlayed", "1")
    } catch {}
    window.setTimeout(() => {
      setShow(false)
      setShattering(false)
      setRevealing(true)
    }, 1250)
    window.setTimeout(() => {
      setRevealing(false)
    }, 1900)
  }

  return (
    <>
      <div className={cn("intro-revealTarget", revealing && "intro-revealTarget--on")}>
        {children}
      </div>
      {show ? (
        <div
          className={cn(
            "intro-splash",
            shattering && "intro-splash--shatter",
          )}
          aria-hidden
        >
          <video
            ref={vRef}
            className={cn("intro-splash__video", !videoReady && "intro-splash__video--hidden")}
            autoPlay
            muted
            playsInline
            preload="auto"
          >
            <source src="/intro/intro.webm" type="video/webm" />
            <source src="/intro/intro.mp4" type="video/mp4" />
          </video>
          {!videoReady ? <div className="intro-splash__fallback" aria-hidden /> : null}
          <div className="intro-splash__hud" aria-hidden>
            <div className="intro-splash__bar">
              <span className="intro-splash__barFill" style={{ width: `${progress}%` }} />
            </div>
            <div className="intro-splash__pct">{progress}%</div>
          </div>
          <button
            type="button"
            className="intro-splash__skip"
            onClick={beginExit}
            aria-label="Skip intro"
          >
            Skip
          </button>
          <div className="intro-splash__glass" />
        </div>
      ) : null}
    </>
  )
}

