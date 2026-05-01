"""
hreflang自動チェックスクリプト
デプロイ後にキーページのhreflangタグを検証する
前回事故（PR #159 hreflang全削除）の再発防止
"""
import sys
import urllib.request
import re

BASE_URL = 'https://ph-document.com'

# 代表ページ: EN/JAペアをカバーするサンプル
# hreflangはprerender.tsで一括生成されるため、1ページ消えたら全ページ消える
PAGES_TO_CHECK = [
    {'url': f'{BASE_URL}/en/cenomar/',                   'langs': ['en', 'ja', 'x-default']},
    {'url': f'{BASE_URL}/ja/cenomar-toha/',              'langs': ['en', 'ja', 'x-default']},
    {'url': f'{BASE_URL}/en/psa-birth-certificate-cost/', 'langs': ['en', 'ja', 'x-default']},
    {'url': f'{BASE_URL}/ja/psa-shussei-cost/',          'langs': ['en', 'ja', 'x-default']},
    {'url': f'{BASE_URL}/en/',                           'langs': ['en', 'ja', 'x-default']},
]


def fetch_html(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'hreflang-checker/1.0'})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode('utf-8')


def check_page(page):
    url = page['url']
    errors = []
    try:
        html = fetch_html(url)
    except Exception as e:
        return [f'FETCH_ERROR {url}: {e}']

    for lang in page['langs']:
        pattern = rf'hreflang=["\']?{re.escape(lang)}["\']?'
        if not re.search(pattern, html, re.IGNORECASE):
            errors.append(f'MISSING_HREFLANG {url}: hreflang="{lang}"')

    # canonical の存在チェック
    if not re.search(r'rel=["\']?canonical["\']?', html, re.IGNORECASE):
        errors.append(f'MISSING_CANONICAL {url}')

    return errors


def main():
    print(f'hreflangチェック開始: {len(PAGES_TO_CHECK)}ページ')
    all_errors = []

    for page in PAGES_TO_CHECK:
        errors = check_page(page)
        if errors:
            for e in errors:
                print(f'  ❌ {e}')
            all_errors.extend(errors)
        else:
            print(f'  ✅ {page["url"]}')

    print()
    if all_errors:
        print(f'❌ {len(all_errors)}件のエラーを検出')
        # GitHub Actions output
        import os
        if os.environ.get('GITHUB_OUTPUT'):
            with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
                report = '\n'.join(all_errors)
                f.write(f'hreflang_errors<<EOF\n{report}\nEOF\n')
        sys.exit(1)
    else:
        print(f'✅ 全{len(PAGES_TO_CHECK)}ページのhreflang正常')
        sys.exit(0)


if __name__ == '__main__':
    main()
