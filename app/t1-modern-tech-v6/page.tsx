import type { Metadata } from "next";
import { HeroModernTechV6 } from "@/components/t1-modern-tech-v6/HeroModernTechV6";
import { ProofBarV6 } from "@/components/t1-modern-tech-v6/ProofBarV6";
import { ValuePropsV6 } from "@/components/t1-modern-tech-v6/ValuePropsV6";
import { DataUniverseV6 } from "@/components/t1-modern-tech-v6/DataUniverseV6";
import { UseCasesV6 } from "@/components/t1-modern-tech-v6/UseCasesV6";
import { FeaturesV6 } from "@/components/t1-modern-tech-v6/FeaturesV6";
import { TrustV6 } from "@/components/t1-modern-tech-v6/TrustV6";
import { FinalCtaV6 } from "@/components/t1-modern-tech-v6/FinalCtaV6";

export const metadata: Metadata = {
  title: "Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
  description:
    "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
};

export default function ModernTechV6Page() {
  return (
    <main className="min-h-screen bg-[#050709] text-[#F5F7FA]">
      <HeroModernTechV6 />
      <ProofBarV6 />
      <ValuePropsV6 />
      <DataUniverseV6 />
      <UseCasesV6 />
      <FeaturesV6 />
      <TrustV6 />
      <FinalCtaV6 />
    </main>
  );
}
