import type { Metadata } from 'next'

import { HeroTruthEngineV14 } from '@/components/t4-truth-v14/HeroTruthEngine-v14'
import { SocialProofTruthEngineV14 } from '@/components/t4-truth-v14/SocialProofTruthEngine-v14'
import { UseCasesTruthEngineV14 } from '@/components/t4-truth-v14/UseCasesTruthEngine-v14'
import { ValuePropsTruthEngineV14 } from '@/components/t4-truth-v14/ValuePropsTruthEngine-v14'
import { FeaturesTruthEngineV14 } from '@/components/t4-truth-v14/FeaturesTruthEngine-v14'
import { DataTransparencySectionV14 } from '@/components/t4-truth-v14/DataTransparencySection-v14'
import { FinalCtaTruthEngineV14 } from '@/components/t4-truth-v14/FinalCtaTruthEngine-v14'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV14Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV14 />
      <SocialProofTruthEngineV14 />
      <UseCasesTruthEngineV14 />
      <ValuePropsTruthEngineV14 />
      <FeaturesTruthEngineV14 />
      <DataTransparencySectionV14 />
      <FinalCtaTruthEngineV14 />
    </main>
  )
}
