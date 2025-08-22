"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, X } from "lucide-react"

type Status = "completed" | "in-progress"
type LearnType = "degree" | "course" | "online-course"

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

  // === 课程数据 ===
  const items: LearningItem[] = [
    { slug:"comp2123", title:"COMP2123: Data Structures & Algorithms", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Algorithm","Sorting","Graph","Tree"], status:"completed", level:"undergrad" },
    { slug:"comp3308", title:"COMP3308: Introduction to Artificial Intelligence", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Search","ML","Game Algorithms"], status:"completed", level:"undergrad" },
    { slug:"stat2011", title:"STAT2011: Probability and Estimation Theory", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Probability","Estimation","Asymptotics"], status:"completed", level:"undergrad" },
    { slug:"qbus1040", title:"QBUS1040: Foundations of Business Analytics", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Linear Algebra","Regression","Optimisation","Python"], status:"completed", level:"undergrad" },
    { slug:"data2901", title:"DATA2901: Big Data and Data Diversity (Advanced)", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","SQL","Hadoop","Linux","Jupyter", "Big Data"], status:"completed", level:"undergrad" },
    { slug:"data1002", title:"DATA1002: Informatics: Data and Computation", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","Pipelines","ML Basics","Visualization"], status:"completed", level:"undergrad" },
    { slug:"data1001", title:"DATA1001: Foundations of Data Science", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistics","Hypothesis Testing","Visualization"], status:"completed", level:"undergrad" },
    { slug:"math1061", title:"MATH1061: Mathematics 1A", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Calculus","Linear Algebra","Proof"], status:"completed", level:"undergrad" },
    { slug:"math1062", title:"MATH1062: Mathematics 1B", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Multivariable","Differential Eqns","R"], status:"completed", level:"undergrad" },
    { slug:"info1110", title:"INFO1110: Introduction to Programming", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","Objected-Oriented Programming", "Shell Scripting"], status:"completed", level:"undergrad" },
    { slug:"qbus2820", title:"QBUS2820: Predictive Analytics", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Forecasting","Time Series","Python"], status:"completed", level:"undergrad", audited:true },
    { slug:"sjtu-ma413", title:"MA413 / STAT3925: Time Series (Advanced)", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["ARIMA","Stationarity","Forecasting","R/Python"], status:"completed", level:"undergrad" },
    { slug:"sjtu-ma4704", title:"MA4704: Stochastic Process", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["Poisson","CTMC/DTMC","Queueing"], status:"completed", level:"undergrad" },
    { slug:"google-advanced-data-analytics", title:"Google Advanced Data Analytics Professional Certificate", institution:"Google x Coursera", date:"2024", type:"online-course", logo:"/learning/googlelogo.png", tags:["Python","Regression","Visualization"], status:"completed" },
    { slug:"genai-intensive-2025q1", title:"Gen AI Intensive Course 2025Q1", institution:"Google × Kaggle", date:"2025", type:"online-course", logo:"/learning/googlelogo.png", tags:["Prompting","Embeddings/RAG","Agents","MLOps"], status:"completed" },

    // In Progress（从 QBUS2810 起）
    { slug:"qbus2810", title:"QBUS2810: Statistical Modelling for Business", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Statiscal Modeling","Forecasting","Python"], status:"in-progress", level:"undergrad" },
    { slug:"data2902", title:"DATA2902: Data Analytics (Advanced)", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistical ML","Quarto/RMarkdown"], status:"in-progress", level:"undergrad" },
    { slug:"qbus2310", title:"QBUS2310: Management Science", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["LP/IP/NLP","Optimisation","Excel Solver","Python"], status:"in-progress", level:"undergrad" },
    { slug:"qbus3330", title:"QBUS3330: Methods of Decision Analysis", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Decision Trees","Sensitivity","Riskassssment","Managerial Decision Making"], status:"in-progress", level:"undergrad" },
    { slug:"comp5338", title:"COMP5338: Advanced Data Models", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["SQL","MongoDB","Neo4j","Distribution System"], status:"in-progress", level:"postgrad", audited:true },
    { slug:"comp5318", title:"COMP5318: Machine Learning and Data Mining", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Data Mining","Python"], status:"in-progress", level:"postgrad", audited:true },
    { slug:"comp5328", title:"COMP5328: Advanced Machine Learning", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Model Evaluation","PyTorch/TensorFlow"], status:"in-progress", level:"postgrad", audited:true },
  ]

  // 搜索（多关键词 AND）
  const filtered = items.filter((it) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [it.title, it.institution, ...(it.tags ?? [])].join(" ").toLowerCase()
    const hit = tokens.length === 0 || tokens.every(t => hay.includes(t))
    return hit
  })

  // 一行关键词（粉/紫系）
  const tagSuggestions = useMemo(() => ["Python", "ML", "Time Series", "SQL"], [])

  const toggleToken = (token: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const next = cur.includes(token) ? cur.filter(t => t !== token) : [...cur, token]
    setQ(next.join(" "))
  }
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div className="relative min-h-screen">
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

          {/* 搜索 + 关键词（仅一行） */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by code, title, institution, or tag…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-purple-400/30 text-white placeholder:text-gray-400 pr-10"
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

            {/* 关键词胶囊：自适应宽度 + 统一高度 */}
            <div className="flex flex-wrap gap-2 justify-center">
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

          {/* 列表（统一高度 + 角标在卡片内） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => {
              const statusClass =
                it.status === "completed"
                  ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
                  : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

              return (
                <Link key={it.slug} href={`/learning/${it.slug}`} className="block">
                  <Card className="relative h-full min-h-[240px] bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    {/* 右上角状态角标（在卡片内部） */}
                    <div className="absolute right-3 top-2 z-20">
                      <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm whitespace-nowrap ${statusClass}`}>
                        {it.status === "completed" ? "Completed" : "In Progress"}
                      </span>
                    </div>

                    {/* 头部：左小方 logo（图片填满） + 右侧文字 */}
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
                        <CardTitle className="text-white text-xl font-semibold leading-snug line-clamp-2">
                          {it.title}
                        </CardTitle>
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

                    {/* 标签区：显示所有标签（不再限制 3 个） */}
                    <CardHeader className="pt-2">
                      <div className="flex flex-wrap gap-2 min-h-[36px]">
                        {(it.tags ?? []).map((t) => (
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


