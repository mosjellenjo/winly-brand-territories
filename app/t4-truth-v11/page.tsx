import type { Metadata } from 'next'

import { HeroTruthEngineV11 } from '@/components/t4-truth-v11/HeroTruthEngine-v11'
import { SocialProofTruthEngineV11 } from '@/components/t4-truth-v11/SocialProofTruthEngine-v11'
import { UseCasesTruthEngineV11 } from '@/components/t4-truth-v11/UseCasesTruthEngine-v11'
import { ValuePropsTruthEngineV11 } from '@/components/t4-truth-v11/ValuePropsTruthEngine-v11'
import { FeaturesTruthEngineV11 } from '@/components/t4-truth-v11/FeaturesTruthEngine-v11'
import { DataTransparencySectionV11 } from '@/components/t4-truth-v11/DataTransparencySection-v11'
import { FinalCtaTruthEngineV11 } from '@/components/t4-truth-v11/FinalCtaTruthEngine-v11'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV11Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV11 />
      <SocialProofTruthEngineV11 />
      <UseCasesTruthEngineV11 />
      <ValuePropsTruthEngineV11 />
      <FeaturesTruthEngineV11 />
      <DataTransparencySectionV11 />
      <FinalCtaTruthEngineV11 />
    </main>
  )
}
