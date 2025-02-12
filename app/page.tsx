import Benefits from "./components/Benefits";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <HomePage/>
      <Benefits/>
{/*     <h1 className="text-4xl font-bold">Sportfogadás AI Elemző</h1>
    <p className="text-lg text-gray-600 mt-4">
      Használd az AI erejét a nyerő fogadásokhoz!
    </p> */}
  </div>

  );
}
