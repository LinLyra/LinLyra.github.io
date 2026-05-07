"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Planet3D } from "./planet-3d";
import EnvNight from "@/components/EnvNight";
import { useLowPowerWebGL } from "@/lib/use-low-power-webgl";

import { BookOpen, Database, Briefcase, Package, Sparkles } from "lucide-react";

export default function Planets3DSection() {
  const [clickedPlanet, setClickedPlanet] = useState<number | null>(null);
  const router = useRouter();
  const lowPower = useLowPowerWebGL();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.some((e) => e.isIntersecting);
        if (vis) setInView(true);
      },
      { root: null, rootMargin: "280px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);


  const planets = [
    { id: 1, name: "Learning", icon: BookOpen, color: "#A855F7", position: [-6, 0, 0] as [number, number, number], route: "/learning" },
    { id: 2, name: "Data",     icon: Database, color: "#4F8EF7", position: [-3, 0, 0] as [number, number, number], route: "/data" },
    { id: 3, name: "Business", icon: Briefcase,color: "#10B981", position: [ 0, 0, 0] as [number, number, number], route: "/business" },
    { id: 4, name: "Product",  icon: Package,  color: "#F59E0B", position: [ 3, 0, 0] as [number, number, number], route: "/product" },
    { id: 5, name: "Nebula",   icon: Sparkles, color: "#EF4444", position: [ 6, 0, 0] as [number, number, number], route: "/nebula" },
  ];

  const handlePlanetClick = (planetId: number, route: string) => {
    setClickedPlanet(planetId);
    setTimeout(() => {
      router.push(route); 
    }, 500);
  };

  return (
    <section ref={sectionRef as any} id="planets" className="min-h-screen snap-start relative bg-black">
 
      <div className="relative z-20 pt-20 pb-8 text-center">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mx-4 max-w-4xl mx-auto border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Explore Full Journey</h2>
          <p className="text-lg text-gray-200 mb-4">Click on any planet to dive into that aspect of my cosmic journey</p>
          <p className="text-lg text-gray-300">Each world holds stories, experiences, and discoveries waiting to be explored</p>
        </div>
      </div>


      <div className="absolute inset-0 top-0">
        {inView ? (
          <Canvas
            camera={{ position: [0, 3, 15], fov: 60 }}
            dpr={lowPower ? 1 : [1, 1.5]}
            gl={{
              antialias: !lowPower,
              powerPreference: lowPower ? "low-power" : "high-performance",
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F8EF7" />
              <EnvNight background={false} />
              <Stars
                radius={200}
                depth={50}
                count={lowPower ? 800 : 2000}
                factor={4}
                saturation={0}
                fade
              />

              {planets.map((planet, index) => (
                <group key={planet.id}>
                  <Planet3D
                    position={planet.position}
                    color={planet.color}
                    size={clickedPlanet === planet.id ? 1.5 : 1.2}
                    distort={lowPower ? 0.08 : 0.15}
                    speed={lowPower ? 0.12 + index * 0.03 : 0.2 + index * 0.05}
                    sphereSegments={lowPower ? 24 : 48}
                  />

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
                    <sphereGeometry args={[1.8, lowPower ? 16 : 28, lowPower ? 16 : 28]} />
                    <meshBasicMaterial transparent opacity={0} />
                  </mesh>
                </group>
              ))}

              <OrbitControls
                // Allow page scrolling through this section: wheel zoom will "trap" scroll.
                enablePan={false}
                enableZoom={false}
                enableRotate
                minDistance={8}
                maxDistance={25}
                autoRotate
                autoRotateSpeed={lowPower ? 0.22 : 0.55}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 3}
              />
            </Suspense>
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}
      </div>


      {clickedPlanet && (
        <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
          <div className="animate-ping absolute inline-flex h-32 w-32 rounded-full bg-white opacity-20"></div>
          <div className="text-white text-xl font-bold animate-pulse">Entering Planet...</div>
        </div>
      )}
    </section>
  );
}




