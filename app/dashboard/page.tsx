"use client";

import dynamic from "next/dynamic";
import { AppShell } from "@/components/app-shell";
import { DashboardHero } from "@/components/dashboard-hero";
import { UpNext } from "@/components/up-next";
import { useTracker } from "@/hooks/use-tracker";

// Lazy-load the heaviest sections (recharts, pattern data, markdown)
const PatternRoadmap = dynamic(() => import("@/components/pattern-roadmap").then(m => ({ default: m.PatternRoadmap })), {
  ssr: false,
  loading: () => <SectionSkeleton label="Loading patterns..." />,
});
const Activity = dynamic(() => import("@/components/activity").then(m => ({ default: m.Activity })), {
  ssr: false,
  loading: () => <SectionSkeleton label="Loading activity..." />,
});
const AnalyticsPanel = dynamic(() => import("@/components/analytics-panel").then(m => ({ default: m.AnalyticsPanel })), {
  ssr: false,
  loading: () => <SectionSkeleton label="Loading analytics..." />,
});
const Achievements = dynamic(() => import("@/components/analytics-panel").then(m => ({ default: m.Achievements })), {
  ssr: false,
  loading: () => <SectionSkeleton label="Loading achievements..." />,
});

export default function HomePage() {
  const { hydrated } = useTracker();
  
  if (!hydrated) return <AppShell><Loading /></AppShell>;

  return (
    <AppShell>
      <div className="mx-auto max-w-[1480px] animate-[fadeIn_0.35s_ease-out]">
        <DashboardHero />
        <UpNext />
        <PatternRoadmap />
        <Activity />
        <AnalyticsPanel />
        <Achievements />
        <footer className="border-t border-white/[.06] py-8 text-center text-[9px] uppercase tracking-[.2em] text-zinc-700">
          CodeTrail // built for the long game
        </footer>
      </div>
    </AppShell>
  );
}

function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <div className="text-center">
        <div className="mx-auto size-8 animate-spin rounded-full border border-lime/20 border-t-lime" />
        <p className="mt-4 text-[9px] uppercase tracking-[.2em] text-zinc-700">Loading protocol</p>
      </div>
    </div>
  );
}

function SectionSkeleton({ label }: { label: string }) {
  return (
    <div className="my-8 flex items-center justify-center rounded-xl border border-white/[.05] bg-white/[.01] p-12">
      <div className="text-center">
        <div className="mx-auto size-6 animate-spin rounded-full border border-lime/20 border-t-lime" />
        <p className="mt-3 text-[9px] uppercase tracking-[.2em] text-zinc-600">{label}</p>
      </div>
    </div>
  );
}
