'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

type InsertRow = {
  path: string;
  planet_slug: string | null;
  project_id: string | null;
  first_segment: string;
  session_id: string;
  referrer: string | null;
  ua: string | null;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  let id = localStorage.getItem('sid');
  if (!id) {
    id = (globalThis.crypto?.randomUUID?.() ??
      Math.random().toString(36).slice(2));
    localStorage.setItem('sid', id);
  }
  return id;
}

function parsePath(path: string) {
  const clean = (path || '/').replace(/\/+$/, '');
  const seg = clean.split('/').filter(Boolean);

  const planets = new Set(['business', 'data', 'learning', 'nebula', 'product']);
  const planet_slug = planets.has(seg[0] || '') ? seg[0]! : null;
  const project_id = planet_slug && seg[1] ? seg[1]! : null;
  const first_segment = seg[0] ?? 'home';

  return { planet_slug, project_id, first_segment };
}

export function Analytics() {
  const pathname = usePathname();
  const lastPath = useRef<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = pathname || '/';
    if (lastPath.current === path) return;
    lastPath.current = path;

    const { planet_slug, project_id, first_segment } = parsePath(path);


    const k = `pv:${path}`;
    const last = Number(localStorage.getItem(k) || 0);
    if (Date.now() - last < 30_000) return;
    localStorage.setItem(k, String(Date.now()));

    const row: InsertRow = {
      path,
      planet_slug,
      project_id,
      first_segment,
      session_id: getSessionId(),
      referrer: document.referrer ? document.referrer.slice(0, 255) : null,
      ua: navigator.userAgent ? navigator.userAgent.slice(0, 255) : null
    };

    supabase.from('page_views').insert(row).catch(() => {});
  }, [pathname]);

  return null;
}
