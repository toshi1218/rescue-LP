#!/bin/bash
# scripts/check-noindex-additions.sh
#
# 追加された `noindex: true` を2種類に切り分ける。標準入力に `git diff -U0` を渡す。
#
#   (A) 新規ルートに付いた noindex
#       → そのルート自体が同じ差分で新規追加されている（`+ path: '...'` を含む
#         純増ハンク）。Googleのインデックスから「消える」既存ページは無いため安全。
#   (B) 既存ルートに後から付いた noindex
#       → 公開・インデックス済みのページが検索結果から消える。危険（レベル2変更）。
#
# (B) が1件でもあれば exit 1。(A) のみなら情報表示だけして exit 0。
#
# 判定ロジック: -U0 の差分では連続した追加行が1ハンクにまとまる。
# 「削除行を含まず、`path:` の追加行を含むハンク」＝ルート定義まるごとの新規追加。
set -uo pipefail

diff_text=$(cat)

report=$(printf '%s\n' "$diff_text" | awk '
function flush() {
  if (n > 0) {
    if (has_new_path && !has_removal) { new_n += n; new_lines = new_lines lines }
    else { bad_n += n; bad_lines = bad_lines lines }
  }
  n = 0; has_new_path = 0; has_removal = 0; lines = ""
}
/^@@/            { flush(); next }
/^\+\+\+/        { next }
/^---/           { next }
/^-/             { has_removal = 1; next }
/^\+[ \t]*path:/ { has_new_path = 1 }
/^\+.*noindex:[ \t]*true/ { n++; lines = lines "    " $0 "\n" }
END {
  flush();
  print "NEW=" new_n;
  print "BAD=" bad_n;
  printf "%s", "NEWLINES\n" new_lines "ENDLINES\n";
  printf "%s", "BADLINES\n" bad_lines "ENDLINES\n";
}
')

new_count=$(printf '%s\n' "$report" | sed -n 's/^NEW=//p')
bad_count=$(printf '%s\n' "$report" | sed -n 's/^BAD=//p')

if [ "${new_count:-0}" -gt 0 ]; then
  echo "INFO: noindex added on $new_count newly-created route(s) — no indexed page is being removed."
  printf '%s\n' "$report" | awk '/^NEWLINES$/{f=1;next}/^ENDLINES$/{f=0}f'
fi

if [ "${bad_count:-0}" -gt 0 ]; then
  echo "WARNING: noindex is being ADDED to EXISTING pages!"
  echo "  Added lines: $bad_count"
  echo "  This will remove pages from Google's index. Re-indexing takes 1-2 weeks."
  printf '%s\n' "$report" | awk '/^BADLINES$/{f=1;next}/^ENDLINES$/{f=0}f'
  exit 1
fi

exit 0
