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
        "pointer-events-none absolute top-[430px] z-10 hidden md:block",
        side === "left" ? "left-0" : "right-0",
        className
      )}
    >
      {ready ? (
        <dotlottie-player
          src={src}
          autoplay
          loop
          renderer="svg"
          background="transparent"
          aria-label={alt}
          role="img"
          className={cn("h-36 w-36 lg:h-40 lg:w-40", boxClassName)}
          style={{ display: "block" }}
        />
      ) : (
        <div className={cn("h-36 w-36 lg:h-40 lg:w-40", boxClassName)} />
      )}
    </div>
  )
}
