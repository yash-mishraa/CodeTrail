"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { initialPhases } from "@/lib/roadmap";
import { localProgressRepository } from "@/lib/storage";
import { Problem, TrackerState } from "@/lib/types";
import { PatternProblem, PatternCategory } from "@/lib/pattern-types";
import { useAuth } from "@clerk/nextjs";
import { supabase, getSupabaseClient } from "@/lib/supabase";

type TrackerContextValue = {
  state: TrackerState;
  hydrated: boolean;
  updateProblem: (phaseId: number, id: string, updates: Partial<Problem>) => void;
  toggleProblem: (phaseId: number, id: string) => void;
  importState: (state: TrackerState) => boolean;
  updatePatternProblem: (categoryId: string, patternId: string, id: string, updates: Partial<PatternProblem>) => void;
  togglePatternProblem: (categoryId: string, patternId: string, id: string) => void;
};

// Start with empty pattern categories - they load lazily
const initialState: TrackerState = { phases: initialPhases, patternCategories: [], createdAt: new Date().toISOString() };
const TrackerContext = createContext<TrackerContextValue | null>(null);

// Lazy loader for pattern data - only compiles the 20 pattern files when actually needed
let _cachedPatterns: PatternCategory[] | null = null;
async function getPatternCategories(): Promise<PatternCategory[]> {
  if (_cachedPatterns) return _cachedPatterns;
  const { initialPatternCategories } = await import("@/lib/patterns");
  _cachedPatterns = initialPatternCategories;
  return _cachedPatterns;
}

function mergePhases(loadedPhases: TrackerState["phases"]) {
  return initialPhases.map(phase => {
    const loadedPhase = loadedPhases.find(p => p.id === phase.id);
    if (!loadedPhase) return phase;
    return {
      ...phase,
      problems: phase.problems.map(prob => {
        const loadedProb = loadedPhase.problems.find(p => p.id === prob.id);
        if (!loadedProb) return prob;
        return { ...prob, completed: loadedProb.completed, favorite: loadedProb.favorite, solvedDate: loadedProb.solvedDate };
      })
    };
  });
}

function mergePatterns(loadedCats: PatternCategory[], freshCats: PatternCategory[]) {
  return freshCats.map(cat => {
    const loadedCat = loadedCats.find(c => c.id === cat.id);
    if (!loadedCat) return cat;
    return {
      ...cat,
      patterns: cat.patterns.map(pat => {
        const loadedPat = loadedCat.patterns.find(p => p.id === pat.id);
        if (!loadedPat) return pat;
        return {
          ...pat,
          problems: pat.problems.map(prob => {
            const loadedProb = loadedPat.problems.find(p => p.id === prob.id || p.name === prob.name);
            if (!loadedProb) return prob;
            return { ...prob, completed: loadedProb.completed, favorite: loadedProb.favorite, solvedDate: loadedProb.solvedDate };
          })
        };
      })
    };
  });
}

export function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);
  const [hydrated, setHydrated] = useState(false);

  const { userId, getToken } = useAuth();
  
  useEffect(() => {
    const loadState = async () => {
      // Load pattern categories lazily (this triggers compilation of pattern files)
      const freshPatterns = await getPatternCategories();
      
      let loadedState: TrackerState | null = null;
      if (userId) {
        try {
          // Attempt to securely identify the user to Supabase RLS using the Clerk JWT
          const token = await getToken({ template: "supabase" });
          const client = token ? getSupabaseClient(token) : supabase;
          const { data, error } = await client.from("user_progress").select("state").eq("user_id", userId).single();
          if (!error && data?.state) {
            loadedState = data.state as TrackerState;
          }
        } catch (err) {
          // Fallback to anon query if JWT template is not configured (graceful degradation)
          console.warn("Supabase JWT template not found. Falling back to anon client.");
          const { data, error } = await supabase.from("user_progress").select("state").eq("user_id", userId).single();
          if (!error && data?.state) {
            loadedState = data.state as TrackerState;
          }
        }
      }
      
      if (!loadedState) {
        const saved = localProgressRepository.load();
        if (saved?.phases) loadedState = saved;
      }
      
      if (loadedState) {
        loadedState.phases = loadedState.phases ? mergePhases(loadedState.phases) : initialPhases;
        loadedState.patternCategories = loadedState.patternCategories 
          ? mergePatterns(loadedState.patternCategories, freshPatterns)
          : freshPatterns;
        setState(loadedState);
      } else {
        // No saved state - use fresh data
        setState(prev => ({ ...prev, patternCategories: freshPatterns }));
      }
      setHydrated(true);
    };
    loadState();
  }, [userId]);

  useEffect(() => { 
    if (!hydrated) return;
    
    localProgressRepository.save(state); 
    
    if (userId) {
      const sync = async () => {
        try {
          const token = await getToken({ template: "supabase" });
          const client = token ? getSupabaseClient(token) : supabase;
          await client.from("user_progress").upsert({
            user_id: userId,
            state: state,
            updated_at: new Date().toISOString()
          });
        } catch (err) {
          await supabase.from("user_progress").upsert({
            user_id: userId,
            state: state,
            updated_at: new Date().toISOString()
          });
        }
      };
      
      const timeoutId = setTimeout(sync, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [state, hydrated, userId]);

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
    if (celebrating) import("canvas-confetti").then(m => m.default({ particleCount: 110, spread: 70, origin: { y: 0.72 }, colors: ["#9BFF2E", "#55D6FF", "#ffffff"] }));
  }, []);

  const updatePatternProblem = useCallback((categoryId: string, patternId: string, id: string, updates: Partial<PatternProblem>) => {
    setState((current) => ({
      ...current,
      patternCategories: current.patternCategories?.map((cat) => cat.id === categoryId
        ? { ...cat, patterns: cat.patterns.map((pat) => pat.id === patternId
          ? { ...pat, problems: pat.problems.map((item) => item.id === id ? { ...item, ...updates } : item) }
          : pat) }
        : cat),
    }));
  }, []);

  const togglePatternProblem = useCallback((categoryId: string, patternId: string, id: string) => {
    let celebrating = false;
    setState((current) => ({
      ...current,
      patternCategories: current.patternCategories?.map((cat) => cat.id === categoryId ? {
        ...cat, patterns: cat.patterns.map((pat) => pat.id === patternId ? {
          ...pat, problems: pat.problems.map((item) => {
            if (item.id !== id) return item;
            const completed = !item.completed;
            celebrating = completed;
            return { ...item, completed, solvedDate: completed ? new Date().toISOString().slice(0, 10) : undefined };
          }),
        } : pat),
      } : cat)
    }));
    if (celebrating) import("canvas-confetti").then(m => m.default({ particleCount: 110, spread: 70, origin: { y: 0.72 }, colors: ["#9BFF2E", "#55D6FF", "#ffffff"] }));
  }, []);

  const importState = useCallback((next: TrackerState) => {
    if (!next || !Array.isArray(next.phases)) return false;
    setState(next); return true;
  }, []);

  const value = useMemo(() => ({ state, hydrated, updateProblem, toggleProblem, importState, updatePatternProblem, togglePatternProblem }), [state, hydrated, updateProblem, toggleProblem, importState, updatePatternProblem, togglePatternProblem]);
  return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>;
}

export function useTracker() {
  const value = useContext(TrackerContext);
  if (!value) throw new Error("useTracker must be used inside TrackerProvider");
  return value;
}
