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

export default function DATA1001Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "data1001",
    title: "DATA1001: Foundations of Data Science",
    institution: "University of Sydney",
    term: "2024 S2",
    logo: "/learning/usydlogo.png",
    status: "Completed" as const,
    tagline:
      "Built statistical thinking from study design to hypothesis testing, using base R and ggplot2.",
    tags: ["R", "Statistics", "Visualization", "Hypothesis Testing"],
    notes: [
      "/learning/group10.png",
      "/learning/top5.png",
    ],
  }

  const outcomes = [
    { k: "Statistical Foundations", v: "Articulated the role of statistics in society, with emphasis on ethical use, privacy, and big-data challenges." },
    { k: "Study Design & Interpretation", v: "Evaluated how sampling and experimental design influence conclusions and limitations of data analysis." },
    { k: "Data Summarization & Visualization", v: "Produced and interpreted graphical & numerical summaries using base R and ggplot2." },
    { k: "Probability & Inference", v: "Applied normal approximation and box models to describe chance variation and measurement error." },
    { k: "Modeling Relationships", v: "Built and explained linear regression models to analyze relationships between variables." },
    { k: "Hypothesis Testing", v: "Formulated hypotheses, ran appropriate tests, interpreted p-values while avoiding common pitfalls." },
    { k: "Critical Thinking", v: "Assessed bias, confounding, and misuse of statistics in media and published research." },
    { k: "Team-Based Exploration", v: "Delivered collaborative analyses via reproducible reports and oral presentations." },
  ]

  const Takeaways =`
  This course was a true turning point for me. At the beginning, I knew almost nothing about R or statistics, but step by step I learned how to use EDA, frame clear hypotheses, and apply tests to validate them. Our team project was recognized as one of the top 5 among more than 800 peers, and later I also earned a top 5 spot in the individual project.
  What made this journey meaningful was not just the grades, but the growth: learning how to clean and interpret data systematically, asking the right questions as if I were consulting a client, and building confidence in applying statistical reasoning to real problems. 
  R pushed me to think in tidy pipelines, while the statistical foundation gave me tools to question assumptions and defend conclusions responsibly.
  Looking back, I see this course as more than a class—it was the moment I discovered how data and statistics could become a lens for problem-solving, and how persistence can transform uncertainty into clarity.
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

          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
            <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
              <span>{meta.institution}</span><span>•</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {meta.term}</span>
            </div>
          </header>

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
                  {meta.tags.map(t => (
                    <Badge key={t} className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-200">{meta.tagline}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">Learning Outcomes</h2>
            <ul className="space-y-3 text-gray-200">
              {outcomes.map(o => (
                <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{o.k}:</strong> {o.v}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Takeaways</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {Takeaways}
            </p>
          </section>
        </div>
      </div>

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





