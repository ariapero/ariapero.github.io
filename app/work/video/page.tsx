'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/filter_NRM.jpg?height=3208&width=4537",
    "/globe.svg?height=2481&width=3508",
    "/vercel.svg?height=2481&width=3508"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-[#5da93d] text-5xl font-semibold mb-4 font-sloop">Sketchbook</h1>
          <Link href="/" target="_blank" rel="noopener noreferrer" className="text-[#5da93d] hover:underline">
            Read here
          </Link>
        </header>

        <main className="space-y-12">
          <section>
            <p className="text-[#5da93d] mb-4">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque sollicitudin ornare nascetur urna ullamcorper tincidunt donec. Non torquent urna egestas aliquet magnis pretium ligula. Pharetra mauris non ligula imperdiet mus fermentum massa metus morbi.
            </p>
            <p className="text-[#5da93d]">
              Mollis magna magna dictum vitae vulputate quam. Risus dictum taciti hac scelerisque fringilla proin justo. Erat fermentum posuere netus quis libero platea. Faucibus ridiculus odio primis, donec iaculis venenatis.
            </p>
          </section>

          <section className="flex gap-4">
            <Image src="/filter_NRM.jpg?height=2373&width=3380" alt="Sketch 1" width={3380} height={2373} className="w-[56%] h-auto" />
            <Image src="/filter_NRM.jpg?height=2175&width=3076" alt="Sketch 2" width={3076} height={2175} className="w-[40%] h-auto" />
          </section>

          <section className="flex">
            <div className="w-1/2 text-right pr-4">
              <p className="text-[#5da93d]">
                Malesuada eget aenean id pharetra nisi vulputate accumsan. Aenean ipsum taciti nec accumsan iaculis. Suscipit ornare potenti suscipit taciti odio dignissim. Lacinia ridiculus aliquet et mollis molestie dis. Ornare sapien lacinia fames quam purus mi.
              </p>
            </div>
            <div className="w-1/2"></div>
          </section>

          <section className="relative h-[600px] w-5/6">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} layout="fill" objectFit="contain" />
            </motion.div>
          </section>

          <section className="flex">
            <div className="w-5/12"></div>
            <div className="w-5/12">
              <p className="text-[#5da93d]">
                Quam himenaeos ridiculus eleifend parturient facilisi etiam suspendisse. Ullamcorper nascetur dapibus morbi ridiculus integer. Consectetur convallis tortor lobortis efficitur penatibus amet iaculis facilisis. Litora condimentum leo magnis non, etiam nec himenaeos nibh sapien.
                Eu convallis maecenas enim odio suscipit amet aliquet. Senectus varius libero blandit quis interdum vivamus dolor id dictum. Placerat eu finibus ac himenaeos elementum fusce. Per eget libero cubilia iaculis tincidunt. Taciti himenaeos libero nulla; nisl cubilia aenean sit. Gravida posuere semper potenti sapien cubilia nisi. Nostra augue eu accumsan praesent dapibus auctor. Nunc eu inceptos torquent sem inceptos, velit a ligula class. Porta iaculis cras aptent accumsan dis volutpat lacinia.
              </p>
            </div>
          </section>

          <section className="flex justify-end">
            <div className="w-5/12">
              <Image src="/filter_NRM.jpg?height=3401&width=2408" alt="Final sketch" width={2408} height={3401} className="w-full h-auto" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}