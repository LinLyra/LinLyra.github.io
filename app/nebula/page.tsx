"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MapPin, X } from "lucide-react"
import Link from "next/link"

type ActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  summary: string
  cover: string
  location?: string
  link?: string
}

export default function NebulaPage() {
  const [q, setQ] = useState("")

  const activities: ActivityItem[] = [
    { slug: "rabobank-office-tour", title: "Office Tour — Rabobank Australia", org: "Rabobank", date: "2025.08", summary: "Banking tech stack, risk systems, and a peek into product operations.", cover: "/activities/rabobank.png", location: "Rabobank office" },
    { slug: "ey-applicants-interviews", title: "EY Presents: Applicants and Interviews", org: "EY", date: "2025.08", summary: "Insights on EY application processes, interview prep, and career pathways.", cover: "/activities/EY.png", location: "Campus" },
    { slug: "gurobi-community-meetup", title: "Gurobi Community Meetup", org: "Gurobi", date: "2025.08", summary: "Optimisation case studies: LP/IP modeling, solver tuning, and applications.", cover: "/activities/gurobi.png", location: "Swiss Hotel" },
    { slug: "microsoft-chat-and-hack", title: "Chat & Hack: Microsoft Careers Day (On Campus)", org: "Microsoft", date: "2025.03", summary: "Career chats, hack-style demos, and routes into product & engineering.", cover: "/activities/microsoft.png", location: "Campus" },
    { slug: "bain-career-in-consulting", title: "A Career in Consulting with Bain & Company", org: "Bain & Company", date: "2025.03", summary: "Pathways into strategy consulting, recruiting tips, and day-in-the-life insights.", cover: "/activities/bain.png", location: "Campus" },
    { slug: "hongkong-flow-trader", title: "Hongkong Flow Trader", org: "Industry Insights", date: "2025.03", summary: "Flow trading landscape, pricing, risk, and life on the trading floor.", cover: "/activities/flow.png", location: "Campus" },
    { slug: "ai-power-struggle-regulation", title: "The AI Power Struggle: China, the US and the Future of Regulation", org: "Policy & Governance", date: "2025.04", summary: "Global AI regulation, safety vs. innovation, cross-border governance trends.", cover: "/activities/ai.png", location: "Campus" },
    { slug: "rhombus-ai-workshop", title: "AI Workshop with Rhombus AI", org: "Rhombus AI", date: "2025.04", summary: "Hands-on with LLM tooling, data pipelines, and prompt workflows.", cover: "/activities/rhombus.png", location: "Campus" },
    { slug: "faculty-stem-panel", title: "Faculty of Science STEM Panel Discussion", org: "Faculty of Science", date: "2024.08", summary: "Panel discussion on STEM careers, research opportunities, and student pathways.", cover: "/activities/stem.png", location: "Campus" },
    { slug: "linkedin-all-star-profile", title: "LinkedIn: Building an All-Star Profile", org: "Career Center", date: "2024.08", summary: "Profile optimisation, storytelling, and networking best practices.", cover: "/activities/linkedin.png", location: "Campus" },
    { slug: "city2surf-volunteer", title: "City2Surf Marathon Volunteer", org: "City2Surf", date: "2024.08", summary: "Supported race logistics, assisted in crowd management and final medal distribution.", cover: "/activities/city2.png", location: "Bondi Beach" },
    { slug: "mid-autumn-gala", title: "Mid-Autumn Festival Gala Volunteer", org: "Chinese-Australian Association", date: "2024.09", summary: "Assisted in event coordination, guest reception.", cover: "/activities/mid.png", location: "Town Hall" },
    { slug: "usu", title: "USU Volunteer", org: "University of Sydney Union (USU)", date: "2025.04 - Present", summary: "Contributed to student life by supporting campus events, and engaging with diverse student communities.", cover: "/activities/usu.png", location: "Campus" },
  ]

  // AND 搜索
  const filtered = activities.filter((a) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [a.title, a.org, a.summary ?? "", a.location ?? ""].join(" ").toLowerCase()
    return tokens.length === 0 || tokens.every(t => hay.includes(t))
  })

  const keywordChips = useMemo(() => ["Volunteer", "Networking", "Talks"], [])
  const toggleToken = (token: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const next = cur.includes(token) ? cur.filter(t => t !== token) : [...cur, token]
    setQ(next.join(" "))
  }
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="nebula" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          {/* 顶部保持不变 */}
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-3 text-4xl font-bold text-gray-100">Nebula</h1>
            <p className="text-gray-200">
              Reflections beyond the core — volunteering, networking and talks I attend.
            </p>
          </div>

          {/* 搜索 + 关键词 */}
          <div className="mb-6 space-y-4">
            <div className="relative mx-auto max-w-xl">
              <Input
                placeholder="Search by title, organization, place, or keyword (volunteer / networking / talks)…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-red-400/30 text-gray-100 placeholder:text-gray-400 pr-10"
              />
              {q && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-300 hover:bg-white/10"
                  onClick={() => setQ("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {keywordChips.map((t) => {
                const active = hasToken(t)
                return (
                  <span
                    key={t}
                    onClick={() => toggleToken(t)}
                    className={
                      "inline-flex h-7 cursor-pointer items-center rounded-full border px-3 text-sm whitespace-nowrap " +
                      (active
                        ? "bg-red-500/30 border-red-400/40 text-red-100"
                        : "bg-black/30 text-gray-200 border-red-400/20 hover:bg-red-500/10")
                    }
                  >
                    {t}
                  </span>
                )
              })}
            </div>
          </div>

          {/* 四列小卡片｜不可点击 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((a) => (
              <Card
                key={a.slug}
                className="overflow-hidden border-red-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40"
              >
                {/* 统一比例封面（16:9），小卡片视觉 */}
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={a.cover || "/placeholder.svg"}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-400">
                    <span className="truncate">{a.org}</span>
                    <span>{a.date}</span>
                  </div>
                  <CardTitle className="line-clamp-1 text-base text-gray-100">{a.title}</CardTitle>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-400">
                    {a.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {a.location}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {a.summary && (
                    <p className="line-clamp-3 text-sm text-gray-200">{a.summary}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 轻提示：相册模式，不提供详情页 */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-400">
            Snapshots only — if you’d like the stories behind any event or my takeaways,
            ping me for a coffee chat ☕.
          </p>
        </div>
      </div>
    </div>
  )
}


