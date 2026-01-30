"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

export function Navigation() {
  const [language, setLanguage] = useState('EN')

  return (
    <BlurFade delay={0.1}>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            Dennis
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide hover:text-[var(--primary)] transition-colors"
                whileHover={{ y: -2 }}
                data-cursor-hover
              >
                {item}
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'EN' ? 'NL' : 'EN')}
              className="text-sm font-medium tracking-wide px-3 py-1 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              {language}
            </motion.button>
          </div>
        </div>
      </nav>
    </BlurFade>
  )
}