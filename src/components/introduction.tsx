"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export function Introduction() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <BlurFade delay={0.2}>
          <h2 className="text-display mb-8">
            I create{' '}
            <span className="text-[var(--primary)] relative">
              thoughtful
              <motion.span
                className="absolute -top-4 -right-8 text-xs font-bold bg-[var(--primary)] text-white px-2 py-1 rounded"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: -10 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                HQ
              </motion.span>
            </span>{' '}
            experiences for brands
          </h2>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Helping brands to stand out in the digital era. Together we will set the new status quo. 
            No nonsense, always on the cutting edge.
          </p>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="text-base text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            The combination of my passion for design, code & interaction positions me in a unique place 
            in the web design world. I create digital experiences that are not only visually stunning 
            but also highly functional and user-friendly.
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <motion.button
            className="group relative w-32 h-32 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <motion.div
              className="absolute inset-0 bg-[var(--primary)]"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <span>My work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </BlurFade>
      </div>
    </section>
  )
}