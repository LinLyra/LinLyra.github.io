"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Science",
      skills: [
        "Predictive Modeling",
        "Time Series Forecasting",
        "Deep Learning",
        "Scalable Data Processing (Spark)",
        "SQL / NoSQL (MongoDB)",
        "Data Storytelling (Power BI)",
        "A/B Testing",
        "Gen AI Applications",
        "Statistical Analysis",
      ],
    },
    {
      title: "Product Strategy",
      skills: [
        "User Research",
        "Market Analysis",
        "Roadmapping",
        "MVP Design",
        "Prototyping (Figma)",
        "KPI Frameworks",
      ],
    },
    {
      title: "Business & Consulting",
      skills: [
        "Stakeholder Communication",
        "Problem Structuring",
        "Business Modeling",
        "Industry Analysis",
        "Digital Transformation",
        "GTM Planning",
      ],
    },
    {
      title: "Full-stack Prototyping",
      skills: [
        "Next.js / React",
        "Tailwind / Node.js",
        "Cloud Databases",
        "API Architecture",
        "Deployment & Scaling",
      ],
    },
  ]

  const stats = [
    { number: "Since 2024.08", label: " Active in Data" },
    { number: "30+", label: "Projects / Competitions Completed" },
    { number: "Data → Product", label: "Bridge from Insight to Product" },
  ]

  const trajectory = [
    {
      date: "2024.08",
      title: "Foundations",
      desc: "Started data journey — Python, stats, first datasets & notebooks.",
    },
    {
      date: "2025.03",
      title: "Acceleration",
      desc: "Case comps & internships, mixing analytics with product/strategy.",
    },
    {
      date: "2025.08",
      title: "Integration(Ongoing)",
      desc: "Client interviews → pipelines → GenAI & prototypes (end-to-end).",
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Skills & Trajectory
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            A multidisciplinary toolkit for innovation and growth.
          </p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-gray-100 text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 items-start">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center max-w-xs">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trajectory */}
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8">
          Trajectory
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {trajectory.map((step, i) => (
            <Card
              key={i}
              className="bg-white/5 backdrop-blur-md border-white/10 h-full flex flex-col"
            >
              <CardHeader>
                <p className="text-blue-300 font-semibold">{step.date}</p>
                <CardTitle className="text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

