"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useSelector } from "react-redux";


type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [error,setError] = useState('')
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useSelector((state: RootState) => state.theme.mode); // 🔥 Redux-ból lekérjük a témát

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,password)
      const user = userCredential.user
      dispatch(login(user.email || "Ismeretlen felhasználó"))
      router.push("/dashboard")
    } catch (error) {
      setError("Hibás bejelentkezési adatok")
    }
  };
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md ">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Bejelentkezés</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="E-mail cím"
        className="w-full p-2 border rounded-md mb-2 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        className="w-full p-2 border rounded-md mb-4 text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Bejelentkezés
      </button>
    </div>
  )
}

export default Login