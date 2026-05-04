"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { recordPageView } from "@/lib/site-analytics"

export function Analytics() {
  const pathname = usePathname()
  const lastPath = useRef("")

  useEffect(() => {
    if (typeof window === "undefined") return
    const path = pathname || "/"
    if (lastPath.current === path) return
    lastPath.current = path
    void recordPageView(path.endsWith("/") ? path : `${path}/`)
  }, [pathname])

  return null
}
