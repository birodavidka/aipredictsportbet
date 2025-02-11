import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import axios from "axios";
import admin from "firebase-admin";

// Inicializálás, ha még nem történt meg
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:
      "https://sportingbetai-d8423-default-rtdb.europe-west1.firebasedatabase.app/",
  });
}

export const updateVolleyballLeagues = onRequest(async (req, res) => {
  const apiUrl = "https://v1.volleyball.api-sports.io/leagues";
  const headers = {
    "x-rapidapi-key": "b5e07847504a817678741352066098db",
    "x-rapidapi-host": "v1.volleyball.api-sports.io",
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    const data = response.data;
    logger.info("API válasz:", data);

    // Adatok feltöltése a Realtime Database-be a 'volleyball/leagues' útvonalon
    await admin.database().ref("volleyball/leagues").set(data);

    res
      .status(200)
      .send("Adatok sikeresen lekérve és feltöltve a Realtime Database-be!");
  } catch (error) {
    logger.error("Hiba az API hívás vagy az adatok feltöltése során:", error);
    res.status(500).send("Hiba történt a művelet során.");
  }
});
