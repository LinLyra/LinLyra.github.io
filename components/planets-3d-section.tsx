"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Planet3D } from "./planet-3d";
import EnvNight from "@/components/EnvNight"; // ✅ 本地 HDR 环境贴图

import { Globe, Moon, Star, Zap, Rocket } from "lucide-react";

export default function Planets3DSection() {
  const [clickedPlanet, setClickedPlanet] = useState<number | null>(null);

  const planets = [
    { id: 1, name: "Experience",    icon: Globe,  color: "#4F8EF7", position: [-6, 0, 0] as [number, number, number], route: "/experience" },
    { id: 2, name: "Learning",      icon: Moon,   color: "#A855F7", position: [-3, 0, 0] as [number, number, number], route: "/learning" },
    { id: 3, name: "Projects",      icon: Star,   color: "#F59E0B", position: [ 0, 0, 0] as [number, number, number], route: "/projects" },
    { id: 4, name: "Competitions",  icon: Zap,    color: "#10B981", position: [ 3, 0, 0] as [number, number, number], route: "/competitions" },
    { id: 5, name: "Activities",    icon: Rocket, color: "#EF4444", position: [ 6, 0, 0] as [number, number, number], route: "/activities" },
  ];

  const handlePlanetClick = (planetId: number, route: string) => {
    setClickedPlanet(planetId);
    setTimeout(() => {
      window.location.href = route;
    }, 500);
  };

  return (
    <section id="planets" className="min-h-screen relative bg-black">
      {/* 顶部文案 */}
      <div className="relative z-20 pt-20 pb-8 text-center">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mx-4 max-w-4xl mx-auto border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Explore Full Journey</h2>
          <p className="text-lg text-gray-200 mb-4">Click on any planet to dive into that aspect of my cosmic journey</p>
          <p className="text-lg text-gray-300">Each world holds stories, experiences, and discoveries waiting to be explored</p>
        </div>
      </div>

      {/* 3D 场景 */}
      <div className="absolute inset-0 top-0">
        <Canvas camera={{ position: [0, 3, 15], fov: 60 }} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F8EF7" />

            {/* ✅ 使用本地 HDR，避免外网请求 6 张图 */}
            <EnvNight background={false} />

            <Stars radius={200} depth={50} count={2000} factor={4} saturation={0} fade />

            {planets.map((planet, index) => (
              <group key={planet.id}>
                <Planet3D
                  position={planet.position}
                  color={planet.color}
                  size={clickedPlanet === planet.id ? 1.5 : 1.2}
                  distort={0.15}
                  speed={0.2 + index * 0.05}
                />
                {/* 点击热区 */}
                <mesh
                  position={planet.position}
                  onClick={() => handlePlanetClick(planet.id, planet.route)}
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                  }}
                  onPointerOut={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = "default";
                  }}
                >
                  <sphereGeometry args={[1.8, 32, 32]} />
                  <meshBasicMaterial transparent opacity={0} />
                </mesh>
              </group>
            ))}

            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              minDistance={8}
              maxDistance={25}
              autoRotate
              autoRotateSpeed={0.3}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* 点击反馈 */}
      {clickedPlanet && (
        <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
          <div className="animate-ping absolute inline-flex h-32 w-32 rounded-full bg-white opacity-20"></div>
          <div className="text-white text-xl font-bold animate-pulse">Entering Planet...</div>
        </div>
      )}
    </section>
  );
}



