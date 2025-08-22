"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Galaxy } from "./galaxy";
import EnvNight from "@/components/EnvNight";

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function GalaxyBackground() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(hasWebGL()), []);

  const galaxyParams = useMemo(
    () => ({
      count: 120000,
      size: 0.01,
      radius: 8,
      branches: 4,
      spin: 1.8,
      randomness: 0.15,
      randomnessPower: 3,
      insideColor: "#ff6030",
      outsideColor: "#1b3984",
    }),
    []
  );

  if (typeof window === "undefined" || !ready) {
    return <div className="fixed inset-0 z-0 bg-black" />;
  }

  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [8, 4, 8], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={0.3} color="#fff" />

          <EnvNight background={false} />

          <Stars radius={400} depth={80} count={5000} factor={6} saturation={0} fade />
          <Galaxy {...galaxyParams} />

          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            minDistance={3}
            maxDistance={150}
            autoRotate={false}
            autoRotateSpeed={0.5}
            zoomSpeed={1.2}
            panSpeed={1.0}
            rotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
