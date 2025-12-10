import type { Metadata } from 'next'

import { HeroTruthEngineV5 } from '@/components/t4-truth-v5/HeroTruthEngine-v5'
import { SocialProofTruthEngineV5 } from '@/components/t4-truth-v5/SocialProofTruthEngine-v5'
import { UseCasesTruthEngineV5 } from '@/components/t4-truth-v5/UseCasesTruthEngine-v5'
import { ValuePropsTruthEngineV5 } from '@/components/t4-truth-v5/ValuePropsTruthEngine-v5'
import { FeaturesTruthEngineV5 } from '@/components/t4-truth-v5/FeaturesTruthEngine-v5'
import { DataTransparencySectionV5 } from '@/components/t4-truth-v5/DataTransparencySection-v5'
import { FinalCtaTruthEngineV5 } from '@/components/t4-truth-v5/FinalCtaTruthEngine-v5'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV5Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV5 />
      <SocialProofTruthEngineV5 />
      <UseCasesTruthEngineV5 />
      <ValuePropsTruthEngineV5 />
      <FeaturesTruthEngineV5 />
      <DataTransparencySectionV5 />
      <FinalCtaTruthEngineV5 />
    </main>
  )
}
