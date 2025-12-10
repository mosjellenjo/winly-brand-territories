import type { Metadata } from 'next'
import {
  HeroT2CalmV1,
  SocialProofT2CalmV1,
  ValuePropsT2CalmV1,
  UnifiedDataModelT2CalmV1,
  UseCasesT2CalmV1,
  FeaturesT2CalmV1,
  DataTransparencyT2CalmV1,
  FinalCtaT2CalmV1,
} from '@/components/t2-calm-v1'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description: 'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function CalmPage() {
  return (
    <main className="min-h-screen bg-calm-bg text-calm-text">
      <HeroT2CalmV1 />
      <SocialProofT2CalmV1 />
      <ValuePropsT2CalmV1 />
      <UnifiedDataModelT2CalmV1 />
      <UseCasesT2CalmV1 />
      <FeaturesT2CalmV1 />
      <DataTransparencyT2CalmV1 />
      <FinalCtaT2CalmV1 />
    </main>
  )
}
