"use client"

import { GLSLHills } from "@/components/ui/glsl-hills"
import { BlurFade } from "@/components/ui/blur-fade"
import { motion } from "framer-motion"

export function StorytellingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GLSL Hills Background */}
      <div className="absolute inset-0">
        <GLSLHills 
          width="100vw" 
          height="100vh" 
          cameraZ={125} 
          planeSize={256} 
          speed={0.3} 
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 text-center">
        <BlurFade delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
              <span className="italic text-4xl md:text-6xl lg:text-7xl font-thin block mb-4">
                Crafting Digital Stories
              </span>
              <span className="block">That Inspire</span>
            </h1>

            {/* Story Content */}
            <div className="space-y-6 text-white/90 max-w-2xl mx-auto">
              <BlurFade delay={0.4}>
                <p className="text-lg md:text-xl leading-relaxed">
                  From robotics engineering to web development, my journey has been about 
                  bridging the gap between complex technology and human experience.
                </p>
              </BlurFade>

              <BlurFade delay={0.6}>
                <p className="text-lg md:text-xl leading-relaxed">
                  Every project tells a story. Every line of code serves a purpose. 
                  Every design decision creates an emotion. This is how I approach 
                  building digital experiences that matter.
                </p>
              </BlurFade>

              <BlurFade delay={0.8}>
                <div className="flex items-center justify-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary">50+</div>
                    <div className="text-sm uppercase tracking-widest text-white/70">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary">3+</div>
                    <div className="text-sm uppercase tracking-widest text-white/70">Years</div>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <div className="text-3xl font-light text-primary">∞</div>
                    <div className="text-sm uppercase tracking-widest text-white/70">Possibilities</div>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Call to Action */}
            <BlurFade delay={1.0}>
              <motion.div
                className="pt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button 
                  className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:border-primary hover:text-primary transition-all duration-300"
                  data-cursor-hover
                  onClick={() => {
                    const recentWorksSection = document.querySelector('#recent-works');
                    recentWorksSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10 text-sm uppercase tracking-widest">
                    Explore My Work
                  </span>
                  <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </motion.div>
            </BlurFade>
          </motion.div>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <BlurFade delay={1.2}>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-white/60">
            Continue
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            data-cursor-hover
          >
            <motion.div
              className="w-1.5 h-3 bg-white/40 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </BlurFade>
    </section>
  )
}