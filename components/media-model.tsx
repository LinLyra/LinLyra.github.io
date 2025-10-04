"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

type MediaModelProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  media: {
    images?: string[];
    videos?: string[];
  };
};

export default function MediaModel({
  isOpen,
  onClose,
  title,
  media,
}: MediaModelProps) {
  const items: MediaItem[] = useMemo(() => {
    const imgs = (media.images ?? []).map((src) => ({ type: "image", src } as const));
    const vids = (media.videos ?? []).map((src) => ({ type: "video", src } as const));
    return [...imgs, ...vids];
  }, [media]);

  const [idx, setIdx] = useState(0);

  const hasMedia = items.length > 0;

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, prev, next]);


  if (!isOpen || !hasMedia) return null;

  const current = items[idx];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm">

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>


      {title && (
        <div className="absolute left-4 top-4 truncate text-sm text-white/80">
          {title}
        </div>
      )}


      <div className="relative mx-4 w-[min(92vw,1100px)]">

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-black/40">
          {current.type === "image" ? (
            <Image
              src={current.src}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 1100px"
              className="object-contain"
              priority
            />
          ) : (
            <video
              src={current.src}
              className="h-full w-full object-contain"
              controls
              preload="metadata"
            />
          )}
        </div>

        {items.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-[-14px] top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-[-14px] top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-2 text-center text-xs text-white/70">
              {idx + 1} / {items.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
