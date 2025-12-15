import type { Metadata } from 'next'
import {
  HeroCloudV1,
  ProblemSectionV1,
  HowItWorksSectionV1,
  UseCasesSectionV1,
  WhatWeAreNotSectionV1,
  TechnologySectionV1,
  GetStartedSectionV1,
} from '@/components/t5-cloud-v1'

export const metadata: Metadata = {
  title: 'Winly | Norges første værkart for anbud og B2B-muligheter',
  description:
    'Unngå overraskelser. Se hvor neste mulighet oppstår – før den offentliggjøres. Winly gjør forutsigbarhet mulig i et uforutsigbart marked.',
}

export default function CloudV1Page() {
  return (
    <main className="bg-[var(--cloud-bg)]">
      <HeroCloudV1 />
      <ProblemSectionV1 />
      <HowItWorksSectionV1 />
      <UseCasesSectionV1 />
      <WhatWeAreNotSectionV1 />
      <TechnologySectionV1 />
      <GetStartedSectionV1 />
    </main>
  )
}
