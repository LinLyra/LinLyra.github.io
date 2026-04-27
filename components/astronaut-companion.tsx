"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Sparkles } from "lucide-react"

type Pose = {
  id: string
  label: string
  src: string
  speech: string
}

export function AstronautCompanion() {
  const poses: Pose[] = useMemo(
    () => [
      {
        id: "idle",
        label: "Float",
        src: "/astronaut/astronaut-idle.png",
        speech: "Click me and I will switch poses.",
      },
      {
        id: "wave",
        label: "Wave",
        src: "/astronaut/astronaut-wave.png",
        speech: "Hello. I can greet your visitors.",
      },
      {
        id: "point",
        label: "Point",
        src: "/astronaut/astronaut-point.png",
        speech: "I can point at your projects.",
      },
      {
        id: "thumbs",
        label: "Thumbs Up",
        src: "/astronaut/astronaut-thumbs.png",
        speech: "Good pick. This one feels launch-ready.",
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const active = poses[activeIndex]

  const nextPose = () => setActiveIndex((i) => (i + 1) % poses.length)

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,20,0.92),rgba(6,12,28,0.84))] p-4 shadow-[0_0_40px_rgba(99,102,241,0.14)] backdrop-blur-2xl sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(125,211,252,0.12),transparent_24%),radial-gradient(circle_at_74%_66%,rgba(217,70,239,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.72)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />

      <div className="relative flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.24em] text-white/55">ASTRONAUT COMPANION</div>
          <div className="mt-1 text-xl font-semibold text-gray-100">A friendly pose switcher</div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70">
          <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
          Click to change
        </span>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,31,0.96),rgba(5,8,20,0.98))] p-4 transition hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(12,20,38,0.96),rgba(7,10,24,0.98))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.12),transparent_38%)] opacity-90" />
        <div className="relative grid gap-4 md:grid-cols-[1fr_1.05fr] md:items-center">
          <button
            type="button"
            onClick={nextPose}
            className="astronaut-float relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_26%,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_38%),linear-gradient(180deg,rgba(10,16,30,0.96),rgba(4,8,18,0.98))] text-left transition hover:border-white/20"
            aria-label={`Switch astronaut pose: ${active.label}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(59,130,246,0.12),transparent_55%)]" />
            <Image
              src={active.src}
              alt={active.label}
              fill
              priority
              sizes="(max-width: 768px) 92vw, 420px"
              className="object-contain p-4 transition duration-300 hover:scale-[1.01]"
              style={{ filter: "drop-shadow(0 0 24px rgba(125,211,252,0.18))" }}
            />
          </button>

          <div className="flex h-full flex-col justify-center gap-4">
            <div className="inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              {active.label}
            </div>

            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/24 p-4">
              <div className="absolute -left-3 top-4 h-6 w-6 rotate-45 border-l border-t border-white/10 bg-black/24" />
              <p className="text-sm leading-6 text-gray-200">{active.speech}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {poses.map((pose, index) => {
                const selected = index === activeIndex
                return (
                  <button
                    type="button"
                    key={pose.id}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full border px-3 py-2 text-center text-xs font-medium transition ${
                      selected
                        ? "border-cyan-300/30 bg-cyan-300/12 text-cyan-100"
                        : "border-white/10 bg-white/[0.03] text-white/65 hover:bg-white/[0.06]"
                    }`}
                    aria-pressed={selected}
                    aria-label={`Switch to ${pose.label} pose`}
                  >
                    {pose.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
