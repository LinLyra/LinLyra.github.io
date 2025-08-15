"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, ArrowLeft, ImageIcon, Award } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MediaModal } from "@/components/media-modal"

interface CompetitionItem {
  id: string
  title: string
  event: string
  date: string
  type: string
  description: string
  skills: string[]
  placement?: string
  teamSize?: string
  situation: string
  task: string
  action: string[]
  result: string[]
  reflection: string
  media?: {
    images: string[]
    videos: string[]
    documents: string[]
  }
}

const competitions: CompetitionItem[] = [
  {
    id: "ai-healthcare",
    title: "AI Healthcare Solution",
    event: "Global Health Hackathon 2024",
    date: "March 2024",
    type: "hackathon",
    description: "Developed an AI-powered diagnostic tool for early disease detection using machine learning.",
    skills: ["Python", "TensorFlow", "React", "Healthcare AI", "Data Analysis"],
    placement: "2nd Place",
    teamSize: "4 members",
    situation:
      "Global Health Hackathon 2024 brought together 100+ teams from around the world to tackle pressing healthcare challenges. Our team of 4 was tasked with developing innovative solutions for early disease detection in underserved communities.",
    task: "My role was to lead the AI/ML development and create the predictive models for disease detection. I was responsible for data preprocessing, model training, and integration with the frontend interface.",
    action: [
      "Built ML model with 92% accuracy for disease prediction using TensorFlow",
      "Created intuitive web interface for medical professionals using React",
      "Integrated with existing hospital management systems via REST APIs",
      "Implemented real-time data processing pipeline for patient symptoms",
      "Designed user-friendly dashboard for healthcare workers in rural areas",
      "Presented solution to panel of healthcare experts and investors",
    ],
    result: [
      "🥈 Secured 2nd Place out of 100+ international teams",
      "Achieved 92% accuracy in disease prediction across test datasets",
      "Received positive feedback from 5 healthcare industry experts",
      "Solution potentially impacts 10,000+ patients in underserved areas",
      "Attracted interest from 2 healthcare technology companies",
      "Featured in hackathon highlight reel and social media coverage",
    ],
    reflection:
      "This hackathon taught me the importance of understanding domain-specific requirements when building AI solutions. Working with healthcare professionals showed me how technical solutions must be deeply rooted in real-world needs and usability. The 48-hour time constraint pushed our team to prioritize features effectively and communicate under pressure. I learned that successful healthcare AI requires not just technical accuracy, but also trust, interpretability, and seamless integration into existing workflows.",
    media: {
      images: ["/images/competitions/healthcare-1.jpg", "/images/competitions/healthcare-2.jpg"],
      videos: ["/videos/competitions/healthcare-demo.mp4"],
      documents: ["/docs/competitions/healthcare-presentation.pdf"],
    },
  },
  {
    id: "smart-cities",
    title: "Sustainable City Planning Platform",
    event: "Smart Cities Challenge",
    date: "November 2023",
    type: "competition",
    description: "Urban planning platform using IoT data and predictive analytics for sustainable city development.",
    skills: ["IoT", "Data Analytics", "Urban Planning", "Sustainability", "Python", "React"],
    placement: "1st Place",
    teamSize: "3 members",
    situation:
      "The Smart Cities Challenge focused on creating innovative solutions for urban sustainability. With 50+ teams participating, we needed to develop a comprehensive platform that could help city planners make data-driven decisions for sustainable urban development.",
    task: "I was responsible for the data analytics engine and predictive modeling components. My goal was to process real-time IoT sensor data and create actionable insights for urban planners.",
    action: [
      "Analyzed real-time city data from 1000+ IoT sensors across traffic, air quality, and energy systems",
      "Developed predictive models for traffic flow optimization using machine learning",
      "Created interactive dashboard for city planners with real-time data visualization",
      "Implemented energy consumption optimization algorithms reducing waste by 25%",
      "Built automated alert system for environmental threshold breaches",
      "Designed scalable architecture to handle data from multiple cities",
    ],
    result: [
      "🥇 Won 1st Place and $10,000 prize money",
      "Demonstrated 25% reduction in carbon footprint through optimized planning",
      "Successfully processed 1M+ data points per hour in real-time",
      "Received endorsement from 3 city planning departments",
      "Solution adopted for pilot program in 2 smart cities",
      "Invited to present at International Smart Cities Conference",
    ],
    reflection:
      "Winning this competition validated my belief in data-driven solutions for urban challenges. The project required balancing technical complexity with practical implementation constraints. I learned that sustainable solutions must consider economic, social, and environmental factors simultaneously. The experience taught me how to communicate complex technical concepts to non-technical stakeholders like city officials and urban planners.",
    media: {
      images: ["/images/competitions/smart-cities-1.jpg", "/images/competitions/smart-cities-2.jpg"],
      videos: ["/videos/competitions/smart-cities-demo.mp4"],
      documents: ["/docs/competitions/smart-cities-report.pdf"],
    },
  },
  {
    id: "fintech-trading",
    title: "Algorithmic Trading Bot",
    event: "FinTech Innovation Contest",
    date: "September 2023",
    type: "programming",
    description: "High-frequency trading algorithm using advanced mathematical models and real-time market data.",
    skills: ["Python", "Financial Modeling", "Algorithms", "Real-time Systems", "Risk Management"],
    placement: "3rd Place",
    teamSize: "2 members",
    situation:
      "The FinTech Innovation Contest challenged participants to develop innovative financial technology solutions. Our team of 2 decided to focus on algorithmic trading, competing against 30+ teams with diverse fintech solutions.",
    task: "My responsibility was to develop the core trading algorithms and risk management systems. I needed to create a system that could make profitable trades while managing risk in volatile market conditions.",
    action: [
      "Implemented advanced trading strategies with 15% average ROI over backtesting period",
      "Built real-time data processing system handling 10,000+ market data points per second",
      "Developed comprehensive risk management system with automated stop-loss mechanisms",
      "Created backtesting framework to validate strategies across historical market data",
      "Implemented machine learning models for market trend prediction",
      "Built monitoring dashboard for real-time performance tracking",
    ],
    result: [
      "🥉 Achieved 3rd Place in highly competitive field",
      "Demonstrated 15% ROI with 89% win rate in backtesting scenarios",
      "Successfully processed high-frequency market data with <10ms latency",
      "Risk management system prevented major losses during market volatility",
      "Attracted interest from 2 quantitative trading firms",
      "Algorithm performed consistently across different market conditions",
    ],
    reflection:
      "This competition deepened my understanding of financial markets and algorithmic trading. The challenge of processing real-time data at scale taught me about system optimization and the critical importance of risk management. I realized that successful trading algorithms require both technical precision and deep market intuition. The experience also highlighted how mathematical models must be constantly adapted to changing market conditions.",
    media: {
      images: ["/images/competitions/trading-1.jpg", "/images/competitions/trading-2.jpg"],
      videos: ["/videos/competitions/trading-demo.mp4"],
      documents: ["/docs/competitions/trading-strategy.pdf"],
    },
  },
  {
    id: "blockchain-voting",
    title: "Blockchain Voting System",
    event: "Decentralized Democracy Hackathon",
    date: "July 2023",
    type: "blockchain",
    description: "Secure and transparent voting platform built on Ethereum blockchain ensuring election integrity.",
    skills: ["Solidity", "Web3.js", "React", "Ethereum", "Cryptography", "Security"],
    placement: "1st Place",
    teamSize: "4 members",
    situation:
      "The Decentralized Democracy Hackathon focused on using blockchain technology to improve democratic processes. With 40+ teams participating, we aimed to create a voting system that would address trust and transparency issues in traditional elections.",
    task: "I led the smart contract development and security implementation. My goal was to create a voting system that was both secure and user-friendly, ensuring voter privacy while maintaining complete transparency of the election process.",
    action: [
      "Developed smart contracts with zero security vulnerabilities using Solidity",
      "Implemented cryptographic voting mechanisms ensuring voter privacy",
      "Created user-friendly interface for voters and election administrators",
      "Built comprehensive testing suite with 100% code coverage",
      "Implemented zero-knowledge proofs for anonymous yet verifiable voting",
      "Conducted successful pilot with 1000+ test votes across multiple scenarios",
    ],
    result: [
      "🥇 Won 1st Place and Best Technical Implementation award",
      "Successfully processed 1000+ votes with zero security incidents",
      "Achieved 95% user satisfaction in usability testing",
      "Demonstrated 100% vote integrity through blockchain verification",
      "Reduced vote counting time from hours to minutes",
      "Presented at 2 blockchain conferences with positive reception",
    ],
    reflection:
      "Building a blockchain voting system highlighted the intersection of technology and democracy. The project required balancing transparency with privacy, and security with usability. I learned that blockchain solutions must address both technical and social challenges to be truly effective. The experience taught me how emerging technologies can strengthen democratic institutions when implemented thoughtfully with proper consideration for all stakeholders.",
    media: {
      images: ["/images/competitions/blockchain-1.jpg", "/images/competitions/blockchain-2.jpg"],
      videos: ["/videos/competitions/blockchain-demo.mp4"],
      documents: ["/docs/competitions/blockchain-whitepaper.pdf"],
    },
  },
  {
    id: "cybersecurity-defense",
    title: "Cybersecurity Defense Challenge",
    event: "National Cyber Defense Competition",
    date: "May 2023",
    type: "cybersecurity",
    description: "24-hour cybersecurity competition involving network defense, incident response, and threat analysis.",
    skills: ["Network Security", "Incident Response", "Threat Analysis", "Linux", "Penetration Testing"],
    placement: "2nd Place",
    teamSize: "5 members",
    situation:
      "The National Cyber Defense Competition simulated real-world cyber attacks against critical infrastructure. Our team of 5 had to defend a complex network environment against professional red team attackers over 24 hours.",
    task: "My role was network security analyst and incident response coordinator. I was responsible for monitoring network traffic, identifying threats, and coordinating our team's response to security incidents.",
    action: [
      "Defended network infrastructure against simulated advanced persistent threats",
      "Identified and mitigated 15+ security vulnerabilities across multiple systems",
      "Implemented real-time monitoring and alerting systems using SIEM tools",
      "Coordinated incident response procedures under high-pressure scenarios",
      "Performed forensic analysis on compromised systems to understand attack vectors",
      "Maintained critical services while under constant attack simulation",
    ],
    result: [
      "🥈 Secured 2nd Place in national competition",
      "Successfully defended against 90% of attack scenarios",
      "Maintained 95% uptime of critical services during competition",
      "Identified attack patterns 30% faster than average team response time",
      "Received recognition for best incident response coordination",
      "Invited to present defense strategies at cybersecurity conference",
    ],
    reflection:
      "This intense 24-hour competition tested both technical skills and mental resilience. Working under constant 'attack' taught me the importance of systematic thinking and team coordination in cybersecurity. I gained deep appreciation for the complexity of modern security challenges and the need for continuous vigilance. The experience highlighted how cybersecurity is as much about people and processes as it is about technology.",
    media: {
      images: ["/images/competitions/cyber-1.jpg", "/images/competitions/cyber-2.jpg"],
      videos: ["/videos/competitions/cyber-demo.mp4"],
      documents: ["/docs/competitions/cyber-report.pdf"],
    },
  },
]

export default function CompetitionDetailPage({ params }: { params: { id: string } }) {
  const [showMediaModal, setShowMediaModal] = useState(false)
  const competition = competitions.find((comp) => comp.id === params.id)

  if (!competition) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />

      <div className="relative z-10 p-6">
        <Link href="/competitions">
          <Button className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Competitions
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Card */}
          <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-3xl text-gray-100 mb-4">{competition.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      <span className="text-lg">{competition.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{competition.date}</span>
                    </div>
                    {competition.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>{competition.teamSize}</span>
                      </div>
                    )}
                  </div>
                  {competition.placement && (
                    <div className="flex items-center gap-2 mb-6">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-xl">{competition.placement}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {competition.skills.map((skill, index) => (
                      <Badge key={index} className="bg-green-500/20 text-green-200 border-green-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                {competition.media && (
                  <Button
                    onClick={() => setShowMediaModal(true)}
                    variant="outline"
                    className="border-green-400/30 text-gray-100 hover:bg-green-500/20 bg-transparent"
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    View Media
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>

          {/* STAR Method Structure */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Situation & Task */}
            <div className="space-y-8">
              <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-gray-100">Situation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-lg leading-relaxed">{competition.situation}</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-gray-100">Task</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-lg leading-relaxed">{competition.task}</p>
                </CardContent>
              </Card>
            </div>

            {/* Action & Result */}
            <div className="space-y-8">
              <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-gray-100">Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {competition.action.map((action, index) => (
                      <li key={index} className="text-gray-200 flex items-start gap-3">
                        <span className="text-green-400 mt-1">⚡</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-gray-100">Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {competition.result.map((result, index) => (
                      <li key={index} className="text-gray-200 flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reflection */}
          <Card className="bg-black/40 backdrop-blur-md border-green-400/20">
            <CardHeader>
              <CardTitle className="text-gray-100">Reflection & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">{competition.reflection}</p>
            </CardContent>
          </Card>
        </div>

        {/* Media Modal */}
        {competition.media && (
          <MediaModal
            isOpen={showMediaModal}
            onClose={() => setShowMediaModal(false)}
            title={competition.title}
            media={competition.media}
          />
        )}
      </div>
    </div>
  )
}
