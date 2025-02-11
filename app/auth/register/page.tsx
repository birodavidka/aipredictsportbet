"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig"; // 🔥 Importáljuk az `auth`-ot
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import Link from "next/link";
import axios from "axios";

type Props = {}

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(login(user.email || "Ismeretlen felhasználó"));
      
      // 🔥 Felhasználó mentése a Firestore-ba a Cloud Function API-n keresztül
      await axios.post(`https://us-central1-sportingbetai-d8423.cloudfunctions.net/registerUser`, {
        uid: user.uid,
        email: user.email,
        name: "Unknown"
      });
      
      router.push("/dashboard");
    } catch (err) {
      setError("Hiba történt a regisztráció során!");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Regisztráció</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="E-mail cím"
        className="w-full p-2 border rounded-md mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        className="w-full p-2 border rounded-md mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Regisztráció
      </button>
    </div>
  )
}

export default Register