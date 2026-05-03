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
          ? "left-[max(1rem,calc(50%-36rem-5.5rem))]"
          : "right-[max(1rem,calc(50%-36rem-5.5rem))]",
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
          className={cn("h-52 w-52 2xl:h-56 2xl:w-56", boxClassName)}
          style={{
            display: "block",
            width: "13rem",
            height: "13rem",
            maxWidth: "13rem",
            maxHeight: "13rem",
            transformOrigin: side === "left" ? "top left" : "top right",
          }}
        />
      ) : (
        <div
          className={cn("h-52 w-52 2xl:h-56 2xl:w-56", boxClassName)}
          style={{ width: "13rem", height: "13rem" }}
        />
      )}
    </div>
  )
}
