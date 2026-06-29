"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Flame, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTracker } from "@/hooks/use-tracker";
import {
  patternAllProblems,
  patternSolvedProblems,
  patternStreak,
  patternEstimatedTimeRemaining,
  completedPatternsCount,
  totalPatternsCount,
  currentPattern,
} from "@/lib/pattern-analytics";

export function PatternHero() {
  const { state } = useTracker();
  if (!state.patternCategories) return null;

  const categories = state.patternCategories;
  const solved = patternSolvedProblems(categories);
  const problems = patternAllProblems(categories);
  const streak = patternStreak(categories);
  const estimatedHours = patternEstimatedTimeRemaining(categories);
  const completedPatterns = completedPatternsCount(categories);
  const totalPatterns = totalPatternsCount(categories);
  const { category: currCat, pattern: currPat } = currentPattern(categories);

  const cards = [
    {
      label: "Patterns mastered",
      value: completedPatterns,
      suffix: `/${totalPatterns}`,
      icon: Network,
      color: "text-sky-400",
      note: `${totalPatterns - completedPatterns} patterns remaining`,
    },
    {
      label: "Problems solved",
      value: solved.length,
      suffix: `/${problems.length}`,
      icon: CheckCircle2,
      color: "text-lime",
      note: `${problems.length - solved.length} problems queued`,
    },
    {
      label: "Pattern streak",
      value: streak,
      suffix: " days",
      icon: Flame,
      color: "text-orange-400",
      note: streak ? "Keep the chain alive" : "Start your streak today",
    },
    {
      label: "Est. remaining",
      value: Math.ceil(estimatedHours),
      suffix: " hrs",
      icon: Clock,
      color: "text-violet-400",
      note: "Based on pattern difficulty",
    },
  ];

  return (
    <section className="mb-8">
      <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-lime">
            <span className="h-px w-6 bg-lime" /> Deep Work Mode
          </div>
          <h2 className="text-3xl font-bold tracking-[-.04em] sm:text-4xl lg:text-5xl">
            Master the patterns.<br />
            <span className="text-gradient">Solve anything.</span>
          </h2>
          <p className="mt-4 max-w-xl text-xs leading-6 text-zinc-500">
            A structured progression from fundamentals to advanced techniques, focusing on recognizing underlying patterns rather than memorizing solutions.
          </p>
        </div>
        <Card className="glass-highlight max-w-xl border-lime/10 px-5 py-4 shadow-glow">
          <div className="flex items-start gap-3">
            <Network size={20} className="mt-0.5 text-lime" />
            <div>
              <p className="text-sm font-medium text-zinc-200">Current Focus: {currPat.name}</p>
              <p className="mt-1 text-xs text-zinc-400">{currCat.name} • {currPat.difficulty}</p>
              <p className="mt-3 text-[9px] uppercase tracking-[.2em] text-zinc-600">Your next challenge awaits</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -3 }}
          >
            <Card className="glass-highlight h-full p-5 transition-colors hover:border-lime/15 hover:shadow-glow">
              <div className="flex items-start justify-between">
                <span className="text-[9px] uppercase tracking-[.18em] text-zinc-600">{card.label}</span>
                <card.icon size={17} className={card.color} />
              </div>
              <div className="mt-4 text-3xl font-bold tracking-tight">
                {card.value}
                <span className="ml-1 text-xs font-normal text-zinc-600">{card.suffix}</span>
              </div>
              <div className="mt-3 text-[10px] text-zinc-600">{card.note}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
