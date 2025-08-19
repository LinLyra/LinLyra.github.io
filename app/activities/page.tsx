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
  cover: string           // /activities/<slug>/cover.jpg (建议放照片)
  location?: string
  link?: string
  // 不再显示 type/tags
}

export default function ActivitiesPage() {
  const [q, setQ] = useState("")

  // -------- 你的 10 个活动（按需继续补充）--------
  // 把对应的封面图放到 /public/activities/<slug>/cover.jpg
  const activities: ActivityItem[] = [
    {
      slug: "rabobank-office-tour",
      title: "Office Tour — Rabobank Australia",
      org: "Rabobank",
      date: "2025.08",
      summary: "Banking tech stack, risk systems, and a peek into product operations.",
      cover: "/activities/rabobankcover.jpg",
      location: "Rabobank office"
    },
    {
      slug: "gurobi-community-meetup",
      title: "Gurobi Community Meetup",
      org: "Gurobi",
      date: "2025.08",
      summary: "Optimisation case studies: LP/IP modeling, solver tuning, and applications.",
      cover: "/activities/gurobicover.jpg",
      location: "Swiss Hotel"
    },
    {
      slug: "linkedin-all-star-profile",
      title: "LinkedIn: Building an All-Star Profile",
      org: "Career Center",
      date: "2024.08",
      summary: "Profile optimisation, storytelling, and networking best practices.",
      cover: "/activities/linkedincover.jpg",
      location: "Campus"
    },
    {
      slug: "microsoft-chat-and-hack",
      title: "Chat & Hack: Microsoft Careers Day (On Campus)",
      org: "Microsoft",
      date: "2025.03",
      summary: "Career chats, hack-style demos, and routes into product & engineering.",
      cover: "/activities/microsoftcover.jpg",
      location: "Campus"
    },
    {
      slug: "bain-career-in-consulting",
      title: "A Career in Consulting with Bain & Company",
      org: "Bain & Company",
      date: "2025.03",
      summary: "Pathways into strategy consulting, recruiting tips, and day-in-the-life insights.",
      cover: "/activities/baincover.jpg",
      location: "Campus"
    },
    {
      slug: "hongkong-flow-trader",
      title: "Hongkong Flow Trader",
      org: "Industry Insights",
      date: "2025.03",
      summary: "Flow trading landscape, pricing, risk, and life on the trading floor.",
      cover: "/activities/flowcover.jpg",
      location: "Campus"
    },
    {
      slug: "ai-power-struggle-regulation",
      title: "The AI Power Struggle: China, the US and the Future of Regulation",
      org: "Policy & Governance",
      date: "2025.04",
      summary: "Global AI regulation, safety vs. innovation, cross-border governance trends.",
      cover: "/activities/ai-powercover.jpg",
      location: "Campus"
    },
    {
      slug: "rhombus-ai-workshop",
      title: "AI Workshop with Rhombus AI",
      org: "Rhombus AI",
      date: "2025.04",
      summary: "Hands-on with LLM tooling, data pipelines, and prompt workflows.",
      cover: "/activities/rhombuscover.jpg",
      location: "Campus"
    },
    {
      slug: "city2surf-volunteer",
      title: "City2Surf Marathon Volunteer",
      org: "City2Surf",
      date: "2024.08",
      summary: "Supported race logistics, guided participants, and assisted in crowd management during Sydney’s annual City2Surf marathon.",
      cover: "/activities/city2surfcover.jpg",
      location: "Bondi Beach"
    },
    {
      slug: "mid-autumn-gala",
      title: "Mid-Autumn Festival Gala Volunteer",
      org: "Chinese-Australian Association",
      date: "2024.09",
      summary: "Assisted in event coordination, guest reception, and stage support during the Chinese-Australian Mid-Autumn Festival Gala.",
      cover: "/activities/mid-autumncover.jpg",
      location: "Town Hall"
    },
    {
      slug: "usu",
      title: "USU Volunteer",
      org: "University of Sydney Union (USU)",
      date: "2025.04 - Present",
      summary: "Contributed to student life by supporting campus events, assisting with logistics, and engaging with diverse student communities as part of the USU volunteer program.",
      cover: "/activities/usucover.jpg",
      location: "Campus"
    },
  ]

  // —— 搜索（多关键词 AND）——
  const filtered = activities.filter((a) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [a.title, a.org, a.summary ?? "", a.location ?? ""].join(" ").toLowerCase()
    return tokens.length === 0 || tokens.every(t => hay.includes(t))
  })

  // —— 搜索下方关键词（可改）——
  const keywordChips = useMemo(
    () => ["Consulting", "Career",  "Volunteer"],
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
      <Navigation activeSection="activities" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-md border-pink-400/30 text-gray-100 hover:bg-pink-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-3">Activities</h1>
            <p className="text-gray-200">Turning campus learning into real-world impact.</p>
          </div>

          {/* 搜索 + 关键词（只保留这一行胶囊） */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by title, organization, or keyword…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-pink-400/30 text-gray-100 placeholder:text-gray-400 pr-10"
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
                        ? "bg-pink-500/30 border-pink-400/40 text-pink-100"
                        : "bg-black/30 text-gray-200 border-pink-400/20 hover:bg-pink-500/10")
                    }
                  >
                    {t}
                  </span>
                )
              })}
            </div>
          </div>

          {/* 卡片列表（顶部封面铺满；无类型/底部标签） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/activities/${a.slug}`} className="block">
                <Card className="bg-black/30 backdrop-blur-md border-pink-400/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  {/* 顶部封面照片：铺满 */}
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
                      <div className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {/* 仅日期已在上面展示，这里留空即可或补充细节 */}
                      </div>
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
