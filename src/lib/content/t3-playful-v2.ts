// Content layer for Territory 3 v2 – Playful Premium B2B
// v2: Updated CTA, streamlined sections, reduced repetition
// All text is copied verbatim from /docs/*.md files

// ============================================================================
// SHARED CTA CONSTANT - Single source of truth for all CTAs
// From BRAND_BOOK.md section 10: "Start 14 dagers gratis prøveperiode"
// ============================================================================
export const PRIMARY_CTA_LABEL = "Start 14 dagers gratis prøveperiode";

// ============================================================================
// TYPES
// ============================================================================

export interface PlayfulHeroContentV2 {
  overline: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: string;
}

export interface PlayfulSocialProofContentV2 {
  title: string;
  subtitle: string;
}

// v2: Renamed from ValueProps to Journey - more outcome-oriented
export interface PlayfulJourneyStep {
  step: number;
  title: string;
  outcome: string; // What the user achieves, not just what the feature does
}

export interface PlayfulJourneyContentV2 {
  title: string;
  subtitle: string;
  steps: PlayfulJourneyStep[];
}

export interface PlayfulUnifiedDataModelContentV2 {
  title: string;
  subtitle: string;
  description: string;
  dataPoints: string[];
}

export interface PlayfulUseCaseItemV2 {
  title: string;
  body: string;
}

export interface PlayfulUseCasesContentV2 {
  title: string;
  items: PlayfulUseCaseItemV2[];
}

// v2: Reduced from 4 items to 2 key trust points to avoid repetition with features
export interface PlayfulDataTrustContentV2 {
  title: string;
  subtitle: string;
  points: { title: string; body: string }[];
}

export interface PlayfulFinalCtaContentV2 {
  title: string;
  subtitle: string;
  primaryCta: string;
}

export interface PlayfulContentV2 {
  hero: PlayfulHeroContentV2;
  socialProof: PlayfulSocialProofContentV2;
  journey: PlayfulJourneyContentV2;
  unifiedDataModel: PlayfulUnifiedDataModelContentV2;
  useCases: PlayfulUseCasesContentV2;
  dataTrust: PlayfulDataTrustContentV2;
  finalCta: PlayfulFinalCtaContentV2;
}

// ============================================================================
// CONTENT (verbatim from .md files)
// v2: Streamlined to reduce repetition, more outcome-oriented copy
// ============================================================================

const playfulContentV2: PlayfulContentV2 = {
  // ---------------------------------------------------------------------------
  // HERO
  // From BRAND_FOUNDATION.md taglines + TERRITORY_3 energy/style
  // ---------------------------------------------------------------------------
  hero: {
    // From BRAND_FOUNDATION section 2
    overline: "NORGES MEST KOMPLETTE BEDRIFTSDATAPLATTFORM",
    // Tagline 1 from BRAND_FOUNDATION.md section 8
    title: "Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
    // Tagline 2 from BRAND_FOUNDATION.md section 8
    subtitle:
      "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
    // Bullets from BRAND_FOUNDATION 2 + TERRITORY_3 6.2 - more outcome-focused
    bullets: [
      // From BRAND_FOUNDATION 2 differensiering
      "Ett samlet datagrunnlag – organisasjoner, roller, eierskap og anbud",
      // From BRAND_FOUNDATION 2 + BRAND_BOOK 2 narrative
      "Full sammenkobling av kilder gir mer kontekst og mindre siloer",
      // From BRAND_FOUNDATION 1 kjerneverdier - Fart
      "Raskt fra spørsmål til innsikt",
    ],
    // CTA from BRAND_BOOK.md section 10
    primaryCta: PRIMARY_CTA_LABEL,
  },

  // ---------------------------------------------------------------------------
  // SOCIAL PROOF
  // From TERRITORY_3 6.5 Logo wall
  // ---------------------------------------------------------------------------
  socialProof: {
    // From TERRITORY_3 6.5
    title: "Brukt av moderne norske B2B-team",
    // From TERRITORY_3 6.5
    subtitle:
      "Winly brukes av unge vekstbedrifter, etablerte rådgivningsmiljøer og energiske kommersielle team.",
  },

  // ---------------------------------------------------------------------------
  // JOURNEY (formerly VALUE PROPS)
  // v2: Redesigned as a "journey" through the Winly universe
  // From TERRITORY_3 6.2 "Finn. Forstå. Vinn." + BRAND_FOUNDATION core values
  // More outcome-oriented, less feature-descriptive
  // ---------------------------------------------------------------------------
  journey: {
    // From TERRITORY_3 6.2
    title: "Finn. Forstå. Vinn.",
    // From BRAND_BOOK 2 narrative - sets the context for the journey
    subtitle:
      "Tre steg inn i Winly-universet – fra første søk til prioriterte målgrupper.",
    steps: [
      {
        step: 1,
        // From TERRITORY_3 6.2
        title: "Finn",
        // From TERRITORY_3 6.2 + BRAND_FOUNDATION 2 short pitch - outcome-focused
        outcome:
          "Oppdag de riktige organisasjonene i det norske markedet uten å bla gjennom uendelige lister.",
      },
      {
        step: 2,
        // From TERRITORY_3 6.2
        title: "Forstå",
        // From TERRITORY_3 6.2 + BRAND_BOOK 2 narrative - emphasizes connections
        outcome:
          "Utforsk hvordan organisasjoner, roller, eierskap og anbud henger sammen – i ett helhetlig bilde.",
      },
      {
        step: 3,
        // From TERRITORY_3 6.2
        title: "Vinn",
        // From TERRITORY_3 6.2 + BRAND_FOUNDATION 1 kjerneverdier - action-oriented
        outcome:
          "Bygg segmenter og prioriteringslister som gir teamet fart og retning.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // UNIFIED DATA MODEL
  // From BRAND_FOUNDATION 5.1, 5.3 + BRAND_BOOK 2, 7
  // v2: This section is unique and stays - it explains the "universe"
  // ---------------------------------------------------------------------------
  unifiedDataModel: {
    // From BRAND_BOOK section 2 Vision
    title: "Ett univers av koblede datapunkter",
    // From BRAND_FOUNDATION 2 short pitch
    subtitle:
      "Winly samler og kobler kritisk informasjon om norske B2B-organisasjoner i én strukturert plattform.",
    // From BRAND_BOOK section 2 Narrative
    description:
      "Vi samler hele markedet i ett univers: organisasjoner, personer, eiere, historikk og anbud – koblet og sortert på en måte som gir mening.",
    // From BRAND_FOUNDATION 5.1
    dataPoints: [
      "Organisasjonsdata",
      "Rolle- og persondata",
      "Eierskap og konsernstrukturer",
      "Anbudsdata koblet til organisasjoner",
    ],
  },

  // ---------------------------------------------------------------------------
  // USE CASES
  // From TERRITORY_3 6.6 + BRAND_FOUNDATION 3 target groups
  // v2: Kept as unique section showing who uses Winly
  // ---------------------------------------------------------------------------
  useCases: {
    // Adapted from TERRITORY_3 6.6
    title: "For salg, marked og rådgivere",
    items: [
      {
        // From BRAND_FOUNDATION 3 + TERRITORY_3 6.6
        title: "Salg",
        // From TERRITORY_3 6.6 - focuses on signals and prioritization
        body: "Prioriter riktige organisasjoner basert på klare signaler og tydelige sammenhenger i data.",
      },
      {
        // From BRAND_FOUNDATION 3 + TERRITORY_3 6.6
        title: "Marked",
        // From TERRITORY_3 6.6 - focuses on relevant segments
        body: "Bygg målgrupper og kampanjesegmenter som faktisk er relevante.",
      },
      {
        // From BRAND_FOUNDATION 3 primary target
        title: "Konsulenter",
        // From BRAND_FOUNDATION 3 - focuses on market mapping
        body: "Kartlegg markedet for kunder. Forstå bransjer, eierskap og konkurranseforhold.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // DATA & TRUST
  // From BRAND_FOUNDATION 2 differensiering, BRAND_BOOK 7
  // v2: Reduced from 4 cards to 2 key points to avoid card-overload
  // Merged "Features" section into this - both were about trust/quality
  // ---------------------------------------------------------------------------
  dataTrust: {
    // From BRAND_FOUNDATION 2
    title: "Data du kan stole på",
    // From BRAND_FOUNDATION 2 differensiering
    subtitle:
      "Tydelig fokus på datakvalitet, transparens og sporbarhet.",
    points: [
      {
        // From BRAND_FOUNDATION 2 differensiering
        title: "Dokumenterte kilder",
        // From BRAND_FOUNDATION 5.1 + 5.3
        body: "Data hentes fra offentlige registre og strukturerte kilder. Du ser hvor informasjonen kommer fra, og når noe mangler vises det tydelig.",
      },
      {
        // From BRAND_BOOK 7
        title: "Konsistent struktur",
        // From BRAND_BOOK 7 + BRAND_FOUNDATION 5.3
        body: "Likt innhold vises likt. Strukturen er den samme på tvers av alle organisasjoner – ingen skjulte hull eller gjetninger.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // FINAL CTA
  // From BRAND_BOOK 10 + adapted from BRAND_FOUNDATION narrative
  // ---------------------------------------------------------------------------
  finalCta: {
    // From TERRITORY_3 6.8
    title: "Gjør B2B-data til noe teamet faktisk liker å jobbe med",
    // From TERRITORY_3 6.8
    subtitle:
      "Prøv Winly gratis og opplev en ny, engasjerende måte å forstå markedet ditt på.",
    // From BRAND_BOOK 10
    primaryCta: PRIMARY_CTA_LABEL,
  },
};

export function getPlayfulContentV2(): PlayfulContentV2 {
  return playfulContentV2;
}
