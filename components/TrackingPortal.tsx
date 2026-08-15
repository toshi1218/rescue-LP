import React, { useEffect, useState } from 'react';
import { CheckCircle2, Circle, Upload, AlertCircle, Loader2 } from 'lucide-react';
import {
  verifyTracking,
  uploadTrackingFile,
  STATUS_ORDER,
  STATUS_LABELS,
  type TrackingLang,
  type TrackingData,
  type StatusKey,
} from '../lib/trackingApi';

type Copy = {
  heading: string;
  intro: string;
  codeLabel: string;
  pinLabel: string;
  submit: string;
  checking: string;
  errorNotFound: string;
  errorRateLimited: string;
  errorNetwork: string;
  lastUpdated: string;
  uploadHeading: string;
  uploadHint: string;
  uploadButton: string;
  uploading: string;
  uploadedFiles: string;
  noFilesYet: string;
  uploadErrorType: string;
  uploadErrorSize: string;
  uploadErrorTooMany: string;
  uploadErrorGeneric: string;
  uploadSuccess: string;
};

const COPY: Record<TrackingLang, Copy> = {
  ja: {
    heading: 'ご依頼の進捗確認',
    intro: 'お渡しした追跡番号とPINを入力すると、現在の進捗状況を確認できます。',
    codeLabel: '追跡番号',
    pinLabel: 'PIN（6桁）',
    submit: '確認する',
    checking: '確認中...',
    errorNotFound: '追跡番号またはPINが一致しません。お渡しした内容をご確認ください。',
    errorRateLimited: '試行回数が多すぎます。しばらくしてから再度お試しください。',
    errorNetwork: '通信エラーが発生しました。時間をおいて再度お試しください。',
    lastUpdated: '最終更新',
    uploadHeading: '書類のアップロード',
    uploadHint: 'パスポート・過去の独身証明書や出生証明書など（JPG・PNG・PDF、1ファイル15MBまで）',
    uploadButton: 'ファイルを選んでアップロード',
    uploading: 'アップロード中...',
    uploadedFiles: 'アップロード済みファイル',
    noFilesYet: 'まだアップロードされたファイルはありません。',
    uploadErrorType: '対応していないファイル形式です（JPG・PNG・PDFのみ）。',
    uploadErrorSize: 'ファイルサイズが大きすぎます（15MBまで）。',
    uploadErrorTooMany: 'アップロード件数の上限に達しました。担当者にご連絡ください。',
    uploadErrorGeneric: 'アップロードに失敗しました。時間をおいて再度お試しください。',
    uploadSuccess: 'アップロードが完了しました。',
  },
  en: {
    heading: 'Track Your Order',
    intro: 'Enter the tracking code and PIN we sent you to check the current status.',
    codeLabel: 'Tracking code',
    pinLabel: 'PIN (6 digits)',
    submit: 'Check status',
    checking: 'Checking...',
    errorNotFound: 'Tracking code or PIN did not match. Please check the details we sent you.',
    errorRateLimited: 'Too many attempts. Please try again in a few minutes.',
    errorNetwork: 'A network error occurred. Please try again shortly.',
    lastUpdated: 'Last updated',
    uploadHeading: 'Upload documents',
    uploadHint: 'Passport, previous CENOMAR / birth certificate copies, etc. (JPG, PNG, PDF — up to 15MB each)',
    uploadButton: 'Choose a file to upload',
    uploading: 'Uploading...',
    uploadedFiles: 'Uploaded files',
    noFilesYet: 'No files uploaded yet.',
    uploadErrorType: 'Unsupported file type (JPG, PNG, or PDF only).',
    uploadErrorSize: 'File is too large (15MB max).',
    uploadErrorTooMany: 'You have reached the upload limit. Please contact us.',
    uploadErrorGeneric: 'Upload failed. Please try again shortly.',
    uploadSuccess: 'Upload complete.',
  },
  ko: {
    heading: '진행 상황 확인',
    intro: '전달받은 추적 번호와 PIN을 입력하면 현재 진행 상황을 확인할 수 있습니다.',
    codeLabel: '추적 번호',
    pinLabel: 'PIN (6자리)',
    submit: '확인하기',
    checking: '확인 중...',
    errorNotFound: '추적 번호 또는 PIN이 일치하지 않습니다. 전달받은 내용을 확인해 주세요.',
    errorRateLimited: '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.',
    errorNetwork: '통신 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    lastUpdated: '마지막 업데이트',
    uploadHeading: '서류 업로드',
    uploadHint: '여권, 기존 미혼증명서 / 출생증명서 등 (JPG, PNG, PDF — 파일당 15MB까지)',
    uploadButton: '파일 선택하여 업로드',
    uploading: '업로드 중...',
    uploadedFiles: '업로드된 파일',
    noFilesYet: '아직 업로드된 파일이 없습니다.',
    uploadErrorType: '지원하지 않는 파일 형식입니다 (JPG, PNG, PDF만 가능).',
    uploadErrorSize: '파일 크기가 너무 큽니다 (최대 15MB).',
    uploadErrorTooMany: '업로드 가능 건수를 초과했습니다. 담당자에게 문의해 주세요.',
    uploadErrorGeneric: '업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.',
    uploadSuccess: '업로드가 완료되었습니다.',
  },
};

function formatDate(ts: number, lang: TrackingLang): string {
  const locale = lang === 'ja' ? 'ja-JP' : lang === 'ko' ? 'ko-KR' : 'en-US';
  return new Date(ts).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function TrackingPortal({ lang }: { lang: TrackingLang }) {
  const c = COPY[lang];
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<TrackingData | null>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState('');
  const [uploadErr, setUploadErr] = useState('');

  async function runVerify(codeValue: string, pinValue: string) {
    setChecking(true);
    setError('');
    setData(null);

    const result = await verifyTracking(codeValue.trim().toLowerCase(), pinValue.trim());
    setChecking(false);

    if (!result.ok) {
      if (result.error === 'rate_limited') setError(c.errorRateLimited);
      else if (result.error === 'network_error') setError(c.errorNetwork);
      else setError(c.errorNotFound);
      return;
    }
    setData(result.data);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void runVerify(code, pin);
  }

  // スタッフが発行するURL（?code=...&pin=...）で開かれた場合は、入力なしでそのまま進捗を表示する。
  // 読み取り後はアドレスバーからPINを消す（履歴・スクリーンショット経由の漏れを減らす）。
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get('code');
    const urlPin = params.get('pin');
    if (!urlCode || !urlPin) return;

    setCode(urlCode);
    setPin(urlPin);
    window.history.replaceState(null, '', window.location.pathname);
    void runVerify(urlCode, urlPin);
    // 初回マウント時のみ実行する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !data) return;

    setUploading(true);
    setUploadMsg('');
    setUploadErr('');

    const result = await uploadTrackingFile(code.trim().toLowerCase(), pin.trim(), file);
    setUploading(false);

    if (!result.ok) {
      const map: Record<string, string> = {
        unsupported_file_type: c.uploadErrorType,
        file_too_large: c.uploadErrorSize,
        too_many_uploads: c.uploadErrorTooMany,
      };
      setUploadErr(map[result.error] ?? c.uploadErrorGeneric);
      return;
    }

    setUploadMsg(c.uploadSuccess);
    setData({ ...data, uploads: [...data.uploads, { filename: file.name, uploaded_at: Date.now() }] });
  }

  const currentIndex = data ? STATUS_ORDER.indexOf(data.current_status as StatusKey) : -1;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">{c.heading}</h1>
      <p className="text-sm text-gray-600 mb-6">{c.intro}</p>

      {!data && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
          <div>
            <label htmlFor="tracking-code" className="block text-sm font-medium text-gray-700 mb-1">
              {c.codeLabel}
            </label>
            <input
              id="tracking-code"
              type="text"
              value={code}
              onChange={(ev) => setCode(ev.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="tracking-pin" className="block text-sm font-medium text-gray-700 mb-1">
              {c.pinLabel}
            </label>
            <input
              id="tracking-pin"
              type="text"
              inputMode="numeric"
              value={pin}
              onChange={(ev) => setPin(ev.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoComplete="off"
            />
          </div>

          {error && (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={checking}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3 rounded-xl shadow-lg hover:bg-primary-hover transition-all text-sm disabled:opacity-60"
          >
            {checking ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> {c.checking}
              </>
            ) : (
              c.submit
            )}
          </button>
        </form>
      )}

      {data && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <ol className="space-y-3">
              {STATUS_ORDER.map((key, i) => {
                const done = i < currentIndex;
                const active = i === currentIndex;
                return (
                  <li key={key} className="flex items-start gap-3">
                    {done || active ? (
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${active ? 'text-primary-dark' : 'text-emerald-600'}`} />
                    ) : (
                      <Circle className="w-5 h-5 shrink-0 mt-0.5 text-gray-300" />
                    )}
                    <span className={`text-sm ${active ? 'font-bold text-secondary' : done ? 'text-gray-700' : 'text-gray-400'}`}>
                      {STATUS_LABELS[lang][key]}
                    </span>
                  </li>
                );
              })}
            </ol>
            {data.status_note && <p className="mt-4 text-sm text-gray-600 border-t border-gray-100 pt-4">{data.status_note}</p>}
            <p className="mt-3 text-xs text-gray-400">
              {c.lastUpdated}: {formatDate(data.status_updated_at, lang)}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-secondary mb-1">{c.uploadHeading}</h2>
            <p className="text-xs text-gray-500 mb-4">{c.uploadHint}</p>

            <label className="inline-flex items-center gap-2 border border-primary/30 text-primary-dark font-medium text-sm px-4 py-2.5 rounded-xl cursor-pointer hover:bg-primary/5 transition-all">
              {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {uploading ? c.uploading : c.uploadButton}
              <input type="file" accept="image/jpeg,image/png,image/webp,image/heic,application/pdf" onChange={handleUpload} disabled={uploading} className="hidden" />
            </label>

            {uploadMsg && <p className="mt-3 text-sm text-emerald-600">{uploadMsg}</p>}
            {uploadErr && (
              <p className="mt-3 flex items-start gap-2 text-sm text-red-600">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                {uploadErr}
              </p>
            )}

            <div className="mt-5 border-t border-gray-100 pt-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{c.uploadedFiles}</h3>
              {data.uploads.length === 0 ? (
                <p className="text-sm text-gray-400">{c.noFilesYet}</p>
              ) : (
                <ul className="space-y-1.5">
                  {data.uploads.map((u, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center justify-between">
                      <span className="truncate">{u.filename}</span>
                      <span className="text-xs text-gray-400 shrink-0 ml-3">{formatDate(u.uploaded_at, lang)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
