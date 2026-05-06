export function bainInstantRetailSlidePaths(): string[] {
  // Expected filenames:
  // public/missions/bain-instant-retail/slide-01.png ... slide-14.png
  const base = "/missions/bain-instant-retail"
  const pad2 = (n: number) => String(n).padStart(2, "0")
  return Array.from({ length: 14 }, (_, i) => `${base}/slide-${pad2(i + 1)}.png`)
}

