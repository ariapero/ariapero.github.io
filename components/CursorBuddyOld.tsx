'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CursorBuddyProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function CursorBuddy({ src, alt, width, height }: CursorBuddyProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
  
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      animate={{
        // x: mousePosition.x - width / 2,
        // y: mousePosition.y - height / 2,
        x: mousePosition.x - width / 1.1,
        y: mousePosition.y - height * 1.5,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
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