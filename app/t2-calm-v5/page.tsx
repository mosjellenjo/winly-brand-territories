import type { Metadata } from 'next'
import {
  HeroT2CalmV5,
  SocialProofT2CalmV5,
  ValuePropsT2CalmV5,
  UnifiedDataModelT2CalmV5,
  UseCasesT2CalmV5,
  FeaturesT2CalmV5,
  DataTransparencyT2CalmV5,
  FinalCtaT2CalmV5,
} from '@/components/t2-calm-v5'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description: 'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function CalmV5Page() {
  return (
    <main className="min-h-screen bg-calm3-sand-light text-calm3-text">
      <HeroT2CalmV5 />
      <SocialProofT2CalmV5 />
      <ValuePropsT2CalmV5 />
      <UnifiedDataModelT2CalmV5 />
      <UseCasesT2CalmV5 />
      <FeaturesT2CalmV5 />
      <DataTransparencyT2CalmV5 />
      <FinalCtaT2CalmV5 />
    </main>
  )
}
