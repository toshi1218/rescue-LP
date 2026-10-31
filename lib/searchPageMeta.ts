import { SEO_YEAR } from './seoDate';

// These three pages share their metadata with the static renderer.
export const SEARCH_PAGE_META = {
  '/ja/cenomar/': {
    title: `CENOMARとは？日本からの取得・代行費用・有効期限【${SEO_YEAR}年】`,
    description: 'CENOMAR（フィリピン独身証明書）の日本からの取得を日本語で代行。費用・必要書類・有効期限・DFA e-Apostilleを解説。本人確認書類と委任状を確認し、提出先に合う形式をご案内します。',
  },
  '/ja/nbi-clearance/': {
    title: 'フィリピンNBI Clearance取得代行｜日本からの初回申請・更新・アポスティーユ',
    description: 'フィリピンNBI Clearance（無犯罪証明書）の初回申請・更新を日本語で支援。初回は大使館等での本人の指紋採取が必要です。Form No.5受領後の現地手続き、DFAアポスティーユ、日本への発送をご相談いただけます。',
  },
  '/en/psa-birth-certificate-cost/': {
    title: `PSA Birth Certificate Cost [${SEO_YEAR}]: Official Fees & Total from Abroad`,
    description: 'Compare PSA direct-order fees with our US$349 service package. See what domestic delivery covers, and when authentication and international shipping cost extra.',
  },
} as const;
