import type { Metadata } from 'next'

import { HeroTruthEngineV10 } from '@/components/t4-truth-v10/HeroTruthEngine-v10'
import { SocialProofTruthEngineV10 } from '@/components/t4-truth-v10/SocialProofTruthEngine-v10'
import { UseCasesTruthEngineV10 } from '@/components/t4-truth-v10/UseCasesTruthEngine-v10'
import { ValuePropsTruthEngineV10 } from '@/components/t4-truth-v10/ValuePropsTruthEngine-v10'
import { FeaturesTruthEngineV10 } from '@/components/t4-truth-v10/FeaturesTruthEngine-v10'
import { DataTransparencySectionV10 } from '@/components/t4-truth-v10/DataTransparencySection-v10'
import { FinalCtaTruthEngineV10 } from '@/components/t4-truth-v10/FinalCtaTruthEngine-v10'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV10Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV10 />
      <SocialProofTruthEngineV10 />
      <UseCasesTruthEngineV10 />
      <ValuePropsTruthEngineV10 />
      <FeaturesTruthEngineV10 />
      <DataTransparencySectionV10 />
      <FinalCtaTruthEngineV10 />
    </main>
  )
}
