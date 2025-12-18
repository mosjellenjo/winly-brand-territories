import type { Metadata } from 'next'
import {
  HeroCloud2V2,
  SocialProofCloud2V2,
  StrategicPositioningCloud2V2,
  UseCasesCloud2V2,
  ValuePropsCloud2V2,
  FeaturesCloud2V2,
  DataTransparencyCloud2V2,
  FinalCtaCloud2V2,
} from '@/components/t6-cloud2-v2'

export const metadata: Metadata = {
  title: 'Winly | Norges første værkart for anbud og B2B-muligheter',
  description:
    'Unngå overraskelser. Se hvor neste mulighet oppstår – før den offentliggjøres. Winly gjør forutsigbarhet mulig i et uforutsigbart marked.',
}

export default function Cloud2V2Page() {
  return (
    <main>
      <HeroCloud2V2 />
      <SocialProofCloud2V2 />
      <StrategicPositioningCloud2V2 />
      <UseCasesCloud2V2 />
      <ValuePropsCloud2V2 />
      <FeaturesCloud2V2 />
      <DataTransparencyCloud2V2 />
      <FinalCtaCloud2V2 />
    </main>
  )
}
