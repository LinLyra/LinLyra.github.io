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
    term: "2024 S1",
    // 去掉学分与语言显示
    logo: "/learning/usydlogo.png",
    status: "Completed" as const,
    tagline:
      "Built statistical thinking from study design to hypothesis testing, using base R and ggplot2.",
    tags: ["R", "Statistics", "Visualization", "Hypothesis Testing"],
    notes: [
      "/notes/data1001note1.jpg",
      "/notes/data1001note2.jpg",
      "/notes/data1001note3.jpg",
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
  When I first entered this course, I was a complete beginner to both R and statistics. At the start, even simple tasks like importing data or interpreting a basic summary felt overwhelming. 
  Step by step, however, I learned how to approach problems systematically: beginning with exploratory data analysis, carefully cleaning and visualizing data, formulating hypotheses, and running the appropriate tests to validate them. 
  
  One of the most transformative moments came during our team project. Working collaboratively, we managed to push ourselves beyond what we thought possible and ended up ranking top 5 out of more than 800 students. 
  That achievement gave me a strong sense of confidence, but it also showed me the importance of teamwork—how combining diverse perspectives can sharpen both the analysis and the story we tell with data. 
  Later, in my individual project, I again reached the top 5, and that milestone felt even more meaningful because it proved to me that I could now stand on my own and handle the full pipeline—from framing the right question, to applying models, to presenting a convincing conclusion. 
  
  Beyond the rankings, the most valuable part of this journey was how it reshaped the way I think about data. I learned to question assumptions instead of taking results at face value, to design analyses that reflect real-world data-generating processes, and to communicate uncertainty responsibly. 
  Working in R taught me to think in tidy workflows, but more importantly, this course taught me that statistics is not about chasing the highest R² or the smallest p-value—it is about building arguments that balance evidence, domain knowledge, and practical significance.

  Looking back, I see this course not just as a technical training, but as a growth journey. I began with almost no knowledge, and ended with both recognition and confidence: the ability to use R as a tool for exploration, the courage to propose my own questions to clients or datasets, and the maturity to see statistics as a guide for clearer, fairer decision-making.
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





