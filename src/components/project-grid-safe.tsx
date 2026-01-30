"use client"

import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'
import { CardStack, CardStackItem } from '@/components/ui/card-stack'

export function ProjectGridSafe() {
  const projects: CardStackItem[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with seamless checkout and payment integration',
      href: '#',
      tag: 'Web Development'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      description: 'Complete visual identity design for innovative tech startup',
      href: '#',
      tag: 'Design'
    },
    {
      id: 3,
      title: 'Interactive Portfolio',
      description: 'Award-winning portfolio website with custom animations and interactions',
      href: '#',
      tag: 'UI/UX'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      description: 'Intuitive mobile experience for fitness tracking and wellness',
      href: '#',
      tag: 'Mobile'
    },
    {
      id: 5,
      title: 'Corporate Website',
      description: 'Professional website design for leading consulting firm',
      href: '#',
      tag: 'Development'
    },
    {
      id: 6,
      title: 'Creative Campaign',
      description: 'Multi-platform creative campaign for luxury brand launch',
      href: '#',
      tag: 'Creative'
    }
  ]

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-px bg-[var(--primary)] mx-auto" />
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <CardStack
            items={projects}
            initialIndex={0}
            autoAdvance
            intervalMs={4000}
            pauseOnHover
            showDots
            cardWidth={480}
            cardHeight={300}
            maxVisible={5}
            overlap={0.5}
            spreadDeg={40}
            className="mt-12"
          />
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="text-center mt-16">
            <motion.a
              href="#"
              className="inline-flex items-center text-lg font-medium border-b-2 border-foreground pb-1 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              View all projects
            </motion.a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}