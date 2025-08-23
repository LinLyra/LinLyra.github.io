"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Database, ArrowLeft, Github, Globe } from "lucide-react";

type DataItem = {
  slug: string;
  title: string;
  category: string;   // e.g., Time Series, Econometrics, Classification…
  date: string;       // e.g., 2025.05
  description: string;
  skills: string[];   // tags/skills
  status: "Completed" | "In Progress" | "Planned";
  links?: { github?: string; demo?: string };
};

export default function DataPage() {
  const [search, setSearch] = useState("");

  // ===== 课程项目清单 + Kaggle 计划 =====
  const items: DataItem[] = [
    {
      slug: "ai-wave-nvda-forecast",
      title: "Rising the AI Wave: Forecasting the NVIDIA Stock",
      category: "Time Series / Forecasting",
      date: "2025.07",
      description:
        "Univariate & multivariate forecasting (ARIMA/Prophet + feature signals) to explore AI-cycle dynamics on NVDA price.",
      skills: ["Python", "Time Series", "ARIMA", "Semiconductor Industry"], 
      status: "Completed",
      links: {},
    },
    {
      slug: "disaster-risk-insurance",
      title: "🏆Disaster Risk Insurance: Insights and Recommendations",
      category: "Risk Analytics / Policy",
      date: "2024 S2",
      description:
        "Quantifies hazard exposure and proposes parametric insurance levers; combines hazard indices with socio-economic layers.",
      skills: ["Risk Modeling", "GIS (basic)", "Data Visualization", "Policy Analysis"],
      status: "Completed",
    },
    {
      slug: "data1x01-study",
      title:
        "🏆The Study Behaviours and Expectations of DATA1X01 Students",
      category: "Survey Analytics",
      date: "2024 S2",
      description:
        "Student survey analysis on learning behaviours and expectations; cleaning, Likert scaling and reporting.",
      skills: ["Survey", "Cleaning", "Visualization", "Reporting"],
      status: "Completed",
    },
    {
      slug: "employer-income-correlation-au",
      title: "Employer–Income Correlation Analysis in Australia",
      category: "Econometrics / EDA",
      date: "2024 S2",
      description:
        "Exploratory analysis on employer types and income distributions across Australian regions; correlation & regression checks.",
      skills: ["EDA", "Regression", "Pandas", "Stat Tests"],
      status: "Completed",
    },
    {
      slug: "greater-sydney-sa2-scoring",
      title: "Greater Sydney SA2 Resources Scoring Report",
      category: "Index Design / Regional Scoring",
      date: "2025 S1",
      description:
        "Constructs a composite index to score SA2 areas by resource accessibility; normalization, weighting, and ranking.",
      skills: ["Index Scoring", "Normalization", "Ranking", "Pandas"],
      status: "Completed",
    },
    {
      slug: "pima-diabetes",
      title:
        "Comparative Analysis of Classifier Accuracy and Runtime on Pima Indians Diabetes",
      category: "Classification / Benchmark",
      date: "2025 S1",
      description:
        "Benchmarks multiple classifiers on accuracy–runtime trade-off (LogReg, SVM, RF, XGBoost) with reproducible splits.",
      skills: ["scikit-learn", "XGBoost", "Benchmarking", "Metrics"],
      status: "Completed",
    },
    
    // ===== Kaggle 计划：NCAA 篮球 =====
    {
  slug: "food-delivery-insights",
  title: "Food Delivery Market Insights",
  category: "Consumer Analytics",
  date: "2025.08",
  description:
    "Plan: analyze order-level dataset (time, location, spend), cluster consumer segments, model delivery time drivers, and identify promotions impact using regression and causal inference.",
  skills: ["Python", "Pandas", "Data Visualization", "Clustering", "Causal Inference"],
  status: "In Progress",
},

{
  slug: "tableau-next-hackathon",
  title: "Tableau Next Hackathon",
  category: "Short Video & Agentic Analytics",
  date: "2025.08",
  description:
    "Plan: explore short-video engagement data; prototype an agentic analytics dashboard (Tableau + LLM/agents) to uncover patterns in audience retention, trending topics, and personalized recommendations.",
  skills: ["Tableau", "SQL", "Machine Learning", "Agentic Analytics"],
  status: "In Progress"
  },
    
  {
      slug: "kaggle-ncaa-basketball",
      title: "NCAA Basketball Analytics (Kaggle)",
      category: "Sports Analytics",
      date: "2025.09",
      description:
        "Plan: feature engineering from play-by-play/seed history, Elo/efficiency ratings, logistic/XGBoost ensemble for upset prediction.",
      skills: ["Python", "Pandas", "Machining Learning"],
      status: "Planned",
    },
  ];

  const filtered = items.filter((p) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.skills.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="relative min-h-screen">
      {/* 顶部导航：Data 高亮 */}
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          {/* 头部（蓝色主题） */}
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-4 text-4xl font-bold text-gray-100">Data</h1>
            <p className="text-gray-200">
              CUsing data to understand the world, uncover patterns, and drive insights.
            </p>
          </div>

          {/* 搜索 */}
          <div className="mb-8">
            <Input
              placeholder="Search datasets, topics, or skills…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mx-auto max-w-md bg-black/30 backdrop-blur-md border-blue-400/30 text-gray-100 placeholder:text-gray-400"
            />
          </div>

          {/* 列表（保持 Projects 页卡片风格，换成蓝色边框） */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link key={project.slug} href={`/data/${project.slug}`} className="block">
                <Card className="h-full cursor-pointer border-blue-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Database className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                    <CardTitle className="mb-2 text-lg text-gray-100">
                      {project.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-blue-400">
                      {project.category}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-3 text-sm text-gray-200">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-blue-500/20 text-blue-200 border-blue-500/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge className="border-gray-500/30 bg-gray-500/20 text-xs text-gray-300">
                          +{project.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        className={
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-200 border-green-500/30"
                            : project.status === "In Progress"
                            ? "bg-amber-500/20 text-amber-200 border-amber-500/30"
                            : "bg-blue-500/20 text-blue-200 border-blue-500/30"
                        }
                      >
                        {project.status}
                      </Badge>

                      <div className="flex gap-2">
                        {!!project.links?.github && <Github className="h-4 w-4 text-gray-400" />}
                        {!!project.links?.demo && <Globe className="h-4 w-4 text-gray-400" />}
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
