"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  // —— 定位清晰的技能分组（Data 为核心，放大显示） ——
  const skillCategories = [
    {
      title: "Data Science",
      core: true,
      span2: true, // 放大显示
      skills: [
        "Predictive Modeling",
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

  // —— 更真实可信的数字（突出 1 年高增长） ——
  const stats = [
    { number: "1 Year", label: "Since Starting in Data (2024.08 → 2025.08)" },
    { number: "20+", label: "Projects / Competitions Completed" },
    { number: "Data ⇄ Biz", label: "Bridge from Insight to Product" },
  ]

  // —— 成长轨迹（潜力的证据） ——
  const trajectory = [
    { time: "2024.08", title: "First Step", note: "Started data journey — Python, stats, first datasets & notebooks." },
    { time: "2025.03", title: "Acceleration", note: "Case comps & internships; mixing analytics with product/strategy." },
    { time: "2025.08", title: "Integration", note: "Client interviews → pipelines → GenAI & prototypes (end-to-end)." },
  ]

  // —— 下一步（潜力的方向） ——
  const nextFocus = [
    "Ship 3 data-to-product case studies（带代码与在线 Demo）",
    "发布 2 篇高质量文章：Time Series & Protection-gap Analytics",
    "完成 Kaggle NCAA + 外卖数据的因果/聚类分析项目",
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* 标题 & 定位 */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Skills & Potential</h2>
          <p className="text-xl text-gray-200 mb-2">
            Bridging <span className="text-blue-300 font-semibold">Data Science</span> and{" "}
            <span className="text-blue-300 font-semibold">Business Strategy</span> — from analysis to real-world impact.
          </p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${
                category.span2 ? "lg:col-span-2" : ""
              }`}
            >
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-gray-100 text-xl">{category.title}</CardTitle>
                {"core" in category && (category as any).core && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 border border-blue-500/30 text-blue-200">
                    Core Focus
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
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

        {/* Stats（量化潜力） */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center max-w-[260px]">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trajectory（成长曲线） */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Trajectory</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {trajectory.map((t, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-blue-200 text-sm mb-1">{t.time}</div>
                <div className="text-gray-100 font-medium">{t.title}</div>
                <div className="text-gray-300 text-sm mt-1">{t.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Focus（下一步要做什么） */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Next Focus</h3>
          <ul className="max-w-3xl mx-auto text-left list-disc list-inside text-gray-200/95">
            {nextFocus.map((n, i) => (
              <li key={i} className="mb-2">{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

