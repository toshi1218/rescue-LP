#!/usr/bin/env python3
"""
SEO Guard Hook
=============
CLAUDE.md のSEO Safety Rules（レベル1〜4）に基づき、
Edit/Write ツール実行前にファイル名と変更内容を検査する。

Level 1 (激ヤバゾーン)  → continue: false でハードブロック
Level 2 (取扱注意ゾーン) → continue: false でハードブロック
Level 3 (定期メンテゾーン) → continue: true + systemMessage で警告のみ
Level 4 (毎日ウェルカム)  → 何もしない
"""

import json
import sys
import os


# ─── Level 1: 激ヤバゾーン ──────────────────────────────────────────────────
# URLパス・ドメイン構造そのものを定義するファイル
LEVEL1_FILES = {
    # prerender.ts はルート定義を含む。ただしコンテンツ編集も多いため
    # 内容ベースのキーワード判定（後述）と組み合わせて使う
}

# prerender.ts 内でルートパスを定義している箇所のキーワード（変更前後どちらかに含まれたらLevel1）
LEVEL1_ROUTE_KEYWORDS = [
    "{ path:",
    '"path":',
    "routes.push",
    "routeConfigs",
]

# ─── Level 2: 取扱注意ゾーン ─────────────────────────────────────────────────
# Googleへのサイト構造指示書にあたるファイル
LEVEL2_FILES = {
    "robots.txt",
    "sitemap.xml",
    "_redirects",
    "prerender.ts",   # hreflang注入・sitemap生成・ルート定義を含む
    "usemeta.ts",     # クライアント側hreflang/canonical（lowercase比較用）
    "urlmap.ts",      # EN-JA URLマッピング（hreflangの根拠）（lowercase比較用）
}

# 変更内容（old/new/content）に含まれていたらLevel2とみなすキーワード
LEVEL2_CONTENT_KEYWORDS = [
    "hreflang",
    "canonical",
    "noindex",
    "x-default",
    "x-robots-tag",
    "disallow:",
    "allow:",
    "shouldgeneratehreflang",  # prerender.ts 内の制御関数
    "sitemap",
    "<loc>",
]

# ─── Level 3: 定期メンテゾーン ───────────────────────────────────────────────
# title・H1・meta description の変更（警告のみ。ブロックしない）
LEVEL3_CONTENT_KEYWORDS = [
    "<title>",
    'name="description"',
    "meta description",
    "metadescription",
    "<h1",
    "description:",       # prerender.ts の description フィールド
    "pagetitle",
    "seotitle",
]


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    tool_input = data.get("tool_input") or {}
    file_path = tool_input.get("file_path") or ""
    basename = os.path.basename(file_path)          # ファイル名マッチ用（元のcase）
    basename_lower = basename.lower()               # コンテンツ検索用

    # 変更前後のテキストを結合して検査（lowercaseで比較）
    old_str = (tool_input.get("old_string") or "").lower()
    new_str = (tool_input.get("new_string") or "").lower()
    write_content = (tool_input.get("content") or "").lower()
    changed = old_str + "\n" + new_str + "\n" + write_content

    # ── Level 1 チェック ──────────────────────────────────────────────────────
    # prerender.ts のルートパス定義変更はURL構造変更（激ヤバゾーン）
    if basename_lower == "prerender.ts":
        matched_routes = [kw for kw in LEVEL1_ROUTE_KEYWORDS if kw.lower() in changed]
        if matched_routes:
            block(
                level=1,
                filename=os.path.basename(file_path),
                reason=(
                    f"ルートパス定義（{', '.join(matched_routes)}）の変更を検出しました。"
                    "URLパスを変更すると公開済みURLが消滅し、Googleの評価がゼロリセットされます。"
                    "どうしても必要な場合は _redirects に301リダイレクトを追加する前提で、"
                    "ユーザーの明示的な許可を得てから実行してください。"
                ),
            )
            return

    # Markdownドキュメント（docs/やCLAUDE.md等）はキーワードチェック対象外
    # （参照・説明として hreflang 等のキーワードが含まれることが多いため）
    if file_path.endswith(".md"):
        sys.exit(0)

    # ── Level 2 チェック：ファイル名 ──────────────────────────────────────────
    if basename_lower in LEVEL2_FILES:
        block(
            level=2,
            filename=basename,
            reason=(
                "このファイルはhreflang・canonical・noindex・sitemap・301リダイレクト等、"
                "Googleへのサイト構造指示書にあたる要素を含みます。"
                "言語追加・ページ統廃合以外では原則変更しません。"
            ),
        )
        return

    # ── Level 2 チェック：変更内容にSEO構造キーワードを含む ──────────────────
    matched_l2 = [kw for kw in LEVEL2_CONTENT_KEYWORDS if kw in changed]
    if matched_l2:
        block(
            level=2,
            filename=os.path.basename(file_path),
            reason=(
                f"変更内容に取扱注意キーワード（{', '.join(matched_l2)}）が含まれています。"
                "hreflang・canonical・noindex・sitemapへの変更は"
                "Googleのインデックスに重大な影響を与えます（回復に2〜4週間）。"
            ),
        )
        return

    # ── Level 3 チェック：title / H1 / meta description ──────────────────────
    matched_l3 = [kw for kw in LEVEL3_CONTENT_KEYWORDS if kw in changed]
    if matched_l3:
        warn(
            filename=os.path.basename(file_path),
            detected=matched_l3,
        )
        return

    # Level 4 または対象外 → 何もせず通過
    sys.exit(0)


def block(level: int, filename: str, reason: str):
    if level == 1:
        stop_reason = (
            f"🚨 [SEOガード レベル1 BLOCKED] 激ヤバゾーン — {filename}\n\n"
            f"{reason}\n\n"
            "▶ 対処: ユーザーの明示的な許可を得てから再度依頼してください。\n"
            "▶ 参照: CLAUDE.md > SEO Safety Rules > レベル1（サイトリニューアル等の非常時のみ）"
        )
    else:
        stop_reason = (
            f"⚠️ [SEOガード レベル2 BLOCKED] 取扱注意ゾーン — {filename}\n\n"
            f"{reason}\n\n"
            "▶ 対処: ユーザーの明示的な許可を得てから再度依頼してください。\n"
            "▶ 参照: CLAUDE.md > SEO Safety Rules > レベル2（言語追加・ページ統廃合時のみ）"
        )
    print(json.dumps({"continue": False, "stopReason": stop_reason}))
    sys.exit(0)


def warn(filename: str, detected: list):
    system_message = (
        f"🟡 [SEOガード レベル3 WARNING] 定期メンテゾーン — {filename}\n"
        f"変更内容に {', '.join(detected)} が含まれています。\n"
        "title・H1・meta descriptionはCTRと検索順位に直結します。\n"
        "変更後はGoogleの反応を確認するため最低2週間〜1ヶ月は様子を見てください。\n"
        "頻繁な変更は順位不安定化の原因になります。\n"
        "▶ 参照: CLAUDE.md > SEO Safety Rules > レベル3（数週間〜数ヶ月に1回）"
    )
    print(json.dumps({"continue": True, "systemMessage": system_message}))
    sys.exit(0)


if __name__ == "__main__":
    main()
