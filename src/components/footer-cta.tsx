"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export function FooterCTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <BlurFade delay={0.2}>
            <h2 className="text-display mb-8 lg:mb-0">
              Let's work
              <br />
              together
            </h2>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col items-start lg:items-end space-y-6">
              <motion.button
                className="group relative w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--primary)]"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>

              <div className="text-right">
                <p className="text-sm text-foreground/60 mb-1">Get in touch</p>
                <a
                  href="mailto:hello@dennissnellenberg.com"
                  className="text-lg font-medium hover:text-[var(--primary)] transition-colors"
                  data-cursor-hover
                >
                  hello@dennissnellenberg.com
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}