"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import {
  BarChart3,
  BookOpen,
  Clock,
  Compass,
  History,
  Orbit,
  Radar,
  RefreshCw,
  Route,
  Satellite,
  Sparkles,
  Users,
} from "lucide-react"

import { fetchPublicStats, type PublicStats } from "@/lib/site-analytics"

export default function ShipConsole() {
  const pathname = usePathname()
  const [time, setTime] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [stats, setStats] = useState<PublicStats | null>(null)
  const [statsLoading, setStatsLoading] = useState(false)
  const [statsError, setStatsError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("nav-history") || "[]")
      const prev = Array.isArray(stored) ? stored : []
      const updated = [pathname, ...prev.filter((p: string) => p !== pathname)].slice(0, 8)
      localStorage.setItem("nav-history", JSON.stringify(updated))
      setHistory(updated)
    } catch {
      setHistory([pathname])
      localStorage.setItem("nav-history", JSON.stringify([pathname]))
    }
  }, [pathname])

  const loadStats = useCallback(async () => {
    setStatsLoading(true)
    setStatsError(null)
    try {
      const data = await fetchPublicStats()
      setStats(data)
      if (!data) {
        setStatsError(
          "No stats yet. Set NEXT_PUBLIC_SUPABASE_* in .env.local and run supabase/analytics.sql in the SQL editor."
        )
      }
    } catch (e) {
      setStatsError(e instanceof Error ? e.message : "Failed to load stats")
    } finally {
      setStatsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    void loadStats()
    const id = window.setInterval(() => void loadStats(), 25000)
    return () => window.clearInterval(id)
  }, [open, loadStats])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  const sectorLabel = useMemo(() => toPrettyRoute(pathname), [pathname])
  const breadcrumbs = useMemo(() => toBreadcrumbs(pathname), [pathname])

  const planetLabel = (slug: string | undefined) => {
    if (!slug) return "—"
    return slug.slice(0, 1).toUpperCase() + slug.slice(1)
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60]">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="secondary"
              className="group relative h-11 rounded-2xl border border-sky-400/30 bg-slate-950/70 px-4 text-sky-100 shadow-[0_0_22px_rgba(56,189,248,0.22)] backdrop-blur hover:bg-slate-950/80 hover:shadow-[0_0_26px_rgba(56,189,248,0.32)]"
              aria-label="Open ship console"
            >
              <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-500/12 via-indigo-500/10 to-transparent blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-sky-500/15 ring-1 ring-sky-300/20">
                  <Satellite className="h-4 w-4 text-sky-200" />
                </span>
                <span className="text-xs font-semibold tracking-[0.22em] text-sky-200/90">CONSOLE</span>
              </span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={cn(
              "flex w-[92vw] flex-col border-sky-400/20 bg-slate-950/85 p-0 text-slate-100 backdrop-blur-xl sm:max-w-lg",
              "shadow-[0_0_50px_rgba(56,189,248,0.18)]"
            )}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent animate-[ship-scan_2.8s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative border-b border-white/[0.06] p-5 pb-4">
              <SheetHeader className="space-y-1 text-left">
                <div className="flex items-start justify-between gap-3">
                  <SheetTitle className="flex items-center gap-2 text-sky-200">
                    <Radar className="h-5 w-5 shrink-0" />
                    Mission console
                  </SheetTitle>
                  <button
                    type="button"
                    onClick={() => void loadStats()}
                    className="inline-flex items-center gap-1 rounded-lg border border-sky-400/25 bg-slate-950/50 px-2.5 py-1.5 text-[11px] font-medium text-sky-100/90 hover:bg-sky-500/10"
                  >
                    <RefreshCw className={cn("h-3.5 w-3.5", statsLoading && "animate-spin")} />
                    Sync
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex items-center gap-1 rounded-md border border-sky-400/20 bg-slate-950/50 px-2 py-1">
                    <Compass className="h-3.5 w-3.5 text-sky-200/80" />
                    Sector
                    <span className="text-sky-100/90">·</span>
                    <span className="font-medium text-sky-100">{sectorLabel}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md border border-sky-400/20 bg-slate-950/50 px-2 py-1">
                    <Clock className="h-3.5 w-3.5 text-sky-200/80" />
                    Elapsed
                    <span className="text-sky-100/90">·</span>
                    <span className="font-mono text-sky-100">{formatTime(time)}</span>
                  </span>
                </div>
              </SheetHeader>

              <div className="mt-3 rounded-xl border border-sky-400/15 bg-slate-950/40 p-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-200/70">
                  <Route className="h-4 w-4 text-sky-200/80" />
                  PATH
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-sm">
                  {breadcrumbs.map((b, idx) => (
                    <span key={`${b.href}-${idx}`} className="flex items-center gap-1.5">
                      <Link
                        href={b.href}
                        className="rounded-md px-2 py-1 text-sky-100/90 hover:bg-sky-500/10 hover:text-sky-50"
                        onClick={() => setOpen(false)}
                      >
                        {b.label}
                      </Link>
                      {idx < breadcrumbs.length - 1 ? <span className="select-none text-slate-500/70">›</span> : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ScrollArea className="min-h-0 flex-1">
              <div className="space-y-4 p-5">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-slate-200/70">
                    <BarChart3 className="h-4 w-4 text-emerald-300/90" />
                    SITE PULSE
                  </div>
                  {statsError ? (
                    <p className="rounded-lg border border-amber-400/25 bg-amber-500/10 px-3 py-2 text-xs leading-relaxed text-amber-100/90">
                      {statsError}
                    </p>
                  ) : null}
                  <div className="grid grid-cols-2 gap-2">
                    <StatTile
                      icon={<Users className="h-4 w-4 text-sky-200" />}
                      label="Unique visitors"
                      value={stats?.unique_sessions ?? "—"}
                      hint="Distinct sessions"
                    />
                    <StatTile
                      icon={<Sparkles className="h-4 w-4 text-violet-200" />}
                      label="Page views"
                      value={stats?.total_page_views ?? "—"}
                      hint="All logged views"
                    />
                    <StatTile
                      icon={<Orbit className="h-4 w-4 text-emerald-200" />}
                      label="Top planet"
                      value={
                        stats?.top_planet?.slug
                          ? `${planetLabel(stats.top_planet.slug)} · ${stats.top_planet.views}`
                          : "—"
                      }
                      hint="Business / Data / Product / Learning"
                    />
                    <StatTile
                      icon={<BookOpen className="h-4 w-4 text-amber-200" />}
                      label="Hot course"
                      value={
                        stats?.top_learning?.path
                          ? `${prettyPathTail(stats.top_learning.path)} · ${stats.top_learning.views}`
                          : "—"
                      }
                      hint="Learning · top 1"
                    />
                    <StatTile
                      className="col-span-2"
                      icon={<Sparkles className="h-4 w-4 text-rose-200" />}
                      label="Top activity (Nebula)"
                      value={
                        stats?.top_nebula?.path
                          ? `${prettyPathTail(stats.top_nebula.path)} · ${stats.top_nebula.views}`
                          : "—"
                      }
                      hint="Opens from activity cards"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-slate-200/70">
                    <Layers className="h-4 w-4 text-cyan-200/90" />
                    TOP PROJECTS
                  </div>
                  <p className="mb-2 text-[10px] text-slate-500">Business · Data · Product (top 3 by views)</p>
                  <div className="space-y-2">
                    {(stats?.top_projects?.length ? stats.top_projects : []).map((row, i) => (
                      <div
                        key={`${row.path}-${i}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-sky-400/12 bg-slate-950/35 px-3 py-2"
                      >
                        <span className="min-w-0 truncate text-sm text-sky-50/95">{prettyPathTail(row.path)}</span>
                        <span className="shrink-0 font-mono text-xs text-slate-400">{row.views}</span>
                      </div>
                    ))}
                    {!stats?.top_projects?.length && !statsLoading ? (
                      <p className="text-xs text-slate-500">No project detail views yet.</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-slate-200/70">
                      <History className="h-4 w-4 text-sky-200/80" />
                      LOCAL LOG
                    </div>
                    <button
                      type="button"
                      className="rounded-md px-2 py-1 text-xs text-slate-300/70 hover:bg-slate-900/40 hover:text-slate-200"
                      onClick={() => {
                        localStorage.removeItem("nav-history")
                        setHistory([pathname])
                      }}
                    >
                      Reset
                    </button>
                  </div>
                  <div className="mt-2 space-y-2">
                    {history.map((p) => (
                      <Link
                        key={p}
                        href={p}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group block rounded-lg border border-sky-400/10 bg-slate-950/30 p-3 transition",
                          "hover:border-sky-400/25 hover:bg-slate-900/40"
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center rounded-md bg-sky-500/10 ring-1 ring-sky-300/15">
                              <Sparkles className="h-4 w-4 text-sky-200/80" />
                            </span>
                            <span className="truncate text-sm font-medium text-sky-100/90">{toPrettyRoute(p)}</span>
                          </div>
                          <span className="text-xs text-slate-400/70 group-hover:text-slate-300">Open</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <style jsx global>{`
        @keyframes ship-scan {
          0% {
            transform: translateX(-100%);
            opacity: 0.15;
          }
          35% {
            opacity: 0.65;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.15;
          }
        }
      `}</style>
    </>
  )
}

function StatTile({
  icon,
  label,
  value,
  hint,
  className,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  hint?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.07] bg-slate-950/45 p-3 shadow-inner shadow-black/20",
        className
      )}
    >
      <div className="flex items-center gap-2 text-slate-300/90">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-white/[0.06]">
          {icon}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</span>
      </div>
      <div className="mt-2 break-words text-sm font-semibold leading-snug text-slate-50">{value}</div>
      {hint ? <p className="mt-1 text-[10px] leading-tight text-slate-500">{hint}</p> : null}
    </div>
  )
}

function Layers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function prettyPathTail(path: string) {
  const cleaned = (path || "").replace(/\/+$/, "")
  const parts = cleaned.split("/").filter(Boolean)
  const last = parts[parts.length - 1] ?? path
  return titleize(last.replace(/-/g, " "))
}

function toPrettyRoute(pathname: string) {
  const cleaned = (pathname || "/").split("?")[0].split("#")[0]
  if (cleaned === "/" || cleaned === "") return "Home"
  const parts = cleaned.split("/").filter(Boolean)
  const last = parts[parts.length - 1] ?? ""
  return titleize(last.replace(/-/g, " "))
}

function toBreadcrumbs(pathname: string) {
  const cleaned = (pathname || "/").split("?")[0].split("#")[0]
  const parts = cleaned.split("/").filter(Boolean)
  const crumbs = [{ href: "/", label: "Home" }]
  let acc = ""
  for (const part of parts) {
    acc += `/${part}`
    crumbs.push({ href: `${acc}/`, label: titleize(part.replace(/-/g, " ")) })
  }
  return crumbs
}

function titleize(s: string) {
  return s
    .split(" ")
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" ")
}
