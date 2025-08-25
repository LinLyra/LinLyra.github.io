"use client";
import { Environment, type EnvironmentProps } from "@react-three/drei";


export default function EnvNight(props: Omit<EnvironmentProps, "files" | "preset">) {
  return <Environment files="/env/dikholo_night_1k.hdr" {...props} />;
}
