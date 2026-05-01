"""
GSC日次監視スクリプト
GitHub Actionsで毎日09:00 JSTに自動実行される
比較方法: 直近7日移動平均 vs 前週同期間7日移動平均
"""
import os
import datetime
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SITE_URL = 'https://ph-document.com/'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']

# アラート閾値
IMPRESSION_DROP_THRESHOLD = 0.30   # 7日平均で前週比30%以上の減少
ZERO_IMPRESSION_THRESHOLD = 10     # 前週平均がこれ以上あったのに今週ゼロはアラート


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
    lines.append('')

    if not alerts:
        lines.append('✅ 異常なし')

    return '\n'.join(lines)


def main():
    creds = get_credentials()
    creds.refresh(Request())

    service = build('searchconsole', 'v1', credentials=creds)

    today = datetime.date.today()
    # GSCは2日遅延があるため、2日前までのデータを使用
    end_date = today - datetime.timedelta(days=2)

    # 直近7日（今週）
    this_start = end_date - datetime.timedelta(days=6)
    this_end = end_date

    # 前週同期間（7日前〜14日前）
    last_start = this_start - datetime.timedelta(days=7)
    last_end = this_end - datetime.timedelta(days=7)

    impressions_this, clicks_this = get_impressions(
        service, this_start.isoformat(), this_end.isoformat()
    )
    impressions_last, clicks_last = get_impressions(
        service, last_start.isoformat(), last_end.isoformat()
    )

    avg_this = impressions_this / 7
    avg_last = impressions_last / 7

    if avg_last > 0:
        change = (avg_this - avg_last) / avg_last
    else:
        change = 0

    alerts = []

    if impressions_last > ZERO_IMPRESSION_THRESHOLD and impressions_this == 0:
        alerts.append('インプレッションがゼロになりました（サイト消滅の可能性）')
    elif avg_last > 1 and change <= -IMPRESSION_DROP_THRESHOLD:
        alerts.append(
            f'7日平均インプレッションが前週比 {change*100:.1f}% 減少 '
            f'（前週平均 {avg_last:.1f}/日 → 今週平均 {avg_this:.1f}/日）'
        )

    stats = {
        'impressions_this': impressions_this,
        'clicks_this': clicks_this,
        'avg_this': avg_this,
        'avg_last': avg_last,
        'change_pct': change * 100,
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
