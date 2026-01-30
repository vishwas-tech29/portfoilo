"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

export function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      name: 'TWICE',
      services: 'Interaction & Development',
      image: '/placeholder-project-1.jpg'
    },
    {
      name: 'The Damai',
      services: 'Design & Development',
      image: '/placeholder-project-2.jpg'
    },
    {
      name: 'FABRIC™',
      services: 'Interaction & Development',
      image: '/placeholder-project-3.jpg'
    },
    {
      name: 'Aanstekelijk',
      services: 'Design & Development',
      image: '/placeholder-project-4.jpg'
    }
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <section className="py-32 px-6" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.2}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-20 text-center">Recent Work</h2>
        </BlurFade>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <BlurFade key={project.name} delay={0.3 + index * 0.1}>
              <motion.div
                className="group relative border-b border-foreground/10 py-8 lg:py-12"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                data-cursor-hover
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <motion.h3
                    className="text-project font-bold mb-2 lg:mb-0"
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h3>
                  <p className="text-sm lg:text-base text-foreground/60 font-medium">
                    {project.services}
                  </p>
                </div>

                {/* Hover Image */}
                {hoveredProject === index && (
                  <motion.div
                    className="fixed pointer-events-none z-50 w-80 h-48 rounded-lg overflow-hidden bg-gray-200"
                    style={{
                      left: mousePosition.x - 160,
                      top: mousePosition.y - 96,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-2xl text-gray-500">🖼️</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.8}>
          <div className="text-center mt-16">
            <motion.a
              href="#"
              className="inline-flex items-center text-lg font-medium border-b-2 border-foreground pb-1 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              See all work
            </motion.a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}