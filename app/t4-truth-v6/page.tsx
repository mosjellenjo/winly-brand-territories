import type { Metadata } from 'next'

import { HeroTruthEngineV6 } from '@/components/t4-truth-v6/HeroTruthEngine-v6'
import { SocialProofTruthEngineV6 } from '@/components/t4-truth-v6/SocialProofTruthEngine-v6'
import { UseCasesTruthEngineV6 } from '@/components/t4-truth-v6/UseCasesTruthEngine-v6'
import { ValuePropsTruthEngineV6 } from '@/components/t4-truth-v6/ValuePropsTruthEngine-v6'
import { FeaturesTruthEngineV6 } from '@/components/t4-truth-v6/FeaturesTruthEngine-v6'
import { DataTransparencySectionV6 } from '@/components/t4-truth-v6/DataTransparencySection-v6'
import { FinalCtaTruthEngineV6 } from '@/components/t4-truth-v6/FinalCtaTruthEngine-v6'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV6Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV6 />
      <SocialProofTruthEngineV6 />
      <UseCasesTruthEngineV6 />
      <ValuePropsTruthEngineV6 />
      <FeaturesTruthEngineV6 />
      <DataTransparencySectionV6 />
      <FinalCtaTruthEngineV6 />
    </main>
  )
}
