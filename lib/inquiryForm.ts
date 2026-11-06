import { getEntryAttribution, getTrafficMedium, getTrafficSource, pageUrl } from './analytics';

function createInquiryId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

/** Build once per attempt; reuse for Web3Forms and its successful-submission alert. */
export function createInquiryFormData(form: HTMLFormElement): FormData {
  const formData = new FormData(form);
  for (const [key, value] of Object.entries(getEntryAttribution())) {
    formData.set(key, String(value));
  }
  formData.set('conversion_page', typeof window === 'undefined' ? '' : pageUrl(window.location.href));
  formData.set('traffic_source', getTrafficSource());
  formData.set('traffic_medium', getTrafficMedium());
  formData.set('inquiry_id', createInquiryId());
  // referral_source and referral_source_detail remain the visitor's own answers.
  return formData;
}
