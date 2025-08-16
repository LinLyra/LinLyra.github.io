"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Code, ArrowLeft, Github, Globe } from "lucide-react"
import Link from "next/link"

interface ProjectItem {
  id: string
  title: string
  category: string
  date: string
  description: string
  skills: string[]
  status: string
  links?: {
    github?: string
    demo?: string
  }
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const projects: ProjectItem[] = [
    {
      id: "ai-study-assistant",
      title: "AI-Powered Study Assistant",
      category: "Machine Learning",
      date: "October 2023",
      description:
        "Intelligent study companion using NLP to provide personalized recommendations and interactive learning.",
      skills: ["Python", "OpenAI API", "React", "Vector Database"],
      status: "In Development",
      links: {
        github: "https://github.com/username/ai-study-assistant",
      },
    },
    {
      id: "ecommerce-dashboard",
      title: "E-Commerce Analytics Dashboard",
      category: "Full-Stack Development",
      date: "December 2023",
      description:
        "Comprehensive analytics platform for e-commerce with real-time visualization and automated reporting.",
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      status: "Completed",
      links: {
        github: "https://github.com/username/ecommerce-dashboard",
        demo: "https://demo.example.com",
      },
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="projects" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-400/30 text-gray-100 hover:bg-yellow-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">My Projects</h1>
            <p className="text-gray-200">Showcasing creativity, technical skills, and problem-solving</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-yellow-400/30 text-gray-100 placeholder:text-gray-400"
            />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-black/30 backdrop-blur-md border-yellow-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Code className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{project.date}</span>
                    </div>
                    <CardTitle className="text-gray-100 text-lg mb-2">{project.title}</CardTitle>
                    <div className="text-yellow-400 text-sm font-medium">{project.category}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 3 && (
                        <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                          +{project.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-200 border-green-500/30"
                            : "bg-blue-500/20 text-blue-200 border-blue-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <div className="flex gap-2">
                        {project.links?.github && <Github className="w-4 h-4 text-gray-400" />}
                        {project.links?.demo && <Globe className="w-4 h-4 text-gray-400" />}
                      </div>
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
