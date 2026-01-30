"use client"

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, MapPin } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export function Sidebar() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <BlurFade delay={0.2}>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex flex-col space-y-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-6 h-6 text-foreground/60 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon className="w-full h-full" />
              </motion.a>
            ))}
          </div>

          {/* Vertical Line */}
          <motion.div
            className="w-px h-16 bg-foreground/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* Location Widget */}
          <motion.div
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs text-center text-foreground/60 writing-mode-vertical-rl rotate-180">
              Located in the Netherlands
            </div>
          </motion.div>
        </div>
      </div>
    </BlurFade>
  )
}