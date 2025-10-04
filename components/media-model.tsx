"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Image as ImageIcon, Play, FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";

type Media = {
  images?: ReadonlyArray<string>;
  videos?: ReadonlyArray<string>;
  documents?: ReadonlyArray<string>;
};

interface MediaModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  media?: Media;
}

export default function MediaModel({ isOpen, onClose, title, media }: MediaModelProps) {
  const images = media?.images ?? [];
  const videos = media?.videos ?? [];
  const documents = media?.documents ?? [];

  const firstTab: "images" | "videos" | "documents" =
    images.length ? "images" : videos.length ? "videos" : "documents";

  const [activeTab, setActiveTab] = useState<"images" | "videos" | "documents">(firstTab);
  const [idx, setIdx] = useState(0);


  useEffect(() => {
    setIdx(0);
  }, [activeTab]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || activeTab !== "images" || images.length === 0) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight") setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
    },
    [isOpen, activeTab, images.length, onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] bg-black/90 backdrop-blur-md border-white/20 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-white">{title}</CardTitle>
          <Button
            onClick={onClose}
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tabs */}
          <div className="flex gap-2 border-b border-white/20">
            {images.length > 0 && (
              <Button
                onClick={() => setActiveTab("images")}
                variant={activeTab === "images" ? "default" : "ghost"}
                className="text-sm"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Images ({images.length})
              </Button>
            )}
            {videos.length > 0 && (
              <Button
                onClick={() => setActiveTab("videos")}
                variant={activeTab === "videos" ? "default" : "ghost"}
                className="text-sm"
              >
                <Play className="w-4 h-4 mr-2" />
                Videos ({videos.length})
              </Button>
            )}
            {documents.length > 0 && (
              <Button
                onClick={() => setActiveTab("documents")}
                variant={activeTab === "documents" ? "default" : "ghost"}
                className="text-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Documents ({documents.length})
              </Button>
            )}
          </div>

          {/* Content */}
          <div className="max-h-[70vh] overflow-hidden">
    
            {activeTab === "images" && images.length > 0 && (
              <div className="flex flex-col gap-3">
               
                <div className="relative h-[48vh] rounded-xl overflow-hidden bg-black/40 border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[idx] || "/placeholder.svg"}
                    alt={`${title} - Image ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                  />

                  <button
                    onClick={() => setIdx((i) => (i === 0 ? images.length - 1 : i - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    aria-label="Prev"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => setIdx((i) => (i === images.length - 1 ? 0 : i + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

             
                  <div className="absolute right-2 bottom-2 text-xs px-2 py-1 rounded bg-black/60 text-gray-200">
                    {idx + 1} / {images.length}
                  </div>
                </div>

      
                <div className="flex gap-2 overflow-x-auto py-1">
                  {images.map((src, i) => (
                    <button
                      key={src + i}
                      onClick={() => setIdx(i)}
                      className={
                        "relative h-16 w-24 flex-none rounded-lg overflow-hidden border " +
                        (i === idx ? "border-fuchsia-400/60" : "border-white/10")
                      }
                      aria-label={`Go to image ${i + 1}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIDEOS */}
            {activeTab === "videos" && videos.length > 0 && (
              <div className="space-y-4 overflow-y-auto pr-1 max-h-[70vh]">
                {videos.map((video, index) => (
                  <div key={index} className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
                    <video controls className="w-full h-full">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}

            {/* DOCUMENTS */}
            {activeTab === "documents" && documents.length > 0 && (
              <div className="space-y-3 overflow-y-auto pr-1 max-h-[70vh]">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">Document {index + 1}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      asChild
                    >
                      <a href={doc} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            )}

 
            {images.length === 0 && videos.length === 0 && documents.length === 0 && (
              <div className="text-center text-gray-400 py-10">No media available.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
