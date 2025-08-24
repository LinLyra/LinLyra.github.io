"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, Globe, Rocket, Trophy, Award as AwardIcon } from "lucide-react";

type DataType = "course" | "project" | "competition";

type DataItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
  status: "Completed" | "In Progress" | "Planned";
  type?: DataType;            // default: "course"
  award?: string;             // e.g. "Excellence Award"
  logo?: string;              // for competitions
  links?: { github?: string; demo?: string };
};

export default function DataPage() {
  const [search, setSearch] = useState("");

  const items: DataItem[] = [
    {
      slug: "ai-wave-nvda-forecast",
      title: "Rising the AI Wave: Forecasting the NVIDIA Stock",
      date: "2025.07",
      description:
        "Univariate & multivariate forecasting (ARIMA/Prophet + feature signals) to explore AI-cycle dynamics on NVDA price.",
      skills: ["Python", "Time Series", "ARIMA", "Semiconductor Industry"],
      status: "Completed",
      type: "project",
    },
    {
      slug: "disaster-risk-insurance",
      title: "Disaster Risk Insurance: Insights and Recommendations",
      date: "2024 S2",
      description:
        "Quantifies hazard exposure and proposes parametric insurance levers; combines hazard indices with socio-economic layers.",
      skills: ["Risk Modeling", "GIS (basic)", "Data Visualization", "Policy Analysis"],
      status: "Completed",
      award: "Excellence Award",
      type: "course",
    },
    {
      slug: "data1x01-study",
      title: "The Study Behaviours and Expectations of DATA1X01 Students",
      date: "2024 S2",
      description:
        "Student survey analysis on learning behaviours and expectations; cleaning, Likert scaling and reporting.",
      skills: ["Survey", "Cleaning", "Visualization", "Reporting"],
      status: "Completed",
      award: "Excellence Award",
      type: "course",
    },
    {
      slug: "employer-income-correlation-au",
      title: "Employer–Income Correlation Analysis in Australia",
      date: "2024 S2",
      description:
        "Exploratory analysis on employer types and income distributions across Australian regions; correlation & regression checks.",
      skills: ["EDA", "Regression", "Pandas", "Stat Tests"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "greater-sydney-sa2-scoring",
      title: "Greater Sydney SA2 Resources Scoring Report",
      date: "2025 S1",
      description:
        "Constructs a composite index to score SA2 areas by resource accessibility; normalization, weighting, and ranking.",
      skills: ["Index Scoring", "Normalization", "Ranking", "Pandas"],
      status: "Completed",
      type: "course",
    },
    {
      slug: "pima-diabetes",
      title:
        "Comparative Analysis of Classifier Accuracy and Runtime on Pima Indians Diabetes",
      date: "2025 S1",
      description:
        "Benchmarks multiple classifiers on accuracy–runtime trade-off (LogReg, SVM, RF, XGBoost) with reproducible splits.",
      skills: ["scikit-learn", "XGBoost", "Benchmarking", "Metrics"],
      status: "Completed",
      type: "course",
    },

    // in progress / planned
    {
      slug: "food-delivery-insights",
      title: "Food Delivery Market Insights",
      date: "2025.08",
      description:
        "Plan: analyze order-level dataset (time, location, spend), cluster consumer segments, model delivery time drivers, and identify promotions impact using regression and causal inference.",
      skills: ["Python", "Pandas", "Data Visualization", "Clustering", "Causal Inference"],
      status: "In Progress",
      type: "project",
    },
    {
      slug: "tableau-next-hackathon",
      title: "Tableau Next Hackathon",
      date: "2025.08",
      description:
        "Plan: explore short-video engagement data; prototype an agentic analytics dashboard (Tableau + LLM/agents) to uncover patterns in audience retention, trending topics, and personalized recommendations.",
      skills: ["Tableau", "SQL", "Machine Learning", "Agentic Analytics"],
      status: "In Progress",
      type: "project",
    },
    {
      slug: "kaggle-ncaa-basketball",
      title: "NCAA Basketball Analytics (Kaggle)",
      date: "2025.09",
      description:
        "Plan: feature engineering from play-by-play/seed history, Elo/efficiency ratings, logistic/XGBoost ensemble for upset prediction.",
      skills: ["Python", "Pandas", "Machine Learning"],
      status: "Planned",
      type: "project",
    },

    // competitions (with logo + trophy icon)
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
  ];

  const filtered = items.filter((p) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.skills.some((s) => s.toLowerCase().includes(q))
    );
  });

  const metaIcon = (p: DataItem) => (p.type === "competition" ? <Trophy className="h-4 w-4" /> : <Rocket className="h-4 w-4" />);

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
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
              className="mx-auto max-w-md bg-black/30 backdrop-blur-md border-blue-400/30 text-gray-100 placeholder:text-gray-400"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const showLogo = project.type === "competition" && project.logo;
              return (
                <Link key={project.slug} href={`/data/${project.slug}`} className="block">
                  <Card className="relative h-full cursor-pointer border-blue-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40">
                    {project.award && (
                      <div className="absolute right-3 top-3 z-20">
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-1 text-xs font-semibold text-amber-200 border border-amber-400/30 backdrop-blur-sm">
                          <AwardIcon className="h-3 w-3 text-amber-300" />
                          {project.award}
                        </span>
                      </div>
                    )}

                    <CardHeader className={`pb-2 ${project.award ? "pt-6" : ""}`}>
                      <div className="flex items-start gap-3">
                        {showLogo && (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-white/5">
                            <img
                              src={project.logo}
                              alt={`${project.title} logo`}
                              className="max-h-[2.5rem] max-w-[2.5rem] object-contain"
                            />
                          </div>
                        )}

                        <div className="min-w-0">
                          <CardTitle className="mb-1 text-lg text-gray-100">{project.title}</CardTitle>

                          <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                            {metaIcon(project)}
                            <span className="truncate">{project.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="mb-4 line-clamp-3 text-sm text-gray-200">{project.description}</p>

                      <div className="mb-4 flex flex-wrap gap-1">
                        {project.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} className="border-blue-500/30 bg-blue-500/20 text-blue-200 text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 4 && (
                          <Badge className="border-gray-500/30 bg-gray-500/20 text-gray-300 text-xs">
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
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-400">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
