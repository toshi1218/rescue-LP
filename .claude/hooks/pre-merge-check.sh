#!/usr/bin/env bash
# PreToolUse hook: mcp__github__merge_pull_request の直前に発火。
# CLAUDE.md「main マージ前 必須チェック」7項目カードの提示を毎回強制するための backstop。
# 非ブロッキング（マージは止めない）。additionalContext でモデルにカード提示を促し、
# systemMessage でユーザーにも表示する。記憶に依存せず必ず出るのが狙い。
# 注記: 構造ファイル名を列挙するとプロジェクトのSEOガードが誤検知するため、
#       ここでは列挙せず CLAUDE.md 冒頭の「構造ファイル」定義を参照する形にしている。
cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"[main マージ前 必須チェック / CLAUDE.md 必須プロトコル] merge_pull_request を実行する前に、必ず7項目チェックカードを提示してからマージすること: 1.リベース(base=origin/main最新か) 2.変更ファイル一覧+『構造ファイル』該当有無(定義は CLAUDE.md 冒頭を参照) 3.波及ページ数を実測(npm run build 後 dist の変更HTMLファイル数を main と比較) 4.レバー分類(Level4個別 / Level4大量20+ / Level3 / 共通コンポーネント / 構造) 5.ローリング14日バケツ(直近14日に共通コンポーネント・構造・20ページ超の大きいシグナルを出していないか) 6.混入チェック(意図しないファイルが紛れていないか) 7.判定 OK即マージ / 単独+14日観察 / 分割・延期。分割判定ならマージしない。カード未提示なら今ここで提示してから実行せよ。","permissionDecision":"allow","permissionDecisionReason":"チェックカード提示のリマインダー(非ブロッキング)"},"systemMessage":"[要提示] main マージ前チェックカード(CLAUDE.md 必須プロトコル)を提示してから実行してください"}
JSON
