import type { Metadata } from 'next'
import {
  HeroT2CalmV2,
  SocialProofT2CalmV2,
  ValuePropsT2CalmV2,
  UnifiedDataModelT2CalmV2,
  UseCasesT2CalmV2,
  FeaturesT2CalmV2,
  DataTransparencyT2CalmV2,
  FinalCtaT2CalmV2,
} from '@/components/t2-calm-v2'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description: 'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function CalmV2Page() {
  return (
    <main className="min-h-screen bg-calm2-sand text-calm2-text">
      <HeroT2CalmV2 />
      <SocialProofT2CalmV2 />
      <ValuePropsT2CalmV2 />
      <UnifiedDataModelT2CalmV2 />
      <UseCasesT2CalmV2 />
      <FeaturesT2CalmV2 />
      <DataTransparencyT2CalmV2 />
      <FinalCtaT2CalmV2 />
    </main>
  )
}
