import glob
import os
import openpyxl
import pandas as pd
import numpy as np
import json

def clean_val(v):
    if pd.isna(v):
        return None
    if isinstance(v, (np.integer, int)):
        return int(v)
    if isinstance(v, (np.floating, float)):
        return round(float(v), 4)
    return str(v)

print("Starting deep extraction of 17 Excel files...")

models_config = [
    {
        "id": "ML_04",
        "file": "ML_4_Predictive_Maintenance_Enriched_Output.xlsx",
        "name": "Predictive Maintenance",
        "domain": "Plant Maintenance (PM)",
        "type": "Classification & NLP",
        "main_sheet": "Enriched_Predictions",
        "watchlist_sheet": "Failure_Watchlist",
        "header_row": 0,
        "exception_col": "is_equipment_failure_exception",
        "risk_col": None,
        "value_col": "total_maintenance_cost"
    },
    {
        "id": "ML_05",
        "file": "ML_5_Credit_Risk_Scoring_Enriched_Output_Clean.xlsx",
        "name": "Credit Risk Scoring",
        "domain": "Finance & AR (FI)",
        "type": "Credit Scoring & Risk",
        "main_sheet": "ML_05_Enriched_Output(Predict)",
        "watchlist_sheet": "Default_Watchlist",
        "header_row": 0,
        "exception_col": None,
        "risk_col": "Risk Category",
        "value_col": "Open AR Balance (INR)"
    },
    {
        "id": "ML_06",
        "file": "ML_6_Slow_Moving_Inventory_Prediction_Enriched_Output.xlsx",
        "name": "Slow Moving Inventory Prediction",
        "domain": "Materials Management (MM)",
        "type": "Classification & Obsolescence",
        "main_sheet": "Enriched_Inventory_Predictions",
        "watchlist_sheet": None,
        "header_row": 0,
        "exception_col": "predicted_slow_moving_exception",
        "risk_col": "inventory_risk_category",
        "value_col": "total_stock_value"
    },
    {
        "id": "ML_07",
        "file": "ML_7_Production_Order_Delay_Prediction_Enriched_Output.xlsx",
        "name": "Production Order Delay Prediction",
        "domain": "Production Planning (PP)",
        "type": "Delay Prediction",
        "main_sheet": "Enriched Production Orders",
        "watchlist_sheet": "Delayed Orders Watchlist",
        "header_row": 0,
        "exception_col": "is_delayed_exception",
        "risk_col": "delay_risk_tier",
        "value_col": "total_order_cost"
    },
    {
        "id": "ML_08",
        "file": "ML_8_Quality_Inspection_Failure_Prediction_Enriched_Output.xlsx",
        "name": "Quality Inspection Failure Prediction",
        "domain": "Quality Management (QM)",
        "type": "Failure Classification",
        "main_sheet": "Scored Inspection Lots",
        "watchlist_sheet": "High-Risk Watchlist",
        "header_row": 0,
        "exception_col": "Predicted Failure (1=Fail)",
        "risk_col": "Risk Tier",
        "value_col": "Lot Value (INR)"
    },
    {
        "id": "ML_13",
        "file": "ML_13_Cost_Center_Spend_Forecasting_Enriched_Output.xlsx",
        "name": "Cost Center Spend Forecasting",
        "domain": "Controlling (CO)",
        "type": "Time-Series & Spend Clustering",
        "main_sheet": "ML_13_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Spend Exception",
        "risk_col": "Risk Category",
        "value_col": "Posting Amount (DMBTR)"
    },
    {
        "id": "ML_14",
        "file": "ML_14_PR_to_PO_Cycle_Time_Prediction_Enriched_Output.xlsx",
        "name": "PR to PO Cycle Time Prediction",
        "domain": "Procurement (MM-PUR)",
        "type": "Cycle Time & Bottleneck",
        "main_sheet": "ML_14_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Exception (0/1)",
        "risk_col": "Risk Category",
        "value_col": "Requisition Value (INR)"
    },
    {
        "id": "ML_15",
        "file": "ML_15_Order_Value_Prediction_Enriched_Output.xlsx",
        "name": "Order Value Prediction",
        "domain": "Sales & Distribution (SD)",
        "type": "Regression & Variance",
        "main_sheet": "ML_15_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Exception (0/1)",
        "risk_col": "Risk Category",
        "value_col": "Order Net Value (INR)"
    },
    {
        "id": "ML_19",
        "file": "ML_19_Price_Variance_Detection_Enriched_Output_Clean.xlsx",
        "name": "Price Variance Detection",
        "domain": "Procurement (MM-PUR)",
        "type": "Anomaly Detection",
        "main_sheet": "ML_19_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Price Variance",
        "risk_col": "Risk Category",
        "value_col": "Price Variance (Amount)"
    },
    {
        "id": "ML_20",
        "file": "ML_20_Duplicate_Invoice_Detection_Enriched_Output.xlsx",
        "name": "Duplicate Invoice Detection",
        "domain": "Accounts Payable (FI-AP)",
        "type": "Duplicate Detection",
        "main_sheet": "ML_20_Output",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Duplicate Invoice",
        "risk_col": "Risk Category",
        "value_col": "PO Net Value (NETWR)"
    },
    {
        "id": "ML_21",
        "file": "ML_21_Material_Master_Data_Quality_Scoring_Enriched_Output.xlsx",
        "name": "Material Master Data Quality Scoring",
        "domain": "Master Data (MDG-M)",
        "type": "Data Quality Scoring",
        "main_sheet": "ML_21_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Material Quality Defect",
        "risk_col": "Risk Category",
        "value_col": "Total Stock Value (SALK3)"
    },
    {
        "id": "ML_22",
        "file": "ML_22_Customer_RFM_Segmentation_Enriched_Output.xlsx",
        "name": "Customer RFM Segmentation",
        "domain": "Sales & Distribution (SD)",
        "type": "Clustering & Churn Risk",
        "main_sheet": "ML_22_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted RFM Exception",
        "risk_col": "Risk Category",
        "value_col": "Total Revenue (INR)"
    },
    {
        "id": "ML_23",
        "file": "ML_23_Vendor_Risk_Segmentation_Enriched_Output.xlsx",
        "name": "Vendor Risk Segmentation",
        "domain": "Procurement (MM-PUR)",
        "type": "Risk Clustering",
        "main_sheet": "ML_23_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Risk Exception",
        "risk_col": "Risk Category",
        "value_col": "Total PO Net Spend (NETWR)"
    },
    {
        "id": "ML_24",
        "file": "ML_24_Material_Auto_Classification_Enriched_Output_Clean.xlsx",
        "name": "Material Auto Classification",
        "domain": "Master Data (MDG-M)",
        "type": "NLP Classification",
        "main_sheet": "ML_24_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Classification Exception",
        "risk_col": "Risk Category",
        "value_col": "Total Stock Value (SALK3)"
    },
    {
        "id": "ML_25",
        "file": "ML_25_Account_Auto_Coding_Enriched_Output.xlsx",
        "name": "Account Auto Coding",
        "domain": "Finance & Accounting (FI-GL)",
        "type": "NLP Account Coding",
        "main_sheet": "ML_25_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Coding Exception",
        "risk_col": "Risk Category",
        "value_col": "Posting Amount (DMBTR)"
    },
    {
        "id": "ML_26",
        "file": "ML_26_Breakdown_Root_Cause_Analysis_Enriched_Output.xlsx",
        "name": "Breakdown Root Cause Analysis",
        "domain": "Plant Maintenance (PM)",
        "type": "NLP Root Cause Analysis",
        "main_sheet": "ML_26_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted Breakdown Exception",
        "risk_col": "Risk Category",
        "value_col": "Total Breakdown Cost (INR)"
    },
    {
        "id": "ML_27",
        "file": "ML_27_RAG_over_SAP_Data_Enriched_Output.xlsx",
        "name": "RAG over SAP Data",
        "domain": "AI & Knowledge Systems",
        "type": "GenAI Grounding & Hallucination",
        "main_sheet": "ML_27_Enriched_Output(Predict)",
        "watchlist_sheet": None,
        "header_row": 6,
        "exception_col": "Predicted RAG Exception",
        "risk_col": "Risk Category",
        "value_col": None
    }
]

print("Config defined for all 17 models.")
