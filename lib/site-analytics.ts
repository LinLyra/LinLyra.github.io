import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export type PageViewInsert = {
  path: string
  planet_slug: string | null
  project_id: string | null
  first_segment: string
  session_id: string
  referrer: string | null
  ua: string | null
}

export function getBrowserSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export function parseAnalyticsPath(path: string) {
  const raw = (path || "/").split("?")[0].split("#")[0]
  const clean = raw.replace(/\/+$/, "") || "/"
  const seg = clean.split("/").filter(Boolean)
  const planets = new Set(["business", "data", "learning", "nebula", "product"])
  const planet_slug = planets.has(seg[0] || "") ? seg[0]! : null
  const project_id = planet_slug && seg[1] ? seg[1]! : null
  const first_segment = seg[0] ?? "home"
  return { planet_slug, project_id, first_segment }
}

function getSessionId(): string {
  if (typeof window === "undefined") return "server"
  let id = localStorage.getItem("sid")
  if (!id) {
    id = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)
    localStorage.setItem("sid", id)
  }
  return id
}

/** Record a page or virtual path (e.g. /nebula/slug/). Dedupes rapid repeats within 30s per path. */
export async function recordPageView(path: string): Promise<void> {
  if (typeof window === "undefined") return
  const supabase = getBrowserSupabase()
  if (!supabase) return

  const normalized = path.startsWith("/") ? path : `/${path}`
  const { planet_slug, project_id, first_segment } = parseAnalyticsPath(normalized)

  const k = `pv:${normalized}`
  const last = Number(localStorage.getItem(k) || 0)
  if (Date.now() - last < 30_000) return
  localStorage.setItem(k, String(Date.now()))

  const row: PageViewInsert = {
    path: normalized,
    planet_slug,
    project_id,
    first_segment,
    session_id: getSessionId(),
    referrer: document.referrer ? document.referrer.slice(0, 255) : null,
    ua: navigator.userAgent ? navigator.userAgent.slice(0, 255) : null,
  }

  const { error } = await supabase.from("page_views").insert(row)
  if (error && process.env.NODE_ENV === "development") {
    console.warn("[analytics] page_views insert:", error.message)
  }
}

export type PublicStats = {
  unique_sessions: number
  total_page_views: number
  top_planet: { slug: string; views: number } | null
  top_projects: { path: string; views: number }[]
  top_learning: { path: string; views: number } | null
  top_nebula: { path: string; views: number } | null
}

export async function fetchPublicStats(): Promise<PublicStats | null> {
  const supabase = getBrowserSupabase()
  if (!supabase) return null
  const { data, error } = await supabase.rpc("get_public_stats")
  if (error) {
    // Surface the real cause to the UI; this is usually missing SQL (RPC not created) or missing grants.
    throw new Error(error.message)
  }
  return data as PublicStats
}
