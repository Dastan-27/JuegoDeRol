import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "pergamino" | "calabozo";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("pergamino");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "pergamino");
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, isClient]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "pergamino" ? "calabozo" : "pergamino"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
}
