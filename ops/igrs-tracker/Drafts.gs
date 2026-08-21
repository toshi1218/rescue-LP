/**
 * IGRS Web3Forms -> Gmail Draft automation
 * ---------------------------------------------------------------
 * 目的:
 *   Web3Forms の新規問い合わせを15分ごとに確認し、顧客宛ての Gmail 下書きを自動作成する。
 *
 * 方針:
 *   - 自動送信はしない。必ず Gmail の「下書き」まで。
 *   - 問い合わせ本文を見て、よくある案件は料金・納期・注意点・次アクションまで入れる。
 *   - 正式見積は詳細確認後と明記する。
 *   - パスポート等をメール添付で要求しない。必要時は安全なアップロード方法を案内する。
 *   - 既に同じ顧客へ問い合わせ受信後に返信済みなら下書きを作らない。
 *   - 同じ Web3Forms スレッドについて下書きを二重作成しない。
 *
 * 使い方:
 *   1. このファイルを既存の IGRS Apps Script プロジェクトへ追加
 *   2. installDraftTrigger() を一度だけ手動実行
 *   3. 以後は draftJob() が15分ごとに動作
 *
 * 注意:
 *   料金は「自動返信用の目安」。価格改定時は DRAFT_PRICING を更新する。
 * ---------------------------------------------------------------
 */

const DRAFT_LOOKBACK = 'newer_than:14d';
const DRAFT_STATE_PREFIX = 'IGRS_WEB3_DRAFT_';
const DRAFT_MAX_THREADS = 100;

const DRAFT_PRICING = {
  usa: {
    cenomarUsd: 199,
    marriageUsd: 199,
    birthUsd: 199,
    aomUsd: 249,
    dhlUsd: 50,
    psaPairWeeks: '3 to 4 weeks'
  },
  general: {
    psaEApostilleJpy: 33000,
    nbiFromJpy: 39800,
    internationalMarriageFromJpy: 99800,
    spouseVisaFromJpy: 129800,
    electronicWeeks: '1 to 2 weeks'
  }
};

/** 15分ごとのエントリポイント */
function draftJob() {
  const query = 'in:anywhere from:web3forms.com ' + DRAFT_LOOKBACK;
  const threads = GmailApp.search(query, 0, DRAFT_MAX_THREADS);
  const props = PropertiesService.getScriptProperties();

  threads.sort(function (a, b) {
    return a.getLastMessageDate() - b.getLastMessageDate();
  });

  threads.forEach(function (searchThread) {
    const tid = searchThread.getId();
    const stateKey = DRAFT_STATE_PREFIX + tid;
    if (props.getProperty(stateKey)) return;

    var thread = null;
    try {
      thread = GmailApp.getThreadById(tid);
    } catch (e) {
      return;
    }
    if (!thread) return;

    const messages = thread.getMessages();
    if (!messages.length) return;

    const source = messages[0];
    const parsed = draftParseWeb3Form_(source.getPlainBody());
    const email = String(parsed.email || '').trim();

    if (!draftIsValidEmail_(email)) {
      props.setProperty(stateKey, 'skipped:invalid-email');
      return;
    }

    // すでに問い合わせ受信後にこの顧客へ送信済みなら、過去案件として処理済みにする。
    if (draftAlreadyReplied_(email, source.getDate())) {
      props.setProperty(stateKey, 'skipped:already-replied');
      return;
    }

    const reply = draftBuildReply_(parsed, source.getSubject() || '');
    if (!reply || !reply.body) return;

    const draft = GmailApp.createDraft(email, reply.subject, reply.body);
    props.setProperty(stateKey, 'draft:' + draft.getId());

    draftUpdateLedgerNextAction_(tid, 'ドラフト確認→送信');
    draftNotify_(
      '✍️ 問い合わせ返信ドラフト作成\n' +
      '👤 ' + (parsed.name || '(不明)') + '\n' +
      '✉️ ' + email + '\n' +
      '件名: ' + reply.subject
    );
  });
}

/** 初回のみ実行。既存の同名トリガーを消して15分間隔で作り直す */
function installDraftTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'draftJob') ScriptApp.deleteTrigger(t);
  });

  ScriptApp.newTrigger('draftJob')
    .timeBased()
    .everyMinutes(15)
    .create();

  return 'draftJob trigger installed: every 15 minutes';
}

/** 手動で特定スレッドを再生成可能にする */
function resetInquiryDraftMarker(threadId) {
  PropertiesService.getScriptProperties().deleteProperty(DRAFT_STATE_PREFIX + String(threadId || '').trim());
}

/** Web3Forms 本文を key/value として解析。表示ラベル形式にもある程度対応する */
function draftParseWeb3Form_(body) {
  const out = {};
  if (!body) return out;

  var lastKey = null;
  body.split(/\r?\n/).forEach(function (rawLine) {
    const line = String(rawLine || '').trim();
    if (!line) return;

    // key: value / key = value
    var m = line.match(/^([a-zA-Z_][a-zA-Z0-9_ ]{0,40})\s*[:=]\s*(.*)$/);
    if (m) {
      const key = draftNormalizeKey_(m[1]);
      out[key] = (out[key] ? out[key] + ' / ' : '') + m[2].trim();
      lastKey = key;
      return;
    }

    // Web3Forms のメール表示では「Name」改行「Tamara」のような形になる場合がある。
    const keyOnly = draftNormalizeKnownLabel_(line);
    if (keyOnly) {
      lastKey = keyOnly;
      if (!(keyOnly in out)) out[keyOnly] = '';
      return;
    }

    if (lastKey) {
      out[lastKey] = (out[lastKey] ? out[lastKey] + ' ' : '') + line;
    }
  });

  return out;
}

function draftNormalizeKey_(key) {
  return String(key || '')
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, '_');
}

function draftNormalizeKnownLabel_(line) {
  const map = {
    'cta variant': 'cta_variant',
    'traffic source': 'traffic_source',
    'landing page': 'landing_page',
    'name': 'name',
    'email': 'email',
    'country': 'country',
    'service': 'service',
    'referral source': 'referral_source',
    'referral source detail': 'referral_source_detail',
    'message': 'message',
    'purpose': 'purpose',
    'documents needed': 'documents_needed',
    'deadline': 'deadline'
  };
  return map[String(line || '').toLowerCase().trim()] || null;
}

function draftIsValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

/** 問い合わせ受信後に同じ顧客へ1通でも送信済みなら true */
function draftAlreadyReplied_(email, receivedAt) {
  const tz = Session.getScriptTimeZone() || 'Asia/Manila';
  const day = Utilities.formatDate(receivedAt, tz, 'yyyy/MM/dd');
  const q = 'in:sent to:' + email + ' after:' + day;
  const sentThreads = GmailApp.search(q, 0, 30);

  for (var i = 0; i < sentThreads.length; i++) {
    const msgs = sentThreads[i].getMessages();
    for (var j = 0; j < msgs.length; j++) {
      const m = msgs[j];
      if (m.getDate() < receivedAt) continue;
      const to = String(m.getTo() || '').toLowerCase();
      const cc = String(m.getCc() || '').toLowerCase();
      if (to.indexOf(email.toLowerCase()) !== -1 || cc.indexOf(email.toLowerCase()) !== -1) {
        return true;
      }
    }
  }
  return false;
}

function draftBuildReply_(p, sourceSubject) {
  const lang = draftDetectLanguage_(p, sourceSubject);
  const text = [
    p.service,
    p.message,
    p.purpose,
    p.documents_needed,
    p.referral_source_detail
  ].join(' ').toLowerCase();

  const f = {
    cenomar: /\bcenomar\b|独身証明|婚姻要件/.test(text),
    marriage: /marriage certificate|marriage cert|psa marriage|婚姻証明/.test(text),
    birth: /birth certificate|psa birth|出生証明/.test(text),
    aom: /advisory on marriages|\baom\b/.test(text),
    nbi: /\bnbi\b|police clearance|無犯罪/.test(text),
    apostille: /apostille|アポスティーユ|e-apostille/.test(text),
    spouseVisa: /spouse visa|配偶者ビザ/.test(text),
    marriageJapan: /marriage in japan|marry in japan|婚姻届|国際結婚/.test(text),
    usImmigration: /uscis|national visa center|\bnvc\b|u\.?s\.? embassy|u\.?s\.? consulate|immigration|spouse visa/.test(text)
  };

  if (lang === 'ja') return draftBuildJapaneseReply_(p, f);
  return draftBuildEnglishReply_(p, f);
}

function draftDetectLanguage_(p, subject) {
  const landing = String(p.landing_page || '').toLowerCase();
  const s = String(subject || '').toLowerCase();
  if (/\/ja\//.test(landing) || /- ja\b/.test(s)) return 'ja';
  if (/\/ko\//.test(landing) || /- ko\b/.test(s)) return 'en';
  return 'en';
}

function draftBuildEnglishReply_(p, f) {
  const name = draftEnglishName_(p.name);
  const country = String(p.country || p.submit_country || '').toUpperCase();
  const isUsa = /USA|UNITED STATES|US\b/.test(country);
  const g = DRAFT_PRICING.general;
  const u = DRAFT_PRICING.usa;
  const out = [];

  out.push('Dear ' + name + ',');
  out.push('');
  out.push('Thank you for contacting us.');
  out.push('');

  // Tamara 型: CENOMAR + Marriage Certificate
  if (f.cenomar && f.marriage) {
    out.push('Yes, we can assist with obtaining the requested Philippine documents.');
    out.push('');

    if (isUsa) {
      const total = u.cenomarUsd + u.marriageUsd + u.dhlUsd;
      out.push('Based on your request, the current estimated fees are:');
      out.push('');
      out.push('CENOMAR: US$' + u.cenomarUsd);
      out.push('PSA Marriage Certificate: US$' + u.marriageUsd);
      out.push('DHL shipping to the United States: approximately US$' + u.dhlUsd);
      out.push('Estimated total: US$' + total);
      out.push('');
      out.push('The estimated processing and delivery time is approximately ' + u.psaPairWeeks + '.');
      out.push('');
      out.push('However, there is one important point to confirm before proceeding. If the person is already married, a CENOMAR may not be the correct document because a CENOMAR is generally used when there is no marriage record registered with the PSA. In that situation, the document required may instead be an Advisory on Marriages (AOM).');
      out.push('');
      out.push('If you need a PSA Marriage Certificate and an AOM instead, the estimated fees would be:');
      out.push('');
      out.push('PSA Marriage Certificate: US$' + u.marriageUsd);
      out.push('Advisory on Marriages (AOM): US$' + u.aomUsd);
      out.push('DHL shipping to the United States: approximately US$' + u.dhlUsd);
      out.push('Estimated total: US$' + (u.marriageUsd + u.aomUsd + u.dhlUsd));
      out.push('');
      out.push('If the documents are for U.S. immigration or a spouse visa process, a PSA Birth Certificate may also be required depending on the receiving authority. If needed, the estimated fee for a PSA Birth Certificate is US$' + u.birthUsd + '.');
    } else {
      out.push('As a general estimate, PSA document acquisition with e-Apostille starts from JPY ' + draftMoney_(g.psaEApostilleJpy) + ' per document. Final pricing depends on the exact documents, whether paper originals are required, and the destination. Typical processing is approximately 1 to 4 weeks.');
      out.push('');
      out.push('Please note that if the person is already married, a CENOMAR may not be the correct document. An Advisory on Marriages (AOM) may be required instead.');
    }

    out.push('');
    out.push('Please let us know where the documents will be submitted, such as USCIS, the National Visa Center, an embassy or consulate, a civil registry office, or another authority. If you have a checklist, email, or screenshot showing the requested documents, please send it to us so we can confirm exactly what is required.');
    out.push('');
    out.push('Once the required documents are confirmed, we can send you the formal quotation and the next instructions, including a secure method for submitting the passport or ID if it is required.');
    out.push('');
    out.push('The amounts above are estimates and the final quotation will be confirmed after we review the details of your case.');
    out.push('');
    out.push('Kind regards,');
    out.push('');
    out.push('Toshiyuki Igarashi');
    out.push('IGRS Inc.');

    return { subject: 'Re: CENOMAR and Marriage Certificate', body: out.join('\n') };
  }

  // NBI
  if (f.nbi) {
    out.push('Yes, we can assist with NBI Clearance-related processing, including Apostille where required.');
    out.push('');
    out.push('As an initial estimate, the service starts from JPY ' + draftMoney_(g.nbiFromJpy) + '. The final fee depends on whether your current NBI Clearance can still be used, whether a new NBI Clearance must be obtained in the Philippines, whether Apostille is required, and whether international shipping is needed.');
    out.push('');
    out.push('The typical processing time is approximately 2 to 4 weeks, depending on the case and the destination country.');
    out.push('');
    out.push('Please reply with the country and authority where the document will be submitted, and if you already have an NBI Clearance, please tell us its issue date. A photo or screenshot of the document is also helpful for the initial review.');
    out.push('');
    out.push('After we confirm the correct procedure, we will send the formal quotation and, if necessary, a secure method for submitting your passport or ID.');
    out.push('');
    out.push('Kind regards,');
    out.push('');
    out.push('Toshiyuki Igarashi');
    out.push('IGRS Inc.');
    return { subject: 'Re: NBI Clearance and Apostille', body: out.join('\n') };
  }

  // 1通の PSA + e-Apostille
  if (f.apostille && (f.marriage || f.birth || f.cenomar || f.aom)) {
    const docName = f.marriage ? 'PSA Marriage Certificate' :
                    f.birth ? 'PSA Birth Certificate' :
                    f.cenomar ? 'CENOMAR' : 'Advisory on Marriages (AOM)';
    out.push('Yes, we can assist with obtaining the ' + docName + ' and its e-Apostille.');
    out.push('');
    out.push('For one document, the estimated fee starts from JPY ' + draftMoney_(g.psaEApostilleJpy) + '. Electronic processing is usually approximately ' + g.electronicWeeks + '. If you also need a paper original, international delivery will take additional time and shipping will be quoted separately.');
    out.push('');
    out.push('Please let us know the country and authority where the document will be submitted, and whether you need only the electronic document or also the paper original.');
    out.push('');
    out.push('Once confirmed, we will send the formal quotation and the next instructions. If ID is required, we will provide a secure way to submit it.');
    out.push('');
    out.push('Kind regards,');
    out.push('');
    out.push('Toshiyuki Igarashi');
    out.push('IGRS Inc.');
    return { subject: 'Re: ' + docName + ' Apostille', body: out.join('\n') };
  }

  // USA 単品 PSA
  if (isUsa && (f.cenomar || f.marriage || f.birth || f.aom)) {
    var labels = [];
    var totalUsd = 0;
    if (f.cenomar) { labels.push('CENOMAR: US$' + u.cenomarUsd); totalUsd += u.cenomarUsd; }
    if (f.marriage) { labels.push('PSA Marriage Certificate: US$' + u.marriageUsd); totalUsd += u.marriageUsd; }
    if (f.birth) { labels.push('PSA Birth Certificate: US$' + u.birthUsd); totalUsd += u.birthUsd; }
    if (f.aom) { labels.push('Advisory on Marriages (AOM): US$' + u.aomUsd); totalUsd += u.aomUsd; }

    out.push('Yes, we can assist with the requested PSA document.');
    out.push('');
    out.push('Current estimated fee:');
    out.push('');
    labels.forEach(function (x) { out.push(x); });
    out.push('DHL shipping to the United States, if a paper original is required: approximately US$' + u.dhlUsd);
    out.push('');
    out.push('The estimated processing and delivery time is generally around 3 to 4 weeks.');
    out.push('');
    out.push('Please let us know where the document will be submitted and, if available, send us the checklist, email, or screenshot showing the exact document requested.');
    out.push('');
    out.push('After reviewing it, we will confirm the formal quotation and send the next instructions, including a secure method for submitting ID if required.');
    out.push('');
    out.push('Kind regards,');
    out.push('');
    out.push('Toshiyuki Igarashi');
    out.push('IGRS Inc.');
    return { subject: 'Re: Philippine PSA Document Request', body: out.join('\n') };
  }

  if (f.spouseVisa) {
    out.push('Yes, we can assist with preparation of Philippine documents for a spouse visa application.');
    out.push('');
    out.push('As an initial estimate, spouse visa document preparation starts from JPY ' + draftMoney_(g.spouseVisaFromJpy) + '. The final quotation and processing period depend on the applicant, the documents already available, and the receiving immigration authority.');
    out.push('');
    out.push('Please tell us the country where the spouse visa will be filed and, if you have a document checklist from immigration, send us a copy or screenshot.');
    out.push('');
    out.push('We will review it first and then confirm the exact documents, fee, estimated processing time, and next steps.');
    out.push('');
    out.push('Kind regards,');
    out.push('');
    out.push('Toshiyuki Igarashi');
    out.push('IGRS Inc.');
    return { subject: 'Re: Spouse Visa Document Assistance', body: out.join('\n') };
  }

  // 不明案件の安全なフォールバック
  out.push('We may be able to assist with your request.');
  out.push('');
  out.push('As a general reference, PSA document acquisition with e-Apostille typically starts from JPY ' + draftMoney_(g.psaEApostilleJpy) + ' per document, with processing commonly taking approximately 1 to 4 weeks depending on the document and destination.');
  out.push('');
  out.push('Please reply with the exact document you need, the country and authority where it will be submitted, and your preferred deadline. If you have a checklist, email, or screenshot from the receiving authority, please send it to us.');
  out.push('');
  out.push('Once we review those details, we will confirm the exact procedure, formal quotation, estimated processing time, and next action. If identification documents are required, we will provide a secure way to submit them.');
  out.push('');
  out.push('Kind regards,');
  out.push('');
  out.push('Toshiyuki Igarashi');
  out.push('IGRS Inc.');

  return { subject: 'Re: Your inquiry about Philippine documents', body: out.join('\n') };
}

function draftBuildJapaneseReply_(p, f) {
  const name = String(p.name || 'お客様').trim();
  const g = DRAFT_PRICING.general;
  const out = [];

  out.push(name + ' 様');
  out.push('');
  out.push('お問い合わせありがとうございます。');
  out.push('');

  if (f.nbi) {
    out.push('NBI Clearanceの取得やApostille手続きについて対応可能です。');
    out.push('');
    out.push('費用の目安は39,800円からとなります。現在お持ちのNBI Clearanceを使用できるか、新しく取得する必要があるか、Apostilleや国際発送が必要かによって正式な金額が変わります。');
    out.push('');
    out.push('納期の目安は通常2週間から4週間程度です。');
    out.push('');
    out.push('まず、提出先の国と機関名、現在NBI Clearanceをお持ちの場合は発行日を教えてください。書類の写真やスクリーンショットがあれば、あわせて確認可能です。');
    out.push('');
    out.push('内容確認後、正式なお見積りと次の手順をご案内します。パスポート等の本人確認書類が必要な場合は、安全に提出できる方法をご案内します。');
  } else if (f.apostille && (f.marriage || f.birth || f.cenomar || f.aom)) {
    const doc = f.marriage ? 'PSA婚姻証明書' : f.birth ? 'PSA出生証明書' : f.cenomar ? 'CENOMAR' : 'AOM';
    out.push(doc + 'の取得およびe-Apostilleまで対応可能です。');
    out.push('');
    out.push('1書類あたりの費用目安は33,000円です。電子書類であれば納期は通常1週間から2週間程度です。紙原本が必要な場合は国際発送の日数と送料が別途かかります。');
    out.push('');
    out.push('提出先の国と機関名、電子書類のみでよいか紙原本も必要かを教えてください。');
    out.push('');
    out.push('確認後、正式なお見積りと次の手順をご案内します。本人確認書類が必要な場合は、安全に提出できる方法をご案内します。');
  } else if (f.marriageJapan) {
    out.push('日本での国際結婚に必要なフィリピン書類の準備をお手伝いできます。');
    out.push('');
    out.push('国際結婚書類一式のサポートは99,800円からが目安です。必要書類や納期は、婚姻届を提出する市区町村と現在お持ちの書類によって変わります。');
    out.push('');
    out.push('まず、婚姻届を提出予定の市区町村と、現在お持ちの出生証明書やCENOMARにApostilleが付いているかを教えてください。');
    out.push('');
    out.push('確認後、必要書類を整理して正式なお見積りと納期をご案内します。');
  } else if (f.spouseVisa) {
    out.push('配偶者ビザ申請に必要なフィリピン書類の準備をお手伝いできます。');
    out.push('');
    out.push('費用の目安は129,800円からです。必要書類や難易度によって正式なお見積りと納期が変わります。');
    out.push('');
    out.push('まず、申請する国と提出先、現在お持ちの書類を教えてください。提出先からのチェックリストがあれば、写真やスクリーンショットでも構いません。');
    out.push('');
    out.push('確認後、必要書類、正式なお見積り、納期、次の手順をご案内します。');
  } else if (f.cenomar && f.marriage) {
    out.push('CENOMARとPSA婚姻証明書の取得について対応可能です。');
    out.push('');
    out.push('ただし、すでに結婚されている方の場合、CENOMARではなくAOMが必要になる可能性があります。CENOMARは原則としてPSAに婚姻記録がない場合の証明書で、婚姻証明書とは内容が相反することがあるためです。');
    out.push('');
    out.push('PSA書類の取得とe-Apostilleは、1書類33,000円程度からが目安です。納期は通常1週間から4週間程度で、紙原本が必要な場合は国際発送の日数が追加されます。');
    out.push('');
    out.push('まず、提出先の国と機関名を教えてください。必要書類が書かれた案内、メール、チェックリストなどがあれば、写真やスクリーンショットをお送りください。');
    out.push('');
    out.push('内容を確認して、不要な書類を取得しないよう必要書類を整理した上で、正式なお見積りと次の手順をご案内します。');
  } else {
    out.push('ご相談内容に応じて、フィリピン書類の取得やe-Apostille手続きをお手伝いできます。');
    out.push('');
    out.push('一般的な目安として、PSA書類の取得とe-Apostilleは1書類33,000円程度から、納期は通常1週間から4週間程度です。書類の種類や提出先によって変わります。');
    out.push('');
    out.push('必要な書類名、提出先の国と機関名、ご希望の期限を教えてください。提出先からの案内やチェックリストがあれば、写真やスクリーンショットでも構いません。');
    out.push('');
    out.push('確認後、正式なお見積り、納期、次の手順をご案内します。本人確認書類が必要な場合は、安全に提出できる方法をご案内します。');
  }

  out.push('');
  out.push('上記金額と納期は現時点での目安となり、詳細確認後に正式なお見積りをご案内いたします。');
  out.push('');
  out.push('よろしくお願いいたします。');
  out.push('');
  out.push('五十嵐');
  out.push('IGRS Inc.');

  return { subject: 'フィリピン書類取得について', body: out.join('\n') };
}

function draftEnglishName_(name) {
  const n = String(name || '').trim();
  return n || 'Sir or Madam';
}

function draftMoney_(n) {
  return String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** 既存の案件台帳が同じ Apps Script プロジェクトにある場合だけ次アクションを更新 */
function draftUpdateLedgerNextAction_(threadId, text) {
  try {
    if (typeof getSpreadsheet_ !== 'function') return;
    const ss = getSpreadsheet_();
    const sh = ss.getSheetByName('案件台帳');
    if (!sh) return;

    const lastRow = sh.getLastRow();
    if (lastRow < 5) return;
    const tids = sh.getRange(5, 12, lastRow - 4, 1).getValues();
    for (var i = 0; i < tids.length; i++) {
      if (String(tids[i][0] || '').trim() === String(threadId || '').trim()) {
        sh.getRange(5 + i, 15).setValue(text);
        return;
      }
    }
  } catch (e) {
    // 台帳更新に失敗しても下書き作成自体は成功扱いにする。
  }
}

function draftNotify_(text) {
  try {
    if (typeof notifyTelegram === 'function') notifyTelegram(text);
  } catch (e) {
    // 通知失敗はドラフト作成を止めない。
  }
}
