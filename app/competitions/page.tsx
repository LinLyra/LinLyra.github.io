"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, ArrowLeft, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

interface CompetitionItem {
  id: string
  title: string
  event: string
  date: string
  type: string
  description: string
  skills: string[]
  details: string[]
  placement?: string
  teamSize?: string
  image: string
  reflection: string
  learnings: string[]
}

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<CompetitionItem | null>(null)

  const competitions: CompetitionItem[] = [
    {
      id: "1",
      title: "AI Healthcare Solution",
      event: "Global Health Hackathon 2024",
      date: "March 2024",
      type: "hackathon",
      description: "Developed an AI-powered diagnostic tool for early disease detection using machine learning...",
      skills: ["Python", "TensorFlow", "React", "Healthcare AI"],
      details: [
        "Built ML model with 92% accuracy for disease prediction",
        "Created intuitive web interface for medical professionals",
        "Integrated with existing hospital management systems",
        "Presented solution to panel of healthcare experts",
      ],
      placement: "2nd Place",
      teamSize: "4 members",
      image: "/images/competition-1.png",
      reflection:
        "This hackathon taught me the importance of understanding domain-specific requirements. Working with healthcare professionals showed me how technical solutions must be deeply rooted in real-world needs. The 48-hour time constraint pushed our team to prioritize features effectively and communicate under pressure.",
      learnings: [
        "Healthcare data requires special privacy considerations",
        "User interface design is crucial for medical professionals",
        "Cross-functional collaboration enhances solution quality",
        "Time management is critical in high-pressure environments",
      ],
    },
    {
      id: "2",
      title: "Sustainable City Planning Platform",
      event: "Smart Cities Challenge",
      date: "November 2023",
      type: "competition",
      description:
        "Urban planning platform using IoT data and predictive analytics for sustainable city development...",
      skills: ["IoT", "Data Analytics", "Urban Planning", "Sustainability"],
      details: [
        "Analyzed real-time city data from 1000+ sensors",
        "Developed predictive models for traffic and energy optimization",
        "Created interactive dashboard for city planners",
        "Proposed solutions reducing carbon footprint by 25%",
      ],
      placement: "1st Place",
      teamSize: "3 members",
      image: "/images/competition-2.png",
      reflection:
        "Winning this competition validated my belief in data-driven solutions for urban challenges. The project required balancing technical complexity with practical implementation. I learned that sustainable solutions must consider economic, social, and environmental factors simultaneously.",
      learnings: [
        "IoT data integration requires robust architecture",
        "Sustainability metrics need clear visualization",
        "Stakeholder buy-in is essential for urban solutions",
        "Predictive models must account for human behavior",
      ],
    },
    {
      id: "3",
      title: "Algorithmic Trading Bot",
      event: "FinTech Innovation Contest",
      date: "September 2023",
      type: "programming",
      description: "High-frequency trading algorithm using advanced mathematical models and real-time market data...",
      skills: ["Python", "Financial Modeling", "Algorithms", "Real-time Systems"],
      details: [
        "Implemented advanced trading strategies with 15% ROI",
        "Processed 10,000+ market data points per second",
        "Built risk management system with automated stop-loss",
        "Achieved 89% win rate in backtesting scenarios",
      ],
      placement: "3rd Place",
      teamSize: "2 members",
      image: "/images/competition-3.png",
      reflection:
        "This competition deepened my understanding of financial markets and algorithmic trading. The challenge of processing real-time data at scale taught me about system optimization and risk management. I realized that successful trading algorithms require both technical precision and market intuition.",
      learnings: [
        "Real-time data processing demands efficient algorithms",
        "Risk management is more important than profit maximization",
        "Market volatility requires adaptive strategies",
        "Backtesting must account for market conditions",
      ],
    },
    {
      id: "4",
      title: "Blockchain Voting System",
      event: "Decentralized Democracy Hackathon",
      date: "July 2023",
      type: "blockchain",
      description: "Secure and transparent voting platform built on Ethereum blockchain ensuring election integrity...",
      skills: ["Solidity", "Web3.js", "React", "Ethereum", "Cryptography"],
      details: [
        "Developed smart contracts with zero security vulnerabilities",
        "Implemented cryptographic voting mechanisms",
        "Created user-friendly interface for voters and administrators",
        "Conducted successful pilot with 1000+ test votes",
      ],
      placement: "1st Place",
      teamSize: "4 members",
      image: "/images/competition-4.png",
      reflection:
        "Building a blockchain voting system highlighted the intersection of technology and democracy. The project required balancing transparency with privacy, and security with usability. I learned that blockchain solutions must address both technical and social challenges to be truly effective.",
      learnings: [
        "Blockchain security requires multiple layers of protection",
        "User experience is crucial for technology adoption",
        "Transparency and privacy can coexist with proper design",
        "Smart contract testing is critical for security",
      ],
    },
    {
      id: "5",
      title: "Cybersecurity Defense Challenge",
      event: "National Cyber Defense Competition",
      date: "May 2023",
      type: "cybersecurity",
      description:
        "24-hour cybersecurity competition involving network defense, incident response, and threat analysis...",
      skills: ["Network Security", "Incident Response", "Threat Analysis", "Linux"],
      details: [
        "Defended network infrastructure against simulated attacks",
        "Identified and mitigated 15+ security vulnerabilities",
        "Implemented real-time monitoring and alerting systems",
        "Collaborated with team under high-pressure scenarios",
      ],
      placement: "2nd Place",
      teamSize: "5 members",
      image: "/images/competition-5.png",
      reflection:
        "This intense 24-hour competition tested both technical skills and mental resilience. Working under constant 'attack' taught me the importance of systematic thinking and team coordination in cybersecurity. I gained deep appreciation for the complexity of modern security challenges.",
      learnings: [
        "Cybersecurity requires constant vigilance and adaptation",
        "Team communication is critical during security incidents",
        "Systematic approaches prevent oversight under pressure",
        "Understanding attacker mindset improves defense strategies",
      ],
    },
    {
      id: "6",
      title: "Green Energy Optimization",
      event: "Sustainable Tech Challenge",
      date: "April 2023",
      type: "sustainability",
      description: "Developed optimization algorithms for renewable energy distribution in smart grids...",
      skills: ["Machine Learning", "Energy Systems", "Optimization", "Python"],
      details: [
        "Created ML models for energy demand prediction",
        "Optimized renewable energy distribution across grid",
        "Reduced energy waste by 30% in simulation",
        "Integrated weather data for solar/wind predictions",
      ],
      placement: "3rd Place",
      teamSize: "3 members",
      image: "/images/competition-1.png",
      reflection:
        "Working on green energy solutions connected my technical skills with environmental impact. The project taught me about the complexity of energy systems and the potential of AI in sustainability. I realized that technology can be a powerful force for positive environmental change.",
      learnings: [
        "Energy systems require understanding of multiple variables",
        "Weather prediction significantly impacts renewable energy",
        "Optimization algorithms can drive sustainability",
        "Environmental impact should guide technical decisions",
      ],
    },
  ]

  const allTags = ["hackathon", "competition", "programming", "blockchain", "cybersecurity", "sustainability"]

  const filteredCompetitions = competitions.filter((comp) => {
    const matchesSearch =
      comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTags = selectedTags.length === 0 || selectedTags.includes(comp.type)
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
            className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Competitions
          </Button>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Competition Card */}
            <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-100 mb-2">{selectedItem.title}</CardTitle>
                    <div className="flex items-center gap-4 text-gray-200 mb-4">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {selectedItem.event}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedItem.date}
                      </div>
                      {selectedItem.teamSize && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {selectedItem.teamSize}
                        </div>
                      )}
                    </div>
                    {selectedItem.placement && (
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">{selectedItem.placement}</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-6">
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.title}
                      className="w-48 h-32 object-cover rounded-lg border border-green-400/20"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Project Overview</h3>
                  <p className="text-gray-200">{selectedItem.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedItem.details.map((detail, index) => (
                      <li key={index} className="text-gray-200 flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.skills.map((skill, index) => (
                      <Badge key={index} className="bg-green-500/20 text-green-200 border-green-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reflection Section */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-400/20">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  Reflection & Learnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Personal Reflection</h3>
                  <p className="text-gray-200 leading-relaxed">{selectedItem.reflection}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Key Learnings</h3>
                  <ul className="space-y-2">
                    {selectedItem.learnings.map((learning, index) => (
                      <li key={index} className="text-gray-200 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">💡</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">Competitions & Hackathons</h1>
            <p className="text-gray-200">Showcasing performance under pressure and collaborative innovation</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-green-400/30 text-gray-100 placeholder:text-gray-400"
            />
          </div>

          {/* Competition Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((competition) => (
              <Card
                key={competition.id}
                className="bg-black/30 backdrop-blur-md border-green-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedItem(competition)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={competition.image || "/placeholder.svg"}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {competition.placement && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Award className="w-3 h-3 text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-semibold">{competition.placement}</span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Trophy className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{competition.date}</span>
                  </div>
                  <CardTitle className="text-gray-100 text-lg mb-2">{competition.title}</CardTitle>
                  <div className="text-green-400 text-sm font-medium">{competition.event}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{competition.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {competition.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} className="bg-green-500/20 text-green-200 border-green-500/30 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {competition.teamSize && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="w-3 h-3" />
                      {competition.teamSize}
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
