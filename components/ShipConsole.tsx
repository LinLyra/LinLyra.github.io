"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

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
                <span className="text-xs font-semibold tracking-[0.22em] text-sky-200/90">
                  CONSOLE
                </span>
              </span>
            </Button>
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

