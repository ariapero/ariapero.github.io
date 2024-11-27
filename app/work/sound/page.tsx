"use client";

import Link from "next/link";
import React from "react";
import GradientBackground from "../../../components/GradientBackground";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AudioPlayer = ({ src, title }: { src: string; title?: string }) => (
  <div className="w-full mb-4">
    {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
    <iframe
      src={src}
      className="w-full h-20"
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
    ></iframe>
  </div>
);

export default function SoundDesignPage() {
  return (
    <div className="min-h-screen text-white p-8 relative">
      <title>ari peró | sound design</title>
      <GradientBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/work"
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Work
        </Link>

        <motion.h1
          className="text-5xl mb-8 font-grand"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sound Design
        </motion.h1>

        <Card className="bg-white/5 backdrop-blur-sm overflow-hidden font-zen text-white text-center mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">EDITED IN LOGIC PRO.</h2>
            <p className="text-lg mb-4">
              Blending traditional African instruments like the mbëng-mbëng,
              mbira, talking drum (tama), and bala (West African marimba), with
              contemporary vocal techniques, inspired by both Sabar drumming and
              BaAka vocal traditions.
            </p>
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/RFFk8sh8d9N/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              // title="African Instruments Blend"
            />
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/KSh-YuuiBay/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              // title="Contemporary Vocal Techniques"
            />
            <p className="text-sm mt-4">
              Further incorporating the idea of using natural and everyday items
              as instruments (inspired by the BaAka people's water drumming);
              fashioned a giant shaker out of pill bottles, pepper grinders,
              rubber bands, tape, and a broken guitar neck. Also incorporated
              some indigenous instruments from the Venezuelan and Brazilian
              Amazon, like my seed ankle-rattle and hand carved frog güiro.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm overflow-hidden font-zen text-white text-center mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              EXPERIMENTAL AUDIO ENVIRONMENTS CRAFTED FROM ORIGINAL RECORDINGS.
              EDITED IN REAPER.
            </h2>
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/StA5j8MbfHW/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="ENVIRONMENT 1"
            />
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/6yGxZ2EMK9j/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="DRONE"
            />
            <p className="text-sm mt-2 mb-4">
              Convolution of my own voice (singing an excerpt from Gluck's "Che
              farò senza Euridice") onto recordings of various campus
              environments and everyday household objects.
            </p>
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/964-UwBpBHr/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="SOUND NARRATIVE: utilizing convolution"
            />
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/4cts7toCvBJ/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="VERTICAL NOISE: utilizing convolution"
            />
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/3oLwrozTKg4/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="FEEDBACK STUDY"
            />
            <p className="text-sm mt-2 mb-4">
              Adapted from one continuous recording of an experimental
              microphone feedback performance.
            </p>
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/AyuwpkDTyFy/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="5-minute ''challenge''"
            />
            <p className="text-sm mt-2 mb-4">
              Short piece created using simple metal water bottle as instrument.
            </p>
            <AudioPlayer
              src="https://www-ccv.adobe.io/v1/player/ccv/D7jIWVbsk9L/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View"
              title="THEIR NAME IS"
            />
            <p className="text-sm mt-2">
              Performance of an original piece highlighting distortion of the
              human voice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
