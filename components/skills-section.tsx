"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    <div
      className="group relative aspect-[5/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-xl shadow-[0_0_22px_rgba(56,189,248,0.06)]"
      title={name}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.12),transparent_55%)]" />
      {broken ? (
        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white/70">
          {name.slice(0, 2).toUpperCase()}
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 640px) 90px, (max-width: 1024px) 110px, 120px"
          className="object-contain p-3 opacity-90 transition duration-500 group-hover:opacity-100 [mix-blend-mode:multiply] [filter:brightness(1.2)_contrast(1.15)_saturate(1.05)]"
          onError={() => setBroken(true)}
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
    // Core DS/DA/BA/PM toolbox (based on current public/tools)
    { slug: "python",     name: "Python",         category: "Data",      logo: "/tools/python.png" },
    { slug: "r",          name: "R",              category: "Data",      logo: "/tools/r.png" },
    { slug: "sql-postgres", name: "PostgreSQL",   category: "Database",  logo: "/tools/postgres.png" },
    { slug: "mysql",      name: "MySQL",          category: "Database",  logo: "/tools/mysql.png" },
    { slug: "supabase",   name: "Supabase",       category: "Database",  logo: "/tools/supabase.png" },

    { slug: "tableau",    name: "Tableau",        category: "Analytics", logo: "/tools/tableau.png" },
    { slug: "powerbi",    name: "Power BI",       category: "Analytics", logo: "/tools/powerbi.png" },
    { slug: "excel",      name: "Excel",          category: "Analytics", logo: "/tools/excel.png" },
    { slug: "ppt",        name: "PowerPoint",     category: "Design",    logo: "/tools/ppt.jpg" },
    { slug: "thinkcell",  name: "think-cell",     category: "Design",    logo: "/tools/thinkcell.png" },

    { slug: "spark",      name: "Spark",          category: "Data",      logo: "/tools/spark.png" },
    { slug: "airflow",    name: "Airflow",        category: "DevOps",    logo: "/tools/airflow.png" },
    { slug: "databricks", name: "Databricks",     category: "Cloud",     logo: "/tools/databrick.png" },
    { slug: "gurobi",     name: "Gurobi",         category: "Data",      logo: "/tools/gurobi.png" },

    { slug: "ga",         name: "Google Analytics", category: "Analytics", logo: "/tools/google-analytics.png" },
    { slug: "figma",      name: "Figma",          category: "Design",    logo: "/tools/figma.png" },
    { slug: "notion",     name: "Notion",         category: "Design",    logo: "/tools/notion.png" },
    { slug: "axure",      name: "Axure",          category: "Design",    logo: "/tools/axure.png" },
  ]

  return (
    <section id="skills" className="min-h-screen relative z-10 px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        {/* Title + intro */}
        <div className="mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-100">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">A multidisciplinary toolkit for innovation and growth.</p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        {/* Skill chips */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {skillCategories.map((category, index) => (
            <PremiumGlassCard
              key={index}
              tiltMaxDeg={4}
              className="flex h-full flex-col border border-sky-400/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_26px_rgba(56,189,248,0.08)] hover:bg-white/[0.06] hover:border-sky-400/25"
            >
              <div className="p-6 pb-2">
                <div className="text-xl font-semibold text-gray-100">{category.title}</div>
              </div>
              <div className="flex-1 p-6 pt-0">
                <div className="flex flex-wrap items-start gap-2">
                  {category.skills.map((s, i) => (
                    <span key={i} className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </PremiumGlassCard>
          ))}
        </div>

    
        <ScrollReveal variant="soft" className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.10)]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_55%)]" />

            <div className="relative flex items-end justify-between gap-4">
              <div className="text-left">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-white/60">EQUIPMENT BAY</div>
                <div className="mt-1 text-2xl md:text-3xl font-semibold text-gray-100">
                  Tools I ship with
                </div>
                <div className="mt-1 text-sm text-gray-300/80">
                  Drag your attention across the bay — each badge is a capability.
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                Loaded & ready
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-8">
              {tools.map((t) => (
                <div
                  key={t.slug}
                  className="group/tool relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition
                             hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/tool:opacity-100 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_55%)]" />
                  <div className="relative p-3">
                    <LogoTile src={t.logo} name={t.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
