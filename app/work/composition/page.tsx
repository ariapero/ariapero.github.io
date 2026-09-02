"use client";

// TODO: sheet music zoom view -> when max-zoomed-in, x-out button is partially hidden behind sheet music view; x-out button should always be on top
// TODO: audio player, scroll to top components already in sound design page; image viewer on poetry page - reuse
// TODO: add miku

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Asterisk,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUp,
  Play,
  Pause,
} from "lucide-react";

interface CompositionImage {
  src: string;
  alt: string;
}

interface Composition {
  title: string;
  subtitle: string;
  year: string;
  images: CompositionImage[];
  audioFiles: { src: string; label: string }[];
  status: "completed" | "wip";
}

const compositions: Composition[] = [
  {
    title: 'Variations on "Rolling Girl" (Wowaka)',
    subtitle: "for string quartet",
    year: "2023",
    images: [
      {
        src: "/compositions/rolling-girl/page-1.png",
        alt: "Rolling Girl sheet music, page 1",
      },
      {
        src: "/compositions/rolling-girl/page-2.png",
        alt: "Rolling Girl sheet music, page 2",
      },
      {
        src: "/compositions/rolling-girl/page-3.png",
        alt: "Rolling Girl sheet music, page 3",
      },
      {
        src: "/compositions/rolling-girl/page-4.png",
        alt: "Rolling Girl sheet music, page 4",
      },
    ],
    audioFiles: [
      {
        src: "/compositions/rolling-girl/playback.mp3",
        label: "MuseScore Playback",
      },
      {
        src: "/compositions/rolling-girl/original.mp3",
        label: "Original song by Wowaka",
      },
    ],
    status: "completed",
  },
  {
    title: 'Variations on "Miku" (Anamanaguchi)',
    subtitle: "for string quartet",
    year: "2023",
    images: [
      { src: "/compositions/miku/page-1.png", alt: "Miku sheet music, page 1" },
      { src: "/compositions/miku/page-2.png", alt: "Miku sheet music, page 2" },
      { src: "/compositions/miku/page-3.png", alt: "Miku sheet music, page 3" },
    ],
    audioFiles: [
      { src: "/compositions/miku/playback.mp3", label: "MuseScore Playback" },
      {
        src: "/compositions/miku/original.mp3",
        label: "Original song by Anamanaguchi",
      },
    ],
    status: "wip",
  },
  {
    title: "a fairly sad tale",
    subtitle: '"art song" for soprano + piano accompaniment',
    year: "2023",
    images: [
      {
        src: "/compositions/sad-tale/page-1.png",
        alt: "a fairly sad tale sheet music, page 1",
      },
      {
        src: "/compositions/sad-tale/page-2.png",
        alt: "a fairly sad tale sheet music, page 2",
      },
      {
        src: "/compositions/sad-tale/page-3.png",
        alt: "a fairly sad tale sheet music, page 3",
      },
      {
        src: "/compositions/sad-tale/page-4.png",
        alt: "a fairly sad tale sheet music, page 4",
      },
      {
        src: "/compositions/sad-tale/page-5.png",
        alt: "a fairly sad tale sheet music, page 5",
      },
      {
        src: "/compositions/sad-tale/page-6.png",
        alt: "a fairly sad tale sheet music, page 6",
      },
    ],
    audioFiles: [
      {
        src: "/compositions/sad-tale/playback.mp3",
        label: "MuseScore Playback",
      },
    ],
    status: "completed", // Final V3
  },
  {
    title: "Hope is the thing with feathers",
    subtitle: "for SAB voices",
    year: "2023",
    images: [
      {
        src: "/compositions/hope/page-1.png",
        alt: "Hope is the thing with feathers sheet music, page 1",
      },
      {
        src: "/compositions/hope/page-2.png",
        alt: "Hope is the thing with feathers sheet music, page 2",
      },
    ],
    audioFiles: [
      { src: "/compositions/hope/playback.mp3", label: "MuseScore Playback" },
    ],
    status: "completed",
  },
  {
    title: "Y como dormida",
    subtitle: "for string quartet",
    year: "2022",
    images: [
      {
        src: "/compositions/dormida/page-1.png",
        alt: "Y como dormida sheet music, page 1",
      },
      {
        src: "/compositions/dormida/page-2.png",
        alt: "Y como dormida sheet music, page 2",
      },
    ],
    audioFiles: [
      {
        src: "/compositions/dormida/ensemble.mp3",
        label: "Live Rehearsal (Sightread)",
      },
    ],
    status: "completed",
  },
  {
    title: "you are",
    subtitle: "for SATB + piano",
    year: "2020",
    images: [
      {
        src: "/compositions/you-are/page-1.png",
        alt: "you are sheet music, page 1",
      },
      {
        src: "/compositions/you-are/page-2.png",
        alt: "you are sheet music, page 2",
      },
      {
        src: "/compositions/you-are/page-3.png",
        alt: "you are sheet music, page 3",
      },
      {
        src: "/compositions/you-are/page-4.png",
        alt: "you are sheet music, page 4",
      },
      {
        src: "/compositions/you-are/page-5.png",
        alt: "you are sheet music, page 5",
      },
      {
        src: "/compositions/you-are/page-6.png",
        alt: "you are sheet music, page 6",
      },
      {
        src: "/compositions/you-are/page-7.png",
        alt: "you are sheet music, page 7",
      },
      {
        src: "/compositions/you-are/page-8.png",
        alt: "you are sheet music, page 8",
      },
      {
        src: "/compositions/you-are/page-9.png",
        alt: "you are sheet music, page 9",
      },
      {
        src: "/compositions/you-are/page-10.png",
        alt: "you are sheet music, page 10",
      },
      {
        src: "/compositions/you-are/page-11.png",
        alt: "you are sheet music, page 11",
      },
    ],
    audioFiles: [
      { src: "/compositions/you-are/ensemble.mp3", label: "Live Rehearsal" },
      {
        src: "/compositions/you-are/playback.mp3",
        label: "MuseScore Playback",
      },
    ],
    status: "completed",
  },
  {
    title: "Ode to Moonlight",
    subtitle: "for SATB voices and optional piano",
    year: "2019",
    images: [
      {
        src: "/compositions/moonlight/page-1.png",
        alt: "Ode to Moonlight sheet music, page 1",
      },
      {
        src: "/compositions/moonlight/page-2.png",
        alt: "Ode to Moonlight sheet music, page 2",
      },
      {
        src: "/compositions/moonlight/page-3.png",
        alt: "Ode to Moonlight sheet music, page 3",
      },
      {
        src: "/compositions/moonlight/page-4.png",
        alt: "Ode to Moonlight sheet music, page 4",
      },
      {
        src: "/compositions/moonlight/page-5.png",
        alt: "Ode to Moonlight sheet music, page 5",
      },
      {
        src: "/compositions/moonlight/page-6.png",
        alt: "Ode to Moonlight sheet music, page 6",
      },
      {
        src: "/compositions/moonlight/page-7.png",
        alt: "Ode to Moonlight sheet music, page 7",
      },
    ],
    audioFiles: [
      { src: "/compositions/moonlight/ensemble.mp3", label: "Live Rehearsal" },
      {
        src: "/compositions/moonlight/playback.mp3",
        label: "MuseScore Playback",
      },
    ],
    status: "completed",
  },
  {
    title: "The Dolphin",
    subtitle: "for SATB voices + piano",
    year: "2018",
    images: [
      {
        src: "/compositions/dolphin/page-1.png",
        alt: "The Dolphin sheet music, page 1",
      },
      {
        src: "/compositions/dolphin/page-2.png",
        alt: "The Dolphin sheet music, page 2",
      },
      {
        src: "/compositions/dolphin/page-3.png",
        alt: "The Dolphin sheet music, page 3",
      },
    ],
    audioFiles: [
      {
        src: "/compositions/dolphin/playback.mp3",
        label: "MuseScore Playback",
      },
    ],
    status: "completed",
  },
];

// Image viewer component for sheet music
const SheetMusicViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: {
  images: CompositionImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Reset zoom when changing images
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`relative ${isZoomed ? "max-w-none w-full h-full overflow-auto" : "max-w-5xl max-h-[90vh] w-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative ${isZoomed ? "min-h-full flex items-start justify-center p-8" : "h-full"}`}
        >
          <div
            onClick={toggleZoom}
            className={`relative ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={isZoomed ? 2400 : 1200}
              height={isZoomed ? 3200 : 1600}
              className={`${isZoomed ? "w-auto h-auto max-w-none" : "max-h-[85vh] w-auto mx-auto object-contain"}`}
            />
          </div>

          <button
            className="fixed top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 z-10"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {!isZoomed && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/40"
                onClick={onPrevious}
              >
                <ChevronLeft size={30} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/40"
                onClick={onNext}
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          <div
            className={`${isZoomed ? "fixed" : "absolute"} bottom-4 left-0 right-0 text-center text-white font-mono`}
          >
            <span>
              {currentIndex + 1} / {images.length}
            </span>
            {isZoomed && (
              <span className="ml-4 text-sm text-white/60">
                Click image to zoom out
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Audio player component
const AudioPlayer = ({
  audioFiles,
}: {
  audioFiles: { src: string; label: string }[];
}) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef) {
      audioRef.onended = () => setIsPlaying(false);
    }
  }, [audioRef]);

  const togglePlay = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <audio
        ref={(ref) => setAudioRef(ref)}
        src={audioFiles[currentTrack].src}
        className="hidden"
      />
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="flex-1">
          {audioFiles.length === 1 ? (
            <p className="text-sm font-medium text-gray-700">
              {audioFiles[currentTrack].label}
            </p>
          ) : (
            <div className="flex gap-2">
              {audioFiles.map((file, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTrack(index);
                    setIsPlaying(false);
                    if (audioRef) {
                      audioRef.pause();
                      audioRef.currentTime = 0;
                    }
                  }}
                  className={`text-xs px-2 py-1 rounded ${
                    currentTrack === index
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {file.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Composition card component
const CompositionCard = ({
  composition,
  index,
}: {
  composition: Composition;
  index: number;
}) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % composition.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + composition.images.length) % composition.images.length,
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!viewerOpen) return;

    if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "Escape") {
      closeViewer();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewerOpen]);

  const isEven = index % 2 === 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Asterisk className="text-red-500 h-4 w-4" />
        <span className="text-sm tracking-wide">
          {composition.status === "wip" ? "WORK IN PROGRESS" : "COMPLETED WORK"}
        </span>
        <Asterisk className="text-red-500 h-4 w-4" />
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 uppercase relative">
        {composition.title}
      </h1>

      <div className="grid grid-cols-12 gap-8 relative border-t border-b border-gray-200 pt-8 pb-14">
        <div
          className={`col-span-12 md:col-span-7 ${isEven ? "" : "md:order-2"} pr-0 md:pr-8`}
        >
          <h2 className="text-2xl md:text-2xl font-normal mb-2">
            {composition.year}
          </h2>
          <p className="text-gray-600 italic mb-6">
            / {composition.subtitle} /
          </p>

          {/* Audio Player */}
          {composition.audioFiles.length > 0 && (
            <div className="mb-6">
              <AudioPlayer audioFiles={composition.audioFiles} />
            </div>
          )}

          {/* Sheet Music Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {composition.images.slice().map((image, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => openViewer(imgIndex)}
                className="relative aspect-[3/4] bg-gray-100 overflow-hidden rounded border border-gray-200 hover:border-red-500 transition-colors group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>

        <div
          className={`col-span-12 md:col-span-4 ${isEven ? "md:col-start-9" : "md:col-start-1 md:order-1"}`}
        >
          <div className="bg-red-500 p-6 pb-3.5 text-white relative overflow-hidden">
            {/* Featured sheet music preview */}
            <button
              onClick={() => openViewer(0)}
              className="relative w-full aspect-[17/23] mb-4 overflow-hidden group"
            >
              <Image
                src={composition.images[0].src}
                alt={composition.images[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 group-hover:bg-red-500/20 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2 text-xs italic text-black/60 group-hover:text-black transition-colors">
                Click to view score
              </div>
            </button>

            <div className="flex items-center justify-between">
              <div className="text-sm tracking-wide uppercase">
                {composition.images.length} pages
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 border border-white rounded-full"
                  />
                ))}
              </div>
            </div>
            {/* Diagonal cut corner */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white transform rotate-45" />
          </div>
        </div>
      </div>

      {viewerOpen && (
        <SheetMusicViewer
          images={composition.images}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-red-500 text-white shadow-lg transition-opacity duration-300 hover:bg-red-600 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black relative font-mono overflow-hidden">
      <title>ari peró | music composition</title>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border-l border-gray-200 h-full" />
          ))}
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 p-4 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/work"
            className="text-xl md:text-2xl font-bold hover:text-red-500 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            back
          </Link>
          <div className="flex gap-4 text-sm italic">
            <span>/ MUSIC</span>
            <span>COMPOSITION /</span>
          </div>
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold hover:text-red-500 transition-colors"
          >
            home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-4 pb-24">
        {compositions.map((composition, index) => (
          <CompositionCard
            key={index}
            composition={composition}
            index={index}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Ari Peró
            </p>
            <a
              href="mailto:peroarian@gmail.com"
              className="text-red-500 hover:underline"
            >
              peroarian@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Border Overlay */}
      <div className="absolute inset-0 border border-gray-200 pointer-events-none" />
    </div>
  );
}
