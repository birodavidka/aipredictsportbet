import requests

def fetch_historical_matches():
    url = "https://api-sports.io/football/matches?league=PL&season=2023"
    headers = {"x-apisports-key": "b5e07847504a817678741352066098db"}

    response = requests.get(url, headers=headers)

    # 🔥 Új: Ellenőrizzük, hogy az API válasz adott-e adatot
    if response.status_code != 200:
        print(f"❌ Hiba történt az API hívás során: {response.status_code}")
        print(f"Válasz tartalma: {response.text}")
        return None

    try:
        data = response.json()
        return data
    except requests.exceptions.JSONDecodeError:
        print("❌ JSON hiba: Az API válasz nem érvényes JSON formátum.")
        print(f"Válasz tartalma: {response.text}")
        return None
