"use client"

import { GalaxyBackground } from "@/components/galaxy-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  date: string
  type: string
  description: string
  skills: string[]
  details: string[]
  images: string[]
  videos?: string[]
  links?: {
    website?: string
    demo?: string
    github?: string
  }
  fullDescription: string
  challenges: string[]
  outcomes: string[]
  testimonials?: {
    author: string
    role: string
    content: string
  }[]
}

const experiences: ExperienceItem[] = [
  {
    id: "leaf-australia",
    title: "Study Australia Industry Experience Program",
    company: "LEAF Organization",
    location: "Australia",
    date: "August 10, 2025",
    type: "consulting",
    description:
      "Consulting project on youth wellbeing and growth strategy for LEAF organization, developing comprehensive business solutions for sustainable impact.",
    skills: [
      "Strategic Analysis",
      "Market Research",
      "Business Development",
      "Data Analytics",
      "Stakeholder Management",
    ],
    details: [
      "Led strategic analysis for youth wellbeing initiatives across 5 Australian cities",
      "Developed comprehensive market research methodology using mixed-method approaches",
      "Created business development framework for sustainable growth targeting 25% expansion",
      "Collaborated with international team across multiple time zones using Agile methodologies",
      "Presented findings to C-level executives and government stakeholders",
    ],
    images: ["/images/experience/leaf-1.jpg", "/images/experience/leaf-2.jpg", "/images/experience/leaf-3.jpg"],
    videos: ["/videos/experience/leaf-presentation.mp4"],
    links: {
      website: "https://leaforganization.org.au",
      demo: "https://demo-leaf-project.com",
    },
    fullDescription:
      "This transformative experience in Australia provided me with deep insights into international business consulting and youth development strategies. Working with LEAF Organization, I was tasked with analyzing their current youth wellbeing programs and developing a comprehensive growth strategy that would enable them to expand their impact across Australia and potentially into other Asia-Pacific markets. The project required extensive stakeholder interviews, data analysis, and strategic planning sessions with team members located across different continents.",
    challenges: [
      "Navigating cultural differences in business practices between Australia and other markets",
      "Managing time zone differences for international collaboration (16-hour difference)",
      "Adapting research methodologies to comply with Australian privacy regulations",
      "Balancing quantitative data analysis with qualitative insights from youth participants",
    ],
    outcomes: [
      "Delivered a 50-page strategic report with actionable recommendations",
      "Identified 3 new market opportunities worth $2M+ in potential revenue",
      "Developed partnerships framework that reduced operational costs by 15%",
      "Created measurement framework for tracking youth wellbeing outcomes",
    ],
    testimonials: [
      {
        author: "Sarah Mitchell",
        role: "Program Director, LEAF Organization",
        content:
          "The strategic insights provided were exceptional. The analysis depth and practical recommendations exceeded our expectations and have become the foundation for our 2025-2027 strategic plan.",
      },
    ],
  },
  {
    id: "tech-startup-intern",
    title: "Software Engineering Intern",
    company: "InnovateTech Solutions",
    location: "San Francisco, CA",
    date: "June 2024 - August 2024",
    type: "development",
    description:
      "Full-stack development role working on user authentication systems and real-time data visualization features for a B2B SaaS platform.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis", "TypeScript", "GraphQL"],
    details: [
      "Implemented user authentication system serving 10,000+ active users",
      "Built real-time data visualization dashboard using React and D3.js",
      "Optimized database queries reducing average load time by 40%",
      "Deployed applications using AWS ECS and implemented CI/CD pipelines",
      "Collaborated with UX team to improve user onboarding flow",
    ],
    images: ["/images/experience/startup-1.jpg", "/images/experience/startup-2.jpg"],
    videos: ["/videos/experience/startup-demo.mp4"],
    links: {
      github: "https://github.com/username/startup-project",
      demo: "https://demo.innovatetech.com",
    },
    fullDescription:
      "During my summer internship at InnovateTech Solutions, I was embedded in a fast-paced startup environment where I contributed to core product features that directly impacted thousands of users. The company was scaling rapidly, and I was given significant responsibility in developing and maintaining critical system components. This experience taught me not only technical skills but also how to work effectively in a high-growth environment where priorities can shift quickly and adaptability is key.",
    challenges: [
      "Learning the existing codebase quickly while contributing meaningful features",
      "Balancing feature development with technical debt reduction",
      "Implementing real-time features while maintaining system performance",
      "Working with legacy database schemas while planning for future scalability",
    ],
    outcomes: [
      "Successfully launched authentication system with 99.9% uptime",
      "Reduced customer support tickets related to login issues by 60%",
      "Improved dashboard loading speed from 3.2s to 1.9s average",
      "Received offer for full-time position upon graduation",
    ],
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
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Research",
      "Scikit-learn",
      "Pandas",
      "Jupyter",
      "Statistical Analysis",
    ],
    details: [
      "Developed ML models with 85% accuracy for student success prediction",
      "Analyzed datasets containing 50,000+ student records across 5 years",
      "Published findings in university research journal with 200+ citations",
      "Presented results at 3 academic conferences including regional AI symposium",
      "Mentored 2 undergraduate students in data science methodologies",
    ],
    images: ["/images/experience/research-1.jpg", "/images/experience/research-2.jpg"],
    videos: ["/videos/experience/research-presentation.mp4"],
    links: {
      website: "https://research.university.edu/student-success",
      github: "https://github.com/username/student-success-ml",
    },
    fullDescription:
      "This research position allowed me to dive deep into the intersection of machine learning and educational outcomes. Working under Dr. Jane Smith, I was responsible for developing predictive models that could identify students who might struggle academically before they actually began to fail. The research had real implications for university policy and student support services, making it both technically challenging and socially impactful.",
    challenges: [
      "Handling sensitive student data while maintaining privacy and ethical standards",
      "Dealing with imbalanced datasets and ensuring model fairness across demographics",
      "Translating complex ML concepts for non-technical stakeholders",
      "Validating model performance across different academic programs and years",
    ],
    outcomes: [
      "Models implemented in pilot program helping 500+ students",
      "Research paper accepted at International Conference on Educational Data Mining",
      "Developed open-source toolkit adopted by 3 other universities",
      "Contributed to $200K NSF grant proposal (approved for next phase)",
    ],
    testimonials: [
      {
        author: "Dr. Jane Smith",
        role: "Principal Investigator",
        content:
          "Outstanding research capabilities and attention to detail. The predictive models developed have become a cornerstone of our student success initiatives.",
      },
    ],
  },
  {
    id: "fintech-consulting",
    title: "FinTech Strategy Consultant",
    company: "Digital Finance Advisors",
    location: "New York, NY (Remote)",
    date: "September 2023 - December 2023",
    type: "consulting",
    description:
      "Strategic consulting for emerging FinTech companies, focusing on digital transformation and regulatory compliance strategies.",
    skills: [
      "Financial Analysis",
      "Regulatory Compliance",
      "Strategy Development",
      "Market Research",
      "Risk Assessment",
    ],
    details: [
      "Analyzed market opportunities for 3 FinTech startups in payments and lending",
      "Developed compliance frameworks for cryptocurrency trading platforms",
      "Created go-to-market strategies resulting in $5M+ funding rounds",
      "Conducted competitive analysis across 50+ FinTech companies",
      "Presented to venture capital firms and angel investors",
    ],
    images: ["/images/experience/fintech-1.jpg", "/images/experience/fintech-2.jpg"],
    fullDescription:
      "Working as a strategy consultant in the FinTech space provided me with invaluable insights into the rapidly evolving financial technology landscape. I worked with early-stage companies navigating complex regulatory environments while trying to innovate and capture market share. This role required me to quickly understand diverse business models, from peer-to-peer lending to cryptocurrency exchanges, and provide actionable strategic recommendations.",
    challenges: [
      "Staying current with rapidly changing cryptocurrency and DeFi regulations",
      "Balancing innovation recommendations with regulatory compliance requirements",
      "Understanding complex financial instruments and their digital implementations",
      "Working with confidential information across competing companies",
    ],
    outcomes: [
      "Helped 2 companies successfully raise Series A funding totaling $8M",
      "Developed regulatory compliance checklist adopted by 10+ startups",
      "Created market analysis framework used in 15+ client engagements",
      "Built network of 50+ FinTech industry contacts",
    ],
  },
  {
    id: "nonprofit-data-analyst",
    title: "Data Analytics Volunteer",
    company: "Community Impact Foundation",
    location: "Local Community",
    date: "May 2023 - August 2023",
    type: "volunteer",
    description:
      "Pro-bono data analytics work for local nonprofit, developing dashboards and insights to improve program effectiveness and donor engagement.",
    skills: ["Data Visualization", "Tableau", "Excel", "SQL", "Nonprofit Analytics", "Impact Measurement"],
    details: [
      "Created interactive dashboards tracking program outcomes for 1,000+ beneficiaries",
      "Analyzed donor patterns leading to 30% increase in retention rates",
      "Developed automated reporting system saving 10 hours/week of manual work",
      "Trained 5 staff members on data analysis and visualization tools",
      "Presented findings to board of directors and major donors",
    ],
    images: ["/images/experience/nonprofit-1.jpg", "/images/experience/nonprofit-2.jpg"],
    fullDescription:
      "This volunteer position allowed me to apply my technical skills for social good while gaining experience in the nonprofit sector. The Community Impact Foundation was struggling to effectively measure and communicate their impact to donors and stakeholders. I worked closely with program managers to understand their data needs and developed comprehensive analytics solutions that transformed how they approached program evaluation and donor relations.",
    challenges: [
      "Working with limited and inconsistent historical data",
      "Training non-technical staff to use new analytics tools",
      "Balancing detailed analysis with accessible visualizations for diverse audiences",
      "Implementing solutions within tight budget constraints",
    ],
    outcomes: [
      "Increased donor retention rate from 45% to 58% through better engagement",
      "Identified most effective programs leading to 25% budget reallocation",
      "Created template dashboards used by 3 other local nonprofits",
      "Helped secure $150K in additional grant funding through improved reporting",
    ],
  },
]

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = experiences.find((exp) => exp.id === params.id)

  if (!experience) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />

      <div className="relative z-10 p-6">
        <Link href="/experience">
          <Button className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experience
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-3xl text-white mb-4">{experience.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span className="text-lg">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{experience.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.skills.map((skill, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {experience.links?.website && (
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Website
                    </Button>
                  )}
                  {experience.links?.demo && (
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Media Section */}
          {(experience.images.length > 0 || experience.videos) && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Project Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.videos && experience.videos.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Project Demo</h3>
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                      <video controls className="w-full h-full" poster="/images/video-poster.jpg">
                        <source src={experience.videos[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                {experience.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Project Images</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {experience.images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${experience.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg border border-white/20"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Overview */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">{experience.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.details.map((detail, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-blue-400 mt-1 text-lg">•</span>
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Challenges Faced</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Outcomes & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.outcomes.map((outcome, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          {experience.testimonials && experience.testimonials.length > 0 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Testimonials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-6">
                    <p className="text-gray-300 text-lg italic mb-3">"{testimonial.content}"</p>
                    <div className="text-blue-400">
                      <span className="font-semibold">{testimonial.author}</span>
                      <span className="text-gray-400"> - {testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
