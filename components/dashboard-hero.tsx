"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Flame, Gauge, Network, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShareStats } from "@/components/share-stats";
import { useTracker } from "@/hooks/use-tracker";
import {
  patternAllProblems,
  patternSolvedProblems,
  patternStreak,
  patternEstimatedTimeRemaining,
  completedPatternsCount,
  totalPatternsCount,
  currentPattern,
  patternDifficultyCounts,
  recentlyPracticed,
} from "@/lib/pattern-analytics";

const quotes = ["Consistency beats intensity.", "One problem a day keeps mediocrity away.", "The expert was once a beginner.", "Small commits. Serious momentum."];

export function DashboardHero() {
  const { state } = useTracker();
  if (!state.patternCategories) return null;

  const categories = state.patternCategories;
  const solved = patternSolvedProblems(categories);
  const problems = patternAllProblems(categories);
  const streak = patternStreak(categories);
  const completedPatterns = completedPatternsCount(categories);
  const totalPatterns = totalPatternsCount(categories);
  const { category: currCat, pattern: currPat } = currentPattern(categories);
  const difficulty = patternDifficultyCounts(categories).map(d => d.value);
  const lastSolved = recentlyPracticed(categories, 1)[0]?.solvedDate ?? "—";
  
  const quote = quotes[new Date().getDate() % quotes.length];

  const cards = [
    { label: "Patterns mastered", value: completedPatterns, suffix: `/${totalPatterns}`, icon: Network, color: "text-sky-400", note: `${totalPatterns - completedPatterns} patterns remaining` },
    { label: "Problems solved", value: solved.length, suffix: `/${problems.length}`, icon: CheckCircle2, color: "text-lime", note: `${problems.length - solved.length} queued` },
    { label: "Pattern streak", value: streak, suffix: " days", icon: Flame, color: "text-orange-400", note: streak ? "Keep the chain alive" : "Start your streak today" },
    { label: "Total progress", value: `${Math.round((solved.length / problems.length) * 100)}%`, suffix: "", icon: Gauge, color: "text-violet-400", note: "Roadmap completion" },
  ];

  return <section id="overview" className="scroll-mt-24">
    <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-lime">
            <span className="h-px w-6 bg-lime" /> Deep Work Mode
          </div>
          <ShareStats />
        </div>
        <h1 className="font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl lg:text-5xl">Master the patterns.<br /><span className="text-gradient">Solve anything.</span></h1>
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
      <Card className="p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Current Focus</p><p className="mt-1 text-sm font-semibold">{currCat.name}: {currPat.name}</p></div><span className="text-xs text-lime">{currPat.problems.filter(p => p.completed).length}/{currPat.problems.length}</span></div><Progress value={(currPat.problems.filter(p => p.completed).length / currPat.problems.length) * 100} /><div className="mt-3 flex justify-between text-[9px] text-zinc-600"><span>{currPat.problems.length - currPat.problems.filter(p => p.completed).length} problems to mastery</span><span>Last solved: {lastSolved}</span></div></Card>
      <Card className="p-5"><div className="flex h-full items-center gap-5"><div className="grid size-11 place-items-center rounded-xl border border-lime/15 bg-lime/[.06] text-lime"><Clock size={19} /></div><div className="flex-1"><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Time to mastery</p><div className="mt-2 flex items-baseline gap-2"><span className="text-lg font-bold text-white">{Math.round(patternEstimatedTimeRemaining(categories))}</span><span className="text-[10px] text-zinc-500">hours of deliberate practice remaining</span></div></div></div></Card>
    </div>
  </section>;
}
