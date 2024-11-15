'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { throttle } from 'lodash'

const backgrounds = [
  '/to_man.jpg',
  '/unsubscribe.png',
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
  '/textile.png',
]

// const projects = [
//   '',
//   '/work/video',
//   '/work/sound',
//   '/work/design',
//   '/work/photo',
//   '/work/voice',
//   '/work/poetry',
//   '/work/composition',
//   '/work/instrumental',
//   '/work/installation',
//   '/work/fabrication',
//   '/work/textile',
// ]

const projects = [
  '',
  '/https://github.com/weblab-class/ariapero-gabrc52-akwon20-cloud',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
  '/wip',
]

const content = [
  {
    title: "Transdisciplinearity",
    subtitle: "scroll down or use the links below to navigate"
  },
  {
    title: "WebDev",
    subtitle: "ui/ux design and web development (github linked above)"
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
  const isFirefox = typeof navigator !== 'undefined' && /Firefox/i.test(navigator.userAgent)
  const isIe = typeof navigator !== 'undefined' && (/MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent))
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
    const handleScroll = throttle((event: WheelEvent) => {
      event.preventDefault()
      
      if (!tickingRef.current) {
        const delta: number = -event.deltaY
        // let delta: number

        // if (isFirefox) {
        //   // delta = event.detail * (-120)
        //   delta = -event.deltaY
        // // } else if (isIe) {
        // //   delta = -event.deltaY
        // } else {
        //   delta = -event.deltaY
        // }

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
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false })
    }

    setShowTopButton(currentSlide > 0)

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [currentSlide, isFirefox, isIe])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <section 
          key={index}
          className={`
            fixed w-full bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden
            transition-transform duration-1200 ease-cubic-bezier
            ${index === currentSlide ? 'z-10' : 'z-0'}
            ${index < currentSlide ? 'down-scroll' : index > currentSlide ? 'up-scroll' : ''}
          `}
          style={{
            backgroundImage: `url(${bg})`,
            // height: 'calc(100vh + 30vh)',
            height: 'calc(100vh + 30vh)',
            // height: '100vh',
            transform: `translateY(${(index - currentSlide) * 100}vh)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className={`
            h-screen flex justify-center items-center flex-col text-center text-white font-inter
            transform transition-transform duration-[1700ms] ease-cubic-bezier
            ${index < currentSlide ? 'translate-y-[40vh]' : index > currentSlide ? 'translate-y-[30vh]' : 'translate-y-[0vh]'}
          `}>
            {/* <Link
              href={projects[index]}
              className="text-[20vh] leading-tight font-sloop z-20"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}
            >
              {content[index].title}
            </Link> */}
            {index === 0 ? (
              <h1 className="text-[20vh] leading-tight font-sloop z-20" style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>{content[index].title}</h1>
            ) : (
              <Link href={projects[index]} className="text-[20vh] leading-tight font-sloop z-20 hover:opacity-75 transition-opacity" style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.15)' }}>
                {content[index].title}
              </Link>
            )}
            <p className="text-2xl mt-4">{content[index].subtitle}</p>
            {index === 0 && (
              <div className="mt-12 flex flex-col items-center">
                <p className="text-xl mb-0 font-bold uppercase font-inter" style={{ textShadow: '1px 1px 1px rgba(0,0,0, 0.5)' }}>Table of Contents</p>
                {content.slice(1).map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigateToSlide(i + 1)}
                    className="text-sm my-0 hover:underline focus:outline-none font-inter lowercase"
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
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 group"
          title="Back to Top"
        >
          <button
            onClick={scrollToTop}
            className="bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to Top
          </span>
        </div>
      )}
    </div>
  )
}

// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import { throttle } from 'lodash'

// const backgrounds = [
//   'https://i.postimg.cc/kXq9Qmnj/bgd1.jpg',
//   'https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg',
//   'https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg'
// ]

// const content = [
//   {
//     title: "Full Page Parallax Effect",
//     subtitle: "Scroll down and up to see the effect!"
//   },
//   {
//     title: "Cras lacinia non eros nec semper.",
//     subtitle: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium."
//   },
//   {
//     title: "Etiam consequat lectus.",
//     subtitle: "Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus."
//   }
// ]

// export default function WorksPage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const isFirefox = typeof navigator !== 'undefined' && /Firefox/i.test(navigator.userAgent)
//   const isIe = typeof navigator !== 'undefined' && (/MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent))

//   useEffect(() => {
//     const handleScroll = throttle((event: WheelEvent) => {
//       event.preventDefault()
//       let delta: number

//       if (isFirefox) {
//         delta = -event.deltaY
//       } else if (isIe) {
//         delta = -event.deltaY
//       } else {
//         delta = -event.deltaY
//       }

//       if (delta <= -30 && currentSlide < backgrounds.length - 1) {
//         setCurrentSlide(prev => prev + 1)
//       } else if (delta >= 30 && currentSlide > 0) {
//         setCurrentSlide(prev => prev - 1)
//       }
//     }, 600, { trailing: false })

//     const container = containerRef.current
//     if (container) {
//       container.addEventListener('wheel', handleScroll, { passive: false })
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('wheel', handleScroll)
//       }
//     }
//   }, [currentSlide, isFirefox, isIe])

//   return (
//     <div ref={containerRef} className="h-screen overflow-hidden">
//       {backgrounds.map((bg, index) => (
//         <section 
//           key={index}
//           className={`
//             fixed w-full bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden
//             transition-transform duration-1200 ease-cubic-bezier
//             ${index === currentSlide ? 'z-10' : 'z-0'}
//             ${index < currentSlide ? '-translate-y-[130vh]' : index > currentSlide ? 'translate-y-[30vh]' : '-translate-y-[15vh]'}
//           `}
//           style={{
//             backgroundImage: `url(${bg})`,
//             height: 'calc(100vh + 30vh)',
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//           <div className={`
//             h-screen flex justify-center items-center flex-col text-center text-white font-montserrat uppercase
//             transform transition-transform duration-[1700ms] ease-cubic-bezier
//             ${index < currentSlide ? 'translate-y-[40vh]' : index > currentSlide ? 'translate-y-[30vh]' : 'translate-y-[15vh]'}
//           `}>
//             <p className="text-[12vh] leading-tight">{content[index].title}</p>
//             <p className="text-xl mt-4">{content[index].subtitle}</p>
//           </div>
//         </section>
//       ))}
//     </div>
//   )
// }
