"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { BlurFade } from '@/components/ui/blur-fade'

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.2 + i * 0.015,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg
        className="w-full h-full text-[var(--primary)]"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.015}
            initial={{ pathLength: 0.2, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroWithPaths() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Paths */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BlurFade delay={0.3}>
          <h1 className="text-hero-outline select-none opacity-50">
            Dennis
            <br />
            Snellenberg
          </h1>
        </BlurFade>
      </div>

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