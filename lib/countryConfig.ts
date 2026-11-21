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
  price?: string;
  faqs: FaqItem[];
  summaryPoints: string[];
  applicationGuide?: {
    title: string;
    steps: { label: string; detail: string }[];
    sourceLabel: string;
    sourceHref: string;
  };
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
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your New Zealand address',
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
    badges: ['Paper DFA Authentication', 'German Embassy Legalization', 'Delivery to Germany'],
    // The Apostille Convention is not in force between Germany and the Philippines.
    isHagueConvention: false,
    authLabel: 'DFA Authentication + German Embassy legalization',
    shippingDays: '3–5 business days',
    totalWeeks: 'Case-specific estimate',
    summaryPoints: [
      'The Apostille Convention is not in force between Germany and the Philippines; confirm whether the receiving authority requires legalization',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'When legalization is required, we arrange PSA originals, a paper DFA Authentication Certificate, VFS Global submission, German Embassy legalization and delivery to Germany',
      'We confirm exact German Embassy requirements for your specific application type',
    ],
    faqs: [
      {
        q: 'Is a Philippine Apostille enough for Germany?',
        a: 'No. The Apostille Convention is not in force between Germany and the Philippines. If the receiving authority requires legalization, obtain a paper DFA Authentication Certificate before German Embassy legalization. Electronic documents and e-Apostilles cannot be legalized by the Embassy.',
      },
      {
        q: 'What documents are needed for Ehegattennachzug (spousal reunification) to Germany?',
        a: 'The checklist depends on the application. PSA Birth Certificate, CENOMAR or Marriage Certificate, and sometimes NBI Clearance may be requested. We confirm the exact documents and authentication route rather than assuming all applications require the same set.',
      },
      {
        q: 'How much does it cost?',
        a: 'We confirm document types, copies, additional LCR requirements, DFA authentication, VFS/Embassy processing and international shipping in a written quotation before starting.',
      },
      {
        q: 'How long does it take to ship to Germany?',
        a: 'The complete timeline depends on PSA retrieval, DFA authentication, VFS appointment availability, Embassy review, additional LCR evidence and international delivery. We confirm a case-specific estimate before starting.',
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
      'Check whether IND asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Netherlands address',
      'We confirm exact IND requirements for your specific MVV or residence permit application',
    ],
    faqs: [
      {
        q: 'Does the Netherlands require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with IND for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
      'Check whether ICA asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Singapore address',
      'We confirm exact ICA requirements for your specific pass or visa application',
    ],
    faqs: [
      {
        q: 'Does Singapore require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with ICA for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
    badges: ['HK Immigration-Ready', 'DFA Apostille Route', 'Ships to Hong Kong via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '2–4 business days',
    totalWeeks: '3–5 weeks',
    price: '899',
    applicationGuide: {
      title: 'Hong Kong dependant visa: match the record to the relationship',
      steps: [
        { label: 'Spouse or partner', detail: 'Check the relationship evidence listed for your sponsorship category. For a marriage registered in the Philippines, a PSA Marriage Certificate can document that marriage.' },
        { label: 'Dependent child', detail: 'A Philippine birth certificate can show parentage. If the names on the certificate and travel documents differ, check which supporting records the Immigration Department requests.' },
        { label: 'Sponsorship documents', detail: 'The Immigration Department also lists evidence for the applicant and the sponsor, including travel documents and supporting records. Send the exact request if it specifies a paper original or authentication.' },
      ],
      sourceLabel: 'Hong Kong Immigration Department dependant visa checklist',
      sourceHref: 'https://www.immd.gov.hk/eng/services/visas/residence_as_dependant.html',
    },
    summaryPoints: [
      'The Apostille Convention continues to apply to the Hong Kong SAR — a DFA Apostille is the authentication route, not consular legalisation',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Confirm the required format and whether authentication is needed for each record',
      'We confirm what the Hong Kong Immigration Department asks for in your specific application before you pay',
    ],
    faqs: [
      {
        q: 'Does Hong Kong require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'The Apostille Convention continues to apply to the Hong Kong SAR, so Philippine public documents are authenticated with a DFA Apostille rather than consular legalisation. Whether the Immigration Department asks for authentication at all depends on the application, so we confirm the current requirement before processing.',
      },
      {
        q: 'What documents are needed for a Hong Kong Dependant Visa?',
        a: 'Check the Immigration Department’s dependant visa list for your sponsor category. It lists proof of relationship, such as a marriage certificate for a spouse or a birth certificate for a child, along with other applicant and sponsor records.',
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
    visaType: 'Family Residence Visa',
    badges: ['Qatar Embassy-Ready', 'Embassy Attestation Included', 'Ships to Qatar via DHL'],
    isHagueConvention: false,
    authLabel: 'Embassy Attestation',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    applicationGuide: {
      title: 'Qatar family residence visa: check these documents first',
      steps: [
        { label: 'Sponsoring a spouse', detail: 'Qatar’s Ministry of Interior lists an attested marriage certificate for family residence. For a marriage registered in the Philippines, check the spelling of both names on the PSA marriage record against the passports before starting attestation.' },
        { label: 'Sponsoring a child', detail: 'Check the proof of parentage requested for each child. If the checklist names a Philippine birth certificate, confirm the required format, translation, and attestation before ordering.' },
        { label: 'Confirm the Qatar-side step', detail: 'Ask the sponsor whether the receiving office requires further Qatar Ministry of Foreign Affairs attestation. Share the current checklist and deadline so we can quote the Philippine retrieval, authentication, and delivery steps accurately.' },
      ],
      sourceLabel: 'Qatar Ministry of Interior family residence instructions',
      sourceHref: 'https://portal.moi.gov.qa/wps/wcm/connect/wcmlib-internet-en/sa-departmentcommittee/generaladministrationofnationalitybordersandexpatriateaffairs/dgt',
    },
    summaryPoints: [
      'Start with the attested marriage certificate when sponsoring a spouse',
      'Check the proof of parentage required for each child',
      'Confirm any additional Qatar-side attestation before ordering',
    ],
    faqs: [
      {
        q: 'Does Qatar require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'Qatar requires Embassy Attestation. Qatar is not a Hague Convention member. Philippine documents must be authenticated by the DFA and then attested by the Qatar Embassy in Manila. We handle both steps.',
      },
      {
        q: 'What documents are needed for a Qatar family residence permit?',
        a: 'The Ministry of Interior lists an attested marriage certificate for spouse sponsorship. Check the current family residence application for each applicant, including the proof of parentage for children and any separately requested records.',
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
      'Check whether the Italian Embassy asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Italian address',
      'We confirm exact Italian Embassy requirements for your specific application type',
    ],
    faqs: [
      {
        q: 'Does Italy require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with the Italian Embassy for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
      'Check whether UDI asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Norwegian address',
      'We confirm exact UDI requirements for your specific family immigration application',
    ],
    faqs: [
      {
        q: 'Does Norway require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with UDI for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
      'Check whether Migrationsverket asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Swedish address',
      'We confirm exact Migrationsverket requirements for your specific residence permit application',
    ],
    faqs: [
      {
        q: 'Does Sweden require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with Migrationsverket for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
  // ── Phase 5 ───────────────────────────────────────────────────────────────
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    countryCode: 'SA',
    agency: 'Saudi Embassy Manila',
    agencyAbbr: 'Saudi Embassy',
    visaType: 'Family Visa (Iqama Sponsorship)',
    badges: ['Saudi Family Visa', 'DFA Apostille Route', 'Ships to Saudi Arabia via DHL'],
    isHagueConvention: true,
    authLabel: 'DFA Apostille',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Saudi Arabia has been a Contracting Party to the Apostille Convention since 7 December 2022 — a DFA Apostille replaces consular legalisation',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'If authentication is required for a PSA e-Certificate or NBI eClearance, check the current electronic DFA route',
      'Some Saudi sponsors and employers still ask for embassy attestation in practice — we confirm what your specific receiving office wants before you pay',
    ],
    faqs: [
      {
        q: 'Does Saudi Arabia require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'Saudi Arabia has been a Contracting Party to the Apostille Convention since 7 December 2022, so a DFA Apostille replaces consular legalisation for Philippine public documents. Some sponsors and employers still request embassy attestation as an internal practice, so we confirm the current requirement with your specific receiving office before processing.',
      },
      {
        q: 'What documents are needed for a Saudi Arabia family visa (Iqama sponsorship)?',
        a: 'PSA Birth Certificate and NBI Clearance are commonly requested. For spouse sponsorship, a PSA Marriage Certificate is usually required as well. Requirements vary by sponsor and region, so we confirm the current checklist for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case, covering the PSA documents, the applicable DFA authentication route, and DHL shipping to Saudi Arabia.',
      },
      {
        q: 'How long does it take to ship to Saudi Arabia?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Saudi Arabia typically takes 3–5 business days after documents are ready.',
      },
    ],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    countryCode: 'KW',
    agency: 'Kuwait Embassy Manila',
    agencyAbbr: 'Kuwait Embassy',
    visaType: 'Family Residency Visa (Iqama)',
    badges: ['Kuwait Embassy-Ready', 'Embassy Attestation Included', 'Ships to Kuwait via DHL'],
    isHagueConvention: false,
    authLabel: 'Embassy Attestation',
    shippingDays: '3–5 business days',
    totalWeeks: '4–6 weeks',
    price: '899',
    summaryPoints: [
      'Kuwait requires Embassy Attestation (not Apostille) — we handle DFA authentication and Kuwait Embassy attestation',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'Attested originals shipped via DHL Express to your Kuwait address',
      'We confirm exact Kuwait Embassy requirements for your specific residency visa application',
    ],
    faqs: [
      {
        q: 'Does Kuwait require DFA Apostille or Embassy Attestation on Philippine documents?',
        a: 'Kuwait requires Embassy Attestation. Kuwait is not a Hague Convention member. Philippine documents must be authenticated by the DFA and then attested by the Kuwait Embassy in Manila. We handle both steps.',
      },
      {
        q: 'What documents are needed for a Kuwait family residency visa (Iqama)?',
        a: 'Typically PSA Birth Certificate and NBI Clearance with Embassy Attestation. For spouse sponsorship, PSA Marriage Certificate is also required. We confirm exact requirements for your specific case.',
      },
      {
        q: 'How much does it cost?',
        a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, Kuwait Embassy attestation, and DHL shipping to Kuwait are included.',
      },
      {
        q: 'How long does it take to ship to Kuwait?',
        a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Kuwait typically takes 3–5 business days after documents are ready.',
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
      'Check whether the receiving Swiss authority asks for authentication on the specific Philippine documents you will submit',
      'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
      'PSA records are authenticated with an electronic e-Apostille; SECPA paper originals and non-PSA records ship via DHL Express to your Swiss address',
      'We confirm exact SEM requirements for your specific family reunification application',
    ],
    faqs: [
      {
        q: 'Does Switzerland require DFA Apostille on Philippine documents?',
        a: 'Confirm the authentication requirement with the receiving Swiss authority for your specific application. When the Apostille Convention applies and an Apostille is requested, DFA is the Philippine issuing authority.',
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
