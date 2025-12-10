import type { Metadata } from "next";
import { HeroModernTechV3 } from "@/components/t1-modern-tech-v3/HeroModernTechV3";
import { SocialProofModernTechV3 } from "@/components/t1-modern-tech-v3/SocialProofModernTechV3";
import { ValuePropsModernTechV3 } from "@/components/t1-modern-tech-v3/ValuePropsModernTechV3";
import { UnifiedDataLayerSectionV3 } from "@/components/t1-modern-tech-v3/UnifiedDataLayerSectionV3";
import { UseCasesModernTechV3 } from "@/components/t1-modern-tech-v3/UseCasesModernTechV3";
import { FeaturesModernTechV3 } from "@/components/t1-modern-tech-v3/FeaturesModernTechV3";
import { DataQualitySectionV3 } from "@/components/t1-modern-tech-v3/DataQualitySectionV3";
import { PricingTeaserModernTechV3 } from "@/components/t1-modern-tech-v3/PricingTeaserModernTechV3";
import { FinalCtaModernTechV3 } from "@/components/t1-modern-tech-v3/FinalCtaModernTechV3";

export const metadata: Metadata = {
  title: "Winly · Modern Tech Excellence | Datakraft for moderne norske B2B-team",
  description:
    "Winly samler og kobler norsk bedrifts-, person- og anbudsdata i én strukturert datamodell – slik at teamene dine jobber raskere, tryggere og mer samkjørt.",
};

export default function ModernTechV3Page() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F5F7FA]">
      <HeroModernTechV3 />
      <SocialProofModernTechV3 />
      <ValuePropsModernTechV3 />
      <UnifiedDataLayerSectionV3 />
      <UseCasesModernTechV3 />
      <FeaturesModernTechV3 />
      <DataQualitySectionV3 />
      <PricingTeaserModernTechV3 />
      <FinalCtaModernTechV3 />
    </main>
  );
}
