import type { Metadata } from 'next'

import { HeroTruthEngineV13 } from '@/components/t4-truth-v13/HeroTruthEngine-v13'
import { SocialProofTruthEngineV13 } from '@/components/t4-truth-v13/SocialProofTruthEngine-v13'
import { UseCasesTruthEngineV13 } from '@/components/t4-truth-v13/UseCasesTruthEngine-v13'
import { ValuePropsTruthEngineV13 } from '@/components/t4-truth-v13/ValuePropsTruthEngine-v13'
import { FeaturesTruthEngineV13 } from '@/components/t4-truth-v13/FeaturesTruthEngine-v13'
import { DataTransparencySectionV13 } from '@/components/t4-truth-v13/DataTransparencySection-v13'
import { FinalCtaTruthEngineV13 } from '@/components/t4-truth-v13/FinalCtaTruthEngine-v13'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV13Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV13 />
      <SocialProofTruthEngineV13 />
      <UseCasesTruthEngineV13 />
      <ValuePropsTruthEngineV13 />
      <FeaturesTruthEngineV13 />
      <DataTransparencySectionV13 />
      <FinalCtaTruthEngineV13 />
    </main>
  )
}
