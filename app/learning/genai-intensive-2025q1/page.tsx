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

export default function genaiPage() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "genai-intensive-2025q1",
    title: "Google Gen AI Intensive Course",
    institution: "University of Sydney",
    term: "2025",
    logo: "/learning/googlelogo.png",
    status: "Completed" as const,
    tagline:
      "Fast-paced, hands-on intensive training in generative AI foundations, prompting, RAG, and agentic workflows, culminating in a capstone project.",
    tags: ["LLMs & Prompting", "Generative AI", "Visualization", "MLOps", "RAG / Embeddings"], 
    notes: [
      "/learning/gen.png",
    ],
  }
  const outcomes = [
    { k: "Foundation models & prompting", v: "Explain core LLM concepts and apply prompt-engineering patterns." },
    { k: "Embeddings & retrieval", v: "Use embeddings and vector search to support RAG-style tasks." },
    { k: "Agentic workflows", v: "Design simple GenAI agents and reason about multi-step tool use." },
    { k: "Domain-specific LLMs", v: "Understand considerations for specialized models and their applications." },
    { k: "Modeling Relationships", v: "Built and explained linear regression models to analyze relationships between variables." },
    { k: "GenAI MLOps", v: "Outline deployment/monitoring practices tailored to generative AI systems. " },
  ]

  const Takeaways =`
This intensive program was one of the most fast-paced and information-dense learning experiences I have taken part in. 
Within just five days, I was immersed in the essential building blocks of generative AI, from understanding foundation models and prompting strategies to experimenting with embeddings, retrieval-augmented generation, and lightweight agentic workflows. 
What made the course particularly valuable was the balance between expert-led seminars and the practical Kaggle labs, where I could immediately apply theoretical concepts to real coding exercises.
The capstone project was especially rewarding, as it pushed me to synthesize the different modules into an end-to-end solution, giving me first-hand experience in structuring a GenAI pipeline under time pressure. 
Through this process, I gained a stronger appreciation of the practical challenges in deploying generative systems, including evaluation and monitoring, which I had previously only read about.
It reinforced the idea that mastering these tools requires not just technical proficiency, but also a thoughtful consideration of use cases, limitations, and domain adaptation. 
Overall, completing this program has given me a solid foundation to continue experimenting with generative AI and to integrate these methods into my future academic and professional projects.
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
