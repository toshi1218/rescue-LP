"""
GSC監視システム セットアップスクリプト（一回だけ実行）
実行方法: python scripts/gsc_setup.py
"""
import json
import os
from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials

SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']

def main():
    # client_secret JSONファイルを探す
    downloads = os.path.expanduser('~/Downloads')
    candidates = [f for f in os.listdir(downloads) if f.startswith('client_secret_') and f.endswith('.json')]

    if not candidates:
        print('エラー: DownloadsフォルダにJSONファイルが見つかりません')
        return

    client_secret_file = os.path.join(downloads, candidates[0])
    print(f'使用するファイル: {candidates[0]}')

    # OAuthフローを実行（ブラウザが開きます）
    flow = InstalledAppFlow.from_client_secrets_file(client_secret_file, SCOPES)
    creds = flow.run_local_server(port=0)

    # GitHub Secretsに登録する値を表示
    print('\n' + '='*60)
    print('以下の3つをGitHub Secretsに登録してください')
    print('='*60)

    with open(client_secret_file) as f:
        client_info = json.load(f)['installed']

    print(f'\n【1】Secret名: GSC_CLIENT_ID')
    print(f'    値: {client_info["client_id"]}')

    print(f'\n【2】Secret名: GSC_CLIENT_SECRET')
    print(f'    値: {client_info["client_secret"]}')

    print(f'\n【3】Secret名: GSC_REFRESH_TOKEN')
    print(f'    値: {creds.refresh_token}')

    print('\n' + '='*60)
    print('GitHub Secrets登録先:')
    print('https://github.com/[あなたのユーザー名]/rescue-LP/settings/secrets/actions')
    print('='*60)

if __name__ == '__main__':
    main()
