"use client"

import { useState } from "react"
import Link from "next/link"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react"

type ActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  type: "company" | "lecture" | "tour" | "event" | "workshop"
  summary: string
  logo: string            // e.g. /activities/<slug>/logo.png
  location?: string
  link?: string
  tags?: string[]
}

export default function ActivitiesPage() {
  const [q, setQ] = useState("")
  const [selected, setSelected] = useState<string[]>([])

  // 你只需要把下面数组按需要继续添加；logo 放到 /public/activities/<slug>/logo.png
  const activities: ActivityItem[] = [
    {
      slug: "openai-office-hour",
      title: "OpenAI Office Hour (Campus Talk)",
      org: "OpenAI",
      date: "2025.06",
      type: "lecture",
      summary: "Model roadmap, safety updates, and product demos. Tookaways on multi-modal UX and evals.",
      logo: "/activities/openai-office-hour/logo.png",
      location: "Campus Auditorium",
      link: "https://openai.com",
      tags: ["GenAI", "Product", "Safety"]
    },
    {
      slug: "kpmg-innovate-day-2025",
      title: "KPMG Innovate Day 2025",
      org: "KPMG China",
      date: "2024.10",
      type: "event",
      summary: "Digital products & insights. Learned how audit workflows integrate with data pipelines.",
      logo: "/activities/kpmg-innovate-day-2025/logo.png",
      location: "KPMG Shanghai",
      tags: ["Product", "Data", "Audit"]
    },
    // …继续按这个格式添加
  ]

  const allTags = ["company", "lecture", "tour", "event", "workshop"]

  const filtered = activities.filter(a => {
    const hit =
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      a.org.toLowerCase().includes(q.toLowerCase()) ||
      (a.tags ?? []).some(t => t.toLowerCase().includes(q.toLowerCase()))
    const tagOK = selected.length === 0 || selected.includes(a.type)
    return hit && tagOK
  })

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
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
            <p className="text-gray-200">
              Turning campus learning into real-world impact — company visits, talks, and workshops.
            </p>
          </div>

          {/* 搜索 */}
          <div className="mb-6 space-y-4">
            <Input
              placeholder="Search by title, organization, or tag…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-pink-400/30 text-gray-100 placeholder:text-gray-400"
            />

            {/* 标签过滤（可点/可清空） */}
            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map(tag => {
                const active = selected.includes(tag)
                return (
                  <Badge
                    key={tag}
                    onClick={() =>
                      setSelected(prev =>
                        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                      )
                    }
                    className={
                      active
                        ? "cursor-pointer bg-pink-500/30 text-pink-100 border-pink-400/40"
                        : "cursor-pointer bg-black/30 text-gray-200 border-pink-400/20 hover:bg-pink-500/10"
                    }
                  >
                    {tag}
                  </Badge>
                )
              })}
              {selected.length > 0 && (
                <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => setSelected([])}>
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* 卡片列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/activities/${a.slug}`} className="block">
                <Card className="bg-black/30 backdrop-blur-md border-pink-400/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  {/* 顶部 LOGO */}
                  <div className="relative h-40 flex items-center justify-center bg-black/30">
                    <img
                      src={a.logo || "/placeholder.svg"}
                      alt={`${a.org} logo`}
                      className="h-16 object-contain"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{a.org}</span>
                      <span className="text-gray-400 text-sm">{a.date}</span>
                    </div>
                    <CardTitle className="text-gray-100 text-lg mb-1 line-clamp-1">{a.title}</CardTitle>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {a.type}
                      </div>
                      {a.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {a.location}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-200 text-sm mb-3 line-clamp-3">{a.summary}</p>
                    <div className="flex items-center gap-2">
                      {(a.tags ?? []).slice(0, 3).map(t => (
                        <Badge key={t} className="bg-pink-500/20 text-pink-200 border-pink-500/30 text-xs">
                          {t}
                        </Badge>
                      ))}
                      {a.link && (
                        <span className="ml-auto inline-flex items-center text-pink-300 text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" /> More
                        </span>
                      )}
                    </div>
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
