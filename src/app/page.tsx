"use client"

import { CustomCursor } from '@/components/ui/custom-cursor'
import { PromptingIsAllYouNeed } from '@/components/ui/animated-hero-section'
import { Introduction } from '@/components/introduction'
import { StorytellingSection } from '@/components/storytelling-section'
import KineticTeamHybrid from '@/components/ui/kinetic-team-hybrid'
import { ProjectGrid } from '@/components/project-grid'
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <PromptingIsAllYouNeed />
      <Introduction />
      <StorytellingSection />
      <KineticTeamHybrid />
      <ProjectGrid />
      <LetsWorkTogether />
      <Footer />
    </div>
  )
}
