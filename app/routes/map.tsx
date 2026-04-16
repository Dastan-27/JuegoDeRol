import type { Route } from "./+types/map";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useGameStore } from "../store";
import { RootLayout } from "../components/Layout";
import { useTheme } from "../context/ThemeContext";
import world from "../data/world.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mapa del Mundo" },
    { name: "description", content: "Explora el mapa completo del mundo" },
  ];
}

export default function Map() {
  const navigate = useNavigate();
  const playerName = useGameStore((state) => state.playerName);
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const setCurrentLocation = useGameStore((state) => state.setCurrentLocation);
  const { theme } = useTheme();

  useEffect(() => {
    if (!playerName) {
      navigate("/");
    }
  }, [playerName, navigate]);

  useEffect(() => {
    useGameStore.getState().initializeFromLocalStorage();
  }, []);

  const textColor = theme === "pergamino" ? "text-black" : "text-purple-300";
  const descColor = theme === "pergamino" ? "text-black" : "text-purple-200";

  return (
    <RootLayout>
      <div className="py-8 px-4">
        <div
          className={`${
            theme === "pergamino"
              ? "bg-white border-4 border-red-600"
              : "bg-gray-900 border-4 border-purple-900"
          } p-8 rounded-xl shadow-2xl transition-colors`}
        >
          <h1 className={`text-4xl font-bold mb-2 ${textColor}`}>
            Mapa del Mundo
          </h1>
          <p className={`mb-8 ${descColor}`}>
            Todas las salas disponibles en tu exploración:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {world.map((room) => {
              const isCurrentRoom = room.id === currentLocationId;

              return (
                <div
                  key={room.id}
                  onClick={() => {
                    setCurrentLocation(room.id);
                    navigate("/game");
                  }}
                  className={`p-4 rounded-lg cursor-pointer transition transform hover:scale-105 ${
                    isCurrentRoom
                      ? theme === "pergamino"
                        ? "bg-red-500 border-4 border-red-700 ring-4 ring-red-600 shadow-lg"
                        : "bg-purple-700 border-4 border-purple-900 ring-4 ring-purple-600 shadow-lg"
                      : theme === "pergamino"
                        ? "bg-gray-100 border-2 border-red-600 hover:bg-gray-200"
                        : "bg-gray-800 border-2 border-purple-900 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h2 className={`text-lg font-bold ${
                      isCurrentRoom
                        ? "text-white"
                        : textColor
                    }`}>
                      {room.nombre}
                    </h2>
                    {isCurrentRoom && (
                      <span className="text-2xl ml-2">🚩</span>
                    )}
                  </div>

                  <p className={`text-sm mb-3 ${
                    isCurrentRoom
                      ? "text-white"
                      : descColor
                  }`}>
                    {room.descripcion.substring(0, 100)}...
                  </p>

                  <div className="text-xs mb-3">
                    <span className={`inline-block px-2 py-1 rounded ${
                      isCurrentRoom
                        ? "bg-red-700 text-white"
                        : theme === "pergamino"
                          ? "bg-red-200 text-red-900"
                          : "bg-purple-800 text-purple-200"
                    }`}>
                      ID: {room.id}
                    </span>
                  </div>

                  {/* Conexiones */}
                  <div className="text-xs space-y-1 mb-3">
                    {Object.entries(room.direcciones).map(([dir, targetId]) => (
                      targetId && (
                        <div key={dir} className={isCurrentRoom ? "text-yellow-900" : descColor}>
                          → {dir}: {world.find(r => r.id === targetId)?.nombre || "?"} 
                        </div>
                      )
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentLocation(room.id);
                      navigate("/game");
                    }}
                    className={`w-full py-2 px-3 rounded font-semibold text-sm transition ${
                      isCurrentRoom
                        ? "bg-yellow-700 text-white hover:bg-yellow-800"
                        : theme === "pergamino"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-800 text-white hover:bg-blue-900"
                    }`}
                  >
                    {isCurrentRoom ? " Estás aquí" : "Ir aquí"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Leyenda */}
          <div className={`mt-8 p-4 rounded-lg ${
            theme === "pergamino"
              ? "bg-blue-50 border border-blue-300"
              : "bg-slate-700 border border-blue-600"
          }`}>
            <h3 className={`font-bold mb-2 ${descColor}`}>ℹLeyenda:</h3>
            <ul className={`space-y-1 text-sm ${descColor}`}>
              <li>• Las salas con <span className="inline-block w-4 h-4 bg-yellow-400 rounded"></span> son tu ubicación actual</li>
              <li>• Los botones muestran las conexiones disponibles</li>
              <li>• Haz clic en cualquier sala para teleportarte allí (¡útil para explorar!)</li>
            </ul>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
