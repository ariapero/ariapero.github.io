"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface ViewerImage {
  src: string;
  alt: string;
}

interface ImageViewerProps {
  images: ViewerImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  bgOpacity?: number;
}

export const ImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  bgOpacity = 90,
}: ImageViewerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center`}
      style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity / 100})` }}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1200}
            height={800}
            className="max-h-[85vh] w-auto mx-auto object-contain"
          />

          <button
            className="absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/75"
                onClick={onPrevious}
              >
                <ChevronLeft size={30} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/75"
                onClick={onNext}
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};
