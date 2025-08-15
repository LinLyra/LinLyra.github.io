"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, ArrowLeft, Github } from "lucide-react"
import Link from "next/link"

interface ProjectItem {
  id: string
  title: string
  category: string
  date: string
  type: string
  description: string
  skills: string[]
  status: string
  image: string
  links?: {
    github?: string
    demo?: string
  }
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const projects: ProjectItem[] = [
    {
      id: "ecommerce-dashboard",
      title: "E-Commerce Analytics Dashboard",
      category: "Full-Stack Development",
      date: "December 2023",
      type: "web-app",
      description:
        "Comprehensive analytics platform for e-commerce businesses with real-time data visualization and automated reporting capabilities serving 500+ daily users.",
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      status: "Completed",
      image: "/images/projects/ecommerce-thumb.jpg",
      links: {
        github: "https://github.com/username/ecommerce-dashboard",
        demo: "https://demo.example.com",
      },
    },
    {
      id: "ai-study-assistant",
      title: "AI-Powered Study Assistant",
      category: "Machine Learning",
      date: "October 2023",
      type: "ai-project",
      description:
        "Intelligent study companion using natural language processing to help students learn more effectively through personalized recommendations and interactive learning.",
      skills: ["Python", "OpenAI API", "React", "Vector Database"],
      status: "In Development",
      image: "/images/projects/ai-study-thumb.jpg",
      links: {
        github: "https://github.com/username/ai-study-assistant",
      },
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      category: "Blockchain Development",
      date: "August 2023",
      type: "blockchain",
      description:
        "Secure and transparent voting platform built on Ethereum blockchain ensuring election integrity through cryptographic verification and immutable record keeping.",
      skills: ["Solidity", "Web3.js", "React", "Ethereum"],
      status: "Completed",
      image: "/images/projects/blockchain-thumb.jpg",
      links: {
        github: "https://github.com/username/blockchain-voting",
        demo: "https://voting-demo.example.com",
      },
    },
    {
      id: "social-media-analyzer",
      title: "Social Media Sentiment Analyzer",
      category: "Data Science",
      date: "June 2023",
      type: "data-science",
      description:
        "Advanced sentiment analysis tool for social media monitoring, providing real-time insights into brand perception and public opinion trends with 94% accuracy.",
      skills: ["Python", "NLP", "TensorFlow", "Flask"],
      status: "Completed",
      image: "/images/projects/sentiment-thumb.jpg",
      links: {
        github: "https://github.com/username/sentiment-analyzer",
        demo: "https://sentiment-demo.com",
      },
    },
    {
      id: "iot-smart-home",
      title: "IoT Smart Home System",
      category: "IoT Development",
      date: "April 2023",
      type: "iot-project",
      description:
        "Comprehensive smart home automation system using IoT devices, machine learning for predictive automation, and mobile app control reducing energy consumption by 30%.",
      skills: ["Arduino", "Raspberry Pi", "Python", "React Native"],
      status: "Completed",
      image: "/images/projects/iot-thumb.jpg",
      links: {
        github: "https://github.com/username/iot-smart-home",
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
      <GalaxyBackground />
      <Navigation activeSection="projects" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-400/30 text-gray-100 hover:bg-yellow-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">My Projects</h1>
            <p className="text-gray-200">Showcasing creativity, technical skills, and problem-solving abilities</p>
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

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-black/30 backdrop-blur-md border-yellow-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <Badge
                        className={`${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-200 border-green-500/30"
                            : "bg-blue-500/20 text-blue-200 border-blue-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
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
                      <div className="flex gap-1">
                        {project.links?.github && <Github className="w-3 h-3 text-gray-400" />}
                        {project.links?.demo && <Globe className="w-3 h-3 text-gray-400" />}
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
