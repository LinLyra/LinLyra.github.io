/**
 * Aerotropolis carousel images.
 *
 * Put 11 PNGs in `public/missions/aerotropolis/` named:
 *   slide-01.png … slide-11.png
 *
 * (Easiest workflow: rename your exports from Finder to this pattern.)
 */
export function aerotropolisSlidePaths(): string[] {
  return Array.from({ length: 11 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0")
    return `/missions/aerotropolis/slide-${n}.png`
  })
}
