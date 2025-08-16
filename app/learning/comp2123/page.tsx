"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ArrowLeft, ImageIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MediaModal } from "@/components/media-modal"

interface LearningItem {
  id: string
  title: string
  institution: string
  date: string
  type: string
  description: string
  skills: string[]
  overview: string
  content: string[]
  outcomes: string[]
  skillsAcquired: string[]
  grade?: string
  certificate?: string
  media?: {
    images: string[]
    videos: string[]
    documents: string[]
  }
}

const learningItems: LearningItem[] = [
  {
    id: "fullstack-bootcamp",
    title: "Full Stack Web Development",
    institution: "Online Bootcamp",
    date: "Summer 2023",
    type: "bootcamp",
    description: "Intensive 12-week program covering modern web development technologies and practices.",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML/CSS", "Git"],
    overview:
      "This comprehensive bootcamp provided hands-on experience in full-stack web development, covering everything from frontend frameworks to backend APIs and database management. The program emphasized practical project-based learning and industry best practices.",
    content: [
      "Built 5 full-stack applications from scratch using the MERN stack",
      "Learned modern development practices including version control with Git",
      "Collaborated on team projects using Agile methodology and Scrum framework",
      "Implemented responsive design principles and mobile-first development",
      "Gained experience with deployment platforms like Heroku and Netlify",
      "Practiced code reviews and pair programming with fellow students",
    ],
    outcomes: [
      "Completed with 95% final project score",
      "Successfully deployed 5 production-ready applications",
      "Built a portfolio website showcasing all projects",
      "Received official completion certificate",
      "Connected with 20+ fellow developers in the cohort",
    ],
    skillsAcquired: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML/CSS", "Git", "Agile"],
    certificate: "Full Stack Developer Certificate",
    media: {
      images: ["/images/learning/bootcamp-cert.jpg", "/images/learning/bootcamp-projects.jpg"],
      videos: ["/videos/learning/bootcamp-demo.mp4"],
      documents: ["/docs/learning/bootcamp-certificate.pdf"],
    },
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    institution: "Coursera - Stanford University",
    date: "Fall 2023",
    type: "online-course",
    description: "Comprehensive course series covering supervised and unsupervised learning algorithms.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Data Analysis"],
    overview:
      "This specialization provided a thorough foundation in machine learning concepts and practical implementation. The course covered both theoretical understanding and hands-on application of various ML algorithms, from linear regression to deep neural networks.",
    content: [
      "Completed 4-course specialization with honors across all modules",
      "Implemented various ML algorithms from scratch using Python and NumPy",
      "Worked on real-world datasets including image recognition and NLP tasks",
      "Built and trained neural networks using TensorFlow and Keras",
      "Applied regularization techniques to prevent overfitting",
      "Learned unsupervised learning methods including clustering and PCA",
    ],
    outcomes: [
      "Achieved 98% average score across all courses",
      "Successfully completed 12 programming assignments",
      "Built a complete image classification system",
      "Developed a recommendation system using collaborative filtering",
      "Earned verified certificates for all 4 courses",
    ],
    skillsAcquired: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Data Analysis", "Statistics"],
    certificate: "Machine Learning Specialization Certificate",
    media: {
      images: ["/images/learning/ml-cert.jpg", "/images/learning/ml-projects.jpg"],
      videos: ["/videos/learning/ml-demo.mp4"],
      documents: ["/docs/learning/ml-certificate.pdf"],
    },
  },
  {
    id: "cs-degree",
    title: "Computer Science Degree",
    institution: "University Name",
    date: "2021 - 2025",
    type: "degree",
    description: "Bachelor's degree in Computer Science with focus on software engineering and algorithms.",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "Database Systems", "Operating Systems"],
    overview:
      "Comprehensive computer science education covering fundamental concepts in programming, algorithms, system design, and software engineering. The program provided both theoretical knowledge and practical skills necessary for a career in technology.",
    content: [
      "Maintained GPA of 3.8/4.0 throughout the program",
      "Completed advanced coursework in machine learning and artificial intelligence",
      "Led student programming club for 2 years as president",
      "Participated in undergraduate research on distributed systems",
      "Completed senior capstone project on blockchain applications",
      "Tutored fellow students in data structures and algorithms",
    ],
    outcomes: [
      "Expected to graduate Magna Cum Laude in 2025",
      "Completed 120+ credit hours with distinction",
      "Published research paper in undergraduate journal",
      "Received Dean's List recognition for 6 semesters",
      "Built network of 100+ peers and faculty connections",
    ],
    skillsAcquired: [
      "Algorithms",
      "Data Structures",
      "Software Engineering",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
    ],
    grade: "3.8 GPA",
    media: {
      images: ["/images/learning/degree-transcript.jpg", "/images/learning/graduation.jpg"],
      videos: ["/videos/learning/capstone-presentation.mp4"],
      documents: ["/docs/learning/transcript.pdf"],
    },
  },
  {
    id: "aws-certification",
    title: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    date: "March 2024",
    type: "certification",
    description: "Professional certification in cloud architecture and AWS services.",
    skills: ["AWS", "Cloud Architecture", "DevOps", "Infrastructure", "Security"],
    overview:
      "This certification validated my expertise in designing and deploying scalable, highly available systems on AWS. The preparation involved hands-on experience with various AWS services and understanding of cloud best practices.",
    content: [
      "Studied AWS core services including EC2, S3, RDS, and Lambda",
      "Learned cloud architecture patterns and design principles",
      "Practiced with AWS CLI and CloudFormation for infrastructure as code",
      "Understood security best practices and compliance requirements",
      "Gained experience with monitoring and logging using CloudWatch",
      "Explored cost optimization strategies for cloud deployments",
    ],
    outcomes: [
      "Passed certification exam with score of 850/1000",
      "Demonstrated proficiency in 6 core AWS service categories",
      "Earned industry-recognized professional credential",
      "Qualified for AWS partner program benefits",
      "Enhanced career prospects in cloud computing field",
    ],
    skillsAcquired: ["AWS", "Cloud Architecture", "DevOps", "Infrastructure", "Security", "Cost Optimization"],
    certificate: "AWS Certified Solutions Architect - Associate",
    media: {
      images: ["/images/learning/aws-cert.jpg", "/images/learning/aws-badge.jpg"],
      videos: ["/videos/learning/aws-demo.mp4"],
      documents: ["/docs/learning/aws-certificate.pdf"],
    },
  },
  {
    id: "data-science-course",
    title: "Data Science with Python",
    institution: "DataCamp",
    date: "January 2024",
    type: "online-course",
    description: "Comprehensive data science track covering Python, statistics, and machine learning.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Statistics", "Data Visualization"],
    overview:
      "This track provided comprehensive training in data science fundamentals, from data manipulation and cleaning to statistical analysis and visualization. The course emphasized practical skills needed for real-world data science projects.",
    content: [
      "Completed 15 courses covering the entire data science pipeline",
      "Mastered data manipulation using Pandas and NumPy libraries",
      "Created compelling visualizations using Matplotlib and Seaborn",
      "Applied statistical methods for hypothesis testing and inference",
      "Built predictive models using scikit-learn",
      "Worked on 5 real-world data science projects",
    ],
    outcomes: [
      "Earned track completion certificate with 95% average score",
      "Completed 50+ hands-on exercises and projects",
      "Built a complete data science portfolio",
      "Gained proficiency in Python data science ecosystem",
      "Developed skills in data storytelling and presentation",
    ],
    skillsAcquired: ["Python", "Pandas", "NumPy", "Matplotlib", "Statistics", "Data Visualization", "Seaborn"],
    certificate: "Data Science with Python Track Certificate",
    media: {
      images: ["/images/learning/datacamp-cert.jpg", "/images/learning/data-projects.jpg"],
      videos: ["/videos/learning/data-analysis-demo.mp4"],
      documents: ["/docs/learning/datacamp-certificate.pdf"],
    },
  },
]

export default function LearningDetailPage({ params }: { params: { id: string } }) {
  const [showMediaModal, setShowMediaModal] = useState(false)
  const learning = learningItems.find((item) => item.id === params.id)

  if (!learning) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />

      <div className="relative z-10 p-6">
        <Link href="/learning">
          <Button className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-3xl text-white mb-4">{learning.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      <span className="text-lg">{learning.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{learning.date}</span>
                    </div>
                    {learning.grade && (
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-semibold">{learning.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
                {learning.media && (
                  <Button
                    onClick={() => setShowMediaModal(true)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    View Media
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>

          {/* Course Overview */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">{learning.overview}</p>
            </CardContent>
          </Card>

          {/* Learning Content */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {learning.content.map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-lg">•</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Outcomes & Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {learning.outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-lg">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Skills Acquired */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Skills Acquired</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {learning.skillsAcquired.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-sm px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Modal */}
        {learning.media && (
          <MediaModal
            isOpen={showMediaModal}
            onClose={() => setShowMediaModal(false)}
            title={learning.title}
            media={learning.media}
          />
        )}
      </div>
    </div>
  )
}
