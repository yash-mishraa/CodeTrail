import { TrackerState } from "@/lib/types";

export interface ProgressRepository {
  load(): TrackerState | null;
  save(state: TrackerState): void;
}

const STORAGE_KEY = "leetcode-tracker:v2";

export const localProgressRepository: ProgressRepository = {
  load() {
    if (typeof window === "undefined") return null;
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value ? JSON.parse(value) : null;
    } catch { return null; }
  },
  save(state) {
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};

// Swap this repository for a Firebase implementation later; the UI and store stay unchanged.
