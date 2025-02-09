import firebase_admin
from firebase_admin import credentials, firestore
import os
import numpy as np
import pandas as pd
import requests
from sklearn.linear_model import LogisticRegression

# 🔥 Firebase Admin inicializálása Service Account Key-vel
SERVICE_KEY_PATH = os.path.join(os.path.dirname(__file__), "../serviceAccountKey.json")
cred = credentials.Certificate(SERVICE_KEY_PATH)

# Ha nincs inicializálva, akkor inicializáljuk
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

db = firestore.client()

# 🔥 AI modell lekéri az adatokat a Firestore-ból
def get_historical_data():
    matches_ref = db.collection("historical_matches")
    docs = matches_ref.stream()
    data = [doc.to_dict() for doc in docs]
    return pd.DataFrame(data)

# 🔥 Friss mérkőzések és odds adatok lekérése API-ról
def get_latest_matches():
    response = requests.get("https://api-sports.io/football/matches?league=PL")
    return response.json()

def get_match_odds(match_id):
    response = requests.get(f"https://api.the-odds-api.com/v4/sports/soccer/matches/{match_id}/odds?apiKey=YOUR_ODDS_API_KEY")
    return response.json()

# 🔥 AI Modell: Logisztikus regresszió betanítása és előrejelzés
def train_and_predict():
    data = get_historical_data()
    if data.empty:
        print("Nincs elérhető történelmi adat")
        return

    # Feature engineering
    X = data[["team_strength", "opponent_strength", "recent_form"]]
    y = data["match_outcome"]

    model = LogisticRegression()
    model.fit(X, y)

    # Új mérkőzések előrejelzése
    latest_matches = get_latest_matches()
    predictions = []
    
    for match in latest_matches["response"]:
        team_strength = match["home_team"]["strength"]
        opponent_strength = match["away_team"]["strength"]
        recent_form = np.random.rand()
        
        input_data = np.array([[team_strength, opponent_strength, recent_form]])
        predicted_outcome = model.predict(input_data)[0]
        odds = get_match_odds(match["id"])
        
        predictions.append({
            "match": f"{match['home_team']['name']} vs {match['away_team']['name']}",
            "recommendedBet": "Win" if predicted_outcome == 1 else "Lose",
            "confidence": float(model.predict_proba(input_data)[0][predicted_outcome]),
            "odds": odds
        })

    # 🔥 AI ajánlások mentése Firestore-ba
    for prediction in predictions:
        db.collection("ai_predictions").add(prediction)

train_and_predict()
