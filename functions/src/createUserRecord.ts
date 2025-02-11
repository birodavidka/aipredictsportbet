import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import cors from "cors";

// Firebase inicializálása
initializeApp();
const db = getFirestore();
const corsHandler = cors({ origin: true });

export const registerUser = onRequest(async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method !== "POST") {
                res.status(405).send("Csak POST kérések engedélyezettek.");
                return;
            }

            const { uid, email, name } = req.body;
            if (!uid || !email) {
                res.status(400).json({ error: "Hiányzó uid vagy email." });
                return;
            }

            const userData = {
                uid,
                email,
                name: name || "Unknown",
                createdAt: FieldValue.serverTimestamp(),
                subscription: {
                    status: "inactive",
                    provider: null,
                    plan: "basic",
                    expiresAt: null
                }
            };

            await db.collection("users").doc(uid).set(userData);
            console.log(`✅ Felhasználó létrehozva: ${uid}`);
            
            res.status(200).json({ message: "Felhasználó sikeresen elmentve." });
        } catch (error) {
            console.error("❌ Hiba a felhasználó mentésekor:", error);
            res.status(500).json({ error: "Belső szerverhiba." });
        }
    });
});
