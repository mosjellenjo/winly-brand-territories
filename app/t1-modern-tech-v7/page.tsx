import type { Metadata } from "next";
import { HeroModernTechV7 } from "@/components/t1-modern-tech-v7/HeroModernTechV7";
import { SocialProofModernTechV7 } from "@/components/t1-modern-tech-v7/SocialProofModernTechV7";
import { ValuePropsModernTechV7 } from "@/components/t1-modern-tech-v7/ValuePropsModernTechV7";
import { UnifiedDataLayerV7 } from "@/components/t1-modern-tech-v7/UnifiedDataLayerV7";
import { UseCasesModernTechV7 } from "@/components/t1-modern-tech-v7/UseCasesModernTechV7";
import { FeaturesModernTechV7 } from "@/components/t1-modern-tech-v7/FeaturesModernTechV7";
import { DataQualityModernTechV7 } from "@/components/t1-modern-tech-v7/DataQualityModernTechV7";
import { FinalCtaModernTechV7 } from "@/components/t1-modern-tech-v7/FinalCtaModernTechV7";

export const metadata: Metadata = {
  title: "Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
  description:
    "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
};

export default function ModernTechV7Page() {
  return (
    <main className="min-h-screen bg-[#050709] text-[#F5F7FA]">
      <HeroModernTechV7 />
      <SocialProofModernTechV7 />
      <ValuePropsModernTechV7 />
      <UnifiedDataLayerV7 />
      <UseCasesModernTechV7 />
      <FeaturesModernTechV7 />
      <DataQualityModernTechV7 />
      <FinalCtaModernTechV7 />
    </main>
  );
}
