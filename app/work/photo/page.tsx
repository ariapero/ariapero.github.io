// TODO: Expandable images within individual project galleries
// TODO: Fix scroll-to-top / gallery return button
// TODO: Give each project view a unique URL / route for direct linking and backtracking

"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronUp } from "lucide-react";
import { projects, backgroundImages } from "./projectsData";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Image prefetcher component
const ImagePrefetcher = ({ imageSrc }: { imageSrc: string }) => {
  useEffect(() => {
    const img = new window.Image();
    img.src = imageSrc;
  }, [imageSrc]);

  return null; // This component doesn't render anything
};

export default function PhotoPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showGalleryReturn, setShowGalleryReturn] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);

  // const randomizedImages = useMemo(() => shuffleArray(backgroundImages), []);
  // const randomDepths = useMemo(
  //   () =>
  //     Array.from({ length: randomizedImages.length }, () => Math.random() * 40),
  //   [randomizedImages.length]
  // );

  // Move randomization to useState with a function initializer to ensure it runs client-side
  const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
  const [randomDepths, setRandomDepths] = useState<number[]>([]);

  // Initialize randomization on client-side only
  useEffect(() => {
    // This will run only in the browser, after hydration
    setRandomizedImages(shuffleArray(backgroundImages));
    setRandomDepths(
      Array.from({ length: backgroundImages.length }, () => Math.random() * 40)
    );
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        if (slideshowRef.current) {
          const newPosition = prevPosition + 1.1; // scroll speed
          return newPosition % slideshowRef.current.scrollWidth;
        }
        return prevPosition;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   // when scroll position past #gallery href, show button to go back to #gallery / top of gallery section (not top of entire page)
  //   setShowGalleryReturn(scrollPosition > window.innerHeight);
  // }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGalleryReturn(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // const allProjects = useMemo(() => {
  //   return Object.entries(projects).reduce(
  //     (acc, [category, categoryProjects]) => {
  //       Object.entries(categoryProjects).forEach(
  //         ([projectName, projectData]) => {
  //           acc[projectName] = {
  //             category,
  //             coverImage: projectData.images[0],
  //             images: projectData.images,
  //           };
  //         }
  //       );
  //       return acc;
  //     },
  //     {} as Record<
  //       string,
  //       {
  //         category: string;
  //         coverImage: string;
  //         images: string[];
  //         description?: React.ReactNode;
  //       }
  //     >
  //   );
  // }, []);

  // Use useState instead of useMemo for allProjects
  const [allProjects, setAllProjects] = useState<
    Record<
      string,
      {
        category: string;
        coverImage: string;
        images: string[];
        description?: React.ReactNode;
      }
    >
  >({});

  // Initialize allProjects on client-side
  useEffect(() => {
    const projectsData = Object.entries(projects).reduce(
      (acc, [category, categoryProjects]) => {
        Object.entries(categoryProjects).forEach(
          ([projectName, projectData]) => {
            acc[projectName] = {
              category,
              coverImage: projectData.images[0],
              images: projectData.images,
            };
          }
        );
        return acc;
      },
      {} as Record<
        string,
        {
          category: string;
          coverImage: string;
          images: string[];
          description?: React.ReactNode;
        }
      >
    );
    setAllProjects(projectsData);
  }, []);

  // Calculate filtered projects based on activeCategory
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : Object.entries(allProjects).reduce(
          (acc, [projectName, projectInfo]) => {
            if (projectInfo.category === activeCategory) {
              acc[projectName] = projectInfo;
            }
            return acc;
          },
          {} as typeof allProjects
        );

  return (
    // <div className="h-[100dvh] bg-black text-yellow-500 relative overflow-hidden font-mono flex flex-col">  {/* or h-screen */}
    <div className="min-h-screen bg-black text-yellow-500 font-mono">
      <section className="h-screen relative">
        <title>ari peró | photography & editing</title>
        {/* Autoscrolling background */}
        <div
          ref={slideshowRef}
          className="absolute inset-0 flex overflow-hidden"
          style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
        >
          {randomizedImages.map((src, index) => (
            <div
              key={index}
              className="relative shrink-0 w-full h-full"
              style={{
                transform: `translateZ(${
                  Math.sin(randomDepths[index] * 0.5) * 280
                }px)`, // depth effect (image size)
                opacity: 0.7,
              }}
            >
              <Image
                src={src}
                alt={`Background ${index + 1}`}
                fill={true}
                quality={60}
                priority={index < 2}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="absolute inset-0 bg-black opacity-50 w-full h-full" />
        )}
        {/* <div className="relative z-10 container mx-auto px-4 py-8"> */}
        {/* <div className="relative z-10 flex flex-col justify-between h-full p-8"> */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 md:px-16 py-6 md:py-8">
          {" "}
          {/* browser view: px-16 py-8 */}
          <header>
            <div className="flex justify-between items-start text-xs">
              <div>
                <h2 className="text-sm mb-1.5">
                  <Link
                    href="/work"
                    className="inline-flex items-center hover:underline hover:text-white transition-colors"
                  >
                    <ArrowLeft className="mr-2" size={20} />
                    BACK TO WORK
                  </Link>
                </h2>
                <p className="whitespace-nowrap">2017 - 2022</p>
                {isMobile ? (
                  <p className="mt-3.5 whitespace-nowrap">
                    SAMPLE WORKS IN PHOTOGRAPHY & EDITING
                  </p>
                ) : (
                  <p className="whitespace-nowrap">SAMPLE WORKS</p>
                )}
              </div>
              {!isMobile && (
                <div className="text-center">
                  <h1 className="text-xl font-bold mb-1">ARIPERO/Photo</h1>
                  <p className="text-yellow-500">▼42°21'36.36"N 71°5'39.12"E</p>
                </div>
              )}
              <div className="text-right">
                <Link
                  href="/"
                  className="hover:underline hover:text-white transition-colors"
                >
                  {isMobile ? (
                    <span className="text-sm mb-1.5">HOME</span>
                  ) : (
                    <>
                      <p>HTTPS://</p>
                      <p>ARIPERO.COM</p>
                    </>
                  )}
                </Link>
              </div>
            </div>

            <div className="text-xs">
              {isMobile ? (
                <p>ALL SHOT ON NIKON D3400 OR iPHONE 8</p>
              ) : (
                <div className="mt-3.5">
                  <p>EVENT / FASHION / PORTRAIT &mdash;&mdash; PHOTOGRAPHY</p>
                  <p>
                    COLOR GRADING / CORRECTIVE / STYLISTIC / GENERAL
                    &mdash;&mdash; EDITING
                  </p>
                  <p>PHOTOS DISPLAYED ALL SHOT ON NIKON D3400 OR iPHONE 8</p>
                </div>
              )}
            </div>
          </header>
          {/* Main title */}
          <main className="flex-grow flex items-center mt-4">
            {" "}
            {/* orig <main className="my-24"> */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-red-600 text-[24vw] md:text-[8.2vw] leading-none font-bold tracking-tighter">
                {" "}
                {/* orig text-[7rem] */}
                <Link href="#gallery" className="scroll-smooth">
                  <div className="transform hover:scale-105 transition-transform">
                    CAM/
                  </div>
                  <div className="transform hover:scale-105 transition-transform">
                    CHIM
                  </div>
                  <div className="transform hover:scale-105 transition-transform">
                    ERA.
                  </div>
                </Link>
              </div>
            </div>
          </main>
          {/* Footer */}
          <footer>
            {" "}
            {/* orig <footer className="absolute bottom-0 left-0 right-0 p-4"> */}
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span>©</span>
                {isMobile ? (
                  <span className="text-yellow-500">ARI PERÓ ✱ 2025</span>
                ) : (
                  <span className="text-yellow-500">
                    ARI PERÓ / EST. MMXXIV / ARTS & DEV PORTFOLIO / PHOTOGRAPHY
                    & EDITING ✱
                  </span>
                )}
              </div>
              <div>
                {isMobile ? (
                  <a
                    href="mailto:ariapero@mit.edu"
                    className="underline hover:text-white transition-colors"
                  >
                    EMAIL
                  </a>
                ) : (
                  <p>
                    <a
                      href="mailto:ariapero@mit.edu"
                      className="underline hover:text-white transition-colors"
                    >
                      HERE
                    </a>
                    &apos;S MY EMAIL ¯\_(ツ)_/¯
                  </p>
                )}
              </div>
            </div>
          </footer>
        </div>
        {/* Decorative background lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-yellow-500/20"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-yellow-500/20"></div>{" "}
        {/* or top-[62%] */}
      </section>

      {/* Gallery */}
      <section id="gallery" className="min-h-screen bg-black p-4 md:p-8">
        {/* Category Navigation */}
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm py-4 mb-4">
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {["All", ...Object.keys(projects)].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveProject(null);
                }}
                className={`rounded-full transition-colors ${
                  isMobile
                    ? "px-2 py-0.5 text-xs"
                    : "px-4 py-2 text-sm whitespace-nowrap transition-colors"
                } ${
                  activeCategory === category
                    ? "bg-yellow-500/95 text-black"
                    : "text-yellow-500 hover:bg-yellow-500/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Projects Grid */}
        {!activeProject && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {Object.entries(filteredProjects).map(
              ([projectName, { coverImage, images }]) => (
                <div key={projectName} className="break-inside-avoid mb-4">
                  <button
                    onClick={() => setActiveProject(projectName)}
                    onMouseEnter={() => setHoveredProject(projectName)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="w-full relative overflow-hidden rounded-lg group"
                  >
                    <Image
                      src={coverImage}
                      alt={projectName}
                      width={800}
                      height={600}
                      className="w-full h-auto transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <span
                        className="text-white text-left text-lg font-semibold"
                        style={{
                          textShadow: "1.5px 1.5px 3px rgba(0,0,0, 0.5)",
                        }}
                      >
                        {projectName}
                      </span>
                    </div>

                    {/* Prefetch images when hovering */}
                    {hoveredProject === projectName &&
                      images.map((image, index) => (
                        <ImagePrefetcher key={index} imageSrc={image} />
                      ))}
                  </button>
                </div>
              )
            )}
          </div>
        )}

        {/* Project Gallery */}
        {activeProject && (
          <div>
            <button
              onClick={() => setActiveProject(null)}
              className="mb-4 text-yellow-500 opacity-50 hover:text-white hover:opacity-100 transition-colors transition-opacity flex items-center"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Projects
            </button>
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">
              {activeProject}
            </h2>
            {allProjects[activeProject].description && (
              <div
                className="z-100 mb-4 text-white"
                style={{ border: "2px solid red" }}
              >
                {typeof allProjects[activeProject].description === "function"
                  ? (
                      allProjects[activeProject]
                        .description as () => React.ReactNode
                    )()
                  : allProjects[activeProject].description}
              </div>
            )}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {Object.values(projects).flatMap((category) =>
                Object.entries(category)
                  .filter(([name]) => name === activeProject)
                  .flatMap(([_, projectData]) =>
                    projectData.images.map((image: string, index: number) => (
                      <div key={index} className="break-inside-avoid mb-4">
                        <Image
                          src={image}
                          alt={`${activeProject} image ${index + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))
                  )
              )}
            </div>
          </div>
        )}
      </section>
      {/* Back to top (of gallery) button */}
      {showGalleryReturn && (
        <Link
          href="#gallery"
          className="scroll-smooth fixed bottom-8 right-8 bg-yellow-500 text-black p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
        >
          <ChevronUp size={24} />
        </Link>
      )}
    </div>
  );
}
