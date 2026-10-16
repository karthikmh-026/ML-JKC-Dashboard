import glob
import pandas as pd
import json

files = sorted(glob.glob("*.xlsx"))

report = {}
for f in files:
    xl = pd.ExcelFile(f)
    report[f] = {
        "sheets": xl.sheet_names,
        "features": None,
        "models": None
    }
    for s in xl.sheet_names:
        if "Feature" in s:
            df = xl.parse(s, nrows=6)
            report[f]["features"] = {
                "sheet": s,
                "shape": df.shape,
                "cols": list(df.columns)
            }
        if "Model" in s:
            df = xl.parse(s, nrows=6)
            report[f]["models"] = {
                "sheet": s,
                "shape": df.shape,
                "cols": list(df.columns)
            }

with open("model_and_features_check.json", "w") as out:
    json.dump(report, out, indent=2)

print("Saved model_and_features_check.json")
