"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity } from "@/components/activity";
import { Achievements, AnalyticsPanel } from "@/components/analytics-panel";
import { AppShell } from "@/components/app-shell";
import { DashboardHero } from "@/components/dashboard-hero";
import { Roadmap } from "@/components/roadmap";
import { UpNext } from "@/components/up-next";
import { useTracker } from "@/hooks/use-tracker";

export default function HomePage() {
  const { state, hydrated } = useTracker();
  return <AppShell><AnimatePresence mode="wait">{!hydrated ? <Loading /> : <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .35 }} className="mx-auto max-w-[1480px]"><DashboardHero phases={state.phases} /><UpNext /><Roadmap /><Activity phases={state.phases} /><AnalyticsPanel phases={state.phases} /><Achievements phases={state.phases} /><footer className="border-t border-white/[.06] py-8 text-center text-[9px] uppercase tracking-[.2em] text-zinc-700">CodeTrail // built for the long game</footer></motion.div>}</AnimatePresence></AppShell>;
}

function Loading() { return <div className="grid min-h-[70vh] place-items-center"><div className="text-center"><div className="mx-auto size-8 animate-spin rounded-full border border-lime/20 border-t-lime" /><p className="mt-4 text-[9px] uppercase tracking-[.2em] text-zinc-700">Loading protocol</p></div></div>; }
