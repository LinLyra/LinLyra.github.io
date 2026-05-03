"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type PageCornerLottieProps = {
  src: string
  alt: string
  side?: "left" | "right"
  className?: string
  boxClassName?: string
}

export function PageCornerLottie({
  src,
  alt,
  side = "left",
  className,
  boxClassName,
}: PageCornerLottieProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true

    import("@dotlottie/player-component").then(() => {
      if (active) setReady(true)
    })

    return () => {
      active = false
    }
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 z-10 hidden md:block",
        side === "left" ? "left-0" : "right-0",
        className
      )}
    >
      <div
        className={cn(
          "flex h-32 w-32 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-[0_0_28px_rgba(255,255,255,0.06)] backdrop-blur-md lg:h-36 lg:w-36",
          boxClassName
        )}
        aria-label={alt}
      >
        {ready ? (
          <dotlottie-player
            src={src}
            autoplay
            loop
            renderer="svg"
            background="transparent"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        ) : (
          <div className="h-full w-full rounded-[1.1rem] bg-white/5" />
        )}
      </div>
    </div>
  )
}
