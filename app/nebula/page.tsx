"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MapPin, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Kind = "Volunteer" | "Networking" | "Talks"

type ActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  summary: string
  cover: string
  location?: string
  kinds: Kind[]        // ← 隐形分类（用于过滤）
}

export default function NebulaPage() {
  const [q, setQ] = useState("")
  const [selectedKinds, setSelectedKinds] = useState<Kind[]>([])

  const activities: ActivityItem[] = [
    {
      slug: "rabobank-office-tour",
      title: "Office Tour — Rabobank Australia",
      org: "Rabobank",
      date: "2025.08",
      summary: "Banking tech stack, risk systems, and a peek into product operations.",
      cover: "/activities/ra1.png",
      location: "Rabobank office",
      kinds: ["Networking"],
    },
    {
      slug: "ey-applicants-interviews",
      title: "EY Presents: Applicants and Interviews",
      org: "EY",
      date: "2025.08",
      summary: "Insights on EY application processes, interview prep, and career pathways.",
      cover: "/activities/ey1.png",
      location: "Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "gurobi-community-meetup",
      title: "Gurobi Community Meetup",
      org: "Gurobi",
      date: "2025.08",
      summary: "Optimisation case studies: LP/IP modeling, solver tuning, and applications.",
      cover: "/activities/gurobi1.png",
      location: "Swiss Hotel",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "microsoft-chat-and-hack",
      title: "Chat & Hack: Microsoft Careers Day (On Campus)",
      org: "Microsoft",
      date: "2025.03",
      summary: "Career chats, hack-style demos, and routes into product & engineering.",
      cover: "/activities/microsoft1.png",
      location: "Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "bain-career-in-consulting",
      title: "A Career in Consulting with Bain & Company",
      org: "Bain & Company",
      date: "2025.03",
      summary: "Pathways into strategy consulting, recruiting tips, and day-in-the-life insights.",
      cover: "/activities/bain1.png",
      location: "Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "hongkong-flow-trader",
      title: "Hongkong Flow Trader",
      org: "Industry Insights",
      date: "2025.03",
      summary: "Flow trading landscape, pricing, risk, and life on the trading floor.",
      cover: "/activities/flow1.png",
      location: "Campus",
      kinds: ["Talks"],
    },
    {
      slug: "ai-power-struggle-regulation",
      title: "The AI Power Struggle: China, the US and the Future of Regulation",
      org: "Policy & Governance",
      date: "2025.04",
      summary: "Global AI regulation, safety vs. innovation, cross-border governance trends.",
      cover: "/activities/ai.png",
      location: "Campus",
      kinds: ["Talks"],
    },
    {
      slug: "rhombus-ai-workshop",
      title: "AI Workshop with Rhombus AI",
      org: "Rhombus AI",
      date: "2025.04",
      summary: "Hands-on with LLM tooling, data pipelines, and prompt workflows.",
      cover: "/activities/rhombus.png",
      location: "Campus",
      kinds: ["Talks"],
    },
    {
      slug: "faculty-stem-panel",
      title: "Faculty of Science STEM Panel Discussion",
      org: "Faculty of Science",
      date: "2024.08",
      summary: "Panel discussion on STEM careers, research opportunities, and student pathways.",
      cover: "/activities/stem.png",
      location: "Campus",
      kinds: ["Talks"],
    },
    {
      slug: "linkedin-all-star-profile",
      title: "LinkedIn: Building an All-Star Profile",
      org: "Career Center",
      date: "2024.08",
      summary: "Profile optimisation, storytelling, and networking best practices.",
      cover: "/activities/linkedin.png",
      location: "Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "city2surf-volunteer",
      title: "City2Surf Marathon Volunteer",
      org: "City2Surf",
      date: "2024.08",
      summary: "Supported race logistics, assisted in crowd management and final medal distribution.",
      cover: "/activities/city2.png",
      location: "Bondi Beach",
      kinds: ["Volunteer"],
    },
    {
      slug: "mid-autumn-gala",
      title: "Mid-Autumn Festival Gala Volunteer",
      org: "Chinese-Australian Association",
      date: "2024.09",
      summary: "Assisted in event coordination, guest reception.",
      cover: "/activities/mid.png",
      location: "Town Hall",
      kinds: ["Volunteer"],
    },
    {
      slug: "usu",
      title: "USU Volunteer",
      org: "University of Sydney Union (USU)",
      date: "2025.04 - Present",
      summary: "Contributed to student life by supporting campus events, and engaging with diverse student communities.",
      cover: "/activities/usu.png",
      location: "Campus",
      kinds: ["Volunteer"],
    },
  ]

  const chips: Kind[] = useMemo(() => ["Volunteer", "Networking", "Talks"], [])

  const filtered = activities.filter((a) => {
    // 文本搜索
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [a.title, a.org, a.summary ?? "", a.location ?? ""]
      .join(" ")
      .toLowerCase()
    const textOk = tokens.length === 0 || tokens.every((t) => hay.includes(t))

    // 隐形分类过滤：选了就按 OR 交集；没选则不过滤
    const kindOk =
      selectedKinds.length === 0 ||
      a.kinds.some((k) => selectedKinds.includes(k))

    return textOk && kindOk
  })

  const toggleKind = (k: Kind) =>
    setSelectedKinds((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    )

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="nebula" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
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

          {/* 搜索 + 分类 chips（chips 只做过滤，不写进搜索框） */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by title, organization, place, or keyword…"
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
              {chips.map((k) => {
                const active = selectedKinds.includes(k)
                return (
                  <span
                    key={k}
                    onClick={() => toggleKind(k)}
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
                      (active
                        ? "bg-red-500/30 border-red-400/40 text-red-100"
                        : "bg-black/30 text-gray-200 border-red-400/20 hover:bg-red-500/10")
                    }
                  >
                    {k}
                  </span>
                )
              })}
            </div>
          </div>

          {/* 小卡片：一行 4 个，不可点，hover 显示完整标题 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((a) => (
              <Card
                key={a.slug}
                className="bg-black/30 backdrop-blur-md border-red-400/20 hover:bg-black/40 transition-all duration-300 overflow-hidden"
                title={a.title}
              >
                <div className="relative h-32 w-full">
                  <img
                    src={a.cover || "/placeholder.svg"}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-xs">{a.org}</span>
                    <span className="text-gray-400 text-xs">{a.date}</span>
                  </div>
                  <CardTitle className="text-gray-100 text-sm mb-1 line-clamp-1" title={a.title}>
                    {a.title}
                  </CardTitle>
                  {a.location && (
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {a.location}
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  {a.summary && (
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {a.summary}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-400 text-sm">
            If you’re curious about any of these, I’m always happy to chat and share more—coffee’s on me ☕
          </div>
        </div>
      </div>
    </div>
  )
}

