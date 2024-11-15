'use client'

import React, { useEffect, useRef } from 'react'

interface RadialBackgroundProps {
  children: React.ReactNode
  baseColor: string
  highlightColor: string
}

export default function RadialBackground({ children, baseColor, highlightColor }: RadialBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!backgroundRef.current) return
      const { clientX, clientY } = ev
      backgroundRef.current.style.setProperty('--x', `${clientX}px`)
      backgroundRef.current.style.setProperty('--y', `${clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      <style jsx>{`
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
      `}</style>
      <div ref={backgroundRef} className="radial-background">
        {children}
      </div>
    </>
  )
}