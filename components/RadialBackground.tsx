'use client'

import React, { useState, useEffect, useRef } from 'react'
import BackgroundToggle from './BackgroundToggle'

interface RadialBackgroundProps {
  children: React.ReactNode
  baseColor: string
  highlightColor: string
}

export default function RadialBackground({ children, baseColor, highlightColor }: RadialBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [isAnimated, setIsAnimated] = useState(true)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!backgroundRef.current || !isAnimated) return
      const { clientX, clientY } = ev
      backgroundRef.current.style.setProperty('--x', `${clientX}px`)
      backgroundRef.current.style.setProperty('--y', `${clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [isAnimated])

  return (
    <>
      {/* <style jsx>{`
        .radial-background {
          height: 100vh;
          width: 100%;
          background-color: ${baseColor};
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            ${highlightColor} 0%,
            transparent 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style> */}
      <style jsx>{`
        .radial-background {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          background-color: ${baseColor};
          transition: opacity 0.3s ease;
        }
        .radial-background.animated {
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            ${highlightColor} 0%,
            transparent 100%
          );
        }
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
      `}</style>
      {/* <div ref={backgroundRef} className="radial-background">
        {children}
      </div> */}
      <div 
        ref={backgroundRef} 
        className={`radial-background ${isAnimated ? 'animated bg-${baseColor}' : ''}`}
      />
      <div className="content-wrapper">
        {children}
      </div>
      <BackgroundToggle onToggle={setIsAnimated} />
    </>
  )
}