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

export default function OracleDataScienceProfessionalPage() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "oracle-cloud-data-science-professional-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    institution: "Oracle",
    term: "2025 10",
    logo: "/learning/oraclelogo.png",
    status: "Completed" as const,
    tagline:
      "Professional certification covering Oracle Cloud Infrastructure data science workflows, model development, deployment, MLOps, and cloud-based machine learning practices.",
    tags: [
      "Oracle Cloud",
      "Data Science",
      "Machine Learning",
      "MLOps",
      "Model Deployment",
    ],
    notes: ["/learning/oracle-certificate.png"],
  }

  const outcomes = [
    {
      k: "OCI Data Science workflow",
      v: "Understand how to use Oracle Cloud Infrastructure services to support end-to-end data science workflows.",
    },
    {
      k: "Model development",
      v: "Build, train, evaluate, and manage machine learning models in a cloud-based data science environment.",
    },
    {
      k: "Model deployment",
      v: "Understand how trained models can be deployed as scalable services for real-world prediction tasks.",
    },
    {
      k: "MLOps practices",
      v: "Apply concepts related to experiment tracking, model lifecycle management, reproducibility, and monitoring.",
    },
    {
      k: "Cloud infrastructure",
      v: "Develop awareness of how compute, storage, networking, and security support production-ready data science systems.",
    },
    {
      k: "Business application",
      v: "Connect technical data science workflows with practical enterprise use cases and decision-making scenarios.",
    },
  ]

  const Takeaways = `
This certification helped me connect data science knowledge with real cloud infrastructure and production-oriented machine learning workflows.

The main takeaway was that data science is not only about building models in notebooks. In real enterprise settings, a model needs to be trained, evaluated, deployed, monitored, and maintained within a reliable infrastructure environment. Learning the Oracle Cloud Infrastructure data science workflow helped me better understand how machine learning moves from experimentation to real business application.

I also gained a clearer view of MLOps. Concepts such as model versioning, deployment, reproducibility, and monitoring are essential when models are used by real users or business systems. This certification strengthened my understanding of the gap between a working prototype and a production-ready machine learning solution.

Another important learning was the role of cloud services in supporting scalable AI projects. Compute resources, storage, security, and deployment tools are not separate from data science; they shape how effectively models can be built and delivered. This is especially relevant to my interest in AI products, data analytics, and cloud-based intelligent systems.

Overall, completing this certification improved my confidence in cloud data science and gave me a stronger foundation for building, deploying, and explaining machine learning solutions in practical environments.
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
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badge}`}
              >
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image
                  src={meta.logo}
                  alt="logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {meta.tags.map((t) => (
                    <Badge
                      key={t}
                      className="bg-purple-500/20 text-purple-100 border-purple-500/30"
                    >
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