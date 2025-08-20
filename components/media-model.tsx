"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, ImageIcon, Play, FileText, Download } from "lucide-react";

type Media = {
  images?: ReadonlyArray<string>;
  videos?: ReadonlyArray<string>;
  documents?: ReadonlyArray<string>;
};

interface MediaModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  media?: Media; // 允许缺省
}

export function MediaModel({ isOpen, onClose, title, media }: MediaModelProps) {
  const images = media?.images ?? [];
  const videos = media?.videos ?? [];
  const documents = media?.documents ?? [];

  const [activeTab, setActiveTab] =
    useState<"images" | "videos" | "documents">(
      images.length ? "images" : videos.length ? "videos" : "documents"
    );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] bg-black/90 backdrop-blur-md border-white/20 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-white">{title} - Media</CardTitle>
          <Button onClick={onClose} size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white" aria-label="Close">
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
          <div className="max-h-96 overflow-y-auto">
            {activeTab === "images" && images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border border-white/20"
                  />
                ))}
              </div>
            )}

            {activeTab === "videos" && videos.length > 0 && (
              <div className="space-y-4">
                {videos.map((video, index) => (
                  <div key={index} className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <video controls className="w-full h-full">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "documents" && documents.length > 0 && (
              <div className="space-y-3">
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

            {/* 没有任何媒体时的占位 */}
            {images.length === 0 && videos.length === 0 && documents.length === 0 && (
              <div className="text-center text-gray-400 py-10">No media available.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

