"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BlurFade delay={0.3}>
          <h1 className="text-hero-outline select-none">
            Dennis
            <br />
            Snellenberg
          </h1>
        </BlurFade>
      </div>

      {/* Decorative Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <motion.path
          d="M100 400 Q 300 200 500 400 T 900 400"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 600 Q 400 300 600 500 T 1000 500"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto">
        {/* Portrait */}
        <BlurFade delay={0.5} className="relative">
          <motion.div
            className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden bg-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-6xl text-gray-500">👤</div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Side Text */}
        <BlurFade delay={0.7} className="lg:ml-16 mt-8 lg:mt-0">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium tracking-wide text-foreground/60 mb-2">
              Freelance Designer & Developer
            </p>
            <div className="w-16 h-px bg-[var(--primary)] mx-auto lg:mx-0" />
          </div>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <BlurFade delay={0.9}>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-foreground/60">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center"
            data-cursor-hover
          >
            <motion.div
              className="w-1 h-3 bg-foreground/40 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </BlurFade>
    </section>
  )
}