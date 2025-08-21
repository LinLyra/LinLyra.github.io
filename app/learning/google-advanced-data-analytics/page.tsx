

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import MediaModel from "@/components/media-model"

export default function GoogleAdvancedDAPage() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "google-advanced-data-analytics",
    title: "Google Advanced Data Analytics Professional Certificate",
    institution: "Google x Coursera",
    term: "2024",
    logo: "/learning/googlelogo.png",
    status: "Completed" as const,
    tagline:
      "7-course professional program covering statistical analysis, Python workflows, ML modeling, and stakeholder communication — capped by an end-to-end project.",
    tags: ["Python", "Statistics", "Regression", "ML", "Visualization", "Tableau"],
    notes: [
      "/learning/google1.png", 
      "/learning/google2.png", 
      "/learning/google3.png", 
    ]
  }

  const outcomes = [
    {
      k: "Role & practice",
      v: "Understood the roles of data professionals in organizations and the kinds of problems they solve."
    },
    {
      k: "Exploratory analysis & visualization",
      v: "Created exploratory visualizations and applied statistical methods to investigate data."

    },
    {
      k: "Modeling",
      v: "Built and interpreted regression and machine-learning models for analysis and prediction."
      
    },
    {
      k: "Communication",
      v: "Communicated insights through clear narratives and dashboards tailored to stakeholders."
    },
    {
      k: "Hands-on tooling",
      v: "Gained practical experience using Python in Jupyter Notebook and Tableau for end-to-end workflows."
    },
    {
      k: "Capstone",
      v: "Completed an end-to-end project demonstrating applied advanced analytics skills."
    },
  ]

  const Takeaways = `
  This program gave me more than technical skills—it reshaped how I think about data as a tool for problem-solving. Each course added a layer, from statistics and Python workflows to visualization and stakeholder communication. 
  I learned how to frame questions in a structured way, test them rigorously, and translate results into insights that others could act on.
  The capstone project was especially meaningful because it forced me to bring everything together: exploring messy data, building predictive models, and presenting findings with clarity. 
  It wasn’t just about coding or running models, but about telling a story that could guide decisions.
  Looking back, the biggest gain was confidence: knowing I can approach complex problems systematically, and that I have both the technical foundation and the communication skills to make my work matter.
  `

  const hasNotes = meta.notes.length > 0
  const badge =
    meta.status === "Completed"
      ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
      : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="learning" onSectionChange={() => {}} />
      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* 顶部返回 + View More */}
          <div className="flex items-center justify-between">
            <Link href="/learning">
              <Button className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
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

          {/* 标题 */}
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
            <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {meta.term}
              </span>
            </div>
          </header>

          {/* 顶部卡片 */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badge}`}>
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image src={meta.logo} alt="logo" fill sizes="48px" className="object-cover" priority />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {meta.tags.map((t) => (
                    <Badge key={t} className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-200">
                  Designed for learners with prior analytics experience; recently updated and recommended at the advanced level.{" "}
                  <a href="https://www.coursera.org/programs/temporada-2025-cr5r1/professional-certificates/google-advanced-data-analytics?utm_source=chatgpt.com" className="underline text-fuchsia-300" target="_blank" rel="noreferrer">
                    Coursera
                  </a>{" "}
                  ·{" "}
                  <a href="https://career.skills.google/paths/2417?utm_source=chatgpt.com" className="underline text-fuchsia-300" target="_blank" rel="noreferrer">
                    Career Skills
                  </a>
                </p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          {/* Learning Outcomes */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">Learning Outcomes</h2>
            <ul className="space-y-3 text-gray-200">
              {outcomes.map((o) => (
                <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{o.k}:</strong> {o.v}{" "}
                  {o.href && (
                    <a
                      href={o.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-fuchsia-300"
                    >
                      Learn more
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaways */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Takeaways</h2>
            <p className="text-gray-200 text-base leading-relaxed">{Takeaways}</p>
          </section>
        </div>
      </div>

      {/* 笔记（有图才显示） */}
      {hasNotes && (
        <MediaModel
          isOpen={showNotes}
          onClose={() => setShowNotes(false)}
          title={meta.title}
          media={{ images: meta.notes }}
        />
      )}
    </div>
  )
}
