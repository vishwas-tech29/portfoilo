"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export function PromptingIsAllYouNeed() {
  const [showFullName, setShowFullName] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading for 3 seconds, then transition to hero
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Loading Screen
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#2a2a2a] flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 bg-white rounded-full"
              />
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-4xl md:text-5xl font-light text-white"
              >
                Hello
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          // Hero Section
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-screen overflow-hidden"
          >
            {/* Full Screen Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/vishwas-portrait.jpg')",
              }}
            >
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Top Navigation */}
            <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20">
              <BlurFade delay={0.1}>
                <motion.p 
                  className="text-sm text-white/90 cursor-pointer"
                  onHoverStart={() => setShowFullName(true)}
                  onHoverEnd={() => setShowFullName(false)}
                  data-cursor-hover
                >
                  <motion.span
                    initial={false}
                    animate={{ opacity: showFullName ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={showFullName ? "absolute" : ""}
                  >
                    © Code by Vishwas
                  </motion.span>
                  <motion.span
                    initial={false}
                    animate={{ opacity: showFullName ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={!showFullName ? "absolute" : ""}
                  >
                    © Code by Vishwas Rallapalli
                  </motion.span>
                </motion.p>
              </BlurFade>
              <BlurFade delay={0.2}>
                <nav className="flex items-center space-x-8">
                  <a href="#work" className="text-sm text-white/90 hover:text-white transition-colors" data-cursor-hover>
                    Work
                  </a>
                  <a href="#about" className="text-sm text-white/90 hover:text-white transition-colors" data-cursor-hover>
                    About
                  </a>
                  <a href="#contact" className="text-sm text-white/90 hover:text-white transition-colors" data-cursor-hover>
                    Contact
                  </a>
                </nav>
              </BlurFade>
            </div>

            {/* Location Badge - Top Right */}
            <BlurFade delay={0.3}>
              <div className="absolute top-20 right-8 z-20">
                <div className="flex items-center bg-black/80 text-white rounded-full px-4 py-2 text-sm backdrop-blur-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">India</span>
                </div>
              </div>
            </BlurFade>

            {/* Professional Titles - Top Right */}
            <BlurFade delay={0.4}>
              <div className="absolute top-36 right-8 text-right z-20">
                <motion.div
                  className="text-white/90"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center justify-end mb-2">
                    <div className="w-8 h-px bg-white/60 mr-3" />
                    <span className="text-sm">↘</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg lg:text-xl font-light">Freelancer Web Developer</p>
                    <p className="text-lg lg:text-xl font-light">Robotic Engineer</p>
                    <p className="text-lg lg:text-xl font-light">Designer & Developer</p>
                  </div>
                </motion.div>
              </div>
            </BlurFade>

            {/* Animated Name Text - At Bottom to show face clearly */}
            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center overflow-hidden z-15 pointer-events-none">
              <motion.h1 
                className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-light leading-none tracking-tight text-white/80 select-none whitespace-nowrap"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 0.8 
                }}
              >
                Vishwas Rallapalli — Vishwas Rallapalli — Vishwas Rallapalli — 
              </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <BlurFade delay={0.7}>
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs uppercase tracking-widest text-white/80">
                  Scroll
                </span>
                <motion.div
                  className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
                  data-cursor-hover
                >
                  <motion.div
                    className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </BlurFade>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PromptingIsAllYouNeed