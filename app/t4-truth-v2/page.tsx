import type { Metadata } from 'next'

import { HeroTruthEngineV2 } from '@/components/t4-truth-v2/HeroTruthEngine-v2'
import { SocialProofTruthEngineV2 } from '@/components/t4-truth-v2/SocialProofTruthEngine-v2'
import { ValuePropsTruthEngineV2 } from '@/components/t4-truth-v2/ValuePropsTruthEngine-v2'
import { UnifiedDataModelSectionV2 } from '@/components/t4-truth-v2/UnifiedDataModelSection-v2'
import { UseCasesTruthEngineV2 } from '@/components/t4-truth-v2/UseCasesTruthEngine-v2'
import { FeaturesTruthEngineV2 } from '@/components/t4-truth-v2/FeaturesTruthEngine-v2'
import { DataTransparencySectionV2 } from '@/components/t4-truth-v2/DataTransparencySection-v2'
import { FinalCtaTruthEngineV2 } from '@/components/t4-truth-v2/FinalCtaTruthEngine-v2'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV2Page() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <HeroTruthEngineV2 />
      <SocialProofTruthEngineV2 />
      <ValuePropsTruthEngineV2 />
      <UnifiedDataModelSectionV2 />
      <UseCasesTruthEngineV2 />
      <FeaturesTruthEngineV2 />
      <DataTransparencySectionV2 />
      <FinalCtaTruthEngineV2 />
    </main>
  )
}
