"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar } from "lucide-react"

type Status = "completed" | "in-progress"
type LearnType = "degree" | "course" | "online-course" | "bootcamp" | "certification"

type LearningItem = {
  slug: string
  title: string
  institution: string
  date: string
  type: LearnType
  logo: string                 // 放 /public/learning/<slug>/logo.png
  tags?: string[]
  status: Status               // ✅ 完成状态
  level?: "undergrad" | "postgrad"
  audited?: boolean            // ✅ 蹭课
  certUrl?: string
}

export default function LearningPage() {
  const [q, setQ] = useState("")
  const [filters, setFilters] = useState<string[]>([])

  // ======== 课程清单 ========
  // 说明：
  // - COMP5318 / 5328 / 8338：PG + Audited，Completed
  // - 从 QBUS2810 起：全部 In Progress
  const items: LearningItem[] = [
    // --- 已完成（Completed） ---
    {
      slug: "data1002",
      title: "DATA1002: Informatics: Data and Computation",
      institution: "University of Sydney",
      date: "2024 S2",
      type: "course",
      logo: "/learning/data1002/logo.png",
      tags: ["Python", "Pipelines", "ML Basics", "Visualization"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "data1001",
      title: "DATA1001: Foundations of Data Science",
      institution: "University of Sydney",
      date: "2024 S2",
      type: "course",
      logo: "/learning/data1001/logo.png",
      tags: ["R", "Statistics", "Hypothesis Testing", "Visualization"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "math1061",
      title: "MATH1061: Mathematics 1A",
      institution: "University of Sydney",
      date: "2024 S2",
      type: "course",
      logo: "/learning/math1061/logo.png",
      tags: ["Calculus", "Linear Algebra", "Proof"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "math1062",
      title: "MATH1062: Mathematics 1B",
      institution: "University of Sydney",
      date: "2024 S2",
      type: "course",
      logo: "/learning/math1062/logo.png",
      tags: ["Multivariable", "Differential Eqns", "R"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "info1110",
      title: "INFO1110: Introduction to Programming",
      institution: "University of Sydney",
      date: "2024 S2",
      type: "course",
      logo: "/learning/info1110/logo.png",
      tags: ["Python"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "comp2123",
      title: "COMP2123: Data Structures & Algorithms",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/comp2123/logo.png",
      tags: ["Algorithm", "Sorting", "Graph","Tree"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "comp3308",
      title: "COMP3308: Introduction to Artificial Intelligence",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/comp3308/logo.png",
      tags: ["Search", "ML", "Game Algorithms"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "stat2011",
      title: "STAT2011: Probability and Estimation Theory",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/stat2011/logo.png",
      tags: ["Probability", "Estimation", "Asymptotics"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "qbus1040",
      title: "QBUS1040: Foundations of Business Analytics",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/qbus1040/logo.png",
      tags: ["Linear Algebra", "Regression", "Optimisation", "Python"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "data2901",
      title: "DATA2901: Big Data and Data Diversity (Advanced)",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/data2901/logo.png",
      tags: ["Python", "SQL", "Hadoop", "ETL"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "qbus2820",
      title: "QBUS2820: Predictive Analytics",
      institution: "University of Sydney",
      date: "2025 S1",
      type: "course",
      logo: "/learning/qbus2820/logo.png",
      tags: ["Forecasting", "Time Series", "Python"],
      status: "completed",
      level: "undergrad",
      audited: true,
    },
    {
      slug: "sjtu-ma413",
      title: "MA413 / STAT3925: Time Series (Advanced)",
      institution: "Shanghai Jiao Tong University (Summer)",
      date: "2025",
      type: "course",
      logo: "/learning/sjtu-ma413/logo.png",
      tags: ["ARIMA", "Stationarity", "Forecasting", "R/Python"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "sjtu-ma4704",
      title: "MA4704: Stochastic Process",
      institution: "Shanghai Jiao Tong University (Summer)",
      date: "2025",
      type: "course",
      logo: "/learning/sjtu-ma4704/logo.png",
      tags: ["Poisson", "CTMC/DTMC", "Queueing"],
      status: "completed",
      level: "undergrad",
    },
    {
      slug: "google-advanced-data-analytics",
      title: "Google Advanced Data Analytics Professional Certificate",
      institution: "Google x Coursera",
      date: "2024",
      type: "certification",
      logo: "/learning/google-ada/logo.png",
      tags: ["Python", "Regression", "Visualization"],
      status: "completed",
    },
    {
      slug: "genai-intensive-2025q1",
      title: "Gen AI Intensive Course 2025Q1",
      institution: "Google × Kaggle",
      date: "2025",
      type: "course",
      logo: "/learning/genai-intensive/logo.png",
      tags: ["Prompting", "Embeddings/RAG", "Agents", "MLOps"],
      status: "completed",
    },
    
    // --- 从这里起 In Progress ---
    {
      slug: "qbus2810",
      title: "QBUS2810: Statistical Modelling for Business",
      institution: "University of Sydney",
      date: "2025 S2",
      type: "course",
      logo: "/learning/qbus2810/logo.png",
      tags: ["Business Stats", "Forecasting", "Python"],
      status: "in-progress",
      level: "undergrad",
    },
    {
      slug: "data2902",
      title: "DATA2902: Data Analytics (Advanced)",
      institution: "University of Sydney",
      date: "2025 S2",
      type: "course",
      logo: "/learning/data2902/logo.png",
      tags: ["EDA", "Statistical ML", "Quarto/RMarkdown"],
      status: "in-progress",
      level: "undergrad",
    },
    {
      slug: "qbus2310",
      title: "QBUS2310: Management Science",
      institution: "University of Sydney",
      date: "2025 S2",
      type: "course",
      logo: "/learning/qbus2310/logo.png",
      tags: ["LP/IP/NLP", "Optimisation", "Excel Solver", "Python"],
      status: "in-progress",
      level: "undergrad",
    },
    {
      slug: "qbus3330",
      title: "QBUS3330: Methods of Decision Analysis",
      institution: "University of Sydney",
      date: "2025 S2",
      type: "course",
      logo: "/learning/qbus3330/logo.png",
      tags: ["Decision Trees", "Sensitivity", "Simulation", "Utility"],
      status: "in-progress",
      level: "undergrad",
    },
    {
      slug: "comp5338",
      title: "COMP5338: Advanced Data Models",
      institution: "University of Sydney",
      date: "2025",
      type: "course",
      logo: "/learning/comp5338/logo.png",
      tags: ["SQL", "MongoDB", "Neo4j", "Indexing"],
      status: "in-progress",
      level: "undergrad",
      audited: true,
    },  
    {
      slug: "comp5318",
      title: "COMP5318: Machine Learning and Data Mining",
      institution: "University of Sydney",
      date: "2024",
      type: "course",
      logo: "/learning/comp5318/logo.png",
      tags: ["Classification", "Clustering", "Feature Eng", "PG"],
      status: "in-progress",
      level: "postgrad",
      audited: true,
    },
    {
      slug: "comp5328",
      title: "COMP5328: Advanced Machine Learning",
      institution: "University of Sydney",
      date: "2024",
      type: "course",
      logo: "/learning/comp5328/logo.png",
      tags: ["Deep Learning", "Generalisation", "PyTorch/TensorFlow", "PG"],
      status: "in-progress",
      level: "postgrad",
      audited: true,
    },

  ]

  const allTypes: LearnType[] = ["degree", "course", "online-course", "bootcamp", "certification"]

  // 搜索 + 类型过滤
  const filtered = items.filter((it) => {
    const ql = q.toLowerCase()
    const hit =
      it.title.toLowerCase().includes(ql) ||
      it.institution.toLowerCase().includes(ql) ||
      (it.tags ?? []).some((t) => t.toLowerCase().includes(ql))
    const typeOK = filters.length === 0 || filters.includes(it.type)
    return hit && typeOK
  })

  // 热门标签（用于搜索区域下方可点选）
  const tagSuggestions = useMemo(() => {
    const freq = new Map<string, number>()
    for (const it of items) for (const t of it.tags ?? []) freq.set(t, (freq.get(t) ?? 0) + 1)
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => t)
      .slice(0, 10)
  }, [items])

  return (
    <div className="relative min-h-screen">
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

            {/* 类型过滤（与你原风格一致） */}
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

            {/* 🔎 热门关键词（点一下把词填入搜索） */}
            <div className="flex flex-wrap gap-2 justify-center">
              {tagSuggestions.map((t) => (
                <Badge
                  key={t}
                  onClick={() => setQ(t)}
                  className="cursor-pointer bg-white/5 text-gray-200 border-white/10 hover:bg-purple-500/10"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* 卡片列表（保留你的磨砂/荧光风格） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => {
              const statusClass =
                it.status === "completed"
                  ? "bg-emerald-500/30 text-emerald-100 border-emerald-400/40"
                  : "bg-yellow-500/30 text-yellow-100 border-yellow-400/40"

              return (
                <Link key={it.slug} href={`/learning/${it.slug}`} className="block">
                  <Card className="relative bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    {/* 右上角状态角标 */}
                    <div className="absolute top-3 right-3 z-20">
                      <Badge className={`text-xs ${statusClass}`}>
                        {it.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>

                    {/* 顶部 LOGO 区（仅 LOGO，不放照片） */}
                    <div className="relative h-40 flex items-center justify-center bg-black/30">
                      <img src={it.logo} alt={`${it.title} logo`} className="h-16 object-contain" />
                      {(it.level === "postgrad" || it.audited) && (
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          {it.level === "postgrad" && (
                            <Badge className="bg-white/5 text-gray-200 border-white/10">PG</Badge>
                          )}
                          {it.audited && (
                            <Badge className="bg-white/5 text-gray-200 border-white/10">Audited</Badge>
                          )}
                        </div>
                      )}
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

                      {/* 关键词（最多显示 3 个） */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(it.tags ?? []).slice(0, 3).map((t) => (
                          <Badge key={t} className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    {/* 预留区域：你后续可以在这里加描述/链接等 */}
                    <CardContent />
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


