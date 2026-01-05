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

export default function COMP5328Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "comp5328",
    title: "COMP5328: Advanced Machine Learning",
    institution: "University of Sydney",
    term: "2025 S2",
    logo: "/learning/usydlogo.png",
    status: "In Progress" as const,
    tagline:
      "Explores core machine learning algorithms and theory, focusing on model design, evaluation, improvement, and adaptation, with hands-on implementation using Python libraries.",
    tags: ["MachineLearning", "ModelEvaluation", "Python","DeepLearning"],
    notes: [] as string[]    
  }
  
  const outcomes = [
    { k: "Algorithm design & evaluation", v: "Present the design of an ML algorithm, including experimental evaluation and reporting." },
    { k: "Bias–variance trade-off", v: "Explain and reason about variance, bias, under/overfitting, and regularisation." },
    { k: "Algorithm analysis & improvement", v: "Analyse representative ML algorithms and identify avenues for performance/robustness improvements." },
    { k: "Problem framing & model adaptation", v: "Formulate learning problems and adapt existing models to new objectives or constraints." },
    { k: "Paper-to-code implementation", v: "Implement algorithms described in peer-reviewed research papers." },
    { k: "Statistical foundations", v: "Understand the statistical principles behind learning algorithm design/adaptation." },
    { k: "Model suitability", v: "Compare introduced models—their strengths, weaknesses, and appropriate use cases." },
  ]

  const Takeaways = `This course strengthened my ability to use statistical modelling as a practical tool for understanding data-generating processes and supporting business decision-making, rather than treating models as purely technical artifacts. 
  By learning how to specify, estimate, and interpret statistical models, I developed a clearer understanding of how relationships between variables can be quantified, tested, and translated into meaningful insights. 
  Working with Python to manage data, build models, and visualize results reinforced the end-to-end nature of applied data analysis, from raw data preparation to communicating conclusions. The emphasis on interpreting coefficients, uncertainty, 
  and model assumptions improved my ability to reason about causality, limitations, and robustness, while forecasting and relationship analysis highlighted how statistical models inform planning under uncertainty. Equally important, 
  the course focused on communicating results clearly to non-technical stakeholders, ensuring that statistical evidence can be used effectively in real decision contexts. Overall, this course provided a strong statistical foundation that complements optimisation and decision analysis, 
  forming a core pillar for advanced work in data science, analytics, and AI-driven decision support systems.`

  
  const hasNotes = meta.notes.length > 0
  const badge =
    meta.status === "In Progress"
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
