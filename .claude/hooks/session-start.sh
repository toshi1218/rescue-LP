#!/bin/bash
set -euo pipefail

# セッション開始時に docs/merge-schedule.md を読み込み、
# 今日以前に予定されているマージ予定 PR を通知する

SCHEDULE_FILE="$CLAUDE_PROJECT_DIR/docs/merge-schedule.md"
TODAY=$(date +%Y-%m-%d)

if [ ! -f "$SCHEDULE_FILE" ]; then
  exit 0
fi

DUE_PRS=""
IN_SCHEDULE=0

while IFS= read -r line; do
  # 「残りスケジュール」セクションの開始を検出
  if echo "$line" | grep -q "残りスケジュール"; then
    IN_SCHEDULE=1
    continue
  fi
  # 次のセクション（##）が来たら終了
  if [[ $IN_SCHEDULE -eq 1 ]] && echo "$line" | grep -qE '^## '; then
    IN_SCHEDULE=0
    continue
  fi

  if [[ $IN_SCHEDULE -eq 1 ]]; then
    # 日付パターン（YYYY-MM-DD）を含む行のみ対象
    if echo "$line" | grep -qE '[0-9]{4}-[0-9]{2}-[0-9]{2}'; then
      # | 予定日 | PR番号 | 内容 | 備考 | → $2=日付, $3=PR番号, $4=内容
      SCHEDULED_DATE=$(echo "$line" | awk -F'|' '{print $2}' | tr -d ' ')
      PR_NUM=$(echo "$line" | awk -F'|' '{print $3}' | tr -d ' ')
      PR_TITLE=$(echo "$line" | awk -F'|' '{print $4}' | sed 's/^ *//;s/ *$//')
      # 日付列が YYYY-MM-DD 形式でない行（ヘッダ・要再調整行等）はスキップ
      if ! echo "$SCHEDULED_DATE" | grep -qE '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'; then
        continue
      fi
      if [[ "$SCHEDULED_DATE" < "$TODAY" || "$SCHEDULED_DATE" == "$TODAY" ]]; then
        DUE_PRS="${DUE_PRS}\n  📌 ${SCHEDULED_DATE} ${PR_NUM} — ${PR_TITLE}"
      fi
    fi
  fi
done < "$SCHEDULE_FILE"

if [ -n "$DUE_PRS" ]; then
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📋 マージ期日のPRがあります（今日: ${TODAY}）"
  echo -e "$DUE_PRS"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
fi

exit 0
