/**
 * CFA Institute Research Challenge (growth project) — place 8 images in:
 *   public/missions/cfa-growth-research-challenge/slide-01.png … slide-08.png
 */
export function cfaGrowthResearchChallengeSlidePaths(): string[] {
  return Array.from({ length: 8 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0")
    return `/missions/cfa-growth-research-challenge/slide-${n}.png`
  })
}
