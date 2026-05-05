"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useLowPowerWebGL } from "@/lib/use-low-power-webgl"

type IntroSplashProps = {
  children: React.ReactNode
}

function shouldSkipIntro(): boolean {
  if (typeof window === "undefined") return true
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  return !!reduced
}

export function IntroSplash({ children }: IntroSplashProps) {
  const lowPower = useLowPowerWebGL()
  const [show, setShow] = useState(false)
  const [shattering, setShattering] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const [progress, setProgress] = useState(0)
  const vRef = useRef<HTMLVideoElement | null>(null)

  // Show intro on mobile/iPad too; only skip for reduced-motion users.
  // (We keep lowPower around for future tuning, but don't auto-disable the intro.)
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
    setProgress(0)
    const hardTimeout = window.setTimeout(() => beginExit(), 4200)

    const onEnded = () => beginExit()
    v?.addEventListener("ended", onEnded)

    // Fake progress milestones across ~4s
    const milestones: Array<[number, number]> = [
      [0, 0],
      [280, 12],
      [720, 27],
      [1180, 43],
      [1980, 68],
      [2920, 91],
      [3600, 100],
    ]
    const timers = milestones.map(([ms, val]) =>
      window.setTimeout(() => setProgress(val), ms),
    )

    // Try to autoplay (muted + playsInline). If blocked, skip quickly.
    v?.play().catch(() => {
      window.setTimeout(() => beginExit(), 400)
    })

    return () => {
      window.clearTimeout(hardTimeout)
      v?.removeEventListener("ended", onEnded)
      timers.forEach((t) => window.clearTimeout(t))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

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
    }, 3600)
  }

  return (
    <>
      <div className={cn("intro-revealTarget", revealing && "intro-revealTarget--on")}>
        {children}
      </div>
      {revealing ? (
        <div className="intro-rebirth" aria-hidden>
          <span className="intro-rebirth__scan" />
          <span className="intro-rebirth__shard intro-rebirth__shard--1" />
          <span className="intro-rebirth__shard intro-rebirth__shard--2" />
          <span className="intro-rebirth__shard intro-rebirth__shard--3" />
          <span className="intro-rebirth__shard intro-rebirth__shard--4" />
          <span className="intro-rebirth__shard intro-rebirth__shard--5" />
          <span className="intro-rebirth__shard intro-rebirth__shard--6" />
          <span className="intro-rebirth__shard intro-rebirth__shard--7" />
          <span className="intro-rebirth__shard intro-rebirth__shard--8" />
        </div>
      ) : null}
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
            className="intro-splash__video"
            autoPlay
            muted
            playsInline
            preload="auto"
          >
            <source src="/intro/intro.webm" type="video/webm" />
            <source src="/intro/intro.mp4" type="video/mp4" />
          </video>
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

