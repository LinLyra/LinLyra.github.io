"use client";

import { useEffect, useState } from "react";

function computeLowPower(): boolean {
  if (typeof window === "undefined") return true;
  const narrow = window.innerWidth < 768;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return narrow || coarse || reduce;
}

/** Fewer particles, lower DPR, simpler meshes on phones / tablets / reduced-motion. */
export function useLowPowerWebGL(): boolean {
  const [low, setLow] = useState(() =>
    typeof window !== "undefined" ? computeLowPower() : true,
  );

  useEffect(() => {
    setLow(computeLowPower());
    const onResize = () => setLow(computeLowPower());
    window.addEventListener("resize", onResize);
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqCoarse = window.matchMedia("(pointer: coarse)");
    const onMq = () => setLow(computeLowPower());
    mqMotion.addEventListener("change", onMq);
    mqCoarse.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("resize", onResize);
      mqMotion.removeEventListener("change", onMq);
      mqCoarse.removeEventListener("change", onMq);
    };
  }, []);

  return low;
}
