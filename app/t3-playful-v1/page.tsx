import { Metadata } from "next";
import { getPlayfulContent } from "@/lib/content/t3-playful-v1";
import {
  HeroPlayful,
  SocialProofPlayful,
  ValuePropsPlayful,
  UnifiedDataModelPlayful,
  UseCasesPlayful,
  FeaturesPlayful,
  DataTransparencyPlayful,
  FinalCtaPlayful,
} from "@/components/t3-playful-v1";

export const metadata: Metadata = {
  title: "Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
  description:
    "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
};

export default function T3PlayfulV1Page() {
  const content = getPlayfulContent();

  return (
    <main className="min-h-screen">
      <HeroPlayful content={content.hero} />
      <SocialProofPlayful content={content.socialProof} />
      <ValuePropsPlayful content={content.valueProps} />
      <UnifiedDataModelPlayful content={content.unifiedDataModel} />
      <UseCasesPlayful content={content.useCases} />
      <FeaturesPlayful content={content.features} />
      <DataTransparencyPlayful content={content.dataTransparency} />
      <FinalCtaPlayful content={content.finalCta} />
    </main>
  );
}
