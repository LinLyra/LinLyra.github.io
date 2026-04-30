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

export default function QBUS3310Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "qbus3310",
    title: "QBUS3310: Advanced Management Science",
    institution: "University of Sydney",
    term: "2026 S1",
    logo: "/learning/usydlogo.png",
    status: "Planned" as const,
    tagline:
      "Develops optimisation, decision analysis, stochastic modelling, and management science techniques for practical managerial decision-making.",
    tags: ["Optimisation", "Management Science", "Decision Analysis"],
    notes: [] as string[],
  }

  const outcomes = [
    {
      k: "Mathematical models",
      v: "Demonstrate a clear understanding of different mathematical and statistical models and methods that support decision-making for management.",
    },
    {
      k: "Creative modelling",
      v: "Apply creative thinking to distil key relationships from complex interactions between cost variables.",
    },
    {
      k: "Operational constraints",
      v: "Recognise different cost components and operational constraints in modelling business problems.",
    },
    {
      k: "Method selection",
      v: "Critically appraise the suitability of different analytic methods for a specific business purpose.",
    },
    {
      k: "Business application",
      v: "Apply business analytic methods to real-life problems and adapt models to specific business contexts.",
    },
    {
      k: "Communication",
      v: "Communicate analytical findings using appropriate optimisation methods and both technical and layman’s language.",
    },
  ]

  const takeaways = `Coming soon.`

  const hasNotes = meta.notes.length > 0
  const badge =
    meta.status === "Planned"
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
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {meta.title}
            </h1>
            <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {meta.term}
              </span>
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
                  {meta.tags.map((t) => (
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
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">
              Learning Outcomes
            </h2>
            <ul className="space-y-3 text-gray-200">
              {outcomes.map((o) => (
                <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{o.k}:</strong> {o.v}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">
              Takeaways
            </h2>
            <p className="whitespace-pre-line text-gray-200 text-base leading-relaxed">
              {takeaways}
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