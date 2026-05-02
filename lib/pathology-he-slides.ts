/**
 * H&E / pathology featured carousel — place 6 PNGs in:
 *   public/missions/pathology-he/slide-01.png … slide-06.png
 */
export function pathologyHeSlidePaths(): string[] {
  return Array.from({ length: 6 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0")
    return `/missions/pathology-he/slide-${n}.png`
  })
}
