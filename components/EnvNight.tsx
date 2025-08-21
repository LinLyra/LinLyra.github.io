"use client";
import { Environment, type EnvironmentProps } from "@react-three/drei";

/** 本地 HDR：public/env/dikholo_night_1k.hdr */
export default function EnvNight(props: Omit<EnvironmentProps, "files" | "preset">) {
  return <Environment files="/env/dikholo_night_1k.hdr" {...props} />;
}
