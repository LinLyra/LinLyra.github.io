"use client"

import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Calendar, ArrowLeft, ExternalLink, Github, Globe } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ProjectItem {
  id: string
  title: string
  category: string
  date: string
  type: string
  description: string
  skills: string[]
  details: string[]
  status: string
  images: string[]
  videos?: string[]
  links?: {
    github?: string
    demo?: string
    website?: string
  }
  fullDescription: string
  technicalDetails: string[]
  challenges: string[]
  outcomes: string[]
  futureEnhancements?: string[]
}

const projects: ProjectItem[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    category: "Full-Stack Development",
    date: "December 2023",
    type: "web-app",
    description:
      "Comprehensive analytics platform for e-commerce businesses with real-time data visualization and automated reporting capabilities.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Redis", "AWS", "Docker"],
    details: [
      "Built responsive dashboard serving 500+ daily active users",
      "Implemented real-time data processing with 99.9% uptime",
      "Created automated reporting system saving 20 hours/week",
      "Integrated with multiple payment gateways and APIs",
      "Developed custom analytics engine processing 1M+ transactions daily",
    ],
    status: "Completed",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    videos: ["/videos/projects/ecommerce-demo.mp4"],
    links: {
      github: "https://github.com/username/ecommerce-dashboard",
      demo: "https://demo.example.com",
      website: "https://ecommerce-analytics.com",
    },
    fullDescription:
      "This comprehensive e-commerce analytics platform was developed to address the growing need for real-time business intelligence in the online retail space. The project began when I noticed that many small to medium-sized e-commerce businesses were struggling with fragmented data across multiple platforms - payment processors, inventory systems, marketing tools, and customer service platforms. The solution needed to aggregate this data into a unified, actionable dashboard that could provide insights without requiring technical expertise from business owners.",
    technicalDetails: [
      "Built with Next.js 14 using App Router for optimal performance",
      "Implemented real-time WebSocket connections for live data updates",
      "Used PostgreSQL with optimized indexing for handling large datasets",
      "Integrated Redis for caching frequently accessed analytics data",
      "Deployed on AWS using ECS with auto-scaling capabilities",
      "Implemented comprehensive testing with Jest and Cypress",
    ],
    challenges: [
      "Handling real-time data synchronization across multiple third-party APIs",
      "Optimizing database queries for large datasets without impacting user experience",
      "Creating intuitive visualizations for complex e-commerce metrics",
      "Ensuring data security and compliance with PCI DSS standards",
      "Building a scalable architecture that could handle rapid user growth",
    ],
    outcomes: [
      "Successfully onboarded 50+ e-commerce businesses in first 6 months",
      "Achieved 99.9% uptime with average response time under 200ms",
      "Users reported 35% improvement in decision-making speed",
      "Generated $50K+ in revenue within first year of operation",
      "Featured in 3 industry publications as innovative analytics solution",
    ],
    futureEnhancements: [
      "AI-powered predictive analytics for inventory management",
      "Mobile app for on-the-go business monitoring",
      "Integration with additional e-commerce platforms",
      "Advanced customer segmentation and personalization features",
    ],
  },
  {
    id: "ai-study-assistant",
    title: "AI-Powered Study Assistant",
    category: "Machine Learning",
    date: "October 2023",
    type: "ai-project",
    description:
      "Intelligent study companion using natural language processing to help students learn more effectively through personalized recommendations and interactive learning.",
    skills: ["Python", "OpenAI API", "React", "Vector Database", "FastAPI", "PostgreSQL", "Docker"],
    details: [
      "Developed NLP model for personalized learning recommendations",
      "Created interactive chat interface for Q&A sessions",
      "Implemented spaced repetition algorithm for memory retention",
      "Achieved 85% user satisfaction rate in beta testing",
      "Processed 10,000+ study sessions with 92% accuracy in content understanding",
    ],
    status: "In Development",
    images: ["/images/projects/ai-study-1.jpg", "/images/projects/ai-study-2.jpg"],
    videos: ["/videos/projects/ai-study-demo.mp4"],
    links: {
      github: "https://github.com/username/ai-study-assistant",
    },
    fullDescription:
      "The AI-Powered Study Assistant emerged from my own struggles with effective studying during university. I noticed that traditional study methods often lack personalization and fail to adapt to individual learning patterns. This project combines cutting-edge AI technology with proven educational psychology principles to create a truly personalized learning experience. The system learns from each student's interactions, identifies knowledge gaps, and provides targeted recommendations to optimize learning outcomes.",
    technicalDetails: [
      "Integrated OpenAI GPT-4 for natural language understanding and generation",
      "Built custom vector database using Pinecone for semantic search",
      "Implemented spaced repetition algorithm based on Ebbinghaus forgetting curve",
      "Created RESTful API using FastAPI with comprehensive documentation",
      "Used React with TypeScript for responsive frontend interface",
      "Implemented real-time chat functionality using WebSockets",
    ],
    challenges: [
      "Balancing AI assistance with encouraging independent learning",
      "Handling diverse learning styles and subject matters effectively",
      "Ensuring AI responses are accurate and educationally sound",
      "Managing API costs while providing responsive user experience",
      "Creating intuitive UI that doesn't overwhelm students with features",
    ],
    outcomes: [
      "Beta tested with 200+ students across 5 universities",
      "Students showed 40% improvement in retention rates",
      "Reduced average study time by 25% while maintaining performance",
      "Received positive feedback from 85% of beta users",
      "Attracted interest from 3 educational technology companies",
    ],
    futureEnhancements: [
      "Integration with popular learning management systems",
      "Voice-based interaction for hands-free studying",
      "Collaborative study features for group learning",
      "Advanced analytics for educators and institutions",
    ],
  },
  {
    id: "blockchain-voting",
    title: "Blockchain Voting System",
    category: "Blockchain Development",
    date: "August 2023",
    type: "blockchain",
    description:
      "Secure and transparent voting platform built on Ethereum blockchain ensuring election integrity through cryptographic verification and immutable record keeping.",
    skills: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle", "MetaMask", "IPFS"],
    details: [
      "Developed smart contracts with zero security vulnerabilities",
      "Implemented cryptographic voting mechanisms ensuring voter privacy",
      "Created user-friendly interface for voters and administrators",
      "Conducted successful pilot with 1000+ test votes",
      "Achieved sub-second transaction confirmation times",
    ],
    status: "Completed",
    images: [
      "/images/projects/blockchain-1.jpg",
      "/images/projects/blockchain-2.jpg",
      "/images/projects/blockchain-3.jpg",
    ],
    videos: ["/videos/projects/blockchain-demo.mp4"],
    links: {
      github: "https://github.com/username/blockchain-voting",
      demo: "https://voting-demo.example.com",
    },
    fullDescription:
      "This blockchain voting system addresses critical issues in modern democratic processes: transparency, security, and trust. Traditional voting systems often suffer from concerns about tampering, lack of transparency, and difficulty in verification. By leveraging blockchain technology, this system provides an immutable, transparent, and verifiable voting process while maintaining voter privacy through advanced cryptographic techniques. The project demonstrates how emerging technologies can strengthen democratic institutions.",
    technicalDetails: [
      "Smart contracts written in Solidity with comprehensive security audits",
      "Implemented zero-knowledge proofs for voter privacy protection",
      "Used IPFS for decentralized storage of voting metadata",
      "Built with React and Web3.js for seamless blockchain interaction",
      "Integrated MetaMask for secure wallet-based authentication",
      "Deployed on Ethereum testnet with gas optimization strategies",
    ],
    challenges: [
      "Balancing transparency with voter privacy requirements",
      "Ensuring smart contract security against common vulnerabilities",
      "Creating intuitive interface for non-technical users",
      "Managing gas costs for large-scale voting scenarios",
      "Addressing scalability concerns for national-level elections",
    ],
    outcomes: [
      "Successfully processed 1000+ votes with zero security incidents",
      "Achieved 95% user satisfaction in usability testing",
      "Reduced vote counting time from hours to minutes",
      "Demonstrated 100% vote integrity through blockchain verification",
      "Presented at 2 blockchain conferences with positive reception",
    ],
    futureEnhancements: [
      "Integration with government identity verification systems",
      "Mobile application for increased accessibility",
      "Layer 2 scaling solutions for reduced transaction costs",
      "Multi-language support for diverse populations",
    ],
  },
  {
    id: "social-media-analyzer",
    title: "Social Media Sentiment Analyzer",
    category: "Data Science",
    date: "June 2023",
    type: "data-science",
    description:
      "Advanced sentiment analysis tool for social media monitoring, providing real-time insights into brand perception and public opinion trends.",
    skills: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB", "Docker", "AWS"],
    details: [
      "Processed 1M+ social media posts daily with 94% accuracy",
      "Built real-time sentiment tracking dashboard",
      "Implemented multi-language sentiment analysis",
      "Created automated alert system for brand monitoring",
      "Developed custom ML models outperforming existing solutions by 15%",
    ],
    status: "Completed",
    images: ["/images/projects/sentiment-1.jpg", "/images/projects/sentiment-2.jpg"],
    videos: ["/videos/projects/sentiment-demo.mp4"],
    links: {
      github: "https://github.com/username/sentiment-analyzer",
      demo: "https://sentiment-demo.com",
    },
    fullDescription:
      "In today's digital age, understanding public sentiment is crucial for businesses, politicians, and organizations. This social media sentiment analyzer was developed to provide real-time insights into how brands, products, or topics are perceived across various social media platforms. The system goes beyond simple positive/negative classification to provide nuanced emotional analysis, trend detection, and actionable insights for decision-makers.",
    technicalDetails: [
      "Built custom BERT-based model fine-tuned on social media data",
      "Implemented real-time data streaming using Apache Kafka",
      "Used MongoDB for storing and indexing large volumes of social media data",
      "Created RESTful API using Flask with rate limiting and authentication",
      "Deployed on AWS using ECS with auto-scaling based on processing load",
      "Integrated with Twitter, Reddit, and Facebook APIs for data collection",
    ],
    challenges: [
      "Handling sarcasm and context-dependent sentiment in social media posts",
      "Processing high-velocity data streams without losing accuracy",
      "Dealing with multilingual content and cultural context differences",
      "Ensuring compliance with social media platform terms of service",
      "Maintaining model performance as language patterns evolve",
    ],
    outcomes: [
      "Achieved 94% accuracy on benchmark sentiment analysis datasets",
      "Successfully monitored sentiment for 20+ brands during product launches",
      "Identified trending topics 2-3 hours before traditional media",
      "Helped clients improve brand perception through targeted interventions",
      "Generated detailed reports leading to $500K+ in marketing optimizations",
    ],
    futureEnhancements: [
      "Integration with additional social media platforms",
      "Advanced emotion detection beyond sentiment polarity",
      "Predictive analytics for sentiment trend forecasting",
      "Real-time crisis detection and management features",
    ],
  },
  {
    id: "iot-smart-home",
    title: "IoT Smart Home System",
    category: "IoT Development",
    date: "April 2023",
    type: "iot-project",
    description:
      "Comprehensive smart home automation system using IoT devices, machine learning for predictive automation, and mobile app control.",
    skills: ["Arduino", "Raspberry Pi", "Python", "React Native", "MQTT", "InfluxDB", "Node.js"],
    details: [
      "Connected 25+ IoT devices in fully automated home system",
      "Implemented ML-based predictive automation reducing energy consumption by 30%",
      "Built mobile app for remote monitoring and control",
      "Created voice control integration with custom wake word detection",
      "Achieved 99.5% system uptime over 6-month testing period",
    ],
    status: "Completed",
    images: ["/images/projects/iot-1.jpg", "/images/projects/iot-2.jpg", "/images/projects/iot-3.jpg"],
    videos: ["/videos/projects/iot-demo.mp4"],
    links: {
      github: "https://github.com/username/iot-smart-home",
    },
    fullDescription:
      "This IoT smart home system represents a comprehensive approach to home automation that goes beyond simple remote control. The system learns from user behavior patterns to predict and automate routine tasks, optimizes energy usage through intelligent scheduling, and provides seamless integration between various smart devices. The project demonstrates the potential of IoT technology to create truly intelligent living spaces that adapt to occupants' needs.",
    technicalDetails: [
      "Central hub built using Raspberry Pi 4 with custom Linux distribution",
      "Sensor network using Arduino-based devices with ESP32 WiFi modules",
      "MQTT broker for reliable device communication and message queuing",
      "InfluxDB time-series database for storing sensor data and analytics",
      "React Native mobile app with real-time updates via WebSocket",
      "Machine learning models using scikit-learn for behavior prediction",
    ],
    challenges: [
      "Ensuring reliable communication between diverse IoT devices",
      "Balancing automation with user control and privacy",
      "Managing power consumption for battery-powered sensors",
      "Creating intuitive user interface for complex automation rules",
      "Maintaining system security against IoT-specific vulnerabilities",
    ],
    outcomes: [
      "Reduced household energy consumption by 30% through intelligent automation",
      "Achieved 99.5% system uptime with automatic failure recovery",
      "Successfully predicted user behavior patterns with 87% accuracy",
      "Integrated 25+ different types of smart devices seamlessly",
      "Received interest from 2 smart home technology companies",
    ],
    futureEnhancements: [
      "Integration with major smart home ecosystems (Alexa, Google Home)",
      "Advanced security features including facial recognition",
      "Expansion to multi-home management for property managers",
      "Integration with renewable energy systems and smart grid",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((proj) => proj.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />

      <div className="relative z-10 p-6">
        <Link href="/projects">
          <Button className="mb-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-400/30 text-gray-100 hover:bg-yellow-500/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Card */}
          <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-3xl text-gray-100 mb-4">{project.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      <span className="text-lg">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{project.date}</span>
                    </div>
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.links?.github && (
                    <Button
                      variant="outline"
                      className="border-yellow-400/30 text-gray-100 hover:bg-yellow-500/20 bg-transparent"
                      onClick={() => window.open(project.links?.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links?.demo && (
                    <Button
                      variant="outline"
                      className="border-yellow-400/30 text-gray-100 hover:bg-yellow-500/20 bg-transparent"
                      onClick={() => window.open(project.links?.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.links?.website && (
                    <Button
                      variant="outline"
                      className="border-yellow-400/30 text-gray-100 hover:bg-yellow-500/20 bg-transparent"
                      onClick={() => window.open(project.links?.website, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Media Section */}
          <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-gray-100">Project Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {project.videos && project.videos.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-4">Project Demo</h3>
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <video controls className="w-full h-full" poster="/images/video-poster.jpg">
                      <source src={project.videos[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Project Screenshots</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-yellow-400/20"
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overview */}
          <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-gray-100">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">{project.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-gray-100">Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.technicalDetails.map((detail, index) => (
                  <li key={index} className="text-gray-200 flex items-start gap-3">
                    <span className="text-yellow-400 mt-1 text-lg">⚙️</span>
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-gray-100">Key Features & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.details.map((detail, index) => (
                  <li key={index} className="text-gray-200 flex items-start gap-3">
                    <span className="text-yellow-400 mt-1 text-lg">✨</span>
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-gray-100">Challenges Overcome</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-200 flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-gray-100">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="text-gray-200 flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Future Enhancements */}
          {project.futureEnhancements && project.futureEnhancements.length > 0 && (
            <Card className="bg-black/40 backdrop-blur-md border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-gray-100">Future Enhancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.futureEnhancements.map((enhancement, index) => (
                    <li key={index} className="text-gray-200 flex items-start gap-3">
                      <span className="text-blue-400 mt-1">🚀</span>
                      <span>{enhancement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
