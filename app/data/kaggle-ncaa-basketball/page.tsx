"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Wrench, Clock, Stars } from "lucide-react"

export default function UpgradingProjectPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 蓝色星球背景 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0b12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <main className="relative z-10 pt-20 p-6">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/data"
            className="inline-flex items-center gap-2 mb-5 rounded-xl border border-blue-400/30 bg-white/10 px-3 py-2 text-white hover:bg-white/20 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Data
          </Link>

          {/* 项目标题（你可以替换成 meta.title） */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Kaggle NCAA Basketball Analytics
          </h1>
          <p className="text-gray-300 mb-8">
            This project is currently being upgraded.  
          </p>

          {/* 状态说明 */}
          <div className="flex justify-center gap-4 text-sm text-gray-300">
            <span className="inline-flex items-center h-7 rounded-full px-3 bg-blue-500/20 border border-blue-400/30 text-blue-100">
              <Wrench className="w-3 h-3 mr-1" /> Updating
            </span>
            <span className="inline-flex items-center h-7 rounded-full px-3 bg-cyan-500/20 border border-cyan-400/30 text-cyan-100">
              <Clock className="w-3 h-3 mr-1" /> In Progress
            </span>
            <span className="inline-flex items-center h-7 rounded-full px-3 bg-white/10 border border-white/20 text-gray-200">
              <Stars className="w-3 h-3 mr-1" /> Coming Soon
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
