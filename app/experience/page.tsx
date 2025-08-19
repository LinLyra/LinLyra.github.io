"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft, X } from "lucide-react"

type ExpType = "consulting" | "development" | "research" | "volunteer" | "program"

type ExperienceItem = {
  slug: string
  title: string
  company: string
  date: string            // e.g. "2025.3 — Present"
  type: ExpType
  skills: string[]        // 显示在卡片上的标签
  logo: string            // /public/experience/<slug>/logo.png
}

export default function ExperiencePage() {
  const [q, setQ] = useState("")

  // ======== 你的经历（可以继续增删） ========
  const experiences: ExperienceItem[] = [
    {
      slug: "abc-ai-development",
      title: "AI Development（Research Department）",
      company: "A Better Community",
      date: "2025.3 — Present",
      type: "development",
      skills: ["Research Design", "Generative AI", "Data Pipeline Engineering", "Prompt Engineering", "API Integration"],
      logo: "/experience/abc/logo.png",
    },
    {
      slug: "abc-product-consultant",
      title: "Product Consultant",
      company: "A Better Community",
      date: "2025.3 — Present",
      type: "consulting",
      skills: ["Stakeholder Interview", "Data Cleaning", "Slide Decks", "Project Management", "AI-agent"],
      logo: "/experience/abc/logo.png",
    },
    {
      slug: "saiep-management",
      title: "Management Consultant",
      company: "Study Australian Industry Experience Program",
      date: "2025.7",
      type: "consulting",
      skills: ["Strategic Thinking", "Market Research", "Competitive Analysis", "Business Model Design", "Growth Strategy"],
      logo: "/experience/saiep/logo.png",
    },
    {
      slug: "accenture-strategy-consulting",
      title: "Strategy Consulting · Virtual Experience",
      company: "Accenture (Forage)",
      date: "2024.12",
      type: "consulting",
      skills: ["Strategy Consulting", "Data Analysis", "Prioritisation", "Client Communication", "Problem Solving"],
      logo: "/experience/accenture/logo.png",
    },
    {
      slug: "deloitte-technology",
      title: "Technology · Virtual Experience",
      company: "Deloitte (Forage)",
      date: "2024.12",
      type: "development",
      skills: ["Data Analysis", "Tableau", "Excel", "Python", "Data Modeling", "Software Dev Processes"],
      logo: "/experience/deloitte/logo.png",
    },
    {
      slug: "saiep-program",
      title: "Management Track · AI Entrepreneurship Program",
      company: "SAIEP (Strategic AI Entrepreneurship Program)",
      date: "2025",
      type: "program",
      skills: ["Strategic Thinking", "Market Research", "Competitive Analysis", "Business Model Design", "Growth Strategy", "Presentation"],
      logo: "/experience/saiep/logo.png",
    },
  ]

  // 搜索（多关键词 AND）
  const filtered = experiences.filter((exp) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [exp.title, exp.company, ...exp.skills].join(" ").toLowerCase()
    return tokens.length === 0 || tokens.every(t => hay.includes(t))
  })

  // 搜索框下的两个快速标签（蓝色系，符合 experience 星球）
  const quickFilters = ["Development", "Consulting"]
  const hasToken = (t: string) => q.split(/\s+/).filter(Boolean).includes(t.toLowerCase())
  const toggleToken = (t: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const key = t.toLowerCase()
    setQ(cur.includes(key) ? cur.filter(x => x !== key).join(" ") : [...cur, key].join(" "))
  }

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="experience" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Experience</h1>
            <p className="text-gray-300">Where learning meets real-world impact.</p>
          </div>

          {/* 搜索 */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search experience by title, company, or skill..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400 pr-10"
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

            {/* 快速关键词（Development / Consulting） */}
            <div className="flex flex-wrap gap-2 justify-center">
              {quickFilters.map((t) => {
                const active = hasToken(t)
                return (
                  <span
                    key={t}
                    onClick={() => toggleToken(t)}
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
                      (active
                        ? "bg-sky-500/25 border-sky-400/40 text-sky-100"
                        : "bg-sky-500/10 border-sky-400/30 text-sky-200 hover:bg-sky-500/20")
                    }
                  >
                    {t}
                  </span>
                )
              })}
            </div>
          </div>

          {/* 卡片列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((exp) => (
              <Link key={exp.slug} href={`/experience/${exp.slug}`}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full">
                  {/* 头部：左上角 logo（不放大容器，只让图片填满） */}
                  <div className="flex items-start gap-4 p-5">
                    <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                      {/* 关键：用 fill + object-contain，让图片在方框内“撑满” */}
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain object-center"
                        sizes="48px"
                        priority
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-white text-xl font-semibold whitespace-normal">
                        {exp.title}
                      </CardTitle>
                      <div className="mt-1 text-gray-300 text-sm font-medium">{exp.company}</div>
                      <div className="mt-1 text-gray-400 text-sm inline-flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </div>
                    </div>
                  </div>

                  {/* 技能标签（蓝系） */}
                  <CardHeader className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 8).map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-sky-500/15 text-sky-100 border border-sky-500/30 whitespace-nowrap"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  {/* 预留：不展示 description */}
                  <CardContent />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


