"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { portfolioHighlights } from "@/lib/portfolio-highlights"

type Tool = {
  slug: string
  name: string
  logo: string
}

function Rail({
  title,
  accentClass,
  items,
  speed,
}: {
  title: string
  accentClass: string
  items: typeof portfolioHighlights
  speed: string
}) {
  const track = [...items, ...items]

  return (
    <div className="space-y-2.5">
      <div className={`text-[10px] font-semibold tracking-[0.38em] ${accentClass}`}>{title}</div>
      <div className="overflow-hidden">
        <div className="ticker-track" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className="group mx-2 inline-flex min-w-[14.5rem] items-center gap-3 rounded-full border border-white/10 bg-white/[0.015] px-4 py-2.5 text-left transition hover:border-white/18 hover:bg-white/[0.045]"
            >
              <span
                className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                  item.section === "business"
                    ? "bg-emerald-300"
                    : item.section === "data"
                      ? "bg-sky-300"
                      : "bg-amber-300"
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-gray-100">{item.title}</span>
                <span className="block truncate text-xs text-white/55">
                  {item.badge} · {item.date}
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/35 opacity-0 transition group-hover:opacity-100">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolTile({ src, name, index }: { src: string; name: string; index: number }) {
  return (
    <div
      className="flex flex-col items-center gap-1.5 text-center transition duration-300 hover:-translate-y-0.5"
      style={{ animationDelay: `${index * 60}ms` }}
      title={name}
    >
      <Image
        src={src}
        alt={name}
        width={72}
        height={72}
        className="h-14 w-14 object-contain"
        style={{
          filter: "saturate(1.04) contrast(1.04) brightness(1.02) drop-shadow(0 0 10px rgba(148,163,184,0.08))",
        }}
      />
      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">{name}</div>
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
    { slug: "python", name: "Python", logo: "/tools/python.png" },
    { slug: "r", name: "R", logo: "/tools/r.png" },
    { slug: "sql-postgres", name: "PostgreSQL", logo: "/tools/postgres.png" },
    { slug: "mysql", name: "MySQL", logo: "/tools/mysql.png" },
    { slug: "supabase", name: "Supabase", logo: "/tools/supabase.png" },
    { slug: "tableau", name: "Tableau", logo: "/tools/tableau.png" },
    { slug: "powerbi", name: "Power BI", logo: "/tools/powerbi.png" },
    { slug: "excel", name: "Excel", logo: "/tools/excel.png" },
    { slug: "ppt", name: "PowerPoint", logo: "/tools/ppt.png" },
    { slug: "thinkcell", name: "think-cell", logo: "/tools/thinkcell.png" },
    { slug: "spark", name: "Spark", logo: "/tools/spark.png" },
    { slug: "airflow", name: "Airflow", logo: "/tools/airflow.png" },
    { slug: "databricks", name: "Databricks", logo: "/tools/databrick.png" },
    { slug: "gurobi", name: "Gurobi", logo: "/tools/gurobi.png" },
    { slug: "ga", name: "Google Analytics", logo: "/tools/google-analytics.png" },
    { slug: "figma", name: "Figma", logo: "/tools/figma.png" },
    { slug: "notion", name: "Notion", logo: "/tools/notion.png" },
    { slug: "axure", name: "Axure", logo: "/tools/axure.png" },
  ]

  const businessItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "business"), [])
  const dataItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "data"), [])
  const productItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "product"), [])

  return (
    <section id="skills" className="relative z-10 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">Three orbits, one toolkit.</p>
          <p className="text-base text-gray-300 md:text-lg">Business, data, and product stories moving quietly across the page.</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {skillCategories.map((category, index) => (
            <PremiumGlassCard
              key={index}
              tiltMaxDeg={4}
              className="flex h-full flex-col border border-sky-400/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_26px_rgba(56,189,248,0.08)] hover:border-sky-400/25 hover:bg-white/[0.06]"
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

        <ScrollReveal variant="soft" className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-5">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.38em] text-white/50">PROJECT ORBITS</div>
                <div className="mt-2 text-xl font-semibold text-gray-100 md:text-2xl">A slower drift, so each project can breathe.</div>
                <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/80">
                  Business, data, and product highlights run on separate orbits, each with its own tone and color so the story stays readable.
                </div>
              </div>
              <Rail title="BUSINESS ORBIT" accentClass="text-emerald-200" items={businessItems} speed="60s" />
              <Rail title="DATA ORBIT" accentClass="text-sky-200" items={dataItems} speed="66s" />
              <Rail title="PRODUCT ORBIT" accentClass="text-amber-200" items={productItems} speed="72s" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.38em] text-white/50">TOOLS CONSTELLATION</div>
                <div className="mt-2 text-xl font-semibold text-gray-100 md:text-2xl">No frames, just the stack itself.</div>
                <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/80">
                  The logos sit directly on the page. If a source asset carried a baked background, it has been converted to a transparent PNG so it reads cleanly on the dark sky.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {tools.map((tool, index) => (
                  <ToolTile key={tool.slug} src={tool.logo} name={tool.name} index={index} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
