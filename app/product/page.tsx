"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PremiumGlassCard } from "@/components/premium-glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award as AwardIcon } from "lucide-react";

type ProductType = "product" | "project" | "hackathon" | "development";

type ProductItem = {
  slug: string;
  projectName: string;
  subtitle: string;
  date?: string;
  type: ProductType;
  description?: string;
  tags?: string[];
  skills?: string[];
  industries?: string[];
  placement?: string;
  image?: string;
  logo?: string;
};

function mergeProductCardTags(p: ProductItem, max = 6): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of [
    ...(p.industries ?? []),
    ...(p.tags ?? []),
    ...(p.skills ?? []),
  ]) {
    const x = raw.trim();
    if (!x || seen.has(x)) continue;
    seen.add(x);
    out.push(x);
    if (out.length >= max) break;
  }
  return out;
}

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<ProductType[]>([]);

  const products: ProductItem[] = [
    {
      slug: "abc-ai-development",
      projectName: "AI Product Researcher",
      subtitle: "A Better Community",
      date: "2025.3 — Present",
      type: "development",
      logo: "/experience/abclogo.png",
      description:
        "End-to-end GenAI delivery for community clients—from discovery and data prep to prompts, APIs, and rollout.",
      skills: [
        "Research Design",
        "GenAI",
        "Data Pipeline Engineering",
        "Prompt Engineering",
        "API Integration",
      ],
      industries: ["Nonprofit", "AI Applications"],
      tags: ["GenAI", "APIs", "Community"],
    },
    {
      slug: "agentlens",
      projectName: "AgentLens — AI Agent Evaluation Platform",
      subtitle: "Meituan NoCode Challenge",
      date: "2026.03",
      type: "project",
      logo: "/competition/microsoftlogo.png",
      description:
        "LLM agent evaluation console with multi-dimension scoring, hallucination flags, and diagnostic reports.",
      tags: ["AI Evaluation", "Hallucination Detection", "Next.js", "LLM"],
      skills: ["OpenRouter", "Dashboard UX", "JSON Pipelines"],
      industries: ["AI", "Developer Tools", "Software"],
    },
    {
      slug: "foodguard-lyra-buildthon",
      projectName: "FoodGuard — AI Nutrition & Allergen Assistant",
      subtitle: "Lyra Buildthon",
      date: "2025.11",
      type: "project",
      logo: "/competition/foodguard.png",
      description:
        "Nutrition and allergen assistant that turns meal photos into fast, actionable eating guidance.",
      tags: ["HealthTech", "Computer Vision", "AI Product", "Nutrition"],
      skills: ["Product Design", "UX Writing"],
      industries: ["HealthTech", "Consumer App"],
    },
    {
      slug: "deloitte-digital-elite-2025",
      projectName: "PinSight: AI-Driven Audit Execution Platform",
      subtitle: "Deloitte Digital Elite Challenge",
      date: "2025.05",
      type: "product",
      logo: "/competition/deloittelogo.png",
      placement: "First Runner-up",
      description:
        "Designed and prototyped an AI-enabled audit execution platform for SME audit teams, automating smart sampling, document understanding, logic testing, and working paper generation through a modular AI workflow.",
      tags: ["AI Audit","Smart Sampling","Document AI","Workflow Automation","Digital Transformation",],
      skills: ["Product Strategy","AI Workflow Design","Audit Process Modeling","Prototyping","Business Storytelling","Frontend UI Design",],
      industries: ["Audit","Professional Services","Enterprise Software", "Financial Compliance","AI Automation",],
    },
    {
      slug: "gdgx-openai-hack",
      projectName: "YOLO·AU",
      subtitle: "GDG × OpenAI Hack Node Australia",
      date: "2025.08",
      type: "hackathon",
      logo: "/competition/gdglogo.png",
      description:
        "Full-stack social growth app with reputation, circles, missions, and a lightweight scout console.",
      tags: ["Full-stack", "Next.js", "Social", "PostgreSQL"],
      skills: ["Auth", "Realtime"],
      industries: ["Social", "Community", "Creator Economy"],
    },
    {
      slug: "ccf-tech-for-good-2025",
      projectName: "Accessible Media Interpretation Platform",
      subtitle: "CCF Tech for Good Hackathon",
      date: "2025.05",
      type: "hackathon",
      logo: "/competition/ccflogo.png",
      placement: "Top 9",
      description:
        "Accessible media + product concept for social-impact storytelling and inclusive UX.",
      tags: ["Accessibility", "Product Design", "Social Impact", "Inclusive UX"],
      skills: ["Research", "Wireframes"],
      industries: ["Social Impact", "Media", "Accessibility"],
    },
    {
      slug: "adventurex-2025",
      projectName: "YOLO Growth Stock Platform",
      subtitle: "AdventureX Hackathon",
      date: "2025.07",
      type: "hackathon",
      logo: "/competition/advxlogo.jpg",
      description:
        "Youth growth platform prototype that makes projects and peer support visible as dynamic “growth equity.”",
      tags: ["Growth", "Community", "Prototype", "Pitch"],
      skills: ["UX", "Narrative"],
      industries: ["Community", "Career", "EdTech"],
    },
    {
      slug: "kpmg-innovate-day-2025",
      projectName: "Checkwise: A Multi-Agent Platform for Intelligent Audit Collaboration",
      subtitle: "KPMG Innovate Day",
      date: "2024.10",
      type: "product",
      logo: "/competition/kpmglogo.png",
      description:
        "Tight-timeline product narrative on digital assurance / insights with a credible rollout sketch.",
      tags: ["Product", "AI + Audit", "Business Plan", "Stakeholders"],
      skills: ["Slide Deck", "Roadmap"],
      industries: ["Professional Services", "Audit", "Enterprise"],
    },
    {
      slug: "microsoft-chat-hack-promptathon",
      projectName: "Promptathon Prototype",
      subtitle: "Microsoft Chat & Hack Promptathon",
      date: "2025.03",
      type: "hackathon",
      logo: "/competition/microsoftlogo.png",
      description:
        "Rapid GenAI prototype built around strong prompting patterns and demo-ready UX.",
      tags: ["GenAI", "Prompting", "Product", "Microsoft 365"],
      skills: ["Demo Script", "UI"],
      industries: ["AI", "Enterprise Software"],
    },
    {
      slug: "ai-esg-circular-fashion",
      projectName: "AI × ESG: Generative Scoring for Circular Fashion (GreenSync)",
      subtitle: "Personal project",
      date: "2025.04",
      type: "project",
      description:
        "Lightweight multimodal scoring: image signals for environmental cues, documents for social/governance structure.",
      tags: ["GenAI", "Image Recognition", "ESG", "Multimodal"],
      skills: ["Prompt Engineering", "API Integration", "Scoring Rubric"],
      industries: ["Fashion", "ESG", "Sustainability"],
    },
    {
      slug: "aussie-adventure",
      projectName: "Aussie Adventure",
      subtitle: "Comm-Stem × Canva Hackathon",
      date: "2025.09",
      type: "hackathon",
      logo: "/competition/canvalogo.png",
      description:
        "Nature-first travel recommender pairing weather, palette, and route inspiration in a 24h build.",
      tags: ["Travel", "Recommender", "Weather API", "Canva"],
      skills: ["Frontend Dev", "API Integration", "Maps"],
      industries: ["Travel", "Consumer App"],
    },
    {
      slug: "xuetu-hackathon",
      projectName: "XueTu Marketplace",
      subtitle: "Global Hackathon Tour",
      date: "2026.01",
      type: "hackathon",
      logo: "/competition/gdglogo.png",
      description:
        "Offline tutoring matchmaking with trial booking, check-ins, and two-sided trust signals.",
      tags: ["Education", "Marketplace", "Trust", "Hackathon"],
      skills: ["Matching", "Payments Flow"],
      industries: ["Education", "Local Services"],
    },
    {
      slug: "xuetu-amap",
      projectName: "XueTu × Amap",
      subtitle: "Amap Intelligent Developer Conference",
      date: "2026.01",
      type: "product",
      logo: "/competition/gaodelogo.png",
      description:
        "Map-first tutoring flows: nearby demand, routing, and proof-of-arrival to reduce offline friction.",
      tags: ["Amap API", "Location", "Education", "Check-in"],
      skills: ["Geocoding", "Routing"],
      industries: ["Education", "Location Services"],
    },
  ];

  const allTypes: ProductType[] = ["product", "project", "hackathon", "development"];
  const used = (t: ProductType) => products.some((p) => p.type === t);

  const q = searchTerm.trim().toLowerCase();
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const bag = [
        p.projectName,
        p.subtitle,
        p.description ?? "",
        p.placement ?? "",
        ...(p.tags ?? []),
        ...(p.skills ?? []),
        ...(p.industries ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const hit = q === "" || bag.includes(q);
      const typeOK = selectedTags.length === 0 || selectedTags.includes(p.type);
      return hit && typeOK;
    });
  }, [products, q, selectedTags]);

  const toggle = (t: ProductType) =>
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "245 158 11",
          ["--pgc-glow-b" as any]: "251 146 60",
        } as React.CSSProperties
      }
    >
      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 border-amber-400/30 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-gray-100 backdrop-blur-md hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-gray-100">Product</h1>
            <p className="text-gray-200">
              Designing solutions that turn ideas into impact, from concepts to prototypes.
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search by project, hackathon, industry, stack…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mx-auto max-w-xl border-amber-400/30 bg-black/30 text-amber-50 backdrop-blur-md placeholder:text-amber-200/55"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {allTypes.map((t) =>
                used(t) ? (
                  <Badge
                    key={t}
                    onClick={() => toggle(t)}
                    className={`cursor-pointer ${
                      selectedTags.includes(t)
                        ? "bg-orange-500/30 text-orange-100 border-amber-400/50"
                        : "bg-orange-500/10 text-orange-200 border-amber-400/30"
                    }`}
                  >
                    {t}
                  </Badge>
                ) : null
              )}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  className="h-6 px-2 text-gray-300"
                  onClick={() => setSelectedTags([])}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="group block h-full">
                <div className="relative h-full">
                  {(() => {
                    const corner =
                      p.placement ??
                      (p.type === "hackathon"
                        ? "Hackathon"
                        : p.type === "development"
                          ? "Experience"
                          : p.type === "product"
                            ? "Challenge"
                            : p.type === "project"
                              ? "Project"
                              : undefined);

                    if (!corner) return null;
                    return (
                      <div className="pointer-events-none absolute -right-2 -top-2 z-20">
                        <div className="flex items-center gap-1 rounded-full border border-amber-300/40 bg-yellow-500/20 px-3 py-1 shadow-lg backdrop-blur-md">
                          <AwardIcon className="h-3.5 w-3.5 text-yellow-300" />
                          <span className="text-xs font-semibold text-yellow-200">{corner}</span>
                        </div>
                      </div>
                    );
                  })()}
                <PremiumGlassCard className="flex h-full min-h-[260px] flex-col overflow-hidden bg-black/25 shadow-[0_0_26px_rgba(245,158,11,0.10)] ring-1 ring-amber-400/20 backdrop-blur-xl hover:bg-black/30 hover:ring-amber-400/35 hover:shadow-[0_0_40px_rgba(251,146,60,0.16)]">
                  <div className="p-6 pb-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 flex-1 items-start gap-3">
                        {(p.image || p.logo) && (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-amber-400/20">
                            <img
                              src={p.image || p.logo || "/placeholder.svg"}
                              alt=""
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                const el = e.currentTarget as HTMLImageElement;
                                if (!el.src.includes("placeholder.svg")) el.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        )}

                        <div className="min-w-0 flex-1 pr-2">
                          <h2 className="text-base font-semibold leading-snug text-gray-100 whitespace-normal break-words">
                            {p.projectName}
                          </h2>
                          <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-400">
                            {p.subtitle}
                          </p>
                          <div className="mt-2 flex min-h-[1.25rem] items-center gap-2 text-xs text-gray-400">
                            <span className="truncate">{p.date ?? ""}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-0">
                    <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-200">
                      {p.description ?? ""}
                    </p>
                    <div className="mt-auto overflow-hidden flex flex-wrap gap-1">
                      {mergeProductCardTags(p).map((tag) => (
                        <Badge
                          key={tag}
                          className="border-amber-500/30 bg-orange-500/20 text-xs font-normal text-orange-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </PremiumGlassCard>
                </div>
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
