import { useEffect } from 'react';

const DEFAULT_TITLE = 'CENOMAR・PSA・NBI取得代行｜フィリピン書類取得代行センター';
const DEFAULT_DESCRIPTION =
  'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.setAttribute('content', content);
}

export function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('description', DEFAULT_DESCRIPTION);
      setMeta('og:title', DEFAULT_TITLE, 'property');
      setMeta('og:description', DEFAULT_DESCRIPTION, 'property');
      setMeta('twitter:title', DEFAULT_TITLE);
      setMeta('twitter:description', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
