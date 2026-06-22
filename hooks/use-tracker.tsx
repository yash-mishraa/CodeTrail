"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { initialPhases } from "@/lib/roadmap";
import { localProgressRepository } from "@/lib/storage";
import { Problem, TrackerState } from "@/lib/types";

type TrackerContextValue = {
  state: TrackerState;
  hydrated: boolean;
  updateProblem: (phaseId: number, id: string, updates: Partial<Problem>) => void;
  toggleProblem: (phaseId: number, id: string) => void;
  importState: (state: TrackerState) => boolean;
};

const initialState: TrackerState = { phases: initialPhases, createdAt: new Date().toISOString() };
const TrackerContext = createContext<TrackerContextValue | null>(null);

export function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localProgressRepository.load();
    if (saved?.phases) setState(saved);
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localProgressRepository.save(state); }, [state, hydrated]);

  const updateProblem = useCallback((phaseId: number, id: string, updates: Partial<Problem>) => {
    setState((current) => ({ ...current, phases: current.phases.map((phase) => phase.id === phaseId
      ? { ...phase, problems: phase.problems.map((item) => item.id === id ? { ...item, ...updates } : item) }
      : phase),
    }));
  }, []);

  const toggleProblem = useCallback((phaseId: number, id: string) => {
    let celebrating = false;
    setState((current) => ({ ...current, phases: current.phases.map((phase) => phase.id === phaseId ? {
      ...phase, problems: phase.problems.map((item) => {
        if (item.id !== id) return item;
        const completed = !item.completed;
        celebrating = completed;
        return { ...item, completed, solvedDate: completed ? new Date().toISOString().slice(0, 10) : undefined };
      }),
    } : phase) }));
    if (celebrating) confetti({ particleCount: 110, spread: 70, origin: { y: 0.72 }, colors: ["#9BFF2E", "#55D6FF", "#ffffff"] });
  }, []);

  const importState = useCallback((next: TrackerState) => {
    if (!next || !Array.isArray(next.phases)) return false;
    setState(next); return true;
  }, []);

  const value = useMemo(() => ({ state, hydrated, updateProblem, toggleProblem, importState }), [state, hydrated, updateProblem, toggleProblem, importState]);
  return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>;
}

export function useTracker() {
  const value = useContext(TrackerContext);
  if (!value) throw new Error("useTracker must be used inside TrackerProvider");
  return value;
}
