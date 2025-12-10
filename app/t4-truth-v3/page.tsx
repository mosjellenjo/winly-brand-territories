import type { Metadata } from 'next'

import { HeroTruthEngineV3 } from '@/components/t4-truth-v3/HeroTruthEngine-v3'
import { SocialProofTruthEngineV3 } from '@/components/t4-truth-v3/SocialProofTruthEngine-v3'
import { ValuePropsTruthEngineV3 } from '@/components/t4-truth-v3/ValuePropsTruthEngine-v3'
import { UnifiedDataModelSectionV3 } from '@/components/t4-truth-v3/UnifiedDataModelSection-v3'
import { UseCasesTruthEngineV3 } from '@/components/t4-truth-v3/UseCasesTruthEngine-v3'
import { FeaturesTruthEngineV3 } from '@/components/t4-truth-v3/FeaturesTruthEngine-v3'
import { DataTransparencySectionV3 } from '@/components/t4-truth-v3/DataTransparencySection-v3'
import { FinalCtaTruthEngineV3 } from '@/components/t4-truth-v3/FinalCtaTruthEngine-v3'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV3Page() {
  return (
    <main className="min-h-screen bg-[#08090D]">
      <HeroTruthEngineV3 />
      <SocialProofTruthEngineV3 />
      <ValuePropsTruthEngineV3 />
      <UnifiedDataModelSectionV3 />
      <UseCasesTruthEngineV3 />
      <FeaturesTruthEngineV3 />
      <DataTransparencySectionV3 />
      <FinalCtaTruthEngineV3 />
    </main>
  )
}
