/**
 * Temu HK Entry Strategy 2026 featured carousel — assets in:
 *   public/missions/temu-hk-entry-strategy-2026/
 *
 * Naming:
 *   slide-01.png … slide-16.png
 */
export function temuHkEntry2026SlidePaths(): string[] {
  return Array.from({ length: 16 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0")
    return `/missions/temu-hk-entry-strategy-2026/slide-${n}.png`
  })
}

