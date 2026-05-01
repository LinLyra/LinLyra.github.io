"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HeroSection() {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <ScrollReveal className="flex justify-center" variant="soft">
          <Card className="bg-white/10 backdrop-blur-md border-white/15 p-6 text-center max-w-sm">
            <CardContent className="space-y-4">
             
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

        
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">Long (Lyra) LIN</h3>
                <p className="text-gray-200 text-sm mb-1">University of Sydney</p>
                <p className="text-gray-200 text-sm mb-1">BSc Data Science &amp; Business Analytics</p>
                <p className="text-gray-200 text-sm">July 2024 – Expected Dec 2026</p>
              </div>


              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Fast Learner",
                  "Strategic Communicator",
                  "Cross-functional Collaborator",
                  "Problem-to-Product Builder",
                  "Curiosity Driven",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/5 text-gray-100 hover:bg-white/10 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Main Content */}
        <ScrollReveal className="text-center md:text-left space-y-6" variant="up" delayMs={80}>
          <div className="text-sm text-white/65 italic tracking-wide">
            Learn to change the World.
          </div>

          <h1 className="cosmic-heading text-5xl md:text-6xl font-bold text-gray-100 leading-tight">
            From Data to{" "}
            <span className="cosmic-gradient">Decisions</span>{" "}
            to Products.
          </h1>

          <div className="space-y-4">
            <p className="text-xl text-gray-200">
              I don’t just analyze — I build.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Starting from data, I uncover what’s really happening in complex systems, then translate that into strategy, product design, and working prototypes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What sets me apart is range: I move fast across industries, collaborate across functions, and turn ambiguous problems into shipped solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToSkills}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-gray-100 px-8 py-3 rounded-full text-lg font-medium"
            >
              Explore Universe
            </Button>

            <div className="flex gap-3">
           
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
        </ScrollReveal>
      </div>
    </section>
  );
}
