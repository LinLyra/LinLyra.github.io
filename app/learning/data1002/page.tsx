"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import MediaModel from "@/components/media-model"

const meta = {
  title: "DATA1002: Informatics: Data and Computation",
  institution: "University of Sydney",
  date: "2024 S2",
  status: "completed" as const,
  logo: "/learning/usydlogo.png",
  tags: ["Python", "Spreadsheets", "Data Pipelines", "Visualization"],
  intro:
    "Developed foundational skills for data-driven problem solving by combining Python programming with spreadsheet tools.",
  // 笔记图片：有就填进来（示例）
  // media: ["/notes/data1002/1.jpg", "/notes/data1002/2.jpg"],
  media: [] as string[],
}

export default function Data1002Page() {
  const [showNotes, setShowNotes] = useState(false)
  const hasNotes = (meta.media?.length ?? 0) > 0

  const statusClass =
    meta.status === "completed"
      ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
      : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* 顶部返回 + View More（与 DATA1001 一致） */}
          <div className="flex items-center justify-between">
            <Link href="/learning">
              <Button className="mb-0 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30"
              >
                View More
              </Button>
            )}
          </div>

          {/* 标题/基本信息（保持你的原风格） */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
            <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
              {meta.institution} • <Calendar className="w-4 h-4" /> {meta.date}
            </p>
          </div>

          {/* Hero 卡片（不改样式，只把按钮移到了上方） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 z-20">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border ${statusClass}`}>
                Completed
              </span>
            </div>

            <div className="p-6 pt-10 flex gap-4">
              <div className="relative flex-shrink-0 h-14 w-14 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image src={meta.logo} alt="course logo" fill sizes="56px" className="object-cover" priority />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-purple-500/20 text-purple-100 border border-purple-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mt-3">{meta.intro}</p>
              </div>
            </div>
          </Card>

          {/* Learning Outcomes */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Learning Outcomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-200 text-sm">
              <li>
                <b>Python Automation:</b> Wrote procedural Python programs to automate data workflows based on defined
                algorithms.
              </li>
              <li>
                <b>Data Pipeline Skills:</b> Hands-on experience in ingestion, cleaning, transformation, summarization,
                modeling, and evaluation.
              </li>
              <li>
                <b>Tool Proficiency:</b> Learned to choose between spreadsheets and Python depending on stage of data
                science, understanding trade-offs.
              </li>
              <li>
                <b>Visualization & Communication:</b> Created charts with Python and spreadsheets, evaluated clarity of
                communication.
              </li>
              <li>
                <b>Machine Learning Basics:</b> Built predictive models (classification & regression), practiced model
                evaluation, understood overfitting/underfitting.
              </li>
              <li>
                <b>Data Representation:</b> Understood logical vs. physical dataset representation and data sharing
                considerations (metadata, integrity, portability).
              </li>
            </ul>
          </Card>

          {/* Reflection */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">Reflection</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              This course gave me my first real experience of thinking end-to-end about data: not only how to clean and
              analyze it, but also how to design workflows, communicate results clearly, and evaluate trade-offs between
              tools. I found that using both spreadsheets and Python helped me understand the strengths of each — fast
              prototyping vs. scalable automation. The unit also gave me confidence in building small predictive models,
              which has shaped how I now approach problem-solving: by breaking down messy, real-world problems into clear
              steps with reproducible methods.
            </p>
          </Card>
        </div>
      </div>

      {/* 轻量图片查看（有图时才渲染，与 DATA1001 一致） */}
      {hasNotes && (
        <MediaModel
          isOpen={showNotes}
          onClose={() => setShowNotes(false)}
          title={meta.title}
          media={{ images: meta.media }}
        />
      )}
    </div>
  )
}

