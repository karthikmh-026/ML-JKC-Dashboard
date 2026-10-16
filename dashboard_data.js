window.PORTFOLIO_DATA = {
  "generated_at": "2026-10-09",
  "total_models": 17,
  "total_records": 445000,
  "total_exceptions": 126380,
  "total_financial_exposure_inr": 178632000000.0,
  "models": {
    "ML_04": {
      "id": "ML_04",
      "num": "04",
      "name": "Predictive Maintenance",
      "short_name": "Predictive Maintenance",
      "domain": "Plant Maintenance (PM)",
      "category": "Operations & Maintenance",
      "icon": "Wrench",
      "sap_tables": [
        "AFIH",
        "AFKO",
        "AUFM",
        "IFLOT",
        "EQUI"
      ],
      "total_records": 25000,
      "exceptions_count": 9959,
      "exception_rate_pct": 39.84,
      "financial_exposure_inr": 981900000.0,
      "financial_exposure_cr": 98.19,
      "avg_confidence_score": 0.7004,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.7004 ROC-AUC",
      "risk_distribution": {
        "Critical": 1423,
        "High": 3475,
        "Medium": 5066,
        "Low": 15036
      },
      "category_breakdown": [
        {
          "label": "J.K. Cement  Works, Mangrol",
          "count": 13285
        },
        {
          "label": "J.K. Cement Works Nimbahera",
          "count": 4995
        },
        {
          "label": "JK Cement Works - Panna",
          "count": 2115
        },
        {
          "label": "J.K. Cement Works, Muddapur",
          "count": 1065
        },
        {
          "label": "J.K. White Cement Works ,Gotan",
          "count": 910
        },
        {
          "label": "JK Cement Works - Hamirpur",
          "count": 480
        },
        {
          "label": "J.K. Cement Works Fujairah FZC",
          "count": 415
        }
      ],
      "feature_importance": [
        {
          "feature": "composite_nlp_risk_score",
          "importance": 0.0693,
          "description": "0.5511925460533926"
        },
        {
          "feature": "spare_parts_item_count",
          "importance": 0.0589,
          "description": "0.4686772737621708"
        },
        {
          "feature": "has_spare_parts",
          "importance": 0.0581,
          "description": "0.4624355323697146"
        },
        {
          "feature": "high_spare_cost_flag",
          "importance": 0.055,
          "description": "0.4378141792452624"
        },
        {
          "feature": "is_final_confirmed",
          "importance": 0.0499,
          "description": "0.3971777968004022"
        },
        {
          "feature": "has_confirmations",
          "importance": 0.0495,
          "description": "0.3942627832733998"
        },
        {
          "feature": "nlp_vibration_bearing_flag",
          "importance": 0.0491,
          "description": "0.3904688127692272"
        },
        {
          "feature": "actual_duration_days",
          "importance": 0.0478,
          "description": "0.380778948055963"
        }
      ],
      "model_rankings": [
        {
          "Rank": "#1",
          "Model_Key": "isolation_forest",
          "Model": "Isolation Forest",
          "Accuracy": 0.6574,
          "Precision": 0.5685,
          "Recall": 0.5739,
          "F1-Score": 0.5712,
          "ROC-AUC": 0.7004,
          "PR-AUC": 0.5839,
          "Specificity": 0.7125,
          "True Positives": 1141,
          "False Positives": 866,
          "False Negatives": 847,
          "True Negatives": 2146
        },
        {
          "Rank": "#2",
          "Model_Key": "one_class_svm",
          "Model": "One-Class SVM",
          "Accuracy": 0.5866,
          "Precision": 0.4807,
          "Recall": 0.496,
          "F1-Score": 0.4882,
          "ROC-AUC": 0.5748,
          "PR-AUC": 0.5891,
          "Specificity": 0.6464,
          "True Positives": 986,
          "False Positives": 1065,
          "False Negatives": 1002,
          "True Negatives": 1947
        },
        {
          "Rank": "#3",
          "Model_Key": "kmeans",
          "Model": "K-Means Clustering",
          "Accuracy": 0.5544,
          "Precision": 0.4415,
          "Recall": 0.4557,
          "F1-Score": 0.4485,
          "ROC-AUC": 0.5471,
          "PR-AUC": 0.578,
          "Specificity": 0.6195,
          "True Positives": 906,
          "False Positives": 1146,
          "False Negatives": 1082,
          "True Negatives": 1866
        },
        {
          "Rank": "#4",
          "Model_Key": "lof",
          "Model": "Local Outlier Factor (LOF)",
          "Accuracy": 0.4672,
          "Precision": 0.3392,
          "Recall": 0.3587,
          "F1-Score": 0.3487,
          "ROC-AUC": 0.4585,
          "PR-AUC": 0.3586,
          "Specificity": 0.5388,
          "True Positives": 713,
          "False Positives": 1389,
          "False Negatives": 1275,
          "True Negatives": 1623
        },
        {
          "Rank": "#5",
          "Model_Key": "gmm",
          "Model": "Gaussian Mixture Model (GMM)",
          "Accuracy": 0.4742,
          "Precision": 0.3398,
          "Recall": 0.3421,
          "F1-Score": 0.3409,
          "ROC-AUC": 0.4387,
          "PR-AUC": 0.38,
          "Specificity": 0.5614,
          "True Positives": 680,
          "False Positives": 1321,
          "False Negatives": 1308,
          "True Negatives": 1691
        }
      ],
      "display_columns": [
        "order_number",
        "order_description",
        "plant_name",
        "composite_nlp_risk_score",
        "total_spare_parts_cost",
        "is_equipment_failure_exception",
        "order_type",
        "work_center"
      ],
      "sample_records": [
        {
          "order_number": 600000000,
          "order_description": "Nimbahera user testing golive order",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "ELEC-PPE"
        },
        {
          "order_number": 600000001,
          "order_description": "EE-GENERAL MAINTENANCE WORK APRIL.24",
          "plant_name": "J.K. Cement Works , Gotan",
          "composite_nlp_risk_score": 0.7,
          "total_spare_parts_cost": 13888.96,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "ELEC-WSE"
        },
        {
          "order_number": 600000002,
          "order_description": "Z3M01_Outlet Head liner (3rd&4th Row) re",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.2,
          "total_spare_parts_cost": 580249.53,
          "is_equipment_failure_exception": 1,
          "order_type": "PM10",
          "work_center": "MECH-CM3"
        },
        {
          "order_number": 600000003,
          "order_description": "MECH- 491 BC2 BELT DRUM LAGGING WORK",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL1"
        },
        {
          "order_number": 600000004,
          "order_description": "Compressor 13 maintenance",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.5,
          "total_spare_parts_cost": 49139.09,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-UTL"
        },
        {
          "order_number": 600000005,
          "order_description": "Drop test chute install in 261.BC080",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 43524.55,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL3"
        },
        {
          "order_number": 600000006,
          "order_description": "CM-3 General consumables for Apr.24",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.45,
          "total_spare_parts_cost": 86616.37,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CM3"
        },
        {
          "order_number": 600000007,
          "order_description": "Diesel and Plant Misc April (1)",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 111911.75,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "DEPT-CVL"
        },
        {
          "order_number": 600000008,
          "order_description": "SAFR_CLEANING LINE WORK APR24",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 27354.35,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-UTL"
        },
        {
          "order_number": 600000009,
          "order_description": "Z2J01_ELEVATORTOP & BOTTOM SPROCKET REPL",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CM2"
        },
        {
          "order_number": 600000010,
          "order_description": "General goods issue-Apr-24",
          "plant_name": "J.K. Cement  Works, Mangrol",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 5573.07,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "DEPT-PMC"
        },
        {
          "order_number": 600000011,
          "order_description": "putty packer maintenance",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.45,
          "total_spare_parts_cost": 46376.36,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PUP"
        },
        {
          "order_number": 600000012,
          "order_description": "Goods issue in putty plant section",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 397782.84,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PUP"
        },
        {
          "order_number": 600000013,
          "order_description": "Goods issue in putty plant section",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 521954.85,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PUP"
        },
        {
          "order_number": 600000014,
          "order_description": "Goods issue in crusher section",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 287234.22,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PCR"
        },
        {
          "order_number": 600000015,
          "order_description": "Goods issue in Dol. mill Section",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.45,
          "total_spare_parts_cost": 118815.44,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PDM"
        },
        {
          "order_number": 600000016,
          "order_description": "Goods issue in packer sections",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 18470.47,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PUP"
        },
        {
          "order_number": 600000017,
          "order_description": "Crusher blow bar worn out",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.2,
          "total_spare_parts_cost": 472544.01,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CRU"
        },
        {
          "order_number": 600000018,
          "order_description": "Goods issue in Mixer sections",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 1297.42,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PMX"
        },
        {
          "order_number": 600000019,
          "order_description": "Goods issue in Coarse putty sections",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 1715.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PMX"
        },
        {
          "order_number": 600000020,
          "order_description": "High Casing Vibration_Check by PM CELL",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KM3"
        },
        {
          "order_number": 600000021,
          "order_description": "General Consumables for CM-April 24",
          "plant_name": "JK Cement Works - Hamirpur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CM1"
        },
        {
          "order_number": 600000022,
          "order_description": "Test Notification-Chute Repairing work",
          "plant_name": "J.K. Cement Works ,Balasinor",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CM1"
        },
        {
          "order_number": 600000023,
          "order_description": "526BE600_Elevator MBS Checking work.",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 1470.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "INST-CM4"
        },
        {
          "order_number": 600000024,
          "order_description": " E&I Maintenance in Dolomite Mill Sectio",
          "plant_name": "J.K. White, Katni",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 85.91,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "ELEC-PDM"
        },
        {
          "order_number": 600000025,
          "order_description": "PM CELL General items",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL1"
        },
        {
          "order_number": 600000026,
          "order_description": "Check for RM2 High pinion vibration",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 308.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-RM1"
        },
        {
          "order_number": 600000028,
          "order_description": "Pmcell sparre item April 2024",
          "plant_name": "JK Cement Works - Panna",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "DEPT-PMC"
        },
        {
          "order_number": 600000029,
          "order_description": "561RM100_Mill general maint. April-24",
          "plant_name": "JK Cement Works - Panna",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-CM1"
        },
        {
          "order_number": 600000030,
          "order_description": "Water line work April-24",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 13932.05,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-UTL"
        },
        {
          "order_number": 600000031,
          "order_description": "Hydra F-15",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 34185.19,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-WSE"
        },
        {
          "order_number": 600000032,
          "order_description": "TPS-3D old maintenance",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 46845.2,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-WSE"
        },
        {
          "order_number": 600000033,
          "order_description": "TPS-Vacctruck new maintenance",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 54924.7,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-WSE"
        },
        {
          "order_number": 600000034,
          "order_description": "General Good issue in raw mill",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 115596.09,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "PROD-RM1"
        },
        {
          "order_number": 600000035,
          "order_description": "General Good issue in kiln",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 26641.58,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "PROD-KL1"
        },
        {
          "order_number": 600000036,
          "order_description": "670BC300_Straight Chute Modification",
          "plant_name": "J.K. Cement Works Aligarh",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 1623.59,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PP1"
        },
        {
          "order_number": 600000037,
          "order_description": "641PM100_MAINTENANCE APR-24",
          "plant_name": "J.K. Cement Works Aligarh",
          "composite_nlp_risk_score": 0.7,
          "total_spare_parts_cost": 87527.51,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PP1"
        },
        {
          "order_number": 600000038,
          "order_description": "40VIL-COLONY NO.1 MAINTENANACE WORK",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 318515.87,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "DEPT-CVL"
        },
        {
          "order_number": 600000039,
          "order_description": "civil- plant work april 2024",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 8610.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "DEPT-CVL"
        },
        {
          "order_number": 600000040,
          "order_description": "MUDDAPUR PRD TEST APR2024",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "INST-RM1"
        },
        {
          "order_number": 600000041,
          "order_description": "NBH_loader_no_07_BUCKET_PIN",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-MIN"
        },
        {
          "order_number": 600000042,
          "order_description": "General goods issue April 2024",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.7,
          "total_spare_parts_cost": 353596.68,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL3"
        },
        {
          "order_number": 600000043,
          "order_description": "E&I: Solar systems PM work April-2024",
          "plant_name": "J.K. White, Katni",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "INST-GEN"
        },
        {
          "order_number": 600000044,
          "order_description": "671BC170  Belt found damaged",
          "plant_name": "JK Cement Works - Panna",
          "composite_nlp_risk_score": 0.2,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-PP1"
        },
        {
          "order_number": 600000045,
          "order_description": "General goods issue Apr-24",
          "plant_name": "J.K. Cement Works, Muddapur",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 56746.79,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-RM1"
        },
        {
          "order_number": 600000046,
          "order_description": "GEN. MANTENANCE OF GRINDING APRIL 2024",
          "plant_name": "J.K. Cement  Works, Mangrol",
          "composite_nlp_risk_score": 0.2,
          "total_spare_parts_cost": 15701.65,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "ELEC-CM3"
        },
        {
          "order_number": 600000047,
          "order_description": "APDB installation at mill area",
          "plant_name": "J.K. Cement Works ,Balasinor",
          "composite_nlp_risk_score": 0.2,
          "total_spare_parts_cost": 77799.55,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "ELEC-CM1"
        },
        {
          "order_number": 600000048,
          "order_description": "coal vrm dam ring preparation",
          "plant_name": "J.K. Cement Works Nimbahera",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 19509.01,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL3"
        },
        {
          "order_number": 600000049,
          "order_description": "MECH- 422WP1 WATER MUPM MAINT",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.0,
          "total_spare_parts_cost": 0.0,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KL1"
        },
        {
          "order_number": 600000050,
          "order_description": "MECH- PCM MILL 3 MAINT WORK",
          "plant_name": "J.K. White Cement Works ,Gotan",
          "composite_nlp_risk_score": 0.25,
          "total_spare_parts_cost": 33625.78,
          "is_equipment_failure_exception": 1,
          "order_type": "PM03",
          "work_center": "MECH-KM1"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 6018,
          "fp": 2064,
          "fn": 2457,
          "tn": 14461,
          "precision": 0.745,
          "recall": 0.71,
          "f1": 0.727,
          "accuracy": 0.819
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.31,
            0.357,
            0.4,
            0.44,
            0.478,
            0.515,
            0.551,
            0.585,
            0.619
          ],
          "recall": [
            0.959,
            0.899,
            0.829,
            0.751,
            0.667,
            0.578,
            0.484,
            0.387,
            0.285
          ],
          "f1": [
            0.468,
            0.511,
            0.54,
            0.555,
            0.557,
            0.545,
            0.515,
            0.466,
            0.39
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            5061,
            3227,
            2057,
            1312,
            836,
            533,
            340,
            216,
            138,
            100
          ],
          "exception_count": [
            300,
            468,
            635,
            802,
            969,
            1136,
            1303,
            1471,
            1638,
            1805
          ],
          "total_count": [
            5361,
            3695,
            2692,
            2114,
            1805,
            1669,
            1643,
            1687,
            1776,
            1905
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_05": {
      "id": "ML_05",
      "num": "05",
      "name": "Credit Risk Scoring",
      "short_name": "Credit Risk Scoring",
      "domain": "Finance & AR (FI)",
      "category": "Finance & Spend",
      "icon": "CreditCard",
      "sap_tables": [
        "BSID",
        "BSAD",
        "KNA1",
        "KNKK",
        "BSEG"
      ],
      "total_records": 25000,
      "exceptions_count": 2179,
      "exception_rate_pct": 8.72,
      "financial_exposure_inr": 4065200000.0,
      "financial_exposure_cr": 406.52,
      "avg_confidence_score": 0.8842,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.8842 ROC-AUC",
      "risk_distribution": {
        "Critical": 509,
        "High": 1670,
        "Medium": 22180,
        "Low": 641
      },
      "category_breakdown": [
        {
          "label": "JAIPUR",
          "count": 285
        },
        {
          "label": "INDORE",
          "count": 280
        },
        {
          "label": "PUNE",
          "count": 230
        },
        {
          "label": "UDAIPUR",
          "count": 205
        },
        {
          "label": "DELHI",
          "count": 180
        },
        {
          "label": "JODHPUR",
          "count": 175
        },
        {
          "label": "MEERUT",
          "count": 170
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Customer Default Probability & Credit Risk Scoring:"
        },
        {
          "feature": "solvency_score",
          "importance": 0.8235,
          "description": "(Customer Liquidity & Clearing Health inverse function of clearing delays, overdue balance, and payment velocity)"
        },
        {
          "feature": "credit_risk_index",
          "importance": 0.0698,
          "description": "(Composite Credit Delinquency Index combining overdue ratio, severe days past due >90d, and credit limit strain)"
        },
        {
          "feature": "credit_limit_utilization",
          "importance": 0.0416,
          "description": "(Credit Limit Utilization Ratio of outstanding receivables against authorized limit [KNB1.VLIBB])"
        },
        {
          "feature": "open_ar_log_val",
          "importance": 0.041,
          "description": "(Total Outstanding Exposure Size measuring log1p of active debt balance)"
        },
        {
          "feature": "is_credit_limit_breached",
          "importance": 0.0159,
          "description": "(Binary flag indicating customer receivables currently exceed authorized credit limit)"
        },
        {
          "feature": "unsecured_credit_gap",
          "importance": 0.0067,
          "description": "(Unhedged Debt Gap representing excess balance above credit limit without collateral)"
        },
        {
          "feature": "has_central_posting_block",
          "importance": 0.0004,
          "description": "(SAP Master Posting Block [SPERR in KNA1] triggered by legal action, bankruptcy, or persistent non-payment)"
        }
      ],
      "model_rankings": [
        {
          "USE CASE 5: 5 UNSUPERVISED ML MODELS RANKING & EVALUATION TABLE": "Rank",
          "Unnamed: 1": "Model",
          "Unnamed: 2": "Accuracy",
          "Unnamed: 3": "Precision",
          "Unnamed: 4": "Recall",
          "Unnamed: 5": "F1-Score",
          "Unnamed: 6": "ROC-AUC",
          "Unnamed: 7": "PR-AUC",
          "Unnamed: 8": "Silhouette",
          "Unnamed: 9": "Specificity",
          "Unnamed: 10": "True Positives",
          "Unnamed: 11": "False Positives",
          "Unnamed: 12": "False Negatives",
          "Unnamed: 13": "True Negatives"
        },
        {
          "USE CASE 5: 5 UNSUPERVISED ML MODELS RANKING & EVALUATION TABLE": "#1",
          "Unnamed: 1": "Gaussian Mixture (GMM)",
          "Unnamed: 2": 0.9944,
          "Unnamed: 3": 0.3571,
          "Unnamed: 4": 0.9375,
          "Unnamed: 5": 0.5172,
          "Unnamed: 6": 0.9981,
          "Unnamed: 7": 0.6912,
          "Unnamed: 8": 0.8996,
          "Unnamed: 9": 0.9946,
          "Unnamed: 10": 15,
          "Unnamed: 11": 27,
          "Unnamed: 12": 1,
          "Unnamed: 13": 4957
        },
        {
          "USE CASE 5: 5 UNSUPERVISED ML MODELS RANKING & EVALUATION TABLE": "#2",
          "Unnamed: 1": "Bisecting K-Means",
          "Unnamed: 2": 0.9834,
          "Unnamed: 3": 0.1616,
          "Unnamed: 4": 1,
          "Unnamed: 5": 0.2783,
          "Unnamed: 6": 0.9859,
          "Unnamed: 7": 0.1285,
          "Unnamed: 8": 0.8845,
          "Unnamed: 9": 0.9833,
          "Unnamed: 10": 16,
          "Unnamed: 11": 83,
          "Unnamed: 12": 0,
          "Unnamed: 13": 4901
        },
        {
          "USE CASE 5: 5 UNSUPERVISED ML MODELS RANKING & EVALUATION TABLE": "#3",
          "Unnamed: 1": "K-Means Clustering",
          "Unnamed: 2": 0.9832,
          "Unnamed: 3": 0.16,
          "Unnamed: 4": 1,
          "Unnamed: 5": 0.2759,
          "Unnamed: 6": 0.9859,
          "Unnamed: 7": 0.1285,
          "Unnamed: 8": 0.8846,
          "Unnamed: 9": 0.9831,
          "Unnamed: 10": 16,
          "Unnamed: 11": 84,
          "Unnamed: 12": 0,
          "Unnamed: 13": 4900
        },
        {
          "USE CASE 5: 5 UNSUPERVISED ML MODELS RANKING & EVALUATION TABLE": "#4",
          "Unnamed: 1": "Mini-Batch K-Means",
          "Unnamed: 2": 0.9832,
          "Unnamed: 3": 0.16,
          "Unnamed: 4": 1,
          "Unnamed: 5": 0.2759,
          "Unnamed: 6": 0.9859,
          "Unnamed: 7": 0.1285,
          "Unnamed: 8": 0.8846,
          "Unnamed: 9": 0.9831,
          "Unnamed: 10": 16,
          "Unnamed: 11": 84,
          "Unnamed: 12": 0,
          "Unnamed: 13": 4900
        }
      ],
      "display_columns": [
        "Customer ID",
        "Customer Name",
        "City",
        "Risk Category",
        "Open AR Balance (INR)",
        "Country",
        "Account Group",
        "Credit Limit (INR)"
      ],
      "sample_records": [
        {
          "Customer ID": "20028544",
          "Customer Name": "MAHALAXMI PLYWOOD & BUILDING MATL.",
          "City": "JODHPUR",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20019749",
          "Customer Name": "SATYAM TRADING COMPANY",
          "City": "RAJSAMAND",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -5438.22,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20037429",
          "Customer Name": "HIGHWAY CONSTRUCTION CO. AND AK ASS",
          "City": "ALLAHABAD-RAMBAGH",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20001501",
          "Customer Name": "SHREE SANWARIYA SETH ENTERPRISES",
          "City": "JHADOL",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "230000172",
          "Customer Name": "SHREE TANWAR TRAILOR AND TRANSPORT",
          "City": "NASIRABAD",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20011013",
          "Customer Name": "GIRNAR ENTERPRISES",
          "City": "ETAWAH",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -11174.49,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20020532",
          "Customer Name": "BRAMHANDNAYAK ENTERPRISES",
          "City": "AKKALKOT",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -33690.71,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20014708",
          "Customer Name": "ASHAWAMEDH AGENCIES",
          "City": "ATPADI",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -16835.5,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "1286",
          "Customer Name": "J K CEMENT WORKS   GAHROLI",
          "City": "GAHROLI  NEW DELHI",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 517785.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20032275",
          "Customer Name": "PARVEEN ENTERPRISES",
          "City": "INDRI",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -136.61,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "3077",
          "Customer Name": "J.K. WHITE CEMENT WORKS",
          "City": "AKOLA",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 3274625.58,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20021969",
          "Customer Name": "B  VASANTHA PAI",
          "City": "BADIADUKA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -8892.17,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20006247",
          "Customer Name": "PRANSHI ENTERPRISE",
          "City": "SURAT",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -4168.62,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20013045",
          "Customer Name": "MAA GYATRI BUILDING MATERIAL",
          "City": "MODI",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 96887.77,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20015696",
          "Customer Name": "RAJ CEMENT AGENCIES",
          "City": "MEERUT",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 272875.25,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20006269",
          "Customer Name": "SHIVA TRADERS",
          "City": "MACHIYA KALA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -8591.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "3283",
          "Customer Name": "J.K. WHITE CEMENT WORKS",
          "City": "Sitapur",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 944341.2,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20013276",
          "Customer Name": "LAXMI BROTHERS",
          "City": "PUNE",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 2674749.07,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20032537",
          "Customer Name": "SHREE KRISHNA AGENCY",
          "City": "ALLAHABAD",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20000587",
          "Customer Name": "SHIVAM TRADERS",
          "City": "BABINA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -2308.5,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20003366",
          "Customer Name": "UNIQUE ENTERPRISES",
          "City": "JAMBE",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -68081.85,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20024312",
          "Customer Name": "STANDERD PAINT",
          "City": "MAU",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20010345",
          "Customer Name": "HARI OM CEMENT STORE",
          "City": "HISSAR",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 183284.28,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20000252",
          "Customer Name": "LODHI AND COMPANY",
          "City": "MUNGAOLI",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -6308.44,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20017248",
          "Customer Name": "PAWAN TRADECORP PVT LTD",
          "City": "INDORE",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20017656",
          "Customer Name": "JUNEJA CEMENT SALES",
          "City": "PANIPAT",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -15833.46,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20005559",
          "Customer Name": "SHREE RAM BUILDING MATERIAL",
          "City": "VISNAGAR",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 73818.5,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20009840",
          "Customer Name": "RECYCLING SOLUTIONS PVT  LTD",
          "City": "ANKLESHWAR",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 1679802.02,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "Y1902",
          "Customer Name": "J K CEMENT WORKS   Hamirpur",
          "City": "HAMIRPUR",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 349856.72,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20014993",
          "Customer Name": "DIXIT TRADERS",
          "City": "KANPUR NAGAR",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 144762.23,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20010565",
          "Customer Name": "SREE UDAY CEMENT CENTER",
          "City": "BELLARY",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -270247.38,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20016774",
          "Customer Name": "A M KALLIMANI TRADERS",
          "City": "KUNDGOL",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -12406.08,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "RBLK-79385",
          "Customer Name": "RBLK-FDR-709023979385",
          "City": "NEW DELHI",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 108000000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20015726",
          "Customer Name": "KISHAN TRADING",
          "City": "PATAN",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 55957.28,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20035895",
          "Customer Name": "SUNNY ASSOCIATES AND CONSTRUCTION C",
          "City": "PADRI BAZAR (GRKPUR)",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -100000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20010622",
          "Customer Name": "HONDA MOTORCYCLE AND SCOOTER",
          "City": "KASABA HOBLI",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 1477389.8,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20012752",
          "Customer Name": "JAI GANESH CANACONA STEEL",
          "City": "CANACONA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -25289.5,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20035677",
          "Customer Name": "AMAN TRADERS",
          "City": "PIPRAICH",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -100000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20038376",
          "Customer Name": "SARASWATI ENTERPRISES",
          "City": "AYODHYA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20007425",
          "Customer Name": "CHAUDHARY BUILDERS",
          "City": "MEERUT",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -7253.35,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "6502",
          "Customer Name": "J K CEMENT WORKS   MATHRA I",
          "City": "MATHURA",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 18862787.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20026476",
          "Customer Name": "PORWAL HARDWARE STORE",
          "City": "SIKAR",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": 0.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "3129",
          "Customer Name": "J.K. WHITE CEMENT WORKS",
          "City": "Kanchipuram",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 7699755.26,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20034497",
          "Customer Name": "RAJAHAMSA PAINTS",
          "City": "NANDYAL",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -25000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20032273",
          "Customer Name": "SAT KARTAR CEMENT AGENCY",
          "City": "SADULSHAHAR",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -273.22,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20000556",
          "Customer Name": "T M CHOUDHARI ENTERPRISES",
          "City": "IBRAHIMPUR  BIJAPUR",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -13281.42,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20035142",
          "Customer Name": "SHREE BAJRANG CEMENT AGENCY",
          "City": "LACCHMANGARH",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -200000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20018293",
          "Customer Name": "B K  TRADERS",
          "City": "RAJPUR",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -16605.78,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "20028339",
          "Customer Name": "MEDHA ENTERPRISES",
          "City": "HANAMKONDA",
          "Risk Category": "High Risk / Credit Alert",
          "Open AR Balance (INR)": -550000.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        },
        {
          "Customer ID": "2250",
          "Customer Name": "JK CEMENT LTD   BARAMATI",
          "City": "BARAMATI  PUNE",
          "Risk Category": "Critical Default Risk / Immediate Freeze",
          "Open AR Balance (INR)": 2370118.0,
          "Country": "IN",
          "Account Group": "Standard Customer",
          "Credit Limit (INR)": 0
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 1794,
          "fp": 1790,
          "fn": 551,
          "tn": 20865,
          "precision": 0.501,
          "recall": 0.765,
          "f1": 0.605,
          "accuracy": 0.906
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.391,
            0.451,
            0.505,
            0.556,
            0.604,
            0.65,
            0.695,
            0.738,
            0.781
          ],
          "recall": [
            0.963,
            0.908,
            0.844,
            0.773,
            0.697,
            0.616,
            0.531,
            0.442,
            0.349
          ],
          "f1": [
            0.556,
            0.603,
            0.632,
            0.647,
            0.647,
            0.632,
            0.602,
            0.553,
            0.482
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            7302,
            4656,
            2969,
            1893,
            1207,
            769,
            490,
            312,
            199,
            127
          ],
          "exception_count": [
            89,
            139,
            189,
            239,
            289,
            338,
            388,
            438,
            488,
            538
          ],
          "total_count": [
            7391,
            4795,
            3158,
            2132,
            1496,
            1107,
            878,
            750,
            687,
            665
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_06": {
      "id": "ML_06",
      "num": "06",
      "name": "Slow Moving Inventory Prediction",
      "short_name": "Slow Moving Inventory",
      "domain": "Materials Management (MM)",
      "category": "Supply Chain & Inventory",
      "icon": "Package",
      "sap_tables": [
        "MARC",
        "MARD",
        "MBEW",
        "MSEG",
        "MARA"
      ],
      "total_records": 25000,
      "exceptions_count": 16852,
      "exception_rate_pct": 67.41,
      "financial_exposure_inr": 2855899999.9999995,
      "financial_exposure_cr": 285.59,
      "avg_confidence_score": 0.6381,
      "champion_model": "Mini-Batch K-Means",
      "champion_metric": "0.6381 ROC-AUC",
      "risk_distribution": {
        "Critical": 24529,
        "High": 125,
        "Medium": 266,
        "Low": 80
      },
      "category_breakdown": [
        {
          "label": "J.K. Cement  Works, Mangrol",
          "count": 4050
        },
        {
          "label": "J.K. Cement Works Nimbahera",
          "count": 3235
        },
        {
          "label": "JK Cement Works - Panna",
          "count": 3150
        },
        {
          "label": "J.K. Cement Works, Muddapur",
          "count": 2205
        },
        {
          "label": "J.K. White Cement Works ,Gotan",
          "count": 1195
        },
        {
          "label": "J.K. Cement Works Jharli",
          "count": 690
        },
        {
          "label": "J.K. White, Katni",
          "count": 640
        }
      ],
      "feature_importance": [
        {
          "feature": "Rank",
          "importance": 0,
          "description": "Gini Importance"
        },
        {
          "feature": "#1",
          "importance": 0,
          "description": "0.1923"
        },
        {
          "feature": "#2",
          "importance": 0,
          "description": "0.1303"
        },
        {
          "feature": "#3",
          "importance": 0,
          "description": "0.112"
        },
        {
          "feature": "#4",
          "importance": 0,
          "description": "0.1009"
        },
        {
          "feature": "#5",
          "importance": 0,
          "description": "0.0995"
        },
        {
          "feature": "#6",
          "importance": 0,
          "description": "0.0804"
        },
        {
          "feature": "#7",
          "importance": 0,
          "description": "0.0513"
        }
      ],
      "model_rankings": [
        {
          "Rank": "#1",
          "Model": "Mini-Batch K-Means",
          "Accuracy": 0.789,
          "Precision": 0.8341,
          "Recall": 0.8519,
          "F1-Score": 0.8429,
          "ROC-AUC": 0.6381,
          "PR-AUC": 0.8066,
          "Silhouette": 0.7546,
          "Specificity": 0.6645,
          "True Positives": 2830,
          "False Positives": 563,
          "False Negatives": 492,
          "True Negatives": 1115
        },
        {
          "Rank": "#2",
          "Model": "Gaussian Mixture Model",
          "Accuracy": 0.7644,
          "Precision": 0.8033,
          "Recall": 0.8546,
          "F1-Score": 0.8282,
          "ROC-AUC": 0.5783,
          "PR-AUC": 0.7782,
          "Silhouette": 0.7004,
          "Specificity": 0.5858,
          "True Positives": 2839,
          "False Positives": 695,
          "False Negatives": 483,
          "True Negatives": 983
        },
        {
          "Rank": "#3",
          "Model": "BIRCH",
          "Accuracy": 0.6558,
          "Precision": 0.6911,
          "Recall": 0.8715,
          "F1-Score": 0.7709,
          "ROC-AUC": 0.2287,
          "PR-AUC": 0.6603,
          "Silhouette": 0.969,
          "Specificity": 0.2288,
          "True Positives": 2895,
          "False Positives": 1294,
          "False Negatives": 427,
          "True Negatives": 384
        },
        {
          "Rank": "#4",
          "Model": "K-Means",
          "Accuracy": 0.6554,
          "Precision": 0.6908,
          "Recall": 0.8715,
          "F1-Score": 0.7707,
          "ROC-AUC": 0.2275,
          "PR-AUC": 0.66,
          "Silhouette": 0.9808,
          "Specificity": 0.2277,
          "True Positives": 2895,
          "False Positives": 1296,
          "False Negatives": 427,
          "True Negatives": 382
        },
        {
          "Rank": "#5",
          "Model": "Bisecting K-Means",
          "Accuracy": 0.654,
          "Precision": 0.6896,
          "Recall": 0.8715,
          "F1-Score": 0.7699,
          "ROC-AUC": 0.2233,
          "PR-AUC": 0.6589,
          "Silhouette": 0.7836,
          "Specificity": 0.2235,
          "True Positives": 2895,
          "False Positives": 1303,
          "False Negatives": 427,
          "True Negatives": 375
        }
      ],
      "display_columns": [
        "matnr",
        "material_name",
        "plant_name",
        "probability_of_obsolescence",
        "inventory_risk_category",
        "predicted_slow_moving_exception",
        "plant",
        "material_type"
      ],
      "sample_records": [
        {
          "matnr": "P203553",
          "material_name": null,
          "plant_name": "J.K. CEMENT WORKS, BUXAR",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1919,
          "material_type": "ZPJC"
        },
        {
          "matnr": "120019",
          "material_name": null,
          "plant_name": "J.K. White, Katni",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1025,
          "material_type": "ZFIN"
        },
        {
          "matnr": "631836",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZCON"
        },
        {
          "matnr": "130010",
          "material_name": null,
          "plant_name": "CHENNAI NEW",
          "probability_of_obsolescence": 0.9989,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3327,
          "material_type": "ZFIN"
        },
        {
          "matnr": "86001852",
          "material_name": null,
          "plant_name": "J.K. White, Katni",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1025,
          "material_type": "ZSPA"
        },
        {
          "matnr": "571154",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "571154",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "86001885",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZSPA"
        },
        {
          "matnr": "590030",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "587232",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "I585053",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZIMS"
        },
        {
          "matnr": "623874",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZCON"
        },
        {
          "matnr": "580401",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "580152",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "566765",
          "material_name": null,
          "plant_name": "J.K. Cement Works, Muddapur",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 2001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "579305",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "I578106",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZIMS"
        },
        {
          "matnr": "I508937",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZIMS"
        },
        {
          "matnr": "I533967",
          "material_name": null,
          "plant_name": "J.K. Cement Works, Muddapur",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 2001,
          "material_type": "ZIMS"
        },
        {
          "matnr": "574260",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "P117332",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZPJS"
        },
        {
          "matnr": "589165",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "I578246",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZIMS"
        },
        {
          "matnr": "586324",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "598187",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZSPA"
        },
        {
          "matnr": "120005",
          "material_name": null,
          "plant_name": "SALEM - 2 White Cement",
          "probability_of_obsolescence": 0.9989,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3117,
          "material_type": "ZFIN"
        },
        {
          "matnr": "86004659",
          "material_name": null,
          "plant_name": "J.K. Cement Works ,Balasinor",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1034,
          "material_type": "ZSPA"
        },
        {
          "matnr": "580209",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "587655",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "542249",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "599279",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZSPA"
        },
        {
          "matnr": "I588257",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZIMS"
        },
        {
          "matnr": "130010",
          "material_name": null,
          "plant_name": "KAKINADA",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3330,
          "material_type": "ZFIN"
        },
        {
          "matnr": "630451",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZCON"
        },
        {
          "matnr": "597941",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZSPA"
        },
        {
          "matnr": "600079",
          "material_name": null,
          "plant_name": "J.K. Cement Works, Muddapur",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 2001,
          "material_type": "ZCON"
        },
        {
          "matnr": "583490",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "120005",
          "material_name": null,
          "plant_name": "CHENNAI-2",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3129,
          "material_type": "ZFIN"
        },
        {
          "matnr": "589231",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "130025",
          "material_name": null,
          "plant_name": "IDA BOLLARAM_WHITE",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3154,
          "material_type": "ZFIN"
        },
        {
          "matnr": "86002557",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZSPA"
        },
        {
          "matnr": "558210",
          "material_name": null,
          "plant_name": "J.K. Cement Works Jharli",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1022,
          "material_type": "ZSPA"
        },
        {
          "matnr": "599575",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "130025",
          "material_name": null,
          "plant_name": "KHARMANGHAT - JKWC",
          "probability_of_obsolescence": 0.9989,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3086,
          "material_type": "ZFIN"
        },
        {
          "matnr": "589643",
          "material_name": null,
          "plant_name": "J.K. Cement  Works, Mangrol",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1004,
          "material_type": "ZSPA"
        },
        {
          "matnr": "585642",
          "material_name": null,
          "plant_name": "J.K. Cement Works Nimbahera",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "538014",
          "material_name": null,
          "plant_name": "J.K. Cement Works, Muddapur",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 2001,
          "material_type": "ZSPA"
        },
        {
          "matnr": "130030",
          "material_name": null,
          "plant_name": "IDA BOLLARAM_WHITE",
          "probability_of_obsolescence": 0.9989,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3154,
          "material_type": "ZFIN"
        },
        {
          "matnr": "130010",
          "material_name": null,
          "plant_name": "BHIWANDI NEW 1",
          "probability_of_obsolescence": 0.9989,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 3313,
          "material_type": "ZFIN"
        },
        {
          "matnr": "P11959",
          "material_name": null,
          "plant_name": "JK Cement Works - Panna",
          "probability_of_obsolescence": 0.9988,
          "inventory_risk_category": "Critical Obsolete Risk",
          "predicted_slow_moving_exception": 1,
          "plant": 1901,
          "material_type": "ZPJS"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 10303,
          "fp": 1010,
          "fn": 3382,
          "tn": 10305,
          "precision": 0.911,
          "recall": 0.753,
          "f1": 0.824,
          "accuracy": 0.824
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.372,
            0.43,
            0.482,
            0.53,
            0.576,
            0.62,
            0.663,
            0.704,
            0.744
          ],
          "recall": [
            0.962,
            0.906,
            0.841,
            0.768,
            0.69,
            0.607,
            0.52,
            0.429,
            0.335
          ],
          "f1": [
            0.537,
            0.583,
            0.612,
            0.627,
            0.628,
            0.614,
            0.583,
            0.533,
            0.462
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            3606,
            2299,
            1466,
            935,
            596,
            380,
            242,
            154,
            100,
            100
          ],
          "exception_count": [
            515,
            801,
            1087,
            1373,
            1659,
            1946,
            2232,
            2518,
            2804,
            3090
          ],
          "total_count": [
            4121,
            3100,
            2553,
            2308,
            2255,
            2326,
            2474,
            2672,
            2904,
            3190
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_07": {
      "id": "ML_07",
      "num": "07",
      "name": "Production Order Delay Prediction",
      "short_name": "Production Order Delay",
      "domain": "Production Planning (PP)",
      "category": "Operations & Maintenance",
      "icon": "Clock",
      "sap_tables": [
        "AFKO",
        "AFPO",
        "AFRU",
        "CRHD",
        "RESB"
      ],
      "total_records": 35000,
      "exceptions_count": 31294,
      "exception_rate_pct": 89.41,
      "financial_exposure_inr": 0.0,
      "financial_exposure_cr": 0.0,
      "avg_confidence_score": 0.78,
      "champion_model": "K-Means Clustering",
      "champion_metric": "0.7800 ROC-AUC",
      "risk_distribution": {
        "Critical": 31657,
        "High": 1973,
        "Medium": 1348,
        "Low": 22
      },
      "category_breakdown": [
        {
          "label": "1902",
          "count": 8043
        },
        {
          "label": "1004",
          "count": 6251
        },
        {
          "label": "2001",
          "count": 5082
        },
        {
          "label": "1015",
          "count": 5005
        },
        {
          "label": "1001",
          "count": 3906
        },
        {
          "label": "1006",
          "count": 2310
        },
        {
          "label": "1901",
          "count": 896
        }
      ],
      "feature_importance": [
        {
          "feature": "planned_duration_days",
          "importance": 0.17,
          "description": "(Total planned manufacturing window in days = Basic Finish [GLTRP] minus Basic Start [GSTRP])"
        },
        {
          "feature": "schedule_compression_index",
          "importance": 0.11,
          "description": "(Production load density index = Order Batch Size / Planned Duration Days)"
        },
        {
          "feature": "confirmation_duration_days",
          "importance": 0.1,
          "description": "(Calendar days elapsed between first and final operation confirmations)"
        },
        {
          "feature": "composite_delay_signal",
          "importance": 0.09,
          "description": "(Multi-criteria composite operational risk indicator combining release lag, scrap, and unfulfilled backlog)"
        },
        {
          "feature": "scheduled_vs_basic_slack_days",
          "importance": 0.08,
          "description": "(Scheduling float buffer in days between basic finish and detailed scheduled finish [GLTRS])"
        },
        {
          "feature": "creation_to_start_lead_days",
          "importance": 0.07,
          "description": "(Planning lead buffer in days from order creation [AUFK.ERDAT] to planned start date)"
        },
        {
          "feature": "confirmation_intensity",
          "importance": 0.06,
          "description": "(Confirmation logging velocity per planned manufacturing day)"
        },
        {
          "feature": "plant_encoded",
          "importance": 0.05,
          "description": "(Frequency-weighted encoding of manufacturing facility plant code [AUFK.WERKS])"
        }
      ],
      "model_rankings": [
        {
          "Rank": "#1",
          "Model": "K-Means Clustering",
          "Accuracy": 0.67,
          "Precision": 0.96,
          "Recall": 0.66,
          "F1-Score": 0.78,
          "ROC-AUC": 0.78,
          "PR-AUC": 0.96,
          "Silhouette": 0.81,
          "Specificity": 0.77,
          "True Positives": 4119,
          "False Positives": 168,
          "False Negatives": 2140,
          "True Negatives": 573
        },
        {
          "Rank": "#2",
          "Model": "Bisecting K-Means",
          "Accuracy": 0.67,
          "Precision": 0.96,
          "Recall": 0.66,
          "F1-Score": 0.78,
          "ROC-AUC": 0.78,
          "PR-AUC": 0.96,
          "Silhouette": 0.81,
          "Specificity": 0.77,
          "True Positives": 4119,
          "False Positives": 168,
          "False Negatives": 2140,
          "True Negatives": 573
        },
        {
          "Rank": "#3",
          "Model": "Gaussian Mixture Model",
          "Accuracy": 0.67,
          "Precision": 0.96,
          "Recall": 0.66,
          "F1-Score": 0.78,
          "ROC-AUC": 0.76,
          "PR-AUC": 0.95,
          "Silhouette": 0.51,
          "Specificity": 0.76,
          "True Positives": 4114,
          "False Positives": 175,
          "False Negatives": 2145,
          "True Negatives": 566
        },
        {
          "Rank": "#4",
          "Model": "Mini-Batch K-Means",
          "Accuracy": 0.67,
          "Precision": 0.96,
          "Recall": 0.65,
          "F1-Score": 0.78,
          "ROC-AUC": 0.69,
          "PR-AUC": 0.95,
          "Silhouette": 0.49,
          "Specificity": 0.8,
          "True Positives": 4068,
          "False Positives": 151,
          "False Negatives": 2191,
          "True Negatives": 590
        },
        {
          "Rank": "#5",
          "Model": "BIRCH Clustering",
          "Accuracy": 0.66,
          "Precision": 0.96,
          "Recall": 0.65,
          "F1-Score": 0.77,
          "ROC-AUC": 0.78,
          "PR-AUC": 0.96,
          "Silhouette": 0.81,
          "Specificity": 0.77,
          "True Positives": 4056,
          "False Positives": 167,
          "False Negatives": 2203,
          "True Negatives": 574
        }
      ],
      "display_columns": [
        "order_number",
        "order_description",
        "plant",
        "predicted_delay_probability",
        "delay_risk_tier",
        "is_delayed_exception",
        "order_type",
        "material_number"
      ],
      "sample_records": [
        {
          "order_number": 600153114,
          "order_description": "1Y_STOP_PMR_ PMCC-3 HT Breaker check\n Al",
          "plant": 1004,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148654,
          "order_description": "1Y_ES-PMR_CM6 LRS MD Z6M03",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148653,
          "order_description": "1Y_ES-PMR_CM6 MOTOR CM-6 MD Z6M03",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148652,
          "order_description": "1Y_ES-PMR_CM6 BREAKER-MD Z6M03",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146813,
          "order_description": "1Y-MSD_325.FN400 RM-3 HRP Fan SEPOL",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146796,
          "order_description": "1Y-MSD_315.WF250 Laterite Weigh Feeder",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146794,
          "order_description": "1Y-MSD_315.WF150 Lime stone Weigh Feeder",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146810,
          "order_description": "1Y-MSD_325.SR300 GB RM3HRP Dyn.Separator",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146801,
          "order_description": "1Y-MSD_315.BC650 RM-3 HRP Mill Feed belt",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146799,
          "order_description": "1Y-MSD_315.BC600 GB RM Hopper Dis. Belt",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146808,
          "order_description": "1Y-MSD_325.SR300-DY RM3HRP Dyn.Separator",
          "plant": 1001,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148656,
          "order_description": "6M_IS PMR_Z3S01-VFD SEPERATOR",
          "plant": 1001,
          "predicted_delay_probability": 0.5479,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148685,
          "order_description": "6M_ES-IR Measure CM3 Motor MD Z3M03",
          "plant": 1001,
          "predicted_delay_probability": 0.5479,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148686,
          "order_description": "6M_ES-IR Measure CM3 Motor MD Z3M23",
          "plant": 1001,
          "predicted_delay_probability": 0.5479,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600148655,
          "order_description": "6M_IS PMR_Z3P40-VFD SEPAX BF FAN",
          "plant": 1001,
          "predicted_delay_probability": 0.5479,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600106902,
          "order_description": "WHR electrical Major shutdown",
          "plant": 1003,
          "predicted_delay_probability": 0.5381,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600106908,
          "order_description": "WHR electrical Major shutdown",
          "plant": 1003,
          "predicted_delay_probability": 0.5389,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM03",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146807,
          "order_description": "6M-MS_325.SR300-DY RM3HRP Dyn. Separator",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146814,
          "order_description": "6M-MS_325.SD410 SlideGate PH Fan OL Duct",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600155605,
          "order_description": "LEAK_R1C01_OIL LEAKAGE FROM GBX",
          "plant": 1004,
          "predicted_delay_probability": 0.6677,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM10",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146812,
          "order_description": "6M-MS_325.FN400 RM-3 HRP Fan SEPOL",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146815,
          "order_description": "6M-MS_325.SD410 SlideGate PH Fan OL Duct",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146819,
          "order_description": "6M-MS_325.LD415 Damper at New BH Duct",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146820,
          "order_description": "6M-MS_325.SD415 SlideGate at New BH Duct",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146809,
          "order_description": "6M-MS_325.SR300 GB RM3HRP Dyn. Separator",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146816,
          "order_description": "6M-MS_325.LD412 Damper at PH fan OL Duct",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146818,
          "order_description": "6M-MS_325.LD414 Fresh air Damper-2",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146817,
          "order_description": "6M-MS_325.LD413 Fresh air Damper-1",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146829,
          "order_description": "6M-MS_343.BE010 RM-3 HRP Silo Feed BE",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600146830,
          "order_description": "6M-MS_343.BE010 GB RM3HRP Silo Feed BE",
          "plant": 1001,
          "predicted_delay_probability": 0.5637,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM07",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600158592,
          "order_description": "LEAK_R1J06_GBX INPUT SEAL LEAKAGE",
          "plant": 1004,
          "predicted_delay_probability": 0.9784,
          "delay_risk_tier": "Tier 3: Critical Delay Exception / Past Due",
          "is_delayed_exception": 1,
          "order_type": "PM10",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149049,
          "order_description": "1Y_CIVIL-CM Silo-5 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149051,
          "order_description": "1Y_CIVIL-Fly ash silo Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149039,
          "order_description": "1Y_CIVIL-RM Silo-1 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149043,
          "order_description": "1Y_CIVIL-CF Silo Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600117941,
          "order_description": "LEAK_W1W01_OIL LEAK FROM SUP. ROLLER",
          "plant": 1004,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM10",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149040,
          "order_description": "1Y_CIVIL-RM Silo-2 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149050,
          "order_description": "1Y_CIVIL-CM Silo-6 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149045,
          "order_description": "1Y_CIVIL-CM Silo-1 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149044,
          "order_description": "1Y_CIVIL-Clinker tank Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149042,
          "order_description": "1Y_CIVIL-RM Silo-4 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149048,
          "order_description": "1Y_CIVIL-CM Silo-4 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149047,
          "order_description": "1Y_CIVIL-CM Silo-3 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149041,
          "order_description": "1Y_CIVIL-RM Silo-3 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600149046,
          "order_description": "1Y_CIVIL-CM Silo-2 Inspection PMR",
          "plant": 1001,
          "predicted_delay_probability": 0.7061,
          "delay_risk_tier": "Tier 2: Moderate Delay Risk / Bottlenecked",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600127225,
          "order_description": "VIB_R2M03 gearbox input brg defect",
          "plant": 1004,
          "predicted_delay_probability": 0.5433,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM10",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600156926,
          "order_description": "L11BF040 DP taping point need change",
          "plant": 1901,
          "predicted_delay_probability": 0.9807,
          "delay_risk_tier": "Tier 3: Critical Delay Exception / Past Due",
          "is_delayed_exception": 1,
          "order_type": "PM03",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600102124,
          "order_description": "1Y_MSD_KL1 PREHEATER EXHAUST FAN J1J01",
          "plant": 1004,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600102127,
          "order_description": "1Y_MSD_KL1 DUST TRANSPORT ELEVATOR J1P17",
          "plant": 1004,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        },
        {
          "order_number": 600102126,
          "order_description": "1Y_MSD_KL1 BAG HOUSE FAN J1P09",
          "plant": 1004,
          "predicted_delay_probability": 0.5414,
          "delay_risk_tier": "Tier 1: Low Delay Risk / Minor Variance",
          "is_delayed_exception": 1,
          "order_type": "PM02",
          "material_number": "UNKNOWN"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 22838,
          "fp": 408,
          "fn": 8277,
          "tn": 3477,
          "precision": 0.982,
          "recall": 0.734,
          "f1": 0.84,
          "accuracy": 0.752
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.345,
            0.398,
            0.446,
            0.49,
            0.533,
            0.574,
            0.613,
            0.651,
            0.689
          ],
          "recall": [
            0.961,
            0.903,
            0.835,
            0.761,
            0.68,
            0.594,
            0.504,
            0.41,
            0.313
          ],
          "f1": [
            0.507,
            0.552,
            0.581,
            0.596,
            0.597,
            0.584,
            0.553,
            0.504,
            0.43
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            1216,
            775,
            494,
            315,
            201,
            128,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            1141,
            1776,
            2410,
            3045,
            3679,
            4313,
            4948,
            5582,
            6217,
            6851
          ],
          "total_count": [
            2357,
            2551,
            2904,
            3360,
            3880,
            4441,
            5048,
            5682,
            6317,
            6951
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_08": {
      "id": "ML_08",
      "num": "08",
      "name": "Quality Inspection Failure Prediction",
      "short_name": "Quality Inspection Failure",
      "domain": "Quality Management (QM)",
      "category": "Operations & Maintenance",
      "icon": "Microscope",
      "sap_tables": [
        "QALS",
        "QAVE",
        "QAMV",
        "MARA",
        "LFA1"
      ],
      "total_records": 35000,
      "exceptions_count": 1775,
      "exception_rate_pct": 5.07,
      "financial_exposure_inr": 100314200000.0,
      "financial_exposure_cr": 10031.42,
      "avg_confidence_score": 0.9849,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.9849 ROC-AUC",
      "risk_distribution": {
        "Critical": 303,
        "High": 1476,
        "Medium": 3069,
        "Low": 30152
      },
      "category_breakdown": [
        {
          "label": "1901",
          "count": 4886
        },
        {
          "label": "1015",
          "count": 4396
        },
        {
          "label": "1004",
          "count": 4123
        },
        {
          "label": "1001",
          "count": 3171
        },
        {
          "label": "1006",
          "count": 3094
        },
        {
          "label": "1022",
          "count": 2891
        },
        {
          "label": "2001",
          "count": 2667
        }
      ],
      "feature_importance": [
        {
          "feature": "inspection_lead_days",
          "importance": 0.1847,
          "description": "(Total elapsed days between inspection lot creation and planned finish)"
        },
        {
          "feature": "destroyed_sample_ratio",
          "importance": 0.1107,
          "description": "(Proportion of sample quantity destroyed during testing)"
        },
        {
          "feature": "sample_to_lot_ratio",
          "importance": 0.0992,
          "description": "(Sampling inspection intensity: sample quantity divided by total lot size)"
        },
        {
          "feature": "log_sample_quantity",
          "importance": 0.0905,
          "description": "(Log-stabilized planned sample size QALS-LMENGEZUB)"
        },
        {
          "feature": "scheduled_duration_days",
          "importance": 0.0866,
          "description": "(Duration of planned inspection window: scheduled finish minus scheduled start)"
        },
        {
          "feature": "log_vendor_frequency",
          "importance": 0.0583,
          "description": "(Log of historical inspection lot deliveries received from this vendor)"
        },
        {
          "feature": "log_unit_price",
          "importance": 0.0555,
          "description": "(Log-stabilized unit valuation price from SAP Material Valuation MBEW)"
        },
        {
          "feature": "insp_type_code",
          "importance": 0.0479,
          "description": "(Numeric code representing inspection type: 01 Goods Receipt, 03 In-Process, 08 Transfer)"
        }
      ],
      "model_rankings": [
        {
          "Rank": "#1",
          "Model": "Isolation Forest",
          "Accuracy": 0.9526,
          "Precision": 0.117,
          "Recall": 1.0,
          "F1-Score": 0.2095,
          "ROC-AUC": 0.9849,
          "PR-AUC": 0.22,
          "Specificity": 0.9523,
          "True Positives": 44,
          "False Positives": 332,
          "False Negatives": 0,
          "True Negatives": 6624
        },
        {
          "Rank": "#2",
          "Model": "One-Class SVM",
          "Accuracy": 0.9519,
          "Precision": 0.103,
          "Recall": 0.8636,
          "F1-Score": 0.184,
          "ROC-AUC": 0.9407,
          "PR-AUC": 0.2576,
          "Specificity": 0.9524,
          "True Positives": 38,
          "False Positives": 331,
          "False Negatives": 6,
          "True Negatives": 6625
        },
        {
          "Rank": "#3",
          "Model": "DBSCAN",
          "Accuracy": 0.941,
          "Precision": 0.0422,
          "Recall": 0.3864,
          "F1-Score": 0.0761,
          "ROC-AUC": 0.6905,
          "PR-AUC": 0.2302,
          "Specificity": 0.9445,
          "True Positives": 17,
          "False Positives": 386,
          "False Negatives": 27,
          "True Negatives": 6570
        },
        {
          "Rank": "#4",
          "Model": "Autoencoder",
          "Accuracy": 0.9427,
          "Precision": 0.0411,
          "Recall": 0.3636,
          "F1-Score": 0.0739,
          "ROC-AUC": 0.8869,
          "PR-AUC": 0.1387,
          "Specificity": 0.9464,
          "True Positives": 16,
          "False Positives": 373,
          "False Negatives": 28,
          "True Negatives": 6583
        },
        {
          "Rank": "#5",
          "Model": "Local Outlier Factor",
          "Accuracy": 0.9459,
          "Precision": 0.0386,
          "Recall": 0.3182,
          "F1-Score": 0.0688,
          "ROC-AUC": 0.7032,
          "PR-AUC": 0.0225,
          "Specificity": 0.9498,
          "True Positives": 14,
          "False Positives": 349,
          "False Negatives": 30,
          "True Negatives": 6607
        }
      ],
      "display_columns": [
        "Inspection Lot ID",
        "Material Description",
        "Plant",
        "P(Failure)",
        "Risk Tier",
        "Lot Value (INR)",
        "Predicted Failure (1=Fail)",
        "Insp Type"
      ],
      "sample_records": [
        {
          "Inspection Lot ID": 10000308284,
          "Material Description": "HDPE BAG-SUPER GRADE-NFR",
          "Plant": 1001,
          "P(Failure)": 0.8472,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 510400.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 10000308270,
          "Material Description": "PP BAG- PPC GRADE",
          "Plant": 1001,
          "P(Failure)": 0.8294,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 488500.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 10000308286,
          "Material Description": "PP BAG PREMIUM PPC 50 KG",
          "Plant": 1001,
          "P(Failure)": 0.8322,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 604500.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 10000307792,
          "Material Description": "WHITE CLAY",
          "Plant": 1015,
          "P(Failure)": 0.5864,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 24649.9734,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 30000003901,
          "Material Description": "PACKED CEMENT PREMIUM PPC - PP AD Star",
          "Plant": 1901,
          "P(Failure)": 0.7913,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 221839000.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "03"
        },
        {
          "Inspection Lot ID": 30000003900,
          "Material Description": "PACKED CEMENT PPC,50KG",
          "Plant": 1901,
          "P(Failure)": 0.7492,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 20754400.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "03"
        },
        {
          "Inspection Lot ID": 30000003901,
          "Material Description": "PACKED CEMENT PREMIUM PPC - PP AD Star",
          "Plant": 1901,
          "P(Failure)": 0.7893,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 274918000.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "03"
        },
        {
          "Inspection Lot ID": 30000003900,
          "Material Description": "PACKED CEMENT PPC,50KG",
          "Plant": 1901,
          "P(Failure)": 0.7492,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 20754400.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "03"
        },
        {
          "Inspection Lot ID": 10000308031,
          "Material Description": "DRY FLY ASH",
          "Plant": 1901,
          "P(Failure)": 0.606,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 525441.7672,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 10000308055,
          "Material Description": "QUARTZ SAND",
          "Plant": 1034,
          "P(Failure)": 0.6801,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 53027.52,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 10000308254,
          "Material Description": "DRY FLY ASH",
          "Plant": 1901,
          "P(Failure)": 0.5979,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 343953.26,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "01"
        },
        {
          "Inspection Lot ID": 890000021994,
          "Material Description": "Clinker",
          "Plant": 1004,
          "P(Failure)": 0.7563,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 2259.38,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021938,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1906,
          "P(Failure)": 0.5375,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2706.58,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021998,
          "Material Description": "Bulk Cement OPC,53 Strong Set Grey",
          "Plant": 1004,
          "P(Failure)": 0.5791,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2463.68,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021978,
          "Material Description": "Clinker",
          "Plant": 1001,
          "P(Failure)": 0.742,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 307850.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021979,
          "Material Description": "Clinker",
          "Plant": 1001,
          "P(Failure)": 0.742,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 307850.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021970,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 2001,
          "P(Failure)": 0.7204,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 1850.53,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021980,
          "Material Description": "Clinker",
          "Plant": 1001,
          "P(Failure)": 0.742,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 307850.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021988,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1034,
          "P(Failure)": 0.6042,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 3013.75,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021941,
          "Material Description": "Clinker",
          "Plant": 1906,
          "P(Failure)": 0.5389,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2686.04,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021976,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1001,
          "P(Failure)": 0.5556,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 246127.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021960,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1033,
          "P(Failure)": 0.5505,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2711.92,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021943,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1906,
          "P(Failure)": 0.5375,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2706.58,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021936,
          "Material Description": "BULK CEMENT PREMIUM PPC",
          "Plant": 1906,
          "P(Failure)": 0.5617,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2810.15,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021990,
          "Material Description": "PACKED CEMENT SUPER PROTECT 50 KG",
          "Plant": 1902,
          "P(Failure)": 0.5075,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 3205.46,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021959,
          "Material Description": "Clinker",
          "Plant": 1033,
          "P(Failure)": 0.7613,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 3294.32,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021944,
          "Material Description": "BULK CEMENT PREMIUM PPC",
          "Plant": 1906,
          "P(Failure)": 0.5617,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2810.15,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021964,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1022,
          "P(Failure)": 0.5259,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2576.24,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021997,
          "Material Description": "Bulk Cement, OPC,53 Grade - Grey",
          "Plant": 1004,
          "P(Failure)": 0.5467,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2427.58,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021986,
          "Material Description": "Clinker",
          "Plant": 1034,
          "P(Failure)": 0.6057,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2838.77,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021971,
          "Material Description": "BULK CEMENT PREMIUM PPC",
          "Plant": 2001,
          "P(Failure)": 0.5353,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 1934.69,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021975,
          "Material Description": "Bulk Cement, OPC,43 Grade - Grey",
          "Plant": 1001,
          "P(Failure)": 0.5801,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 313842.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021996,
          "Material Description": "Bulk Cement, OPC,43 Grade - Grey",
          "Plant": 1004,
          "P(Failure)": 0.5375,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2349.82,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021995,
          "Material Description": "Bulk Cement, OPC,43 Grade - Grey",
          "Plant": 1004,
          "P(Failure)": 0.5375,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2349.82,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021992,
          "Material Description": "Clinker",
          "Plant": 1004,
          "P(Failure)": 0.7563,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 2259.38,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021969,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 2001,
          "P(Failure)": 0.5297,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 1850.53,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021863,
          "Material Description": "Clinker",
          "Plant": 1901,
          "P(Failure)": 0.7015,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2063.06,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021977,
          "Material Description": "BULK CEMENT SUPER PROTECT GREY",
          "Plant": 1001,
          "P(Failure)": 0.6522,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 280209.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021999,
          "Material Description": "Bulk Cement OPC,53 FAST SET GREY",
          "Plant": 1004,
          "P(Failure)": 0.5819,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2463.68,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021961,
          "Material Description": "BULK CEMENT PREMIUM PPC",
          "Plant": 1033,
          "P(Failure)": 0.5744,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 3009.19,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021864,
          "Material Description": "Bulk Cement, PPC - Grey",
          "Plant": 1901,
          "P(Failure)": 0.71,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 1811.31,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021984,
          "Material Description": "PACKED CEMENT SUPER PROTECT 50 KG",
          "Plant": 1001,
          "P(Failure)": 0.5413,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 322188.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021984,
          "Material Description": "PACKED CEMENT SUPER PROTECT 50 KG",
          "Plant": 1001,
          "P(Failure)": 0.5399,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 323306.0,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021993,
          "Material Description": "Clinker",
          "Plant": 1004,
          "P(Failure)": 0.7563,
          "Risk Tier": "Critical Failure Risk",
          "Lot Value (INR)": 2259.38,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021968,
          "Material Description": "Bulk Cement, OPC,43 Grade - Grey",
          "Plant": 2001,
          "P(Failure)": 0.526,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2180.63,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021965,
          "Material Description": "BULK CEMENT PREMIUM PPC",
          "Plant": 1022,
          "P(Failure)": 0.6149,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2814.19,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 890000021942,
          "Material Description": "Clinker",
          "Plant": 1906,
          "P(Failure)": 0.5389,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 2686.04,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "ZJCO89"
        },
        {
          "Inspection Lot ID": 80000048085,
          "Material Description": "VENEZUELAN PC",
          "Plant": 1901,
          "P(Failure)": 0.6903,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 625701.6234,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "08"
        },
        {
          "Inspection Lot ID": 80000048095,
          "Material Description": "VENEZUELAN PC",
          "Plant": 1901,
          "P(Failure)": 0.6892,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 630923.4828,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "08"
        },
        {
          "Inspection Lot ID": 80000048002,
          "Material Description": "VENEZUELAN PC",
          "Plant": 1001,
          "P(Failure)": 0.6498,
          "Risk Tier": "High Risk",
          "Lot Value (INR)": 569911.095,
          "Predicted Failure (1=Fail)": 1,
          "Insp Type": "08"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 2442,
          "fp": 2521,
          "fn": 750,
          "tn": 29287,
          "precision": 0.492,
          "recall": 0.765,
          "f1": 0.599,
          "accuracy": 0.907
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.39,
            0.45,
            0.505,
            0.555,
            0.603,
            0.649,
            0.694,
            0.737,
            0.78
          ],
          "recall": [
            0.963,
            0.908,
            0.844,
            0.773,
            0.697,
            0.616,
            0.53,
            0.441,
            0.349
          ],
          "f1": [
            0.555,
            0.602,
            0.631,
            0.646,
            0.647,
            0.632,
            0.601,
            0.552,
            0.482
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            10250,
            6535,
            4167,
            2657,
            1694,
            1080,
            688,
            439,
            280,
            178
          ],
          "exception_count": [
            122,
            189,
            257,
            325,
            393,
            461,
            529,
            596,
            664,
            732
          ],
          "total_count": [
            10372,
            6724,
            4424,
            2982,
            2087,
            1541,
            1217,
            1035,
            944,
            910
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_13": {
      "id": "ML_13",
      "num": "13",
      "name": "Cost Center Spend Forecasting",
      "short_name": "Cost Center Spend",
      "domain": "Controlling & Finance (CO)",
      "category": "Finance & Spend",
      "icon": "BarChart3",
      "sap_tables": [
        "BSEG",
        "SKAT",
        "SKA1",
        "EKKN",
        "AUFK"
      ],
      "total_records": 25000,
      "exceptions_count": 8145,
      "exception_rate_pct": 32.58,
      "financial_exposure_inr": 2138300000.0000002,
      "financial_exposure_cr": 213.83,
      "avg_confidence_score": 0.893,
      "champion_model": "EWMA + Trend Slope Forecast",
      "champion_metric": "0.8930 ROC-AUC",
      "risk_distribution": {
        "Critical": 1940,
        "High": 3360,
        "Medium": 4036,
        "Low": 15664
      },
      "category_breakdown": [
        {
          "label": "HO Kanpur (Grey)",
          "count": 1670
        },
        {
          "label": "J.K. Cement Works Fujairah FZC",
          "count": 1665
        },
        {
          "label": "J.K. White Cement Works ,Gotan",
          "count": 1000
        },
        {
          "label": "JK Cement Works - Panna",
          "count": 915
        },
        {
          "label": "J.K. Cement Works Nimbahera",
          "count": 475
        },
        {
          "label": "NBH. GREY CEMENT (HO)",
          "count": 465
        },
        {
          "label": "J.K White Cement Works (HO)",
          "count": 415
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Cost Center Spend Forecasting & Budget Governance:"
        },
        {
          "feature": "spend_overrun_risk_index",
          "importance": 0.2667,
          "description": "(Composite Departmental Spend Overrun & Forecast Variance Risk Index [0-100], defined as 100 - spend_forecast_stability_score)"
        },
        {
          "feature": "spend_forecast_stability_score",
          "importance": 0.2662,
          "description": "(Composite Cost Center Spend Forecast Stability Score [0-100] combining Time-Series Trend Alignment 42%, Budget Commitment Coverage 32%, and Posting Cadence Regularity 26%)"
        },
        {
          "feature": "timeseries_trend_alignment_score",
          "importance": 0.091,
          "description": "(Normalized Time-Series Trend & EWMA Alignment Score [0-100] measuring proximity of actual cost center spend to EWMA forecast and rolling baseline)"
        },
        {
          "feature": "is_spend_forecast_overrun",
          "importance": 0.0766,
          "description": "(Binary indicator = 1 when transaction or monthly spend exceeds time-series forecast thresholds by >= 2.25x or Z >= 1.85)"
        },
        {
          "feature": "cc_mom_spend_growth_pct",
          "importance": 0.0726,
          "description": "(Month-over-Month percentage growth rate in total departmental spend for the Cost Center KOSTL)"
        },
        {
          "feature": "spend_to_ewma_ratio",
          "importance": 0.0404,
          "description": "(Ratio of actual monthly Cost Center spend to its unsupervised EWMA time-series forecast cc_monthly_actual_spend_inr / cc_ewma_spend_forecast_inr)"
        },
        {
          "feature": "cc_seasonality_index",
          "importance": 0.0378,
          "description": "(Seasonal spend index defined as current month Cost Center spend divided by expanding multi-month rolling mean spend)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Cost Center (KOSTL)",
        "Plant Name (T001W)",
        "Spend Overrun Exception Prob",
        "Risk Category",
        "Predicted Spend Exception",
        "Company Code (BUKRS)",
        "Company Name (BUTXT)",
        "Accounting Doc (BELNR)"
      ],
      "sample_records": [
        {
          "Cost Center (KOSTL)": 101042700,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9627,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072483
        },
        {
          "Cost Center (KOSTL)": 101042700,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9627,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072483
        },
        {
          "Cost Center (KOSTL)": 490142100,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900060401
        },
        {
          "Cost Center (KOSTL)": 490142100,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900060401
        },
        {
          "Cost Center (KOSTL)": 100441000,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030749
        },
        {
          "Cost Center (KOSTL)": 100441000,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030749
        },
        {
          "Cost Center (KOSTL)": 105331102,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 3500,
          "Company Name (BUTXT)": "JK MAXX PAINTS LIMITED",
          "Accounting Doc (BELNR)": 1900000057
        },
        {
          "Cost Center (KOSTL)": 105331102,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 3500,
          "Company Name (BUTXT)": "JK MAXX PAINTS LIMITED",
          "Accounting Doc (BELNR)": 1900000057
        },
        {
          "Cost Center (KOSTL)": 103441000,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030497
        },
        {
          "Cost Center (KOSTL)": 103441000,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030497
        },
        {
          "Cost Center (KOSTL)": 101042123,
          "Plant Name (T001W)": "CMO Delhi",
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030117
        },
        {
          "Cost Center (KOSTL)": 101042123,
          "Plant Name (T001W)": "CMO Delhi",
          "Spend Overrun Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900030117
        },
        {
          "Cost Center (KOSTL)": 410044102,
          "Plant Name (T001W)": "HO-KANPUR(POP)",
          "Spend Overrun Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 8201670749
        },
        {
          "Cost Center (KOSTL)": 700126100,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC",
          "Accounting Doc (BELNR)": 2200003252
        },
        {
          "Cost Center (KOSTL)": 700141300,
          "Plant Name (T001W)": null,
          "Spend Overrun Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC",
          "Accounting Doc (BELNR)": 2200003392
        },
        {
          "Cost Center (KOSTL)": 200131000,
          "Plant Name (T001W)": "J.K. Cement Works, Muddapur",
          "Spend Overrun Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072494
        },
        {
          "Cost Center (KOSTL)": 200131000,
          "Plant Name (T001W)": "J.K. Cement Works, Muddapur",
          "Spend Overrun Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072494
        },
        {
          "Cost Center (KOSTL)": 100133003,
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "Spend Overrun Exception Prob": 0.9623,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 5100046293
        },
        {
          "Cost Center (KOSTL)": 100133003,
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "Spend Overrun Exception Prob": 0.9623,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 5100046293
        },
        {
          "Cost Center (KOSTL)": 410044102,
          "Plant Name (T001W)": "HO-KANPUR(POP)",
          "Spend Overrun Exception Prob": 0.9623,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 8201670749
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 700171999,
          "Plant Name (T001W)": "J.K. Cement Works Fujairah FZC",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC",
          "Accounting Doc (BELNR)": 5000001976
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 700171999,
          "Plant Name (T001W)": "J.K. Cement Works Fujairah FZC",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC",
          "Accounting Doc (BELNR)": 5000002034
        },
        {
          "Cost Center (KOSTL)": 700171999,
          "Plant Name (T001W)": "J.K. Cement Works Fujairah FZC",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC",
          "Accounting Doc (BELNR)": 5000001978
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        },
        {
          "Cost Center (KOSTL)": 190131000,
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "Spend Overrun Exception Prob": 0.9622,
          "Risk Category": "Critical Risk",
          "Predicted Spend Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Accounting Doc (BELNR)": 1900072281
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_14": {
      "id": "ML_14",
      "num": "14",
      "name": "PR to PO Cycle Time Prediction",
      "short_name": "PR to PO Cycle Time",
      "domain": "Procurement (MM-PUR)",
      "category": "Supply Chain & Inventory",
      "icon": "Repeat",
      "sap_tables": [
        "EBAN",
        "EKPO",
        "EKKO",
        "EBKN"
      ],
      "total_records": 25000,
      "exceptions_count": 1273,
      "exception_rate_pct": 5.09,
      "financial_exposure_inr": 37333600000.0,
      "financial_exposure_cr": 3733.36,
      "avg_confidence_score": 0.932,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.9320 ROC-AUC",
      "risk_distribution": {
        "Critical": 1232,
        "High": 1438,
        "Medium": 4332,
        "Low": 17998
      },
      "category_breakdown": [
        {
          "label": "1000",
          "count": 3105
        },
        {
          "label": "1004",
          "count": 2965
        },
        {
          "label": "1001",
          "count": 2470
        },
        {
          "label": "2001",
          "count": 2045
        },
        {
          "label": "1015",
          "count": 1740
        },
        {
          "label": "1901",
          "count": 1730
        },
        {
          "label": "3501",
          "count": 1570
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Procurement Cycle Risk:"
        },
        {
          "feature": "high_value_pr_flag",
          "importance": 0.082,
          "description": "0.081958"
        },
        {
          "feature": "has_release_block",
          "importance": 0.0647,
          "description": "0.064691"
        },
        {
          "feature": "item_category_code",
          "importance": 0.0628,
          "description": "0.062826"
        },
        {
          "feature": "log_pr_item_value",
          "importance": 0.0628,
          "description": "0.062782"
        },
        {
          "feature": "delivery_urgency_ratio",
          "importance": 0.0626,
          "description": "0.062585"
        },
        {
          "feature": "release_state_code",
          "importance": 0.0605,
          "description": "0.060511"
        },
        {
          "feature": "has_assigned_vendor",
          "importance": 0.0563,
          "description": "0.056256"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Plant",
        "Cycle Exception Probability",
        "Risk Category",
        "Requisition Value (INR)",
        "Predicted Exception (0/1)",
        "Company Code",
        "Company Name",
        "Company City"
      ],
      "sample_records": [
        {
          "Plant": 1906,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 2814416313.0237,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 1679649840.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 876227400.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 466519500.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1034,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 465000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 4132,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 421900800.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1902,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 288750000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 277910895.54,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 227800000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1025,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 220650000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 216200000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1902,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 216200000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 7201,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 199956000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 177724803.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1906,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 162150000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 158689080.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 4132,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 158212800.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 145785000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 144275195.48,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1906,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 131800000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 125120000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 123770000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 115400000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1906,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 108100000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1034,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 90000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 90000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 80800000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 76968000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 72800000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 71680000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 69000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 60000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1033,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 54050000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1022,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 53050000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1034,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 50000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 49300000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 48500000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 47184000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 45924000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 40000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 39999950.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 39999950.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 4126,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 38062500.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1907,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 34332226.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 31371376.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 31371376.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 30983700.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1034,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 30000000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 29640000.0,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Cycle Exception Probability": 1.0,
          "Risk Category": "Critical Risk",
          "Requisition Value (INR)": 27833168.74,
          "Predicted Exception (0/1)": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 4693,
          "fp": 1905,
          "fn": 1672,
          "tn": 16730,
          "precision": 0.711,
          "recall": 0.737,
          "f1": 0.724,
          "accuracy": 0.857
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.35,
            0.403,
            0.452,
            0.497,
            0.54,
            0.582,
            0.622,
            0.661,
            0.699
          ],
          "recall": [
            0.961,
            0.903,
            0.836,
            0.762,
            0.682,
            0.597,
            0.507,
            0.414,
            0.317
          ],
          "f1": [
            0.513,
            0.558,
            0.587,
            0.602,
            0.603,
            0.589,
            0.559,
            0.509,
            0.436
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            5855,
            3733,
            2380,
            1517,
            967,
            617,
            393,
            250,
            159,
            102
          ],
          "exception_count": [
            234,
            365,
            495,
            625,
            756,
            886,
            1016,
            1147,
            1277,
            1407
          ],
          "total_count": [
            6089,
            4098,
            2875,
            2142,
            1723,
            1503,
            1409,
            1397,
            1436,
            1509
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_15": {
      "id": "ML_15",
      "num": "15",
      "name": "Order Value Prediction",
      "short_name": "Order Value Prediction",
      "domain": "Sales & Distribution (SD)",
      "category": "Finance & Spend",
      "icon": "DollarSign",
      "sap_tables": [
        "VBAK",
        "VBAP",
        "KNA1",
        "KNVV"
      ],
      "total_records": 25000,
      "exceptions_count": 1205,
      "exception_rate_pct": 4.82,
      "financial_exposure_inr": 2147100000.0,
      "financial_exposure_cr": 214.71,
      "avg_confidence_score": 0.8611,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.8611 ROC-AUC",
      "risk_distribution": {
        "Critical": 125,
        "High": 1082,
        "Medium": 5154,
        "Low": 18639
      },
      "category_breakdown": [
        {
          "label": "2001",
          "count": 1620
        },
        {
          "label": "1001",
          "count": 1140
        },
        {
          "label": "1901",
          "count": 975
        },
        {
          "label": "1022",
          "count": 875
        },
        {
          "label": "1004",
          "count": 850
        },
        {
          "label": "1033",
          "count": 580
        },
        {
          "label": "1906",
          "count": 505
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Order Value Prediction & Exception Risk:"
        },
        {
          "feature": "customer_recency_days",
          "importance": 0.0663,
          "description": "Measures elapsed days since prior customer order. High elapsed recency combined with unexpected order size signals dormant customer churn risk or erratic spot-purchasing."
        },
        {
          "feature": "rejection_flag",
          "importance": 0.0654,
          "description": "Indicator for rejected or cancelled sales orders (ABSTK = C/X). High-value orders rejected by sales managers directly identify distressed or non-compliant customer transactions."
        },
        {
          "feature": "plant_freq",
          "importance": 0.0625,
          "description": "Frequency density of the dispatching manufacturing plant / depot. Deviations from standard supply plants flag cross-regional logistics and supply allocation anomalies."
        },
        {
          "feature": "division_freq",
          "importance": 0.0617,
          "description": "Product division frequency. Captures concentration across Grey Cement, White Cement, Wall Putty, and specialty building products."
        },
        {
          "feature": "total_gross_weight",
          "importance": 0.0475,
          "description": "Total shipment physical weight in kilograms. Discrepancies between order value and weight identify price/density mispricing or haulage overload anomalies."
        },
        {
          "feature": "sales_office_freq",
          "importance": 0.044,
          "description": "Operational density of the regional sales office. Flags anomalous dispatch locations or atypical sales branch transactions."
        },
        {
          "feature": "avg_unit_price",
          "importance": 0.044,
          "description": "Average net price per unit across order line items. Unusually high or low unit pricing indicates incorrect discount condition records or manual price overrides."
        }
      ],
      "model_rankings": [
        {
          "Rank": "#1",
          "Model": "Isolation Forest",
          "model_key": "isolation_forest",
          "Accuracy": 0.8984,
          "Precision": 0.2537,
          "Recall": 0.1278,
          "F1-Score": 0.1699,
          "ROC-AUC": 0.8611,
          "PR-AUC": 0.2545,
          "Specificity": 0.9667
        },
        {
          "Rank": "#2",
          "Model": "One-Class SVM",
          "model_key": "one_class_svm",
          "Accuracy": 0.8902,
          "Precision": 0.1802,
          "Recall": 0.0983,
          "F1-Score": 0.1272,
          "ROC-AUC": 0.412,
          "PR-AUC": 0.1022,
          "Specificity": 0.9604
        },
        {
          "Rank": "#3",
          "Model": "Local Outlier Factor (LOF)",
          "model_key": "lof",
          "Accuracy": 0.887,
          "Precision": 0.1565,
          "Recall": 0.0885,
          "F1-Score": 0.113,
          "ROC-AUC": 0.63,
          "PR-AUC": 0.1223,
          "Specificity": 0.9578
        },
        {
          "Rank": "#4",
          "Model": "Deep Neural Autoencoder",
          "model_key": "autoencoder",
          "Accuracy": 0.8866,
          "Precision": 0.1491,
          "Recall": 0.0835,
          "F1-Score": 0.1071,
          "ROC-AUC": 0.7304,
          "PR-AUC": 0.1455,
          "Specificity": 0.9578
        },
        {
          "Rank": "#5",
          "Model": "DBSCAN",
          "model_key": "dbscan",
          "Accuracy": 0.8854,
          "Precision": 0.1391,
          "Recall": 0.0786,
          "F1-Score": 0.1005,
          "ROC-AUC": 0.7535,
          "PR-AUC": 0.1497,
          "Specificity": 0.9569
        }
      ],
      "display_columns": [
        "Plant (WERKS)",
        "Exception Probability",
        "Risk Category",
        "Order Net Value (INR)",
        "Predicted Exception (0/1)",
        "Sales Order (VBELN)",
        "Order Date (ERDAT)",
        "Customer (KUNNR)"
      ],
      "sample_records": [
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.5555,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1318647.54,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100130306,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20000048
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.6338,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1836914.06,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340078440,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000374
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.7843,
          "Risk Category": "Critical Risk",
          "Order Net Value (INR)": 2738089.84,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080681,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000374
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.6436,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1421875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340079223,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20000629
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.6895,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2500000.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080360,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.5039,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 429230.8,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100134962,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5983,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1065847.05,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135624,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.6358,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2421875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080533,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.7966,
          "Risk Category": "Critical Risk",
          "Order Net Value (INR)": 4843750.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080666,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5098,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 426312.45,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100134920,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.5068,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 428885.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135446,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.6095,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 226677.16,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136202,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.5763,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 876153.06,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136235,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20000784
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.7008,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2500000.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080649,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20000831
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.5922,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 151335.94,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2200002416,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20000831
        },
        {
          "Plant (WERKS)": 1033,
          "Exception Probability": 0.7387,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2265625.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080742,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20001316
        },
        {
          "Plant (WERKS)": 1033,
          "Exception Probability": 0.5388,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 190312.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135980,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20001316
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.7078,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1359375.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100134255,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20001378
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.7167,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 3398437.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080755,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20001378
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.6876,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1359375.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136031,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20001378
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5156,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1096093.74,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080688,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001572
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.6536,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 775000.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135285,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001588
        },
        {
          "Plant (WERKS)": 1907,
          "Exception Probability": 0.6914,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2421875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080193,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001588
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5846,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 570000.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136012,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20001863
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5664,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 926250.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340078951,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20001863
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.6525,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 5850.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2300002127,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001896
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.6083,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 9750.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2300004003,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001896
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5151,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 17000.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2300004378,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20001897
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5391,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1210937.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080599,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20002210
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.5711,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1546875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080637,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20002237
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.6016,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1546875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340079965,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20002237
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5991,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 984375.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136308,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20002319
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5971,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1476562.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340079621,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20002442
        },
        {
          "Plant (WERKS)": 1034,
          "Exception Probability": 0.5565,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1230468.74,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080995,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20003045
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5204,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 576843.75,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135726,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20003048
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5775,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1373437.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340078830,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20003048
        },
        {
          "Plant (WERKS)": 1902,
          "Exception Probability": 0.6429,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1035156.24,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080140,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20003064
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.5196,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 937500.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340077994,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20003253
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.6612,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 816701.36,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136086,
          "Order Date (ERDAT)": "2025-06-19 00:00:00",
          "Customer (KUNNR)": 20003351
        },
        {
          "Plant (WERKS)": 1901,
          "Exception Probability": 0.7916,
          "Risk Category": "Critical Risk",
          "Order Net Value (INR)": 3984375.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080928,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20003351
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.6391,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 4687500.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080627,
          "Order Date (ERDAT)": "2025-06-16 00:00:00",
          "Customer (KUNNR)": 20003539
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.5162,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1476562.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080744,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20003543
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5788,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 468750.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100136335,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20003792
        },
        {
          "Plant (WERKS)": 2001,
          "Exception Probability": 0.5895,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1171875.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080071,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20003792
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.6944,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 428314.38,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100135289,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20003858
        },
        {
          "Plant (WERKS)": 1004,
          "Exception Probability": 0.6656,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 2343750.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340080534,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20003858
        },
        {
          "Plant (WERKS)": 8196,
          "Exception Probability": 0.8444,
          "Risk Category": "Critical Risk",
          "Order Net Value (INR)": 7031250.0,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2350011503,
          "Order Date (ERDAT)": "2025-06-18 00:00:00",
          "Customer (KUNNR)": 20003858
        },
        {
          "Plant (WERKS)": 8196,
          "Exception Probability": 0.6591,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 215109.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2150027340,
          "Order Date (ERDAT)": "2025-06-20 00:00:00",
          "Customer (KUNNR)": 20003858
        },
        {
          "Plant (WERKS)": 1001,
          "Exception Probability": 0.6811,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 1735282.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2100132505,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20004122
        },
        {
          "Plant (WERKS)": 1001,
          "Exception Probability": 0.7238,
          "Risk Category": "High Risk",
          "Order Net Value (INR)": 3130312.5,
          "Predicted Exception (0/1)": 1,
          "Sales Order (VBELN)": 2340078760,
          "Order Date (ERDAT)": "2025-06-17 00:00:00",
          "Customer (KUNNR)": 20004122
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 524,
          "fp": 2042,
          "fn": 166,
          "tn": 22268,
          "precision": 0.204,
          "recall": 0.759,
          "f1": 0.322,
          "accuracy": 0.912
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            7793,
            4969,
            3168,
            2020,
            1288,
            821,
            523,
            333,
            212,
            135
          ],
          "exception_count": [
            50,
            50,
            55,
            69,
            84,
            98,
            113,
            128,
            142,
            157
          ],
          "total_count": [
            7843,
            5019,
            3223,
            2089,
            1372,
            919,
            636,
            461,
            354,
            292
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_19": {
      "id": "ML_19",
      "num": "19",
      "name": "Price Variance Detection",
      "short_name": "Price Variance Detection",
      "domain": "Procurement (MM-PUR)",
      "category": "Supply Chain & Inventory",
      "icon": "TrendingUp",
      "sap_tables": [
        "EKPO",
        "EKKO",
        "A017",
        "KONP",
        "MBEW"
      ],
      "total_records": 25000,
      "exceptions_count": 1263,
      "exception_rate_pct": 5.05,
      "financial_exposure_inr": 17368000000.0,
      "financial_exposure_cr": 1736.8,
      "avg_confidence_score": 0.941,
      "champion_model": "Isolation Forest",
      "champion_metric": "0.9410 ROC-AUC",
      "risk_distribution": {
        "Critical": 454,
        "High": 386,
        "Medium": 423,
        "Low": 23737
      },
      "category_breakdown": [
        {
          "label": "1004",
          "count": 2970
        },
        {
          "label": "7001",
          "count": 2375
        },
        {
          "label": "1001",
          "count": 2325
        },
        {
          "label": "2001",
          "count": 1995
        },
        {
          "label": "1901",
          "count": 1820
        },
        {
          "label": "1015",
          "count": 1515
        },
        {
          "label": "1000",
          "count": 1400
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Price Fairness:"
        },
        {
          "feature": "price_variance_pct",
          "importance": 0.2172,
          "description": "(% Deviation from benchmark reference baseline)"
        },
        {
          "feature": "price_ratio",
          "importance": 0.1919,
          "description": "(Direct multiplier: PO Price / Reference Price)"
        },
        {
          "feature": "contract_variance_pct",
          "importance": 0.1872,
          "description": "(% Deviation from pre-negotiated vendor contract rate)"
        },
        {
          "feature": "log_price_ratio",
          "importance": 0.1439,
          "description": "(Stabilized Logarithmic Price Ratio)"
        },
        {
          "feature": "price_variance_abs",
          "importance": 0.0703,
          "description": "(PO Price - Reference Price absolute currency gap)"
        },
        {
          "feature": "contract_price_diff",
          "importance": 0.0422,
          "description": "(Unit price gap between PO and SAP Info Record contract)"
        },
        {
          "feature": "has_contract_leakage",
          "importance": 0.0386,
          "description": "(1 if contract exists but buyer paid above contract rate)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Plant",
        "Price Variance Probability",
        "Risk Category",
        "Price Variance (Amount)",
        "Predicted Price Variance",
        "Company Code",
        "Company Name",
        "Company City"
      ],
      "sample_records": [
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9978,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 24758963.65,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Price Variance Probability": 0.9957,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 112467.22,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9944,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.28,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9915,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.28,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9905,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 263026.8,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9898,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.27,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9894,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.28,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9891,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.27,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1015,
          "Price Variance Probability": 0.9887,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 1141241.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9884,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.27,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Price Variance Probability": 0.9883,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 612571.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9881,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 30107.27,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9873,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 309100.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Price Variance Probability": 0.9869,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 189800.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9863,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 124750.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9852,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 110000.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9851,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 25144.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9846,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 376418.7,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1022,
          "Price Variance Probability": 0.9838,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 345000.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9836,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 72909.34,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9801,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -8850.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9796,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 118000.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9791,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -400000.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9785,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -31666.67,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9783,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 100000.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9776,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.977,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9766,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9763,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9763,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9746,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -14817.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Price Variance Probability": 0.9738,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Price Variance Probability": 0.9738,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1001,
          "Price Variance Probability": 0.9728,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9727,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9721,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9717,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1906,
          "Price Variance Probability": 0.9714,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 69035.62,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9712,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 56053.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9712,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 53560.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.971,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 19084.2,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9703,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Price Variance Probability": 0.97,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -211896.98,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 2001,
          "Price Variance Probability": 0.9698,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 230.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1000,
          "Price Variance Probability": 0.9697,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 6667.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1022,
          "Price Variance Probability": 0.9697,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1901,
          "Price Variance Probability": 0.9689,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1919,
          "Price Variance Probability": 0.9686,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": -309334.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1004,
          "Price Variance Probability": 0.9684,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        },
        {
          "Plant": 1906,
          "Price Variance Probability": 0.968,
          "Risk Category": "Critical Risk",
          "Price Variance (Amount)": 0.0,
          "Predicted Price Variance": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED",
          "Company City": "Kanpur"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 4796,
          "fp": 1565,
          "fn": 1519,
          "tn": 17120,
          "precision": 0.754,
          "recall": 0.759,
          "f1": 0.757,
          "accuracy": 0.877
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.544,
            0.591,
            0.636,
            0.68,
            0.722,
            0.764
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.343
          ],
          "f1": [
            0.547,
            0.594,
            0.623,
            0.638,
            0.638,
            0.624,
            0.593,
            0.544,
            0.473
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            5992,
            3820,
            2436,
            1553,
            990,
            631,
            402,
            256,
            163,
            104
          ],
          "exception_count": [
            239,
            373,
            506,
            639,
            772,
            905,
            1039,
            1172,
            1305,
            1438
          ],
          "total_count": [
            6231,
            4193,
            2942,
            2192,
            1762,
            1536,
            1441,
            1428,
            1468,
            1542
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_20": {
      "id": "ML_20",
      "num": "20",
      "name": "Duplicate Invoice Detection",
      "short_name": "Duplicate Invoice Detection",
      "domain": "Accounts Payable (FI-AP)",
      "category": "Finance & Spend",
      "icon": "FileStack",
      "sap_tables": [
        "RBKP",
        "RSEG",
        "BKPF",
        "BSEG",
        "LFA1"
      ],
      "total_records": 25000,
      "exceptions_count": 1256,
      "exception_rate_pct": 5.02,
      "financial_exposure_inr": 4652800000.0,
      "financial_exposure_cr": 465.28,
      "avg_confidence_score": 0.956,
      "champion_model": "Composite Multi-Key Collision & Tree",
      "champion_metric": "0.9560 ROC-AUC",
      "risk_distribution": {
        "Critical": 458,
        "High": 602,
        "Medium": 196,
        "Low": 23744
      },
      "category_breakdown": [
        {
          "label": "1001",
          "count": 8570
        },
        {
          "label": "2001",
          "count": 2510
        },
        {
          "label": "1015",
          "count": 2120
        },
        {
          "label": "1000",
          "count": 1835
        },
        {
          "label": "1901",
          "count": 1450
        },
        {
          "label": "1006",
          "count": 1385
        },
        {
          "label": "1004",
          "count": 1140
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Duplicate Payment Risk:"
        },
        {
          "feature": "dup_similarity_index",
          "importance": 0.3227,
          "description": "(Composite multi-key duplicate collision score across Vendor, Reference, Amount, Date & PO)"
        },
        {
          "feature": "vendor_amt_date_count",
          "importance": 0.2434,
          "description": "(Count of invoices with identical Vendor + Gross Amount RMWWR + Invoice Date BLDAT)"
        },
        {
          "feature": "is_same_vendor_amt_date",
          "importance": 0.1379,
          "description": "(1 if multiple invoices share the exact same Vendor, Gross Amount, and Invoice Date)"
        },
        {
          "feature": "vendor_mat_amt_count",
          "importance": 0.0471,
          "description": "(Frequency of identical Vendor + Material MATNR + Gross Amount combination)"
        },
        {
          "feature": "vendor_exact_amt_count",
          "importance": 0.0386,
          "description": "(Historical frequency of identical Gross Invoice Amount billed by the same Vendor)"
        },
        {
          "feature": "po_item_exact_amt_count",
          "importance": 0.0322,
          "description": "(Count of invoices billing the exact same PO Line EBELN/EBELP for the same Item Amount)"
        },
        {
          "feature": "norm_vendor_ref_count",
          "importance": 0.0219,
          "description": "(Frequency of identical Vendor + alphanumeric-normalized Reference Number)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "PO Number (EBELN)",
        "Plant",
        "Duplicate Invoice Probability",
        "Risk Category",
        "PO Net Value (NETWR)",
        "Predicted Duplicate Invoice",
        "Company Code",
        "Company Name"
      ],
      "sample_records": [
        {
          "PO Number (EBELN)": 6400002028,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9793,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 4660000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002028,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9793,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 4660000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000157,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9764,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 40941040.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000158,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9761,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 20470520.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000159,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9754,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 10235260.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000155,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9713,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 7133628.22,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 5400000989,
          "Plant": 1000,
          "Duplicate Invoice Probability": 0.9687,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 2513300.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100033130,
          "Plant": 5011,
          "Duplicate Invoice Probability": 0.9657,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 12800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000143,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9636,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 41672080.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000144,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9636,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 41672080.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000140,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9634,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 40438400.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000145,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9633,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 41672080.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000141,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9613,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 40438400.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4500000139,
          "Plant": 6008,
          "Duplicate Invoice Probability": 0.9596,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 40438400.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100034150,
          "Plant": 2001,
          "Duplicate Invoice Probability": 0.9595,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 350000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100034150,
          "Plant": 2001,
          "Duplicate Invoice Probability": 0.9595,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 350000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100037508,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9594,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 289000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100037508,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9594,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 289000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002014,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9578,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1382500.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002014,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9578,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1382500.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400001966,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.957,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 592800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400001966,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.957,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 592800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036795,
          "Plant": 1034,
          "Duplicate Invoice Probability": 0.9517,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036795,
          "Plant": 1034,
          "Duplicate Invoice Probability": 0.9517,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036795,
          "Plant": 1034,
          "Duplicate Invoice Probability": 0.95,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036795,
          "Plant": 1034,
          "Duplicate Invoice Probability": 0.95,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038199,
          "Plant": 3267,
          "Duplicate Invoice Probability": 0.9477,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 4812.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038199,
          "Plant": 3267,
          "Duplicate Invoice Probability": 0.9477,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 4812.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100035957,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9463,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 10800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100035957,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9463,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 10800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100037724,
          "Plant": 2001,
          "Duplicate Invoice Probability": 0.9457,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1950000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4300001023,
          "Plant": 1004,
          "Duplicate Invoice Probability": 0.9449,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 47500.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4300001023,
          "Plant": 1004,
          "Duplicate Invoice Probability": 0.9449,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 47500.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038467,
          "Plant": 2001,
          "Duplicate Invoice Probability": 0.9445,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30528.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038467,
          "Plant": 2001,
          "Duplicate Invoice Probability": 0.9445,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 30528.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100033130,
          "Plant": 5011,
          "Duplicate Invoice Probability": 0.9426,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 12800.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038195,
          "Plant": 3267,
          "Duplicate Invoice Probability": 0.9416,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 98934.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038195,
          "Plant": 3267,
          "Duplicate Invoice Probability": 0.9416,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 98934.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9415,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1183000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9415,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1183000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100038477,
          "Plant": 1015,
          "Duplicate Invoice Probability": 0.9396,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1200.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9381,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1183000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9381,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 1183000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100037062,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9366,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 240.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100037062,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9366,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 240.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036079,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9361,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 320.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 4100036079,
          "Plant": 1901,
          "Duplicate Invoice Probability": 0.9361,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 320.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 5400002007,
          "Plant": 1000,
          "Duplicate Invoice Probability": 0.9356,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 104000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9356,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 156000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "PO Number (EBELN)": 6400002044,
          "Plant": 1919,
          "Duplicate Invoice Probability": 0.9356,
          "Risk Category": "Critical Risk",
          "PO Net Value (NETWR)": 156000.0,
          "Predicted Duplicate Invoice": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 4768,
          "fp": 1572,
          "fn": 1512,
          "tn": 17148,
          "precision": 0.752,
          "recall": 0.759,
          "f1": 0.756,
          "accuracy": 0.877
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            6001,
            3826,
            2440,
            1555,
            992,
            632,
            403,
            257,
            163,
            104
          ],
          "exception_count": [
            238,
            370,
            503,
            635,
            768,
            900,
            1033,
            1165,
            1297,
            1430
          ],
          "total_count": [
            6239,
            4196,
            2943,
            2190,
            1760,
            1532,
            1436,
            1422,
            1460,
            1534
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_21": {
      "id": "ML_21",
      "num": "21",
      "name": "Material Master Data Quality Scoring",
      "short_name": "Material Data Quality",
      "domain": "Master Data Governance (MDG)",
      "category": "Master Data & AI/NLP",
      "icon": "Database",
      "sap_tables": [
        "MARA",
        "MAKT",
        "MARC",
        "MBEW"
      ],
      "total_records": 25000,
      "exceptions_count": 1265,
      "exception_rate_pct": 5.06,
      "financial_exposure_inr": 3595299999.9999995,
      "financial_exposure_cr": 359.53,
      "avg_confidence_score": 0.925,
      "champion_model": "Surrogate Quality Scoring Tree",
      "champion_metric": "0.9250 ROC-AUC",
      "risk_distribution": {
        "Critical": 197,
        "High": 793,
        "Medium": 275,
        "Low": 23735
      },
      "category_breakdown": [
        {
          "label": "1001",
          "count": 7865
        },
        {
          "label": "1004",
          "count": 3175
        },
        {
          "label": "3004",
          "count": 2550
        },
        {
          "label": "1006",
          "count": 2120
        },
        {
          "label": "7001",
          "count": 1645
        },
        {
          "label": "1015",
          "count": 1025
        },
        {
          "label": "1901",
          "count": 940
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Material Master Data Quality Risk:"
        },
        {
          "feature": "mdq_defect_index",
          "importance": 0.3317,
          "description": "(Composite multi-view Material Master Data Quality Defect Score [0-100] across MARA, MARC, MBEW & MAKT)"
        },
        {
          "feature": "mdq_health_score",
          "importance": 0.3249,
          "description": "(Overall Material Master Data Quality Health Score [0-100], defined as 100 - mdq_defect_index)"
        },
        {
          "feature": "is_missing_purchasing_group",
          "importance": 0.079,
          "description": "(1 if Externally Procured / Spare / Raw Material is missing Purchasing Group MARC-EKGRP)"
        },
        {
          "feature": "is_mrp_governance_incomplete",
          "importance": 0.0482,
          "description": "(1 if MRP Type MARC-DISMM is blank, or active MRP Type lacks MRP Controller DISPO / Procurement Type BESKZ)"
        },
        {
          "feature": "desc_char_length",
          "importance": 0.0383,
          "description": "(Character length of Material Description MAKT-MAKTX measuring descriptive specificity)"
        },
        {
          "feature": "is_missing_weight_spec",
          "importance": 0.0228,
          "description": "(1 if Physical Goods Material is missing Gross Weight MARA-BRGEW, Net Weight MARA-NTGEW, or Weight Unit GEWEI)"
        },
        {
          "feature": "missing_critical_fields_cnt",
          "importance": 0.0216,
          "description": "(Total count of unpopulated mandatory governance attributes across Basic, MRP, Purchasing & Accounting views)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Material Description (MAKTX)",
        "Plant (WERKS)",
        "Material Quality Anomaly Probability",
        "Risk Category",
        "Total Stock Value (SALK3)",
        "Predicted Material Quality Defect",
        "Company Code",
        "Company Name"
      ],
      "sample_records": [
        {
          "Material Description (MAKTX)": "PERFUME",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9888,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU THINNER HGLOSSY 2L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9856,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOOD AMORE PU THINNER HGLOSSY 1L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9841,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU MEDIUM THINNER 1L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9813,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU MEDIUM THINNER 4L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.981,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "SERVER",
          "Plant (WERKS)": 1000,
          "Material Quality Anomaly Probability": 0.9801,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU THINNER HGLOSSY 0.5L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9777,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JK profix GYC11",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.977,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 120.96,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  BA PVA",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.9759,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 692.5,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  BA AR",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.9733,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 130.5,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  SLS 11",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.973,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 124.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  SRA 22",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.9728,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 1332.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  BA SBR",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.9696,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 1522.8,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "INJ.POLYBION-2ML",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9677,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKPROFIX -  CRM 11",
          "Plant (WERKS)": 7001,
          "Material Quality Anomaly Probability": 0.9661,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "BATTERY BUY BACK",
          "Plant (WERKS)": 1006,
          "Material Quality Anomaly Probability": 0.9551,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "AUDIOMETER",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9541,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "HIGH SPEED DIESEL",
          "Plant (WERKS)": 5001,
          "Material Quality Anomaly Probability": 0.9516,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Power-WHR",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.948,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 4908579.42,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "SPIROMETRY MOUTH PIECE- RMS HELIOS 401",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9457,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Switches",
          "Plant (WERKS)": 1901,
          "Material Quality Anomaly Probability": 0.9362,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "SUPPORT",
          "Plant (WERKS)": 1901,
          "Material Quality Anomaly Probability": 0.9362,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Bulk Cement,OPC 43 Strong Set GREY",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9331,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": -5158591.84,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE ADV PU CLR SEALER RSN 20KG",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9314,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "TYRE (OLD & USED)",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9303,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU CLR MATT10 RESIN 20L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9301,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE ADV PU(H)CLR SLR/MAT TC 10",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9268,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "PACKED CEMENT COMPOSITE 50 KG-MUDHOL",
          "Plant (WERKS)": 1142,
          "Material Quality Anomaly Probability": 0.9266,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU WHITEFILLER RESIN 20KG",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9249,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 1190661.86,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JK UNVR STAINER YELLOW OXIDE 200 ML",
          "Plant (WERKS)": 3156,
          "Material Quality Anomaly Probability": 0.924,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 7075.2,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU (H) CLR SER /MATT TC 2L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.924,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 59126.26,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Clinker",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9218,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 580078996.66,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE ADV PU CLR SEALER COMB 1.5",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9214,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 35350.5,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Bulk Cement, PPC - Grey",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9212,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": -2777333.99,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU (H)CLR /WHITE HGLOSS4L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9201,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 409415.68,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "BRIKUFF LS",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9194,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "A TO Z  SYRUP",
          "Plant (WERKS)": 1015,
          "Material Quality Anomaly Probability": 0.9188,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "CUVETTE CUP FOR ULTRA-200 ANALYZER",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9186,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Bulk Cement OPC,53 Strong Set Grey",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9177,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": -3851495.59,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "HDL ERBA EM200",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9166,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "Steam",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.916,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JKC WOODAMORE PU THINNER HGLOSSY 10L",
          "Plant (WERKS)": 3322,
          "Material Quality Anomaly Probability": 0.9151,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "UREA ERBA EM200",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9145,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "SGOT ERBA EM200",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9145,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "SGPT ERBA EM200",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9145,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "BRIKUFF-DX SYRUP",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9139,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "GI EARTHING FLAT, 50X6 MM",
          "Plant (WERKS)": 1901,
          "Material Quality Anomaly Probability": 0.9134,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "HBA1C ERBA EM200",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.9128,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "JAROSITE",
          "Plant (WERKS)": 1001,
          "Material Quality Anomaly Probability": 0.9121,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 51.51,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        },
        {
          "Material Description (MAKTX)": "ERBA AUTO WASH KIT",
          "Plant (WERKS)": 1004,
          "Material Quality Anomaly Probability": 0.912,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Material Quality Defect": 1,
          "Company Code": 1000,
          "Company Name": "J.K. CEMENT LIMITED"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 4802,
          "fp": 1569,
          "fn": 1523,
          "tn": 17106,
          "precision": 0.754,
          "recall": 0.759,
          "f1": 0.756,
          "accuracy": 0.876
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            5987,
            3817,
            2434,
            1552,
            989,
            631,
            402,
            256,
            163,
            104
          ],
          "exception_count": [
            240,
            373,
            506,
            640,
            773,
            907,
            1040,
            1173,
            1307,
            1440
          ],
          "total_count": [
            6227,
            4190,
            2940,
            2192,
            1762,
            1538,
            1442,
            1429,
            1470,
            1544
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_22": {
      "id": "ML_22",
      "num": "22",
      "name": "Customer RFM Segmentation",
      "short_name": "Customer RFM Segmentation",
      "domain": "Sales & Distribution (SD)",
      "category": "Finance & Spend",
      "icon": "Users",
      "sap_tables": [
        "KNA1",
        "KNVV",
        "VBAK",
        "BSAD"
      ],
      "total_records": 25000,
      "exceptions_count": 10696,
      "exception_rate_pct": 42.78,
      "financial_exposure_inr": 0.0,
      "financial_exposure_cr": 0.0,
      "avg_confidence_score": 0.887,
      "champion_model": "RFM Quantile & K-Means Engine",
      "champion_metric": "0.8870 ROC-AUC",
      "risk_distribution": {
        "Critical": 9675,
        "High": 1274,
        "Medium": 408,
        "Low": 13643
      },
      "category_breakdown": [
        {
          "label": "3",
          "count": 25000
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Customer RFM Segmentation & Value Risk:"
        },
        {
          "feature": "rfm_churn_risk_index",
          "importance": 0.1325,
          "description": "(Customer RFM Churn & Dormancy Risk Index [0-100], defined as 100 - rfm_composite_score)"
        },
        {
          "feature": "rfm_composite_score",
          "importance": 0.13,
          "description": "(Composite Customer RFM Behavioral Value Score [0-100] combining Recency 30%, Frequency 35%, and Monetary Value 35%)"
        },
        {
          "feature": "log_monetary_value",
          "importance": 0.0973,
          "description": "(Log-stabilized total customer monetary value ln(1 + total_billed_net_value))"
        },
        {
          "feature": "customer_tenure_days",
          "importance": 0.0801,
          "description": "(Total customer relationship tenure in days from earliest KNA1-ERDAT / first billing date to snapshot date)"
        },
        {
          "feature": "sales_org_monetary_zscore",
          "importance": 0.0779,
          "description": "(Standard deviations of customer log monetary value relative to peers in the same Sales Organization VKORG)"
        },
        {
          "feature": "recency_score_norm",
          "importance": 0.0557,
          "description": "(Normalized Customer Recency Score [0-100] decaying exponentially with days since last commercial activity)"
        },
        {
          "feature": "frequency_score_norm",
          "importance": 0.0549,
          "description": "(Normalized Customer Purchase Frequency Score [0-100] scaled on log billing & order count relative to 99th percentile)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Customer Name (NAME1)",
        "ML Cluster ID",
        "Customer RFM Risk Probability",
        "Risk Category",
        "Total Monetary Net Value (NETWR)",
        "Predicted RFM Exception",
        "Company Code (BUKRS)",
        "Company Name (BUTXT)"
      ],
      "sample_records": [
        {
          "Customer Name (NAME1)": "NEVAL KUMAR LIME CO.",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "NESTLE INDIA LIMITED",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "NESTLE INDIA LIMITED",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "LUNAR EXPORTS PRIVATE LIMITED",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "THREE M PAPER MFG CO PVT LTD",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "PRASHANT PLYWOOD AND HARDWARE",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "AJIT PAINTS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "Zahoor & Co",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SURENDRA INFRASTRUCTURE PVT LTD",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "FORESIGHT INFRATECH PVT. LTD.",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "MANISH KUMAR JAIN CONTRACTOR",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "GOODWILL STRUCTURES PRIVATE LIMITED",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "BUDDHADEV MAITY",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "D.R. BUILDESTATE PVT. LTD.",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "MANOJ BISWAS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "ANURAG AND SONS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "BANWARI SINGHAL THEKEDAR",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "Tirupati Reality And Developers",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SHIVRAJ VENTURE",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "YOGESH ENTERPRISES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "LION INDUSTRIES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "NEW MALIK TRADERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "NISHA LIME COMPANY",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "JAIN IMPEX",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "THE MISHRA HARDWARE",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "NATIONAL LIME MANUFACTURES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SUPRIYA COLOUR WORLD",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "BANSAL SONS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "AMIT CONTRACTOR",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SRI MUTHUMATHI BUILDERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "S.RAHMATTULAH",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "RAJ BUILDER",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "ABINAYA TRADERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SWASTIK TILES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "DATTATREY ENTERPRISES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "ASHISH ENTERPRISES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "B.S. BUILDERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "LAKHAN LAL GUPTA",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "S S DEVELOPERS & CONTRACTORS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "HINDUSTAN PAINTS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SUNDERAM BUILDHOME PRIVATE LIMITED",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "KARE ONN PAINT INDUSTRIES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "JOY MAA KALI RCM PUC",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SUNRISE BUILDERS AND DEVELOPERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "DEVASHREE CONSTRUCTIONS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SABINA ENTERPRISES",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SRI SAI ARCADE DEVELOPERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SANJAY ENTERPRISES NIWARI",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "AGA TRADERS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Customer Name (NAME1)": "SUPRIYA PAINTS",
          "ML Cluster ID": 3,
          "Customer RFM Risk Probability": 0.9626,
          "Risk Category": "Critical Risk",
          "Total Monetary Net Value (NETWR)": 0,
          "Predicted RFM Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_23": {
      "id": "ML_23",
      "num": "23",
      "name": "Vendor Risk Segmentation",
      "short_name": "Vendor Risk Segmentation",
      "domain": "Procurement & SCM (MM)",
      "category": "Supply Chain & Inventory",
      "icon": "Truck",
      "sap_tables": [
        "LFA1",
        "LFB1",
        "EKKO",
        "EKET",
        "BSIK"
      ],
      "total_records": 25000,
      "exceptions_count": 11671,
      "exception_rate_pct": 46.68,
      "financial_exposure_inr": 30099999.999999996,
      "financial_exposure_cr": 3.01,
      "avg_confidence_score": 0.871,
      "champion_model": "Vendor Composite Risk Tree",
      "champion_metric": "0.8710 ROC-AUC",
      "risk_distribution": {
        "Critical": 11021,
        "High": 8962,
        "Medium": 238,
        "Low": 4779
      },
      "category_breakdown": [
        {
          "label": "3",
          "count": 25000
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Vendor Risk Segmentation & Reliability:"
        },
        {
          "feature": "vendor_reliability_score",
          "importance": 0.191,
          "description": "(Composite Vendor Reliability Score [0-100] combining Delivery Reliability 38%, Invoice Compliance 34%, and Quality/Governance 28%)"
        },
        {
          "feature": "quality_governance_score",
          "importance": 0.166,
          "description": "(Normalized Quality & Master Data Governance Score [0-100] incorporating QALS lot acceptance, statutory tax/dup-check compliance, and block flags)"
        },
        {
          "feature": "vendor_risk_index",
          "importance": 0.1255,
          "description": "(Composite Vendor Risk Index [0-100], defined as 100 - vendor_reliability_score measuring overall supply and compliance risk)"
        },
        {
          "feature": "delivery_reliability_score",
          "importance": 0.1197,
          "description": "(Normalized Delivery & PO Fulfillment Reliability Score [0-100] based on PO completion, activity cadence, deletion rate, and return rate)"
        },
        {
          "feature": "recency_effective_days",
          "importance": 0.1058,
          "description": "(Minimum elapsed days since last procurement touchpoint across EKKO purchase orders, RBKP invoices, and BSIK AP postings)"
        },
        {
          "feature": "active_procurement_span_days",
          "importance": 0.0893,
          "description": "(Active procurement lifespan in days between earliest PO/Invoice and most recent PO/Invoice)"
        },
        {
          "feature": "invoice_compliance_score",
          "importance": 0.0604,
          "description": "(Normalized Invoice & Payment Compliance Score [0-100] penalizing MRM payment blocks, invoice reversals, and unplanned delivery costs)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Vendor Name (NAME1)",
        "ML Cluster ID",
        "Vendor Risk Probability",
        "Risk Category",
        "Total PO Net Spend (NETWR)",
        "Predicted Risk Exception",
        "Company Code (BUKRS)",
        "Company Name (BUTXT)"
      ],
      "sample_records": [
        {
          "Vendor Name (NAME1)": "Sadakat  Khan",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "MOHSIN  KHAN",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "KAMALKISHOR  KUSHAVAHA",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Vinod   Saini",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Nikhil Kumar  Chauhan",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Yagyas   Sharma",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Rakesh  Rakesh",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "AKASH  SO SHIV SHANK",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "SAMIRSHAYASINSHAFAKI",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Umesh Kumar Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr  DNYANESHWAR VISH",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Puneet",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Surendra Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr  ROBIN  S/O SURAJ",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Upendra   Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "VINOD BAIRWA",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "ALSHAMEEM S",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mohan   Chand",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Daya Ram Meghwal",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "GUDDU S/O KESHAV PAR",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "MANOJ ARYA",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mohammad  Irasad",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Md Tabrez Mian",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "LAKSHMIKANTH T L",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "DINESH",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Manish   kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Vipan  Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "KAMLESH KUMAR",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "AKSHAY Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "SHIVAKUMAR M",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "KRISHNA CHANDRA BHAK",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Saddam Husain",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "PATHLAVATH THUKYA NA",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr  AVISHKAR SINGH S",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mohammad Gul Faraj   Alam",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Siddharth  Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Suraj  Kumar Choudhary",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Kamrul   Mirza",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr  BUDHI PRAKASH  B",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Kapil",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "GAURAV KUSHWAH SO RA",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "kummari  ramaiah",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Pawan  Kumar",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Meraj Ali",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Hamid  Ali",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr. Dev Singh",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Mr MANGAL SINGH SAR",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Ganesh  Bairwa",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "Suraj  Kumar Mandal",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Vendor Name (NAME1)": "AkashThakur",
          "ML Cluster ID": 3,
          "Vendor Risk Probability": 0.962,
          "Risk Category": "Critical Risk",
          "Total PO Net Spend (NETWR)": 0,
          "Predicted Risk Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_24": {
      "id": "ML_24",
      "num": "24",
      "name": "Material Auto Classification",
      "short_name": "Material Auto Classification",
      "domain": "Master Data Governance (MDG)",
      "category": "Master Data & AI/NLP",
      "icon": "Tags",
      "sap_tables": [
        "MARA",
        "MAKT",
        "T023T"
      ],
      "total_records": 25000,
      "exceptions_count": 5762,
      "exception_rate_pct": 23.05,
      "financial_exposure_inr": 968900000.0,
      "financial_exposure_cr": 96.89,
      "avg_confidence_score": 0.835,
      "champion_model": "NLP TF-IDF + Logistic Ensemble",
      "champion_metric": "0.8350 ROC-AUC",
      "risk_distribution": {
        "Critical": 2296,
        "High": 2213,
        "Medium": 4288,
        "Low": 16203
      },
      "category_breakdown": [
        {
          "label": "1001",
          "count": 13865
        },
        {
          "label": "1004",
          "count": 5955
        },
        {
          "label": "3006",
          "count": 1050
        },
        {
          "label": "1901",
          "count": 910
        },
        {
          "label": "1015",
          "count": 605
        },
        {
          "label": "7001",
          "count": 595
        },
        {
          "label": "1006",
          "count": 505
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Material Auto Classification & Taxonomy:"
        },
        {
          "feature": "nlp_misclassification_risk_index",
          "importance": 0.2708,
          "description": "(Composite Material Misclassification & Ambiguity Risk Index [0-100], defined as 100 - nlp_classification_confidence_score)"
        },
        {
          "feature": "nlp_classification_confidence_score",
          "importance": 0.2593,
          "description": "(Composite NLP Material Auto-Classification Confidence Score [0-100] combining Text Clarity 34%, Semantic Confidence 36%, and Taxonomy Alignment 30%)"
        },
        {
          "feature": "text_clarity_score",
          "importance": 0.073,
          "description": "(Normalized Material Description Clarity & Specification Completeness Score [0-100] from MAKT-MAKTX length, word count, dimensional specs, and TF-IDF richness)"
        },
        {
          "feature": "semantic_confidence_score",
          "importance": 0.0714,
          "description": "(Normalized NLP Semantic Domain Classification Confidence [0-100] measuring dominant taxonomy affinity and category margin)"
        },
        {
          "feature": "desc_word_count",
          "importance": 0.0537,
          "description": "(Count of distinct alphanumeric word tokens in SAP Material Description MAKT-MAKTX)"
        },
        {
          "feature": "is_nlp_mtart_conflict",
          "importance": 0.0437,
          "description": "(Binary indicator = 1 when NLP semantic domain extracted from MAKTX conflicts with assigned SAP Material Type MARA-MTART)"
        },
        {
          "feature": "taxonomy_alignment_score",
          "importance": 0.0361,
          "description": "(Normalized Master Taxonomy Alignment Score [0-100] measuring agreement between NLP-inferred class from MAKTX and SAP MTART/MATKL/EKPO-MATKL)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Material Number (MATNR)",
        "Material Description (MAKTX)",
        "Plant (WERKS)",
        "Classification Exception Prob",
        "Risk Category",
        "Total Stock Value (SALK3)",
        "Predicted Classification Exception",
        "Company Code (BUKRS)"
      ],
      "sample_records": [
        {
          "Material Number (MATNR)": "540244",
          "Material Description (MAKTX)": "SHRINK DISC",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9623,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 14700.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "86010302",
          "Material Description (MAKTX)": "TO BE USE LATER",
          "Plant (WERKS)": 1901,
          "Classification Exception Prob": 0.9619,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 6700.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "572978",
          "Material Description (MAKTX)": "WEAR PLATE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 115200.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "572981",
          "Material Description (MAKTX)": "WEAR PLATE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 32400.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "572979",
          "Material Description (MAKTX)": "WEAR PLATE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 18090.8,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "572980",
          "Material Description (MAKTX)": "WEAR PLATE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 13375.04,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "596174",
          "Material Description (MAKTX)": "CHAIN LINK",
          "Plant (WERKS)": 1004,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "632613",
          "Material Description (MAKTX)": "DIRECTION CONTROL VALVE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 13982.5,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "630326",
          "Material Description (MAKTX)": "DIRECTION CONTROL VALVE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9615,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 73800.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "540991",
          "Material Description (MAKTX)": "PLATE ORIFICE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9609,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 4457.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "507365",
          "Material Description (MAKTX)": "PLATE ORIFICE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9609,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 472.91,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "507362",
          "Material Description (MAKTX)": "PLATE ORIFICE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9609,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 401.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "507363",
          "Material Description (MAKTX)": "PLATE ORIFICE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9609,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 401.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "507364",
          "Material Description (MAKTX)": "PLATE ORIFICE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9609,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 401.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573089",
          "Material Description (MAKTX)": "FOUNDATION BOLT",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9603,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "520962",
          "Material Description (MAKTX)": "TURCIDE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9602,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "400038",
          "Material Description (MAKTX)": "FLF 1 KG",
          "Plant (WERKS)": 1015,
          "Classification Exception Prob": 0.9601,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 7588707.32,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "400037",
          "Material Description (MAKTX)": "FLF 5 KG",
          "Plant (WERKS)": 1015,
          "Classification Exception Prob": 0.9601,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 4970225.71,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "509500",
          "Material Description (MAKTX)": "WASHER PLAIN",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9601,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "509505",
          "Material Description (MAKTX)": "WASHER PLAIN",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9601,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "F620587",
          "Material Description (MAKTX)": "UNION UPVC",
          "Plant (WERKS)": 1015,
          "Classification Exception Prob": 0.9595,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "F620627",
          "Material Description (MAKTX)": "UNION UPVC",
          "Plant (WERKS)": 1015,
          "Classification Exception Prob": 0.9595,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "509495",
          "Material Description (MAKTX)": "WASHER PLAIN",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9593,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "509490",
          "Material Description (MAKTX)": "WASHER PLAIN",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9593,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "622581",
          "Material Description (MAKTX)": "NON RETURN VALVE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9591,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "520961",
          "Material Description (MAKTX)": "TURCIDE",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9588,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "588085",
          "Material Description (MAKTX)": "FOUNDATION BOLT",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9587,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "588086",
          "Material Description (MAKTX)": "FOUNDATION BOLT",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9587,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "588087",
          "Material Description (MAKTX)": "FOUNDATION BOLT",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9587,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "588088",
          "Material Description (MAKTX)": "FOUNDATION BOLT",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9587,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "555736",
          "Material Description (MAKTX)": "SHELL",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9586,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "508328",
          "Material Description (MAKTX)": "LIFTER HRCS",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9584,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 219473.1,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "508326",
          "Material Description (MAKTX)": "LIFTER HRCS",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9584,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "508327",
          "Material Description (MAKTX)": "LIFTER HRCS",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9584,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "508329",
          "Material Description (MAKTX)": "LIFTER HRCS",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9584,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602508",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 780.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602511",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 110.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602510",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 100.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602507",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 128.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602506",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 112.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "602509",
          "Material Description (MAKTX)": "PLUG M.S./G.I.",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9579,
          "Risk Category": "High Risk",
          "Total Stock Value (SALK3)": 80.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "539945",
          "Material Description (MAKTX)": "NIPPLE BLEED",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9576,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "539946",
          "Material Description (MAKTX)": "NIPPLE BLEED",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.9576,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573170",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 2092.5,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "572999",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573007",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573016",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573047",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573067",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        },
        {
          "Material Number (MATNR)": "573093",
          "Material Description (MAKTX)": "LOCK WASHER",
          "Plant (WERKS)": 1001,
          "Classification Exception Prob": 0.957,
          "Risk Category": "Critical Risk",
          "Total Stock Value (SALK3)": 0.0,
          "Predicted Classification Exception": 1,
          "Company Code (BUKRS)": 1000
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_25": {
      "id": "ML_25",
      "num": "25",
      "name": "Account Auto Coding",
      "short_name": "Account Auto Coding",
      "domain": "Finance & Accounting (FI-GL)",
      "category": "Master Data & AI/NLP",
      "icon": "BookOpen",
      "sap_tables": [
        "BSEG",
        "BKPF",
        "SKA1",
        "SKAT"
      ],
      "total_records": 25000,
      "exceptions_count": 9541,
      "exception_rate_pct": 38.16,
      "financial_exposure_inr": 1559900000.0,
      "financial_exposure_cr": 155.99,
      "avg_confidence_score": 0.864,
      "champion_model": "Text & CoA Alignment Classifier",
      "champion_metric": "0.8640 ROC-AUC",
      "risk_distribution": {
        "Critical": 9589,
        "High": 569,
        "Medium": 309,
        "Low": 14533
      },
      "category_breakdown": [
        {
          "label": "1000",
          "count": 25000
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On GL Account Auto Coding & CoA Governance:"
        },
        {
          "feature": "nlp_miscoding_risk_index",
          "importance": 0.1405,
          "description": "(Composite G/L Account Miscoding & Ambiguity Risk Index [0-100], defined as 100 - nlp_coding_confidence_score)"
        },
        {
          "feature": "nlp_coding_confidence_score",
          "importance": 0.1162,
          "description": "(Composite NLP G/L Account Auto-Coding Confidence Score [0-100] combining Text Clarity 34%, Semantic GL Confidence 36%, and CoA Alignment 30%)"
        },
        {
          "feature": "svd_semantic_comp_1",
          "importance": 0.1105,
          "description": "(1st Latent Semantic Analysis TruncatedSVD component of the TF-IDF transaction text matrix)"
        },
        {
          "feature": "svd_semantic_comp_2",
          "importance": 0.1036,
          "description": "(2nd Latent Semantic Analysis TruncatedSVD component separating freight/handling narrations from plant/overhead postings)"
        },
        {
          "feature": "tfidf_semantic_energy",
          "importance": 0.0913,
          "description": "(L1 norm of sublinear TF-IDF n-gram activations measuring semantic information density of BSEG-SGTXT)"
        },
        {
          "feature": "coa_alignment_score",
          "importance": 0.0694,
          "description": "(Normalized Chart of Accounts Alignment Score [0-100] measuring agreement between NLP-inferred G/L from BSEG-SGTXT and posted HKONT/KTOKS/KOSTL)"
        },
        {
          "feature": "text_clarity_score",
          "importance": 0.0553,
          "description": "(Normalized Transaction Text Clarity & Narration Completeness Score [0-100] from BSEG-SGTXT length, word count, accounting refs, and TF-IDF richness)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Company Code (BUKRS)",
        "Coding Exception Prob",
        "Risk Category",
        "Cost Center (KOSTL)",
        "Predicted Coding Exception",
        "Company Name (BUTXT)",
        "Document Number (BELNR)",
        "Fiscal Year (GJAHR)"
      ],
      "sample_records": [
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 190122999.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 190122999.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 191042000.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 101042111.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 190111000.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 191042002.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 191042001.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426441,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 191042029.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 190111000.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 101042038.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424372,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": 190121102.0,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201424377,
          "Fiscal Year (GJAHR)": 2025
        },
        {
          "Company Code (BUKRS)": 1000,
          "Coding Exception Prob": 0.9592,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTL)": null,
          "Predicted Coding Exception": 1,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Document Number (BELNR)": 8201426336,
          "Fiscal Year (GJAHR)": 2025
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_26": {
      "id": "ML_26",
      "num": "26",
      "name": "Breakdown Root Cause Analysis",
      "short_name": "Breakdown Root Cause",
      "domain": "Plant Maintenance (PM)",
      "category": "Operations & Maintenance",
      "icon": "Activity",
      "sap_tables": [
        "QMEL",
        "QMFE",
        "QMAKT",
        "ILOA"
      ],
      "total_records": 25000,
      "exceptions_count": 6269,
      "exception_rate_pct": 25.08,
      "financial_exposure_inr": 284000000.0,
      "financial_exposure_cr": 28.4,
      "avg_confidence_score": 0.812,
      "champion_model": "NLP Diagnostics & Severity Classifier",
      "champion_metric": "0.8120 ROC-AUC",
      "risk_distribution": {
        "Critical": 3719,
        "High": 3559,
        "Medium": 4788,
        "Low": 12934
      },
      "category_breakdown": [
        {
          "label": "1015",
          "count": 5750
        },
        {
          "label": "1004",
          "count": 4370
        },
        {
          "label": "1901",
          "count": 2795
        },
        {
          "label": "1908",
          "count": 2045
        },
        {
          "label": "1902",
          "count": 2010
        },
        {
          "label": "1001",
          "count": 1725
        },
        {
          "label": "2001",
          "count": 1535
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On Breakdown Root Cause Extraction & PM Governance:"
        },
        {
          "feature": "breakdown_severity_risk_index",
          "importance": 0.2901,
          "description": "(Composite Breakdown & Unverified Root-Cause Severity Risk Index [0-100], defined as 100 - nlp_rca_confidence_score)"
        },
        {
          "feature": "nlp_rca_confidence_score",
          "importance": 0.2668,
          "description": "(Composite NLP Breakdown Root Cause Extraction Confidence Score [0-100] combining Diagnostic Clarity 34%, Root-Cause Specificity 36%, and PM Execution Alignment 30%)"
        },
        {
          "feature": "rca_semantic_specificity_score",
          "importance": 0.0907,
          "description": "(Normalized NLP Root-Cause Semantic Specificity Score [0-100] measuring dominant failure-mode affinity and category margin)"
        },
        {
          "feature": "conf_text_char_length",
          "importance": 0.0841,
          "description": "(Total character length of SAP Maintenance Order Confirmation Text AFRU-LTXA1 capturing technician root-cause remarks)"
        },
        {
          "feature": "text_diagnostic_clarity_score",
          "importance": 0.0698,
          "description": "(Normalized Maintenance Text Diagnostic Clarity Score [0-100] from AUFK-KTEXT and AFRU-LTXA1 length, word density, and equipment tag specificity)"
        },
        {
          "feature": "pm_execution_alignment_score",
          "importance": 0.0564,
          "description": "(Normalized SAP Plant Maintenance Execution & Work-Center Alignment Score [0-100] measuring TECO completion, confirmation logging, and VAPLZ discipline match)"
        },
        {
          "feature": "tfidf_active_ngrams",
          "importance": 0.0252,
          "description": "(Number of non-zero TF-IDF unigram and bigram features activated by the combined maintenance text corpus)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Maintenance Order (AUFNR)",
        "Plant (WERKS)",
        "Breakdown Exception Prob",
        "Risk Category",
        "Cost Center (KOSTV)",
        "Predicted Breakdown Exception",
        "Company Code (BUKRS)",
        "Company Name (BUTXT)"
      ],
      "sample_records": [
        {
          "Maintenance Order (AUFNR)": 600003230,
          "Plant (WERKS)": 2001,
          "Breakdown Exception Prob": 0.9627,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 200135011.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600010110,
          "Plant (WERKS)": 1908,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190811114.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600003790,
          "Plant (WERKS)": 1001,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100121105.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600128314,
          "Plant (WERKS)": 2001,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 200126000.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600049299,
          "Plant (WERKS)": 1907,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190716002.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600019644,
          "Plant (WERKS)": 7001,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 700121103.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC"
        },
        {
          "Maintenance Order (AUFNR)": 600019649,
          "Plant (WERKS)": 7001,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 700121103.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC"
        },
        {
          "Maintenance Order (AUFNR)": 600019648,
          "Plant (WERKS)": 7001,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 700121103.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 7001,
          "Company Name (BUTXT)": "J.K.CEMENT Works Fuj FZC"
        },
        {
          "Maintenance Order (AUFNR)": 600055335,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190114112.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600000069,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514240.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600226374,
          "Plant (WERKS)": 1033,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 103315101.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600005460,
          "Plant (WERKS)": 1902,
          "Breakdown Exception Prob": 0.9626,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190215601.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600007666,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": null,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600011055,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190127102.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600008556,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190121113.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600016840,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190121113.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600207447,
          "Plant (WERKS)": 1907,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190715001.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600000129,
          "Plant (WERKS)": 1001,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100121105.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600027672,
          "Plant (WERKS)": 1902,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190215601.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600024214,
          "Plant (WERKS)": 1025,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 102512110.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600004315,
          "Plant (WERKS)": 1001,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100121105.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600017827,
          "Plant (WERKS)": 1001,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100121105.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600005646,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190121117.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600028761,
          "Plant (WERKS)": 1901,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 190121107.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006078,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101513210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006079,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101513210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006095,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006096,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006102,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006143,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101515210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006145,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101515210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006168,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101516210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006183,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517311.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006185,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517311.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006206,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517211.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006223,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101513210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006231,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517507.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006234,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517507.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006257,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006279,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101517507.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006306,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006537,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514320.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006547,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514320.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600012705,
          "Plant (WERKS)": 1004,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100421101.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600015511,
          "Plant (WERKS)": 1001,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 100121105.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600027780,
          "Plant (WERKS)": 1033,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 103341000.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006069,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101513210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006097,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006101,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101514310.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        },
        {
          "Maintenance Order (AUFNR)": 600006152,
          "Plant (WERKS)": 1015,
          "Breakdown Exception Prob": 0.9625,
          "Risk Category": "Critical Risk",
          "Cost Center (KOSTV)": 101516210.0,
          "Predicted Breakdown Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    },
    "ML_27": {
      "id": "ML_27",
      "num": "27",
      "name": "RAG over SAP Data",
      "short_name": "RAG over SAP Data",
      "domain": "GenAI & Knowledge Retrieval",
      "category": "Master Data & AI/NLP",
      "icon": "Bot",
      "sap_tables": [
        "STXH",
        "STXL",
        "CDPOS",
        "CDHDR",
        "HANA_DOCS"
      ],
      "total_records": 25000,
      "exceptions_count": 5975,
      "exception_rate_pct": 23.9,
      "financial_exposure_inr": 336800000.0,
      "financial_exposure_cr": 33.68,
      "avg_confidence_score": 0.829,
      "champion_model": "Grounding & Hallucination Guardrail Engine",
      "champion_metric": "0.8290 ROC-AUC",
      "risk_distribution": {
        "Critical": 569,
        "High": 6266,
        "Medium": 1810,
        "Low": 16355
      },
      "category_breakdown": [
        {
          "label": "1001",
          "count": 4535
        },
        {
          "label": "1015",
          "count": 4385
        },
        {
          "label": "2001",
          "count": 3550
        },
        {
          "label": "CORP",
          "count": 3345
        },
        {
          "label": "1004",
          "count": 2290
        },
        {
          "label": "1901",
          "count": 1940
        },
        {
          "label": "1003",
          "count": 720
        }
      ],
      "feature_importance": [
        {
          "feature": "feature",
          "importance": 0,
          "description": "Direct Mathematical Influence On SAP RAG Semantic Retrieval & Hallucination Governance:"
        },
        {
          "feature": "rag_grounding_confidence_score",
          "importance": 0.2137,
          "description": "(Composite SAP RAG Grounding Confidence Score [0-100] combining Chunk Semantic Richness 34%, Schema Grounding Completeness 36%, and Query Retrieval Specificity 30%)"
        },
        {
          "feature": "rag_hallucination_risk_index",
          "importance": 0.1985,
          "description": "(Composite RAG Hallucination & Low-Grounding Exception Risk Index [0-100], defined as 100 - rag_grounding_confidence_score)"
        },
        {
          "feature": "secondary_context_char_length",
          "importance": 0.0892,
          "description": "(Character length of joined relational master context: SKAT-TXT50 G/L text, LFA1/KNA1 partner name, AFRU-LTXA1 confirmation, or DD04T-SCRTEXT_L)"
        },
        {
          "feature": "chunk_semantic_richness_score",
          "importance": 0.0855,
          "description": "(Normalized SAP Knowledge Chunk Lexical & Semantic Richness Score [0-100] measuring text length, unique vocabulary, secondary context, and TF-IDF energy)"
        },
        {
          "feature": "query_retrieval_specificity_score",
          "importance": 0.0825,
          "description": "(Normalized Natural Language Query Retrieval Specificity Score [0-100] measuring dominant SAP domain intent affinity, margin, and vector cosine similarity)"
        },
        {
          "feature": "relational_join_enrichment_Depth",
          "importance": 0.0339,
          "description": "(Weighted relational join enrichment depth [0-5] measuring successful resolution of SKAT, LFA1, KNA1, AFRU, and cost object joins)"
        },
        {
          "feature": "chunk_total_token_count",
          "importance": 0.0335,
          "description": "(Total count of alphanumeric word tokens across the combined SAP RAG knowledge chunk)"
        }
      ],
      "model_rankings": [],
      "display_columns": [
        "Plant (WERKS)",
        "RAG Exception Prob",
        "Risk Category",
        "Predicted RAG Exception",
        "Company Code (BUKRS)",
        "Company Name (BUTXT)",
        "Plant Name (T001W)",
        "SAP Module"
      ],
      "sample_records": [
        {
          "Plant (WERKS)": "1001",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1001",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9626,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1001",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1001",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works Nimbahera",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9625,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1004",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "Critical Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Mangrol",
          "SAP Module": "MM-P2P"
        },
        {
          "Plant (WERKS)": "2001",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Muddapur",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "2001",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works, Muddapur",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9624,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "1901",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "JK Cement Works - Panna",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1033",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. Cement Works Aligarh",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "CORP",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "Corporate / Multi-Plant",
          "SAP Module": "BASIS-DDIC"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        },
        {
          "Plant (WERKS)": "1015",
          "RAG Exception Prob": 0.9623,
          "Risk Category": "High Risk",
          "Predicted RAG Exception": 1,
          "Company Code (BUKRS)": 1000,
          "Company Name (BUTXT)": "J.K. CEMENT LIMITED",
          "Plant Name (T001W)": "J.K. White Cement Works ,Gotan",
          "SAP Module": "PM-MAINT"
        }
      ],
      "advanced_ml": {
        "confusion_matrix": {
          "tp": 18980,
          "fp": 0,
          "fn": 6020,
          "tn": 0,
          "precision": 1.0,
          "recall": 0.759,
          "f1": 0.863,
          "accuracy": 0.759
        },
        "threshold_curve": {
          "thresholds": [
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9
          ],
          "precision": [
            0.382,
            0.441,
            0.494,
            0.543,
            0.59,
            0.635,
            0.679,
            0.722,
            0.763
          ],
          "recall": [
            0.962,
            0.907,
            0.842,
            0.771,
            0.694,
            0.612,
            0.526,
            0.436,
            0.342
          ],
          "f1": [
            0.547,
            0.593,
            0.622,
            0.637,
            0.638,
            0.623,
            0.593,
            0.543,
            0.472
          ]
        },
        "probability_distribution": {
          "bins": [
            "0.0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9"
          ],
          "clean_count": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
          ],
          "exception_count": [
            949,
            1476,
            2003,
            2530,
            3057,
            3585,
            4112,
            4639,
            5166,
            5694
          ],
          "total_count": [
            1049,
            1576,
            2103,
            2630,
            3157,
            3685,
            4212,
            4739,
            5266,
            5794
          ]
        },
        "calibration_curve": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "predicted": [
            0.92,
            0.835,
            0.75,
            0.665,
            0.58,
            0.495,
            0.41,
            0.325,
            0.24,
            0.155
          ],
          "actual": [
            0.782,
            0.794,
            0.719,
            0.577,
            0.44,
            0.364,
            0.335,
            0.302,
            0.232,
            0.139
          ]
        },
        "cumulative_gains": {
          "deciles": [
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10"
          ],
          "captured_share": [
            0.28,
            0.5,
            0.67,
            0.78,
            0.86,
            0.91,
            0.95,
            0.975,
            0.99,
            1.0
          ]
        }
      }
    }
  },
  "total_financial_exposure_cr": 17863.2,
  "decision_intelligence": {
    "act_triage": {
      "labels": [
        "Immediate Overhaul / Kiln Overhaul (ML-07 & ML-04)",
        "Dormant Stock Scrap & Salvage (ML-06)",
        "Routine / Compliant Operational Status",
        "Credit Watch & Advance Payment (ML-05)",
        "Expedite Batch & Shift Capacity (ML-07)",
        "Condition Monitoring Vibration / Thermal (ML-04)",
        "High-Value Dead Stock PO Halt (ML-06)",
        "Default Freeze & Legal Notice (ML-05)"
      ],
      "counts": [
        33080,
        22744,
        37214,
        1670,
        1973,
        3477,
        1799,
        509
      ],
      "colors": [
        "#be123c",
        "#074ea3",
        "#7dbf40",
        "#d97706",
        "#f59e0b",
        "#6366f1",
        "#9f1239",
        "#881337"
      ]
    },
    "plant_decisions": {
      "plants": [
        "Mangrol",
        "Nimbahera",
        "Panna",
        "Muddapur",
        "Gotan"
      ],
      "critical_overhaul_ml4": [
        639,
        157,
        110,
        159,
        83
      ],
      "condition_inspect_ml4": [
        1211,
        540,
        251,
        427,
        163
      ],
      "dormant_scrap_ml6": [
        3899,
        3231,
        2450,
        2104,
        1607
      ],
      "high_value_salvage_ml6": [
        272,
        226,
        249,
        150,
        64
      ]
    },
    "decision_matrix": [
      {
        "label": "Emergency Kiln Halt & Write-down Review",
        "data": [
          {
            "x": 95,
            "y": 365,
            "r": 18,
            "orders": 16837,
            "decision": "Halt PO replenishment, emergency batch overhaul, write-down dead stock"
          },
          {
            "x": 89,
            "y": 330,
            "r": 15,
            "orders": 14820,
            "decision": "Emergency staging & overhaul, salvage low-value scrap units"
          }
        ],
        "color": "#be123c"
      },
      {
        "label": "Expedite Shift Capacity & Reallocate Stores",
        "data": [
          {
            "x": 78,
            "y": 240,
            "r": 12,
            "orders": 1973,
            "decision": "Shift capacity to alternate grinding mill, reallocate store spares"
          },
          {
            "x": 68,
            "y": 190,
            "r": 10,
            "orders": 1348,
            "decision": "Capacity load leveling, cross-plant stock transfer"
          }
        ],
        "color": "#d97706"
      },
      {
        "label": "Buffer Release & Dynamic Staging",
        "data": [
          {
            "x": 45,
            "y": 95,
            "r": 9,
            "orders": 263,
            "decision": "Review safety stock parameters, monitor consumption trends"
          },
          {
            "x": 35,
            "y": 114,
            "r": 8,
            "orders": 114,
            "decision": "Freeze reorder points, bundle slow-moving inventory"
          }
        ],
        "color": "#074ea3"
      },
      {
        "label": "Standard Cadence Execution",
        "data": [
          {
            "x": 10,
            "y": 35,
            "r": 8,
            "orders": 80,
            "decision": "Maintain standard replenishment and planned dispatch buffers"
          }
        ],
        "color": "#7dbf40"
      }
    ],
    "commercial_decisions": {
      "tiers": ["Tier 1 (> ₹50L)", "Tier 2 (₹20L - ₹50L)", "Tier 3 (₹5L - ₹20L)", "Tier 4 (< ₹5L)"],
      "immediate_freeze": [509, 310, 85, 20],
      "advance_payment": [1670, 940, 420, 150],
      "lc_guarantee": [890, 1420, 810, 300],
      "auto_clearance": [1240, 3850, 6210, 8740]
    },
    "decision_polar": {
      "labels": [
        "Kiln Overhaul (ML-04/07)",
        "Dormant Scrap (ML-06)",
        "Credit Freeze (ML-05)",
        "Spend Audit (ML-13)",
        "Batch Expedite (ML-07)",
        "Quality Quarantine (ML-08)"
      ],
      "counts": [33080, 24543, 2179, 8145, 1973, 1775],
      "colors": ["#be123c", "#074ea3", "#d97706", "#6366f1", "#f59e0b", "#2d5a26"]
    },
    "value_trajectory": {
      "months": ["May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25"],
      "cumulative_cr": [485, 960, 1520, 2110, 2690, 3215],
      "monthly_actions": [8400, 9850, 11200, 12600, 13100, 13188]
    }
  }
};
