"use client"

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import Image from 'next/image'
import { useState } from 'react'

export function Hero() {
  const [showFullName, setShowFullName] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSCO3198.JPG"
          alt="Vishwas Rallapalli"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            // Fallback to another stage/performance image
            target.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.0.3';
          }}
        />
        {/* Dark overlay for better text readability */}
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

      {/* Location Badge - Right */}
      <BlurFade delay={0.3}>
        <div className="absolute top-1/3 right-8 z-20">
          <div className="flex items-center bg-black/80 text-white rounded-full px-6 py-4 text-sm backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 mr-4">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium leading-tight">Lives in</p>
              <p className="text-sm font-medium leading-tight">India</p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Professional Title - Right */}
      <BlurFade delay={0.4}>
        <div className="absolute top-2/3 right-8 text-right z-20">
          <motion.div
            className="text-white/90"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center justify-end mb-3">
              <div className="w-12 h-px bg-white/60 mr-3" />
              <span className="text-base">↘</span>
            </div>
            <p className="text-3xl lg:text-4xl font-light mb-1">Freelancer</p>
            <p className="text-3xl lg:text-4xl font-light">Web Developer</p>
          </motion.div>
        </div>
      </BlurFade>

      {/* Scroll Indicator */}
      <BlurFade delay={0.7}>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
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
    </section>
  )
}