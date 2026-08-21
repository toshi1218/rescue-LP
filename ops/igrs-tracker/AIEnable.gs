/**
 * AIドラフト自動化の安全な初回有効化。
 * 既存Web3Formsスレッドをbaselineとして処理済みにしてからトリガーを作る。
 * これにより、導入時に過去14日分へ一斉にAI APIを呼ぶ事故を防ぐ。
 */
function enableAiDraftAutomation() {
  const props = PropertiesService.getScriptProperties();
  const query = 'in:anywhere from:web3forms.com ' + AI_DRAFT_LOOKBACK;
  const threads = GmailApp.search(query, 0, AI_DRAFT_MAX_THREADS);
  var primed = 0;

  threads.forEach(function (t) {
    const key = AI_DRAFT_STATE_PREFIX + t.getId();
    if (!props.getProperty(key)) {
      props.setProperty(key, 'baseline:before-enable');
      primed++;
    }
  });

  const triggerResult = installAiDraftTrigger();
  return 'AI draft automation enabled. Existing threads primed: ' + primed + '. ' + triggerResult;
}

/**
 * 動作確認用。最新の未返信問い合わせを意図的にAI処理したい場合のみ手動実行する。
 * 自動運用では使わない。
 */
function processNewestInquiryWithAiOnce() {
  const threads = GmailApp.search(
    'in:anywhere from:web3forms.com ' + AI_DRAFT_LOOKBACK,
    0,
    AI_DRAFT_MAX_THREADS
  );
  if (!threads.length) return 'No Web3Forms inquiries found.';

  threads.sort(function (a, b) {
    return b.getLastMessageDate() - a.getLastMessageDate();
  });

  for (var i = 0; i < threads.length; i++) {
    const thread = GmailApp.getThreadById(threads[i].getId());
    if (!thread) continue;
    const messages = thread.getMessages();
    if (!messages.length) continue;

    const source = messages[0];
    const parsed = draftParseWeb3Form_(source.getPlainBody());
    const email = String(parsed.email || '').trim();
    if (!draftIsValidEmail_(email)) continue;
    if (draftAlreadyReplied_(email, source.getDate())) continue;

    resetAiInquiryDraftMarker(thread.getId());
    aiDraftJob();
    return 'Newest unreplied inquiry released for one AI processing pass: ' + thread.getId();
  }

  return 'No unreplied inquiry found.';
}
