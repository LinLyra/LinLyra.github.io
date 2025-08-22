"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, MapPin, X } from "lucide-react"

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

  // 你的活动数据（原样保留）
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
    
    // --- 志愿者类活动，排在最后 ---
    { slug: "city2surf-volunteer", title: "City2Surf Marathon Volunteer", org: "City2Surf", date: "2024.08", summary: "Supported race logistics, assisted in crowd management and final medal distribution.", cover: "/activities/city2.png", location: "Bondi Beach" },
    { slug: "mid-autumn-gala", title: "Mid-Autumn Festival Gala Volunteer", org: "Chinese-Australian Association", date: "2024.09", summary: "Assisted in event coordination, guest reception.", cover: "/activities/mid.png", location: "Town Hall" },
    { slug: "usu", title: "USU Volunteer", org: "University of Sydney Union (USU)", date: "2025.04 - Present", summary: "Contributed to student life by supporting campus events, and engaging with diverse student communities.", cover: "/activities/usu.png", location: "Campus" },
  ]

  // 搜索（多关键词 AND）
  const filtered = activities.filter((a) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [a.title, a.org, a.summary ?? "", a.location ?? ""].join(" ").toLowerCase()
    return tokens.length === 0 || tokens.every(t => hay.includes(t))
  })

  // 搜索下方关键词（改成你说的范围）
  const keywordChips = useMemo(
    () => ["Volunteer", "Networking", "Talks"],
    []
  )
  const toggleToken = (token: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const next = cur.includes(token) ? cur.filter(t => t !== token) : [...cur, token]
    setQ(next.join(" "))
  }
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div className="relative min-h-screen">
      {/* Nebula 星球对应的红色主题 */}
      <Navigation activeSection="nebula" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          {/* 标题 + 一句话描述（按你的文案） */}
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-3">Nebula</h1>
            <p className="text-gray-200">
              Reflections beyond the core — volunteering, networking and talks I attend.
            </p>
          </div>

          {/* 搜索 + 关键词（红色主题） */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by title, organization, place, or keyword (volunteer / networking / talks)…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-red-400/30 text-gray-100 placeholder:text-gray-400 pr-10"
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

            <div className="flex flex-wrap gap-2 justify-center">
              {keywordChips.map((t) => {
                const active = hasToken(t)
                return (
                  <span
                    key={t}
                    onClick={() => toggleToken(t)}
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
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

          {/* 卡片列表（保留你原来的布局） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/nebula/${a.slug}`} className="block">
                <Card className="bg-black/30 backdrop-blur-md border-red-400/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  {/* 顶部封面 */}
                  <div className="relative h-44 w-full">
                    <img
                      src={a.cover || "/placeholder.svg"}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{a.org}</span>
                      <span className="text-gray-400 text-sm">{a.date}</span>
                    </div>
                    <CardTitle className="text-gray-100 text-lg mb-1 line-clamp-1">{a.title}</CardTitle>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      {a.location && (
                        <div className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {a.location}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {a.summary && <p className="text-gray-200 text-sm line-clamp-3">{a.summary}</p>}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

