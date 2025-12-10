import type { Metadata } from 'next'

import { HeroTruthEngineV1 } from '@/components/t4-truth-v1/HeroTruthEngine-v1'
import { SocialProofTruthEngineV1 } from '@/components/t4-truth-v1/SocialProofTruthEngine-v1'
import { ValuePropsTruthEngineV1 } from '@/components/t4-truth-v1/ValuePropsTruthEngine-v1'
import { UnifiedDataModelSectionV1 } from '@/components/t4-truth-v1/UnifiedDataModelSection-v1'
import { UseCasesTruthEngineV1 } from '@/components/t4-truth-v1/UseCasesTruthEngine-v1'
import { FeaturesTruthEngineV1 } from '@/components/t4-truth-v1/FeaturesTruthEngine-v1'
import { DataTransparencySectionV1 } from '@/components/t4-truth-v1/DataTransparencySection-v1'
import { FinalCtaTruthEngineV1 } from '@/components/t4-truth-v1/FinalCtaTruthEngine-v1'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEnginePage() {
  return (
    <main className="min-h-screen bg-truth2-bg">
      <HeroTruthEngineV1 />
      <SocialProofTruthEngineV1 />
      <ValuePropsTruthEngineV1 />
      <UnifiedDataModelSectionV1 />
      <UseCasesTruthEngineV1 />
      <FeaturesTruthEngineV1 />
      <DataTransparencySectionV1 />
      <FinalCtaTruthEngineV1 />
    </main>
  )
}
