import type { Route } from "./+types/game";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "../store";
import { RootLayout } from "../components/Layout";
import { useTheme } from "../context/ThemeContext";
import world from "../data/world.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Juego - Exploración" },
    { name: "description", content: "Explora el mundo y resuelve acertijos" },
  ];
}

export default function Game() {
  const navigate = useNavigate();
  const playerName = useGameStore((state) => state.playerName);
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const move = useGameStore((state) => state.move);
  const { theme } = useTheme();

  useEffect(() => {
    if (!playerName) {
      navigate("/");
    }
  }, [playerName, navigate]);

  useEffect(() => {
    useGameStore.getState().initializeFromLocalStorage();
  }, []);

  const currentRoom = world.find((room) => room.id === currentLocationId);

  if (!currentRoom) {
    return <RootLayout><div>Sala no encontrada</div></RootLayout>;
  }

  const canMoveNorth = currentRoom.direcciones.norte !== null;
  const canMoveSouth = currentRoom.direcciones.sur !== null;
  const canMoveEast = currentRoom.direcciones.este !== null;
  const canMoveWest = currentRoom.direcciones.oeste !== null;

  const roomBgColor =
    theme === "pergamino"
      ? "bg-white border-4 border-red-600"
      : "bg-gray-900 border-4 border-purple-900";
  const textColor = theme === "pergamino" ? "text-black" : "text-purple-300";
  const descriptionColor =
    theme === "pergamino" ? "text-black" : "text-purple-200";
  const buttonColor = (enabled: boolean) =>
    enabled
      ? theme === "pergamino"
        ? "bg-red-600 hover:bg-red-700"
        : "bg-purple-900 hover:bg-purple-800"
      : theme === "pergamino"
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-700 cursor-not-allowed";

  return (
    <RootLayout>
      <div className="py-8 px-4">
        <div className={`${roomBgColor} p-8 rounded-xl shadow-2xl transition-colors`}>
          {/* Nombre de la sala */}
          <div className="mb-6 border-b-2 border-current pb-4">
            <h1 className={`text-4xl font-bold ${textColor} mb-2`}>
              📍 {currentRoom.nombre}
            </h1>
            <p className={`text-sm ${descriptionColor}`}>
              Ubicación: <code className="bg-black bg-opacity-20 px-2 py-1 rounded">{currentLocationId}</code>
            </p>
          </div>

          {/* Descripción */}
          <div className="mb-8">
            <p className={`text-lg leading-relaxed ${descriptionColor}`}>
              {currentRoom.descripcion}
            </p>
          </div>

          {/* Acertijo */}
          <div
            className={`mb-8 p-6 rounded-lg border-2 ${
              theme === "pergamino"
                ? "bg-red-50 border-red-600"
                : "bg-gray-800 border-purple-900"
            }`}
          >
            <h2 className={`text-xl font-bold mb-3 ${
              theme === "pergamino" ? "text-black" : "text-purple-400"
            }`}>
              🤔 Acertijo
            </h2>
            <p className={`text-lg ${descriptionColor}`}>
              {currentRoom.acertijo}
            </p>
            <details className="mt-4 cursor-pointer">
              <summary className={`font-semibold ${
                theme === "pergamino" ? "text-black" : "text-purple-400"
              } hover:underline`}>
                Ver respuesta
              </summary>
              <p className={`mt-2 p-3 rounded bg-black bg-opacity-10 ${descriptionColor}`}>
                ✅ {currentRoom.respuesta}
              </p>
            </details>
          </div>

          {/* Botones de movimiento */}
          <div className="grid grid-cols-2 gap-4">
            {/* Norte */}
            <button
              onClick={() => move("norte")}
              disabled={!canMoveNorth}
              className={`col-span-2 py-4 px-6 rounded-lg font-bold text-white text-lg transition ${buttonColor(
                canMoveNorth
              )} disabled:opacity-50 uppercase tracking-wider`}
            >
              ⬆️ Norte
            </button>

            {/* Oeste */}
            <button
              onClick={() => move("oeste")}
              disabled={!canMoveWest}
              className={`py-4 px-6 rounded-lg font-bold text-white text-lg transition ${buttonColor(
                canMoveWest
              )} disabled:opacity-50 uppercase tracking-wider`}
            >
              ⬅️ Oeste
            </button>

            {/* Este */}
            <button
              onClick={() => move("este")}
              disabled={!canMoveEast}
              className={`py-4 px-6 rounded-lg font-bold text-white text-lg transition ${buttonColor(
                canMoveEast
              )} disabled:opacity-50 uppercase tracking-wider`}
            >
              Este ➡️
            </button>

            {/* Sur */}
            <button
              onClick={() => move("sur")}
              disabled={!canMoveSouth}
              className={`col-span-2 py-4 px-6 rounded-lg font-bold text-white text-lg transition ${buttonColor(
                canMoveSouth
              )} disabled:opacity-50 uppercase tracking-wider`}
            >
              ⬇️ Sur
            </button>
          </div>

          {/* Info de movimiento disponible */}
          <div
            className={`mt-8 p-4 rounded-lg text-sm ${
              theme === "pergamino"
                ? "bg-red-50 border border-red-600"
                : "bg-gray-800 border border-purple-900"
            }`}
          >
            <p className={descriptionColor}>
              💡 Puedes moverte hacia:{" "}
              {[
                canMoveNorth && "Norte",
                canMoveSouth && "Sur",
                canMoveEast && "Este",
                canMoveWest && "Oeste",
              ]
                .filter(Boolean)
                .join(", ")}
              {!canMoveNorth &&
                !canMoveSouth &&
                !canMoveEast &&
                !canMoveWest &&
                "Parece ser un callejón sin salida..."}
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
