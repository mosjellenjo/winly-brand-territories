import type { Metadata } from 'next'
import {
  HeroCloud2V1,
  SocialProofCloud2V1,
  UseCasesCloud2V1,
  ValuePropsCloud2V1,
  FeaturesCloud2V1,
  DataTransparencyCloud2V1,
  FinalCtaCloud2V1,
} from '@/components/t6-cloud2-v1'

export const metadata: Metadata = {
  title: 'Winly | Norges første værkart for anbud og B2B-muligheter',
  description:
    'Unngå overraskelser. Se hvor neste mulighet oppstår – før den offentliggjøres. Winly gjør forutsigbarhet mulig i et uforutsigbart marked.',
}

export default function Cloud2V1Page() {
  return (
    <main>
      <HeroCloud2V1 />
      <SocialProofCloud2V1 />
      <UseCasesCloud2V1 />
      <ValuePropsCloud2V1 />
      <FeaturesCloud2V1 />
      <DataTransparencyCloud2V1 />
      <FinalCtaCloud2V1 />
    </main>
  )
}
