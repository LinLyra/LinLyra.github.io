"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
  logo: string
  level?: "Proficient" | "Working" | "Learning"
}

function LogoTile({ src, name }: { src: string; name: string }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className="relative h-12 md:h-14 lg:h-16">
      {broken ? (
        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white/70">
          {name.slice(0, 2).toUpperCase()}
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
          className="object-contain"
          onError={() => setBroken(true)}
          priority={false}
        />
      )}
      <span className="sr-only">{name}</span>
    </div>
  )
}

function SkillsSection() {
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
      skills: ["User Research", "Market Analysis", "Roadmapping", "MVP Design", "Prototyping (Figma)", "KPI Frameworks"],
    },
    {
      title: "Business & Consulting",
      skills: ["Stakeholder Communication", "Problem Structuring", "Business Modeling", "Industry Analysis", "Digital Transformation", "GTM Planning"],
    },
    {
      title: "Full-stack Prototyping",
      skills: ["Next.js / React", "Tailwind / Node.js", "Cloud Databases", "API Architecture", "Deployment & Scaling"],
    },
  ]

  const tools: Tool[] = [
    // Database
    { slug: "postgres",  name: "PostgreSQL",       category: "Database",  logo: "/tools/postgres.png" },
    { slug: "mysql",     name: "MySQL",            category: "Database",  logo: "/tools/mysql.png" },
    { slug: "supabase",  name: "Supabase",         category: "Database",  logo: "/tools/supabase.png" },

    // Data
    { slug: "pandas",      name: "pandas",         category: "Data",      logo: "/tools/pandas.png" },
    { slug: "numpy",       name: "NumPy",          category: "Data",      logo: "/tools/numpy.png" },
    { slug: "matplotlib",  name: "Matplotlib",     category: "Data",      logo: "/tools/matplotlib.png" },
    { slug: "spark",       name: "Apache Spark",   category: "Data",      logo: "/tools/spark.png" },

    // ML
    { slug: "sklearn",     name: "scikit-learn",   category: "ML",        logo: "/tools/sk.png" },

    // Notebooks
    { slug: "jupyter",     name: "Jupyter Notebook", category: "Data",    logo: "/tools/jupyter.png" },
    { slug: "colab",       name: "Google Colab",   category: "Data",      logo: "/tools/colab.png" },

    // Analytics / BI
    { slug: "tableau",     name: "Tableau",        category: "Analytics", logo: "/tools/tableau.png" },
    { slug: "ga",          name: "Google Analytics", category: "Analytics", logo: "/tools/google-analytics.png" },
    { slug: "powerbi",     name: "Power BI",       category: "Analytics", logo: "/tools/powerbi.png" },

    // Design
    { slug: "figma",       name: "Figma",          category: "Design",    logo: "/tools/figma.png" },

    // R
    { slug: "r-lang",      name: "R",              category: "Data",      logo: "/tools/r.png" },
  ]

  return (
    <section id="skills" className="min-h-screen relative z-10 px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        {/* Title + intro */}
        <div className="mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-100">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">A multidisciplinary toolkit for innovation and growth.</p>
          <p className="text-lg text-gray-300">From datasets to deploy — turning insight into product impact.</p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {skillCategories.map((category, index) => (
            <Card key={index} className="flex h-full flex-col border-white/10 bg-white/5 backdrop-blur-md transition hover:bg-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-gray-100">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-start gap-2">
                  {category.skills.map((s, i) => (
                    <span key={i} className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-blue-400">Tools &amp; Software</h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
          {tools.map((t) => (
            <LogoTile key={t.slug} src={t.logo} name={t.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
