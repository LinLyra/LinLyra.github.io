"use client"

import { useState } from "react"
import Link from "next/link"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, ArrowLeft, Award } from "lucide-react"

type CompetitionItem = {
  slug: string
  title: string
  event?: string
  date?: string
  type: "hackathon" | "marketing" | "modeling" | "sustainability" | "case" | "product"
  description?: string
  key?: string[]
  placement?: string
  teamSize?: string
  image?: string
}

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const competitions: CompetitionItem[] = [
    {
      slug: "gdgx-openai-hack",
      title: "GDG x OpenAI Hack Node Australia",
      date: "2025.8",
      type: "hackathon",
      image: "/competitions/gdgx-openai-hack-node-au/cover.png",
      description: "2nd edition of the Global AI Hackathon, co-hosted with MIT Sloan AI Club and major sponsors like OpenAI, Akamai, and ScaleAI. ",
      key: ["Full-stack", "Vibe coding","Social Network app"，"GameFi"]
    },
    {
      slug: "adventurex-2025",
      title: "AdventureX 2025",
      date: "2025.7",
      type: "hackathon",
      image: "/competitions/adventurex-2025/cover.png",
      description: "China's largest youth-driven hackathon in this summer.",
      key: ["Product operation", "web3", "Youth Innovation","YOLO"]
    },
    {
      slug: "deloitte-digital-elite",
      title: "Deloitte Digital Elite Challenge 2025",
      date: "2025.5",
      type: "product",
      image: "/competitions/deloitte-digital-elite-2025/cover.png",
      description: "Global university competition by Deloitte China to discover digital-minded talent.",
      key: ["AI+Audit", "Frontend Development", "Digital Transformation"]
    },
    {
      slug: "ccf-tech-for-good-2025",
      title: "CCF Tech for Good Marathon 2025",
      date: "2025.5",
      type: "hackathon",
      image: "/competitions/ccf-tech-for-good-2025/cover.png",
      description: "Tech-for-good hackathon hosted by CCF, building social impact solutions.",
      key: ["Accessible Films", "Product design", "Social impact"]
    },
    {
      slug: "roland-berger-2025",
      title: "Roland Berger Campus Challenge 2025",
      date: "2025.6",
      type: "case",
      image: "/competitions/roland-berger-campus-challenge-2025/cover.png",
      description: "Strategy consulting case challenge from Roland Berger.",
      key: ["Strategy", "Market Analysis"]
    },
    {
      slug: "net-zero-challenge",
      title: "Global Youth Summit on Net-Zero Future",
      date: "2024.9",
      type: "sustainability",
      image: "/competitions/net-zero-challenge-gys/cover.png",
      description: "A youth-driven global summit held at Tsinghua, co-hosted by UNESCO East Asia and the GAUC.",
      key: ["Climate Action", "Youth Leadership", "Innovation"]
    },
    {
      slug: "loreal-brandstorm",
      title: "L'Oréal BRANDSTORM",
      date: "2025.4",
      type: "marketing",
      image: "/competitions/loreal-brandstorm/cover.png",
      description: "Global youth challenge focused on Men Beauty through tech and product innovation",
      key: ["Marketing", "Product", "Pitch"]
    },
    {
      slug: "kpmg-bluebird-it-audit",
      title: "KPMG Bluebird IT Audit Challenge ",
      date: "2025.8",
      type: "case",
      image: "/competitions/kpmg-bluebird-it-audit/cover.png",
      description: "KMPG inviting students to solve real-world IT audit caseas using technology.",
      key: ["IT Audit", "Cybersecurity", "ATM"]
    },
     {
      slug: "microsoft-chat-hack-promptathon",
      title: "Microsoft Chat & Hack Promptathon",
      date: "2025.3",
      type: "hackathon",
      image: "/competitions/microsoft-chat-hack-promptathon/cover.png",
      description: "GenAI prompt engineering & product prototyping.",
      key: ["GenAI", "Prompting", "Product"]
    },
    {
      slug: "kpmg-esg-case-competition",
      title: "KPMG ESG Case Competition",
      date: "2025",
      type: "case",
      image: "/competitions/kpmg-esg-case-competition-3rd/cover.png",
      description: "ESG case-analysis competition led by KPMG China.",
      key: ["ESG", "Sustainability","Business Strategy"]
    },    
    {
      slug: "kpmg-innovate-day",
      title: "KPMG Innovate Day 2025",
      date: "2024.10",
      type: "product",
      image: "/competitions/kpmg-innovate-day-2025/cover.png",
      description: "KPMG innovation program focusing on digital products & insights.",
      key: ["Product", "AuditX", "Business plan"]
    },
    
    {
      slug: "apmcm-2024",
      title: "APMCM Asia-Pacific Mathematical Contest in Modeling",
      date: "2024.11",
      type: "modeling",
      image: "/competitions/apmcm-2024/cover.png",
      description: "Mathematical modeling contest (Asia-Pacific).",
      key: ["Modeling", "Optimization"]
    },
    
    {
      slug: "mcm-2025",
      title: "MCM/ICM Mathematical Contest in Modeling",
      date: "2025.2",
      type: "modeling",
      image: "/competitions/mcm-2025/cover.png",
      description: "International mathematical modeling competition.",
      skills: ["Modeling", "Statistics"]
    },
    {
      slug: "ey-esg-innovation",
      title: "EY ESG University Innovation Challenge",
      date: "2025.4",
      type: "case",
      image: "/competitions/ey-esg-innovation-2025/cover.png",
      description: "ESG innovation competition on data-driven sustainability strategies.",
      skills: ["ESG", "AI+Luxury"]
    },
    
    {
      slug: "commonwealth-treasury",
      title: "Commonwealth Treasury Case Competition",
      date: "2025.4",
      type: "case",
      image: "/competitions/commonwealth-treasury-case/cover.png",
      description: "Public policy & economic analysis case organized by CBA.",
      skills: ["Economics", "Policy", "Analytics"]
    },
   
    {
   
  const allTags = ["hackathon", "marketing", "modeling", "sustainability", "case", "product"]

  const filtered = competitions.filter((c) => {
    const q = searchTerm.toLowerCase()
    const hit =
      c.title.toLowerCase().includes(q) ||
      (c.event ?? "").toLowerCase().includes(q) ||
      (c.key ?? []).some((s) => s.toLowerCase().includes(q))
    const tagOK = selectedTags.length === 0 || selectedTags.includes(c.type)
    return hit && tagOK
  })

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
            <h1 className="text-4xl font-bold text-gray-100 mb-4">Competitions</h1>
            <p className="text-gray-200">Showcasing performance under pressure and collaborative innovation</p>
          </div>

          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-green-400/30 text-gray-100 placeholder:text-gray-400"
            />
            {/* （如需标签过滤，可以渲染 allTags 成为可点的 Badge；此处省略 UI，仅保留逻辑位） */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <Link key={c.slug} href={`/competitions/${c.slug}`} className="block">
                <Card className="bg-black/30 backdrop-blur-md border-green-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={c.image || "/placeholder.svg"}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {c.placement && (
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <Award className="w-3 h-3 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-semibold">{c.placement}</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Trophy className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{c.date ?? ""}</span>
                    </div>
                    <CardTitle className="text-gray-100 text-lg mb-2">{c.title}</CardTitle>
                    {c.event && <div className="text-green-400 text-sm font-medium">{c.event}</div>}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-3">{c.description ?? ""}</p>
                    <div className="flex flex-wrap gap-1">
                      {(c.skills ?? []).slice(0, 3).map((skill) => (
                        <Badge key={skill} className="bg-green-500/20 text-green-200 border-green-500/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
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
