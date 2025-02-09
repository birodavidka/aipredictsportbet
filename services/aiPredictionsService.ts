import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const predictionsCollection = collection(db, "ai_predictions");

// 🔥 AI által generált ajánlások lekérése
export async function getAIPredictions() {
  try {
    const querySnapshot = await getDocs(predictionsCollection);
    const predictions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return predictions;
  } catch (error) {
    console.error("Hiba az AI ajánlások lekérésekor:", error);
    return [];
  }
}
