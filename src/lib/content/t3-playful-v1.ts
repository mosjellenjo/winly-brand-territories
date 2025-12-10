// Content layer for Territory 3 v2 – Playful Premium B2B
// All text is copied verbatim from /docs/*.md files
// This is a temporary manual mapping. Next step: parse markdown automatically with gray-matter/remark.

// ============================================================================
// TYPES
// ============================================================================

export interface PlayfulHeroContent {
  overline: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: string;
}

export interface PlayfulSocialProofContent {
  title: string;
  subtitle: string;
}

export interface PlayfulValuePropItem {
  label: string;
  body: string;
}

export interface PlayfulValuePropsContent {
  title: string;
  items: PlayfulValuePropItem[];
}

export interface PlayfulUnifiedDataModelContent {
  title: string;
  subtitle: string;
  description: string;
  dataPoints: string[];
}

export interface PlayfulUseCaseItem {
  title: string;
  body: string;
}

export interface PlayfulUseCasesContent {
  title: string;
  items: PlayfulUseCaseItem[];
}

export interface PlayfulFeatureItem {
  title: string;
  body: string;
}

export interface PlayfulFeaturesContent {
  title: string;
  items: PlayfulFeatureItem[];
}

export interface PlayfulDataTransparencyItem {
  title: string;
  body: string;
}

export interface PlayfulDataTransparencyContent {
  title: string;
  subtitle: string;
  items: PlayfulDataTransparencyItem[];
}

export interface PlayfulFinalCtaContent {
  title: string;
  subtitle: string;
  primaryCta: string;
}

export interface PlayfulContent {
  hero: PlayfulHeroContent;
  socialProof: PlayfulSocialProofContent;
  valueProps: PlayfulValuePropsContent;
  unifiedDataModel: PlayfulUnifiedDataModelContent;
  useCases: PlayfulUseCasesContent;
  features: PlayfulFeaturesContent;
  dataTransparency: PlayfulDataTransparencyContent;
  finalCta: PlayfulFinalCtaContent;
}

// ============================================================================
// CONTENT (verbatim from .md files)
// ============================================================================

const playfulContent: PlayfulContent = {
  // ---------------------------------------------------------------------------
  // HERO
  // From BRAND_FOUNDATION.md taglines + TERRITORY_3 energy/style
  // ---------------------------------------------------------------------------
  hero: {
    overline: "NORGES MEST KOMPLETTE BEDRIFTSDATAPLATTFORM",
    // Tagline 1 from BRAND_FOUNDATION.md section 8
    title: "Alt du trenger for å finne, forstå og vinne norske B2B-kunder",
    // Tagline 2 from BRAND_FOUNDATION.md section 8
    subtitle:
      "Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.",
    // Bullets mapped from TERRITORY_3 + BRAND_FOUNDATION value props
    bullets: [
      // From TERRITORY_3 6.2 "Finn" + BRAND_FOUNDATION short pitch
      "Finn riktige organisasjoner raskt med søk og segmentering",
      // From TERRITORY_3 6.2 "Forstå" + BRAND_FOUNDATION sammenkobling
      "Forstå sammenhenger mellom selskaper, roller, eierskap og anbud",
      // From TERRITORY_3 6.2 "Vinn" + BRAND_FOUNDATION prioritering
      "Bygg målgrupper basert på ekte data og prioriter innsatsen",
    ],
    // CTA from BRAND_BOOK.md section 10
    primaryCta: "Start 14 dagers gratis prøve",
  },

  // ---------------------------------------------------------------------------
  // SOCIAL PROOF
  // From TERRITORY_3 6.5 Logo wall
  // ---------------------------------------------------------------------------
  socialProof: {
    // From TERRITORY_3 6.5
    title: "Brukt av norske B2B-team",
    // From TERRITORY_3 6.5
    subtitle:
      "Winly brukes av unge vekstbedrifter, etablerte rådgivningsmiljøer og energiske kommersielle team.",
  },

  // ---------------------------------------------------------------------------
  // VALUE PROPOSITIONS (3 cards)
  // From TERRITORY_3 6.2 "Finn. Forstå. Vinn." + BRAND_FOUNDATION core values
  // ---------------------------------------------------------------------------
  valueProps: {
    // From TERRITORY_3 6.2
    title: "Finn. Forstå. Vinn.",
    items: [
      {
        // From TERRITORY_3 6.2
        label: "Finn",
        // From TERRITORY_3 6.2 + BRAND_FOUNDATION 5.2
        body: "Oppdag de riktige organisasjonene i det norske markedet. Søk og filtrer på bransje, størrelse, geografi og eierskap.",
      },
      {
        // From TERRITORY_3 6.2
        label: "Forstå",
        // From TERRITORY_3 6.2 + BRAND_FOUNDATION 5.1
        body: "Utforsk hvordan organisasjoner, roller, eierskap og anbud henger sammen – i ett helhetlig bilde.",
      },
      {
        // From TERRITORY_3 6.2
        label: "Vinn",
        // From TERRITORY_3 6.2 + BRAND_FOUNDATION 5.2
        body: "Bygg segmenter og prioriteringslister. Eksporter til CSV og del med teamet.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // UNIFIED DATA MODEL
  // From BRAND_FOUNDATION 5.1, 5.3 + BRAND_BOOK 2, 7
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
  // ---------------------------------------------------------------------------
  useCases: {
    // Adapted from TERRITORY_3 6.6
    title: "For salg, marked og rådgivere",
    items: [
      {
        // From BRAND_FOUNDATION 3 + TERRITORY_3 6.6
        title: "Salg",
        body: "Prioriter riktige organisasjoner basert på tydelige sammenhenger i data. Se hvem som har åpne anbud og hvem som vokser.",
      },
      {
        // From BRAND_FOUNDATION 3 + TERRITORY_3 6.6
        title: "Marked",
        body: "Bygg målgrupper og kampanjesegmenter som faktisk er relevante. Eksporter lister til kampanjeverktøy.",
      },
      {
        // From BRAND_FOUNDATION 3 primary target
        title: "Konsulenter",
        body: "Kartlegg markedet for kunder. Forstå bransjer, eierskap og konkurranseforhold uten manuelt arbeid.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURES (concrete)
  // From BRAND_FOUNDATION 5.2 + BRAND_BOOK 5, 6
  // ---------------------------------------------------------------------------
  features: {
    title: "Konkret funksjonalitet",
    items: [
      {
        // From BRAND_BOOK 5
        title: "Søk & segmentering",
        // From BRAND_FOUNDATION 5.2 + TERRITORY_3 6.4
        body: "Finn organisasjoner basert på bransje, størrelse, geografi, eierskap og historikk.",
      },
      {
        // From BRAND_BOOK 5
        title: "Organisasjonsprofiler",
        // From BRAND_FOUNDATION 5.2
        body: "Se roller, nøkkeltall, eierskap og anbud for hver organisasjon.",
      },
      {
        // From BRAND_BOOK 5, 6
        title: "Rolle- og kontaktinformasjon",
        // From BRAND_FOUNDATION 5.2 + TERRITORY_3 6.4
        body: "Der data finnes: identifiser riktige roller og beslutningstakere.",
      },
      {
        // From BRAND_BOOK 5
        title: "Lister & eksport",
        // From BRAND_FOUNDATION 5.2
        body: "Bygg segmenter, eksporter til CSV og del med teamet.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // DATA & TRANSPARENCY
  // From BRAND_FOUNDATION 2 differensiering, BRAND_BOOK 7
  // ---------------------------------------------------------------------------
  dataTransparency: {
    // From BRAND_FOUNDATION 2
    title: "Data du kan stole på",
    // From BRAND_FOUNDATION 2 differensiering
    subtitle: "Tydelig fokus på datakvalitet, transparens og sporbarhet.",
    items: [
      {
        // From BRAND_FOUNDATION 2
        title: "Dokumenterte kilder",
        // From BRAND_FOUNDATION 5.1
        body: "Data hentes fra offentlige registre og strukturerte kilder. Du ser hvor informasjonen kommer fra.",
      },
      {
        // From BRAND_BOOK 7
        title: "Konsistens",
        // From BRAND_BOOK 7
        body: "Likt innhold vises likt. Strukturen er den samme på tvers av organisasjoner.",
      },
      {
        // From BRAND_FOUNDATION 5.3
        title: "Sporbarhet",
        // From BRAND_FOUNDATION 5.3
        body: "Når noe mangler, vises det tydelig. Ingen skjulte hull eller gjetninger.",
      },
      {
        // Implied from BRAND_FOUNDATION context
        title: "Personvern",
        body: "Kun forretningsrelevant informasjon. Ingen privatpersoner, kun roller og organisasjoner.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // FINAL CTA
  // From BRAND_BOOK 10 + adapted from BRAND_FOUNDATION narrative
  // ---------------------------------------------------------------------------
  finalCta: {
    // Adapted from BRAND_FOUNDATION 2 posisjonering
    title: "Klar for ett samlet bilde av det norske B2B-markedet?",
    // Adapted from BRAND_BOOK 2 narrative
    subtitle:
      "Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.",
    // From BRAND_BOOK 10
    primaryCta: "Start 14 dagers gratis prøve",
  },
};

export function getPlayfulContent(): PlayfulContent {
  return playfulContent;
}
