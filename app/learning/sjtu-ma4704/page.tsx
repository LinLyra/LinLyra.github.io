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

export default function MA413Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "sjtu-ma4704",
    title: "MA4704: Stochastic Process",
    institution: "Shanghai Jiao Tong University",
    term: "2025",
    logo: "/learning/sjtulogo.png",
    status: "Completed" as const,
    tagline:
      "Rigorous foundations for modelling time-dependent randomness: Markov chains, Poisson processes, queues, Brownian motion.",
    tags: ["Probability", "DTMC/CTMC", "Poisson", "Queueing"],
    notes: [] as string[],
  }

  const outcomes = [
    { k: "Probability & process fundamentals", v: "Explained core probability concepts and definitions of stochastic processes." },
    { k: "DTMC modelling", v: "Formulated discrete-time Markov chains and constructed transition matrices." },
    { k: "Limit theorems & stationarity", v: "Applied DTMC limit theorems and identified stationary distributions." },
    { k: "Gambler’s ruin & extinction", v: "Analysed ruin/extinction probabilities in canonical models." },
    { k: "Poisson processes", v: "Explained properties and solved standard problems; built Poisson models from data." },
    { k: "CTMC construction", v: "Formulated continuous-time Markov chains and identified generators." },
    { k: "Queueing primers", v: "Explained queue length/throughput and solved simple waiting-time/queueing problems." },
    { k: "Brownian motion & martingales", v: "Stated key definitions and properties for applications." },
    { k: "Mathematical maturity", v: "Wrote clear proofs and mapped theory to diverse applications." },
  ]
  
  const Takeaways =`
  This three-week summer course compressed a wide range of stochastic process theory into an intensive format, which pushed me to build both speed and depth in understanding. 
  I strengthened my ability to reason rigorously about randomness through topics such as Markov chains, Poisson processes, queueing systems, and Brownian motion. 
  Without group projects, the focus was on individual mastery, and I learned to independently construct proofs, identify stationary behaviours, and connect abstract probability theory with real-world dynamic systems. 
  The fast-paced setting also improved my mathematical maturity, training me to approach uncertainty with structure and long-run reasoning.
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

