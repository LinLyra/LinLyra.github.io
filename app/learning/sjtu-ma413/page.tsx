"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import MediaModel from "@/components/media-model"

export default function SJTU_MA413Page() {
  const [showNotes, setShowNotes] = useState(false)

  const meta = {
    slug: "sjtu-ma413",
    title: "MA413 / STAT3925: Time Series (Advanced)",
    institution: "Shanghai Jiao Tong University (Summer School)",
    term: "2025",
    logo: "/learning/sjtulogo.png",
    status: "Completed" as const,
    tagline:
      "Theory and practice for modelling, inference, and forecasting with ARIMA and spectral methods.",
    tags: ["R/Python", "ARIMA", "ACF/PACF", "Forecasting", "Spectral"],
    notes: [] as string[],
  }

  const outcomes = [
    { k: "Time-series fundamentals", v: "Explained components and performed decomposition and adjustment." },
    { k: "Stationarity & correlograms", v: "Diagnosed weak stationarity; interpreted ACF/PACF and chose models." },
    { k: "Nonstationary processes", v: "Used differencing/integration to handle homogeneous nonstationary series." },
    { k: "ARIMA estimation", v: "Fitted AR/MA/ARMA/ARIMA via MoM/ML; interpreted parameters." },
    { k: "Diagnostics & testing", v: "Conducted residual diagnostics and hypothesis tests to validate models." },
    { k: "Forecasting", v: "Constructed forecasts with intervals for ARIMA-family models." },
    { k: "Spectral analysis", v: "Applied periodograms, spectral density, and lag-window methods." },
    { k: "Financial time series", v: "Applied models to returns and evaluated predictions." },
    { k: "Volatility modelling", v: "Fitted ARCH/GARCH and assessed conditional heteroskedasticity." },
    { k: "Vector models", v: "Explained and used VAR/VARMA for multivariate series." },
  ]

  const reflection =
    "I learned to see time not as noise but structure—ACF/PACF became a language for diagnosing behaviour before modelling."

  const hasNotes = meta.notes.length > 0
  const badge =
    meta.status === "Completed"
      ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
      : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="learning" onSectionChange={() => {}} />
      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/learning"><Button className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"><ArrowLeft className="w-4 h-4 mr-2" />Back to Learning</Button></Link>
            {hasNotes && <Button onClick={() => setShowNotes(true)} className="bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30">View More</Button>}
          </div>

          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
            <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
              <span>{meta.institution}</span><span>•</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {meta.term}</span>
            </div>
          </header>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3"><span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badge}`}>{meta.status}</span></div>
            <div className="p-5 md:p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image src={meta.logo} alt="logo" fill sizes="48px" className="object-cover" priority />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">{meta.tags.map(t => <Badge key={t} className="bg-purple-500/20 text-purple-100 border-purple-500/30">{t}</Badge>)}</div>
                <p className="text-gray-200">{meta.tagline}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Learning Outcomes</h2>
            <ul className="space-y-3 text-gray-2 00">
              {out
