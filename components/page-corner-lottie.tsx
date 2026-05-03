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
        "pointer-events-none absolute top-[128px] z-10 hidden lg:block",
        side === "left"
          ? "left-[max(1rem,calc(50%-36rem-6.5rem))]"
          : "right-[max(1rem,calc(50%-36rem-6.5rem))]",
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
          className={cn("h-48 w-48 2xl:h-52 2xl:w-52", boxClassName)}
          style={{
            display: "block",
            width: "12rem",
            height: "12rem",
            maxWidth: "12rem",
            maxHeight: "12rem",
            transformOrigin: side === "left" ? "top left" : "top right",
          }}
        />
      ) : (
        <div
          className={cn("h-48 w-48 2xl:h-52 2xl:w-52", boxClassName)}
          style={{ width: "12rem", height: "12rem" }}
        />
      )}
    </div>
  )
}
