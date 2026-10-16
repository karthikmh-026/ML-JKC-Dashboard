import json

with open("all_columns_summary.json", encoding="utf-8") as f:
    data = json.load(f)

for fn, info in data.items():
    print(f"\n==========================================")
    print(f"FILE: {fn}")
    print(f"Sheet: {info['sheet']}, Header row: {info['header_row']}, Total cols: {info['total_cols']}")
    print("Prediction / Output Columns:")
    for p in info['pred_cols'][-8:]:
        print(f"  * {p}")
