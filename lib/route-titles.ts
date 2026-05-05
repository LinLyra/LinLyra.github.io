"use client"

import { orbitItems } from "@/lib/portfolio-orbit"
import { learningItems } from "@/lib/learning-items"
import { nebulaActivities } from "@/lib/nebula-activities"

function normalizePath(path: string) {
  const raw = (path || "/").split("?")[0].split("#")[0]
  const clean = raw.startsWith("/") ? raw : `/${raw}`
  return clean.replace(/\/+$/, "") || "/"
}

export function titleForPath(path: string): string | null {
  const p = normalizePath(path)
  if (p === "/") return "Home"

  const parts = p.split("/").filter(Boolean)
  const seg0 = parts[0]
  const seg1 = parts[1]

  if (!seg0) return null
  if (!seg1) {
    // planet landing pages
    return seg0.slice(0, 1).toUpperCase() + seg0.slice(1)
  }

  if (seg0 === "learning") {
    const hit = learningItems.find((x) => x.slug === seg1)
    return hit?.title ?? null
  }

  if (seg0 === "nebula") {
    const hit = nebulaActivities.find((x) => x.slug === seg1)
    return hit?.title ?? null
  }

  // business / data / product
  const href = `/${seg0}/${seg1}`
  const hit = orbitItems.find((x) => x.href === href)
  return hit?.title ?? null
}

