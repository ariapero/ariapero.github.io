'use client'

import React, { useRef, useEffect, useState } from 'react'

/*
 Adapted from a jQuery Codepen
 by Bryan C 
 https://codepen.io/bryjch/pen/QEoXwA 
*/

class Point {
  x: number
  y: number
  lifetime: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.lifetime = 0
  }
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const colorIndex = useRef(0)

  const rainbowColors = [
    [255, 0, 0],    // Red
    [255, 127, 0],  // Orange
    [255, 255, 0],  // Yellow
    [0, 255, 0],    // Green
    [0, 255, 255],  // Cyan (added to smooth transition)
    [0, 0, 255],    // Blue
    [75, 0, 130],   // Indigo
    [143, 0, 255]   // Violet
  ]

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (matchMedia('(pointer:fine)').matches) {
      startAnimation()
    }
  }, [dimensions])

  const startAnimation = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const points: Point[] = []

    const addPoint = (x: number, y: number) => {
      const point = new Point(x, y)
      points.push(point)
      colorIndex.current = (colorIndex.current + 0.02) % rainbowColors.length
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (canvas) {
        addPoint(event.clientX, event.clientY)
      }
    }

    document.addEventListener('mousemove', handleMouseMove, false)

    const interpolateColor = (color1: number[], color2: number[], factor: number) => {
      const result = color1.map((channel, index) => {
        return Math.round(channel + factor * (color2[index] - channel))
      })
      return result
    }

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      const duration = 50 // Lifetime of each point

      for (let i = 1; i < points.length; ++i) {
        const point = points[i]
        const lastPoint = points[i - 1]

        point.lifetime += 1

        if (point.lifetime > duration) {
          points.shift()
        } else {
          const lifePercent = point.lifetime / duration
          const spreadRate = 7 * (1 - lifePercent)

          const gradient = ctx.createLinearGradient(lastPoint.x, lastPoint.y, point.x, point.y)
          
          const colorPosition = (colorIndex.current + i / points.length) % rainbowColors.length
          const startColorIndex = Math.floor(colorPosition)
          const endColorIndex = (startColorIndex + 1) % rainbowColors.length
          
          const startColor = rainbowColors[startColorIndex]
          const endColor = rainbowColors[endColorIndex]
          
          const t = colorPosition - startColorIndex
          const interpolatedColor = interpolateColor(startColor, endColor, t)

          gradient.addColorStop(0, `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`)
          gradient.addColorStop(1, `rgb(${endColor[0]}, ${endColor[1]}, ${endColor[2]})`)

          ctx.lineWidth = spreadRate
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          ctx.strokeStyle = gradient

          ctx.beginPath()
          ctx.moveTo(lastPoint.x, lastPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        }
      }
      requestAnimationFrame(animatePoints)
    }

    animatePoints()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }

  return <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="fixed inset-0 pointer-events-none z-50" />
}

export default CursorTrail