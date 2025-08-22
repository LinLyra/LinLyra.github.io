"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Rocket, ArrowLeft, Award } from "lucide-react";

type ProductType = "product" | "project" | "hackathon" | "marketing";

type ProductItem = {
  slug: string;
  title: string;
  event?: string;
  company?: string;
  date?: string;
  type: ProductType;
  description?: string;
  tags?: string[];
  skills?: string[];
  placement?: string;
  image?: string;
  logo?: string;
};

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<ProductType[]>([]);

  /** ===== 合并清单：你发来的所有与 Product 相关的条目 ===== */
  const products: ProductItem[] = [
    // --- 你的截图项目 ---
    {
    slug: "abc-ai-development",
    title: "AI Development Internship",
    company: "A Better Community",
    date: "2025.3 — Present",
    type: "development",
    logo: "/experience/abclogo.png",
    skills: [
      "Research Design",
      "Generative AI",
      "Data Pipeline Engineering",
      "Prompt Engineering",
      "API Integration",
    ],
   },
   {
     slug: "deloitte-technology",
     title: "Technology · Virtual Experience",
     company: "Deloitte (Forage)",
     date: "2024.12",
     type: "development",
     logo: "/experience/deloittelogo.png",
     skills: [
      "Data Analysis",
      "Tableau",
      "Excel",
      "Python",
      "Data Modeling",
      "Software Dev Processes",
      ],
    },
    {
      slug: "deloitte-digital-elite-2025",
      title: "Deloitte Digital Elite Challenge 2025",
      date: "2025.05",
      type: "product",
      logo: "/competition/deloittelogo.png",
      description:
        "Global university challenge by Deloitte China on digital product innovation.",
      tags: ["First-ruunner", "AI + Audit", "Frontend Dev", "Digital Transformation"],
    },
    
    {
      slug: "gdgx-openai-hack",
      title: "GDG × OpenAI Hack Node Australia",
      date: "2025.08",
      type: "hackathon",
      logo: "/competition/gdglogo.png",
      description:
        "2nd Global AI Hackathon (co-hosted with MIT Sloan AI Club).",
      tags: ["Full-stack", "Vibe coding", "Social Network App", "GameFi"],
    },
    {
      slug: "ccf-tech-for-good-2025",
      title: "CCF Tech for Good Hackathon 2025",
      date: "2025.05",
      type: "hackathon",
      logo: "/competition/ccflogo.png",
      description:
        "Building social-impact solutions — accessible films & product design.",
      tags: ["Top9","Accessible Films", "Product Design", "Social Impact"],
    },
    {
      slug: "adventurex-2025",
      title: "AdventureX 2025",
      date: "2025.07",
      type: "hackathon",
      logo: "/competition/advxlogo.jpg",
      description:
        "China’s largest youth-driven hackathon — rapid product prototyping.",
      tags: ["Product Ops", "Web3", "Youth Innovation", "YOLO"],
    },
    {
      slug: "kpmg-innovate-day-2025",
      title: "KPMG Innovate Day 2025",
      date: "2024.10",
      type: "product",
      logo: "/competition/kpmglogo.png",
      description:
        "KPMG innovation program focused on digital products & insights.",
      tags: ["Product", "AuditX", "Business Plan"],
    },
    {
      slug: "loreal-brandstorm",
      title: "L'Oréal BRANDSTORM 2025",
      date: "2025.04",
      type: "marketing",
      logo: "/competition/loreallogo.png",
      description:
        "Global youth challenge — men’s beauty through tech & product innovation.",
      tags: ["Marketing", "Product", "Pitch"],
    },

    {
      slug: "ai-esg-circular-fashion",
      title: "AI × ESG: Generative Scoring for Circular Fashion",
      date: "2025",
      type: "project",
      image: "/project/ai-esg-cover.png",        // 把截图放 public/project/ai-esg-cover.png
      logo: "/competition/eylogo.png",
      description:
        "Lightweight AI-powered ESG scoring pipeline for circular fashion: image understanding (E), document understanding (S), and structured output (G).",
      tags: ["GenAI", "Vision", "ESG", "JSON Scoring"],
      skills: ["Prompt Engineering", "Pipeline Design"],
    },
    
    {
      slug: "microsoft-chat-hack-promptathon",
      title: "Microsoft Chat & Hack Promptathon",
      date: "2025.03",
      type: "hackathon",
      logo: "/competition/microsoftlogo.png",
      description:
        "GenAI prompt engineering & product prototyping.",
      tags: ["GenAI", "Prompting", "Product"],
    },
  ];

  // 仅显示实际使用到的类型
  const allTypes: ProductType[] = ["product", "project", "hackathon", "marketing"];
  const used = (t: ProductType) => products.some((p) => p.type === t);

  // 搜索：title / company / event / description / tags / skills
  const q = searchTerm.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const bag = [
      p.title,
      p.company ?? "",
      p.event ?? "",
      p.description ?? "",
      ...(p.tags ?? []),
      ...(p.skills ?? []),
    ]
      .join(" ")
      .toLowerCase();

    const hit = q === "" || bag.includes(q);
    const typeOK = selectedTags.length === 0 || selectedTags.includes(p.type);
    return hit && typeOK;
  });

  const toggle = (t: ProductType) =>
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          {/* 头部 */}
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 border-amber-400/30 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-gray-100 backdrop-blur-md hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-gray-100">Product</h1>
            <p className="text-gray-200">Products & projects — shipping user-facing value.</p>
          </div>

          {/* 搜索 + 类型过滤（橙色主题） */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search by title / company / tags / skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mx-auto max-w-md border-amber-400/30 bg-black/30 text-gray-100 backdrop-blur-md placeholder:text-gray-400"
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

          {/* 列表 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="block">
                <Card className="min-h-[220px] cursor-pointer overflow-hidden border-amber-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* 封面/Logo */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-400/20 bg-white/5">
                          {p.image ? (
                            <img src={p.image} alt={`${p.title} cover`} className="h-full w-full object-cover" />
                          ) : (
                            <img src={p.logo || "/placeholder.svg"} alt={`${p.title} logo`} className="max-h-[2.5rem] max-w-[2.5rem] object-contain" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-snug text-gray-100">{p.title}</CardTitle>
                          <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                            <Rocket className="h-4 w-4" />
                            <span>{p.date ?? ""}</span>
                            {p.company && <span>• {p.company}</span>}
                            {p.event && <span>• {p.event}</span>}
                          </div>
                        </div>
                      </div>

                      {p.placement && (
                        <div className="flex items-center gap-1 rounded-full bg-yellow-500/20 px-2 py-1 backdrop-blur-sm">
                          <Award className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs font-semibold text-yellow-400">{p.placement}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-4 line-clamp-3 text-sm text-gray-200">{p.description ?? ""}</p>
                    <div className="flex flex-wrap gap-1">
                      {((p.skills && p.skills.length > 0 ? p.skills : p.tags) ?? []).slice(0, 4).map((tag) => (
                        <Badge key={tag} className="border-amber-500/30 bg-orange-500/20 text-xs text-orange-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && <p className="mt-12 text-center text-gray-400">No results found.</p>}
        </div>
      </div>
    </div>
  );
}
