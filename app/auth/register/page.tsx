"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig"; // 🔥 Importáljuk az `auth`-ot
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

type Props = {};

const Register = (props: Props) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const availableSports = ["Football", "Basketball", "Tennis", "Baseball", "Hockey"];

  const handleRegister = async (data: any) => {
    if (!data.terms || !data.privacy) {
      setError("Az összes szerződés feltételt el kell fogadnod!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      dispatch(login(user.email || "Ismeretlen felhasználó"));
      
      // 🔥 Felhasználó mentése a Firestore-ba a Cloud Function API-n keresztül
      await axios.post(`https://us-central1-sportingbetai-d8423.cloudfunctions.net/registerUser`, {
        uid: user.uid,
        email: user.email,
        name: `${data.firstname} ${data.lastname}`,
        age: data.age
      });
      
      router.push("/dashboard");
    } catch (err) {
      setError("Hiba történt a regisztráció során!");
    }
  };

  const toggleSport = (sport: string) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Regisztráció</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <TextField
          label="Keresztnév"
          fullWidth
          {...register("firstname", { required: "Keresztnév megadása kötelező!" })}
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />

        <TextField
          label="Vezetéknév"
          fullWidth
          {...register("lastname", { required: "Vezetéknév megadása kötelező!" })}
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
        />

        <TextField
          label="Életkor"
          type="number"
          fullWidth
          {...register("age", {
            required: "Életkor megadása kötelező!",
            min: { value: 18, message: "Legalább 18 évesnek kell lenned!" },
          })}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        <TextField
          label="E-mail cím"
          type="email"
          fullWidth
          {...register("email", {
            required: "E-mail cím megadása kötelező!",
            pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Érvénytelen e-mail cím!" },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Jelszó"
          type="password"
          fullWidth
          {...register("password", { required: "Jelszó megadása kötelező!", minLength: { value: 6, message: "A jelszónak legalább 6 karakternek kell lennie!" } })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <div>
          <label className="block text-sm font-medium">Kedvenc sportok</label>
          <div className="flex flex-wrap gap-2">
            {availableSports.map((sport) => (
              <button
                key={sport}
                type="button"
                className={`px-3 py-1 border rounded ${selectedSports.includes(sport) ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                onClick={() => toggleSport(sport)}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <FormControlLabel
          control={<Checkbox {...register("terms", { required: "El kell fogadnod a felhasználási feltételeket!" })} />}
          label="Elfogadom a Felhasználási Feltételeket"
          className="text-black"
        />
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

        <FormControlLabel
          control={<Checkbox {...register("privacy", { required: "El kell fogadnod az Adatvédelmi Irányelveket!" })} />}
          label="Elfogadom az Adatvédelmi Irányelveket"
          className="text-black"
        />
        {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy.message}</p>}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Regisztráció
        </Button>
      </form>
    </div>
  );
};

export default Register;
