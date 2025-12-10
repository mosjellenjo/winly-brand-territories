import type { Metadata } from 'next'

import { HeroTruthEngineV8 } from '@/components/t4-truth-v8/HeroTruthEngine-v8'
import { SocialProofTruthEngineV8 } from '@/components/t4-truth-v8/SocialProofTruthEngine-v8'
import { UseCasesTruthEngineV8 } from '@/components/t4-truth-v8/UseCasesTruthEngine-v8'
import { ValuePropsTruthEngineV8 } from '@/components/t4-truth-v8/ValuePropsTruthEngine-v8'
import { FeaturesTruthEngineV8 } from '@/components/t4-truth-v8/FeaturesTruthEngine-v8'
import { DataTransparencySectionV8 } from '@/components/t4-truth-v8/DataTransparencySection-v8'
import { FinalCtaTruthEngineV8 } from '@/components/t4-truth-v8/FinalCtaTruthEngine-v8'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV8Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV8 />
      <SocialProofTruthEngineV8 />
      <UseCasesTruthEngineV8 />
      <ValuePropsTruthEngineV8 />
      <FeaturesTruthEngineV8 />
      <DataTransparencySectionV8 />
      <FinalCtaTruthEngineV8 />
    </main>
  )
}
