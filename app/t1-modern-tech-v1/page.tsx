import type { Metadata } from "next";
import { HeroModernTech } from "@/components/t1-modern-tech-v1/HeroModernTech";
import { SocialProofModernTech } from "@/components/t1-modern-tech-v1/SocialProofModernTech";
import { ValuePropsModernTech } from "@/components/t1-modern-tech-v1/ValuePropsModernTech";
import { UnifiedDataLayerSection } from "@/components/t1-modern-tech-v1/UnifiedDataLayerSection";
import { UseCasesModernTech } from "@/components/t1-modern-tech-v1/UseCasesModernTech";
import { FeaturesModernTech } from "@/components/t1-modern-tech-v1/FeaturesModernTech";
import { DataQualitySection } from "@/components/t1-modern-tech-v1/DataQualitySection";
import { PricingTeaserModernTech } from "@/components/t1-modern-tech-v1/PricingTeaserModernTech";
import { FinalCtaModernTech } from "@/components/t1-modern-tech-v1/FinalCtaModernTech";

export const metadata: Metadata = {
  title: "Winly · Modern Tech Excellence | Datakraft for moderne norske B2B-team",
  description:
    "Winly samler og kobler organisasjons-, rolle- og anbudsdata i én strukturert datamodell – bygget for team som jobber raskt, presist og datadrevet.",
};

export default function ModernTechPage() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F5F7FA]">
      <HeroModernTech />
      <SocialProofModernTech />
      <ValuePropsModernTech />
      <UnifiedDataLayerSection />
      <UseCasesModernTech />
      <FeaturesModernTech />
      <DataQualitySection />
      <PricingTeaserModernTech />
      <FinalCtaModernTech />
    </main>
  );
}
