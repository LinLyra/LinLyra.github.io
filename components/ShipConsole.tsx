"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { Clock, Compass, History, Radar, Route, Satellite, Sparkles } from "lucide-react"

export default function ShipConsole() {
  const pathname = usePathname()
  const [time, setTime] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t + 1)
    }, 1000)
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

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  const sectorLabel = useMemo(() => toPrettyRoute(pathname), [pathname])
  const breadcrumbs = useMemo(() => toBreadcrumbs(pathname), [pathname])

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60]">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className={cn(
                "group flex items-end gap-2 rounded-2xl p-1.5",
                "bg-transparent hover:bg-slate-950/30 backdrop-blur-sm transition-colors"
              )}
              aria-label="Open ship console"
            >
              <div className="relative">
                <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-sky-500/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                <AstronautSVG className="h-12 w-12 text-sky-200/95 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]" />
              </div>

              {/* “仪表盘”触发器 */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-transparent blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                <Button
                  type="button"
                  variant="secondary"
                  className={cn(
                    "relative h-11 rounded-2xl border border-sky-400/30 bg-slate-950/70 px-4 text-sky-100",
                    "shadow-[0_0_22px_rgba(56,189,248,0.22)] backdrop-blur",
                    "hover:bg-slate-950/80 hover:shadow-[0_0_26px_rgba(56,189,248,0.32)]"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-xl bg-sky-500/15 ring-1 ring-sky-300/20">
                      <Satellite className="h-4 w-4 text-sky-200" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.22em] text-sky-200/90">
                      CONSOLE
                    </span>
                  </span>
                </Button>
              </div>
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={cn(
              "w-[92vw] border-sky-400/20 bg-slate-950/80 p-5 text-slate-100 backdrop-blur-xl sm:max-w-md",
              "shadow-[0_0_50px_rgba(56,189,248,0.18)]"
            )}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent animate-[ship-scan_2.8s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <SheetHeader className="space-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <SheetTitle className="flex items-center gap-2 text-sky-200">
                    <Radar className="h-5 w-5" />
                    System Status
                  </SheetTitle>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-300/80">
                    <span className="inline-flex items-center gap-1 rounded-md border border-sky-400/20 bg-slate-950/50 px-2 py-1">
                      <Compass className="h-3.5 w-3.5 text-sky-200/80" />
                      Sector
                      <span className="text-sky-100/90">·</span>
                      <span className="font-medium text-sky-100">{sectorLabel}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-sky-400/20 bg-slate-950/50 px-2 py-1">
                      <Clock className="h-3.5 w-3.5 text-sky-200/80" />
                      Mission
                      <span className="text-sky-100/90">·</span>
                      <span className="font-mono text-sky-100">{formatTime(time)}</span>
                    </span>
                  </div>
                </div>

                <div className="hidden shrink-0 sm:block">
                  <AstronautCard />
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-sky-400/15 bg-slate-950/40 p-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-200/70">
                  <Route className="h-4 w-4 text-sky-200/80" />
                  NAVIGATION PATH
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
                      {idx < breadcrumbs.length - 1 ? (
                        <span className="select-none text-slate-500/70">›</span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>
            </SheetHeader>

            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-200/70">
                  <History className="h-4 w-4 text-sky-200/80" />
                  NAVIGATION LOG
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

              <ScrollArea className="h-[46vh] rounded-xl border border-sky-400/15 bg-slate-950/40">
                <div className="space-y-2 p-3">
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
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center rounded-md bg-sky-500/10 ring-1 ring-sky-300/15">
                              <Sparkles className="h-4 w-4 text-sky-200/80" />
                            </span>
                            <div className="min-w-0">
                              <div className="truncate text-sm font-medium text-sky-100/90">
                                {toPrettyRoute(p)}
                              </div>
                              <div className="truncate font-mono text-xs text-slate-400/70">{p}</div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-slate-400/70 group-hover:text-slate-300">
                          Open
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>

              <div className="sm:hidden">
                <AstronautCard />
              </div>
            </div>
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

function AstronautCard() {
  return (
    <div className="relative w-[170px] overflow-hidden rounded-xl border border-sky-400/15 bg-slate-950/40 p-3">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl" />
      <div className="flex items-center gap-3">
        <AstronautSVG className="h-12 w-12" />
        <div className="min-w-0">
          <div className="text-xs font-semibold tracking-[0.18em] text-sky-200/90">CREW</div>
          <div className="truncate text-sm font-medium text-slate-100">Astronaut</div>
          <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-sky-400/15 bg-slate-950/40 px-2 py-1 text-[11px] text-slate-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            All systems nominal
          </div>
        </div>
      </div>
    </div>
  )
}

function AstronautSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-sky-200", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* helmet */}
      <path
        d="M32 7c-10 0-18.2 8.1-18.2 18.2v2.2c0 4.3 1.5 8.4 4.2 11.6v12.6c0 3.6 2.9 6.5 6.5 6.5h15c3.6 0 6.5-2.9 6.5-6.5V39c2.7-3.2 4.2-7.3 4.2-11.6v-2.2C50.2 15.1 42 7 32 7Z"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
      />

      {/* visor */}
      <path
        d="M20.5 26.2c0-6.4 5.1-11.5 11.5-11.5h0c6.4 0 11.5 5.1 11.5 11.5v1.6c0 6.4-5.1 11.5-11.5 11.5h0c-6.4 0-11.5-5.1-11.5-11.5v-1.6Z"
        fill="url(#visor)"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M24 25.6c2.6-2.7 5.3-4 8-4 2.8 0 5.6 1.3 8.4 4"
        stroke="#0b1220"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* backpack */}
      <path
        d="M14.8 36.5c-2.2.6-3.8 2.6-3.8 5v8.2c0 2.9 2.3 5.2 5.2 5.2h2.3"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* torso lines */}
      <path
        d="M22.6 44.2h18.8"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24.2 50.8h15.6"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* chest badge */}
      <path
        d="M37.7 45.9h4.8c.9 0 1.6.7 1.6 1.6v2.4c0 .9-.7 1.6-1.6 1.6h-4.8c-.9 0-1.6-.7-1.6-1.6v-2.4c0-.9.7-1.6 1.6-1.6Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <defs>
        <linearGradient id="visor" x1="20" y1="15" x2="45" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
