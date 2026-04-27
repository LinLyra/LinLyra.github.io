"use client"

import * as React from "react"

function shouldEnable() {
  if (typeof window === "undefined") return false
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  const fine = window.matchMedia?.("(pointer: fine)")?.matches
  const hover = window.matchMedia?.("(hover: hover)")?.matches
  return !reduced && !!fine && !!hover
}

export function CursorTrail() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    if (!shouldEnable()) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0
    let h = 0
    const dpr = Math.min(2, window.devicePixelRatio || 1)

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    type P = { x: number; y: number; vx: number; vy: number; life: number; hue: number; size: number }
    const pts: P[] = []
    let lastX = 0
    let lastY = 0
    let hasLast = false
    let hue = 190

    const onMove = (e: PointerEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (!hasLast) {
        lastX = x
        lastY = y
        hasLast = true
        return
      }
      const dx = x - lastX
      const dy = y - lastY
      const dist = Math.hypot(dx, dy)
      if (dist < 3) return

      hue = (hue + Math.max(8, dist * 0.8)) % 360
      const n = Math.min(14, Math.max(3, Math.floor(dist / 10)))
      for (let i = 0; i < n; i++) {
        const t = i / n
        const px = lastX + dx * t
        const py = lastY + dy * t
        pts.push({
          x: px,
          y: py,
          vx: -dx * 0.008 + (Math.random() - 0.5) * 0.36,
          vy: -dy * 0.008 + (Math.random() - 0.5) * 0.36,
          life: 1,
          hue: (hue + i * 9) % 360,
          size: 4 + Math.random() * 7,
        })
      }

      lastX = x
      lastY = y
    }

    const onLeave = () => {
      hasLast = false
    }

    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, w, h)

      // fade & integrate
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i]
        p.life -= 0.017
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.965
        p.vy *= 0.965
        if (p.life <= 0) pts.splice(i, 1)
      }

      // draw
      for (const p of pts) {
        const a = Math.max(0, Math.min(1, p.life))
        const r = p.size * a
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 76%, ${0.42 * a})`)
        grad.addColorStop(0.34, `hsla(${(p.hue + 28) % 360}, 100%, 68%, ${0.24 * a})`)
        grad.addColorStop(0.7, `hsla(${(p.hue + 68) % 360}, 100%, 62%, ${0.10 * a})`)
        grad.addColorStop(1, `rgba(0,0,0,0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave, { passive: true } as any)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave as any)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[25]" />
}
