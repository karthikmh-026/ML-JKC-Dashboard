import json

with open('summary_metadata.json', encoding='utf-8') as f:
    data = json.load(f)

print(f"{'File':<55} | {'Use Case':<40} | {'Rows':<8} | {'Cols':<5}")
print("-" * 115)
for item in data:
    fn = item['filename']
    meta = item.get('metadata', {})
    uc_name = meta.get('Use Case')
    if not uc_name:
        # derive from filename
        uc_name = fn.replace('ML_', '').replace('_Enriched_Output', '').replace('_Clean', '').replace('.xlsx', '').replace('_', ' ')
    rows = item.get('total_rows', 0)
    cols = len(item.get('columns', []))
    print(f"{fn:<55} | {uc_name:<40} | {rows:<8} | {cols:<5}")
