"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Flame, Gauge, Layers3, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { allProblems, lastSolved, solvedProblems, streak } from "@/lib/analytics";
import { TOTAL_TARGET } from "@/lib/roadmap";
import { Phase } from "@/lib/types";

const quotes = ["Consistency beats intensity.", "One problem a day keeps mediocrity away.", "The expert was once a beginner.", "Small commits. Serious momentum."];

export function DashboardHero({ phases }: { phases: Phase[] }) {
  const solved = solvedProblems(phases);
  const problems = allProblems(phases);
  const current = phases.find((phase) => phase.problems.some((p) => !p.completed)) ?? phases.at(-1)!;
  const currentSolved = current.problems.filter((p) => p.completed).length;
  const progress = Math.round((solved.length / TOTAL_TARGET) * 100);
  const dailyStreak = streak(phases);
  const quote = quotes[new Date().getDate() % quotes.length];
  const difficulty = ["Easy", "Medium", "Hard"].map((level) => solved.filter((p) => p.difficulty === level).length);
  const cards = [
    { label: "Solved", value: solved.length, suffix: `/${TOTAL_TARGET}`, icon: CheckCircle2, color: "text-lime", note: `${problems.length - solved.length} named problems queued` },
    { label: "Daily streak", value: dailyStreak, suffix: " days", icon: Flame, color: "text-orange-400", note: dailyStreak ? "Keep the chain alive" : "Start your streak today" },
    { label: "Current phase", value: `0${current.id}`, suffix: "", icon: Layers3, color: "text-sky-400", note: current.name },
    { label: "Total progress", value: `${progress}%`, suffix: "", icon: Gauge, color: "text-violet-400", note: `${solved.length} of ${TOTAL_TARGET} roadmap target` },
  ];

  return <section id="overview" className="scroll-mt-24">
    <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
      <div>
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-lime"><span className="h-px w-6 bg-lime" /> Journey initialized</div>
        <h1 className="text-3xl font-bold tracking-[-.04em] sm:text-4xl lg:text-5xl">Build the habit.<br /><span className="text-gradient">Master the patterns.</span></h1>
        <p className="mt-4 max-w-xl text-xs leading-6 text-zinc-500">Your daily systems dashboard for turning deliberate practice into lasting problem-solving instinct.</p>
      </div>
      <Card className="glass-highlight max-w-xl border-lime/10 px-5 py-4 shadow-glow"><div className="flex items-start gap-3"><span className="text-2xl leading-none text-lime">“</span><div><p className="text-sm text-zinc-200">{quote}</p><p className="mt-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">Today&apos;s terminal wisdom</p></div></div></Card>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{cards.map((card, index) => <motion.div key={card.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .07 }} whileHover={{ y: -3 }}>
      <Card className="glass-highlight h-full p-5 transition-colors hover:border-lime/15 hover:shadow-glow">
        <div className="flex items-start justify-between"><span className="text-[9px] uppercase tracking-[.18em] text-zinc-600">{card.label}</span><card.icon size={17} className={card.color} /></div>
        <div className="mt-4 text-3xl font-bold tracking-tight">{card.value}<span className="ml-1 text-xs font-normal text-zinc-600">{card.suffix}</span></div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-600"><span>{card.note}</span><ArrowUpRight size={12} /></div>
      </Card>
    </motion.div>)}</div>
    <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_.8fr]">
      <Card className="p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Phase {current.id} velocity</p><p className="mt-1 text-sm font-semibold">{current.name}</p></div><span className="text-xs text-lime">{currentSolved}/{current.target}</span></div><Progress value={(currentSolved / current.target) * 100} /><div className="mt-3 flex justify-between text-[9px] text-zinc-600"><span>{current.target - currentSolved} problems to mastery</span><span>Last solved: {lastSolved(phases) ?? "—"}</span></div></Card>
      <Card className="p-5"><div className="flex h-full items-center gap-5"><div className="grid size-11 place-items-center rounded-xl border border-lime/15 bg-lime/[.06] text-lime"><Target size={19} /></div><div className="flex-1"><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Difficulty split</p><div className="mt-2 flex gap-5 text-xs"><span className="text-emerald-400">{difficulty[0]} <b className="font-normal text-zinc-600">easy</b></span><span className="text-amber-400">{difficulty[1]} <b className="font-normal text-zinc-600">medium</b></span><span className="text-rose-400">{difficulty[2]} <b className="font-normal text-zinc-600">hard</b></span></div></div></div></Card>
    </div>
  </section>;
}
