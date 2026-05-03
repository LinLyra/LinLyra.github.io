"use client"

import { createElement, type ReactNode } from "react"
import "@dotlottie/player-component"

import { cn } from "@/lib/utils"

type SearchAnimationStripProps = {
  src: string
  alt: string
  side?: "left" | "right"
  className?: string
  animationClassName?: string
  children: ReactNode
}

function DotLottiePlayer({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return createElement("dotlottie-player" as any, {
    src,
    autoplay: true,
    loop: true,
    renderer: "svg",
    background: "transparent",
    className,
    "aria-label": alt,
    role: "img",
    style: {
      width: "100%",
      height: "100%",
      display: "block",
    },
  })
}

export function SearchAnimationStrip({
  src,
  alt,
  side = "left",
  className,
  animationClassName,
  children,
}: SearchAnimationStripProps) {
  const isLeft = side === "left"

  return (
    <div className={cn("mb-8", className)}>
      <div
        className={cn(
          "flex flex-col gap-4 md:items-center md:gap-6",
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div
          className={cn(
            "mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_0_28px_rgba(255,255,255,0.06)] backdrop-blur-md md:mx-0 md:h-40 md:w-40 md:max-w-none",
            animationClassName
          )}
        >
          <DotLottiePlayer
            src={src}
            alt={alt}
            className="h-full w-full"
          />
        </div>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  )
}
