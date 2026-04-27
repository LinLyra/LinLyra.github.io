"use client"

import Image from "next/image"
import { useState } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"

type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
  logo: string
  accent: string
}

function LogoTile({ src, name, accent, index }: { src: string; name: string; accent: string; index: number }) {
  const [broken, setBroken] = useState(false)

  return (
    <div
      className="group relative flex aspect-[0.98/1] flex-col overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(10,18,32,0.94),rgba(7,12,24,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_40px_rgba(3,8,20,0.32)] transition duration-500 hover:-translate-y-1 hover:border-white/20"
      style={{ animationDelay: `${index * 80}ms` }}
      title={name}
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-0 h-10 rounded-b-full bg-white/10 blur-xl" />
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: accent }} />
      <div className="pointer-events-none absolute inset-[1px] rounded-[1.6rem] border border-white/8" />
      <div className="pointer-events-none absolute inset-x-4 top-4 h-2 rounded-full bg-white/12" />
      <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 rounded-full border border-white/12 bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.10)]" />
      <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 rounded-full border border-white/12 bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.10)]" />

      <div className="relative mx-3 mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,rgba(165,243,252,0.16),rgba(15,23,42,0.05)_45%,rgba(15,23,42,0.38)_100%)] px-3 py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_-18px_34px_rgba(8,15,28,0.72)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.00)_56%)] opacity-70" />
        <div className="pointer-events-none absolute -left-5 top-4 h-20 w-8 rotate-[18deg] bg-white/12 blur-md" />
        {broken ? (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold tracking-[0.18em] text-white/72">
            {name.slice(0, 2).toUpperCase()}
          </div>
        ) : (
          <Image
            src={src}
            alt={name}
            fill
            sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 11vw"
            className="object-contain p-4 [image-rendering:auto]"
            style={{
              mixBlendMode: "multiply",
              filter: "contrast(1.08) saturate(1.08) brightness(1.02) drop-shadow(0 0 16px rgba(148,163,184,0.18))",
            }}
            onError={() => setBroken(true)}
          />
        )}
      </div>

      <div className="relative px-4 pb-4 pt-3 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">{name}</div>
      </div>
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
    { slug: "python", name: "Python", category: "Data", logo: "/tools/python.png", accent: "radial-gradient(circle at 50% 28%, rgba(59,130,246,0.18), transparent 58%)" },
    { slug: "r", name: "R", category: "Data", logo: "/tools/r.png", accent: "radial-gradient(circle at 50% 28%, rgba(125,211,252,0.16), transparent 58%)" },
    { slug: "sql-postgres", name: "PostgreSQL", category: "Database", logo: "/tools/postgres.png", accent: "radial-gradient(circle at 50% 28%, rgba(96,165,250,0.17), transparent 58%)" },
    { slug: "mysql", name: "MySQL", category: "Database", logo: "/tools/mysql.png", accent: "radial-gradient(circle at 50% 28%, rgba(34,197,94,0.14), transparent 58%)" },
    { slug: "supabase", name: "Supabase", category: "Database", logo: "/tools/supabase.png", accent: "radial-gradient(circle at 50% 28%, rgba(74,222,128,0.16), transparent 58%)" },
    { slug: "tableau", name: "Tableau", category: "Analytics", logo: "/tools/tableau.png", accent: "radial-gradient(circle at 50% 28%, rgba(251,146,60,0.16), transparent 58%)" },
    { slug: "powerbi", name: "Power BI", category: "Analytics", logo: "/tools/powerbi.png", accent: "radial-gradient(circle at 50% 28%, rgba(250,204,21,0.16), transparent 58%)" },
    { slug: "excel", name: "Excel", category: "Analytics", logo: "/tools/excel.png", accent: "radial-gradient(circle at 50% 28%, rgba(74,222,128,0.14), transparent 58%)" },
    { slug: "ppt", name: "PowerPoint", category: "Design", logo: "/tools/ppt.jpg", accent: "radial-gradient(circle at 50% 28%, rgba(251,146,60,0.16), transparent 58%)" },
    { slug: "thinkcell", name: "think-cell", category: "Design", logo: "/tools/thinkcell.png", accent: "radial-gradient(circle at 50% 28%, rgba(244,114,182,0.15), transparent 58%)" },
    { slug: "spark", name: "Spark", category: "Data", logo: "/tools/spark.png", accent: "radial-gradient(circle at 50% 28%, rgba(251,191,36,0.16), transparent 58%)" },
    { slug: "airflow", name: "Airflow", category: "DevOps", logo: "/tools/airflow.png", accent: "radial-gradient(circle at 50% 28%, rgba(103,232,249,0.15), transparent 58%)" },
    { slug: "databricks", name: "Databricks", category: "Cloud", logo: "/tools/databrick.png", accent: "radial-gradient(circle at 50% 28%, rgba(248,113,113,0.16), transparent 58%)" },
    { slug: "gurobi", name: "Gurobi", category: "Data", logo: "/tools/gurobi.png", accent: "radial-gradient(circle at 50% 28%, rgba(248,113,113,0.14), transparent 58%)" },
    { slug: "ga", name: "Google Analytics", category: "Analytics", logo: "/tools/google-analytics.png", accent: "radial-gradient(circle at 50% 28%, rgba(249,115,22,0.16), transparent 58%)" },
    { slug: "figma", name: "Figma", category: "Design", logo: "/tools/figma.png", accent: "radial-gradient(circle at 50% 28%, rgba(217,70,239,0.14), transparent 58%)" },
    { slug: "notion", name: "Notion", category: "Design", logo: "/tools/notion.png", accent: "radial-gradient(circle at 50% 28%, rgba(226,232,240,0.12), transparent 58%)" },
    { slug: "axure", name: "Axure", category: "Design", logo: "/tools/axure.png", accent: "radial-gradient(circle at 50% 28%, rgba(129,140,248,0.15), transparent 58%)" },
  ]

  return (
    <section id="skills" className="relative z-10 min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-12">
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
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,22,0.90),rgba(3,6,18,0.94))] p-5 shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-2xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(236,72,153,0.10),transparent_26%),radial-gradient(circle_at_50%_72%,rgba(168,85,247,0.12),transparent_26%)]" />
            <div className="pointer-events-none absolute inset-[10px] rounded-[1.65rem] border border-white/8" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.00))]" />
            <div className="pointer-events-none absolute inset-x-0 top-[72px] h-px bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.45),transparent)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
            <div className="pointer-events-none absolute left-[-6%] top-[56%] h-48 w-48 rounded-full bg-cyan-400/8 blur-3xl sm:h-72 sm:w-72" />
            <div className="pointer-events-none absolute right-[-6%] top-[42%] h-48 w-48 rounded-full bg-fuchsia-400/8 blur-3xl sm:h-72 sm:w-72" />

            <div className="pointer-events-none absolute left-1/2 top-5 z-10 hidden h-6 w-[min(78%,34rem)] -translate-x-1/2 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(39,52,77,0.94),rgba(13,19,33,0.95))] shadow-[0_0_18px_rgba(125,211,252,0.10)] md:block" />
            <div className="pointer-events-none absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 md:block equipment-claw-sway">
              <div className="mx-auto h-12 w-3 rounded-full bg-[linear-gradient(180deg,rgba(226,232,240,0.92),rgba(71,85,105,0.88))] shadow-[0_0_18px_rgba(148,163,184,0.22)]" />
              <div className="relative -mt-1 h-8 w-20 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(22,30,48,0.98),rgba(8,12,24,0.96))] shadow-[0_0_20px_rgba(59,130,246,0.14)]">
                <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.88)]" />
                <div className="absolute left-[22px] top-5 h-10 w-[2px] origin-top rotate-[28deg] rounded-full bg-slate-300/88" />
                <div className="absolute right-[22px] top-5 h-10 w-[2px] origin-top -rotate-[28deg] rounded-full bg-slate-300/88" />
                <div className="absolute left-[20px] top-[42px] h-5 w-[2px] origin-top rotate-[40deg] rounded-full bg-slate-400/80" />
                <div className="absolute right-[20px] top-[42px] h-5 w-[2px] origin-top -rotate-[40deg] rounded-full bg-slate-400/80" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-[8%] top-[6.8rem] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.28),transparent)] md:block equipment-bay-sweep" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="text-left">
                <div className="text-[11px] font-semibold tracking-[0.24em] text-white/58">EQUIPMENT BAY</div>
                <div className="mt-1 text-2xl font-semibold text-gray-100 md:text-3xl">Tools I ship with</div>
                <div className="mt-1 max-w-2xl text-sm text-gray-300/80 sm:text-base">
                  A capsule-style crane bay: the arm hovers above, the glass glows softly, and each tool sits like a collectible module ready for launch.
                </div>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-black/24 px-3 py-2 text-xs text-white/70 sm:self-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.95)]" />
                Loaded & ready
              </div>
            </div>

            <div className="relative mt-7 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,19,34,0.78),rgba(5,9,19,0.90))] px-3 pb-4 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-60px_120px_rgba(168,85,247,0.08)] sm:px-4 sm:pb-5 sm:pt-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),rgba(255,255,255,0.00)_36%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.00)_28%,rgba(255,255,255,0.02)_65%,rgba(255,255,255,0.00)_100%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(270deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(244,114,182,0.16),transparent_60%)] opacity-80 blur-2xl" />

              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {tools.map((tool, index) => (
                  <LogoTile key={tool.slug} src={tool.logo} name={tool.name} accent={tool.accent} index={index} />
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
