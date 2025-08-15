"use client"

import type React from "react"

import { useRef, useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, RotateCcw, Palette } from "lucide-react"

interface GlowOrb {
  x: number
  y: number
  color: string
  size: number
  intensity: number
  id: number
}

export function AdvancedGalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentColor, setCurrentColor] = useState("#ff6030")
  const [orbs, setOrbs] = useState<GlowOrb[]>([])
  const [orbId, setOrbId] = useState(0)

  const colorPresets = [
    { color: "#D4A574", name: "Cosmic Dust" },
    { color: "#6366F1", name: "Deep Purple" },
    { color: "#10B981", name: "Nebula Green" },
    { color: "#3B82F6", name: "Star Blue" },
  ]

  const drawGlowOrb = useCallback((x: number, y: number, color: string, size: number, intensity: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create radial gradient for glow effect
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.3, color + "80") // 50% opacity
    gradient.addColorStop(0.6, color + "40") // 25% opacity
    gradient.addColorStop(1, color + "00") // 0% opacity

    // Draw outer glow
    ctx.globalCompositeOperation = "screen"
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(x, y, size * 2.5, 0, Math.PI * 2)
    ctx.fill()

    // Draw bright center
    const centerGradient = ctx.createRadialGradient(x, y, 0, x, y, size)
    centerGradient.addColorStop(0, "#ffffff")
    centerGradient.addColorStop(0.5, color)
    centerGradient.addColorStop(1, color + "80")

    ctx.fillStyle = centerGradient
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fill()

    ctx.globalCompositeOperation = "source-over"
  }, [])

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas with black background
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Redraw all orbs
    orbs.forEach((orb) => {
      drawGlowOrb(orb.x, orb.y, orb.color, orb.size, orb.intensity)
    })
  }, [orbs, drawGlowOrb])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true)
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newOrb: GlowOrb = {
        x,
        y,
        color: currentColor,
        size: Math.random() * 4 + 2, // 2-6px
        intensity: Math.random() * 0.5 + 0.5, // 0.5-1.0
        id: orbId,
      }

      setOrbs((prev) => [...prev, newOrb])
      setOrbId((prev) => prev + 1)
    },
    [currentColor, orbId],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing) return

      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newOrb: GlowOrb = {
        x,
        y,
        color: currentColor,
        size: Math.random() * 3 + 2, // 2-5px
        intensity: Math.random() * 0.5 + 0.5,
        id: orbId,
      }

      setOrbs((prev) => [...prev, newOrb])
      setOrbId((prev) => prev + 1)
    },
    [isDrawing, currentColor, orbId],
  )

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false)
  }, [])

  const clearCanvas = useCallback(() => {
    setOrbs([])
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const downloadGalaxy = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create final canvas
    const finalCanvas = document.createElement("canvas")
    finalCanvas.width = canvas.width
    finalCanvas.height = canvas.height
    const finalCtx = finalCanvas.getContext("2d")
    if (!finalCtx) return

    // Draw the galaxy
    finalCtx.drawImage(canvas, 0, 0)

    // Add welcome text with glow effect
    finalCtx.font = "bold 28px Arial"
    finalCtx.textAlign = "center"
    finalCtx.shadowColor = "#ffffff"
    finalCtx.shadowBlur = 20
    finalCtx.fillStyle = "#ffffff"
    finalCtx.fillText("Welcome to Lyra's Universe", canvas.width / 2, 50)

    finalCtx.font = "18px Arial"
    finalCtx.shadowBlur = 10
    finalCtx.fillText("Your personal galaxy creation", canvas.width / 2, 80)

    // Download
    const link = document.createElement("a")
    link.download = `lyra-universe-galaxy-${Date.now()}.png`
    link.href = finalCanvas.toDataURL()
    link.click()
  }, [])

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 400

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  // Redraw when orbs change
  useEffect(() => {
    redrawCanvas()
  }, [orbs, redrawCanvas])

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-gray-100 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Leave your mark among the stars
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Click and drag to create glowing orbs ✨ — each one becomes a permanent star in my universe, a fragment of eternity we now share.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Advanced Drawing Canvas */}
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="border border-white/20 rounded-lg cursor-crosshair bg-black w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ height: "300px" }}
          />
          <div className="absolute top-2 left-2 text-gray-400 text-xs">Click and drag to create glowing orbs ✨</div>
        </div>

        {/* Color Presets */}
        <div className="flex gap-3 justify-center">
          {colorPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => setCurrentColor(preset.color)}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-300 shadow-lg ${
                currentColor === preset.color
                  ? "border-white/80 scale-110 shadow-white/30"
                  : "border-white/20 hover:border-white/60 hover:scale-105"
              }`}
              style={{
                backgroundColor: preset.color,
                boxShadow: currentColor === preset.color ? `0 0 20px ${preset.color}50` : "none",
              }}
              title={preset.name}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={clearCanvas}
            className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30 transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear Canvas
          </Button>
          <Button
            onClick={downloadGalaxy}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Save Galaxy
          </Button>
        </div>

        <p className="text-gray-400 text-xs text-center italic">
          "Every orb you draw is a story written in light, forever drifting through my cosmic horizon."
        </p>
      </CardContent>
    </Card>
  )
}
