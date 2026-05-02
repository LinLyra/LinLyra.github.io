import type { OrbitItem } from "@/lib/portfolio-orbit"

/** Dedupe + rank industries across all orbit projects (for homepage capability pills). */
export function deriveIndustryTagsFromOrbit(items: OrbitItem[], max = 20): string[] {
  const counts = new Map<string, number>()
  for (const it of items) {
    for (const raw of it.industries) {
      const key = raw.trim()
      if (!key) continue
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, max)
    .map(([k]) => k)
}
