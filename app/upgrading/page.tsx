"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Rocket, Wrench, Stars, Clock } from "lucide-react"

type Section = {
  title: string
  href: string
  status: "Updating" | "Coming Soon" | "In Progress"
  blurb: string
}

export default function UpgradingPage() {
  const sections: Section[] = useMemo(
    () => [
      {
        title: "Learning",
        href: "/learning",
        status: "Updating",
        blurb: "Polishing cards, keywords & filters.",
      },
      {
        title: "Experience",
        href: "/experience",
        status: "Updating",
        blurb: "Refining roles, skills, and logos.",
      },
      {
        title: "Projects",
        href: "/projects",
        status: "Coming Soon",
        blurb: "Demos, write-ups, and links incoming.",
      },
      {
        title: "Competitions",
        href: "/competitions",
        status: "Updating",
        blurb: "Adding summaries & tag search.",
      },
      {
        title: "Activities",
        href: "/activities",
        status: "In Progress",
        blurb: "Company talks, tours, volunteer events.",
      },
      {
        title: "About",
        href: "/about",
        status: "Coming Soon",
        blurb: "A tiny origin story of this universe.",
      },
      {
        title: "Contact",
        href: "/contact",
        status: "Coming Soon",
        blurb: "Say hi — collaboration & opportunities.",
      },
    ],
    []
  )

  const badge = (s: Section["status"]) => {
    const base =
      "inline-flex items-center h-6 rounded-full px-2.5 text-xs border whitespace-nowrap backdrop-blur-sm"
    if (s === "Updating") return `${base} bg-purple-600/25 text-purple-100 border-purple-400/40`
    if (s === "In Progress") return `${base} bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40`
    return `${base} bg-white/10 text-gray-200 border-white/20` // Coming Soon
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top nav */}
      <Navigation activeSection="" onSectionChange={() => {}} />

      {/* Starfield / nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,0,204,0.25),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(147,51,234,0.25),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(236,72,153,0.20),transparent_55%)]" />
        <div className="stars" />
      </div>

      <main className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-5 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white hover:bg-white/20 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Universe
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Universe Upgrading
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Pieces are docking, stars are aligning — I’m actively expanding this
            space. Some constellations are live, others are spawning soon.
          </p>

          {/* status legend */}
          <div className="mt-5 flex items-center justify-center gap-3 text-xs text-gray-300">
            <span className={badge("Updating")}>
              <Wrench className="w-3 h-3 mr-1" /> Updating
            </span>
            <span className={badge("In Progress")}>
              <Clock className="w-3 h-3 mr-1" /> In Progress
            </span>
            <span className={badge("Coming Soon")}>
              <Stars className="w-3 h-3 mr-1" /> Coming Soon
            </span>
          </div>
        </div>

        {/* cards */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.title} href={s.href} className="block">
              <div className="relative h-full min-h-[160px] rounded-2xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur-md overflow-hidden">
                {/* status badge */}
                <div className="absolute right-3 top-3 z-20">
                  <span className={badge(s.status)}>{s.status}</span>
                </div>

                {/* tiny logo block left-top to echo your card style */}
                <div className="flex items-start gap-4 p-5 pt-10">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Rocket className="w-6 h-6 text-fuchsia-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-xl font-semibold leading-snug">{s.title}</h3>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">{s.blurb}</p>
                  </div>
                </div>

                {/* subtle bottom glow divider */}
                <div className="px-5 pb-5">
                  <div className="h-[1px] w-full bg-gradient-to-r from-fuchsia-500/30 via-purple-400/30 to-transparent rounded-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* footer hint */}
        <div className="max-w-6xl mx-auto text-center mt-10 text-gray-400">
          If you run into a 404, it just means that star hasn’t fully formed yet ✨
        </div>
      </main>

      {/* local stars css */}
      <style jsx global>{`
        .stars {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0)) ,
            radial-gradient(1.5px 1.5px at 70% 40%, rgba(255,255,255,0.7), rgba(255,255,255,0)) ,
            radial-gradient(1.5px 1.5px at 30% 80%, rgba(255,255,255,0.6), rgba(255,255,255,0)) ,
            radial-gradient(1px 1px at 80% 75%, rgba(255,255,255,0.5), rgba(255,255,255,0));
          animation: twinkle 6s linear infinite;
          opacity: 0.6;
        }
        @keyframes twinkle {
          0% { opacity: 0.6; }
          50% { opacity: 0.9; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
