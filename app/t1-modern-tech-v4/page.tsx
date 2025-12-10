import type { Metadata } from "next";
import { HeroModernTechV4 } from "@/components/t1-modern-tech-v4/HeroModernTechV4";
import { SocialProofModernTechV4 } from "@/components/t1-modern-tech-v4/SocialProofModernTechV4";
import { ValuePropsModernTechV4 } from "@/components/t1-modern-tech-v4/ValuePropsModernTechV4";
import { UnifiedDataLayerV4 } from "@/components/t1-modern-tech-v4/UnifiedDataLayerV4";
import { UseCasesModernTechV4 } from "@/components/t1-modern-tech-v4/UseCasesModernTechV4";
import { FeaturesModernTechV4 } from "@/components/t1-modern-tech-v4/FeaturesModernTechV4";
import { DataQualityModernTechV4 } from "@/components/t1-modern-tech-v4/DataQualityModernTechV4";
import { FinalCtaModernTechV4 } from "@/components/t1-modern-tech-v4/FinalCtaModernTechV4";

export const metadata: Metadata = {
  title: "Winly · Modern Tech Excellence | Se hele det norske B2B-markedet i én struktur",
  description:
    "Winly kobler organisasjoner, roller, eierskap, historikk og anbud i ett samlet univers – slik at du tar bedre beslutninger, raskere.",
};

export default function ModernTechV4Page() {
  return (
    <main className="min-h-screen bg-[#050709] text-[#F5F7FA]">
      <HeroModernTechV4 />
      <SocialProofModernTechV4 />
      <ValuePropsModernTechV4 />
      <UnifiedDataLayerV4 />
      <UseCasesModernTechV4 />
      <FeaturesModernTechV4 />
      <DataQualityModernTechV4 />
      <FinalCtaModernTechV4 />
    </main>
  );
}
