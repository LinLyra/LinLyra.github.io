"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaModal } from "@/components/media-modal";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Calendar, Users, Award, ImageIcon } from "lucide-react";

export default function Page() {
  // —— 这里是本页的数据（静态导出友好）——
  const competition = {
    id: "gdgx-openai-hack-node-au",
    title: "GDG x OpenAI Hack Node Australia",
    event: "Global AI Hackathon (Australia Node)",
    date: "Aug 2025",
    type: "hackathon",
    // 如果没有名次就留空或写 Finalist/Selected Team
    placement: "Finalist",
    teamSize: "3 members",
    description:
      "Built a real-time social experience with a playful 'vibe coding' style — combining 3D galaxy UI, generative AI, and game-like interactions.",
    skills: [
      "Next.js",
      "React",
      "React Three Fiber",
      "Three.js",
      "TailwindCSS",
      "Supabase/Edge",
      "Vercel AI SDK",
    ],
    situation:
      "48-hour global hackathon node co-hosted by GDG and OpenAI partners. Our goal: turn AI + 3D into a social product that feels lightweight, fun, and instantly shareable.",
    task:
      "I owned the front-end architecture & 3D interaction layer, integrated AI endpoints, and delivered a polished UX that could be demoed smoothly under time pressure.",
    action: [
      "Designed galaxy-themed 3D scene (R3F/Three.js) with smooth camera orbits & depth-of-field.",
      "Built real-time rooms (Supabase) for collaborative prompts and reactions.",
      "Integrated LLM endpoints (Vercel AI SDK) for on-the-fly content generation.",
      "Implemented optimistic UI + cache策略，确保弱网下交互仍然流畅。",
      "打包可复用 UI 组件（卡片/徽章/对话框）+ 响应式适配移动端。",
    ],
    result: [
      "完成端到端可演示原型（< 48h）。",
      "现场评委体验环节稳定跑通；交互时延 < 150ms（澳洲节点）。",
      "收获潜在合作对接与后续产品化建议。",
    ],
    reflection:
      "这次让我把课堂/项目里掌握的工程化能力直接落在压力场景里：如何在极限时间下做技术取舍、保证可演示性与稳定性；同时把抽象的 AI 能力设计成可被真实用户‘玩起来’的体验。后续会把房间系统做成可扩展的多场景模板，并补完观测/埋点用于验证留存与分享率。",
    // 媒体库（把对应文件丢到 public 下）
    media: {
      images: [
        "/images/competitions/gdgx-openai-hack-node-au/cover.png",
        "/images/competitions/gdgx-openai-hack-node-au/shot-1.jpg",
        "/images/competitions/gdgx-openai-hack-node-au/shot-2.jpg",
      ],
      videos: ["/videos/competitions/gdgx-openai-hack-node-au/demo.mp4"],
      documents: ["/docs/competitions/gdgx-openai-hack-node-au/pitch.pdf"],
    },
  } as const;

  if (!competition) notFound();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen">

      <div className="relative z-10 p-6">
        <Link href="/competitions">
          <Button className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Competitions
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* 头部卡片 */}
          <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
            <CardHeader>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <CardTitle className="text-3xl text-gray-100 mb-4">
                    {competition.title}
                  </CardTitle>

                  <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      <span className="text-lg">{competition.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{competition.date}</span>
                    </div>
                    {competition.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>{competition.teamSize}</span>
                      </div>
                    )}
                  </div>

                  {competition.placement && (
                    <div className="flex items-center gap-2 mb-6">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-xl">
                        {competition.placement}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-200 mb-4">{competition.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {competition.skills.map((s) => (
                      <Badge
                        key={s}
                        className="bg-green-500/20 text-green-200 border-green-500/30"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setOpen(true)}
                  variant="outline"
                  className="border-green-400/30 text-gray-100 hover:bg-green-500/20 bg-transparent"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  View Media
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* STAR 分区 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
                <CardHeader>
                  <CardTitle className="text-gray-100">Situation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed">{competition.situation}</p>
                </CardContent>
              </Card>

              <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
                <CardHeader>
                  <CardTitle className="text-gray-100">Task</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed">{competition.task}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
                <CardHeader>
                  <CardTitle className="text-gray-100">Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {competition.action.map((a, i) => (
                      <li key={i} className="text-gray-200 flex items-start gap-3">
                        <span className="text-green-400 mt-1">⚡</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
                <CardHeader>
                  <CardTitle className="text-gray-100">Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {competition.result.map((r, i) => (
                      <li key={i} className="text-gray-200 flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-black/35 backdrop-blur-md border-green-400/15">
            <CardHeader>
              <CardTitle className="text-gray-100">Reflection & Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed">{competition.reflection}</p>
            </CardContent>
          </Card>
        </div>

        {/* 媒体库弹窗 */}
        <MediaModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={competition.title}
          media={competition.media}
        />
      </div>
    </div>
  );
}
