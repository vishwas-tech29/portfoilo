"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 800)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="text-center">
            {/* Loading text - minimal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-xl md:text-2xl font-light text-white/80 mb-3">
                Initializing
              </h2>
              <p className="text-xs text-white/40 tracking-[0.4em] uppercase">
                Preparing Experience
              </p>
            </motion.div>

            {/* Progress bar - clean and minimal */}
            <div className="w-48 md:w-64 h-px bg-white/10 relative overflow-hidden mx-auto">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/30"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress percentage - subtle */}
            <motion.p
              className="mt-6 text-white/50 font-mono text-xs"
              key={Math.floor(progress)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress)}%
            </motion.p>

            {/* Single pulsing dot */}
            <motion.div
              className="flex justify-center mt-10"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-white/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
