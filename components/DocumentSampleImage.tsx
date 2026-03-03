import React from 'react';

// ─────────────────────────────────────────────
// PSA Birth Certificate Sample Image
// ─────────────────────────────────────────────
export function PsaBirthCertSample({ lang }: { lang: string }) {
  const label = lang === 'ja' ? 'PSA出生証明書（サンプルイメージ）' : 'PSA Birth Certificate — Sample';
  return (
    <figure className="my-8 select-none" aria-label={label}>
      <div className="relative max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        {/* Security paper background pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="psa-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#1a5276" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#psa-bg)" />
        </svg>

        <div className="relative p-5">
          {/* Header */}
          <div className="text-center mb-4 border-b-2 border-blue-800 pb-3">
            <p className="text-[9px] font-bold text-blue-900 tracking-widest uppercase">Republic of the Philippines</p>
            <p className="text-[11px] font-extrabold text-blue-900 tracking-wide uppercase">Philippine Statistics Authority</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              {/* PSA-like seal */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="13" stroke="#1a5276" strokeWidth="1.5" fill="#eaf0fb" />
                <circle cx="14" cy="14" r="9" stroke="#1a5276" strokeWidth="0.8" fill="none" />
                <text x="14" y="17" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1a5276">PSA</text>
              </svg>
              <div>
                <p className="text-[13px] font-extrabold text-blue-900 leading-tight">BIRTH CERTIFICATE</p>
                <p className="text-[8px] text-blue-700 tracking-widest">CERTIFIED TRUE COPY</p>
              </div>
            </div>
          </div>

          {/* Security paper label */}
          <div className="bg-blue-50 border border-blue-200 rounded px-2 py-1 mb-3 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2" fill="#1a5276"/><path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <p className="text-[8px] font-bold text-blue-800 tracking-wide uppercase">Security Paper (SECPA)</p>
          </div>

          {/* Fields */}
          <div className="space-y-2">
            {[
              { label: 'Name', value: '████████ ██████' },
              { label: 'Date of Birth', value: '██ ███████ ████' },
              { label: 'Place of Birth', value: '████████ City, ████████' },
              { label: 'Sex', value: '██████' },
              { label: "Father's Name", value: '████████ ██████' },
              { label: "Mother's Maiden Name", value: '████████ ██████' },
            ].map((row, i) => (
              <div key={i} className="flex gap-2 text-[9px]">
                <span className="text-gray-500 w-28 flex-shrink-0">{row.label}:</span>
                <span className="text-gray-800 font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Registration info */}
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-end">
            <div>
              <p className="text-[8px] text-gray-400">Reg. No.: ████-████████</p>
              <p className="text-[8px] text-gray-400">Date Issued: ██/██/████</p>
            </div>
            <div className="text-right">
              <div className="w-16 border-b border-gray-400 mb-0.5" />
              <p className="text-[7px] text-gray-400">Authorized Signatory</p>
            </div>
          </div>

          {/* QR code placeholder */}
          <div className="absolute bottom-4 right-4 w-10 h-10 border border-gray-300 rounded flex items-center justify-center bg-white">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="10" height="10" rx="1" stroke="#374151" strokeWidth="1.5" fill="none"/>
              <rect x="16" y="2" width="10" height="10" rx="1" stroke="#374151" strokeWidth="1.5" fill="none"/>
              <rect x="2" y="16" width="10" height="10" rx="1" stroke="#374151" strokeWidth="1.5" fill="none"/>
              <rect x="5" y="5" width="4" height="4" fill="#374151"/>
              <rect x="19" y="5" width="4" height="4" fill="#374151"/>
              <rect x="5" y="19" width="4" height="4" fill="#374151"/>
              <rect x="16" y="16" width="3" height="3" fill="#374151"/>
              <rect x="21" y="16" width="3" height="3" fill="#374151"/>
              <rect x="16" y="21" width="3" height="3" fill="#374151"/>
              <rect x="21" y="21" width="3" height="3" fill="#374151"/>
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-400 mt-2">{label}</figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────
// NBI Clearance Sample Image
// ─────────────────────────────────────────────
export function NbiClearanceSample({ lang }: { lang: string }) {
  const label = lang === 'ja' ? 'NBI Clearance（サンプルイメージ）' : 'NBI Clearance — Sample';
  return (
    <figure className="my-8 select-none" aria-label={label}>
      <div className="relative max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        {/* Background pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nbi-bg" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10Z" fill="#7b241c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nbi-bg)" />
        </svg>

        <div className="relative p-5">
          {/* Header */}
          <div className="text-center mb-4 border-b-2 border-red-800 pb-3">
            <p className="text-[9px] font-bold text-red-900 tracking-widest uppercase">Republic of the Philippines</p>
            <p className="text-[10px] font-extrabold text-red-900 tracking-wide uppercase">National Bureau of Investigation</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#7b241c" strokeWidth="1.5" fill="#fdf2f2" />
                <circle cx="14" cy="14" r="9" stroke="#7b241c" strokeWidth="0.8" fill="none" />
                <text x="14" y="17" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#7b241c">NBI</text>
              </svg>
              <div>
                <p className="text-[14px] font-extrabold text-red-900 leading-tight">CLEARANCE</p>
                <p className="text-[8px] text-red-700 tracking-widest">OFFICIAL DOCUMENT</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-3">
            {/* Photo placeholder */}
            <div className="w-16 h-20 bg-gray-100 border border-gray-300 rounded flex-shrink-0 flex flex-col items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#9ca3af" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <p className="text-[7px] text-gray-400 mt-1">PHOTO</p>
            </div>

            {/* Fields */}
            <div className="flex-1 space-y-1.5">
              {[
                { label: 'Name', value: '████████ ██████' },
                { label: 'Date of Birth', value: '██/██/████' },
                { label: 'Place of Birth', value: '████████, ████' },
                { label: 'Date Issued', value: '██/██/████' },
                { label: 'Valid Until', value: '██/██/████' },
              ].map((row, i) => (
                <div key={i} className="text-[9px]">
                  <span className="text-gray-400">{row.label}: </span>
                  <span className="text-gray-800 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Result badge */}
          <div className="bg-green-50 border border-green-300 rounded-lg px-3 py-2 flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#16a34a"/><path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div>
              <p className="text-[9px] font-extrabold text-green-800 tracking-wide">NO DEROGATORY RECORD FOUND</p>
              <p className="text-[7px] text-green-600">No criminal record on file</p>
            </div>
          </div>

          {/* Fingerprint + serial */}
          <div className="flex justify-between items-end mt-2 pt-2 border-t border-gray-200">
            <div>
              <p className="text-[7px] text-gray-400">Serial No.: NBI-████-████████</p>
              <p className="text-[7px] text-gray-400">Control No.: ████████████</p>
            </div>
            {/* Fingerprint icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-30">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#374151" strokeWidth="1.2"/>
              <path d="M12 6c-1.66 0-3 1.34-3 3" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M12 8c-.55 0-1 .45-1 1" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-400 mt-2">{label}</figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────
// LTO Driver's Record Sample Image
// ─────────────────────────────────────────────
export function LtoDriversRecordSample({ lang }: { lang: string }) {
  const label = lang === 'ja' ? "LTO Driver's Record（サンプルイメージ）" : "LTO Driver's Record — Sample";
  return (
    <figure className="my-8 select-none" aria-label={label}>
      <div className="relative max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lto-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="8" y="8" width="4" height="4" fill="#1a5276" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lto-bg)" />
        </svg>

        <div className="relative p-5">
          {/* Header */}
          <div className="text-center mb-4 border-b-2 border-blue-700 pb-3">
            <p className="text-[9px] font-bold text-blue-900 tracking-widest uppercase">Republic of the Philippines</p>
            <p className="text-[10px] font-extrabold text-blue-900 uppercase">Department of Transportation</p>
            <p className="text-[10px] font-extrabold text-blue-900 uppercase">Land Transportation Office</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#1a5276" strokeWidth="1.5" fill="#eaf0fb" />
                <text x="13" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1a5276">LTO</text>
              </svg>
              <p className="text-[13px] font-extrabold text-blue-900">DRIVER'S RECORD</p>
            </div>
          </div>

          {/* Fields */}
          <div className="space-y-2 mb-3">
            {[
              { label: "Driver's Name", value: '████████ ██████' },
              { label: 'License No.', value: '██-████-██████' },
              { label: 'License Type', value: 'Non-Professional / Professional' },
              { label: 'Date Issued', value: '██/██/████' },
              { label: 'Expiry Date', value: '██/██/████' },
            ].map((row, i) => (
              <div key={i} className="flex gap-2 text-[9px]">
                <span className="text-gray-500 w-28 flex-shrink-0">{row.label}:</span>
                <span className="text-gray-800 font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Violation record table */}
          <div className="border border-gray-200 rounded overflow-hidden mb-3">
            <div className="bg-blue-700 px-2 py-1">
              <p className="text-[8px] font-bold text-white uppercase tracking-wide">Violation / Conviction Record</p>
            </div>
            <div className="px-2 py-2 bg-gray-50">
              <p className="text-[9px] text-green-700 font-bold">✓ No violations on record</p>
            </div>
          </div>

          <div className="flex justify-between items-end pt-2 border-t border-gray-200">
            <div>
              <p className="text-[7px] text-gray-400">Issued by: LTO Central Office</p>
              <p className="text-[7px] text-gray-400">Date: ██/██/████</p>
            </div>
            <div className="text-right">
              <div className="w-16 border-b border-gray-400 mb-0.5" />
              <p className="text-[7px] text-gray-400">LTO Official</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-400 mt-2">{label}</figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────
// DFA Apostille Sample Image
// ─────────────────────────────────────────────
export function DfaApostilleSample({ lang }: { lang: string }) {
  const label = lang === 'ja' ? 'DFAアポスティーユ認証（サンプルイメージ）' : 'DFA Apostille Certificate — Sample';
  return (
    <figure className="my-8 select-none" aria-label={label}>
      <div className="relative max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dfa-bg" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M8 1L9.5 5.5H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5H6.5Z" fill="#6b21a8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dfa-bg)" />
        </svg>

        <div className="relative p-5">
          {/* Header */}
          <div className="text-center mb-4 border-b-2 border-purple-800 pb-3">
            <p className="text-[9px] font-bold text-purple-900 tracking-widest uppercase">Republic of the Philippines</p>
            <p className="text-[10px] font-extrabold text-purple-900 uppercase">Department of Foreign Affairs</p>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#6b21a8" strokeWidth="1.5" fill="#f5f0ff" />
                <text x="13" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#6b21a8">DFA</text>
              </svg>
              <div>
                <p className="text-[14px] font-extrabold text-purple-900 leading-tight">APOSTILLE</p>
                <p className="text-[8px] text-purple-700 tracking-widest">HAGUE CONVENTION</p>
              </div>
            </div>
          </div>

          {/* Apostille convention text */}
          <div className="bg-purple-50 border border-purple-200 rounded px-3 py-2 mb-3 text-center">
            <p className="text-[8px] font-bold text-purple-800 uppercase tracking-wide">Convention de La Haye du 5 octobre 1961</p>
          </div>

          {/* Fields */}
          <div className="space-y-2 mb-3">
            {[
              { label: 'Country', value: 'Philippines' },
              { label: 'This public document', value: '████████ ██████' },
              { label: 'Signed by', value: '████████ ██████' },
              { label: 'Acting in capacity of', value: 'PSA / NBI / LTO Official' },
              { label: 'Certified at', value: 'DFA Aseana, Pasay City' },
              { label: 'Date', value: '██/██/████' },
              { label: 'Certificate No.', value: '████-████████' },
            ].map((row, i) => (
              <div key={i} className="flex gap-2 text-[9px]">
                <span className="text-gray-500 w-32 flex-shrink-0">{row.label}:</span>
                <span className="text-gray-800 font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Stamp */}
          <div className="flex justify-between items-end pt-2 border-t border-gray-200">
            <div className="w-14 h-14 border-2 border-purple-300 rounded-full flex items-center justify-center opacity-40">
              <div className="text-center">
                <p className="text-[6px] font-bold text-purple-800 leading-tight">DFA</p>
                <p className="text-[5px] text-purple-600">OFFICIAL</p>
                <p className="text-[5px] text-purple-600">SEAL</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-20 border-b border-gray-400 mb-0.5" />
              <p className="text-[7px] text-gray-400">DFA Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-400 mt-2">{label}</figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────
// CENOMAR Sample Image
// ─────────────────────────────────────────────
export function CenomarSample({ lang }: { lang: string }) {
  const label = lang === 'ja' ? 'CENOMAR（サンプルイメージ）' : 'CENOMAR — Sample';
  return (
    <figure className="my-8 select-none" aria-label={label}>
      <div className="relative max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cen-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#0e6655" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cen-bg)" />
        </svg>

        <div className="relative p-5">
          {/* Header */}
          <div className="text-center mb-4 border-b-2 border-teal-800 pb-3">
            <p className="text-[9px] font-bold text-teal-900 tracking-widest uppercase">Republic of the Philippines</p>
            <p className="text-[10px] font-extrabold text-teal-900 uppercase">Philippine Statistics Authority</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#0e6655" strokeWidth="1.5" fill="#e8f8f5" />
                <text x="13" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0e6655">PSA</text>
              </svg>
              <div>
                <p className="text-[11px] font-extrabold text-teal-900 leading-tight">CENOMAR</p>
                <p className="text-[7px] text-teal-700 tracking-wide">Certificate of No Marriage Record</p>
              </div>
            </div>
          </div>

          {/* Security paper label */}
          <div className="bg-teal-50 border border-teal-200 rounded px-2 py-1 mb-3 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2" fill="#0e6655"/><path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <p className="text-[8px] font-bold text-teal-800 tracking-wide uppercase">Security Paper (SECPA)</p>
          </div>

          {/* Fields */}
          <div className="space-y-2 mb-3">
            {[
              { label: 'Name', value: '████████ ██████' },
              { label: 'Date of Birth', value: '██ ███████ ████' },
              { label: 'Place of Birth', value: '████████ City, ████' },
              { label: 'Sex', value: '██████' },
            ].map((row, i) => (
              <div key={i} className="flex gap-2 text-[9px]">
                <span className="text-gray-500 w-28 flex-shrink-0">{row.label}:</span>
                <span className="text-gray-800 font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="bg-green-50 border border-green-300 rounded-lg px-3 py-2 flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#16a34a"/><path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div>
              <p className="text-[9px] font-extrabold text-green-800 tracking-wide">NO MARRIAGE RECORD FOUND</p>
              <p className="text-[7px] text-green-600">This person has no registered marriage on file</p>
            </div>
          </div>

          <div className="flex justify-between items-end pt-2 border-t border-gray-200">
            <div>
              <p className="text-[7px] text-gray-400">Reg. No.: ████-████████</p>
              <p className="text-[7px] text-gray-400">Date Issued: ██/██/████</p>
            </div>
            <div className="text-right">
              <div className="w-16 border-b border-gray-400 mb-0.5" />
              <p className="text-[7px] text-gray-400">Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-400 mt-2">{label}</figcaption>
    </figure>
  );
}
