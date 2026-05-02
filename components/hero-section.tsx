"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { GlowProfileCard } from "@/components/glow-profile-card";
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
          <GlowProfileCard>
            <div className="space-y-4">
             
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
                <h3 className="mb-2 text-[1.125rem] font-semibold leading-snug text-slate-100 md:text-xl">
                  Long (Lyra) LIN
                </h3>
                <p className="mb-1 text-sm text-slate-400/90">University of Sydney</p>
                <p className="mb-1 text-sm text-slate-300/95">BSc Data Science &amp; Business Analytics</p>
                <p className="text-sm text-slate-500">July 2024 – Expected Dec 2026</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  {(
                    [
                      {
                        label: "Fast Learner",
                        cls: "border-sky-400/35 bg-sky-500/15 text-sky-100 hover:bg-sky-500/22",
                      },
                      {
                        label: "Curiosity Driven",
                        cls: "border-fuchsia-400/35 bg-fuchsia-500/15 text-fuchsia-100 hover:bg-fuchsia-500/22",
                      },
                    ] as const
                  ).map((t) => (
                    <span
                      key={t.label}
                      className={`rounded-full border px-3 py-1.5 text-[12px] font-medium backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_14px_rgba(129,140,248,0.25)] ${t.cls}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {(
                    [
                      {
                        label: "Strategic Communicator",
                        cls: "border-violet-400/35 bg-violet-500/15 text-violet-100 hover:bg-violet-500/22",
                      },
                      {
                        label: "Cross-functional Collaborator",
                        cls: "border-emerald-400/35 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/22",
                      },
                      {
                        label: "Problem-to-Product Builder",
                        cls: "border-amber-400/35 bg-amber-500/15 text-amber-50 hover:bg-amber-500/22",
                      },
                    ] as const
                  ).map((t) => (
                    <span
                      key={t.label}
                      className={`rounded-full border px-3 py-1.5 text-[12px] font-medium backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_14px_rgba(129,140,248,0.25)] ${t.cls}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowProfileCard>
        </ScrollReveal>

        {/* Main Content */}
        <ScrollReveal className="text-center md:text-left space-y-6" variant="up" delayMs={80}>
          <div className="font-serif text-lg italic tracking-wide text-slate-400 md:text-xl -rotate-[0.35deg]">
            Learn to change the World.
          </div>

          <h1 className="cosmic-heading text-balance text-[clamp(2.75rem,5vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-slate-50 md:leading-[1.1]">
            From Data to <span className="cosmic-gradient">Decisions</span>
            <br />
            to Products.
          </h1>

          <div className="space-y-3 md:space-y-4">
            <p className="text-base font-medium text-slate-200 md:text-lg">
              I don’t just analyze — I build.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 md:text-base md:leading-relaxed">
              Starting from data, I uncover what’s really happening in complex systems, then translate that into strategy, product design, and working prototypes.
            </p>
            <p className="text-sm leading-relaxed text-slate-500 md:text-base md:leading-relaxed">
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
