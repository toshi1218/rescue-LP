"""
GSC日次監視スクリプト
GitHub Actionsで毎日09:00 JSTに自動実行される
比較方法: 直近7日移動平均 vs 前週同期間7日移動平均
監視項目: インプレッション数・インデックスページ数・リダイレクト確認
"""
import os
import datetime
import urllib.request
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SITE_URL = 'https://ph-document.com/'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']

# アラート閾値
IMPRESSION_DROP_THRESHOLD = 0.30   # 7日平均で前週比30%以上の減少
ZERO_IMPRESSION_THRESHOLD = 10     # 前週平均がこれ以上あったのに今週ゼロはアラート
INDEX_MIN_THRESHOLD = 70           # インデックス済みページがこれ以下になったらアラート（現在約83ページ）

# 旧URLリダイレクト確認（最重要のもの）
REDIRECT_CHECKS = [
    ('https://ph-document.com/cenomar/', 'https://ph-document.com/en/cenomar/'),
    ('https://ph-document.com/nbi-clearance/', 'https://ph-document.com/en/nbi-clearance/'),
    ('https://ph-document.com/apostille/', 'https://ph-document.com/en/apostille/'),
]


def get_credentials():
    return Credentials(
        token=None,
        refresh_token=os.environ['GSC_REFRESH_TOKEN'],
        client_id=os.environ['GSC_CLIENT_ID'],
        client_secret=os.environ['GSC_CLIENT_SECRET'],
        token_uri='https://oauth2.googleapis.com/token',
        scopes=SCOPES,
    )


def get_impressions(service, start_date, end_date):
    """指定期間のインプレッション数・クリック数を取得"""
    response = service.searchanalytics().query(
        siteUrl=SITE_URL,
        body={
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': [],
            'rowLimit': 1,
        }
    ).execute()
    rows = response.get('rows', [])
    if not rows:
        return 0, 0
    return int(rows[0].get('impressions', 0)), int(rows[0].get('clicks', 0))


def get_sitemap_index_count(service):
    """サイトマップからインデックス済みページ数を取得"""
    try:
        response = service.sitemaps().list(siteUrl=SITE_URL).execute()
        sitemaps = response.get('sitemap', [])
        for sitemap in sitemaps:
            if 'sitemap.xml' in sitemap.get('path', ''):
                for content in sitemap.get('contents', []):
                    if content.get('type') == 'web':
                        return {
                            'submitted': int(content.get('submitted', 0)),
                            'indexed': int(content.get('indexed', 0)),
                        }
    except Exception:
        pass
    return None


def check_redirects():
    """旧URLが正しく301リダイレクトされているか確認"""
    errors = []
    for old_url, expected_dest in REDIRECT_CHECKS:
        try:
            req = urllib.request.Request(
                old_url,
                headers={'User-Agent': 'redirect-checker/1.0'},
            )
            # リダイレクトを追わずに1ホップだけ確認
            class NoRedirect(urllib.request.HTTPRedirectHandler):
                def redirect_request(self, req, fp, code, msg, headers, newurl):
                    return None

            opener = urllib.request.build_opener(NoRedirect())
            try:
                opener.open(req, timeout=10)
                # 200が返った = リダイレクトが消えてコンテンツを直接返している
                errors.append(f'リダイレクト消滅（200応答）: {old_url} → 期待値は301 → {expected_dest}')
            except urllib.error.HTTPError as e:
                if e.code in (301, 302, 308):
                    location = e.headers.get('Location', '')
                    if expected_dest not in location and location != expected_dest:
                        errors.append(f'リダイレクト先が変更: {old_url} → {location}（期待値: {expected_dest}）')
                else:
                    errors.append(f'リダイレクトエラー {e.code}: {old_url}')
        except Exception as ex:
            errors.append(f'リダイレクト確認失敗: {old_url} ({ex})')
    return errors


def format_report(alerts, stats):
    """レポート文字列を生成"""
    today = datetime.date.today().strftime('%Y-%m-%d')
    lines = [f'# GSC日次監視レポート {today}', '']

    if alerts:
        lines.append('## 🚨 アラート')
        for alert in alerts:
            lines.append(f'- {alert}')
        lines.append('')

    lines.append('## 📊 直近7日間の数値')
    lines.append(f'- インプレッション（7日合計）: **{stats["impressions_this"]:,}件**')
    lines.append(f'- クリック（7日合計）: **{stats["clicks_this"]:,}件**')
    lines.append(f'- 7日平均インプレッション/日: **{stats["avg_this"]:.1f}件**')
    lines.append(f'- 前週同期間平均: {stats["avg_last"]:.1f}件')
    lines.append(f'- 前週比: {stats["change_pct"]:+.1f}%')

    if stats.get('sitemap_indexed') is not None:
        lines.append('')
        lines.append('## 📄 インデックス状況')
        lines.append(f'- サイトマップ登録数: {stats["sitemap_submitted"]}ページ')
        lines.append(f'- インデックス済み: **{stats["sitemap_indexed"]}ページ**')

    lines.append('')
    if not alerts:
        lines.append('✅ 異常なし')

    return '\n'.join(lines)


def main():
    creds = get_credentials()
    creds.refresh(Request())

    service = build('searchconsole', 'v1', credentials=creds)

    today = datetime.date.today()
    end_date = today - datetime.timedelta(days=2)

    this_start = end_date - datetime.timedelta(days=6)
    this_end = end_date
    last_start = this_start - datetime.timedelta(days=7)
    last_end = last_start + datetime.timedelta(days=6)

    impressions_this, clicks_this = get_impressions(
        service, this_start.isoformat(), this_end.isoformat()
    )
    impressions_last, clicks_last = get_impressions(
        service, last_start.isoformat(), last_end.isoformat()
    )

    avg_this = impressions_this / 7
    avg_last = impressions_last / 7
    change = (avg_this - avg_last) / avg_last if avg_last > 0 else 0

    # インデックスページ数取得
    sitemap_stats = get_sitemap_index_count(service)

    # リダイレクト確認
    redirect_errors = check_redirects()

    alerts = []

    # インプレッションアラート
    if impressions_last > ZERO_IMPRESSION_THRESHOLD and impressions_this == 0:
        alerts.append('インプレッションがゼロになりました（サイト消滅の可能性）')
    elif avg_last > 1 and change <= -IMPRESSION_DROP_THRESHOLD:
        alerts.append(
            f'7日平均インプレッションが前週比 {change*100:.1f}% 減少 '
            f'（前週平均 {avg_last:.1f}/日 → 今週平均 {avg_this:.1f}/日）'
        )

    # インデックスページ数アラート（絶対閾値）
    if sitemap_stats:
        indexed = sitemap_stats['indexed']
        if indexed > 0 and indexed < INDEX_MIN_THRESHOLD:
            alerts.append(
                f'インデックス済みページが{INDEX_MIN_THRESHOLD}件を下回りました: '
                f'現在 {indexed}ページ（正常時: 約83ページ）'
            )

    # リダイレクトアラート
    for err in redirect_errors:
        alerts.append(err)

    stats = {
        'impressions_this': impressions_this,
        'clicks_this': clicks_this,
        'avg_this': avg_this,
        'avg_last': avg_last,
        'change_pct': change * 100,
        'sitemap_indexed': sitemap_stats['indexed'] if sitemap_stats else None,
        'sitemap_submitted': sitemap_stats['submitted'] if sitemap_stats else None,
    }

    report = format_report(alerts, stats)
    print(report)

    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            has_alerts = 'true' if alerts else 'false'
            f.write(f'has_alerts={has_alerts}\n')
            f.write(f'report<<EOF\n{report}\nEOF\n')
            if sitemap_stats:
                f.write(f'indexed_count={sitemap_stats["indexed"]}\n')

    if alerts:
        exit(1)


if __name__ == '__main__':
    main()
