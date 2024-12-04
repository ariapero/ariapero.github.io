'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectImage {
  src: string;
  srcSet: string;
  alt: string;
}

const VideoPlayer = ({ src }: { src: string }) => (
  <div className="aspect-video w-full max-w-3xl mx-auto mb-6">
    <iframe 
      src={src} 
      className="w-full h-full" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
)

export default function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [expandedImage, setExpandedImage] = useState<ProjectImage | null>(null)

  const projects = [
    {
      title: "VISIBILITY:tomantoself",
      description: "Experimental video installation depicting the manner in which trans bodies are simultaneously sexualized and rendered invisible by popular media and modern society in general, within the expanded context of NYC ballroom culture and of the 80s AIDs crisis.",
      videos: [
        { url: "https://www.youtube.com/embed/TY0zc_rVhzg", label: "Original Piece" },
        { url: "https://www.youtube.com/embed/0Z8kyrB8v6c", label: "Live Performance" }
      ],
      additionalText: "Part of an ongoing series of installations and live performances capturing my own emotions as a trans POC at the intersection of so many systems of power and oppression while shedding light on many of the less \"palatable\" issues faced explicitly by black transgender women. I hope to utilize these projects as a platform from which to illuminate allies on the trans experience."
    },
    {
      title: "PRESIONA TU PECHO COMO LO HACES HARINA P.A.N.",
      description: "PRESS YOUR CHEST LIKE YOU DO HARINA P.A.N. (alternate title: THE HARINA P.A.N. GUIDE TO  ̷F̷E̷M̷A̷L̷E̷ ̷ CHEST BINDING) is a piece on the intersections of generational trauma and gender dysphoria. Throughout the recorded projection performance, I draw parallels between various methods for chest binding to traditional Venezuelan recipes utilizing a specific brand of corn meal that is popular in the country and in my family.",
      videos: [{ url: "https://www.youtube.com/embed/Drd-LRB9l0c", label: "Performance" }],
      images: [
        {
          src: "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/787be60d-d065-4dcf-96be-84996407c557_rw_1920.PNG?h=f0649ee1c0e604b8d8f1acd6b0abf3c9",
          srcSet: "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/787be60d-d065-4dcf-96be-84996407c557_rw_600.PNG?h=251c812be3281e700312e138e9e6f2e7 600w,https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/787be60d-d065-4dcf-96be-84996407c557_rw_1200.PNG?h=6b3b04195e633b89858020e4a685e21b 1200w,https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/787be60d-d065-4dcf-96be-84996407c557_rw_1920.PNG?h=f0649ee1c0e604b8d8f1acd6b0abf3c9 1727w",
          alt: "Image 1 for PRESIONA TU PECHO COMO LO HACES HARINA P.A.N."
        },
        {
          src: "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c1b75f9b-669b-4aac-af09-0133035bef78_rw_1920.JPG?h=44a23865791b18596ab15ca893a44b97",
          srcSet: "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c1b75f9b-669b-4aac-af09-0133035bef78_rw_600.JPG?h=f70082d38c74e2fe9026e3ce659d7112 600w,https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c1b75f9b-669b-4aac-af09-0133035bef78_rw_1200.JPG?h=b4ac6e9a06824eaae432cf9e513cfca2 1200w,https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c1b75f9b-669b-4aac-af09-0133035bef78_rw_1920.JPG?h=44a23865791b18596ab15ca893a44b97 1920w",
          alt: "Image 2 for PRESIONA TU PECHO COMO LO HACES HARINA P.A.N."
        }
      ]
    },
    {
      title: "facade.",
      description: "An experimental sound project (best experienced with headphones). The first of an ongoing series on trans existence and visibility.",
      videos: [
        { url: "https://www.youtube.com/embed/sRGrNg-6z20", label: "Original Piece" },
      ],
    },
    {
      title: "water study",
      videos: [
        { url: "https://www-ccv.adobe.io/v1/player/ccv/3zRuVQVyR6j/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View", label: "Original Piece" },
      ],
    },
    {
      title: "JITTER",
      videos: [
        { url: "https://www-ccv.adobe.io/v1/player/ccv/GLozT9_KA7q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View", label: "Original Piece" },
      ],
    },
  ]

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % projects[0].videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + projects[0].videos.length) % projects[0].videos.length)
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 sm:p-16 font-zen text-white">
      <title>ari peró | audiovisual media & experimental performance</title>
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/work" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Work
        </Link>
        
        <h1 className="text-4xl mb-8 font-grand">Audiovisual Media & &thinsp;Experimental Performance</h1>
      
        <div className="space-y-16">
          {projects.map((project, projectIndex) => (
            <Card key={projectIndex} className="bg-white/5 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold font-montserrat text-white text-center mt-1 mb-6">{project.title}</h2>
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <VideoPlayer src={project.videos[projectIndex === 0 ? currentVideo : 0].url} />
                    </motion.div>
                  </AnimatePresence>
                  {project.videos.length > 1 && projectIndex === 0 && (
                    <>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 group" style={{ left: '-18px' }}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/10 hover:bg-white/30 text-white hover:text-white"
                          onClick={prevVideo}
                        >
                          <ChevronLeft className="h-6 w-6" />
                          <span className="sr-only">Previous: {project.videos[(currentVideo - 1 + project.videos.length) % project.videos.length].label}</span>
                        </Button>
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.videos[(currentVideo - 1 + project.videos.length) % project.videos.length].label}
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 group" style={{ right: '-18px' }}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/10 hover:bg-white/30 text-white hover:text-white"
                          onClick={nextVideo}
                        >
                          <ChevronRight className="h-6 w-6" />
                          <span className="sr-only">Next: {project.videos[(currentVideo + 1) % project.videos.length].label}</span>
                        </Button>
                        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.videos[(currentVideo + 1) % project.videos.length].label}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-gray-200 mb-4 text-center">{project.description}</p>
                {project.additionalText && (
                  <p className="text-gray-300 text-sm mb-2 text-center">{project.additionalText}</p>
                )}
                {project.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-video cursor-pointer" onClick={() => setExpandedImage(image)}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill={true}
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Additional Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://www.youtube.com/embed/7WYgSjm-JNo",
              "https://www.youtube.com/embed/5fz8LTeYU0c",
              "https://www.youtube.com/embed/u1NJjV-3i5o"
            ].map((videoUrl, index) => (
              <div key={index} className="aspect-video">
                <iframe 
                  src={videoUrl} 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      {expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setExpandedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={expandedImage.src}
              alt={expandedImage.alt}
              // layout="intrinsic"
              width={1920}
              height={1080}
              style={{ objectFit: "contain" }}
              className="rounded-lg"
              loading="lazy"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white"
              onClick={() => setExpandedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close expanded image</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}