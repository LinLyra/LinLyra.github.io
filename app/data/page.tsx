"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Github,
  Globe,
  Rocket,
  Trophy,
  Award as AwardIcon,
} from "lucide-react";

type DataType = "competition" | "course" | "project";

type DataItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
  status: "Completed" | "In Progress" | "Planned";
  type: DataType;
  award?: string;
  logo?: string;
  links?: { github?: string; demo?: string };
};

export default function DataPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const featuredTags = [
    "Python",
    "SQL",
    "Time Series",
    "Machine Learning",
    "Visualization",
  ];

  const items: DataItem[] = [
    {
      slug: "datathon-2025-supply-chain",
      title: "SUDATA x SUBAA Datathon 2025",
      date: "2025.10",
      description: "24h Datathon organized by SUDATA and SUBAA Uni Society",
      skills: [
        "Supply Chain",
        "Optimisation",
        "Gurobi MIP",
        "KMeans",
        "Time Series",
      ],
      status: "Completed",
      type: "competition",
      award: "First Place",
      logo: "/competition/sudatalogo.jpg",
    },
    {
      slug: "taylor-swift-engagement-analysis",
      title:
        "Taylor Swift Engagement Analysis: Online Sentiment & Herding Dynamics",
      date: "2025.08",
      description:
        "Analyzed 5,700+ YouTube comments on Taylor Swift’s engagement using Gemini LLM with ELM theory. Explored sentiment evolution, persuasion pathways, and herding effects in digital discourse.",
      skills: [
        "Python",
        "YouTube API",
        "Gemini API",
        "ELM Theory",
        "Sentiment Analysis",
      ],
      status: "Completed",
      type: "project",
    },
    {
      slug: "ai-wave-nvda-forecast",
      title: "Rising the AI Wave: Forecasting the NVIDIA Stock",
      date: "2025.07",
      description:
        "Univariate & multivariate forecasting (ARIMA+ feature signals) to explore AI-cycle dynamics on NVDA price.",
      skills: ["Python", "Time Series", "ARIMA", "Semiconductor Industry"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "youtube-ai-content-strategy",
      title: "YouTube AI Content Strategy Optimization",
      date: "2025.10",
      description:
        "Built a data-driven posting strategy for AI creators by modeling 3,143 videos across 80+ channels. Identified optimal time-slot × channel-scale combinations and estimated ~10% overall view lift by shifting posting windows.",
      skills: ["Python", "SQL", "KMeans", "Clustering", "OLS", "Causal Thinking"],
      status: "Completed",
      type: "project",
    },
    {
      slug: "education-experience-earnings-model",
      title: "Education vs Experience: Earnings Model Comparison",
      date: "2025 S2",
      description:
        "Compared multiple regression specifications and nonlinear forecasting models to evaluate the relative impact of education and work experience on earnings. Tested extended models to reduce omitted-variable bias.",
      skills: ["Regression", "Forecasting", "Econometrics", "Model Evaluation"],
      status: "Completed",
      type: "course",
    },
    
    {
      slug: "wine-quality-analysis",
      title: "Wine Quality Analysis: Key Drivers of Perceived Quality (Red vs White)",
      date: "2025 S2",
      description:
        "Analyzed UCI Vino Verde wine data (white + red) to identify key physicochemical drivers of sensory quality. Performed assumption checks, log transforms, model selection (stepwise/exhaustive), and stability validation (VIP + Adaptive Fence).",
      skills: ["R", "Regression", "Model Selection", "AIC/BIC", "Bootstrap", "VIP"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "disaster-risk-insurance",
      title: "Disaster Risk Insurance: Insights and Recommendations",
      date: "2024 S2",
      description:
        "Quantifies hazard exposure and proposes parametric insurance levers; combines hazard indices with socio-economic layers.",
      skills: ["Risk Modeling", "R", "Data Visualization", "Policy Analysis"],
      status: "Completed",
      type: "course",
      award: "Excellence Award",
    },
    {
      slug: "data1x01-study",
      title: "The Study Behaviours and Expectations of DATA1X01 Students",
      date: "2024 S2",
      description:
        "Student survey analysis on learning behaviours and expectations; cleaning, Likert scaling and reporting.",
      skills: ["Survey", "Cleaning", "R Visualization", "Reporting"],
      status: "Completed",
      type: "course",
      award: "Excellence Award",
    },
    {
      slug: "employer-income-correlation-au",
      title: "Employer–Income Correlation Analysis in Australia",
      date: "2024 S2",
      description:
        "Exploratory analysis on employer types and income distributions across Australian regions.",
      skills: [
        "EDA",
        "Gradient Boosting",
        "Random Forest",
        "KNN",
        "Naive Bayes",
        "Regression",
      ],
      status: "Completed",
      type: "course",
    },
    {
      slug: "greater-sydney-sa2-scoring",
      title: "Greater Sydney SA2 Resources Scoring Report",
      date: "2025 S1",
      description:
        "Constructs a composite index to score SA2 areas by resource accessibility; normalization, weighting, and ranking.",
      skills: ["PostgreSQL", "Index Scoring", "Database", "ER", "Machine Learning"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "pima-diabetes",
      title:
        "Comparative Analysis of Classifier Accuracy and Runtime on Pima Indians Diabetes",
      date: "2025 S1",
      description:
        "Comparative Analysis of Classifier Accuracy and Runtime on Pima Indians Diabetes and Room Occupancy Datasets",
      skills: [
        "ZeroR",
        "1R",
        "Decision Trees",
        "Multi-Layer Perceptrons",
        "Support Vector Machines",
        "Random Forests",
      ],
      status: "Completed",
      type: "course",
    },

    {
      slug: "apmcm-2024",
      title: "APMCM (Asia-Pacific Mathematical Contest in Modeling) 2024",
      date: "2024.11",
      description: "Asia-Pacific mathematical modeling contest.",
      skills: ["Modeling", "Optimization"],
      status: "Completed",
      type: "competition",
      logo: "/competition/apmcmlogo.png",
    },
    {
      slug: "mcm-icm-2025",
      title: "MCM/ICM Mathematical Contest in Modeling 2025",
      date: "2025.02",
      description: "International mathematical modeling competition.",
      skills: ["Modeling", "Statistics"],
      status: "Completed",
      type: "competition",
      logo: "/competition/COMAPlogo.svg",
    },
    {
      slug: "food-delivery-insights",
      title: "Food Delivery Market Insights",
      date: "2025.08",
      description:
        "Analyze order-level dataset; cluster consumer segments, model delivery-time drivers, and estimate promo impact with causal inference.",
      skills: [
        "Python",
        "Pandas",
        "Data Visualization",
        "Clustering",
        "Causal Inference",
      ],
      status: "In Progress",
      type: "project",
    },
    {
      slug: "tableau-next-hackathon",
      title: "Tableau Next Hackathon",
      date: "2025.08",
      description:
        "Explore short-video engagement; prototype an agentic analytics dashboard (Tableau + LLM/agents) for retention and recommendations.",
      skills: ["Tableau", "SQL", "Machine Learning", "Agentic Analytics"],
      status: "In Progress",
      type: "project",
    },
    {
      slug: "kaggle-ncaa-basketball",
      title: "NCAA Basketball Analytics (Kaggle)",
      date: "2025.09",
      description:
        "Feature engineering from play-by-play and seed history; Elo/efficiency ratings; logistic/XGBoost ensemble for upset prediction.",
      skills: ["Python", "Pandas", "Machine Learning"],
      status: "Planned",
      type: "project",
    },
  ];

  const filtered = items.filter((p) => {
    const q = search.trim().toLowerCase();

    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.skills.some((s) => s.toLowerCase().includes(q));

    const matchTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        p.skills.some((s) => s.toLowerCase() === tag.toLowerCase())
      );

    return matchSearch && matchTags;
  });

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-gray-100 backdrop-blur-md hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-4 text-4xl font-bold text-gray-100">Data</h1>
            <p className="text-gray-200">
              Using data to understand the world, uncover patterns, and drive insights.
            </p>
          </div>

          <div className="mb-8">
            <Input
              placeholder="Search datasets, topics, or skills…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mx-auto max-w-md border-blue-400/30 bg-black/30 text-gray-100 placeholder:text-gray-400 backdrop-blur-md"
            />

            {/* 关键词 Tag 快捷筛选 */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {featuredTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      )
                    }
                    className={`rounded-full border px-3 py-1 text-xs backdrop-blur-md transition-all ${
                      active
                        ? "border-blue-300/60 bg-blue-500/30 text-blue-100 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                        : "border-blue-400/30 bg-black/25 text-gray-200 hover:bg-black/35"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}

              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="rounded-full border border-gray-400/30 bg-black/20 px-3 py-1 text-xs text-gray-200 hover:bg-black/35"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* 等高网格 */}
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link key={project.slug} href={`/data/${project.slug}`} className="block">
                <Card className="relative flex h-full flex-col cursor-pointer border-blue-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40">
                  {project.award && (
                    <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-amber-400/30 bg-amber-500/20 px-2 py-1 text-xs font-semibold text-amber-200 shadow-sm backdrop-blur-sm">
                      <AwardIcon className="h-3 w-3 text-amber-300" />
                      {project.award}
                    </span>
                  )}

                  <CardHeader className={`pb-2 ${project.award ? "pt-8 pr-24" : ""}`}>
                    <div className="flex items-start gap-3">
                      {project.type === "competition" && project.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-white/5">
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="max-h-[2.5rem] max-w-[2.5rem] object-contain"
                          />
                        </div>
                      )}

                      <div className="min-w-0">
                        <CardTitle
                          className="mb-1 min-h-[3.25rem] text-lg leading-snug text-gray-100 line-clamp-2"
                          style={{ textWrap: "balance" }}
                        >
                          {project.title}
                        </CardTitle>

                        <div className="mt-1 flex items-center gap-2 whitespace-nowrap text-sm text-gray-400">
                          {project.type === "competition" ? (
                            <Trophy className="h-4 w-4" />
                          ) : (
                            <Rocket className="h-4 w-4" />
                          )}
                          <span className="truncate">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <p className="mb-4 line-clamp-3 text-sm text-gray-200">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          className="text-xs text-blue-200 border-blue-500/30 bg-blue-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge className="text-xs text-gray-300 border-gray-500/30 bg-gray-500/20">
                          +{project.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <Badge
                        className={
                          project.status === "Completed"
                            ? "border-green-500/30 bg-green-500/20 text-green-200"
                            : project.status === "In Progress"
                            ? "border-amber-500/30 bg-amber-500/20 text-amber-200"
                            : "border-blue-500/30 bg-blue-500/20 text-blue-200"
                        }
                      >
                        {project.status}
                      </Badge>

                      <div className="flex gap-2">
                        {!!project.links?.github && (
                          <Github className="h-4 w-4 text-gray-400" />
                        )}
                        {!!project.links?.demo && (
                          <Globe className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-400">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
