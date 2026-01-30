"use client"

import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="text-sm text-white/60">
                © {currentYear} Dennis Snellenberg
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-white/60 hover:text-white transition-colors self-start md:self-auto"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              Back to top ↑
            </motion.button>
          </div>
        </BlurFade>

        {/* Decorative Line */}
        <BlurFade delay={0.4}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <motion.div
                className="inline-block w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  )
}