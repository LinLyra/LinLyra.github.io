"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, X } from "lucide-react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { PageCornerLottie } from "@/components/page-corner-lottie"

type Status = "completed" | "in-progress" | "planned"
type LearnType = "degree" | "course" | "online-course"

type LearningItem = {
  slug: string
  title: string
  institution: string
  date: string
  type: LearnType
  logo: string
  tags?: string[]
  status: Status
  level?: "undergrad" | "postgrad"
  audited?: boolean
  certUrl?: string
}

export default function LearningPage() {
  const [q, setQ] = useState("")

 
  const items: LearningItem[] = [
    { slug:"comp2123", title:"COMP2123: Data Structures & Algorithms", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Algorithm","Sorting","Graph","Tree","Complexity","Data Structures","DP"], status:"completed", level:"undergrad" },
    { slug:"comp3308", title:"COMP3308: Introduction to Artificial Intelligence", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Search","ML","Game AI","Planning","Reasoning","Python","Heuristics"], status:"completed", level:"undergrad" },
    { slug:"stat2011", title:"STAT2011: Probability and Estimation Theory", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Probability","Estimation","Asymptotics","MLE","Confidence Intervals","Hypothesis Tests","CLT"], status:"completed", level:"undergrad" },
    { slug:"qbus1040", title:"QBUS1040: Foundations of Business Analytics", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Linear Algebra","Regression","Optimisation","Python","EDA","Business KPIs","Forecasting"], status:"completed", level:"undergrad" },
    { slug:"data2901", title:"DATA2901: Big Data and Data Diversity (Advanced)", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","SQL","Hadoop","Linux","Jupyter", "Big Data"], status:"completed", level:"undergrad" },
    { slug:"data1002", title:"DATA1002: Informatics: Data and Computation", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","Pipelines","ML Basics","Visualization","Data Wrangling","Git","APIs"], status:"completed", level:"undergrad" },
    { slug:"data1001", title:"DATA1001: Foundations of Data Science", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistics","Hypothesis Testing","Visualization","Tidyverse","EDA","Reporting"], status:"completed", level:"undergrad" },
    { slug:"math1061", title:"MATH1061: Mathematics 1A", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Calculus","Linear Algebra","Proof","Derivatives","Integrals","Vectors","Series"], status:"completed", level:"undergrad" },
    { slug:"math1062", title:"MATH1062: Mathematics 1B", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Multivariable","Differential Eqns","R","Gradients","Optimization","Linear Systems","Taylor"], status:"completed", level:"undergrad" },
    { slug:"info1110", title:"INFO1110: Introduction to Programming", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","OOP","Shell Scripting","Testing","Debugging","Data Structures","CLI"], status:"completed", level:"undergrad" },
    { slug:"qbus2820", title:"QBUS2820: Predictive Analytics", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Forecasting","Time Series","Python","Classification","Model Evaluation","Feature Engineering","CV"], status:"completed", level:"undergrad", audited:true },
    { slug:"sjtu-ma413", title:"MA413 / STAT3925: Time Series (Advanced)", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["ARIMA","Stationarity","Forecasting","R","Python","ACF/PACF","Model Diagnostics"], status:"completed", level:"undergrad" },
    { slug:"sjtu-ma4704", title:"MA4704 / STAT3023: Stochastic Process", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["Poisson","CTMC/DTMC","Queueing","Markov Chains","Martingales","Birth–Death","Simulation"], status:"completed", level:"undergrad" },
    { slug:"google-advanced-data-analytics", title:"Google Advanced Data Analytics Professional Certificate", institution:"Google x Coursera", date:"2024", type:"online-course", logo:"/learning/googlelogo.png", tags:["Python","Regression","Visualization","EDA","Statistics","Dashboards","Storytelling"], status:"completed" },
    { slug:"genai-intensive-2025q1", title:"Gen AI Intensive Course 2025Q1", institution:"Google × Kaggle", date:"2025", type:"online-course", logo:"/learning/googlelogo.png", tags:["Prompting","Embeddings/RAG","Agents","MLOps","LLMs","Evaluation","Deployment"], status:"completed" },
    { slug:"google-genai-skill-badges-2025", title:"Google GenAI Program — Skill Badges", institution:"Google", date:"2025.10 — 2025.12", type:"online-course", logo:"/learning/googlelogo.png", tags:["GenAI","Vertex AI","GKE","Data Engineering","LLMs","MLOps"], status:"completed" },
    { slug:"oracle-cloud-data-science-professional-2025", title:"Oracle Cloud Infrastructure 2025 Certified Data Science Professional", institution:"Oracle", date:"2025.10", type:"online-course", logo:"/learning/oraclelogo.png", tags:["Oracle Cloud","Data Science","Machine Learning","MLOps","Deployment","Monitoring","Model Registry"], status:"completed" },


    { slug:"qbus2810", title:"QBUS2810: Statistical Modelling for Business", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Statistical Modeling","Forecasting","Python","GLM","Model Selection","Diagnostics","Business Data"], status:"in-progress", level:"undergrad" },
    { slug:"data2902", title:"DATA2902: Data Analytics (Advanced)", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistical ML","Quarto","RMarkdown","Feature Engineering","Model Evaluation","Reproducibility"], status:"in-progress", level:"undergrad" },
    { slug:"qbus2310", title:"QBUS2310: Management Science", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["LP/IP/NLP","Optimisation","Excel Solver","Python","Sensitivity","Constraints","Decision Support"], status:"in-progress", level:"undergrad" },
    { slug:"qbus3330", title:"QBUS3330: Methods of Decision Analysis", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Decision Trees","Sensitivity","Risk Assessment","Expected Utility","Value of Info","Uncertainty","Managerial Decisions"], status:"in-progress", level:"undergrad" },
    { slug:"qbus3310", title:"QBUS3310: Advanced Management Science", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Optimisation","Management Science","Decision Analysis","Stochastic Models","Simulation","Integer Programming","Applications"], status:"planned", level:"undergrad" },
    { slug:"data3404", title:"DATA3404: Scalable Data Management", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Big Data","Database Systems","Distributed Data","Query Optimisation","Indexing","Spark","Performance"], status:"in-progress", level:"undergrad" },
    { slug:"data3888", title:"DATA3888: Data Science Capstone", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Data Science","Capstone","Public Data Product","Teamwork","Communication","Stakeholders","Delivery"], status:"in-progress", level:"undergrad" },
    { slug:"isys2120", title: "ISYS2120: Data and Information Management", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Database Design","SQL","Normalization","Transaction Mgmt","OLAP","Indexing","ER Modeling"], status: "in-progress",level: "undergrad", audited:true },
    { slug:"comp5338", title:"COMP5338: Advanced Data Models", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["SQL","MongoDB","Neo4j","Distributed Systems","Query Tuning","Indexing","Data Modeling"], status:"in-progress", level:"postgrad", audited:true },
    { slug:"comp5318", title:"COMP5318: Machine Learning and Data Mining", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Data Mining","Python","Clustering","Classification","Feature Eng","Evaluation"], status:"in-progress", level:"postgrad", audited:true },
    { slug:"comp5328", title:"COMP5328: Advanced Machine Learning", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Model Evaluation","PyTorch","TensorFlow","Regularization","Generalization","Optimization"], status:"in-progress", level:"postgrad", audited:true },
  ]


  const filtered = items.filter((it) => {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [it.title, it.institution, ...(it.tags ?? [])].join(" ").toLowerCase()
    const hit = tokens.length === 0 || tokens.every(t => hay.includes(t))
    return hit
  })


  const tagSuggestions = useMemo(
    () => ["Python", "SQL", "GenAI", "MLOps", "Cloud", "Databases", "Time Series", "Optimisation"],
    []
  )

  const toggleToken = (token: string) => {
    const cur = q.split(/\s+/).filter(Boolean)
    const next = cur.includes(token) ? cur.filter(t => t !== token) : [...cur, token]
    setQ(next.join(" "))
  }
  const hasToken = (token: string) => q.split(/\s+/).filter(Boolean).includes(token)

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "168 85 247",
          ["--pgc-glow-b" as any]: "217 70 239",
        } as React.CSSProperties
      }
    >
      <Navigation activeSection="learning" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 backdrop-blur-md border-purple-400/30 text-white hover:bg-purple-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Learning</h1>
            <p className="text-gray-300">Expanding my universe through learning.</p>
          </div>

          <PageCornerLottie
            side="left"
            src="/animations/space-boy-developer.lottie"
            alt="Space boy developer animation"
          />

          <div className="space-y-4">
            <div className="relative mx-auto max-w-xl">
              <Input
                placeholder="Search by code / title / institution / tag…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-purple-400/30 text-gray-100 placeholder:text-gray-400 pr-10 text-sm md:text-base"
              />
              {q && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 text-gray-300"
                  onClick={() => setQ("")}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {tagSuggestions.map((t) => {
                const active = hasToken(t)
                return (
                  <span
                    key={t}
                    onClick={() => toggleToken(t)}
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
                      (active
                        ? "bg-purple-500/30 border-purple-400/40 text-purple-100"
                        : "bg-fuchsia-500/10 border-fuchsia-400/30 text-fuchsia-200 hover:bg-fuchsia-500/20")
                    }
                  >
                    {t}
                  </span>
                )
              })}
            </div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => {
              const statusClass =
                it.status === "completed"
                  ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
                  : it.status === "planned"
                    ? "bg-white/5 text-gray-200 border-white/10"
                    : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

              return (
                <Link key={it.slug} href={`/learning/${it.slug}`} className="block">
                  <PremiumGlassCard
                    tiltMaxDeg={5}
                    className="relative h-full min-h-[260px] bg-black/25 backdrop-blur-xl border border-purple-400/20 hover:bg-black/30 transition-all overflow-hidden shadow-[0_0_26px_rgba(168,85,247,0.10)] hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(217,70,239,0.14)]"
                  >
                    {/* 右上角状态角标（在卡片内部） */}
                    <div className="absolute right-3 top-2 z-20">
                      <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm whitespace-nowrap ${statusClass}`}>
                        {it.status === "completed"
                          ? "Completed"
                          : it.status === "planned"
                            ? "Planned"
                            : "In Progress"}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 p-5 pt-10">
                      <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                        <Image
                          src={it.logo}
                          alt={`${it.title} logo`}
                          fill
                          sizes="48px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-base font-semibold leading-snug line-clamp-2">
                          {it.title}
                        </div>
                        <div className="mt-1 text-gray-400 text-sm inline-flex items-center gap-2">
                          <span>{it.institution}</span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {it.date}
                          </span>
                        </div>
                      </div>
                    </div>

  
                    <div className="px-5 pb-5 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {(it.tags ?? []).slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-purple-500/20 text-purple-100 border border-purple-500/30 whitespace-nowrap"
                          >
                            {t}
                          </span>
                        ))}
                        {(it.level === "postgrad" || it.audited) && (
                          <div className="ml-auto flex gap-2">
                            {it.level === "postgrad" && (
                              <span className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-white/5 text-gray-200 border border-white/10 whitespace-nowrap">
                                Postgraduate
                              </span>
                            )}
                            {it.audited && (
                              <span className="inline-flex items-center h-7 rounded-full px-2.5 text-xs bg-white/5 text-gray-200 border border-white/10 whitespace-nowrap">
                                Audited
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </PremiumGlassCard>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
