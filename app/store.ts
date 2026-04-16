import { create } from "zustand";
import world from "./data/world.json";

interface GameStore {
  playerName: string | null;
  currentLocationId: string;
  setPlayerName: (name: string) => void;
  move: (direction: "norte" | "sur" | "este" | "oeste") => void;
  setCurrentLocation: (locationId: string) => void;
  initializeFromLocalStorage: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  playerName: null,
  currentLocationId: "entrada",

  setPlayerName: (name: string) => {
    set({ playerName: name });
    localStorage.setItem("playerName", name);
  },

  setCurrentLocation: (locationId: string) => {
    set({ currentLocationId: locationId });
    localStorage.setItem("currentLocationId", locationId);
  },

  move: (direction: "norte" | "sur" | "este" | "oeste") => {
    const { currentLocationId } = get();
    const currentRoom = world.find(
      (room: any) => room.id === currentLocationId
    );

    if (
      currentRoom &&
      currentRoom.direcciones[direction] &&
      currentRoom.direcciones[direction] !== null
    ) {
      const newLocationId = currentRoom.direcciones[direction];
      set({ currentLocationId: newLocationId });
      localStorage.setItem("currentLocationId", newLocationId);
    }
  },

  initializeFromLocalStorage: () => {
    const savedPlayerName = localStorage.getItem("playerName");
    const savedLocationId = localStorage.getItem("currentLocationId") || "entrada";

    if (savedPlayerName) {
      set({
        playerName: savedPlayerName,
        currentLocationId: savedLocationId,
      });
    }
  },
}));
