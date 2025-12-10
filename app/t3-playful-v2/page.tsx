import { Metadata } from "next";
import { getPlayfulContentV2 } from "@/lib/content/t3-playful-v2";
import {
  HeroPlayfulV2,
  SocialProofPlayfulV2,
  JourneyPlayfulV2,
  UnifiedDataModelPlayfulV2,
  UseCasesPlayfulV2,
  DataTrustPlayfulV2,
  FinalCtaPlayfulV2,
} from "@/components/t3-playful-v2";

export const metadata: Metadata = {
  title: "Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
  description:
    "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
};

// T3 Playful Premium B2B - v2
// Changes from v1:
// 1. CTA updated to "Start 14 dagers gratis prøveperiode" (consistent across all CTAs)
// 2. "Finn. Forstå. Vinn." redesigned as Journey section with:
//    - Abstract icons instead of letter icons (F/F/V removed)
//    - Equal-sized cards in horizontal strip
//    - More outcome-oriented copy
//    - Enhanced visual treatment as page highlight
// 3. Reduced repetition:
//    - Removed Features section (4 cards) - merged into other sections
//    - DataTrust reduced from 4 cards to 2 key points
//    - Max 2 sections with 3-card layout (Journey + UseCases)
// 4. Improved visual hierarchy:
//    - Journey section has enhanced background treatment
//    - Alternating section backgrounds for better separation
// 5. Page structure follows recommended flow:
//    - Hero: what Winly is
//    - Social Proof: credibility
//    - Journey: the "Finn. Forstå. Vinn." experience (visual highlight)
//    - Unified Data Model: explains the universe
//    - Use Cases: how it's used (3 cards)
//    - Data Trust: quality and transparency (2 cards)
//    - Final CTA

export default function T3PlayfulV2Page() {
  const content = getPlayfulContentV2();

  return (
    <main className="min-h-screen">
      <HeroPlayfulV2 content={content.hero} />
      <SocialProofPlayfulV2 content={content.socialProof} />
      <JourneyPlayfulV2 content={content.journey} />
      <UnifiedDataModelPlayfulV2 content={content.unifiedDataModel} />
      <UseCasesPlayfulV2 content={content.useCases} />
      <DataTrustPlayfulV2 content={content.dataTrust} />
      <FinalCtaPlayfulV2 content={content.finalCta} />
    </main>
  );
}
