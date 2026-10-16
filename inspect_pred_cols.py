import glob
import pandas as pd
import json

files = sorted(glob.glob("*.xlsx"))

summary_cols = {}
for f in files:
    xl = pd.ExcelFile(f)
    main_sheet = [s for s in xl.sheet_names if "Enriched" in s or "Output" in s or "Lots" in s or "Orders" in s][0]
    # check first 10 rows to find header row
    df_head = xl.parse(main_sheet, header=None, nrows=10)
    h_idx = 0
    for r in range(len(df_head)):
        if df_head.iloc[r].dropna().count() > 5:
            h_idx = r
            break
    df_sample = xl.parse(main_sheet, header=h_idx, nrows=5)
    cols = [str(c) for c in df_sample.columns if not str(c).startswith("Unnamed")]
    
    # identify prediction/score/target columns (usually near the end or containing predict/score/risk/anomaly/cluster/segment/forecast)
    pred_cols = [c for c in cols if any(k in c.lower() for k in ['pred', 'risk', 'score', 'prob', 'anom', 'flag', 'cluster', 'segment', 'class', 'status', 'failure', 'delay', 'spend', 'forecast', 'variance', 'duplicate', 'value', 'target'])]
    summary_cols[f] = {
        'sheet': main_sheet,
        'header_row': h_idx,
        'total_cols': len(cols),
        'pred_cols': pred_cols,
        'all_cols': cols
    }

with open("all_columns_summary.json", "w", encoding="utf-8") as out:
    json.dump(summary_cols, out, indent=2)

print("Generated all_columns_summary.json successfully!")
