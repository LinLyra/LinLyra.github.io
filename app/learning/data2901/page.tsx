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
    slug: "data2901",
    title: "DATA2901: Big Data and Data Diversity (Advanced)",
    institution: "University of Sydney",
    term: "2025 S1",
    logo: "/learning/usydlogo.png",
    status: "Completed" as const,
    tagline:
      "Applied Linux, SQL, Python, and Hadoop for large-scale data pipelines, integrating machine learning and database design into real-world workflows.",
    tags: ["Python", "SQL", "Hadoop", "Linux", "Jupyter", "Big Data"],
    notes: [
        "/learning/data2901note1.png",
        "/learning/data2901note2.png",
        "/learning/data2901note3.png",
        "/learning/data29011.png",
        "/learning/data29012.png",
        "/learning/data29013.png",
        "/learning/data29014.png",
    ],
  }

  const outcomes = [
    { k: "Data Automation", v: "Automated tasks on structured, semi-structured and unstructured data (text, images, geo, time series)." },
    { k: "Ingestion & Integration", v: "Combined heterogeneous datasets and produced meaningful summaries under real-world constraints." },
    { k: "Declarative Querying", v: "Wrote efficient SQL for extraction and manipulation." },
    { k: "Big Data Fundamentals", v: "Applied the 4Vs; used indexing, compression, partitioning, and distributed frameworks like Hadoop." },
    { k: "Ethics & Privacy", v: "Considered privacy and ethical implications when handling sensitive/large-scale data." },
  ]


  const Takeaways =`
  This was my first advanced-level data science course, and the expectations were clearly higher than in introductory units. I learned how to work with Linux systems for handling data, deepened my knowledge of big data concepts, and used Jupyter notebooks to connect with PostgreSQL databases. 
  A key part of the course was designing better table structures and fields to support efficient querying and retrieval—skills that are directly relevant to a data scientist’s work.
  In the group project, we also had to integrate machine learning techniques to support our analysis, which required both technical adaptability and teamwork. 
  At the same time, the SQL tests and final exam were particularly challenging for me, but I see those difficulties as valuable growth opportunities. Beyond the technical skills, I also realized how important it is to manage group dynamics effectively when tackling complex projects. 
  Overall, the challenges were significant, but the learning outcomes and confidence I gained were even greater.
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

