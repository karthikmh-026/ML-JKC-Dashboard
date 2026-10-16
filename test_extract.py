import pandas as pd
import numpy as np

def test_file(filepath, header_row=6):
    print(f"\n--- Testing {filepath} ---")
    df = pd.read_excel(filepath, sheet_name=0, header=header_row, nrows=100)
    print(f"Loaded {len(df)} rows, {len(df.columns)} columns")
    print("Columns sample:", list(df.columns[:10]))
    for c in df.columns:
        if any(x in str(c).lower() for x in ['risk', 'pred', 'exception', 'prob', 'tier']):
            print(f"Col '{c}': values sample -> {df[c].dropna().unique()[:5]}")

test_file("ML_13_Cost_Center_Spend_Forecasting_Enriched_Output.xlsx", 6)
test_file("ML_4_Predictive_Maintenance_Enriched_Output.xlsx", 0)
test_file("ML_5_Credit_Risk_Scoring_Enriched_Output_Clean.xlsx", 0)
test_file("ML_7_Production_Order_Delay_Prediction_Enriched_Output.xlsx", 0)
