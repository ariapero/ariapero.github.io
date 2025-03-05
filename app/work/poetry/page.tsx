"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ArrowUp } from "lucide-react";

// TODO: Expanded view keyboard / arrow key navigation
// TODO: Add YoungArts links

interface PoemImage {
  src: string;
  alt: string;
}

interface PoemProject {
  title?: string;
  videoLink?: string;
  audioFile?: string;
  images: PoemImage[];
}

const poems: PoemProject[] = [
  {
    // HOMECOMING
    title: "Homecoming",
    images: [
      { src: "/homecoming/page-1.png", alt: "'Homecoming' poem, page 1" },
      { src: "/homecoming/page-2.png", alt: "'Homecoming' poem, page 2" },
      { src: "/homecoming/page-3.png", alt: "'Homecoming' poem, page 3" },
      { src: "/homecoming/page-4.png", alt: "'Homecoming' poem, page 4" },
    ],
  },
  {
    // GUER AIN FRON
    title: "guer ain fron",
    images: [
      {
        src: "/guer-visual/artboard-1.png",
        alt: "Visual representation of 'guer ain fron' poem, artboard 1",
      },
      {
        src: "/guer-visual/artboard-2.png",
        alt: "Visual representation of 'guer ain fron' poem, artboard 2",
      },
      {
        src: "/guer-visual/artboard-3.png",
        alt: "Visual representation of 'guer ain fron' poem, artboard 3",
      },
      {
        src: "/guer-visual/artboard-4.png",
        alt: "Visual representation of 'guer ain fron' poem, artboard 4",
      },
      {
        src: "/guer-written/page-1.png",
        alt: "Written text of 'guer ain fron' poem, page 1",
      },
      {
        src: "/guer-written/page-2.png",
        alt: "Written text of 'guer ain fron' poem, page 2",
      },
      {
        src: "/guer-written/page-3.png",
        alt: "Written text of 'guer ain fron' poem, page 3",
      },
      {
        src: "/guer-written/page-4.png",
        alt: "Written text of 'guer ain fron' poem, page 4",
      },
    ],
  },
  {
    // FACADE.
    title: "facade.",
    videoLink: "https://www.youtube.com/embed/nYAf7TH3SBA",
    images: [
      {
        src: "/chapbook/a-facade/facade-1.png",
        alt: "Written text of 'facade.' poem, page 1",
      },
      {
        src: "/chapbook/a-facade/facade-2.png",
        alt: "Written text of 'facade.' poem, page 2",
      },
    ],
  },
  {
    // ELLIPSIS
    title: "ELLIPSIS",
    images: [
      {
        src: "/chapbook/b-ellipsis/ellipsis-1.png",
        alt: "Written text of 'ELLIPSIS' poem, page 1",
      },
      {
        src: "/chapbook/b-ellipsis/ellipsis-2.png",
        alt: "Written text of 'ELLIPSIS' poem, page 2",
      },
      {
        src: "/chapbook/b-ellipsis/ellipsis-3.png",
        alt: "Written text of 'ELLIPSIS' poem, page 3",
      },
      {
        src: "/chapbook/b-ellipsis/ellipsis-4.png",
        alt: "Written text of 'ELLIPSIS' poem, page 4",
      },
      {
        src: "/chapbook/b-ellipsis/ellipsis-5.png",
        alt: "Written text of 'ELLIPSIS' poem, page 5",
      },
    ],
  },
  {
    // ALLERGY TO GRAPES
    title: "stream of conciouspiss/my body is terrifying./AN ALLERGY TO GRAPES",
    videoLink: "https://www.youtube.com/embed/pWp3zl3XJm0",
    images: [
      {
        src: "/chapbook/c-grapes/grapes-1.png",
        alt: "Written text of 'stream of conciouspiss/my body is terrifying./AN ALLERGY TO GRAPES' poem, page 1",
      },
      {
        src: "/chapbook/c-grapes/grapes-2.png",
        alt: "Written text of 'stream of conciouspiss/my body is terrifying./AN ALLERGY TO GRAPES' poem, page 2",
      },
    ],
  },
  {
    // REMAINDER OF CHAPBOOK
    images: [
      {
        src: "/chapbook/d-comfert.png",
        alt: "Written text of 'comfert;_' poem",
      },
      {
        src: "/chapbook/e-crayon.png",
        alt: "Written text of 'an exploration of peripeteia in prose and crayon' poem",
      },
      {
        src: "/chapbook/f-kalopsia.png",
        alt: "Written text of 'kalopsia.' poem",
      },
    ],
  },
  {
    // you are.
    title: "you are.",
    videoLink: "https://www.youtube.com/embed/ZxlAOd71UGI",
    images: [
      {
        src: "/you-are/page-1.png",
        alt: "Written text of 'you are.' poem, page 1",
      },
      {
        src: "/you-are/page-2.png",
        alt: "Written text of 'you are.' poem, page 2",
      },
      {
        src: "/you-are/page-3.png",
        alt: "Written text of 'you are.' poem, page 2",
      },
    ],
  },
  {
    // OG: Cuando escucho mi nombre
    title: "Cuando escucho mi nombre (Original; spoken word)",
    videoLink: "https://www.youtube.com/embed/JzXi9erqXPw",
    images: [
      {
        src: "/cuando-og/page-1.png",
        alt: "Written text of 'Cuando escucho mi nombre' spoken word poem, page 1",
      },
      {
        src: "/cuando-og/page-2.png",
        alt: "Written text of 'Cuando escucho mi nombre' spoken word poem, page 2",
      },
    ],
  },
  {
    // NEW: Cuando escucho mi nombre
    title: "Cuando escucho mi nombre (Expanded)",
    images: [
      {
        src: "/cuando-new/page-1.png",
        alt: "Written text of 'Cuando escucho mi nombre' spoken word poem, page 1",
      },
      {
        src: "/cuando-new/page-2.png",
        alt: "Written text of 'Cuando escucho mi nombre' spoken word poem, page 2",
      },
      {
        src: "/cuando-new/page-3.png",
        alt: "Written text of 'Cuando escucho mi nombre' spoken word poem, page 3",
      },
    ],
  },
  {
    // catHArsis
    title: "catHArsis",
    audioFile: "/catharsis/catharsis.wav",
    images: [
      {
        src: "/catharsis/page-1.png",
        alt: "Written text of 'catHArsis' poem, page 1",
      },
      {
        src: "/catharsis/page-2.png",
        alt: "Written text of 'catHArsis' poem, page 2",
      },
      {
        src: "/catharsis/page-3.png",
        alt: "Written text of 'catHArsis' poem, page 3",
      },
    ],
  },
];

const ImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: {
  images: PoemImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center"
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

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const PoemProject = ({ poem }: { poem: PoemProject }) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % poem.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + poem.images.length) % poem.images.length
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
  }, [viewerOpen]); // Dependency array with viewerOpen

  return (
    <div className="border border-[#a3ff00]/20 p-6 lg:mx-44 lg:px-8 lg:pb-8">
      {poem.title && (
        <h3 className="font-share text-2xl text-[#a3ff00] lg:text-center mb-2 tracking-tight leading-7">
          {poem.title}
        </h3>
      )}

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:col-span-2">
          {poem.audioFile && (
            <audio src={poem.audioFile} controls className="w-full mt-2" />
          )}
          {poem.videoLink && (
            <div className="aspect-video w-full max-w-3xl mx-auto mt-2">
              <iframe
                src={poem.videoLink}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        {poem.images.map((image, index) => (
          <div
            key={index}
            className="relative border border-white/10 overflow-hidden cursor-pointer"
            onClick={() => openViewer(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {viewerOpen && (
        <ImageViewer
          images={poem.images}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-4 md:bottom-16 md:right-6 z-40 p-3 rounded-full bg-[#a3ff00] text-black shadow-lg transition-opacity duration-300 hover:bg-[#c4ff4d] ${
        isVisible ? "opacity-80" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon border effect for top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#a3ff00] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#a3ff00] pointer-events-none" />

      {/* Top header */}
      <header className="flex justify-between pt-10 px-4 pb-6 md:pb-0 relative z-10">
        <div className="flex items-center space-x-3 pt-2">
          <Link
            href="/work"
            className="inline-flex items-center hover:underline hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            <h1 className="font-share text-lg">BACK TO WORK</h1>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4">
        {/* Center emblem with titles on each side */}
        <div className="flex justify-center items-center mb-10 lg:mb-12">
          <div className="space-y-2 text-center mr-24">
            <p className="font-share text-sm opacity-70">WRITTEN WORD</p>
            <div className="flex justify-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
              {Array(9)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="bg-white/90" />
                ))}
            </div>
          </div>

          <div className="space-y-2 text-center ml-24">
            <p className="font-share text-sm opacity-70">SPOKEN WORD</p>
            <div className="flex justify-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Banner image */}
        <div className="relative w-full h-[300px] mb-10 lg:mb-12 hidden md:block">
          <Image
            src="/ur.png?height=300&width=800"
            alt="Banner image"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Main title */}
        <div className="text-center mb-14 hidden lg:block">
          <h2
            className="text-7xl font-mono font-bold tracking-wider"
            style={{
              fontFamily: "sharespace",
              letterSpacing: "0.2em",
              WebkitTextStroke: "2px white",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            LITERARY ARTS
          </h2>
        </div>

        {/* Poetry projects*/}
        <div className="space-y-8 mb-20 sm:mb-24">
          {poems.map((poem, index) => (
            <PoemProject key={index} poem={poem} />
          ))}
        </div>
      </main>

      <ScrollToTopButton />

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-8 px-4 flex justify-between items-center font-share text-[#a3ff00]">
        <div className="hidden lg:flex space-x-2">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="w-4 h-4 border border-[#a3ff00] mt-0.5" />
            ))}
          <Link href="/" className="hover:underline">
            HOME/
          </Link>
        </div>
        <Link href="/" className="hover:underline lg:hidden">
          ://
        </Link>
        <span className="lg:hidden">©&thinsp;2025</span>
        <a
          href="mailto:ariapero@mit.edu"
          className="hover:underline pointer-events-none md:pointer-events-auto opacity-0 md:opacity-100"
        >
          MAILTO:
        </a>
      </footer>

      {/* Side decorative text */}
      <div className="fixed top-0 bottom-0 left-4 writing-mode-vertical hidden lg:flex items-center">
        <div
          className="font-share text-xs opacity-50 rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          ARI PERÓ
        </div>
      </div>
      <div className="fixed top-0 bottom-0 right-4 writing-mode-vertical hidden lg:flex items-center">
        <div
          className="font-share text-xs opacity-50"
          style={{ writingMode: "vertical-rl" }}
        >
          © 2025
        </div>
      </div>
    </div>
  );
}
