import firebase_admin
from firebase_admin import credentials, firestore
import json
import os

# 🔥 Firebase inicializálása
cred = credentials.Certificate("/Users/davidbiro/Documents/playground/js/sportbetai/functions/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 📂 Betöltjük az adatokat
odds_file = "/Users/davidbiro/Documents/playground/js/sportbetai/functions/src/odds_data.json"
historical_file = "/Users/davidbiro/Documents/playground/js/sportbetai/functions/src/historical_matches.json"

# JSON beolvasás biztosítása
with open(odds_file, "r") as f:
    try:
        odds_data = json.load(f)
    except json.JSONDecodeError:
        print("❌ JSON beolvasási hiba! odds_data.json hibás.")
        odds_data = []

with open(historical_file, "r") as f:
    try:
        historical_data = json.load(f)
    except json.JSONDecodeError:
        print("❌ JSON beolvasási hiba! historical_matches.json hibás.")
        historical_data = []

# Ha az adatok nem listák, alakítsuk azokat listává
if isinstance(historical_data, dict):
    historical_data = [historical_data]
if isinstance(odds_data, dict):
    odds_data = [odds_data]

# 🔥 Nagy mezők helyes darabolása
def split_large_field(field_value, max_size=1048576):
    """Ha egy mező túl nagy, akkor JSON-valid darabokra osztjuk"""

    field_json = json.dumps(field_value)
    field_bytes = field_json.encode("utf-8")

    chunks = []

    if isinstance(field_value, list):  # Lista esetén darabonként tároljuk
        temp_chunk = []
        temp_size = 0

        for item in field_value:
            item_size = len(json.dumps(item).encode("utf-8"))

            if temp_size + item_size > max_size:
                chunks.append(temp_chunk)
                temp_chunk = []
                temp_size = 0

            temp_chunk.append(item)
            temp_size += item_size

        if temp_chunk:
            chunks.append(temp_chunk)

    elif isinstance(field_value, str):  # Szöveg esetén daraboljuk
        while len(field_bytes) > max_size:
            chunk = field_bytes[:max_size].decode("utf-8", "ignore")
            field_bytes = field_bytes[max_size:]
            chunks.append(chunk)

        if field_bytes:
            chunks.append(field_bytes.decode("utf-8", "ignore"))

    else:
        while len(field_bytes) > max_size:
            chunk = field_bytes[:max_size]
            field_bytes = field_bytes[max_size:]
            chunks.append(json.loads(chunk.decode("utf-8", "ignore")))

        if field_bytes:
            chunks.append(json.loads(field_bytes.decode("utf-8", "ignore")))

    return chunks

# 🔥 Teljes dokumentumok darabolása
def split_large_document(item, max_size=1048576):
    """Ha egy dokumentum túl nagy, daraboljuk kisebb részekre"""
    chunks = []
    chunk = {}
    size = 0
    counter = 1  # Sorszámozás a darabokhoz

    for key, value in item.items():
        key_value_size = len(json.dumps({key: value}).encode("utf-8"))

        # Ha egy mező önmagában is túl nagy, további darabolás kell
        if key_value_size > max_size:
            print(f"⚠️ Egy mező túl nagy, további darabolás: {key}")
            split_values = split_large_field(value)
            for idx, split_value in enumerate(split_values):
                chunks.append({f"{key}_part_{idx+1}": split_value})
            continue

        if size + key_value_size > max_size:
            chunks.append(chunk)
            chunk = {}
            size = 0

        chunk[key] = value
        size += key_value_size

    if chunk:
        chunks.append(chunk)

    return chunks

# 🔥 Adatok mentése Firestore-ba
def upload_to_firestore(collection_name, data):
    collection_ref = db.collection(collection_name)

    if isinstance(data, dict):
        data = [data]
    if not isinstance(data, list):
        print(f"❌ Hibás formátum: {type(data)}. Listát vártunk!")
        return

    for item in data:
        item_size = len(json.dumps(item).encode("utf-8"))

        if item_size > 1048576:  # Ha túl nagy, daraboljuk fel
            print(f"⚠️ Nagy dokumentum ({item_size} byte), darabolás...")
            chunks = split_large_document(item)
            for chunk in chunks:
                doc_ref = collection_ref.add(chunk)
                print(f"✔️ Rész-dokumentum feltöltve: {doc_ref[1].id}")
        else:
            doc_ref = collection_ref.add(item)
            print(f"✔️ Dokumentum feltöltve: {doc_ref[1].id}")

    print(f"✔️ {collection_name} adatok feltöltve!")

# Feltöltés Firestore-ba
upload_to_firestore("historical_matches", historical_data)
upload_to_firestore("odds", odds_data)

print("🚀 Firestore feltöltés kész!")
