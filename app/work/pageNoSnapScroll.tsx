'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { throttle } from 'lodash'
import { ChevronUp, ChevronDown } from 'lucide-react'

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
    title: "Web",  // add iwrising, gis project
    subtitle: "web development and ui/ux design"
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
  const tickingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  const scrollSensitivitySetting = 30
  const slideDurationSetting = 600

  const slideDurationTimeout = (duration: number) => {
    setTimeout(() => {
      tickingRef.current = false
    }, duration)
  }

  const nextItem = () => {
    if (currentSlide < backgrounds.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }

  const previousItem = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }

  const navigateToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const scrollToTop = () => {
    setCurrentSlide(0)
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
    const handleScroll = throttle((event: WheelEvent) => {
      if (isMobile) return
      event.preventDefault()
      
      if (!tickingRef.current) {
        const delta: number = -event.deltaY

        if (delta <= -scrollSensitivitySetting) {
          tickingRef.current = true
          nextItem()
          slideDurationTimeout(slideDurationSetting)
        }
        if (delta >= scrollSensitivitySetting) {
          tickingRef.current = true
          previousItem()
          slideDurationTimeout(slideDurationSetting)
        }
      }
    }, 60)

    const container = containerRef.current
    if (container && !isMobile) {
      container.addEventListener('wheel', handleScroll, { passive: false })
    }

    setShowTopButton(currentSlide > 0)

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [currentSlide, isMobile])

  return (
    // <div ref={containerRef} className="h-screen overflow-hidden">
    <div ref={containerRef} className={`min-h-screen ${isMobile ? 'overflow-y-auto' : 'overflow-hidden'}`}>
      {backgrounds.map((bg, index) => (
        <section 
          key={index}
          // className={`
          //   fixed w-full bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden
          //   transition-transform duration-1200 ease-cubic-bezier
          //   ${index === currentSlide ? 'z-10' : 'z-0'}
          //   ${index < currentSlide ? 'down-scroll' : index > currentSlide ? 'up-scroll' : ''}
          // `}
          className={`
            ${isMobile ? 'relative min-h-screen' : 'fixed w-full'}
            bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden
            transition-transform duration-1200 ease-cubic-bezier
            ${index === currentSlide ? 'z-10' : 'z-0'}
            ${!isMobile && (index < currentSlide ? 'down-scroll' : index > currentSlide ? 'up-scroll' : '')}
          `}
          style={ !isMobile ? {
            height: 'calc(100vh + 30vh)',
            transform: `translateY(${(index - currentSlide) * 100}vh)`,
          } : {}}
        >
          <Image
            src={bg}
            alt={`Background ${index + 1}`}
            fill={true}
            style={{ objectFit: "cover" }}
            quality={75}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black bg-opacity-35"></div>
          {/* <div className={`
            h-screen flex justify-center items-center flex-col text-center text-white font-inter
            transform transition-transform duration-[1700ms] ease-cubic-bezier
            ${index < currentSlide ? 'translate-y-[40vh]' : index > currentSlide ? 'translate-y-[30vh]' : 'translate-y-[0vh]'}
          `}> */}
          <div className={`
            h-screen flex justify-center items-center flex-col text-center text-white font-inter
            ${!isMobile ? `
              transform transition-transform duration-[1700ms] ease-cubic-bezier
              ${index < currentSlide ? 'translate-y-[40vh]' : index > currentSlide ? 'translate-y-[30vh]' : 'translate-y-[0vh]'}
            ` : ''}
          `}>
            {index === 0 ? (
              <h1
                className="z-20 text-[4vh] md:text-[20vh] leading-tight
                  tracking-tighter md:tracking-normal
                  uppercase md:capitalize
                  font-medium md:font-normal
                  font-zen md:font-sloop"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>
                  {content[index].title}
              </h1>
            ) : (
              <Link
                href={projects[index]}
                className="z-20 text-[8vh] md:text-[20vh] leading-tight
                  tracking-tighter md:tracking-normal
                  uppercase md:capitalize
                  font-medium md:font-normal
                  font-zen md:font-sloop
                  hover:opacity-75 transition-opacity"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>
                {content[index].title}
              </Link>
            )}
            <p className="text-xl md:text-2xl mt-2 md:mt-4 font-zen font-medium z-10">{content[index].subtitle}</p>
            {index === 0 && (
              <div className="mt-12 flex flex-col items-center z-10">
                <p
                  className="text-xl md:text-xl mb-0 font-bold uppercase font-zen"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0, 0.5)' }}>
                    Table of Contents
                </p>
                {content.slice(1).map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigateToSlide(i + 1)}
                    className="text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase"
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
      {!isMobile && showTopButton && (
        <div 
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 group"
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