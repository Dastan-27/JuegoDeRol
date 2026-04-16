import { Link, useNavigate } from "react-router";
import { useGameStore } from "../store";
import { useTheme } from "../context/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const playerName = useGameStore((state) => state.playerName);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("playerName");
    localStorage.removeItem("currentLocationId");
    useGameStore.setState({ playerName: null, currentLocationId: "entrada" });
    navigate("/");
  };

  const bgColor =
    theme === "pergamino"
      ? "bg-white border-red-600"
      : "bg-black border-purple-900";
  const textColor = theme === "pergamino" ? "text-black" : "text-white";
  const linkColor =
    theme === "pergamino"
      ? "text-red-600 hover:text-red-800 font-bold"
      : "text-purple-300 hover:text-purple-100 font-bold";

  return (
    <nav
      className={`${bgColor} border-b-2 sticky top-0 z-50 shadow-lg transition-colors`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-2xl font-bold ${textColor} hover:opacity-80 transition`}
          >
            🔍 Detective
          </Link>
          {playerName && (
            <div className="flex gap-4">
              <Link to="/game" className={`${linkColor} font-semibold`}>
                🎮 Explorar
              </Link>
              <Link to="/map" className={`${linkColor} font-semibold`}>
                🗺️ Mapa
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {playerName && <span className={`${textColor} font-semibold`}>{playerName}</span>}
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-lg transition ${
              theme === "pergamino"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-purple-900 hover:bg-purple-800 text-white"
            }`}
            title={theme === "pergamino" ? "Modo Calabozo" : "Modo Pergamino"}
          >
            {theme === "pergamino" ? "🌙" : "☀️"}
          </button>
          {playerName && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg transition"
              style={{
                backgroundColor: theme === "pergamino" ? "#1a1a1a" : "#722c46",
                color: theme === "pergamino" ? "#dc2626" : "#ffffff",
                border: theme === "pergamino" ? "1px solid #dc2626" : "1px solid #a91d63"
              }}
            >
              Salir
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
