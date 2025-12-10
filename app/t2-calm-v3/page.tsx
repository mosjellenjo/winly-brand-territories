import type { Metadata } from 'next'
import {
  HeroT2CalmV3,
  SocialProofT2CalmV3,
  ValuePropsT2CalmV3,
  UnifiedDataModelT2CalmV3,
  UseCasesT2CalmV3,
  FeaturesT2CalmV3,
  DataTransparencyT2CalmV3,
  FinalCtaT2CalmV3,
} from '@/components/t2-calm-v3'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description: 'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function CalmV3Page() {
  return (
    <main className="min-h-screen bg-calm3-sand-light text-calm3-text">
      <HeroT2CalmV3 />
      <SocialProofT2CalmV3 />
      <ValuePropsT2CalmV3 />
      <UnifiedDataModelT2CalmV3 />
      <UseCasesT2CalmV3 />
      <FeaturesT2CalmV3 />
      <DataTransparencyT2CalmV3 />
      <FinalCtaT2CalmV3 />
    </main>
  )
}
