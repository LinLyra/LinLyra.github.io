"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { portfolioHighlights } from "@/lib/portfolio-highlights"

type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
  logo: string
}

function TickerItem({ title, meta, href, active }: { title: string; meta: string; href: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-w-[18rem] items-center gap-3 rounded-full border px-4 py-3 text-left transition duration-300 ${
        active
          ? "border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.10)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
      }`}
    >
      <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${active ? "bg-cyan-300" : "bg-white/30"}`} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-gray-100">{title}</span>
        <span className="block truncate text-xs text-gray-400">{meta}</span>
      </span>
      <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/70 opacity-0 transition group-hover:opacity-100">Open</span>
    </Link>
  )
}

function ToolTile({ src, name, index }: { src: string; name: string; index: number }) {
  const [broken, setBroken] = useState(false)

  return (
    <div
      className="group relative flex aspect-[1.02/1] flex-col overflow-hidden rounded-[1.55rem] border border-white/12 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
      style={{ animationDelay: `${index * 70}ms` }}
      title={name}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(125,211,252,0.08),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[1.45rem] border border-white/6" />
      <div className="relative mx-3 mt-3 flex flex-1 items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,14,26,0.92),rgba(12,18,34,0.82))]">
        {broken ? (
          <div className="text-xs font-semibold tracking-[0.18em] text-white/65">{name.slice(0, 2).toUpperCase()}</div>
        ) : (
          <Image
            src={src}
            alt={name}
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 10vw"
            className="object-contain p-4"
            style={{
              mixBlendMode: "multiply",
              filter: "contrast(1.08) saturate(1.04) brightness(1.02)",
            }}
            onError={() => setBroken(true)}
          />
        )}
      </div>
      <div className="px-3 pb-3 pt-2 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">{name}</div>
      </div>
    </div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Science",
      skills: ["Predictive Modeling", "Time Series Forecasting", "Deep Learning", "Spark", "SQL / NoSQL", "Power BI", "A/B Testing", "Gen AI", "Statistics"],
    },
    {
      title: "Product Strategy",
      skills: ["User Research", "Market Analysis", "Roadmapping", "MVP Design", "Figma", "KPI Frameworks"],
    },
    {
      title: "Business & Consulting",
      skills: ["Stakeholder Communication", "Problem Structuring", "Business Modeling", "Industry Analysis", "Digital Transformation", "GTM Planning"],
    },
    {
      title: "Full-stack Prototyping",
      skills: ["Next.js / React", "Tailwind / Node.js", "Cloud Databases", "API Architecture", "Deployment"],
    },
  ]

  const tools: Tool[] = [
    { slug: "python", name: "Python", category: "Data", logo: "/tools/python.png" },
    { slug: "r", name: "R", category: "Data", logo: "/tools/r.png" },
    { slug: "sql-postgres", name: "PostgreSQL", category: "Database", logo: "/tools/postgres.png" },
    { slug: "mysql", name: "MySQL", category: "Database", logo: "/tools/mysql.png" },
    { slug: "supabase", name: "Supabase", category: "Database", logo: "/tools/supabase.png" },
    { slug: "tableau", name: "Tableau", category: "Analytics", logo: "/tools/tableau.png" },
    { slug: "powerbi", name: "Power BI", category: "Analytics", logo: "/tools/powerbi.png" },
    { slug: "excel", name: "Excel", category: "Analytics", logo: "/tools/excel.png" },
    { slug: "ppt", name: "PowerPoint", category: "Design", logo: "/tools/ppt.jpg" },
    { slug: "thinkcell", name: "think-cell", category: "Design", logo: "/tools/thinkcell.png" },
    { slug: "spark", name: "Spark", category: "Data", logo: "/tools/spark.png" },
    { slug: "airflow", name: "Airflow", category: "DevOps", logo: "/tools/airflow.png" },
    { slug: "databricks", name: "Databricks", category: "Cloud", logo: "/tools/databrick.png" },
    { slug: "gurobi", name: "Gurobi", category: "Data", logo: "/tools/gurobi.png" },
    { slug: "ga", name: "Google Analytics", category: "Analytics", logo: "/tools/google-analytics.png" },
    { slug: "figma", name: "Figma", category: "Design", logo: "/tools/figma.png" },
    { slug: "notion", name: "Notion", category: "Design", logo: "/tools/notion.png" },
    { slug: "axure", name: "Axure", category: "Design", logo: "/tools/axure.png" },
  ]

  const highlights = useMemo(() => portfolioHighlights, [])

  return (
    <section id="skills" className="relative z-10 min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">A multidisciplinary toolkit for innovation and growth.</p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
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
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,10,21,0.88),rgba(3,6,15,0.96))] shadow-[0_0_60px_rgba(59,130,246,0.10)] backdrop-blur-2xl">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.35fr]">
              <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.10),transparent_36%)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
                <div className="relative">
                  <div className="text-[11px] font-semibold tracking-[0.24em] text-white/58">FEATURED PROJECTS</div>
                  <div className="mt-2 text-2xl font-semibold text-gray-100">My best hits, rolling like a news ticker.</div>
                  <p className="mt-3 max-w-md text-sm leading-6 text-gray-300/80">
                    This rail reads directly from the shared highlight list, so you can reuse the same source across product, data, and business pages.
                  </p>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-3">
                  <div className="ticker-track gap-3">
                    {highlights.concat(highlights).map((item, idx) => (
                      <TickerItem
                        key={`${item.slug}-${idx}`}
                        title={item.title}
                        meta={`${item.badge} · ${item.date}`}
                        href={item.href}
                        active={idx % highlights.length === 0}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {highlights.slice(0, 3).map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">{item.section}</div>
                          <div className="mt-1 text-sm font-semibold text-gray-100">{item.title}</div>
                        </div>
                        <div className="text-xs text-white/45">{item.date}</div>
                      </div>
                      <div className="mt-2 text-sm text-gray-300/75">{item.summary}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-white/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden p-5 sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.10),transparent_32%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.08),transparent_30%)]" />
                <div className="relative flex items-end justify-between gap-4">
                  <div className="text-left">
                    <div className="text-[11px] font-semibold tracking-[0.24em] text-white/58">TOOLS BAY</div>
                    <div className="mt-2 text-2xl font-semibold text-gray-100">Transparent tools, no loud white blocks.</div>
                    <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/80">
                      I kept the panel quieter so the logos breathe on the dark glass instead of sitting on obvious white rectangles.
                    </div>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70 sm:inline-flex">
                    Loaded & ready
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {tools.map((tool, index) => (
                    <ToolTile key={tool.slug} src={tool.logo} name={tool.name} index={index} />
                  ))}
                </div>
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
