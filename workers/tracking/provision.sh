#!/usr/bin/env bash
# workers/tracking/provision.sh
#
# D1 / R2 を作成し、生成された ID を wrangler.toml に書き戻してスキーマを適用する。
# 対話入力を一切しないので、ローカル（deploy.sh 経由）と GitHub Actions の両方から使える。
#
# 認証は呼び出し側の責任:
#   - ローカル : `wrangler login` 済みであること
#   - CI       : CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID が環境変数にあること
#
# 何度実行しても安全（作成済みならスキップし、ID は毎回引き直す）。
set -euo pipefail
cd "$(dirname "$0")"

D1_NAME="ph-document-tracking"
R2_BUCKET="ph-document-tracking-uploads"

wr() { npx --yes wrangler "$@"; }

# wrangler の JSON 出力から1件を探してフィールドを取り出す。
# 出力にログ行が混ざっても拾えるよう、最初の [ ... ] だけを切り出してパースする。
#   引数: <検索キー> <検索値> <取り出すキー(カンマ区切り)> <exact|includes>
pick_json_field() {
  node -e '
    let s = "";
    process.stdin.on("data", (d) => (s += d)).on("end", () => {
      const m = s.match(/\[[\s\S]*\]/);
      if (!m) process.exit(1);
      let rows;
      try { rows = JSON.parse(m[0]); } catch { process.exit(1); }
      const [matchKey, matchVal, outKeys, mode] = process.argv.slice(1);
      const hit = rows.find((r) => {
        const v = String(r[matchKey] ?? "");
        return mode === "includes" ? v.includes(matchVal) : v === matchVal;
      });
      if (!hit) process.exit(1);
      for (const k of outKeys.split(",")) {
        if (hit[k]) { process.stdout.write(String(hit[k])); process.exit(0); }
      }
      process.exit(1);
    });
  ' "$@"
}

echo "-- D1 データベース --"
wr d1 create "$D1_NAME" >/dev/null 2>&1 || echo "   （既に存在するため作成をスキップ）"
if d1_id=$(wr d1 list --json 2>/dev/null | pick_json_field name "$D1_NAME" uuid,database_id exact); then
  sed -i.bak -E "s|^database_id *=.*|database_id = \"$d1_id\"|" wrangler.toml && rm -f wrangler.toml.bak
  echo "   ✅ database_id = $d1_id"
else
  echo "   ❌ database_id を取得できませんでした（権限不足の可能性: D1 の編集権限を確認してください）"
  exit 1
fi

echo "-- D1 スキーマ適用 --"
wr d1 execute "$D1_NAME" --file=./schema.sql --remote --yes >/dev/null
if ! wr d1 execute "$D1_NAME" --command "PRAGMA table_info(trackings)" --remote --json | grep -q 'access_expires_at'; then
  wr d1 execute "$D1_NAME" --command "ALTER TABLE trackings ADD COLUMN access_expires_at INTEGER" --remote --yes >/dev/null
  wr d1 execute "$D1_NAME" --command "UPDATE trackings SET access_expires_at = created_at + 2592000000 WHERE access_expires_at IS NULL" --remote --yes >/dev/null
  echo "   ✅ 既存追跡データに30日のアクセス期限を追加"
fi
echo "   ✅ テーブル作成・スキーマ移行完了（再実行可）"

echo "-- R2 バケット --"
wr r2 bucket create "$R2_BUCKET" >/dev/null 2>&1 || echo "   （既に存在するため作成をスキップ）"
echo "   ✅ $R2_BUCKET"
