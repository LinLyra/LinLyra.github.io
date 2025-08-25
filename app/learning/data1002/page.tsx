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

export default function DATA1002Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "data1002",
    title: "DATA1002: Informatics: Data and Computation",
    institution: "University of Sydney",
    term: "2024 S2",
    logo: "/learning/usydlogo.png",
    status: "Completed" as const,
    tagline:
      "Developed skills in data cleaning, pipelines, and applied machine learning by combining Python programming with spreadsheet tools.",
    tags: ["Python", "Machine Learning", "Data Pipelines", "Visualization"],
    notes: [] as string[]    
  }

  const outcomes = [
    { k: "Python Automation", v: "Wrote procedural Python programs to automate data workflows based on defined algorithms." },
    { k: "Data Pipeline Skills", v: "Hands-on experience in ingestion, cleaning, transformation, summarization modeling, and evaluation." },
    { k: "Tool Proficiency", v: "Learned to choose between spreadsheets and Python depending on stage of data science, understanding trade-offs." },
    { k: "Visualization & Communication", v: "Created charts with Python and spreadsheets, evaluated clarity of communication." },
    { k: "Machine Learning Basics", v: "Built predictive models (classification & regression), practiced model evaluation, understood overfitting/underfitting." },
    { k: "Data Representation", v: "Understood logical vs. physical dataset representation and data sharing considerations (metadata, integrity, portability)." },
  ]

  const Takeaways =`
  This was my first systematic experience using Python to clean and analyze data. The course moved at a fast pace: we began with basic data exploration and quickly advanced to a wide range of machine learning methods. 
  In the group project, each member was required to apply a different ML model—including at least one technique beyond the lectures—which really pushed us to self-learn and explore independently. 
  This not only deepened my understanding of classification and regression but also gave me confidence in applying models I had never seen before.
  At the same time, I faced challenges in the Python tests. As a beginner, adapting to a new programming language while keeping up with the workload was difficult, and my early performance was not ideal. 
  However, this became a turning point: I reflected on my weaknesses, put in extra effort to strengthen my coding fundamentals, and gradually improved my ability to use Python effectively. 
  By the end of the course, I not only had stronger technical skills, but also a better mindset for approaching steep learning curves with resilience.
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





