'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Play, Pause } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const VideoPlayer = ({ src, title }: { src: string, title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video group">
      <iframe 
        src={`${src}${isPlaying ? '?autoplay=1' : ''}`}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </div>
  )
}

export default function VideoPage() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Experimental Video Installation",
      description: "Experimental video installation depicting the manner in which trans bodies are simultaneously sexualized and rendered invisible by popular media and modern society in general, within the expanded context of NYC ballroom culture and of the 80s AIDs crisis.",
      videoUrl: "https://www.youtube.com/embed/0Z8kyrB8v6c",
      additionalText: "Part of an ongoing series of installations and live performances capturing my own emotions as a trans POC at the intersection of so many systems of power and oppression while shedding light on many of the less \"palatable\" issues faced explicitly by black transgender women. I hope to utilize these projects as a platform from which to illuminate allies on the trans experience."
    },
    {
      title: "PRESIONA TU PECHO COMO LO HACES HARINA P.A.N.",
      description: "PRESS YOUR CHEST LIKE YOU DO HARINA P.A.N. (alternate title: THE HARINA P.A.N. GUIDE TO CHEST BINDING) is a piece on the intersections of generational trauma and gender dysphoria. Throughout the recorded projection performance, I draw parallels between various methods for chest binding to traditional Venezuelan recipes utilizing a specific brand of corn meal that is popular in the country and in my family.",
      videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/3zRuVQVyR6j/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    },
    // Add more projects here...
  ]

  const additionalVideos = [
    { url: "https://www.youtube.com/embed/TY0zc_rVhzg", title: "Video 1" },
    { url: "https://www.youtube.com/embed/Drd-LRB9l0c", title: "Video 2" },
    { url: "https://www.youtube.com/embed/sRGrNg-6z20", title: "Video 3" },
    { url: "https://www.youtube.com/embed/7WYgSjm-JNo", title: "Video 4" },
    { url: "https://www.youtube.com/embed/5fz8LTeYU0c", title: "Video 5" },
    { url: "https://www.youtube.com/embed/u1NJjV-3i5o", title: "Video 6" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#163734] to-[#238177] text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />
      </div>
      
      <div className="p-8">
        <Link 
          href="/work" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Work
        </Link>
        
        <motion.h1 
          className="text-6xl font-bold mb-16 font-reenie text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AUDIOVISUAL MEDIA & EXPERIMENTAL PERFORMANCE
        </motion.h1>
        
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: activeProject === index ? 1 : 0, y: activeProject === index ? 0 : 50 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className={`${activeProject === index ? 'block' : 'hidden'}`}
              >
                <Card className="bg-white/5 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                    <div className="aspect-video mb-6">
                      <VideoPlayer src={project.videoUrl} title={project.title} />
                    </div>
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed">{project.description}</p>
                    {project.additionalText && (
                      <p className="text-gray-300 text-base italic">{project.additionalText}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VideoPlayer src={video.url} title={video.title} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}