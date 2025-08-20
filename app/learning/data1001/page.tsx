"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

// 如果你的组件名是 media-model，请保持下面的路径与名称一致；
// 组件需要至少支持 props: images: string[], onClose: () => void, startIndex?: number
import MediaModel from "@/components/media-model"

export default function DATA1001Page() {
  const [showNotes, setShowNotes] = useState(false)

  // —— 课程元信息（按需改动） ——
  const meta = {
    slug: "data1001",
    title: "DATA1001: Foundations of Data Science",
    institution: "University of Sydney",
    term: "2024 S1",
    credit: "6 CP",
    language: "R (base & ggplot2)",
    logo: "/learning/usydlogo.png",
    status: "Completed" as const,
    tagline:
      "Built statistical thinking from study design to hypothesis testing, using base R and ggplot2.",
    tags: ["R", "Statistics", "Visualization", "Hypothesis Testing"],
    notes: [
      "/notes/data1001/note1.jpg",
      "/notes/data1001/note2.jpg",
      "/notes/data1001/note3.jpg",
    ],
  }

  const hasNotes = meta.notes && meta.notes.length > 0

  const learningOutcomes = [
    {
      k: "Statistical Foundations",
      v: "Articulated the role of statistics in society, with emphasis on ethical use, privacy, and big-data challenges.",
    },
    {
      k: "Study Design & Interpretation",
      v: "Evaluated how sampling and experimental design influence conclusions and limitations of data analysis.",
    },
    {
      k: "Data Summarization & Visualization",
      v: "Produced and interpreted graphical & numerical summaries using base R and ggplot2.",
    },
    {
      k: "Probability & Inference",
      v: "Applied normal approximation and box models to describe chance variation and measurement error.",
    },
    {
      k: "Modeling Relationships",
      v: "Built and explained linear regression models to analyze relationships between variables.",
    },
    {
      k: "Hypothesis Testing",
      v: "Formulated hypotheses, ran appropriate tests, interpreted p-values while avoiding common pitfalls.",
    },
    {
      k: "Critical Thinking",
      v: "Assessed bias, confounding, and misuse of statistics in media and published research.",
    },
    {
      k: "Team-Based Exploration",
      v: "Delivered collaborative analyses via reproducible reports and oral presentations.",
    },
  ]

  const reflection = `
This course sharpened my ability to frame questions statistically before touching the code. 
I learned to defend assumptions, design analyses that match data‐generation processes, and 
communicate uncertainty responsibly. Working in R forced me to think in tidy pipelines and 
be explicit about model diagnostics rather than just chasing high R². Most importantly, I now 
treat p-values as one piece of evidence—not a verdict—and pair them with effect sizes, visual 
checks, and domain context.
  `.trim()

  const statusClass =
    meta.status === "Completed"
      ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
      : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* 顶部返回 */}
          <div className="flex items-center justify-between">
            <Link href="/learning">
              <Button className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning
              </Button>
            </Link>

            {/* 右上角 View More（仅当有图片笔记时显示） */}
            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30"
              >
                View More
              </Button>
            )}
          </div>

          {/* 标题 */}
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {meta.title}
            </h1>
            <div className="text-gray-300 inline-flex items-center gap-3 text-sm md:text-base">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {meta.term}
              </span>
              <span>•</span>
              <span>{meta.credit}</span>
              <span>•</span>
              <span>{meta.language}</span>
            </div>
          </header>

          {/* 顶部卡片：logo + 标签 + 一句话总结 + 状态 */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            {/* 右上角状态 */}
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm whitespace-nowrap ${statusClass}`}
              >
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6 flex items-start gap-4">
              {/* 左上角小方 logo（图片撑满） */}
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image
                  src={meta.logo}
                  alt={`${meta.title} logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {meta.tags.map((t) => (
                    <Badge
                      key={t}
                      className="bg-purple-500/20 text-purple-100 border-purple-500/30"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-200">
                  {meta.tagline}
                </p>
              </div>
            </div>

            {/* 宇宙分隔波纹（可去掉） */}
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          {/* Learning Outcomes */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Learning Outcomes
            </h2>
            <ul className="space-y-3 text-gray-200">
              {learningOutcomes.map((lo) => (
                <li key={lo.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{lo.k}:</strong> {lo.v}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Reflection
            </h2>
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">
              {reflection}
            </p>
          </section>
        </div>
      </div>

      {/* 轻量图片查看（仅当有 notes 时） */}
      {hasNotes && showNotes && (
        <MediaModel
          images={meta.notes}
          onClose={() => setShowNotes(false)}
          // 可选：startIndex={0}
        />
      )}
    </div>
  )
}
