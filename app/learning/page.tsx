"use client"

import { useState } from "react"
import Link from "next/link"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar } from "lucide-react"

type LearningItem = {
  slug: string
  title: string
  institution: string
  date: string
  type: "degree" | "course" | "online-course" | "bootcamp" | "certification"
  summary: string
  logo: string            // e.g. /learning/<slug>/logo.png (放 public 下)
  tags?: string[]
  certUrl?: string
}

export default function LearningPage() {
  const [q, setQ] = useState("")
  const [filters, setFilters] = useState<string[]>([])

  // ✅ 按需添加；logo 放到 /public/learning/<slug>/logo.png
  const items: LearningItem[] = [
    {
      slug: "machine-learning-specialization",
      title: "Machine Learning Specialization",
      institution: "Stanford University (Coursera)",
      date: "2023 Fall",
      type: "online-course",
      summary: "Supervised/unsupervised learning, model evaluation, and practical ML workflows.",
      logo: "/learning/machine-learning-specialization/logo.png",
      tags: ["Python", "ML", "Evaluation"],
      certUrl: "https://www.coursera.org",
    },
    {
      slug: "full-stack-web-development",
      title: "Full-Stack Web Development",
      institution: "Online Bootcamp",
      date: "2023 Summer",
      type: "bootcamp",
      summary: "React, Node.js, APIs, and deployment. Built multiple end-to-end projects.",
      logo: "/learning/full-stack-web-development/logo.png",
      tags: ["React", "Node.js", "API"],
    },
    {
      slug: "comp2123",
      title: "Data Structures & Algorithms",
      institution: "University Course",
      date: "2023 Spring",
      type: "course",
      summary: "Trees/graphs/greedy/DP with a focus on problem solving and optimization.",
      logo: "/learning/data-structures-and-algorithms/logo.png",
      tags: ["Algorithms", "DSA", "Optimization"],
    },
  ]

  const allTypes = ["degree", "course", "online-course", "bootcamp", "certification"]

  const filtered = items.filter((it) => {
    const hit =
      it.title.toLowerCase().includes(q.toLowerCase()) ||
      it.institution.toLowerCase().includes(q.toLowerCase()) ||
      (it.tags ?? []).some((t) => t.toLowerCase().includes(q.toLowerCase()))
    const typeOK = filters.length === 0 || filters.includes(it.type)
    return hit && typeOK
  })

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Learning Journey</h1>
            <p className="text-gray-300">Courses, programs, and certifications that shaped my toolkit</p>
          </div>

          {/* 搜索 */}
          <div className="mb-6 space-y-4">
            <Input
              placeholder="Search by title, institution, or tag…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />

            {/* 类型过滤（可选） */}
            <div className="flex flex-wrap gap-2 justify-center">
              {allTypes.map((t) => {
                const active = filters.includes(t)
                return (
                  <Badge
                    key={t}
                    onClick={() =>
                      setFilters((prev) =>
                        prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
                      )
                    }
                    className={
                      active
                        ? "cursor-pointer bg-purple-500/30 text-purple-100 border-purple-400/40"
                        : "cursor-pointer bg-white/5 text-gray-200 border-white/10 hover:bg-purple-500/10"
                    }
                  >
                    {t}
                  </Badge>
                )
              })}
              {filters.length > 0 && (
                <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => setFilters([])}>
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* 卡片列表（带 LOGO） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => (
              <Link key={it.slug} href={`/learning/${it.slug}`} className="block">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  {/* 顶部 LOGO 区 */}
                  <div className="relative h-40 flex items-center justify-center bg-black/30">
                    <img src={it.logo} alt={`${it.institution} logo`} className="h-16 object-contain" />
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{it.institution}</span>
                      <span className="text-gray-400 text-sm inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {it.date}
                      </span>
                    </div>
                    <CardTitle className="text-white text-lg mb-1 line-clamp-1">{it.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(it.tags ?? []).slice(0, 3).map((t) => (
                        <Badge key={t} className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 text-sm line-clamp-3">{it.summary}</p>
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

