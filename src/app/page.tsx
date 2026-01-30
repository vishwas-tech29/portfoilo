"use client"

import { CustomCursor } from '@/components/ui/custom-cursor'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import { Navigation } from '@/components/navigation'
import { Sidebar } from '@/components/sidebar'
import { StatusBadge } from '@/components/status-badge'
import { Hero } from '@/components/hero'
import { Introduction } from '@/components/introduction'
import KineticTeamHybrid from '@/components/ui/kinetic-team-hybrid'
import { ProjectGrid } from '@/components/project-grid'
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <CustomCursor />
      <SmoothScroll />
      <Navigation />
      <Sidebar />
      <StatusBadge />
      
      <main>
        <Hero />
        <Introduction />
        <KineticTeamHybrid />
        <ProjectGrid />
        <LetsWorkTogether />
      </main>
      
      <Footer />
    </div>
  )
}
