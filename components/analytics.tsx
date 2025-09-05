// components/analytics.tsx
'use client';

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function getSessionId() {
  let id = localStorage.getItem("sid");
  if (!id) {
    id = (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));
    localStorage.setItem("sid", id);
  }
  return id;
}

export function Analytics() {
  const pathname = usePathname();
  const lastPath = useRef<string>("");

  useEffect(() => {
    const path = pathname || "/";
    if (lastPath.current === path) return;
    lastPath.current = path;

    const seg = path.split("/").filter(Boolean);
    const planet_slug =
      seg[0] === "planets" ? (seg[1] ?? null) : null;
    const project_id =
      seg[0] === "planets" && seg[2] === "projects" ? (seg[3] ?? null)
      : seg[0] === "projects" ? (seg[1] ?? null)
      : null;

    const k = `pv:${path}`;
    const last = Number(localStorage.getItem(k) || 0);
    if (Date.now() - last < 30_000) return;
    localStorage.setItem(k, String(Date.now()));

    supabase.from("page_views").insert({
      path,
      planet_slug,
      project_id,
      session_id: getSessionId(),
      referrer: document.referrer?.slice(0, 255) || null,
      ua: navigator.userAgent.slice(0, 255),
    }).catch(() => {  });
  }, [pathname]);

  return null;
}
