"""Build index.html from the files in src/. Run: python3 build.py"""
import os
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src') + os.sep
body = open(d + 'top.html', encoding='utf-8').read() + "const CHD={};\n"
for n in range(1, 10):
    p = f'{d}ch{n}.js'
    if os.path.exists(p):
        body += open(p, encoding='utf-8').read() + "\n"
body += open(d + 'papers.js', encoding='utf-8').read() + open(d + 'bottom.js', encoding='utf-8').read()
head = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
        'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n'
        '</head>\n<body>\n')
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'index.html')
open(out, 'w', encoding='utf-8').write(head + body + '\n</body>\n</html>\n')
print('wrote', out, len(head + body), 'bytes')
