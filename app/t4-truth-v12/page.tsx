import type { Metadata } from 'next'

import { HeroTruthEngineV12 } from '@/components/t4-truth-v12/HeroTruthEngine-v12'
import { SocialProofTruthEngineV12 } from '@/components/t4-truth-v12/SocialProofTruthEngine-v12'
import { UseCasesTruthEngineV12 } from '@/components/t4-truth-v12/UseCasesTruthEngine-v12'
import { ValuePropsTruthEngineV12 } from '@/components/t4-truth-v12/ValuePropsTruthEngine-v12'
import { FeaturesTruthEngineV12 } from '@/components/t4-truth-v12/FeaturesTruthEngine-v12'
import { DataTransparencySectionV12 } from '@/components/t4-truth-v12/DataTransparencySection-v12'
import { FinalCtaTruthEngineV12 } from '@/components/t4-truth-v12/FinalCtaTruthEngine-v12'

export const metadata: Metadata = {
  title: 'Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder',
  description:
    'Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
}

export default function TruthEngineV12Page() {
  return (
    <main className="min-h-screen bg-[#10131C]">
      <HeroTruthEngineV12 />
      <SocialProofTruthEngineV12 />
      <UseCasesTruthEngineV12 />
      <ValuePropsTruthEngineV12 />
      <FeaturesTruthEngineV12 />
      <DataTransparencySectionV12 />
      <FinalCtaTruthEngineV12 />
    </main>
  )
}
