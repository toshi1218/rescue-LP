export type FaqItem = { q: string; a: string };

export type CountryConfig = {
  slug: string;
  name: string;
  countryCode: string;
  agency: string;
  agencyAbbr: string;
  visaType: string;
  badges: string[];
  isHagueConvention: boolean;
  authLabel: string;
  shippingDays: string;
  totalWeeks: string;
  price: string;
  faqs: FaqItem[];
  summaryPoints: string[];
};

export const COUNTRY_CONFIGS: CountryConfig[] = [
  // ── Phase 2 ───────────────────────────────────────────────────────────────
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    countryCode: 'NZ',
    agency: 'Immigration New Zealand',
    agencyAbbr: 'INZ',
    visaType: 'Partner of a New Zealander visa',
    badges: ['INZ-Ready', 'DFA Apostille Included', 'Ships to New Zealand via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'New Zealand is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your New Zealand address',
      'We confirm exact INZ requirements for your specific application type',
    ],
    faqs: [
      {
        q: 'Does New Zealand require DFA Apostille on Philippine documents?',
        a: 'Yes. New Zealand is a Hague Convention member. INZ requires DFA Apostille authentication on Philippine civil documents such as PSA Birth Certificates, CENOMAR, and NBI Clearance for immigration applications.',
      },
      {
        q: 'What documents are needed for a New Zealand partner visa?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for INZ applications. For partnership-based residency, CENOMAR or PSA Marriage Certificate may also be required. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to New Zealand are included.',
      },
      {
        q: 'How long does it take to ship to New Zealand?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to New Zealand typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'germany',
    name: 'Germany',
    countryCode: 'DE',
    agency: 'German Embassy Manila',
    agencyAbbr: 'German Embassy',
    visaType: 'Ehegattennachzug (Spousal Reunification)',
    badges: ['German Embassy-Ready', 'DFA Apostille Included', 'Ships to Germany via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Germany is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your German address',
      'We confirm exact German Embassy requirements for your specific application type',
    ],
    faqs: [
      {
        q: 'Does Germany require DFA Apostille on Philippine documents?',
        a: 'Yes. Germany is a Hague Convention member. The German Embassy in Manila and German immigration authorities require DFA Apostille authentication on Philippine civil documents for family reunification (Familiennachzug) applications.',
      },
      {
        q: 'What documents are needed for Ehegattennachzug (spousal reunification) to Germany?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate. For spousal reunification, CENOMAR or PSA Marriage Certificate is also required. We confirm exact requirements for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Germany are included.',
      },
      {
        q: 'How long does it take to ship to Germany?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Germany typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    countryCode: 'NL',
    agency: 'IND (Dutch Immigration Service)',
    agencyAbbr: 'IND',
    visaType: 'MVV (Machtiging tot Voorlopig Verblijf)',
    badges: ['IND-Ready', 'DFA Apostille Included', 'Ships to the Netherlands via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'The Netherlands is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Netherlands address',
      'We confirm exact IND requirements for your specific MVV or residence permit application',
    ],
    faqs: [
      {
        q: 'Does the Netherlands require DFA Apostille on Philippine documents?',
        a: 'Yes. The Netherlands is a Hague Convention member. IND (Dutch Immigration Service) requires DFA Apostille authentication on Philippine civil documents for MVV and residence permit (verblijfsvergunning) applications.',
      },
      {
        q: 'What documents are needed for a Netherlands MVV or family reunification visa?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for IND applications. For family reunification (gezinshereniging), CENOMAR or PSA Marriage Certificate is also required. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to the Netherlands are included.',
      },
      {
        q: 'How long does it take to ship to the Netherlands?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the Netherlands typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  // ── Phase 3 ───────────────────────────────────────────────────────────────
  {
    slug: 'uae',
    name: 'UAE',
    countryCode: 'AE',
    agency: 'UAE Embassy Manila',
    agencyAbbr: 'UAE Embassy',
    visaType: 'UAE Residence Visa (Family Sponsorship)',
    badges: ['UAE Embassy-Ready', 'Embassy Attestation Included', 'Ships to UAE via DHL'],
    isHagueConvention: false,
    authLabel: 'Embassy Attestation',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'UAE requires Embassy Attestation (not Apostille) — we handle DFA authentication and UAE Embassy attestation',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Attested originals shipped via DHL Express to your UAE address',
      'We confirm exact UAE Embassy requirements for your specific residence visa application',
    ],
    faqs: [
      {
        q: 'Does the UAE require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'The UAE requires Embassy Attestation, not DFA Apostille. The UAE is not a Hague Convention member. Philippine documents must be authenticated by the DFA and then attested by the UAE Embassy in Manila. We handle both steps.',
      },
      {
        q: 'What documents are needed for a UAE family sponsorship residence visa?',
        a: 'Typically PSA Birth Certificate and NBI Clearance with Embassy Attestation. For spousal sponsorship, PSA Marriage Certificate is also required. We confirm exact requirements for your specific application.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, UAE Embassy attestation, and DHL shipping to the UAE are included.',
      },
      {
        q: 'How long does it take to ship to the UAE?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the UAE typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    countryCode: 'SG',
    agency: 'ICA (Immigration & Checkpoints Authority)',
    agencyAbbr: 'ICA',
    visaType: 'Long-Term Visit Pass (LTVP)',
    badges: ['ICA-Ready', 'DFA Apostille Included', 'Ships to Singapore via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '2–4 business days',
    totalWeeks: '3–5 weeks',
    price: '899',
    summaryPoints: [
      'Singapore is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Singapore address',
      'We confirm exact ICA requirements for your specific pass or visa application',
    ],
    faqs: [
      {
        q: 'Does Singapore require DFA Apostille on Philippine documents?',
        a: 'Yes. Singapore joined the Hague Convention in 2021. ICA (Immigration & Checkpoints Authority) requires DFA Apostille authentication on Philippine civil documents for pass and immigration applications.',
      },
      {
        q: "What documents are needed for a Singapore LTVP or Dependant's Pass?",
        a: "Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for ICA applications. For spousal pass applications, CENOMAR or PSA Marriage Certificate may also be required. We confirm for your specific case.",
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Singapore are included.',
      },
      {
        q: 'How long does it take to ship to Singapore?',
        a: 'Approximately 3–5 weeks total. DHL Express delivery from the Philippines to Singapore typically takes 2–4 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'hong-kong',
    name: 'Hong Kong',
    countryCode: 'HK',
    agency: 'Hong Kong Immigration Department',
    agencyAbbr: 'HKID',
    visaType: 'Dependant Visa',
    badges: ['HK Immigration-Ready', 'Embassy Attestation Included', 'Ships to Hong Kong via DHL'],
    isHagueConvention: false,
    authLabel: 'Embassy Attestation',
    shippingDays: '2–4 business days',
    totalWeeks: '3–5 weeks',
    price: '899',
    summaryPoints: [
      'Hong Kong requires Embassy Attestation — we handle DFA authentication and Philippine Embassy attestation for HKSAR submissions',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Attested originals shipped via DHL Express to your Hong Kong address',
      'We confirm exact Hong Kong Immigration Department requirements for your specific application',
    ],
    faqs: [
      {
        q: 'Does Hong Kong require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'Hong Kong (HKSAR) requires Embassy Attestation on Philippine civil documents for immigration applications. We handle the DFA authentication and Philippine Embassy attestation steps. We confirm the exact requirements for your specific case before we start.',
      },
      {
        q: 'What documents are needed for a Hong Kong Dependant Visa?',
        a: 'Typically PSA Birth Certificate and NBI Clearance with Embassy Attestation for Hong Kong Immigration applications. PSA Marriage Certificate is required for spousal dependant applications. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Hong Kong are included.',
      },
      {
        q: 'How long does it take to ship to Hong Kong?',
        a: 'Approximately 3–5 weeks total. DHL Express delivery from the Philippines to Hong Kong typically takes 2–4 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    countryCode: 'QA',
    agency: 'Qatar Embassy Manila',
    agencyAbbr: 'Qatar Embassy',
    visaType: 'Qatar Residence Permit (Family)',
    badges: ['Qatar Embassy-Ready', 'Embassy Attestation Included', 'Ships to Qatar via DHL'],
    isHagueConvention: false,
    authLabel: 'Embassy Attestation',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Qatar requires Embassy Attestation (not Apostille) — we handle DFA authentication and Qatar Embassy attestation',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Attested originals shipped via DHL Express to your Qatar address',
      'We confirm exact Qatar Embassy requirements for your specific residence permit application',
    ],
    faqs: [
      {
        q: 'Does Qatar require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'Qatar requires Embassy Attestation. Qatar is not a Hague Convention member. Philippine documents must be authenticated by the DFA and then attested by the Qatar Embassy in Manila. We handle both steps.',
      },
      {
        q: 'What documents are needed for a Qatar family residence permit?',
        a: 'Typically PSA Birth Certificate and NBI Clearance with Embassy Attestation. For spouse sponsorship, PSA Marriage Certificate is also required. We confirm exact requirements for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, Qatar Embassy attestation, and DHL shipping to Qatar are included.',
      },
      {
        q: 'How long does it take to ship to Qatar?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Qatar typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  // ── Phase 4 ───────────────────────────────────────────────────────────────
  {
    slug: 'italy',
    name: 'Italy',
    countryCode: 'IT',
    agency: 'Italian Embassy Manila',
    agencyAbbr: 'Italian Embassy',
    visaType: 'Ricongiungimento Familiare (Family Reunification)',
    badges: ['Italian Embassy-Ready', 'DFA Apostille Included', 'Ships to Italy via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Italy is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Italian address',
      'We confirm exact Italian Embassy requirements for your specific application type',
    ],
    faqs: [
      {
        q: 'Does Italy require DFA Apostille on Philippine documents?',
        a: 'Yes. Italy is a Hague Convention member. The Italian Embassy in Manila and Italian immigration authorities require DFA Apostille authentication on Philippine civil documents for family reunification (ricongiungimento familiare) applications.',
      },
      {
        q: 'What documents are needed for Italian family reunification (ricongiungimento familiare)?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate. For spousal applications, CENOMAR or PSA Marriage Certificate is also required. We confirm exact requirements for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Italy are included.',
      },
      {
        q: 'How long does it take to ship to Italy?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Italy typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'norway',
    name: 'Norway',
    countryCode: 'NO',
    agency: 'UDI (Norwegian Directorate of Immigration)',
    agencyAbbr: 'UDI',
    visaType: 'Family Immigration (spouse/partner)',
    badges: ['UDI-Ready', 'DFA Apostille Included', 'Ships to Norway via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Norway is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Norwegian address',
      'We confirm exact UDI requirements for your specific family immigration application',
    ],
    faqs: [
      {
        q: 'Does Norway require DFA Apostille on Philippine documents?',
        a: 'Yes. Norway is a Hague Convention member. UDI (Norwegian Directorate of Immigration) requires DFA Apostille authentication on Philippine civil documents for family immigration applications.',
      },
      {
        q: 'What documents are needed for Norwegian family immigration?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for UDI applications. For spouse immigration, CENOMAR or PSA Marriage Certificate is also required. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Norway are included.',
      },
      {
        q: 'How long does it take to ship to Norway?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Norway typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'sweden',
    name: 'Sweden',
    countryCode: 'SE',
    agency: 'Migrationsverket (Swedish Migration Agency)',
    agencyAbbr: 'Migrationsverket',
    visaType: 'Residence Permit (Family Reunification)',
    badges: ['Migrationsverket-Ready', 'DFA Apostille Included', 'Ships to Sweden via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Sweden is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Swedish address',
      'We confirm exact Migrationsverket requirements for your specific residence permit application',
    ],
    faqs: [
      {
        q: 'Does Sweden require DFA Apostille on Philippine documents?',
        a: 'Yes. Sweden is a Hague Convention member. Migrationsverket (Swedish Migration Agency) requires DFA Apostille authentication on Philippine civil documents for family reunification applications.',
      },
      {
        q: 'What documents are needed for a Swedish family reunification residence permit?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for Migrationsverket applications. For spousal applications, CENOMAR or PSA Marriage Certificate is also required. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Sweden are included.',
      },
      {
        q: 'How long does it take to ship to Sweden?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Sweden typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    countryCode: 'CH',
    agency: 'SEM (State Secretariat for Migration)',
    agencyAbbr: 'SEM',
    visaType: 'Spouse / Family Reunification Visa',
    badges: ['SEM-Ready', 'DFA Apostille Included', 'Ships to Switzerland via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Switzerland is a Hague Convention member — DFA Apostille is required on Philippine documents',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Paper Apostille originals shipped via DHL Express to your Swiss address',
      'We confirm exact SEM requirements for your specific family reunification application',
    ],
    faqs: [
      {
        q: 'Does Switzerland require DFA Apostille on Philippine documents?',
        a: 'Yes. Switzerland is a Hague Convention member. SEM (State Secretariat for Migration) and the Swiss Embassy in Manila require DFA Apostille authentication on Philippine civil documents for family reunification applications.',
      },
      {
        q: 'What documents are needed for a Swiss family reunification visa?',
        a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for SEM applications. For spousal applications, CENOMAR or PSA Marriage Certificate is also required. We confirm for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Switzerland are included.',
      },
      {
        q: 'How long does it take to ship to Switzerland?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Switzerland typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
];
