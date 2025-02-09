// firebaseConfig.ts
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getAnalytics, isSupported } from 'firebase/analytics';

// 1. Összegyűjtjük a környezeti változókat
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// 2. Inicializáljuk a Firebase appot
const app = initializeApp(firebaseConfig);

// 3. Létrehozzuk az egyes szolgáltatások példányait
export const auth = getAuth(app);
export const db = getFirestore(app);

// Ha Cloud Functions-t is szeretnél kliensoldalról meghívni:
export const functions = getFunctions(app);

// 4. Analytics (opcionális): csak akkor fut, ha a böngésző környezetben vagyunk
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
