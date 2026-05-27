#!/usr/bin/env python3
"""
Session End Detector Hook (UserPromptSubmit)
============================================
ユーザーのプロンプトにセッション終了を示唆するフレーズが含まれていたら、
Claudeに「残タスクをGoogleカレンダーに自動登録せよ」と指示する additionalContext を注入する。

ユーザーは自分の記憶力を信用していないため、毎回終了時に明示的に頼まなくても
自動でリマインドが入る仕組みを目指す。

誤検出を避けるため：
- 短いプロンプト（40文字以下）に限定
- 「ありがとう、次は〇〇」のような継続意図を含むパターンは除外
"""

import json
import sys
import re

# 手動トリガー：これが含まれていたら無条件で発動
MANUAL_TRIGGERS = [
    "/remind",
    "/save",
    "/savetasks",
    "残タスク保存",
    "タスク保存",
]

# セッション終了を示唆する典型フレーズ（lowercase比較）
ENDING_PHRASES = [
    "ありがとう", "ありがと", "あんがと",
    "サンキュー", "thanks", "thank you", "thx",
    "おつかれ", "お疲れ", "おつ", "疲れた",
    "終わり", "おわり", "終了", "完了",
    "ok", "おけ", "おk",
    "また明日", "また後で", "また今度", "また次",
    "おやすみ", "お休み",
    "じゃあね", "バイバイ",
    "ひとまず", "一旦",
]

# これらが含まれていたら「継続意図あり」と判断して終了検出をスキップ
CONTINUATION_KEYWORDS = [
    "次", "つぎ", "あと", "後", "他", "他に",
    "ところで", "それで", "それと",
    "もう一つ", "もう1つ", "もう少し",
    "確認", "教えて", "やって", "して",
    "？", "?",
]


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    prompt_raw = (data.get("prompt") or "").strip()
    prompt = prompt_raw.lower()

    if not prompt:
        sys.exit(0)

    # 手動トリガー（/remind 等）が含まれていたら、長さ・継続意図を問わず無条件発動
    matched_manual = [t for t in MANUAL_TRIGGERS if t in prompt]
    if matched_manual:
        matched_endings = matched_manual
        manual_mode = True
    else:
        manual_mode = False
        # 40文字を超えるプロンプトは「終了の挨拶」とは見なさない（複雑な内容を含む可能性）
        if len(prompt_raw) > 40:
            sys.exit(0)

        # 終了フレーズが含まれているか
        matched_endings = [p for p in ENDING_PHRASES if p in prompt]
        if not matched_endings:
            sys.exit(0)

        # 継続意図キーワードが含まれていたらスキップ
        matched_continuations = [k for k in CONTINUATION_KEYWORDS if k in prompt]
        if matched_continuations:
            sys.exit(0)

    # セッション終了と判定 → Claudeに自動タスク保存を指示
    system_message = (
        "🔔 [セッション終了検出] 残タスク自動保存ルールが発動しました\n\n"
        "ユーザーの発言からセッション終了が示唆されました（検出: "
        f"{', '.join(matched_endings)}）。\n"
        "**応答する前に、必ず以下を実行してください：**\n\n"
        "1. このセッション全体を振り返り、以下を「残タスク候補」として抽出する：\n"
        "   - 後でやる必要があると言及された事項\n"
        "   - 観察期間の終了・特定日以降に着手するタスク\n"
        "   - 設定確認・効果測定など『あとで再チェック』が必要なもの\n"
        "   - ユーザーがすでに『カレンダーに入れてある』と言ったものは除外\n\n"
        "2. 抽出した各タスクについて `mcp__ce718846-...__create_event` で Google カレンダーに登録：\n"
        "   - リマインド日時は内容から推定（不明な場合は翌営業日 9:00 JST）\n"
        "   - description に具体的な手順・コンテキスト・参照URLを含める\n"
        "   - overrideReminders で popup + email を 0 分前に設定\n"
        "   - 通知時に何をすべきか一目でわかるタイトルにする\n\n"
        "3. 登録結果を箇条書きで報告（日時とタイトルのみ・簡潔に）\n\n"
        "**残タスクがない場合：**\n"
        "『残タスクなし』とだけ返答してOK。無理に登録しないこと。\n\n"
        "**重複防止：**\n"
        "このセッション中に既にカレンダー登録したイベントは絶対に再登録しないこと。\n"
        "（会話を遡って create_event の実行履歴を確認すること）"
    )

    output = {
        "hookSpecificOutput": {
            "hookEventName": "UserPromptSubmit",
            "additionalContext": system_message,
        }
    }
    print(json.dumps(output, ensure_ascii=False))
    sys.exit(0)


if __name__ == "__main__":
    main()
