'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onLoadingComplete: () => void
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0)
    const [showText, setShowText] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const title = "Welcome!"

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
            clearInterval(interval)
            return 100
            }
            return prev + 1
        })
        }, 30)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (progress >= 30) {
        setShowText(true)
        }
        if (progress === 100) {
        setTimeout(() => {
            setIsComplete(true)
            // setTimeout(onLoadingComplete, 1000)  // for going to landing page immediately upon loading end
        }, 1000)
        }
    // }, [progress, onLoadingComplete])  // for going to landing page immediately upon loading end
    }, [progress])

    const letterVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 10
        },
        }),
        exit: (i: number) => ({
        y: -50,
        opacity: 0,
        transition: {
            delay: i * 0.05,
            type: 'spring',
            stiffness: 200,
            damping: 10
        },
        }),
    }

    return (
        // <AnimatePresence>
        <AnimatePresence onExitComplete={onLoadingComplete}>
            {!isComplete && (
                <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#163734]"
                initial={{ y: 0 }}
                exit={{ 
                    y: '-100%',
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                }}
                >
                <div className="relative w-full max-w-xl px-4">
                    {/* Loading Bar */}
                    <motion.div
                    className="h-0.5 bg-[#238177]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    />

                    {/* Text Animation */}
                    <AnimatePresence mode="wait">
                    {showText && (
                        <motion.div
                        className="absolute left-0 right-0 -top-16 text-center overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        >
                        {/* <motion.h1 className="text-5xl font-bold text-white font-reenie whitespace-pre z-500">  if name */}
                        <motion.h1 className="text-5xl font-bold text-white font-grand z-500">
                            {title.split('').map((char, index) => (
                            <motion.span
                                key={`${char}-${index}`}
                                variants={letterVariants}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                            ))}
                        </motion.h1>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}