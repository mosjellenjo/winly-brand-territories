import type { Metadata } from 'next'

import { HeroTruthEngineV4 } from '@/components/t4-truth-v4/HeroTruthEngine-v4'
import { SocialProofTruthEngineV4 } from '@/components/t4-truth-v4/SocialProofTruthEngine-v4'
import { ValuePropsTruthEngineV4 } from '@/components/t4-truth-v4/ValuePropsTruthEngine-v4'
import { UnifiedDataModelSectionV4 } from '@/components/t4-truth-v4/UnifiedDataModelSection-v4'
import { UseCasesTruthEngineV4 } from '@/components/t4-truth-v4/UseCasesTruthEngine-v4'
import { FeaturesTruthEngineV4 } from '@/components/t4-truth-v4/FeaturesTruthEngine-v4'
import { DataTransparencySectionV4 } from '@/components/t4-truth-v4/DataTransparencySection-v4'
import { FinalCtaTruthEngineV4 } from '@/components/t4-truth-v4/FinalCtaTruthEngine-v4'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV4Page() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <HeroTruthEngineV4 />
      <SocialProofTruthEngineV4 />
      <ValuePropsTruthEngineV4 />
      <UnifiedDataModelSectionV4 />
      <UseCasesTruthEngineV4 />
      <FeaturesTruthEngineV4 />
      <DataTransparencySectionV4 />
      <FinalCtaTruthEngineV4 />
    </main>
  )
}
