"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchAIPredictions } from "@/redux/aiSlice";
import { useRouter } from "next/navigation";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const predictions = useSelector((state: RootState) => state.ai.predictions);
  const theme = useSelector((state: RootState) => state.theme.mode); // 🔥 Téma állapot lekérése Redux-ból
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    } else {
      dispatch(fetchAIPredictions());
    }
  }, [user, dispatch, router]);

  return (
    <div className={`w-full max-w-lg mx-auto flex flex-col gap-4 items-center 
      ${theme === "dark" ? "bg-background-dark text-foreground-dark" : "bg-background-light text-foreground-light"}
      p-6 rounded-lg shadow-md transition-all duration-300`
    }>
      <h1 className="text-2xl font-bold mb-4 text-center">AI Ajánlások</h1>

      {/* AI által generált ajánlások listája */}
      <button className={`w-36 rounded-lg font-semibold p-1 border flex gap-1 items-center
        ${theme === "dark" ? "bg-primary-dark text-white border-primary-dark" : "bg-primary-light text-black border-primary-light"}
        hover:scale-105 transition-transform duration-200`
      }>
        <AutoAwesomeOutlinedIcon />
        <p>Generate Bets</p>
      </button>

      {predictions.length === 0 ? (
        <p className="text-gray-600 text-center">Még nincsenek AI ajánlások.</p>
      ) : (
        <ul className={`p-4 rounded-lg shadow-md w-full 
          ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`
        }>
          {predictions.map((prediction) => (
            <li key={prediction.id} className={`p-2 border-b 
              ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
            >
              <p><strong>Mérkőzés:</strong> {prediction.match}</p>
              <p><strong>Ajánlott fogadás:</strong> {prediction.recommendedBet}</p>
              <p><strong>Biztonság:</strong> {Math.round(prediction.confidence * 100)}%</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
