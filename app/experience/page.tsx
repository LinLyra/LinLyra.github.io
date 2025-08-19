"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft } from "lucide-react"

type ExperienceItem = {
  id: string
  title: string
  company: string
  date: string
  type: "consulting" | "development" | "program"     // kept for typing; not rendered
  skills: string[]
  logo: string               // /public/experience/<slug>/logo.png
}

export default function ExperiencePage() {
  const [searchTerm, setSearchTerm] = useState("")

  // ===== Experiences (all English; blue theme) =====
  const experiences: ExperienceItem[] = [
    {
      id: "abc-better-community",
      title: "AI Development（Research Department",
      company: "A Better Community",
      date: "2025.3 — Present",
      type: "consulting",
      skills: ["Research Design","Generative AI","Data Pipeline Engineering","Prompt Engineering","API Integration"],
      logo: "/experience/abclogo.png",
    },
    {
      id: "abc-better-community",
      title: "Product Consultant,",
      company: "A Better Community",
      date: "2025.3 — Present",
      type: "consulting",
      skills: ["Stakeholder Interview","Data Cleaning","Slide Decks","Project Management","AI-agent"],
      logo: "/experience/abclogo.png",
    },
     {
      id: "saiep-program",
      title: "Management Consultant",
      company: "Study Australian Industry Experience Program",
      date: "2025.7",
      type: "program",
      skills: ["Strategic Thinking","Market Research", "Competitive Analysis", "Business Model Design", "Growth Strategy"],
      logo: "/experience/SAIEPlogo.png",
    },
    {
      id: "accenture-strategy-consulting-forage",
      title: "Accenture Australia Strategy Consulting Virtual Experience",
      company: "Accenture (Forage)",
      date: "2025",
      type: "consulting",
      skills: ["Strategy Consulting", "Data Analysis", "Client Communication", "Problem Solving"],
      logo: "/experience/accenturelogo.png",
    },
    {
      id: "deloitte-technology-forage",
      title: "Deloitte Australia Technology Virtual Experience",
      company: "Deloitte (Forage)",
      date: "2025",
      type: "development",
      skills: ["Data Analysis"，"Tableau"，"Python","Web Security"],
      logo: "/experience/deloittelogo.png",
    },
   
  ]

  const filtered = experiences.filter((exp) => {
    const q = searchTerm.toLowerCase()
    return (
      exp.title.toLowerCase().includes(q) ||
      exp.company.toLowerCase().includes(q) ||
      exp.skills.some((s) => s.toLowerCase().includes(q))
    )
  })

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="experience" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
            <p className="text-gray-300">Where learning meets real-world impact.</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <Input
              placeholder="Search experience by title, company, or skill…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Cards: left logo + right title/company/date; no status, no location, no description */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((exp) => (
              <Link key={exp.id} href={`/experience/${exp.id}`}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full">
                  {/* Header row */}
                  <div className="flex items-start gap-4 p-5 pt-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-white text-xl font-semibold whitespace-normal">
                        {exp.title}
                      </CardTitle>
                      <div className="mt-1 text-gray-300 text-sm font-medium">{exp.company}</div>
                      <div className="mt-1 text-gray-400 text-sm inline-flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pt-3">
                    {/* Blue skill chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 6).map((s) => (
                        <span
                          key={s}
                          className="rounded-full px-2.5 py-1 text-xs bg-sky-500/20 text-sky-100 border border-sky-500/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  {/* No description */}
                  <CardContent />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

