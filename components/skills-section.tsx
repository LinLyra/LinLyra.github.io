"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/* ---------------- Types ---------------- */
type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
  logo: string       // e.g. /tools/python.svg
  level?: "Proficient" | "Working" | "Learning"
}

/* ---------------- SkillsSection (keep your 4 skill cards, replace Tools area) ---------------- */
export function SkillsSection() {
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

  // ✅ Tools you decided to show (Tableau + both SQL + Jupyter + Colab + R included)
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
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Skills &amp; Tools</h2>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Ship</p>
        </div>

        {/* ✅ Keep: your 4 skills cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 mb-14">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition h-full">
              <CardHeader><CardTitle className="text-gray-100 text-xl">{category.title}</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🌌 New: shaped/constellation layout (desktop) + simple grid (mobile) */}
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">Tools &amp; Software</h3>
        <div className="hidden md:block">
          <ToolsConstellation tools={tools} />
        </div>
        <div className="md:hidden">
          <SimpleToolsGrid tools={tools} />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Constellation (ring) layout ---------------- */
function ToolsConstellation({ tools }: { tools: Tool[] }) {
  // Decide the order & ring radius per category (px)
  const rings = [
    { category: "Web" as Category, radius: 120 },
    { category: "Database" as Category, radius: 180 },
    { category: "Data" as Category, radius: 240 },
    { category: "ML" as Category, radius: 300 },
    { category: "Analytics" as Category, radius: 360 },
    { category: "DevOps" as Category, radius: 420 },
    { category: "Cloud" as Category, radius: 480 },
    { category: "Design" as Category, radius: 540 },
  ]

  const grouped = useMemo(
    () => rings.map(r => ({ ...r, items: tools.filter(t => t.category === r.category) })),
    [tools]
  )

  return (
    <div className="relative mx-auto aspect-square w-full max-w-4xl rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl [background:radial-gradient(ellipse_at_center,rgba(99,102,241,.12),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
        {grouped.map((ring, ri) => {
          const n = ring.items.length || 1
          return ring.items.map((t, i) => {
            const angle = (i / n) * 2 * Math.PI
            const x = Math.cos(angle) * ring.radius
            const y = Math.sin(angle) * ring.radius
            return <ToolDot key={`${t.slug}-${ri}-${i}`} tool={t} x={x} y={y} />
          })
        })}
      </div>
    </div>
  )
}

function ToolDot({ tool, x, y }: { tool: Tool; x: number; y: number }) {
  const [err, setErr] = useState(false)
  return (
    <div className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
      <div className="group flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md transition hover:scale-105">
          {err ? (
            <div className="text-xs font-semibold text-white/80">{tool.name.slice(0, 2).toUpperCase()}</div>
          ) : (
            <Image
              src={tool.logo}
              alt={tool.name}
              width={28}
              height={28}
              className="object-contain"
              onError={() => setErr(true)}
            />
          )}
        </div>
        <div className="pointer-events-none mt-1 hidden min-w-[6rem] rounded-md bg-black/70 px-2 py-1 text-center text-[11px] text-white/80 shadow group-hover:block">
          {tool.name}
        </div>
      </div>
    </div>
  )
}

/* ---------------- Mobile fallback: simple grid ---------------- */
function SimpleToolsGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {tools.map(t => (
        <Card key={t.slug} className="border-white/10 bg-white/[0.03]">
          <CardContent className="flex h-24 flex-col items-center justify-center gap-2">
            <Image src={t.logo} alt={t.name} width={28} height={28} className="object-contain" />
            <div className="text-sm text-white/90">{t.name}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

