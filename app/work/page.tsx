'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { throttle } from 'lodash'
import { ChevronUp } from 'lucide-react'

const backgrounds = [
  '/to_man.jpg',
  '/unsubscribe-blurcover.png',
  '/body.png',
  '/proj.png',
  '/punky.png',
  '/ff.jpg',
  '/mozart.jpg',
  '/spoken.png',
  '/ur.png',
  '/rambax.png',
  '/civil.png',
  '/door.jpg',
  '/textile.jpg',
]

const projects = [
  '',
  '/work/web',
  '/work/video',
  '/work/sound',
  '/work/design',
  '/work/photo',
  'https://ariapero.myportfolio.com/voice',
  '/wip',
  'https://ariapero.myportfolio.com/composition',
  '/work/instrumental',
  'https://ariapero.myportfolio.com/installation',
  'https://ariapero.myportfolio.com/fabrication',
  '/work/textile',
]

const content = [
  {
    title: "Transdisciplinearity",
    subtitle: "scroll down or use the links below to navigate"
  },
  {
    title: "Web",  // add iwrising, gis project "PUBLIC INTEREST TECHNOLOGY"
    subtitle: "web dev, civic tech, and ui/ux design"
  },
  {
    title: "Video",
    subtitle: "audiovisual media and experimental performance"
  },
  {
    title: "Sound",
    subtitle: "sound design and music production"
  },
  {
    title: "Design",
    subtitle: "graphic and creative design"
  },
  {
    title: "Photo",
    subtitle: "photography and editing"
  },
  {
    title: "Voice",
    subtitle: "classical & jazz (solo & choral) voice"
  },
  {
    title: "Poetry",
    subtitle: "spoken word performance and written poetry"
  },
  {
    title: "Composition",
    subtitle: "music composition"
  },
  {
    title: "Instrumental",
    subtitle: "instrumental performance (sabar drums and analog synthesizer)"
  },
  {
    title: "Installation",
    subtitle: "civil disobedience and public art"
  },
  {
    title: "Fabrication",
    subtitle: "physical fabrication and sculpture"
  },
  {
    title: "Textile",
    subtitle: "textile work and clothing design"
  }
]

export default function WorksPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [visibleSlides, setVisibleSlides] = useState(new Set([0, 1, 2]))

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const navigateToSlide = (index: number) => {
    setCurrentSlide(index)
    scrollToSlide(index)
  }

  const scrollToTop = () => {
    setCurrentSlide(0)
    scrollToSlide(0)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const currentSlideIndex = Math.round(scrollPosition / windowHeight)

        setCurrentSlide(currentSlideIndex)
        setShowTopButton(currentSlideIndex > 0)

        const newVisibleSlides = new Set([
          currentSlideIndex,
          Math.max(0, currentSlideIndex - 1),
          Math.min(backgrounds.length - 1, currentSlideIndex + 1),
          Math.min(backgrounds.length - 1, currentSlideIndex + 2),
          Math.max(0, currentSlideIndex - 2)
        ])
        setVisibleSlides(newVisibleSlides)
      }
    }, 80)

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Preload images
  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-neutral-900"
      style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}
    >
      {backgrounds.map((bg, index) => (
        <section 
          key={index}
          className={`
            relative w-full h-screen bg-cover bg-no-repeat bg-center overflow-hidden
            snap-start
          `}
        >
          <div 
            className="absolute inset-0"
            style={{ height: 'calc(100vh + 25vh)'}}
          >
            <Image
              src={bg}
              alt={`Background ${index + 1}`}
              fill={true}
              style={{ 
                objectFit: "cover",
                opacity: visibleSlides.has(index) ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
              quality={isMobile ? 50 : 75}
              priority={index <= 1}
              loading={index <= 1 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-35"></div>
          <div className="absolute inset-0 flex justify-center items-center flex-col text-center text-white font-inter transform -translate-y-2 md:-translate-y-0">
            {index === 0 ? (
              <h1
                className="z-20 text-[4.6vh] md:text-[20vh] leading-tight
                  tracking-tighter md:tracking-normal
                  uppercase md:capitalize
                  font-medium md:font-normal
                  font-zen md:font-sloop
                  transform -translate-y-4 md:-translate-y-0
                  -mb-4 md:mb-0"
                style={ isMobile ? {
                  textShadow: '1px 1px 2px rgba(0,0,0, 0.5)',
                } : { textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>
                  {content[index].title}
              </h1>
            ) : (
              <Link
                href={projects[index]}
                className="z-20 text-[7.8vh] md:text-[20vh] leading-tight
                  tracking-tighter md:tracking-normal
                  uppercase md:capitalize
                  font-medium md:font-normal
                  font-zen md:font-sloop
                  hover:opacity-75 transition-opacity"
                style={ isMobile ? {
                  textShadow: '1px 1px 2px rgba(0,0,0, 0.5)',
                } : { textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>
                {content[index].title}
              </Link>
            )}
            <p className="text-l sm:text-xl md:text-2xl mt-0 sm:mt-2 md:mt-4 tracking-tight md:tracking-normal font-zen font-medium z-10">{content[index].subtitle}</p>
            {index === 0 && (
              <div className="mt-12 flex flex-col items-center z-10">
                <p
                  className="text-xl md:text-xl mb-0 font-bold uppercase font-zen tracking-tight md:tracking-normal -mt-4 sm:mt-0"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0, 0.5)' }}>
                    Table of Contents
                </p>
                {content.slice(1).map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigateToSlide(i + 1)}
                    className="text-base sm:text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.5)' }}
                  >
                    {i + 1}. {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      {showTopButton && (
        <div 
          className="fixed right-4 sm:right-8 top-4 md:top-1/2 transform translate-y-0 md:-translate-y-1/2 z-50 group"
          title="Back to Top"
        >
          <button
            onClick={scrollToTop}
            className="bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to Top
          </span>
        </div>
      )}
    </div>
  )
}