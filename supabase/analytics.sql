-- Lyra portfolio — analytics schema + public aggregates RPC
-- Run in Supabase SQL Editor (or migrate via CLI). Adjust if `page_views` already exists.

-- 1) Table (matches components/analytics + lib/site-analytics inserts)
CREATE TABLE IF NOT EXISTS public.page_views (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  path TEXT NOT NULL,
  planet_slug TEXT,
  project_id TEXT,
  first_segment TEXT NOT NULL,
  session_id TEXT NOT NULL,
  referrer TEXT,
  ua TEXT
);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON public.page_views (session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON public.page_views (path);
CREATE INDEX IF NOT EXISTS idx_page_views_first_segment ON public.page_views (first_segment);
CREATE INDEX IF NOT EXISTS idx_page_views_planet ON public.page_views (planet_slug) WHERE planet_slug IS NOT NULL;

-- 2) RLS: anyone can insert telemetry; raw rows not readable by anon
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon insert page_views" ON public.page_views;
CREATE POLICY "Allow anon insert page_views"
  ON public.page_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Tighten table grants: anon may INSERT only (no raw SELECT of rows)
REVOKE ALL ON TABLE public.page_views FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.page_views TO anon;

-- BIGSERIAL uses a sequence; anon also needs sequence usage to insert rows successfully.
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Dashboard / service_role bypass RLS for admin; do not use service_role in the static site bundle

-- 3) Aggregates for the in-site CONSOLE (no raw row exposure to browsers)
CREATE OR REPLACE FUNCTION public.get_public_stats()
RETURNS JSONB
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT jsonb_build_object(
    'unique_sessions', (SELECT COUNT(DISTINCT session_id) FROM page_views),
    'total_page_views', (SELECT COUNT(*) FROM page_views),
    'top_planet', (
      SELECT jsonb_build_object('slug', planet_slug, 'views', v)
      FROM (
        SELECT planet_slug, COUNT(*)::INT AS v
        FROM page_views
        WHERE planet_slug IS NOT NULL
        GROUP BY planet_slug
        ORDER BY v DESC
        LIMIT 1
      ) p
    ),
    'top_projects', COALESCE((
      SELECT jsonb_agg(jsonb_build_object('path', path, 'views', views) ORDER BY views DESC)
      FROM (
        SELECT TRIM(TRAILING '/' FROM path) AS path, COUNT(*)::INT AS views
        FROM page_views
        WHERE first_segment IN ('business', 'data', 'product')
          AND project_id IS NOT NULL
        GROUP BY 1
        ORDER BY views DESC
        LIMIT 3
      ) s
    ), '[]'::JSONB),
    'top_learning', (
      SELECT jsonb_build_object('path', path, 'views', views)
      FROM (
        SELECT TRIM(TRAILING '/' FROM path) AS path, COUNT(*)::INT AS views
        FROM page_views
        WHERE first_segment = 'learning'
          AND project_id IS NOT NULL
        GROUP BY TRIM(TRAILING '/' FROM path)
        ORDER BY views DESC
        LIMIT 1
      ) l
    ),
    'top_nebula', (
      SELECT jsonb_build_object('path', path, 'views', views)
      FROM (
        SELECT TRIM(TRAILING '/' FROM path) AS path, COUNT(*)::INT AS views
        FROM page_views
        WHERE first_segment = 'nebula'
          AND project_id IS NOT NULL
        GROUP BY TRIM(TRAILING '/' FROM path)
        ORDER BY views DESC
        LIMIT 1
      ) n
    )
  );
$$;

REVOKE ALL ON FUNCTION public.get_public_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_stats() TO anon;
GRANT EXECUTE ON FUNCTION public.get_public_stats() TO authenticated;

-- ─── Optional: admin / SQL Editor queries (run as project owner) ─────────────

-- Total visitors (unique sessions) and page views
-- SELECT COUNT(DISTINCT session_id) AS unique_sessions, COUNT(*) AS page_views FROM page_views;

-- Rough device hint from UA (simple)
-- SELECT
--   CASE
--     WHEN ua ILIKE '%mobile%' OR ua ILIKE '%android%' OR ua ILIKE '%iphone%' THEN 'mobile'
--     ELSE 'desktop'
--   END AS device_bucket,
--   COUNT(*) AS n
-- FROM page_views
-- GROUP BY 1
-- ORDER BY n DESC;

-- First visit time per session (proxy “arrival”)
-- SELECT session_id, MIN(created_at) AS first_seen
-- FROM page_views
-- GROUP BY session_id
-- ORDER BY first_seen DESC
-- LIMIT 100;

-- Full path trail per session (browse journey)
-- SELECT session_id, array_agg(path ORDER BY created_at) AS trail, MIN(created_at) AS started_at
-- FROM page_views
-- GROUP BY session_id
-- ORDER BY started_at DESC
-- LIMIT 50;

-- Views by planet (home planets / section landings)
-- SELECT planet_slug, COUNT(*) AS n FROM page_views WHERE planet_slug IS NOT NULL GROUP BY 1 ORDER BY n DESC;

-- Project detail popularity (business / data / product only)
-- SELECT path, COUNT(*) AS n
-- FROM page_views
-- WHERE first_segment IN ('business','data','product') AND project_id IS NOT NULL
-- GROUP BY path ORDER BY n DESC LIMIT 20;

-- Learning course pages
-- SELECT path, COUNT(*) AS n
-- FROM page_views
-- WHERE first_segment = 'learning' AND project_id IS NOT NULL
-- GROUP BY path ORDER BY n DESC LIMIT 20;

-- Nebula activity opens (requires client to log /nebula/<slug>/ — see Nebula card click)
-- SELECT path, COUNT(*) AS n
-- FROM page_views
-- WHERE first_segment = 'nebula' AND project_id IS NOT NULL
-- GROUP BY path ORDER BY n DESC LIMIT 20;
