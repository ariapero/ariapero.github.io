'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="text-[#4CAF50] hover:opacity-80 transition-opacity"
          >
            <h1 className="text-2xl font-medium mb-2">AJ Sketchbook: Soala Ajienka</h1>
            <p className="text-lg">Read here</p>
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-32">
          {/* Text Section 1 */}
          <FadeInWhenVisible>
            <div className="max-w-2xl ml-auto">
              <p className="text-[#4CAF50] text-lg leading-relaxed">
                My first composition when the lockdowns kicked in was the cheese plant
                in our living room, which we gave the moniker Buddy V. It was perched
                on a stool in a corner of the room, illuminated by a red lamp.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Image 1 */}
          <FadeInWhenVisible>
            <div className="max-w-xl">
              <Image
                src="/filter_NRM.jpg"
                alt="Circular embroidered artwork of plants"
                width={600}
                height={600}
                className="rounded-full"
              />
              <p className="mt-4 text-sm text-gray-500">02/04/2020</p>
              <p className="text-sm text-gray-500">Buddy V</p>
            </div>
          </FadeInWhenVisible>

          {/* Text Section 2 */}
          <FadeInWhenVisible>
            <div className="max-w-2xl ml-auto">
              <p className="text-[#4CAF50] text-lg leading-relaxed">
                It was my first attempt at embroidery, one of many crafts I reached for
                in the months that followed. I began to see my everyday differently,
                taking pleasure in the new leaves that emerged from my thriving plants,
                paying close attention to them, like a helicopter mom.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Image 2 */}
          <FadeInWhenVisible>
            <div className="max-w-xl ml-auto">
              <Image
                src="/filter_NRM.jpg"
                alt="Sketch with green plant leaves"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="mt-4 text-sm text-gray-500">02/04/2020</p>
              <p className="text-sm text-gray-500">Buddy V</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  )
}