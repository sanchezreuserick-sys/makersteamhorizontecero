'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { InformationSection } from '@/components/information-section'
import { FeaturedProject } from '@/components/featured-project'
import { AchievementsSection } from '@/components/achievements-section'
import { RegistrationGuide } from '@/components/registration-guide'
import { UniformKit } from '@/components/uniform-kit'
import { ContactDirectory } from '@/components/contact-directory'
import { FormCenter } from '@/components/form-center'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <Navigation />
      <HeroSection />
      <InformationSection />
      <FeaturedProject />
      <RegistrationGuide />
      <AchievementsSection />
      <UniformKit />
      <ContactDirectory />
      <FormCenter />
      <Footer />
    </main>
  )
}
