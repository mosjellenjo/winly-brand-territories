import type { Metadata } from "next";
import { HeroModernTechV5 } from "@/components/t1-modern-tech-v5/HeroModernTechV5";
import { SocialProofModernTechV5 } from "@/components/t1-modern-tech-v5/SocialProofModernTechV5";
import { ValuePropsModernTechV5 } from "@/components/t1-modern-tech-v5/ValuePropsModernTechV5";
import { UnifiedDataLayerV5 } from "@/components/t1-modern-tech-v5/UnifiedDataLayerV5";
import { UseCasesModernTechV5 } from "@/components/t1-modern-tech-v5/UseCasesModernTechV5";
import { FeaturesModernTechV5 } from "@/components/t1-modern-tech-v5/FeaturesModernTechV5";
import { DataQualityModernTechV5 } from "@/components/t1-modern-tech-v5/DataQualityModernTechV5";
import { FinalCtaModernTechV5 } from "@/components/t1-modern-tech-v5/FinalCtaModernTechV5";

export const metadata: Metadata = {
  title: "Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
  description:
    "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
};

export default function ModernTechV5Page() {
  return (
    <main className="min-h-screen bg-[#050709] text-[#F5F7FA]">
      <HeroModernTechV5 />
      <SocialProofModernTechV5 />
      <ValuePropsModernTechV5 />
      <UnifiedDataLayerV5 />
      <UseCasesModernTechV5 />
      <FeaturesModernTechV5 />
      <DataQualityModernTechV5 />
      <FinalCtaModernTechV5 />
    </main>
  );
}
