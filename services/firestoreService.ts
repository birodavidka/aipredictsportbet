import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where, Timestamp } from "firebase/firestore";

const betsCollection = collection(db, "bets");

// 🔥 1️⃣ Fogadási szelvény mentése
export async function saveBet(userId: string, match: string, stake: number, odds: number) {
  try {
    const newBet = {
      userId,
      match,
      stake,
      odds,
      createdAt: Timestamp.now(),
    };
    await addDoc(betsCollection, newBet);
    return { success: true };
  } catch (error) {
    console.error("Hiba a szelvény mentésekor:", error);
    return { success: false, error };
  }
}

// 🔥 2️⃣ Egy felhasználó összes fogadási szelvényének lekérése
export async function getUserBets(userId: string) {
  try {
    const q = query(betsCollection, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const bets = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return bets;
  } catch (error) {
    console.error("Hiba a szelvények lekérésekor:", error);
    return [];
  }
}
