"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, X } from "lucide-react"

type Status = "completed" | "in-progress"
type LearnType = "degree" | "course" | "online-course" | "bootcamp" | "certification"

type LearningItem = {
  slug: string
  title: string
  institution: string
  date: string
  type: LearnType
  logo: string
  tags?: string[]
  status: Status
  level?: "undergrad" | "postgrad"
  audited?: boolean
  certUrl?: string
}

export default function LearningPage() {
  const [q, setQ] = useState("")
  const [filters, setFilters] = useState<string[]>([])

  // === 你的课程数据（保持不变，仅供演示） ===
  const items: LearningItem[] = [
    { slug: "data1002", title: "DATA1002: Informatics: Data and Computation", institution: "University of Sydney", date: "2024 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Python","Pipelines","ML Basics","Visualization"], status: "completed", level: "undergrad" },
    { slug: "data1001", title: "DATA1001: Foundations of Data Science", institution: "University of Sydney", date: "2024 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["R","Statistics","Hypothesis Testing","Visualization"], status: "completed", level: "undergrad" },
    { slug: "math1061", title: "MATH1061: Mathematics 1A", institution: "University of Sydney", date: "2024 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Calculus","Linear Algebra","Proof"], status: "completed", level: "undergrad" },
    { slug: "math1062", title: "MATH1062: Mathematics 1B", institution: "University of Sydney", date: "2024 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Multivariable","Differential Eqns","R"], status: "completed", level: "undergrad" },
    { slug: "info1110", title: "INFO1110: Introduction to Programming", institution: "University of Sydney", date: "2024 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Python"], status: "completed", level: "undergrad" },
    { slug: "comp2123", title: "COMP2123: Data Structures & Algorithms", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Algorithm","Sorting","Graph","Tree"], status: "completed", level: "undergrad" },
    { slug: "comp3308", title: "COMP3308: Introduction to Artificial Intelligence", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Search","ML","Game Algorithms"], status: "completed", level: "undergrad" },
    { slug: "stat2011", title: "STAT2011: Probability and Estimation Theory", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Probability","Estimation","Asymptotics"], status: "completed", level: "undergrad" },
    { slug: "qbus1040", title: "QBUS1040: Foundations of Business Analytics", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Linear Algebra","Regression","Optimisation","Python"], status: "completed", level: "undergrad" },
    { slug: "data2901", title: "DATA2901: Big Data and Data Diversity (Advanced)", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Python","SQL","Hadoop","ETL"], status: "completed", level: "undergrad" },
    { slug: "qbus2820", title: "QBUS2820: Predictive Analytics", institution: "University of Sydney", date: "2025 S1", type: "course", logo: "/learning/usydlogo.png", tags: ["Forecasting","Time Series","Python"], status: "completed", level: "undergrad", audited: true },
    { slug: "sjtu-ma413", title: "MA413 / STAT3925: Time Series (Advanced)", institution: "Shanghai Jiao Tong University (Summer)", date: "2025", type: "course", logo: "/learning/sjtulogo.png", tags: ["ARIMA","Stationarity","Forecasting","R/Python"], status: "completed", level: "undergrad" },
    { slug: "sjtu-ma4704", title: "MA4704: Stochastic Process", institution: "Shanghai Jiao Tong University (Summer)", date: "2025", type: "course", logo: "/learning/sjtulogo.png", tags: ["Poisson","CTMC/DTMC","Queueing"], status: "completed", level: "undergrad" },
    { slug: "google-advanced-data-analytics", title: "Google Advanced Data Analytics Professional Certificate", institution: "Google x Coursera", date: "2024", type: "certification", logo: "/learning/googlelogo.png", tags: ["Python","Regression","Visualization"], status: "completed" },
    { slug: "genai-intensive-2025q1", title: "Gen AI Intensive Course 2025Q1", institution: "Google × Kaggle", date: "2025", type: "course", logo: "/learning/googlelogo.png", tags: ["Prompting","Embeddings/RAG","Agents","MLOps"], status: "completed" },

    // In Progress
    { slug: "qbus2810", title: "QBUS2810: Statistical Modelling for Business", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Business Stats","Forecasting","Python"], status: "in-progress", level: "undergrad" },
    { slug: "data2902", title: "DATA2902: Data Analytics (Advanced)", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["EDA","Statistical ML","Quarto/RMarkdown"], status: "in-progress", level: "undergrad" },
    { slug: "qbus2310", title: "QBUS2310: Management Science", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["LP/IP/NLP","Optimisation","Excel Solver","Python"], status: "in-progress", level: "undergrad" },
    { slug: "qbus3330", title: "QBUS3330: Methods of Decision Analysis", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Decision Trees","Sensitivity","Simulation","Utility"], status: "in-progress", level: "undergrad" },
    { slug: "comp5338", title: "COMP5338: Advanced Data Models", institution: "University of Sydney", date: "2025", type: "course", logo: "/learning/usydlogo.png", tags: ["SQL","MongoDB","Neo4j","Indexing"], status: "in-progress", level: "undergrad", audited: true },
    { slug: "comp5318", title: "COMP5318: Machine Learning and Data Mining", institution: "University of Sydney", date: "2024", type: "course", logo: "/learning/usydlogo.png", tags: ["Classification","Clustering","Feature Eng","PG"], status: "in-progress", level: "postgrad", audited: true },
    { slug: "comp5328", title: "COMP5328: Advanced Machine Learning", institution: "University of Sydney", date: "2024", type: "course", logo: "/learning/usydlogo.png", tags: ["Deep Learning","Generalisation","PyTorch/TensorFlow","PG"], status: "in-progress", level: "postgrad", audited: true },
  ]

  const allTypes: LearnType[] = ["degree", "course", "online-course", "bootcamp", "certification"]

  // 搜索 + 类型过滤
  const filtered = items.filter((it) => {
    const ql = q.toLowerCase().trim()
    const tokens = ql.split(/\s+/).filter(Boolean) // 支持多关键词
    const text = [it.title, it.institution, ...(it.tags ?? [])].join(" ").toLowerCase()
    const hit = tokens.length === 0 || tokens.every(t => text.includes(t))
    const typeOK = filters.length === 0 || filters.includes(it.type)
    return hit && typeOK
  })

  // 热门关键词（去重 + 频次排序）
  const tagSuggestions = useMemo(() => {
    const freq = new Map<string, number>()
    for (const it of items) for (const t of it.tags ?? []) freq.set(t, (freq.get(t) ?? 0) + 1)
    // 适当手动置顶你常用词
    const pinned = ["Python","ML","Time Series","Optimisation","Probability","SQL","R","Forecasting","Algorithms","Data Mining"]
    const rest = [...freq.keys()].filter(k => !pinned.includes(k))
    return [...pinned, ...rest].slice(0, 14)
  }, [items])

  // 切换某个关键词：存在则移除，不在则追加
  const toggleToken = (token: string) => {
    const current = q.split(/\s+/).filter(Boolean)
    const exists = current.includes(token)
    const next = exists ? current.filter(t => t !== token) : [...current, token]
    setQ(next.join(" "))
  }

  // 判断某 token 是否在搜索框内
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      {/* === 顶部 Header：左上角小 Logo（与 competitions 保持一致风格） === */}
      <header className="sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 pt-5">
          <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2">
            <Image
              src="/learning/usydlogo.png" // 你想显示的 Learning 标志；可换成 /learning/logo.png
              alt="Learning"
              width={24}
              height={24}
              className="rounded-md"
              priority
            />
            <span className="text-white/90 font-medium">Learning</span>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-6 p-6">
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

          {/* === 搜索区域（优化关键词交互） === */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by course code, title, institution, or tag… (supports multiple terms)"
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

            {/* 类型过滤（保持你的风格） */}
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

            {/* 🔎 热门关键词：点击追加/移除；选中态更明显 */}
            <div className="flex flex-wrap gap-2 justify-center">
              {tagSuggestions.map((t) => {
                const active = hasToken(t)
                return (
                  <Badge
                    key={t}
                    onClick={() => toggleToken(t)}
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
            </div>
          </div>

          {/* 卡片列表（不改你的配色；标题不再截断） */}
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

                    {/* 顶部 LOGO（仅 LOGO，不放照片） */}
                    <div className="relative h-40 flex items-center justify-center bg-black/30">
                      <Image src={it.logo} alt={`${it.title} logo`} width={64} height={64} className="object-contain" />
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
                      {/* 取消截断，显示完整课程名 */}
                      <CardTitle className="text-white text-lg mb-1 whitespace-normal">{it.title}</CardTitle>

                      {/* 关键词（最多 3 个） */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(it.tags ?? []).slice(0, 3).map((t) => (
                          <Badge key={t} className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

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
