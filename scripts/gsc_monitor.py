"""
GSC週次監視スクリプト
GitHub Actionsで毎週月曜日に自動実行される
"""
import os
import json
import datetime
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SITE_URL = 'https://ph-document.com/'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']

# アラート閾値
IMPRESSION_DROP_THRESHOLD = 0.30   # 前週比30%以上の減少
REDIRECT_ERROR_INCREASE = 3        # リダイレクトエラーが3件以上増加
INDEXED_PAGE_DROP = 5              # インデックス済みページが5件以上減少


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
    """指定期間のインプレッション数を取得"""
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


def get_index_coverage(service):
    """インデックスカバレッジ情報を取得"""
    try:
        response = service.urlInspection().index().inspect(
            body={'inspectionUrl': SITE_URL, 'siteUrl': SITE_URL}
        ).execute()
        return response
    except Exception:
        return None


def format_report(alerts, stats):
    """レポート文字列を生成"""
    today = datetime.date.today().strftime('%Y-%m-%d')
    lines = [f'# GSC週次監視レポート {today}', '']

    if alerts:
        lines.append('## 🚨 アラート')
        for alert in alerts:
            lines.append(f'- {alert}')
        lines.append('')

    lines.append('## 📊 今週の数値')
    lines.append(f'- インプレッション（7日間）: **{stats["impressions_this_week"]:,}件**')
    lines.append(f'- クリック（7日間）: **{stats["clicks_this_week"]:,}件**')
    lines.append(f'- 前週比インプレッション: {stats["impression_change_pct"]:+.1f}%')
    lines.append('')

    if not alerts:
        lines.append('✅ 異常なし')

    return '\n'.join(lines)


def main():
    creds = get_credentials()
    creds.refresh(Request())

    service = build('searchconsole', 'v1', credentials=creds)

    today = datetime.date.today()
    this_week_end = today - datetime.timedelta(days=2)    # GSCは2日遅延
    this_week_start = this_week_end - datetime.timedelta(days=6)
    last_week_end = this_week_start - datetime.timedelta(days=1)
    last_week_start = last_week_end - datetime.timedelta(days=6)

    # インプレッション取得
    impressions_this, clicks_this = get_impressions(
        service,
        this_week_start.isoformat(),
        this_week_end.isoformat()
    )
    impressions_last, clicks_last = get_impressions(
        service,
        last_week_start.isoformat(),
        last_week_end.isoformat()
    )

    # 前週比計算
    if impressions_last > 0:
        impression_change = (impressions_this - impressions_last) / impressions_last
    else:
        impression_change = 0

    alerts = []

    # アラート判定
    if impressions_last > 10 and impression_change <= -IMPRESSION_DROP_THRESHOLD:
        alerts.append(
            f'インプレッションが前週比 {impression_change*100:.1f}% 減少 '
            f'({impressions_last:,} → {impressions_this:,})'
        )

    if impressions_this == 0 and impressions_last > 0:
        alerts.append('インプレッションがゼロになりました（サイト消滅の可能性）')

    stats = {
        'impressions_this_week': impressions_this,
        'clicks_this_week': clicks_this,
        'impression_change_pct': impression_change * 100,
    }

    report = format_report(alerts, stats)
    print(report)

    # GitHub Actions の出力に設定
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            has_alerts = 'true' if alerts else 'false'
            f.write(f'has_alerts={has_alerts}\n')
            f.write(f'report<<EOF\n{report}\nEOF\n')

    # アラートがある場合は終了コード1（GitHub Actionsで通知トリガー）
    if alerts:
        exit(1)


if __name__ == '__main__':
    main()
