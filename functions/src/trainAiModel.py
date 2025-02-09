import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# 🔥 Betöltjük a tisztított adatokat
file_path = "cleaned_training_data.csv"
data = pd.read_csv(file_path)

# 📊 Ellenőrizzük az adatokat
print("🔥 Adatok előnézete:")
print(data.head())

# 📌 Tanuláshoz szükséges oszlopok
features = ['odds_home', 'odds_away']
target = 'result'

# Ellenőrizzük, hogy minden szükséges oszlop létezik
for col in features + [target]:
    if col not in data.columns:
        print(f"⚠️ Hiányzó oszlop: {col}")
        data[col] = 0  # Ha nincs, alapértékre állítjuk

# NaN értékek kezelése
data = data.fillna(0)

# 🎯 Adatok szétosztása tanuló és teszt adathalmazra
X = data[features]
y = data[target]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 🧠 Modell létrehozása és betanítása
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 📈 Modell kiértékelése
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"🔥 Modell pontossága: {accuracy * 100:.2f}%")

# 💾 Modell mentése
joblib.dump(model, "ai_model.pkl")
print("✅ Modell elmentve: ai_model.pkl")