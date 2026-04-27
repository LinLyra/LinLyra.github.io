"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { portfolioHighlights } from "@/lib/portfolio-highlights"

type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
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
    <div className="space-y-2">
      <div className={`text-[11px] font-semibold tracking-[0.32em] ${accentClass}`}>{title}</div>
      <div className="overflow-hidden">
        <div className="ticker-track" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className="group mx-2 inline-flex min-w-[16rem] items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-left transition hover:border-white/18 hover:bg-white/[0.05]"
            >
              <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                item.section === "business"
                  ? "bg-emerald-300"
                  : item.section === "data"
                    ? "bg-sky-300"
                    : "bg-amber-300"
              }`} />
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
      className="flex flex-col items-center gap-2 text-center"
      style={{ animationDelay: `${index * 60}ms` }}
      title={name}
    >
      <div className="flex h-16 w-16 items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={72}
          height={72}
          className="h-14 w-14 object-contain transition duration-300 hover:scale-[1.03]"
          style={{
            mixBlendMode: "multiply",
            filter: "contrast(1.06) saturate(1.02) brightness(1.02) drop-shadow(0 0 10px rgba(148,163,184,0.08))",
          }}
        />
      </div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
        {name}
      </div>
    </div>
  )
}

function SkillsSection() {
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

  const businessItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "business"), [])
  const dataItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "data"), [])
  const productItems = useMemo(() => portfolioHighlights.filter((item) => item.section === "product"), [])

  return (
    <section id="skills" className="relative z-10 min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">Three orbits, one universe.</p>
          <p className="text-lg text-gray-300">Business, data, and product stories moving quietly across the page.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-6">
            <Rail title="BUSINESS ORBIT" accentClass="text-emerald-200" items={businessItems} speed="36s" />
            <Rail title="DATA ORBIT" accentClass="text-sky-200" items={dataItems} speed="40s" />
            <Rail title="PRODUCT ORBIT" accentClass="text-amber-200" items={productItems} speed="44s" />
          </div>

          <div>
            <div className="mb-5">
              <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">TOOLS BAY</div>
              <div className="mt-2 text-2xl font-semibold text-gray-100">Loose logos, dark space, no loud frames.</div>
              <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/80">
                The logos sit directly on the page so transparent assets breathe naturally. If a source file still carries a baked-in background, the card border is gone, but the image itself may still need cleanup.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
              {tools.map((tool, index) => (
                <ToolTile key={tool.slug} src={tool.logo} name={tool.name} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
