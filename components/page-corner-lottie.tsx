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
        "pointer-events-none absolute top-[152px] z-10 hidden xl:block",
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
          className={cn("h-20 w-20", boxClassName)}
          style={{
            display: "block",
            width: "5rem",
            height: "5rem",
            maxWidth: "5rem",
            maxHeight: "5rem",
            transform: "scale(0.68)",
            transformOrigin: side === "left" ? "top left" : "top right",
          }}
        />
      ) : (
        <div
          className={cn("h-20 w-20", boxClassName)}
          style={{ width: "5rem", height: "5rem" }}
        />
      )}
    </div>
  )
}
