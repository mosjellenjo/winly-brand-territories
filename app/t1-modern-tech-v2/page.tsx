import type { Metadata } from "next";
import { HeroModernTechV2 } from "@/components/t1-modern-tech-v2/HeroModernTechV2";
import { SocialProofModernTechV2 } from "@/components/t1-modern-tech-v2/SocialProofModernTechV2";
import { ValuePropsModernTechV2 } from "@/components/t1-modern-tech-v2/ValuePropsModernTechV2";
import { UnifiedDataLayerSectionV2 } from "@/components/t1-modern-tech-v2/UnifiedDataLayerSectionV2";
import { UseCasesModernTechV2 } from "@/components/t1-modern-tech-v2/UseCasesModernTechV2";
import { FeaturesModernTechV2 } from "@/components/t1-modern-tech-v2/FeaturesModernTechV2";
import { DataQualitySectionV2 } from "@/components/t1-modern-tech-v2/DataQualitySectionV2";
import { PricingTeaserModernTechV2 } from "@/components/t1-modern-tech-v2/PricingTeaserModernTechV2";
import { FinalCtaModernTechV2 } from "@/components/t1-modern-tech-v2/FinalCtaModernTechV2";

export const metadata: Metadata = {
  title: "Winly · Modern Tech Excellence | Datakraft for moderne norske B2B-team",
  description:
    "Winly samler og kobler norsk bedrifts-, person- og anbudsdata i én strukturert datamodell – slik at teamene dine jobber raskere, tryggere og mer samkjørt.",
};

export default function ModernTechV2Page() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F5F7FA]">
      <HeroModernTechV2 />
      <SocialProofModernTechV2 />
      <ValuePropsModernTechV2 />
      <UnifiedDataLayerSectionV2 />
      <UseCasesModernTechV2 />
      <FeaturesModernTechV2 />
      <DataQualitySectionV2 />
      <PricingTeaserModernTechV2 />
      <FinalCtaModernTechV2 />
    </main>
  );
}
