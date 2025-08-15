"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  date: string
  type: string
  description: string
  skills: string[]
  image?: string
}

export default function ExperiencePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const experiences: ExperienceItem[] = [
    {
      id: "leaf-australia",
      title: "Study Australia Industry Experience Program",
      company: "LEAF Organization",
      location: "Australia",
      date: "August 10, 2025",
      type: "consulting",
      description:
        "Consulting project on youth wellbeing and growth strategy for LEAF organization, developing comprehensive business solutions for sustainable impact across Australian markets.",
      skills: ["Strategic Analysis", "Market Research", "Business Development"],
      image: "/images/experience/leaf-thumb.jpg",
    },
    {
      id: "tech-startup-intern",
      title: "Software Engineering Intern",
      company: "InnovateTech Solutions",
      location: "San Francisco, CA",
      date: "June 2024 - August 2024",
      type: "development",
      description:
        "Full-stack development role working on user authentication systems and real-time data visualization features for a B2B SaaS platform serving 10,000+ users.",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/images/experience/startup-thumb.jpg",
    },
    {
      id: "university-research",
      title: "Data Science Research Assistant",
      company: "University Research Lab",
      location: "University Campus",
      date: "January 2024 - May 2024",
      type: "research",
      description:
        "Machine learning research on predictive analytics for student success metrics, developing models to identify at-risk students early in their academic journey.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Research"],
      image: "/images/experience/research-thumb.jpg",
    },
    {
      id: "fintech-consulting",
      title: "FinTech Strategy Consultant",
      company: "Digital Finance Advisors",
      location: "New York, NY (Remote)",
      date: "September 2023 - December 2023",
      type: "consulting",
      description:
        "Strategic consulting for emerging FinTech companies, focusing on digital transformation and regulatory compliance strategies for cryptocurrency and payments platforms.",
      skills: ["Financial Analysis", "Regulatory Compliance", "Strategy Development"],
      image: "/images/experience/fintech-thumb.jpg",
    },
    {
      id: "nonprofit-data-analyst",
      title: "Data Analytics Volunteer",
      company: "Community Impact Foundation",
      location: "Local Community",
      date: "May 2023 - August 2023",
      type: "volunteer",
      description:
        "Pro-bono data analytics work for local nonprofit, developing dashboards and insights to improve program effectiveness and donor engagement, serving 1,000+ beneficiaries.",
      skills: ["Data Visualization", "Tableau", "Excel", "SQL"],
      image: "/images/experience/nonprofit-thumb.jpg",
    },
  ]

  const filteredExperiences = experiences.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
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
            <p className="text-gray-300">My journey through various roles and projects</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <Input
              placeholder="Search experience..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <Link key={experience.id} href={`/experience/${experience.id}`}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full">
                  {experience.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{experience.date}</span>
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{experience.title}</CardTitle>
                    <div className="text-yellow-400 text-sm font-medium">{experience.company}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{experience.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {experience.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-200 border-blue-500/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {experience.skills.length > 3 && (
                        <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                          +{experience.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-3 h-3" />
                      {experience.location}
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
