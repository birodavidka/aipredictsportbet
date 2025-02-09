import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd

# 🔥 Firebase inicializálása
cred = credentials.Certificate("/Users/davidbiro/Documents/playground/js/sportbetai/functions/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 📂 Adatok lekérése Firestore-ból
matches_ref = db.collection("historical_matches")
odds_ref = db.collection("odds")

matches_docs = matches_ref.stream()
odds_docs = odds_ref.stream()

# 📊 Adatok átalakítása DataFrame-be
match_data = []
odds_data = []

for doc in matches_docs:
    match_data.append(doc.to_dict())

for doc in odds_docs:
    odds_data.append(doc.to_dict())

matches_df = pd.DataFrame(match_data)
odds_df = pd.DataFrame(odds_data)

# 🔍 Összekapcsoljuk az adatokat a mérkőzés ID alapján
if 'match_id' in matches_df.columns and 'match_id' in odds_df.columns:
    full_data = matches_df.merge(odds_df, on='match_id', how='left')
else:
    full_data = matches_df  # Ha nincs match_id, akkor csak meccsadatokkal dolgozunk

# 📊 Kiírás DataFrame nézetben
print("\n🔥 Első 5 sor az egyesített adatokból:")
print(full_data.head())

# 🔥 Az adatokat később CSV-be is elmenthetjük, ha szükséges
full_data.to_csv("training_data.csv", index=False)
print("\n✅ Az adatok elmentve: training_data.csv")
