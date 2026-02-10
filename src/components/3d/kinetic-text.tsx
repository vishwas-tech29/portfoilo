"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { heroConfig } from '@/config/hero-config'

export function KineticText() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const { mainStatement, roles, manifesto } = heroConfig.text
  const { primary, secondary } = heroConfig.colors
  const timing = heroConfig.timing

  // Softer, more restrained animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: timing.textDelay / 1000
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 80
      }
    }
  }

  const roleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (timing.roleDelay / 1000) + (i * (timing.roleStagger / 1000)),
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    })
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
      {/* Main Statement - Quiet but undeniable */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center">
          {mainStatement.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
              style={{
                color: char === ' ' ? 'transparent' : '#ffffff',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Roles - Clean, minimal */}
      <motion.div 
        className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl"
        initial="hidden"
        animate="visible"
      >
        {roles.map((role, i) => (
          <motion.div
            key={role}
            custom={i}
            variants={roleVariants}
            className="flex items-center"
          >
            <motion.span
              className="font-light tracking-wide text-white/70"
              whileHover={{
                color: 'rgba(255, 255, 255, 0.9)',
                transition: { duration: 0.3 }
              }}
            >
              {role}
            </motion.span>
            {i < roles.length - 1 && (
              <motion.span
                className="mx-3 text-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (timing.roleDelay / 1000) + 0.3 + (i * (timing.roleStagger / 1000)), duration: 0.4 }}
              >
                •
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Manifesto - Quiet declaration */}
      <motion.p
        className="mt-20 text-xs md:text-sm tracking-[0.4em] uppercase text-white/30 font-light"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: timing.manifestoDelay / 1000, duration: 1.5 }}
      >
        {manifesto}
      </motion.p>

      {/* Minimal accent line */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-32"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.1 }}
        transition={{ delay: (timing.roleDelay / 1000) + 1, duration: 2, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${primary}40 50%, transparent 100%)`
        }}
      />
    </div>
  )
}
