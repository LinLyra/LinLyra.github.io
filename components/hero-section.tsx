"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <div className="flex justify-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center max-w-sm">
            <CardContent className="space-y-4">
              {/* 头像 */}
              <div className="mx-auto w-32 h-32 rounded-2xl p-[2px] bg-gradient-to-br from-blue-400 to-purple-600">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-black/40">
                  <Image
                    src="/user.png"
                    alt="Long (Lyra) LIN"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* 基本信息 */}
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">Long (Lyra) LIN</h3>
                <p className="text-gray-200 text-sm mb-1">University of Sydney</p>
                <p className="text-gray-200 text-sm mb-1">Bachelor of Science</p>
                <p className="text-gray-200 text-sm mb-1">Data Science &amp; Business Analytics</p>
                <p className="text-gray-200 text-sm">July. 2024 - Expected Dec. 2026</p>
              </div>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium">
                  Lifelong Learner
                </span>
                <span className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium">
                  Curiosity Driven
                </span>
                <span className="px-4 py-2 bg-pink-500/30 text-pink-200 rounded-full text-sm font-medium">
                  Impact Creator
                </span>
                <span className="px-4 py-2 bg-pink-500/30 text-pink-200 rounded-full text-sm font-medium">
                  Data Storyteller
                </span>
                <span className="px-4 py-2 bg-orange-500/30 text-orange-200 rounded-full text-sm font-medium">
                  Problem-to-Product Builder
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 leading-tight">
            Learn to change the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">World.</span>
          </h1>

          <p className="text-xl text-gray-200 mb-4">
            Driven by a passion for data, I start with analytics to understand complex systems, 
            transform insights into business strategy, design product solutions, and bring them to life through full-stack development.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            My work connects data, business, and technology into measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToSkills}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-gray-100 px-8 py-3 rounded-full text-lg font-medium"
            >
              Explore Universe
            </Button>

            <div className="flex gap-3">
              {/* 用 asChild 包一层 <a>，真正新开页跳转 */}
              <Button
                asChild
                variant="outline"
                className="border-white/40 text-gray-100 hover:bg-white/20 px-6 py-3 rounded-full text-lg bg-transparent font-medium"
              >
                <a
                  href="https://github.com/LinLyra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Lyra's GitHub"
                >
                  <Github className="w-5 h-5 mr-2 inline-block" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/40 text-gray-100 hover:bg-white/20 px-6 py-3 rounded-full text-lg bg-transparent font-medium"
              >
                <a
                  href="https://www.linkedin.com/in/long-lin-b4296431b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Lyra's LinkedIn"
                >
                  <Linkedin className="w-5 h-5 mr-2 inline-block" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
