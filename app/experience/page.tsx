"use client"

import { useState } from "react"
import Link from "next/link"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"

type ExperienceItem = {
  id: string
  title: string
  company: string
  location: string
  date: string
  type: "consulting" | "development" | "research" | "volunteer"
  description: string
  skills: string[]
  image?: string
}

export default function ExperiencePage() {
  const [searchTerm, setSearchTerm] = useState("")

  // ✅ 只有这一个实习卡片
  const experiences: ExperienceItem[] = [
    {
      id: "abc-better-consulting",
      title: "Consulting Intern",
      company: "ABC Better Consulting",
      location: "Shanghai, China",
      date: "Jul 2025 – Sep 2025",
      type: "consulting",
      description:
        "Worked on market entry and growth strategy for consumer brands. Built research frameworks, cleaned and analyzed datasets, and translated insights into executive-facing slides.",
      skills: [
        "Market Research",
        "Competitive Analysis",
        "Excel / SQL",
        "Storytelling",
        "Client Communication",
      ],
      // 放一张横图：/public/experience/abc-better-consulting/cover.jpg
      image: "/experience/abc-better-consulting/cover.jpg",
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
      <GalaxyBackground />
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
            <h1 className="text-4xl font-bold text-white mb-4">Professional Experience</h1>
            <p className="text-gray-300">
              Applying what I learn to real business problems
            </p>
          </div>

          <div className="mb-8">
            <Input
              placeholder="Search experience…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((exp) => (
              <Link key={exp.id} href={`/experience/${exp.id}`}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full">
                  {exp.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{exp.date}</span>
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{exp.title}</CardTitle>
                    <div className="text-yellow-400 text-sm font-medium">{exp.company}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {exp.skills.slice(0, 3).map((s) => (
                        <Badge key={s} className="bg-blue-500/20 text-blue-200 border-blue-500/30 text-xs">
                          {s}
                        </Badge>
                      ))}
                      {exp.skills.length > 3 && (
                        <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                          +{exp.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
