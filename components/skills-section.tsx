"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Tool = {
  slug: string
  name: string
  category: "Data" | "ML" | "Analytics" | "Database" | "Cloud" | "Web" | "DevOps" | "Design"
  logo: string
  level?: "Proficient" | "Working" | "Learning"
}

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

  // Tools & Software (includes Tableau, both SQLs, Jupyter, Colab, R)
  const tools: Tool[] = [
    // Web
    { slug: "typescript", name: "TypeScript", category: "Web", logo: "/tools/typescript.png", level: "Proficient" },
    { slug: "nextjs", name: "Next.js", category: "Web", logo: "/tools/nextjs.png", level: "Proficient" },
    { slug: "react", name: "React", category: "Web", logo: "/tools/react.png", level: "Proficient" },
    { slug: "tailwind", name: "Tailwind CSS", category: "Web", logo: "/tools/tailwind.png", level: "Proficient" },
    { slug: "nodejs", name: "Node.js", category: "Web", logo: "/tools/nodejs.png", level: "Working" },
    // Database (both SQLs + Supabase)
    { slug: "postgres", name: "PostgreSQL", category: "Database", logo: "/tools/postgres.png", level: "Proficient" },
    { slug: "mysql", name: "MySQL", category: "Database", logo: "/tools/mysql.png", level: "Proficient" },
    { slug: "supabase", name: "Supabase", category: "Database", logo: "/tools/supabase.png", level: "Working" },
    // Data / ML core
    { slug: "python", name: "Python", category: "Data", logo: "/tools/python.svg", level: "Proficient" },
    { slug: "pandas", name: "pandas", category: "Data", logo: "/tools/pandas.svg", level: "Proficient" },
    { slug: "numpy", name: "NumPy", category: "Data", logo: "/tools/numpy.svg", level: "Proficient" },
    { slug: "sklearn", name: "scikit-learn", category: "ML", logo: "/tools/sklearn.png", level: "Proficient" },
    // Notebooks
    { slug: "jupyter", name: "Jupyter Notebook", category: "Data", logo: "/tools/jupyter.png", level: "Proficient" },
    { slug: "colab", name: "Google Colab", category: "Data", logo: "/tools/colab.png", level: "Working" },
    // Analytics / BI
    { slug: "tableau", name: "Tableau", category: "Analytics", logo: "/tools/tableau.png", level: "Working" },
    // DevOps / Cloud
    { slug: "git", name: "Git", category: "DevOps", logo: "/tools/git.png", level: "Proficient" },
    // Design
    { slug: "figma", name: "Figma", category: "Design", logo: "/tools/figma.png", level: "Working" },
    // R language
    { slug: "r-lang", name: "R", category: "Data", logo: "/tools/r.png", level: "Working" },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title (dates removed) */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Skills &amp; Tools
          </h2>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Ship</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 mb-14">
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

        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
          Tools &amp; Software
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((t) => (
            <Card
              key={t.slug}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition h-full"
            >
              <CardContent className="py-4 flex flex-col items-center gap-2">
                <div className="relative h-9 w-9">
                  <Image src={t.logo} alt={t.name} fill className="object-contain" />
                </div>
                <div className="text-sm text-gray-100">{t.name}</div>
                <div className="text-[10px] text-gray-400">
                  {t.category} · {t.level ?? "Working"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
