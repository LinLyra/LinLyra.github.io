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

function LogoFallback({ name }: { name: string }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-xs font-semibold text-white/80">
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}

function ToolLogo({ src, name }: { src: string; name: string }) {
  const [broken, setBroken] = useState(false)
  return broken ? (
    <LogoFallback name={name} />
  ) : (
    <Image
      src={src}
      alt={name}
      width={36}
      height={36}
      className="object-contain opacity-90 transition group-hover:opacity-100"
      onError={() => setBroken(true)}
    />
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Science",
      skills: [
        "Predictive Modeling","Time Series Forecasting","Deep Learning",
        "Scalable Data Processing (Spark)","SQL / NoSQL (MongoDB)",
        "Data Storytelling (Power BI)","A/B Testing","Gen AI Applications","Statistical Analysis",
      ],
    },
    {
      title: "Product Strategy",
      skills: ["User Research","Market Analysis","Roadmapping","MVP Design","Prototyping (Figma)","KPI Frameworks"],
    },
    {
      title: "Business & Consulting",
      skills: ["Stakeholder Communication","Problem Structuring","Business Modeling","Industry Analysis","Digital Transformation","GTM Planning"],
    },
    {
      title: "Full-stack Prototyping",
      skills: ["Next.js / React","Tailwind / Node.js","Cloud Databases","API Architecture","Deployment & Scaling"],
    },
  ]

  // ===== Tools=====
  const tools: Tool[] = [
    // Web
    { slug: "typescript", name: "TypeScript", category: "Web", logo: "/tools/typescript.svg", level: "Proficient" },
    { slug: "nextjs", name: "Next.js", category: "Web", logo: "/tools/nextjs.svg", level: "Proficient" },
    { slug: "react", name: "React", category: "Web", logo: "/tools/react.svg", level: "Proficient" },
    { slug: "tailwind", name: "Tailwind CSS", category: "Web", logo: "/tools/tailwind.svg", level: "Proficient" },
    { slug: "nodejs", name: "Node.js", category: "Web", logo: "/tools/nodejs.svg", level: "Working" },

    // Database
    { slug: "postgres", name: "PostgreSQL", category: "Database", logo: "/tools/postgres.svg", level: "Proficient" },
    { slug: "mysql", name: "MySQL", category: "Database", logo: "/tools/mysql.svg", level: "Proficient" },
    { slug: "supabase", name: "Supabase", category: "Database", logo: "/tools/supabase.svg", level: "Working" },

    // Data / ML
    { slug: "python", name: "Python", category: "Data", logo: "/tools/python.svg", level: "Proficient" },
    { slug: "pandas", name: "pandas", category: "Data", logo: "/tools/pandas.svg", level: "Proficient" },
    { slug: "numpy", name: "NumPy", category: "Data", logo: "/tools/numpy.svg", level: "Proficient" },
    { slug: "sklearn", name: "scikit-learn", category: "ML", logo: "/tools/sklearn.svg", level: "Proficient" },

    // Notebooks
    { slug: "jupyter", name: "Jupyter Notebook", category: "Data", logo: "/tools/jupyter.svg", level: "Proficient" },
    { slug: "colab", name: "Google Colab", category: "Data", logo: "/tools/colab.svg", level: "Working" },

    // Analytics / BI
    { slug: "tableau", name: "Tableau", category: "Analytics", logo: "/tools/tableau.svg", level: "Working" },

    // DevOps / Cloud
    { slug: "git", name: "Git", category: "DevOps", logo: "/tools/git.svg", level: "Proficient" },
    { slug: "docker", name: "Docker", category: "DevOps", logo: "/tools/docker.svg", level: "Working" },
    { slug: "aws", name: "AWS", category: "Cloud", logo: "/tools/aws.svg", level: "Working" },

    // Design
    { slug: "figma", name: "Figma", category: "Design", logo: "/tools/figma.svg", level: "Working" },

    // R
    { slug: "r-lang", name: "R", category: "Data", logo: "/tools/r.svg", level: "Working" },
  ]

  return (
    <section id="skills" className="min-h-screen relative z-10 px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-100">Skills</h2>
          <p className="mb-3 text-xl text-gray-200">A multidisciplinary toolkit for innovation and growth.</p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {skillCategories.map((category, index) => (
            <Card key={index} className="flex h-full flex-col border-white/10 bg-white/5 backdrop-blur-md transition hover:bg-white/10">
              <CardHeader><CardTitle className="text-xl text-gray-100">{category.title}</CardTitle></CardHeader>
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
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {tools.map((t) => (
            <div
              key={t.slug}
              className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
              title={`${t.name}${t.level ? ` • ${t.level}` : ""}`}
            >
              <ToolLogo src={t.logo} name={t.name} />
              <div className="mt-2 line-clamp-1 text-sm text-white/90">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
