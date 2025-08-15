"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Calendar, ArrowLeft, ExternalLink, GraduationCap } from "lucide-react"
import Link from "next/link"

interface LearningItem {
  id: string
  title: string
  institution: string
  date: string
  type: string
  description: string
  skills: string[]
  details: string[]
  grade?: string
  certificate?: string
}

export default function LearningPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null)

  const learningItems: LearningItem[] = [
    {
      id: "1",
      title: "Computer Science Degree",
      institution: "University Name",
      date: "2021 - 2025",
      type: "degree",
      description: "Bachelor's degree in Computer Science with focus on software engineering and data structures...",
      skills: ["Algorithms", "Data Structures", "Software Engineering", "Database Systems"],
      details: [
        "Maintained GPA of 3.8/4.0",
        "Completed advanced coursework in machine learning",
        "Led student programming club for 2 years",
        "Graduated Magna Cum Laude",
      ],
      grade: "3.8 GPA",
    },
    {
      id: "2",
      title: "Full Stack Web Development",
      institution: "Online Bootcamp",
      date: "Summer 2023",
      type: "bootcamp",
      description: "Intensive 12-week program covering modern web development technologies...",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      details: [
        "Built 5 full-stack applications from scratch",
        "Learned modern development practices and deployment",
        "Collaborated on team projects using Agile methodology",
        "Completed with 95% final project score",
      ],
      certificate: "Full Stack Developer Certificate",
    },
    {
      id: "3",
      title: "Machine Learning Specialization",
      institution: "Coursera - Stanford University",
      date: "Fall 2023",
      type: "online-course",
      description: "Comprehensive course series covering supervised and unsupervised learning...",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
      details: [
        "Completed 4-course specialization with honors",
        "Implemented various ML algorithms from scratch",
        "Worked on real-world datasets and projects",
        "Achieved 98% average score across all courses",
      ],
      certificate: "Machine Learning Specialization Certificate",
    },
    {
      id: "4",
      title: "Data Structures and Algorithms",
      institution: "University Course",
      date: "Spring 2023",
      type: "course",
      description: "Advanced course covering complex data structures and algorithmic problem solving...",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
      details: [
        "Mastered advanced data structures (trees, graphs, heaps)",
        "Solved 200+ algorithmic problems",
        "Implemented efficient sorting and searching algorithms",
        "Achieved top 5% in class performance",
      ],
      grade: "A+",
    },
  ]

  const allTags = ["degree", "bootcamp", "online-course", "course", "certification"]

  const filteredItems = learningItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.institution.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.includes(item.type)
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  if (selectedItem) {
    return (
      <div className="relative min-h-screen">
        <GalaxyBackground />
        <div className="relative z-10 p-6">
          <Button
            onClick={() => setSelectedItem(null)}
            className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning
          </Button>

          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-white mb-2">{selectedItem.title}</CardTitle>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {selectedItem.institution}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedItem.date}
                    </div>
                    {selectedItem.grade && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {selectedItem.grade}
                      </div>
                    )}
                  </div>
                </div>
                {selectedItem.certificate && (
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedItem.details.map((detail, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Skills Acquired</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.skills.map((skill, index) => (
                    <Badge key={index} className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">Learning Journey</h1>
            <p className="text-gray-300">My academic achievements and continuous learning</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search courses and programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Learning Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <CardTitle className="text-white text-lg mb-2">{item.title}</CardTitle>
                  <div className="text-purple-400 text-sm font-medium">{item.institution}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {item.grade && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Award className="w-3 h-3" />
                      {item.grade}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
