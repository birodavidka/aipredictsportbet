import pandas as pd
import json

# 🔥 Betöltjük az adatokat
file_path = "training_data.csv"
data = pd.read_csv(file_path)

# 📌 Hasznos mezők kibontása a JSON-ból
def extract_json_fields(row):
    try:
        return json.loads(row) if isinstance(row, str) else None
    except json.JSONDecodeError:
        return None

# 🔍 Kivesszük a fontos adatokat
if "response_part_1" in data.columns:
    data["parsed_response"] = data["response_part_1"].apply(extract_json_fields)

# ✅ Különböző adatok kibontása
def safe_get(d, keys, default=None):
    """Segédfüggvény JSON adatok biztonságos kinyerésére"""
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return default
    return d

if "parsed_response" in data.columns:
    data["home_team"] = data["parsed_response"].apply(lambda x: safe_get(x, ["teams", "home", "name"], "Unknown"))
    data["away_team"] = data["parsed_response"].apply(lambda x: safe_get(x, ["teams", "away", "name"], "Unknown"))
    data["odds_home"] = data["parsed_response"].apply(lambda x: safe_get(x, ["odds", "bookmakers", 0, "markets", 0, "outcomes", 0, "price"], 0))
    data["odds_away"] = data["parsed_response"].apply(lambda x: safe_get(x, ["odds", "bookmakers", 0, "markets", 0, "outcomes", 1, "price"], 0))
    data["result"] = data["parsed_response"].apply(lambda x: safe_get(x, ["match", "result"], "draw"))

# 🚀 Csak a hasznos oszlopokat tartjuk meg
cleaned_data = data[["home_team", "away_team", "odds_home", "odds_away", "result"]]

# 🔥 Eltávolítjuk az üres sorokat
cleaned_data = cleaned_data.dropna()

# 💾 Mentés új fájlba
cleaned_data.to_csv("cleaned_training_data.csv", index=False)
print("✅ Adattisztítás kész! Mentve: cleaned_training_data.csv")