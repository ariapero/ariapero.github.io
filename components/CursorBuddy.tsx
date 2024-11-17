'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface CursorBuddyProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function CursorBuddy({ src, alt, width, height }: CursorBuddyProps) {
  const [isMobile, setIsMobile] = useState(true)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback((event: MouseEvent) => {
    cursorX.set(event.clientX - width / 1.1)
    cursorY.set(event.clientY - height * 1.5)
  }, [cursorX, cursorY, width, height])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile, handleMouseMove])

  if (isMobile) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full"
        style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))' }}
      />
    </motion.div>
  )
}