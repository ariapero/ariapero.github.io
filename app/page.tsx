"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  GraduationCap,
  Megaphone,
  Github,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RadialBackground from "../components/RadialBackground";
import CursorBuddy from "../components/CursorBuddy";
import CursorTrail from "../components/CursorTrail";
import Preloader from "../components/Preloader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            key="preloader"
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* <AnimatePresence mode="wait">
        {isLoading ? (
            <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
        ) : ( */}
      <AnimatePresence>
        {/* <AnimatePresence mode="wait"> */}
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RadialBackground baseColor="#163734" highlightColor="#238177">
              <div className="min-h-screen w-full relative overflow-hidden">
                <CursorTrail />
                <CursorBuddy
                  src="/skate2.png"
                  alt="Ari Peró skating with their cat, Michi"
                  width={65}
                  height={60}
                />
                <motion.main
                  className="relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-xl">
                    <motion.h1
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 font-reenie"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      Ari Peró
                    </motion.h1>

                    <motion.div
                      className="space-y-2 text-base sm:text-xl text-white/90 mb-10 sm:mb-12 font-inter"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <p>MIT Urban Science, CS, & Music</p>
                      <p>B.S. Candidate 2025</p>
                    </motion.div>

                    <motion.nav
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <Link
                        href="/bio"
                        className="flex items-center gap-2 text-white text-base sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                      >
                        Bio <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/work"
                        className="flex items-center gap-2 text-white text-base sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                      >
                        Work <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/docs/Ari_Pero_Resume.pdf"
                        className="flex items-center gap-2 text-white text-base sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                        target="_blank"
                      >
                        Resume <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://ariapero.myportfolio.com/"
                        className="flex items-center gap-2 text-white text-base sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                        target="_blank"
                      >
                        Ex-Portfolio <ArrowRight className="h-5 w-5" />
                      </Link>
                    </motion.nav>
                  </div>
                </motion.main>

                <div className="absolute right-6 sm:right-8 inset-y-0 flex items-center">
                  <motion.div
                    className="flex flex-col gap-6 z-20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <a
                      href="https://github.com/ariapero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-50 transition-colors duration-300"
                    >
                      <Github size={28} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ari-pero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-50 transition-colors duration-300"
                    >
                      <Linkedin size={28} />
                    </a>
                    <a
                      href="https://www.instagram.com/ariapero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-50 transition-colors duration-300"
                    >
                      <Instagram size={28} />
                    </a>
                    <a
                      href="https://www.instagram.com/transindigena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-50 transition-colors duration-300"
                    >
                      <Megaphone size={28} />
                    </a>
                    <a
                      href="https://dusp.mit.edu/people/ari-pero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-50 transition-colors duration-300"
                    >
                      <GraduationCap size={28} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </RadialBackground>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
