import re

with open('app.js', 'r', encoding='utf-8') as f:
    js_lines = f.readlines()

print('--- Scanning app.js for light text / color ---')
for i, line in enumerate(js_lines, 1):
    lower = line.lower()
    if 'color' in lower and ('#fff' in lower or 'white' in lower or '#94a' in lower or '#cbd' in lower or '#e2e' in lower):
        print(f"app.js:{i}: {line.strip()}")
    if 'text-slate-300' in lower or 'text-slate-400' in lower or 'text-emerald-300' in lower or 'text-emerald-400' in lower or 'text-blue-300' in lower or 'text-blue-400' in lower:
        print(f"app.js:{i}: {line.strip()}")

with open('index.html', 'r', encoding='utf-8') as f:
    html_lines = f.readlines()

print('--- Scanning index.html for model detail view light text ---')
in_detail = False
for i, line in enumerate(html_lines, 1):
    if 'id="modelDetailView"' in line:
        in_detail = True
    if in_detail:
        lower = line.lower()
        if any(cls in lower for cls in ['text-slate-300', 'text-slate-400', 'text-blue-300', 'text-blue-400', 'text-emerald-300', 'text-emerald-400', 'bg-slate-900', 'bg-slate-800']):
            print(f"index.html:{i}: {line.strip()}")
