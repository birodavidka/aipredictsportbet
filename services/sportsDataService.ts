import axios from "axios";

const API_SPORTS_KEY = process.env.NEXT_PUBLIC_API_SPORTS_KEY;
const ODDS_API_KEY = process.env.NEXT_PUBLIC_ODDS_API_KEY;

// 🔥 1️⃣ Legutóbbi mérkőzések lekérése
export async function getRecentMatches(league: string) {
  try {
    const response = await axios.get(`https://api-sports.io/football/matches?league=${league}`, {
      headers: { "x-apisports-key": API_SPORTS_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Hiba a mérkőzés adatok lekérésekor:", error);
    return [];
  }
}

// 🔥 2️⃣ Odds lekérése adott mérkőzéshez
export async function getOdds(matchId: string) {
  try {
    const response = await axios.get(`https://api.the-odds-api.com/v4/sports/soccer/matches/${matchId}/odds`, {
      params: { apiKey: ODDS_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Hiba az odds adatok lekérésekor:", error);
    return null;
  }
}
