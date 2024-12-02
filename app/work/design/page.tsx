"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const projects = [
  {
    title: "ACTIVE COMMUNITY ENGAGEMENT (ACE)",
    description:
      "Sticker + shirt designs for MIT ACE: a freshman pre-orientation program.",
    images: [
      "/2023_ACE_FRONT.png",
      "/2023_ACE_BACK.png",
      "/2023_ACE_PRINTED.png",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e850dfc4-9e37-45ac-a51d-67f7f9a29f32_rw_1200.png?h=d8c8db6946d359225cab6b4d662cdba9",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0a6d97a6-ed2d-4cbd-a6d0-57567122d181_rw_1200.png?h=06ff919c20095b1a6c6f22e90ae8776d",
    ],
    year: "2023, 2022",
    category: "GRAPHIC DESIGN",
    details: "01.240024.05",
  },
  {
    title: "SONIC",
    description:
      "Modeling and creative design for MIT Infinite Fashion Magazine, Issue X.", // https://infinitemagazine.mit.edu/#/issue-view/10
    images: [
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/7ced3915-9c13-4d25-b560-18fa3a6a8355_rw_1920.png?h=3fb8ee6257ac3c4410744840fb3750ae",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/74862275-3159-4e0b-b2f4-4cb96e4f8ba6_rw_1920.jpg?h=ee50952e860545874bd76e662e0d2f75",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2e80af97-5bc5-47a3-9339-a4049aa1d3c7_rw_1920.jpg?h=bfd2c1808abe77ffc839965b2908eabc",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8339aee0-b31c-4748-8a5a-431f563d1a41_rw_1920.jpg?h=cabe3f51b697f58ebbe299961fe31101",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f90b53d1-65f6-4dba-9eff-ecccfdb000f9_rw_1920.jpg?h=09e38f953adfd998901b26d36fb17b6d",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1ab49ed6-4251-4a64-aabf-2a1315255bc5_rw_1920.jpg?h=cb74c66e528f44413e8e4deb5921b333",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c7979578-d8e9-439a-a4cf-0d205b8c6de2_rw_1920.jpg?h=27e713492abd30eac588e68952937dd6",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f2e0a553-13e2-4da5-8914-c5959e8e971a_rw_1920.jpg?h=70cbb2b7a457fe56002da4f93291921a",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/812f14e6-4072-4976-9f90-2c5485ed1e3e_rw_1920.jpg?h=592e920e3a4ff175078c9379d6d54d95",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1d5b009b-d573-4f9b-84e5-de2b8b7c6429_rw_1920.jpg?h=2b52dd706e7dbd0af32dea94db984398",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9901c091-77f4-4960-8ea8-66b29185f9b4_rw_1920.jpg?h=3e4df4819d4300f52ff9f6b6bbf5fd2c",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/27f267f6-5cf2-48b5-a795-059cca5b8b8a_rw_1920.jpg?h=78a1676150c000022fe6e1f6fc6db465",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/595e82ff-8651-474e-ab58-72717dc0ad71_rw_1920.jpg?h=667b4b2850c77822a39105937dc46acc",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e619463a-1bbd-4662-b384-d0d44bc92d1b_rw_1920.jpg?h=98909ea713ee33b32a8458000628001d",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f1a9cd2a-9cb0-47c1-9723-fd3e3606f9e3_rw_1920.jpg?h=c2fd7a066cf285af71b5a6732fe8bc55",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2311b8da-ab77-41dd-b420-4c8ba542419a_rw_1920.jpg?h=002a4635eb25da860ea2572a0a8fc5ce",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f211018-2283-4309-8c55-16392bf849d0_rw_1920.jpg?h=0ab09cbe5585effc4f5af2d9ff5508d6",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2d4ea5d3-7299-453c-88d1-8f2f8e400952_rw_1920.jpg?h=b087b37ad8bf16095a2fea48b2c2ee99",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2dade226-800c-45d1-9200-3697d36a7718_rw_1920.jpg?h=7a14c30d57dc65f67970c99612441ea7",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/cca496f6-a1a9-456a-87c5-8ac81d9c3dca_rw_1920.jpg?h=f3d7395d2bd7e508a3d0a46de3de0cc8",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1545b153-9bcc-4cb1-9697-46f18b6efc99_rw_1920.jpg?h=8122f1277750e99d4c2d9b0a451b86f9",
    ],
    year: "2022",
    category: "CREATIVE DIRECTION",
    details: "02.340034.06",
  },
  {
    title: "PUNKY YOUTH",
    description:
      "Spread lead (creative director, photo editor, layout artist, model) for MIT Infinite Fashion Magazine, Issue IX.", // https://infinitemagazine.mit.edu/#/issue-view/9
    images: [
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/544df38b-28b3-4d8b-bd6a-fa805910770d_rw_1200.png?h=f5ab6a38c2f0001e465faa8cf1ea8808",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9452d65b-0aa4-4057-8297-99479a8959d0_rw_3840.png?h=ff98e1dcd54600343b178dd285dce818",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6b0ecd15-d90f-4514-982f-16b8cea9caa4.png?h=36c277482b3c494de8a931ef9d8bdad3",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8a866c66-d499-4542-b959-b9b4dadf73c7.png?h=89e74b0c5ef4fc50a8a20efe21309062",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/37c798c8-6e20-4f6e-a503-b4a5e7de19ce.png?h=37fb383cd4033e868a5091c4246bc73d",
    ],
    year: "2021",
    category: "CREATIVE DIRECTION",
    details: "03.230023.07",
  },
  {
    title: "STEER ROAST",
    description:
      "Branding and postcard design for a retro punk-inspired music festival and community reunion.",
    images: [
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d23653f8-9942-4b89-9655-590e7aa05dc8.png?h=8ae2e95076b2d5898b4cdfa0ed5d5d8e",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/db6a0b27-4154-41d1-a319-4ed26cca5301.png?h=d03593b9bc9cca6b886db316217625f7",
    ],
    year: "2023, 2022",
    category: "BRANDING & GRAPHIC DESIGN",
    details: "04.220022.08",
  },
  {
    title: "CITY OF MIAMI BEACH",
    description:
      "Outreach materials, public presentations, and an official City Resilience Committee logo for the City of Miami Beach.",
    images: [
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c1f649bd-5f14-4904-ae99-6c1b9994ea5f.png?h=c3ca6e9e5e03c727d225937b232572ad",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ad59c195-3672-4783-8d3f-04e7da63de0c.png?h=526fa24ba6af6d477e1e4fa709b58ed0",
    ],
    year: "2022",
    category: "GRAPHIC DESIGN",
    details: "05.330033.09",
  },
  {
    title: "STRIKERS SOCCER CLUB",
    description: "Team banner design.",
    images: [
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a96636c6-b9b8-42b3-a31a-1f564ddd6aec.png?h=797b006f2bfb3628f6f0af80b61d67c8",
      "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/aa43f2a6-64c5-428a-ab5b-433394e7650a.png?h=9338cfd02a7d73229b004d7eb7e300f5",
    ],
    year: "2021",
    category: "GRAPHIC DESIGN",
    details: "06.320032.10",
  },
];

const ProjectSection = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }, [project.images.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (isVisible && !isHovered) {
      timer = setInterval(nextImage, 2000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isVisible, isHovered, nextImage])

  const handleImageClick = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    setExpandedImageIndex(index)
  }, [])

  const closeExpandedImage = useCallback(() => setExpandedImageIndex(null), [])

  const navigateExpandedImage = useCallback((direction: 'prev' | 'next') => {
    setExpandedImageIndex((prev) => {
      if (prev === null) return null
      const newIndex = direction === 'prev'
        ? (prev - 1 + project.images.length) % project.images.length
        : (prev + 1) % project.images.length
      return newIndex
    })
  }, [project.images.length])

  const memoizedOverlay = useMemo(() => (
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0 pointer-events-none">
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} className="relative w-full h-full flex items-center justify-center">
          <span className="absolute text-[#ff00ff] font-bold opacity-70 text-xl">+</span>
        </div>
      ))}
    </div>
  ), [])

  return (
    <div ref={sectionRef} className="min-h-screen w-full flex items-center bg-black snap-start">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        <div
          className="relative h-[80vh] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowDetails(true)}
        >
          <Image
            src={project.images[currentImage]}
            alt={project.title}
            fill
            className="object-cover transition-all duration-300"
            style={{
              filter: isHovered ? 'none' : 'grayscale(100%)',
              objectPosition: 'center',
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          {memoizedOverlay}
          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
                }}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col justify-center text-[#ffff00] relative">
          <div className="absolute top-4 right-4 font-ncl text-sm opacity-50">
            {project.details}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xs font-mono opacity-50">{project.category}</h3>
              <button
                className="text-left text-4xl md:text-6xl font-bold font-mono tracking-tighter hover:text-[#ff00ff] transition-colors"
                onClick={() => setShowDetails(true)}
              >
                <h2>{project.title}</h2>
              </button>
              <p className="text-sm font-mono opacity-70">{project.year}</p>
            </div>

            <p className="text-lg max-w-md font-mono">{project.description}</p>

            <button
              className="text-[#ffff00] underline font-mono"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
          </motion.div>

          <div className="absolute bottom-4 right-4">
            <div className="w-8 h-8 border border-[#ffff00] opacity-50 rotate-45" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={() => {
              setShowDetails(false)
              setExpandedImageIndex(null)
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 p-8 rounded-lg w-[80vw] h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold font-mono mb-4 text-[#ffff00]">
                    {project.title}
                  </h2>
                  <p className="text-white font-mono mb-2">{project.description}</p>
                </div>
                <button
                  className="text-white hover:text-[#ffff00]"
                  onClick={() => setShowDetails(false)}
                  aria-label="Close details"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="break-inside-avoid cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => handleImageClick(e, i)}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full lg"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center"
            onClick={closeExpandedImage}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={project.images[expandedImageIndex]}
                alt={`${project.title} ${expandedImageIndex + 1}`}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-[#ffff00]"
                onClick={closeExpandedImage}
                aria-label="Close expanded image"
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:text-[#ffff00]"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateExpandedImage('prev')
                }}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:text-[#ffff00]"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateExpandedImage('next')
                }}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ArchiveSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black snap-start">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-mono text-[#ffff00]">
          Archived graphics work 2014-2018:
        </h2>
        <a
          href="https://soulmaets.tumblr.com/tagged/mine"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <motion.button
            className="px-8 py-3 bg-gray-200 hover:bg-[#ffff00] text-black font-ncl rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ARchIVe
          </motion.button>
        </a>
      </motion.div>
    </div>
  )
}

export default function DesignPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-black text-white">
      <title>ari peró | graphic & creative design</title>
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/work"
          className="inline-flex items-center text-white font-ncl hover:text-[#ffff00] transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          BAck to woRk
        </Link>
      </div>

      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
      >
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} index={index} />
        ))}
        <ArchiveSection />
      </div>

      <button
        className="fixed top-1/2 right-6 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-50 hover:bg-gray-200 hover:text-black transition-colors duration-300 focus:outline-none"
        onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <footer className="fixed bottom-0 left-0 w-full pb-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center mt-8 text-white font-mono text-sm">
        <Link href="/" className="hover:underline mb-2 md:mb-0">
          HTTPS://ARIAPERO.GITHUB.IO
        </Link>
        <div className="mb-2 md:mb-0">© 2024 Ari Peró. All rights reserved.</div>
        <a href="mailto:ariapero@mit.edu" className="hover:underline">
          MAILTO:ARIAPERO@MIT.EDU
        </a>
      </footer>
    </div>
  )
}