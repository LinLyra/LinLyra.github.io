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

export default function ISYS2120Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "isys2120",
    title: "ISYS2120: Data and Information Management",
    institution: "University of Sydney",
    term: "2025 S2",
    logo: "/learning/usydlogo.png",
    status: "In Progress" as const,
    tagline:
      "Intro to conceptual, logical, and physical database design with emphasis on integrity constraints and normalization; querying and updating data with SQL; application use of a relational DBMS; transaction management; plus an overview of data warehousing and OLAP.",
    tags: ["DBMS","RelationalModel","SQL","Normalization","Transactions","Security","OLAP"],
    notes: [] as string[]
  }

  const outcomes = [
    { k: "DBMS concepts & roles", v: "Understand what a DBMS is, how it differs from other ways to store/share data, its role in organisations, and typical DBMS tasks." },
    { k: "Relational model fundamentals", v: "Relate relational data to real-world facts (and vice versa), and know the benefits and limitations of the relational approach." },
    { k: "SQL with integrity", v: "Work with data in an RDBMS: read table definitions and integrity constraints; extract and modify information using SQL queries." },
    { k: "Schema design & normalization", v: "Design a suitable schema from a domain: build a conceptual model, produce a relational schema with constraints, apply normalization to evaluate or improve it." },
    { k: "Apps & architecture", v: "Explain how application software uses a relational DBMS and compare basic architectural alternatives for data-driven applications." },
    { k: "Security & privacy controls", v: "Understand goals, threats, and protection techniques: SQL views, access control, integrity constraints, and stored procedures." },
    { k: "Internals for performance", v: "Grasp DBMS implementation concepts affecting quality/performance, including query processing, index structures, and transactions." },
    { k: "Theory ↔ Platforms", v: "Connect general database concepts to both abstract theory and details of specific software platforms." },
    { k: "Teamwork", v: "Work effectively in teams with members whose skills and interests differ." }
  ]

  const Takeaways = `This course significantly reshaped the way I think about data as a system rather than just a resource. Through learning conceptual, logical, and physical database design, I developed the ability to translate complex real-world domains into structured data models and to reason about how facts, entities, 
  and relationships should be represented to support long-term correctness and scalability. Working with SQL in the presence of integrity constraints helped me understand how databases actively enforce business rules, rather than simply storing information, while normalization provided a rigorous framework for evaluating and improving schema quality. 
  Beyond schema design, the course deepened my understanding of how applications interact with relational DBMSs, including architectural trade-offs, transaction management, concurrency, and recovery, which clarified why certain design decisions have major implications for reliability and performance. Topics such as security, access control, 
  and privacy further highlighted the importance of designing data systems that are not only functional but also trustworthy and resilient. Finally, the exposure to database internals, data warehousing, and OLAP connected foundational theory with modern analytical and enterprise platforms, giving me a more holistic perspective on how operational databases, 
  analytical systems, and downstream data and AI applications fit together in practice.`

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
