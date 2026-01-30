"use client"

import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

export function StatusBadge() {
  return (
    <BlurFade delay={0.15}>
      <motion.div
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-foreground/10">
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-medium text-foreground/80">
            Available for work
          </span>
        </div>
      </motion.div>
    </BlurFade>
  )
}