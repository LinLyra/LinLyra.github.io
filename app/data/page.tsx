"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PremiumGlassCard } from "@/components/premium-glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Award as AwardIcon,
} from "lucide-react";

type DataType = "competition" | "course" | "project";

type DataItem = {
  slug: string;
  projectName: string;
  subtitle: string;
  date: string;
  description: string;
  skills: string[];
  industries: string[];
  status: "Completed" | "In Progress" | "Planned";
  type: DataType;
  award?: string;
  logo?: string;
  links?: { github?: string; demo?: string };
};

function mergeCardKeywords(
  industries: string[],
  skills: string[],
  max = 6
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of [...industries, ...skills]) {
    const x = raw.trim();
    if (!x || seen.has(x)) continue;
    seen.add(x);
    out.push(x);
    if (out.length >= max) break;
  }
  return out;
}

export default function DataPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  /** Pills above search: keep it small and industry-first */
  const featuredTags = [
    "Finance",
    "E-commerce",
    "Healthcare",
    "Entertainment",
    "Public Policy",
    "Machine Learning",
  ];

  const items: DataItem[] = [
    {
      slug: "datathon-2025-supply-chain",
      projectName: "Supply Chain Optimization (24h)",
      subtitle: "SUDATA × SUBAA Datathon",
      date: "2025.10",
      description:
        "24-hour optimization sprint on a supply-chain case blending MIP, clustering, and time-series signals.",
      skills: ["Supply Chain", "Optimisation", "Gurobi MIP", "KMeans", "Time Series"],
      industries: ["Supply Chain", "Operations", "E-commerce"],
      status: "Completed",
      type: "competition",
      award: "First Place",
      logo: "/competition/sudatalogo.jpg",
    },
    {
      slug: "meituan-subsidy-efficiency",
      projectName: "Subsidy Incrementality (PSM)",
      subtitle: "Meituan Business Analytics Challenge",
      date: "2026.04",
      description:
        "Causal inference on subsidy batches to estimate true incremental GMV and reallocate budget to higher-ROI segments.",
      skills: ["Causal Inference", "PSM", "ROI", "Segmentation", "Business Analytics"],
      industries: ["E-commerce", "Local Services", "Finance"],
      status: "Completed",
      type: "competition",
      logo: "/competition/meituanlogo.png",
    },
    {
      slug: "pathology-image-classification",
      projectName: "H&E Tumour vs Immune Cells",
      subtitle: "Course · Medical imaging",
      date: "2026 S1",
      description:
        "CV pipeline from HOG/KNN baselines toward CNN/ResNet-style models with explainability hooks.",
      skills: ["Computer Vision", "CNN", "ResNet", "HOG", "KNN", "SVM", "Python"],
      industries: ["Healthcare", "Medical Imaging", "Machine Learning"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "future-financial-analyst",
      projectName: "Growth-Based Repricing Framework",
      subtitle: "CFA Institute Research Challenge",
      date: "2026.03",
      description:
        "Empirical valuation lens linking innovation-heavy productive forces to market repricing with panel-style evidence.",
      skills: ["Finance", "Valuation", "Panel Data", "Empirical Research"],
      industries: ["Finance", "Asset Management", "Public Policy"],
      status: "Completed",
      type: "competition",
      logo: "/competition/CFAlogo.png",
    },
    {
      slug: "youtube-ai-content-strategy",
      projectName: "Posting Window Lift Model",
      subtitle: "Creator growth analytics",
      date: "2025.10",
      description:
        "Clustered thousands of AI-creator uploads to find better time-slot × scale combinations and quantify view lift.",
      skills: ["Python", "SQL", "KMeans", "OLS", "Causal Thinking"],
      industries: ["Entertainment", "Creator Economy", "Marketing"],
      status: "Completed",
      type: "project",
    },
    {
      slug: "short-drama-text-analysis",
      projectName: "Human–AI Dialogue Mining",
      subtitle: "Short drama training corpus",
      date: "2025.09",
      description:
        "JSON→tabular pipeline with dialogue metrics for rhythm, diversity, and engagement in role-play training data.",
      skills: ["Python", "NLP", "JSON", "Feature Engineering", "Text Mining"],
      industries: ["Beauty", "Consumer Services", "AI Training"],
      status: "Completed",
      type: "project",
    },
    {
      slug: "ai-wave-nvda-forecast",
      projectName: "NVDA Cycle Forecast",
      subtitle: "Course · Time series",
      date: "2025.07",
      description:
        "Univariate and multivariate forecasting experiments to relate AI-cycle narratives to NVDA price dynamics.",
      skills: ["Python", "Time Series", "ARIMA", "Feature Signals"],
      industries: ["Finance", "Semiconductors"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "education-experience-earnings-model",
      projectName: "Education vs Experience on Earnings",
      subtitle: "Course · Econometrics",
      date: "2025 S2",
      description:
        "Compared regression and nonlinear forecast specs to test robustness and omitted-variable bias on earnings drivers.",
      skills: ["Regression", "Forecasting", "Econometrics", "Model Evaluation"],
      industries: ["Labor Economics", "Education", "Public Policy"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "wine-quality-analysis",
      projectName: "Wine Quality Drivers",
      subtitle: "Course · Statistical modeling",
      date: "2025 S2",
      description:
        "Red vs white Vino Verde modeling with selection, stability checks, and interpretable drivers of perceived quality.",
      skills: ["R", "Regression", "Model Selection", "Bootstrap", "VIP"],
      industries: ["Food & Beverage", "Agri-food"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "disaster-risk-insurance",
      projectName: "Disaster Risk & Insurance Levers",
      subtitle: "Course · Risk & policy",
      date: "2024 S2",
      description:
        "Hazard exposure scoring with socio-economic layers and parametric insurance recommendations.",
      skills: ["Risk Modeling", "R", "Visualization", "Policy Analysis"],
      industries: ["Insurance", "Public Policy", "Climate Risk"],
      status: "Completed",
      type: "course",
      award: "Excellence Award",
    },
    {
      slug: "data1x01-study",
      projectName: "DATA1X01 Learning Survey",
      subtitle: "Course · Survey analysis",
      date: "2024 S2",
      description:
        "Cleaned Likert survey data on study habits and expectations with clear reporting-ready visuals.",
      skills: ["Survey", "Cleaning", "R", "Reporting"],
      industries: ["Education", "Higher Ed"],
      status: "Completed",
      type: "course",
      award: "Excellence Award",
    },
    {
      slug: "employer-income-correlation-au",
      projectName: "Employer Types vs Income (AU)",
      subtitle: "Course · ML classifiers",
      date: "2024 S2",
      description:
        "Explored regional employer–income patterns with tree ensembles, KNN, NB, and regression baselines.",
      skills: ["EDA", "Gradient Boosting", "Random Forest", "KNN", "Naive Bayes", "Regression"],
      industries: ["Labor Economics", "Public Policy"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "greater-sydney-sa2-scoring",
      projectName: "Sydney SA2 Resource Index",
      subtitle: "Course · Spatial scoring",
      date: "2025 S1",
      description:
        "Composite accessibility index with normalization, weighting, and defensible ranking across SA2 units.",
      skills: ["PostgreSQL", "Index Scoring", "Database", "Machine Learning"],
      industries: ["Urban Analytics", "Public Policy"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "pima-diabetes",
      projectName: "Classifier Benchmark (Pima vs Occupancy)",
      subtitle: "Course · Model comparison",
      date: "2025 S1",
      description:
        "Accuracy vs runtime trade-offs across classical learners with stratified CV on medical vs sensor data.",
      skills: ["k-NN", "Naive Bayes", "SVM", "Random Forest", "Weka", "Python"],
      industries: ["Healthcare", "Machine Learning"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "taylor-swift-engagement-analysis",
      projectName: "Engagement & Herding Signals",
      subtitle: "YouTube comments × ELM + Gemini",
      date: "2025.08",
      description:
        "Large-scale comment mining to trace sentiment shifts, persuasion routes, and herding in a major pop-culture event.",
      skills: ["Python", "YouTube API", "Gemini API", "ELM Theory", "Sentiment Analysis"],
      industries: ["Entertainment", "Social Media", "Marketing"],
      status: "Completed",
      type: "project",
    },
    {
      slug: "revenue-prediction",
      projectName: "QSR Daily Outlet Revenue",
      subtitle: "Course · Regression suite",
      date: "2026 S1",
      description:
        "Predictive modeling for quick-service daily sales with elastic net, ridge/lasso, KNN, and rigorous CV.",
      skills: ["Regression", "Elastic Net", "Feature Engineering", "Python", "scikit-learn"],
      industries: ["Retail", "Hospitality", "Finance"],
      status: "Completed",
      type: "course",
    },
   
    {
      slug: "apmcm-2024",
      projectName: "APMCM Modeling Solution",
      subtitle: "Asia-Pacific Mathematical Contest in Modeling",
      date: "2024.11",
      description:
        "My APMCM paper: optimization-first model, parameter sensitivity, and a tight writeup for our problem track.",
      skills: ["Mathematical Modeling", "Optimization", "Sensitivity Analysis", "LaTeX"],
      industries: ["Research", "Applied Math"],
      status: "Completed",
      type: "competition",
      logo: "/competition/apmcmlogo.png",
    },
    {
      slug: "mcm-icm-2025",
      projectName: "MCM/ICM Modeling Solution",
      subtitle: "COMAP Mathematical Contest in Modeling",
      date: "2025.02",
      description:
        "Our MCM/ICM entry: clear assumptions, statistical core models, and evidence-backed answers for the chosen problem.",
      skills: ["Mathematical Modeling", "Statistics", "Simulation", "Technical Writing"],
      industries: ["Research", "Applied Math"],
      status: "Completed",
      type: "competition",
      logo: "/competition/COMAPlogo.svg",
    },
  ];

  const q = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    return items.filter((p) => {
      const haystack = [
        p.projectName,
        p.subtitle,
        p.description,
        p.award ?? "",
        ...p.skills,
        ...p.industries,
      ]
        .join(" ")
        .toLowerCase();

      const matchSearch = !q || haystack.includes(q);

      const matchTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => {
          const t = tag.toLowerCase();
          return (
            p.industries.some((i) => i.toLowerCase() === t) ||
            p.skills.some((s) => s.toLowerCase() === t)
          );
        });

      return matchSearch && matchTags;
    });
  }, [items, q, selectedTags]);

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "59 130 246",
          ["--pgc-glow-b" as any]: "99 102 241",
        } as React.CSSProperties
      }
    >
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
              placeholder="Search by project, competition, industry, method…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mx-auto max-w-xl border-blue-400/30 bg-black/30 text-blue-100 placeholder:text-blue-200/60 backdrop-blur-md"
            />

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {featuredTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      )
                    }
                    className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md transition-all ${
                      active
                        ? "border-blue-300/60 bg-blue-500/30 text-blue-50 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                        : "border-blue-400/35 bg-black/25 text-blue-200/90 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-100"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}

              {selectedTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="rounded-full border border-gray-400/30 bg-black/20 px-3 py-1 text-xs text-gray-200 hover:bg-black/35"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link key={project.slug} href={`/data/${project.slug}`} className="block h-full">
                <PremiumGlassCard className="relative flex h-full min-h-[260px] flex-col cursor-pointer border border-blue-400/20 bg-black/25 backdrop-blur-xl shadow-[0_0_26px_rgba(59,130,246,0.10)] hover:border-blue-400/35 hover:bg-black/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.16)]">
                  {project.award && (
                    <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-amber-400/30 bg-amber-500/20 px-2 py-1 text-xs font-semibold text-amber-200 shadow-sm backdrop-blur-sm">
                      <AwardIcon className="h-3 w-3 text-amber-300" />
                      {project.award}
                    </span>
                  )}

                  <div className={`p-6 pb-2 ${project.award ? "pt-8 pr-24" : ""}`}>
                    <div className="flex items-start gap-3">
                      {project.type !== "course" && !!project.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-white/5">
                          <img
                            src={project.logo}
                            alt=""
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h2 className="line-clamp-2 text-base font-semibold leading-snug text-gray-100">
                          {project.projectName}
                        </h2>
                        <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-400">
                          {project.subtitle}
                        </p>
                        <div className="mt-2 flex min-h-[1.25rem] items-center gap-2 text-xs text-gray-400">
                          <span className="truncate">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-0">
                    <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-200">
                      {project.description}
                    </p>

                    <div className="mt-auto overflow-hidden flex flex-wrap gap-1">
                      {mergeCardKeywords(project.industries, project.skills).map((kw) => (
                        <Badge
                          key={kw}
                          className="text-xs font-normal text-blue-100 border-blue-500/30 bg-blue-500/20"
                        >
                          {kw}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </PremiumGlassCard>
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
