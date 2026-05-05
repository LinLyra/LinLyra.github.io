"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, X } from "lucide-react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { PageCornerLottie } from "@/components/page-corner-lottie"
import { ScrollReveal } from "@/components/scroll-reveal"

import { learningItems, type LearningItem } from "@/lib/learning-items"

export default function LearningPage() {
  const [q, setQ] = useState("")

  const items: LearningItem[] = learningItems


  const filtered = items.filter((it) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [it.title, it.institution, ...(it.tags ?? [])].join(" ").toLowerCase()
    const hit = tokens.length === 0 || tokens.every(t => hay.includes(t))
    return hit
  })


  const tagSuggestions = useMemo(
    () => ["Python", "SQL", "GenAI", "MLOps", "Cloud", "Databases", "Time Series", "Optimisation"],
    []
  )

  const toggleToken = (token: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const next = cur.includes(token) ? cur.filter(t => t !== token) : [...cur, token]
    setQ(next.join(" "))
  }
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "168 85 247",
          ["--pgc-glow-b" as any]: "217 70 239",
        } as React.CSSProperties
      }
    >
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 backdrop-blur-md border-purple-400/30 text-white hover:bg-purple-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Learning</h1>
            <p className="text-gray-300">Expanding my universe through learning.</p>
          </div>

          <PageCornerLottie
            side="left"
            className="top-[192px]"
            src="/animations/victory-sign-baby-astronaut.lottie"
            alt="Victory sign baby astronaut animation"
          />

          <div className="mb-8 space-y-4">
            <div className="relative mx-auto max-w-xl">
              <Input
                placeholder="Search by code / title / institution / tag…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-purple-400/30 text-gray-100 placeholder:text-gray-400 pr-10 text-sm md:text-base"
              />
              {q && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 text-gray-300"
                  onClick={() => setQ("")}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {tagSuggestions.map((t) => {
                const active = hasToken(t)
                return (
                  <span
                    key={t}
                    onClick={() => toggleToken(t)}
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
                      (active
                        ? "bg-purple-500/30 border-purple-400/40 text-purple-100"
                        : "bg-fuchsia-500/10 border-fuchsia-400/30 text-fuchsia-200 hover:bg-fuchsia-500/20")
                    }
                  >
                    {t}
                  </span>
                )
              })}
            </div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it, idx) => {
              const statusClass =
                it.status === "completed"
                  ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
                  : it.status === "planned"
                    ? "bg-white/5 text-gray-200 border-white/10"
                    : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

              return (
                <ScrollReveal
                  key={it.slug}
                  variant="soft"
                  delayMs={Math.min(idx, 12) * 45}
                  className="h-full"
                >
                  <Link href={`/learning/${it.slug}`} className="block h-full">
                    <PremiumGlassCard
                      tiltMaxDeg={5}
                      className="relative h-full min-h-[260px] bg-black/25 backdrop-blur-xl border border-purple-400/20 hover:bg-black/30 transition-all overflow-hidden shadow-[0_0_26px_rgba(168,85,247,0.10)] hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(217,70,239,0.14)]"
                    >
                      <div className="absolute right-3 top-2 z-20">
                        <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm whitespace-nowrap ${statusClass}`}>
                          {it.status === "completed"
                            ? "Completed"
                            : it.status === "planned"
                              ? "Planned"
                              : "In Progress"}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 p-5 pt-10">
                        <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                          <Image
                            src={it.logo}
                            alt={`${it.title} logo`}
                            fill
                            sizes="48px"
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-base font-semibold leading-snug line-clamp-2">
                            {it.title}
                          </div>
                          <div className="mt-1 text-gray-400 text-sm inline-flex items-center gap-2">
                            <span>{it.institution}</span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {it.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 pb-5 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {(it.tags ?? []).slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-purple-500/20 text-purple-100 border border-purple-500/30 whitespace-nowrap"
                            >
                              {t}
                            </span>
                          ))}
                          {(it.level === "postgrad" || it.audited) && (
                            <div className="ml-auto flex gap-2">
                              {it.level === "postgrad" && (
                                <span className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-white/5 text-gray-200 border border-white/10 whitespace-nowrap">
                                  Postgraduate
                                </span>
                              )}
                              {it.audited && (
                                <span className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-white/5 text-gray-200 border border-white/10 whitespace-nowrap">
                                  Audited
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </PremiumGlassCard>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
