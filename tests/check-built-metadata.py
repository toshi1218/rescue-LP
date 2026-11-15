"""Check the deployed route metadata against the generated HTML and sitemap."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree

root = Path(sys.argv[1] if len(sys.argv) > 1 else 'dist')
metadata = json.loads((root / 'route-metadata.json').read_text())

class Head(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.robots = None
        self.canonical = None
        self.alternates = []
        self.feed(html.split('</head>')[0])

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta' and attrs.get('name') == 'robots':
            self.robots = attrs.get('content')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'link' and attrs.get('rel') == 'alternate' and attrs.get('hreflang'):
            self.alternates.append({'hreflang': attrs['hreflang'], 'href': attrs.get('href')})

for route, expected in metadata.items():
    page = root / route.lstrip('/') / 'index.html'
    head = Head(page.read_text())
    assert head.canonical == expected['canonical'], route
    assert head.robots == expected['robots'], route
    assert head.alternates == expected['alternates'], route
    assert len({a['hreflang'] for a in head.alternates}) == len(head.alternates), route
    for alternate in head.alternates:
        url = urlparse(alternate['href'])
        assert url.scheme == 'https' and url.netloc == 'ph-document.com', (route, alternate)
        assert url.path in metadata, (route, alternate)

assert metadata['/en/family-psa-nbi-package/']['alternates'] == []
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
entries = ElementTree.parse(root / 'sitemap.xml').getroot().findall('s:url', ns)
for entry in entries:
    loc = entry.find('s:loc', ns).text
    route = urlparse(loc).path
    expected = metadata[route]
    assert 'noindex' not in expected['robots'], route
    actual = [{'hreflang': a.attrib['hreflang'], 'href': a.attrib['href']}
              for a in entry.findall('x:link', ns)]
    assert actual == expected['alternates'], route
assert len(entries) == len({m['canonical'] for m in metadata.values() if 'noindex' not in m['robots']})
print(f'PASS: {len(metadata)} route heads and {len(entries)} sitemap entries agree; no invalid alternates.')
