import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "../store";
import { RootLayout } from "../components/Layout";
import { useTheme } from "../context/ThemeContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detective - Descubre los secretos de cada sala" },
    { name: "description", content: "Explora la habitación llena de secretos oscuros" },
  ];
}

export default function Home() {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const { setPlayerName: storeSetPlayerName } = useGameStore();
  const { theme } = useTheme();

  useEffect(() => {
    const savedName = localStorage.getItem("playerName");
    if (savedName) {
      navigate("/game");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      storeSetPlayerName(playerName);
      navigate("/game");
    }
  };

  const inputBgColor =
    theme === "pergamino"
      ? "bg-white border-red-600 text-black"
      : "bg-gray-900 border-purple-900 text-white";
  const labelColor =
    theme === "pergamino" ? "text-black" : "text-purple-300";
  const descriptionTextColor =
    theme === "pergamino" ? "text-black" : "text-purple-200";
  const buttonColor =
    theme === "pergamino"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-purple-900 hover:bg-purple-800";

  return (
    <RootLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div
          className={`${
            theme === "pergamino"
              ? "bg-white border-4 border-red-600"
              : "bg-gray-900 border-4 border-purple-900"
          } p-8 rounded-xl shadow-2xl max-w-md w-full transition-colors`}
        >
          <h1 className={`text-4xl font-bold mb-2 ${labelColor}`}>
            Bienvenido a este mundo de secretos y misterios,
          </h1>

          <p
            className={`mb-8 text-lg ${descriptionTextColor}`}
          >
            Estás preparado para leer lo que esconde el mundo?
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className={`block mb-2 font-semibold ${labelColor}`}>
                Tu Nombre:
              </label>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Ingresa tu nombre..."
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${inputBgColor}`}
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={!playerName.trim()}
              className={`w-full py-3 px-4 rounded-lg font-bold text-white text-lg transition ${buttonColor} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Comenzar Aventura 🎮
            </button>
          </form>

          <div className={`mt-8 p-4 rounded-lg ${
            theme === "pergamino"
              ? "bg-gray-100 border border-red-600"
              : "bg-gray-800 border border-purple-900"
          }`}>
            <p className={`text-sm ${descriptionTextColor}`}>
              <strong>Consejo:</strong> No apto para cardiacos. En el modo día sera mas dificil ver la respuesta y no podras ver la ubicación de tu sala...
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}