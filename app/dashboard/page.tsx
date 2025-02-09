"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchAIPredictions } from "@/redux/aiSlice";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const predictions = useSelector((state: RootState) => state.ai.predictions);
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
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Ajánlások</h1>
      <button className="w-32 rounded-lg font-semibold p-1 border">generate bets</button>
      {/* AI által generált ajánlások listája */}
      {predictions.length === 0 ? (
        <p className="text-gray-600 text-center">Még nincsenek AI ajánlások.</p>
      ) : (
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {predictions.map((prediction) => (
            <li key={prediction.id} className="p-2 border-b">
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
