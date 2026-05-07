"use client"

import dynamic from "next/dynamic"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Satellite } from "lucide-react"

const ShipConsole = dynamic(() => import("@/components/ShipConsole"), {
  ssr: false,
  loading: () => null,
})

export default function ShipConsoleLazy() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  if (mounted) {
    return (
      <ShipConsole
        autoOpen={open}
        hideTrigger
        onOpenChange={(v) => {
          setOpen(v)
          if (!v) setMounted(false)
        }}
      />
    )
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <Button
        type="button"
        variant="secondary"
        className="group relative h-11 rounded-2xl border border-sky-400/30 bg-slate-950/70 px-4 text-sky-100 shadow-[0_0_22px_rgba(56,189,248,0.22)] backdrop-blur hover:bg-slate-950/80 hover:shadow-[0_0_26px_rgba(56,189,248,0.32)]"
        aria-label="Open ship console"
        onClick={() => {
          setMounted(true)
          setOpen(true)
        }}
      >
        <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-500/12 via-indigo-500/10 to-transparent blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-xl bg-sky-500/15 ring-1 ring-sky-300/20">
            <Satellite className="h-4 w-4 text-sky-200" />
          </span>
          <span className="text-xs font-semibold tracking-[0.22em] text-sky-200/90">CONSOLE</span>
        </span>
      </Button>
    </div>
  )
}

