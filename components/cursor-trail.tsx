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

    type P = { x: number; y: number; vx: number; vy: number; life: number }
    const pts: P[] = []
    let lastX = 0
    let lastY = 0
    let hasLast = false

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

      const n = Math.min(10, Math.max(2, Math.floor(dist / 14)))
      for (let i = 0; i < n; i++) {
        const t = i / n
        const px = lastX + dx * t
        const py = lastY + dy * t
        pts.push({
          x: px,
          y: py,
          vx: -dx * 0.006 + (Math.random() - 0.5) * 0.2,
          vy: -dy * 0.006 + (Math.random() - 0.5) * 0.2,
          life: 1,
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
        p.life -= 0.02
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96
        if (p.life <= 0) pts.splice(i, 1)
      }

      // draw
      for (const p of pts) {
        const a = Math.max(0, Math.min(1, p.life))
        const r = 6 * a
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        grad.addColorStop(0, `rgba(147,197,253,${0.22 * a})`)
        grad.addColorStop(0.5, `rgba(99,102,241,${0.10 * a})`)
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

