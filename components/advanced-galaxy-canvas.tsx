"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, RotateCcw, Palette } from "lucide-react";

type GlowOrb = {
  x: number;
  y: number;
  color: string;
  size: number;
  intensity: number;
  id: number;
};

const withAlpha = (hex: string, a: number) =>
  `${hex}${Math.round(a * 255).toString(16).padStart(2, "0")}`;

export default function AdvancedGalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ff6030");
  const [orbs, setOrbs] = useState<GlowOrb[]>([]);
  const [orbId, setOrbId] = useState(0);

  const colorPresets = [
    { color: "#D4A574", name: "Cosmic Dust" },
    { color: "#6366F1", name: "Deep Purple" },
    { color: "#10B981", name: "Nebula Green" },
    { color: "#3B82F6", name: "Star Blue" },
  ];

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const cssW = Math.max(320, parent ? parent.clientWidth : 600);
    const cssH = 300; // 你原来的高度
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, cssW, cssH);
    }
  }, []);

  const drawGlowOrb = useCallback(
    (x: number, y: number, color: string, size: number, intensity: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const outerR = size * (2.5 + intensity); // 随强度放大光晕
      const g1 = ctx.createRadialGradient(x, y, 0, x, y, outerR);
      g1.addColorStop(0, color);
      g1.addColorStop(0.3, withAlpha(color, 0.5));
      g1.addColorStop(0.6, withAlpha(color, 0.25));
      g1.addColorStop(1, withAlpha(color, 0));

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(x, y, outerR, 0, Math.PI * 2);
      ctx.fill();

      // 中心亮点
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, size);
      g2.addColorStop(0, "#ffffff");
      g2.addColorStop(0.5, color);
      g2.addColorStop(1, withAlpha(color, 0.5));

      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
    },
    []
  );

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 背景
    const cssW = parseFloat(canvas.style.width || "600");
    const cssH = parseFloat(canvas.style.height || "300");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, cssW, cssH);

    // 所有轨迹
    for (const o of orbs) {
      drawGlowOrb(o.x, o.y, o.color, o.size, o.intensity);
    }
  }, [orbs, drawGlowOrb]);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true);
      const { x, y } = getPos(e);
      const newOrb: GlowOrb = {
        x,
        y,
        color: currentColor,
        size: Math.random() * 4 + 2,
        intensity: Math.random() * 0.5 + 0.5,
        id: orbId,
      };
      setOrbs((p) => [...p, newOrb]);
      setOrbId((p) => p + 1);
    },
    [currentColor, orbId]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing) return;
      const { x, y } = getPos(e);
      const newOrb: GlowOrb = {
        x,
        y,
        color: currentColor,
        size: Math.random() * 3 + 2,
        intensity: Math.random() * 0.5 + 0.5,
        id: orbId,
      };
      setOrbs((p) => [...p, newOrb]);
      setOrbId((p) => p + 1);
    },
    [isDrawing, currentColor, orbId]
  );

  const handleMouseUp = useCallback(() => setIsDrawing(false), []);

  const clearCanvas = useCallback(() => {
    setOrbs([]);
    fitCanvas();
  }, [fitCanvas]);

  const downloadGalaxy = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cssW = parseFloat(canvas.style.width || "600");
    const cssH = parseFloat(canvas.style.height || "300");

    // 生成与 CSS 像素一致的导出图
    const final = document.createElement("canvas");
    final.width = cssW;
    final.height = cssH;
    const fctx = final.getContext("2d");
    if (!fctx) return;

    fctx.drawImage(canvas, 0, 0, cssW, cssH);

    fctx.font = "bold 28px Arial";
    fctx.textAlign = "center";
    fctx.shadowColor = "#ffffff";
    fctx.shadowBlur = 20;
    fctx.fillStyle = "#ffffff";
    fctx.fillText("Welcome to Lyra's Universe", cssW / 2, 50);

    const link = document.createElement("a");
    link.download = `lyra-universe-galaxy-${Date.now()}.png`;
    link.href = final.toDataURL("image/png");
    link.click();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    fitCanvas();
    const onResize = () => {
      fitCanvas();
      // 重新绘制已有的轨迹
      setTimeout(redrawCanvas, 0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    redrawCanvas();
  }, [orbs, redrawCanvas]);

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-gray-100 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Leave your mark among the stars
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Click and drag to create glowing orbs ✨ — each one becomes a permanent
          star in my universe, a fragment of eternity we now share.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="border border-white/20 rounded-lg cursor-crosshair bg-black w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            // 高度用 CSS 控制，宽度自适应父容器
            style={{ height: "300px" }}
          />
          <div className="absolute top-2 left-2 text-gray-400 text-xs">
            Click and drag to create glowing orbs ✨
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          {colorPresets.map((preset) => (
            <button
              key={preset.color}
              onClick={() => setCurrentColor(preset.color)}
              className={`h-12 w-12 rounded-full border-2 transition-all duration-300 shadow-lg ${
                currentColor === preset.color
                  ? "border-white/80 scale-110 shadow-white/30"
                  : "border-white/20 hover:border-white/60 hover:scale-105"
              }`}
              style={{
                backgroundColor: preset.color,
                boxShadow:
                  currentColor === preset.color
                    ? `0 0 20px ${withAlpha(preset.color, 0.31)}`
                    : "none",
              }}
              title={preset.name}
            />
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={clearCanvas}
            className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30 transition-all duration-300"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear Canvas
          </Button>
          <Button
            onClick={downloadGalaxy}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30 transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Save Galaxy
          </Button>
        </div>

        <p className="text-center text-xs italic text-gray-400">
          "Every orb you draw is a story written in light, forever drifting
          through my cosmic horizon."
        </p>
      </CardContent>
    </Card>
  );
}

