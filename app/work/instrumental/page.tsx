"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface Project {
  title: string;
  date: string;
  mediaType: "video" | "audio" | "pdf" | "text";
  mediaUrl: string;
}

const projectsByCategory: Record<string, Project[]> = {
  famle: [
    {
      title: "FREQ Out: Impressions from the Voxel Lab",
      date: "mAy 2024",
      mediaType: "video",
      mediaUrl:
        "https://vimeo.com/event/4084525/embed?autoplay=0&quality=1080p#t=30m48s",
    },
    {
      title: '"Hyperpop" Group (Week 5 Rehearsal)',
      date: "mARcH 2024",
      mediaType: "video",
      mediaUrl:
        "https://drive.google.com/file/d/1iMbK9bITZGLAj1ONm1B5nPouQawGKlrj/preview",
    },
    {
      title: "Solo analog synth improvisation (Week 4 Rehearsal)",
      date: "mARcH 2024",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/S2OtN-B5GeU?si=Hrega1ACQSBdYOhp",
    },
    {
      title: "Randomized Groups (Week 3 Rehearsal)",
      date: "FEBRuARy 2024",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/ZpQhDluIjW0?si=CPeq47dDsOAfkttt",
    },
  ],
  rambax: [
    {
      title: "RAMBAX (Directed by Lamine Touré) Winter Concert",
      date: "DEcEmBER 2024",
      mediaType: "text",
      mediaUrl: "Coming Soon <3",
    },
    {
      title: "RAMBAX (Directed by Lamine Touré) Winter Concert",
      date: "DEcEmBER 2023",
      mediaType: "video",
      mediaUrl:
        "https://vimeo.com/event/3649974/embed?autoplay=0&quality=1080p#t=14m35s",
    },
  ],
  dj: [
    {
      title: "Mix for DJ History, Technology, and Technique",
      date: "spRInG 2023",
      mediaType: "audio",
      mediaUrl: "/S63_FINAL_RECORDING.mp3",
    },
    {
      title: "Track listing and annotations about selected music for above mix",
      date: "spRInG 2023",
      mediaType: "pdf",
      mediaUrl: "/docs/DJ_assignment.pdf",
    },
  ],
};

const ProjectDropdown = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (mediaRef.current?.requestFullscreen) {
        mediaRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const renderMedia = () => {
    switch (project.mediaType) {
      case "video":
        return (
          <iframe
            src={project.mediaUrl}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case "audio":
        return (
          <audio controls className="w-full">
            <source src={project.mediaUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      case "pdf":
        return (
          <embed
            src={project.mediaUrl}
            type="application/pdf"
            width="100%"
            height="500px"
          /> // height="100%"
        );
      case "text":
        return <div className="absolute top-2 text-xl">{project.mediaUrl}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <div className="border border-white">
        <div
          className="p-3 flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex-1 mr-2">
            <p className="text-sm font-ncl text-gray-400 mb-1">
              {project.date}
            </p>
            <h3 className="text-base">{project.title}</h3>
          </div>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 flex-shrink-0" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="border border-white border-t-0 bg-black">
          <div className="p-4">
            <div ref={mediaRef} className="relative aspect-video">
              {renderMedia()}
              <button
                onClick={toggleFullscreen}
                className="absolute top-2 right-2 bg-black/50 p-1 rounded-full text-white hover:bg-black/75"
              >
                {isFullscreen ? (
                  <Minimize2 size={20} className="z-100" />
                ) : (
                  <Maximize2 size={20} className="z-100" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <title>ari peró | instrumental performance</title>
      {/* Header Section */}
      <header className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10">
        ={" "}
        <div className="flex items-center space-x-4 -mb-12 sm:mb-0">
          <div className="border border-white p-2">
            <Link
              href="/work"
              className="inline-flex items-center text-xs text-white hover:underline"
            >
              &#x2039;01/
            </Link>
          </div>
          <div className="text-xs space-y-1">
            <p>INSTRUMENTAL PERFORMANCE & IMPROVISATION</p>
            <p>(SABAR DRUMS & ANALOG SYNTH & DJING)</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="hidden sm:block font-bold tracking-wider">
            ♪｡ﾟ♫.♬ ꒰･‿･๑꒱
          </div>
          <div className="hidden sm:flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-white p-2">
                <div className="transform rotate-45 w-3 h-3" />
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Decorative Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <div className="flex items-center">
            <div className="hidden md:block w-32 h-1 bg-white" />
            <div className="hidden sm:block sm:ml-10 md:ml-0 w-4 h-4 rounded-full border border-white" />
          </div>
          <div className="text-center w-full sm:w-auto">
            <h1 className="hidden sm:block text-xl sm:text-2xl font-ncl">
              InstRUmEntAL &nbsp;pERFoRmAncE
            </h1>
          </div>
          <div className="hidden sm:flex items-center">
            <div className="hidden sm:block sm:mr-10 md:mr-0 w-4 h-4 rounded-full border border-white" />
            <div className="hidden md:block w-32 h-1 bg-white" />
          </div>
        </div>

        {/* "Instruments" */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-4 sm:gap-8 text-lg sm:text-base">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="h-16 flex items-center justify-center font-bold text-center px-2">
              <Link
                href="https://mta.mit.edu/music/performance/famle-mit-laptop-ensemble"
                className="hover:underline"
                target="_blank"
              >
                FaMLE: MIT LAPTOP ENSEMBLE
              </Link>
            </div>
            <div className="relative mb-8 w-full aspect-square bg-black border border-white/20">
              <Image
                src="/famle_color-1.jpg"
                alt="Close-up of a synthesizer rack. Ari's hands are seen adjusting knobs and sliders on the synthesizer."
                fill
                style={{ objectPosition: "center" }}
              />
            </div>
            {projectsByCategory.famle.map((project, index) => (
              <ProjectDropdown key={`famle-${index}`} project={project} />
            ))}
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="h-16 flex items-center justify-center font-bold text-center px-2">
              <Link
                href="https://mta.mit.edu/music/performance/rambax-mit"
                className="hover:underline"
                target="_blank"
              >
                RAMBAX: SENEGALESE DRUM ENSEMBLE
              </Link>
            </div>
            <div className="relative mb-8 w-full aspect-square bg-black border border-white/20">
              <Image
                src="/rambax_color.jpg"
                alt="Close-up of Ari playing at the Rambax MIT: Senegalese Drum Ensemble Winter 2023 concert"
                fill
                style={{ objectPosition: "center" }}
              />
            </div>
            {projectsByCategory.rambax.map((project, index) => (
              <ProjectDropdown key={`rambax-${index}`} project={project} />
            ))}
          </div>
          <div className="sm:col-start-2 sm:col-span-2 lg:col-span-1">
            <div className="h-16 flex items-center justify-center font-bold text-center px-2">
              DJ CONTROLLER EXPERIMENTATION
            </div>
            <div className="relative mb-8 w-full aspect-square bg-black border border-white/20">
              <Image
                src="/rekordbox.png"
                alt="Screenshot of Rekordbox DJ software. The software is open to a track listing and waveform display."
                fill
                style={{ objectPosition: "center" }}
              />
            </div>
            {projectsByCategory.dj.map((project, index) => (
              <ProjectDropdown key={`dj-${index}`} project={project} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 p-4 mt-4 sm:mt-8">
        <div className="flex flex-row justify-between items-center space-y-0.5 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-white p-2">
                  <div className="transform rotate-45 w-3 h-3" />
                </div>
              ))}
            </div>
            <div className="border border-white px-2 py-0.5">
              <Link href="/" className="text-sm hover:underline">
                home/
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-0 sm:space-y-2 sm:space-x-4">
            <a
              href="mailto:ariapero@mit.edu"
              className="hidden sm:block border border-white rounded-full px-4 py-2 text-sm hover:underline"
            >
              ariapero@mit.edu
            </a>
            <div className="text-2xl">©2025</div>
            <div className="hidden sm:block w-32">
              <div className="border-b border-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
