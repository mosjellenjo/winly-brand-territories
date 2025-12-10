import type { Metadata } from 'next'

import { HeroTruthEngineV7 } from '@/components/t4-truth-v7/HeroTruthEngine-v7'
import { SocialProofTruthEngineV7 } from '@/components/t4-truth-v7/SocialProofTruthEngine-v7'
import { UseCasesTruthEngineV7 } from '@/components/t4-truth-v7/UseCasesTruthEngine-v7'
import { ValuePropsTruthEngineV7 } from '@/components/t4-truth-v7/ValuePropsTruthEngine-v7'
import { FeaturesTruthEngineV7 } from '@/components/t4-truth-v7/FeaturesTruthEngine-v7'
import { DataTransparencySectionV7 } from '@/components/t4-truth-v7/DataTransparencySection-v7'
import { FinalCtaTruthEngineV7 } from '@/components/t4-truth-v7/FinalCtaTruthEngine-v7'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV7Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV7 />
      <SocialProofTruthEngineV7 />
      <UseCasesTruthEngineV7 />
      <ValuePropsTruthEngineV7 />
      <FeaturesTruthEngineV7 />
      <DataTransparencySectionV7 />
      <FinalCtaTruthEngineV7 />
    </main>
  )
}
