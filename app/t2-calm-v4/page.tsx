import type { Metadata } from 'next'
import {
  HeroT2CalmV4,
  SocialProofT2CalmV4,
  ValuePropsT2CalmV4,
  UnifiedDataModelT2CalmV4,
  UseCasesT2CalmV4,
  FeaturesT2CalmV4,
  DataTransparencyT2CalmV4,
  FinalCtaT2CalmV4,
} from '@/components/t2-calm-v4'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description: 'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function CalmV4Page() {
  return (
    <main className="min-h-screen bg-calm4-sand-light text-calm4-text">
      <HeroT2CalmV4 />
      <SocialProofT2CalmV4 />
      <ValuePropsT2CalmV4 />
      <UnifiedDataModelT2CalmV4 />
      <UseCasesT2CalmV4 />
      <FeaturesT2CalmV4 />
      <DataTransparencyT2CalmV4 />
      <FinalCtaT2CalmV4 />
    </main>
  )
}
