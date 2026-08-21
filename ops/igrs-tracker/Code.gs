/**
 * IGRS Inquiry Tracker v2
 * ---------------------------------------------------------------
 * 目的:
 *   1. web3forms の問い合わせ通知を受信時に検知し、案件台帳へ追記 + Telegram 通知
 *   2. 進行中案件を巡回し、「相手ボールでない未返信」を検出して再通知
 *   3. 毎朝、自分ボール / 相手ボール に分けた日次サマリーを送信
 *
 * v1 からの変更点（v1 は既存台帳では動作しない）:
 *   - v1 は「ヘッダ1行目・データ2行目・独自16列」を前提にしていたが、
 *     実際の IGRS_売上台帳.xlsx は「ヘッダ4行目・データ5行目・11列」。
 *     列がすべてずれ、以下が無言で壊れていた:
 *       * 列A を threadId として読む → 実際は案件ID(C001) → 全既存案件が巡回対象外
 *       * ステータスを列K(備考)から読む → 完了案件にも未返信通知が鳴り続ける
 *       * 見積を列J(ステータス文字列)から読む → パイプライン合計が常に 0 円
 *   - 実台帳のレイアウトに合わせ、自動化用の列は L〜Q に「追加」する方式へ変更
 *     （A〜K は人間が編集する列。集計シートが参照しているため触らない）
 *   - 集計・ダッシュボードの参照範囲が $5:$28 の24行固定＝既存24件で満杯だったため、
 *     setupLedger() で LEDGER_CAPACITY 件まで拡張する
 *   - 見積の円換算に「入金記録」シートの為替レート表を使用（通貨列が USD/PHP 等のため）
 *   - Gmail API の消費を抑えるため ingest(15分) と audit(2時間) のトリガーを分離
 *
 * 設計方針（v1 から継続）:
 *   - Gmail 検索は必ず in:anywhere（スパム/ゴミ箱に振られても取りこぼさない）
 *   - スレッド本文の最新状態は必ず getThreadById で取り直す（検索結果を信用しない）
 *   - 未返信判定は「顧客アドレス宛の送信有無」で行う
 *     （返信を元スレッドではなく新規スレッドで立てる運用のため）
 * ---------------------------------------------------------------
 */

// ====== シート名 ======
const SHEET_CASES    = '案件台帳';
const SHEET_PAYMENTS = '入金記録';
const SHEET_SUMMARY  = '集計';
const SHEET_DASH     = 'ダッシュボード';

// ====== 案件台帳のレイアウト ======
const CASES_HEADER_ROW = 4;   // ヘッダ行（1-3行はタイトル・注記・空行）
const CASES_FIRST_ROW  = 5;   // データ開始行

// 列番号（1始まり）。A〜K は既存＝人間が編集する列。L〜Q が自動化用の追加列。
const C_ID          = 1;   // A 案件ID
const C_DATE        = 2;   // B 受注/問合せ日
const C_NAME        = 3;   // C 顧客名
const C_CONTACT     = 4;   // D 連絡先
const C_ROUTE       = 5;   // E 経路
const C_LP          = 6;   // F LP/国
const C_CONTENT     = 7;   // G 内容
const C_AMOUNT      = 8;   // H 見積額
const C_CURRENCY    = 9;   // I 通貨
const C_STATUS      = 10;  // J ステータス
const C_NOTE        = 11;  // K 備考
const C_THREAD      = 12;  // L threadId       ← 追加
const C_UPDATED     = 13;  // M 最終更新       ← 追加
const C_LASTSPEAKER = 14;  // N 最終発言者     ← 追加
const C_NEXT        = 15;  // O 次アクション   ← 追加
const C_NOTIFIED    = 16;  // P 最終通知       ← 追加
const C_SEARCHKEY   = 17;  // Q 検索キー       ← 追加
const CASES_LAST_COL = C_SEARCHKEY;

/** setupLedger() が追加する列のヘッダ */
const AUTOMATION_HEADERS = [
  [C_THREAD,      'threadId'],
  [C_UPDATED,     '最終更新'],
  [C_LASTSPEAKER, '最終発言者'],
  [C_NEXT,        '次アクション'],
  [C_NOTIFIED,    '最終通知'],
  [C_SEARCHKEY,   '検索キー']
];

// ====== 入金記録のレイアウト ======
const FX_FIRST_ROW = 6;    // 為替レート表 A6:B10（USD/EUR/PHP/GBP/KRW）
const FX_LAST_ROW  = 10;

// ====== 集計・ダッシュボードのレイアウト ======
const SUMMARY_FIRST_ROW = 5;
const DASH_BREAKDOWN_FIRST_ROW = 22;  // ①確定売上の内訳ブロック先頭（集計!5 に対応）
const DASH_AGGREGATE_CELLS = ['B5', 'C5', 'B6', 'C6', 'B7', 'C7'];

/**
 * 台帳の想定最大件数。集計・ダッシュボードの参照範囲をここまで拡張する。
 * 既定 200 件（月10件ペースで約20ヶ月分）。足りなくなったら数値を上げて
 * setupLedger() を再実行すれば、不足分だけ追加される。
 */
const LEDGER_CAPACITY = 200;
const LEDGER_LAST_ROW = CASES_FIRST_ROW + LEDGER_CAPACITY - 1;  // = 204

// ====== 動作設定 ======
const LOOKBACK_INGEST      = 'newer_than:14d';  // 新規取り込みの走査範囲
const NUDGE_AFTER_HOURS    = 20;                // 未返信を警告するまでの時間
const NUDGE_INTERVAL_HOURS = 24;                // 同一案件の再通知間隔
const CLOSED_STATUSES      = ['完了', '失注', '辞退', '保留'];
const MAX_AUDIT_PER_RUN    = 40;                // 1回の巡回で Gmail 検索する上限
const TELEGRAM_CHUNK       = 3800;              // Telegram の1メッセージ上限(4096)の安全値

// ====== エントリポイント ======

/** 15分ごとのトリガー：新規問い合わせの取り込みのみ */
function ingestJob() {
  try {
    ingestNewInquiries();
  } catch (e) {
    notifyTelegram('⚠️ ingest エラー: ' + e.message);
  }
}

/** 2時間ごとのトリガー：進行中案件の巡回 */
function auditJob() {
  try {
    auditOpenCases();
  } catch (e) {
    notifyTelegram('⚠️ audit エラー: ' + e.message);
  }
}

/** 手動実行用（ingest と audit を続けて回す） */
function main() {
  ingestJob();
  auditJob();
}

// ====== 0. 初期セットアップ（初回のみ手動実行） ======

/**
 * 既存の売上台帳に対して、自動化に必要な準備を行う。
 * 何度実行しても安全（不足している分だけ追加する）。
 *
 *   1. 案件台帳に L〜Q（threadId・最終更新・最終発言者・次アクション・最終通知・検索キー）を追加
 *   2. 既存行の検索キー数式を補充
 *   3. 集計シートの数式を LEDGER_LAST_ROW 行まで延長
 *   4. ダッシュボードの集計参照範囲を LEDGER_LAST_ROW まで拡張
 */
function setupLedger() {
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(SHEET_CASES);
  if (!sh) throw new Error('シート「' + SHEET_CASES + '」が見つかりません');

  const headerA = String(sh.getRange(CASES_HEADER_ROW, C_ID).getValue()).trim();
  if (headerA !== '案件ID') {
    throw new Error(
      '案件台帳の ' + CASES_HEADER_ROW + '行目A列が「案件ID」ではありません（実際: "' + headerA + '"）。' +
      'xlsx をそのままインポートできているか確認してください。'
    );
  }

  // 1. 自動化列のヘッダを追加
  AUTOMATION_HEADERS.forEach(function (pair) {
    const col = pair[0];
    const label = pair[1];
    const cell = sh.getRange(CASES_HEADER_ROW, col);
    if (String(cell.getValue()).trim() !== label) {
      cell.setValue(label);
    }
  });
  sh.getRange(CASES_HEADER_ROW, C_THREAD, 1, CASES_LAST_COL - C_THREAD + 1)
    .setFontWeight('bold')
    .setBackground('#efefef');

  // 2. 既存行の検索キーを補充
  const lastRow = getLastCaseRow_(sh);
  for (var r = CASES_FIRST_ROW; r <= lastRow; r++) {
    const cell = sh.getRange(r, C_SEARCHKEY);
    if (!String(cell.getFormula()).trim()) {
      cell.setFormula(searchKeyFormula_(r));
    }
  }

  const added = extendSummary_(ss);
  extendDashboard_(ss);

  const msg = 'セットアップ完了 / 既存案件 ' + (lastRow - CASES_FIRST_ROW + 1) + '件 / ' +
              '集計を ' + added + '行 追加拡張（最大 ' + LEDGER_CAPACITY + '件）';
  Logger.log(msg);
  return msg;
}

/** 集計シートの数式を LEDGER_LAST_ROW まで延長する。追加した行数を返す */
function extendSummary_(ss) {
  const sh = ss.getSheetByName(SHEET_SUMMARY);
  if (!sh) throw new Error('シート「' + SHEET_SUMMARY + '」が見つかりません');

  if (sh.getMaxRows() < LEDGER_LAST_ROW) {
    sh.insertRowsAfter(sh.getMaxRows(), LEDGER_LAST_ROW - sh.getMaxRows());
  }

  // 数式が入っている最終行を探す（A列に数式があるか）
  var firstEmpty = SUMMARY_FIRST_ROW;
  const formulas = sh.getRange(SUMMARY_FIRST_ROW, C_ID, LEDGER_LAST_ROW - SUMMARY_FIRST_ROW + 1, 1)
                     .getFormulas();
  for (var i = 0; i < formulas.length; i++) {
    if (String(formulas[i][0]).trim()) firstEmpty = SUMMARY_FIRST_ROW + i + 1;
  }
  if (firstEmpty > LEDGER_LAST_ROW) return 0;

  const rows = [];
  for (var r = firstEmpty; r <= LEDGER_LAST_ROW; r++) {
    rows.push(summaryRowFormulas_(r));
  }
  sh.getRange(firstEmpty, 1, rows.length, 8).setFormulas(rows);
  return rows.length;
}

/** 集計シート 1行分の数式（既存 row5 の定義をそのまま踏襲） */
function summaryRowFormulas_(r) {
  return [
    '=案件台帳!$A$' + r,
    '=案件台帳!$C$' + r,
    '=案件台帳!$J$' + r,
    '=IF(案件台帳!$H$' + r + '="","",案件台帳!$H$' + r + ')',
    '=案件台帳!$I$' + r,
    '=IF(案件台帳!$H$' + r + '="","",IF(案件台帳!$I$' + r + '="JPY",案件台帳!$H$' + r +
      ',案件台帳!$H$' + r + '*IFERROR(INDEX(入金記録!$B$6:$B$10,MATCH(案件台帳!$I$' + r +
      ',入金記録!$A$6:$A$10,0)),0)))',
    '=SUMIFS(入金記録!$I$14:$I$213,入金記録!$B$14:$B$213,$A' + r + ')',
    '=IF($F' + r + '="","",$F' + r + '-$G' + r + ')'
  ];
}

/** ダッシュボードの集計参照を LEDGER_LAST_ROW まで広げる */
function extendDashboard_(ss) {
  const sh = ss.getSheetByName(SHEET_DASH);
  if (!sh) return;  // ダッシュボードは必須ではない

  // 区分別の集計セル: 集計!$X$5:$X$28 → 集計!$X$5:$X$204
  DASH_AGGREGATE_CELLS.forEach(function (a1) {
    const cell = sh.getRange(a1);
    const f = cell.getFormula();
    if (!f) return;
    const widened = f.replace(/(集計!\$[A-Z]+\$\d+:\$[A-Z]+\$)(\d+)/g, function (m, head, tail) {
      return Number(tail) < LEDGER_LAST_ROW ? head + LEDGER_LAST_ROW : m;
    });
    if (widened !== f) cell.setFormula(widened);
  });

  // ①確定売上の内訳ブロックを LEDGER_CAPACITY 行ぶんに延長
  const lastBreakdownRow = DASH_BREAKDOWN_FIRST_ROW + LEDGER_CAPACITY - 1;
  if (sh.getMaxRows() < lastBreakdownRow) {
    sh.insertRowsAfter(sh.getMaxRows(), lastBreakdownRow - sh.getMaxRows());
  }
  const rows = [];
  for (var i = 0; i < LEDGER_CAPACITY; i++) {
    const s = SUMMARY_FIRST_ROW + i;  // 対応する集計シートの行
    rows.push([
      '=IF(集計!$G$' + s + '>0,集計!$B$' + s + ',"")',
      '=IF(集計!$G$' + s + '>0,集計!$G$' + s + ',"")',
      '=IF(集計!$G$' + s + '>0,集計!$C$' + s + ',"")'
    ]);
  }
  sh.getRange(DASH_BREAKDOWN_FIRST_ROW, 1, rows.length, 3).setFormulas(rows);
}

function searchKeyFormula_(r) {
  // 案件ID・顧客名・連絡先・内容・備考を連結し、Ctrl+F での部分一致検索を可能にする。
  // 別名（例:「しい・まり」＝エコ・シェーン様）は備考に併記しておくとここで拾える。
  return '=$A' + r + '&" "&$C' + r + '&" "&$D' + r + '&" "&$G' + r + '&" "&$K' + r;
}

// ====== 1. 新規問い合わせの取り込み ======

function ingestNewInquiries() {
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(SHEET_CASES);
  if (!sh) throw new Error('シート「' + SHEET_CASES + '」が見つかりません');

  const known = getKnownThreadIds_(sh);

  // in:anywhere が肝。スパム/ゴミ箱に振り分けられても拾う
  const query = 'in:anywhere from:web3forms.com ' + LOOKBACK_INGEST;
  const threads = GmailApp.search(query, 0, 100);

  // 古い順に処理して、案件IDが受信順に振られるようにする
  threads.sort(function (a, b) {
    return a.getLastMessageDate() - b.getLastMessageDate();
  });

  var nextId = getNextCaseId_(sh);

  threads.forEach(function (t) {
    const tid = t.getId();
    if (known[tid]) return;

    // 検索結果の中身は信用せず、必ずスレッドを取り直す
    const thread = GmailApp.getThreadById(tid);
    if (!thread) return;

    const msg = thread.getMessages()[0];
    const parsed = parseWeb3Form_(msg.getPlainBody());
    const subject = msg.getSubject() || '';

    const caseId = formatCaseId_(nextId);
    nextId++;

    const row = new Array(CASES_LAST_COL).fill('');
    row[C_ID - 1]          = caseId;
    row[C_DATE - 1]        = formatDate_(msg.getDate());
    row[C_NAME - 1]        = parsed.name || '(不明)';
    row[C_CONTACT - 1]     = parsed.email || '';
    row[C_ROUTE - 1]       = 'フォーム';
    row[C_LP - 1]          = detectLp_(subject, parsed.landing_page) + '/' + (parsed.submit_country || '不明');
    row[C_CONTENT - 1]     = buildContent_(parsed);
    row[C_AMOUNT - 1]      = '';        // 見積は手入力
    row[C_CURRENCY - 1]    = 'JPY';
    row[C_STATUS - 1]      = '新規';
    row[C_NOTE - 1]        = buildNote_(parsed);
    row[C_THREAD - 1]      = tid;
    row[C_UPDATED - 1]     = formatDate_(msg.getDate());
    row[C_LASTSPEAKER - 1] = '相手';
    row[C_NEXT - 1]        = '一次返信';
    row[C_NOTIFIED - 1]    = '';
    row[C_SEARCHKEY - 1]   = '';        // 追記後に数式を入れる

    sh.appendRow(row);
    const newRow = sh.getLastRow();
    sh.getRange(newRow, C_SEARCHKEY).setFormula(searchKeyFormula_(newRow));
    known[tid] = true;

    if (newRow > LEDGER_LAST_ROW) {
      notifyTelegram(
        '⚠️ 台帳が想定容量（' + LEDGER_CAPACITY + '件）を超えました。\n' +
        'Code.gs の LEDGER_CAPACITY を上げて setupLedger() を再実行してください。\n' +
        'それまで集計・ダッシュボードに新規案件が反映されません。'
      );
    }

    notifyTelegram(
      '🆕 新規問い合わせ ' + caseId + '\n' +
      '━━━━━━━━━━━━\n' +
      '👤 ' + row[C_NAME - 1] + '\n' +
      '🌐 ' + row[C_LP - 1] + '\n' +
      '📌 ' + (parsed.purpose || '(用途未記入)') + '\n' +
      '📄 ' + (parsed.documents_needed || '(書類未記入)') + '\n' +
      '⏳ ' + (parsed.deadline || '(期限未記入)') + '\n' +
      '✉️ ' + row[C_CONTACT - 1] + '\n' +
      (parsed.referral_source ? '🔎 流入: ' + parsed.referral_source + '\n' : '') +
      (parsed.message ? '\n' + truncate_(parsed.message, 400) + '\n' : '') +
      '━━━━━━━━━━━━\n' +
      threadUrl_(tid)
    );
  });
}

/** web3forms の "key : value" 形式本文をパース */
function parseWeb3Form_(body) {
  const out = {};
  if (!body) return out;
  var lastKey = null;
  body.split(/\r?\n/).forEach(function (line) {
    const m = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.*)$/);
    if (m) {
      const key = m[1].toLowerCase();
      out[key] = (out[key] ? out[key] + ' / ' : '') + m[2].trim();
      lastKey = key;
    } else if (line.trim() && lastKey) {
      // 複数行に渡る値の追従（message 等）
      out[lastKey] += ' ' + line.trim();
    }
  });
  return out;
}

/** 台帳「内容」列に入れる文字列（用途＋必要書類） */
function buildContent_(parsed) {
  const parts = [];
  if (parsed.purpose) parts.push(parsed.purpose);
  if (parsed.documents_needed) parts.push(parsed.documents_needed);
  if (parsed.deadline) parts.push('期限:' + parsed.deadline);
  return parts.join(' / ') || '(フォーム記入内容を要確認)';
}

/**
 * 台帳「備考」列に入れる文字列。
 * referral_source / traffic_source は流入経路の一次データなので必ず残す
 * （AI経由の初記録もこの項目から判明した）。
 */
function buildNote_(parsed) {
  const parts = [];
  if (parsed.referral_source) parts.push('流入元:' + parsed.referral_source);
  if (parsed.traffic_source)  parts.push('traffic:' + parsed.traffic_source);
  if (parsed.landing_page)    parts.push('LP:' + parsed.landing_page);
  if (parsed.message)         parts.push(truncate_(parsed.message, 400));
  return parts.join(' / ');
}

function detectLp_(subject, landingPage) {
  const s = (subject || '') + ' ' + (landingPage || '');
  if (/\/ko\/|한국어/.test(s)) return 'KO';
  if (/\/en\/|- EN/.test(s)) return 'EN';
  return 'JA';
}

/** 既存の案件ID(C001形式)の最大値+1 を返す */
function getNextCaseId_(sh) {
  const lastRow = getLastCaseRow_(sh);
  if (lastRow < CASES_FIRST_ROW) return 1;
  const ids = sh.getRange(CASES_FIRST_ROW, C_ID, lastRow - CASES_FIRST_ROW + 1, 1).getValues();
  var max = 0;
  ids.forEach(function (r) {
    const m = String(r[0] || '').trim().match(/^C(\d+)$/i);
    if (m) max = Math.max(max, Number(m[1]));
  });
  return max + 1;
}

function formatCaseId_(n) {
  return 'C' + ('000' + n).slice(-3);
}

// ====== 2. 進行中案件の巡回 ======

function auditOpenCases() {
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(SHEET_CASES);
  if (!sh) throw new Error('シート「' + SHEET_CASES + '」が見つかりません');

  const lastRow = getLastCaseRow_(sh);
  if (lastRow < CASES_FIRST_ROW) return;

  const height = lastRow - CASES_FIRST_ROW + 1;
  const data = sh.getRange(CASES_FIRST_ROW, 1, height, CASES_LAST_COL).getValues();

  // 自動更新する列（M:最終更新 / N:最終発言者）は読み込んでから一括で書き戻す
  const stateBlock = sh.getRange(CASES_FIRST_ROW, C_UPDATED, height, 2).getValues();
  const notifiedBlock = sh.getRange(CASES_FIRST_ROW, C_NOTIFIED, height, 1).getValues();

  const now = new Date();
  const alerts = [];
  var checked = 0;
  var stateDirty = false;
  var notifiedDirty = false;

  for (var i = 0; i < data.length; i++) {
    const row = data[i];
    const rowNum = CASES_FIRST_ROW + i;
    const caseId = String(row[C_ID - 1] || '').trim();
    const status = String(row[C_STATUS - 1] || '').trim();

    if (!caseId) continue;
    if (CLOSED_STATUSES.indexOf(status) !== -1) continue;
    if (checked >= MAX_AUDIT_PER_RUN) break;

    const email = String(row[C_CONTACT - 1] || '').trim();
    const tid   = String(row[C_THREAD - 1] || '').trim();

    // メールも threadId も無い行（LINE/WhatsApp 案件）は自動判定できない。
    // 台帳を汚さず静かにスキップする（手動運用のまま）。
    if (!email && !tid) continue;

    var lastDate = null;
    if (tid) {
      // 検索結果ではなく実スレッドを取得（ここを省くと古い状態を見る）
      var thread = null;
      try {
        thread = GmailApp.getThreadById(tid);
      } catch (e) {
        thread = null;
      }
      if (thread) {
        const msgs = thread.getMessages();
        lastDate = msgs[msgs.length - 1].getDate();
      }
    }
    if (!lastDate) {
      // threadId が無い/失効している場合は、台帳の受信日を起点にする
      const d = parseDate_(row[C_DATE - 1]);
      if (!d) continue;
      lastDate = d;
    }

    // ── 重要 ──
    // 返信を元スレッドではなく新規スレッドで送る運用のため、
    // 「スレッドの最終発言者」では判定できない。
    // 顧客のメールアドレス宛に、問い合わせ日以降の送信があるかで判定する。
    var replied = false;
    var replyDate = null;

    if (email) {
      checked++;
      const sent = GmailApp.search('in:anywhere to:' + email + ' from:me', 0, 20);
      sent.forEach(function (st) {
        st.getMessages().forEach(function (m) {
          if (!isFromMe_(m.getFrom())) return;
          if (m.getDate() >= lastDate) {
            replied = true;
            if (!replyDate || m.getDate() > replyDate) replyDate = m.getDate();
          }
        });
      });
    }

    const effective = replyDate || lastDate;
    const hours = (now - effective) / 36e5;

    // 台帳の状態を実態に同期（書き込みは最後に一括）
    const newUpdated = formatDate_(effective);
    const newSpeaker = replied ? '自分' : '相手';
    if (stateBlock[i][0] !== newUpdated || stateBlock[i][1] !== newSpeaker) {
      stateBlock[i][0] = newUpdated;
      stateBlock[i][1] = newSpeaker;
      stateDirty = true;
    }

    if (replied) continue;                   // 返信済み = 相手ボール
    if (hours < NUDGE_AFTER_HOURS) continue; // まだ猶予内

    // 再通知の間隔制御
    const lastNudge = parseDate_(notifiedBlock[i][0]);
    if (lastNudge && (now - lastNudge) / 36e5 < NUDGE_INTERVAL_HOURS) continue;

    alerts.push({
      id: caseId,
      name: row[C_NAME - 1],
      lp: row[C_LP - 1],
      action: row[C_NEXT - 1] || '要返信',
      hours: Math.floor(hours),
      tid: tid
    });
    notifiedBlock[i][0] = formatDate_(now);
    notifiedDirty = true;
  }

  if (stateDirty) {
    sh.getRange(CASES_FIRST_ROW, C_UPDATED, height, 2).setValues(stateBlock);
  }
  if (notifiedDirty) {
    sh.getRange(CASES_FIRST_ROW, C_NOTIFIED, height, 1).setValues(notifiedBlock);
  }

  if (!alerts.length) return;

  var text = '🔴 未返信 ' + alerts.length + '件\n━━━━━━━━━━━━\n';
  alerts.forEach(function (a) {
    text += '\n👤 ' + a.name + '（' + a.id + ' / ' + a.lp + '）\n' +
            '   ' + a.hours + '時間経過 / ' + a.action + '\n' +
            (a.tid ? '   ' + threadUrl_(a.tid) + '\n' : '');
  });
  notifyTelegram(text);
}

/**
 * 自分の送信かどうか。エイリアスも含めて判定。
 *
 * 注: Session.getActiveUser().getEmail() はトリガー実行時に空を返すことがあるため、
 * スクリプトプロパティ OWNER_EMAILS（カンマ区切り）でも補えるようにしている。
 */
var _myAddrCache = null;
function isFromMe_(fromHeader) {
  if (!_myAddrCache) {
    var list = [];
    try {
      const active = Session.getActiveUser().getEmail();
      if (active) list.push(active.toLowerCase());
    } catch (e) { /* 権限コンテキストによっては取得できない */ }
    try {
      list = list.concat(GmailApp.getAliases().map(function (a) { return a.toLowerCase(); }));
    } catch (e) { /* noop */ }
    const extra = PropertiesService.getScriptProperties().getProperty('OWNER_EMAILS');
    if (extra) {
      extra.split(',').forEach(function (a) {
        if (a.trim()) list.push(a.trim().toLowerCase());
      });
    }
    _myAddrCache = list;
  }
  const addr = extractEmail_(fromHeader).toLowerCase();
  return _myAddrCache.indexOf(addr) !== -1;
}

function extractEmail_(s) {
  const m = String(s || '').match(/<([^>]+)>/);
  return m ? m[1] : String(s || '').trim();
}

// ====== 3. 既存案件の threadId 補完 ======

/**
 * 台帳に連絡先(email)はあるが threadId が空の行について、
 * その相手とのスレッドを探して埋める。初期投入後に一度実行する。
 */
function backfillThreadIds() {
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(SHEET_CASES);
  const lastRow = getLastCaseRow_(sh);
  if (lastRow < CASES_FIRST_ROW) return;

  const height = lastRow - CASES_FIRST_ROW + 1;
  const emails  = sh.getRange(CASES_FIRST_ROW, C_CONTACT, height, 1).getValues();
  const threads = sh.getRange(CASES_FIRST_ROW, C_THREAD, height, 1).getValues();
  var filled = 0;
  var skipped = 0;

  for (var i = 0; i < height; i++) {
    if (String(threads[i][0] || '').trim()) continue;
    const email = String(emails[i][0] || '').trim();
    if (!email) { skipped++; continue; }

    const found = GmailApp.search('in:anywhere ' + email, 0, 5);
    if (!found.length) { skipped++; continue; }

    var newest = found[0];
    found.forEach(function (t) {
      if (t.getLastMessageDate() > newest.getLastMessageDate()) newest = t;
    });
    threads[i][0] = newest.getId();
    filled++;
  }

  sh.getRange(CASES_FIRST_ROW, C_THREAD, height, 1).setValues(threads);
  const msg = 'threadId を ' + filled + ' 件補完 / ' + skipped + ' 件は連絡先不明のためスキップ（LINE・WhatsApp案件）';
  Logger.log(msg);
  return msg;
}

// ====== 4. 日次サマリー ======

/** 毎朝1回のトリガーに設定すると、その日の残作業が届く */
function dailyDigest() {
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(SHEET_CASES);
  const lastRow = getLastCaseRow_(sh);
  if (lastRow < CASES_FIRST_ROW) return;

  const data = sh.getRange(CASES_FIRST_ROW, 1, lastRow - CASES_FIRST_ROW + 1, CASES_LAST_COL).getValues();
  const fx = getFxRates_(ss);
  const uncollected = getUncollectedMap_(ss);

  const mine = [];
  const theirs = [];
  const manual = [];
  var quoted = 0;
  var outstanding = 0;

  data.forEach(function (row) {
    const caseId = String(row[C_ID - 1] || '').trim();
    if (!caseId) return;
    const status = String(row[C_STATUS - 1] || '').trim();
    if (CLOSED_STATUSES.indexOf(status) !== -1) return;

    // 見積は「見積額 × 通貨」なので、必ず為替換算してから合計する
    const yen = toYen_(row[C_AMOUNT - 1], row[C_CURRENCY - 1], fx);
    if (yen) quoted += yen;

    // 未回収額は集計シートが算出済み（見積(円) − 入金合計(円)）。
    // 着手金を受け取っている案件は、総額ではなく残額で見ないと実態がずれる。
    const due = uncollected[caseId];
    if (due) outstanding += due;

    const entry = '・' + row[C_NAME - 1] + '（' + caseId + '/' + row[C_LP - 1] + '）' +
                  (yen ? ' ' + Math.round(yen).toLocaleString() + '円' : '') +
                  (due && yen && Math.round(due) !== Math.round(yen)
                    ? '(残' + Math.round(due).toLocaleString() + ')' : '') +
                  (row[C_NEXT - 1] ? ' → ' + row[C_NEXT - 1] : ' → ' + status);

    const speaker = String(row[C_LASTSPEAKER - 1] || '').trim();
    if (speaker === '自分') theirs.push(entry);
    else if (speaker === '相手') mine.push(entry);
    else manual.push(entry);   // 自動判定できていない案件（LINE/WhatsApp 等）
  });

  var text = '☀️ 本日の案件\n━━━━━━━━━━━━\n';
  text += '\n【自分ボール ' + mine.length + '件】\n' + (mine.join('\n') || 'なし') + '\n';
  text += '\n【相手ボール ' + theirs.length + '件】\n' + (theirs.join('\n') || 'なし') + '\n';
  if (manual.length) {
    text += '\n【自動判定なし ' + manual.length + '件（LINE/WhatsApp・要目視）】\n' + manual.join('\n') + '\n';
  }
  text += '\n💰 進行中案件の見積合計: ' + Math.round(quoted).toLocaleString() + '円';
  text += '\n📥 うち未回収: ' + Math.round(outstanding).toLocaleString() + '円';

  notifyTelegram(text);
}

/**
 * 集計シートから 案件ID → 未回収(円) のマップを作る。
 * 集計!H = 見積(円) − 入金合計(円)。着手金を受け取っている案件では
 * 総額と残額が食い違うため、日次サマリーでは残額も併記する。
 */
function getUncollectedMap_(ss) {
  const map = {};
  const sh = ss.getSheetByName(SHEET_SUMMARY);
  if (!sh) return map;
  const lastRow = sh.getLastRow();
  if (lastRow < SUMMARY_FIRST_ROW) return map;
  const values = sh.getRange(SUMMARY_FIRST_ROW, 1, lastRow - SUMMARY_FIRST_ROW + 1, 8).getValues();
  values.forEach(function (r) {
    const id = String(r[0] || '').trim();
    const due = Number(r[7]);
    if (id && due) map[id] = due;
  });
  return map;
}

/** 入金記録シートの為替レート表（A6:B10）を読む */
function getFxRates_(ss) {
  const rates = { JPY: 1 };
  const sh = ss.getSheetByName(SHEET_PAYMENTS);
  if (!sh) return rates;
  const values = sh.getRange(FX_FIRST_ROW, 1, FX_LAST_ROW - FX_FIRST_ROW + 1, 2).getValues();
  values.forEach(function (r) {
    const code = String(r[0] || '').trim().toUpperCase();
    const rate = Number(r[1]);
    if (code && rate) rates[code] = rate;
  });
  return rates;
}

function toYen_(amount, currency, fx) {
  const n = Number(amount);
  if (!n) return 0;
  const code = String(currency || 'JPY').trim().toUpperCase();
  const rate = fx[code];
  if (!rate) return 0;   // レート未設定の通貨は合計に混ぜない
  return n * rate;
}

// ====== ユーティリティ ======

function getSpreadsheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}

/** 案件IDが入っている最終行（末尾の空行・数式だけの行を無視する） */
function getLastCaseRow_(sh) {
  const maxRow = sh.getLastRow();
  if (maxRow < CASES_FIRST_ROW) return CASES_FIRST_ROW - 1;
  const ids = sh.getRange(CASES_FIRST_ROW, C_ID, maxRow - CASES_FIRST_ROW + 1, 1).getValues();
  var last = CASES_FIRST_ROW - 1;
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0] || '').trim()) last = CASES_FIRST_ROW + i;
  }
  return last;
}

function getKnownThreadIds_(sh) {
  const map = {};
  const lastRow = getLastCaseRow_(sh);
  if (lastRow < CASES_FIRST_ROW) return map;
  sh.getRange(CASES_FIRST_ROW, C_THREAD, lastRow - CASES_FIRST_ROW + 1, 1)
    .getValues()
    .forEach(function (r) {
      const v = String(r[0] || '').trim();
      if (v) map[v] = true;
    });
  return map;
}

/** 文字列・Date どちらでも Date に変換する（台帳は文字列日付のため） */
function parseDate_(v) {
  if (!v) return null;
  if (Object.prototype.toString.call(v) === '[object Date]') return isNaN(v) ? null : v;
  const d = new Date(String(v).replace(/-/g, '/'));
  return isNaN(d) ? null : d;
}

/** Telegram は1メッセージ4096文字までなので、超える場合は分割送信する */
function notifyTelegram(text) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('TELEGRAM_TOKEN');
  const chatId = props.getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chatId) {
    Logger.log('Telegram 未設定: ' + text);
    return;
  }
  const chunks = [];
  var rest = String(text);
  while (rest.length > TELEGRAM_CHUNK) {
    var cut = rest.lastIndexOf('\n', TELEGRAM_CHUNK);
    if (cut <= 0) cut = TELEGRAM_CHUNK;
    chunks.push(rest.slice(0, cut));
    rest = rest.slice(cut);
  }
  chunks.push(rest);

  chunks.forEach(function (chunk) {
    const res = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'post',
      payload: {
        chat_id: chatId,
        text: chunk,
        disable_web_page_preview: 'true'
      },
      muteHttpExceptions: true
    });
    if (res.getResponseCode() !== 200) {
      Logger.log('Telegram 送信失敗 ' + res.getResponseCode() + ': ' + res.getContentText());
    }
  });
}

function threadUrl_(tid) {
  return 'https://mail.google.com/mail/u/0/#all/' + tid;
}

function formatDate_(d) {
  return Utilities.formatDate(d, 'Asia/Manila', 'yyyy-MM-dd HH:mm');
}

function truncate_(s, n) {
  s = String(s || '').replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n) + '…' : s;
}

// ====== トリガー一括設定（初回のみ手動実行）======

/**
 * ingest は15分ごと、audit は2時間ごとに分離している。
 * audit は進行中案件1件につき Gmail 検索を1回投げるため、
 * 15分ごとに回すと案件が増えたときに Gmail の実行クォータを圧迫する。
 * 未返信の警告閾値が20時間である以上、2時間間隔で精度は十分。
 */
function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('ingestJob').timeBased().everyMinutes(15).create();
  ScriptApp.newTrigger('auditJob').timeBased().everyHours(2).create();
  ScriptApp.newTrigger('dailyDigest').timeBased().atHour(7).everyDays(1)
    .inTimezone('Asia/Manila').create();
  Logger.log('トリガー設定完了（ingest:15分 / audit:2時間 / digest:毎朝7時）');
}
