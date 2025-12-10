import type { Metadata } from 'next'

import { HeroTruthEngineV9 } from '@/components/t4-truth-v9/HeroTruthEngine-v9'
import { SocialProofTruthEngineV9 } from '@/components/t4-truth-v9/SocialProofTruthEngine-v9'
import { UseCasesTruthEngineV9 } from '@/components/t4-truth-v9/UseCasesTruthEngine-v9'
import { ValuePropsTruthEngineV9 } from '@/components/t4-truth-v9/ValuePropsTruthEngine-v9'
import { FeaturesTruthEngineV9 } from '@/components/t4-truth-v9/FeaturesTruthEngine-v9'
import { DataTransparencySectionV9 } from '@/components/t4-truth-v9/DataTransparencySection-v9'
import { FinalCtaTruthEngineV9 } from '@/components/t4-truth-v9/FinalCtaTruthEngine-v9'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV9Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV9 />
      <SocialProofTruthEngineV9 />
      <UseCasesTruthEngineV9 />
      <ValuePropsTruthEngineV9 />
      <FeaturesTruthEngineV9 />
      <DataTransparencySectionV9 />
      <FinalCtaTruthEngineV9 />
    </main>
  )
}
