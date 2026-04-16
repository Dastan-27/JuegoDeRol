import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const bgColor =
    theme === "pergamino"
      ? "bg-gradient-to-b from-white to-gray-100"
      : "bg-gradient-to-b from-black to-gray-900";
  const textColor = theme === "pergamino" ? "text-black" : "text-gray-100";

  return (
    <div
      className={`${bgColor} ${textColor} min-h-screen transition-colors duration-300`}
    >
      <Navbar />
      <main className="max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
