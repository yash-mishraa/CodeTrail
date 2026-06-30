"use client";

import { TrendingUp, Zap, Brain, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTracker } from "@/hooks/use-tracker";
import {
  patternAllProblems,
  patternSolvedProblems,
  patternDifficultyCounts,
  completedPatternsCount,
  totalPatternsCount,
  recentlyPracticed,
  patternEstimatedTimeRemaining,
} from "@/lib/pattern-analytics";

export function WeeklyInsights() {
  const { state } = useTracker();
  if (!state.patternCategories || state.patternCategories.length === 0) return null;

  const categories = state.patternCategories;
  const allProblems = patternAllProblems(categories);
  const solvedProblems = patternSolvedProblems(categories);
  const totalSolved = solvedProblems.length;
  const totalProblems = allProblems.length;
  const overallPercent = totalProblems ? Math.round((totalSolved / totalProblems) * 100) : 0;

  const difficulty = patternDifficultyCounts(categories);
  const easyTotal = allProblems.filter(p => p.difficulty === "Easy").length;
  const medTotal = allProblems.filter(p => p.difficulty === "Medium").length;
  const hardTotal = allProblems.filter(p => p.difficulty === "Hard").length;
  const easySolved = difficulty.find(d => d.name === "Easy")?.value ?? 0;
  const medSolved = difficulty.find(d => d.name === "Medium")?.value ?? 0;
  const hardSolved = difficulty.find(d => d.name === "Hard")?.value ?? 0;

  const completedPats = completedPatternsCount(categories);
  const totalPats = totalPatternsCount(categories);
  const recentWeek = recentlyPracticed(categories, 7).length;
  const hoursRemaining = Math.round(patternEstimatedTimeRemaining(categories));

  // Weakest category (lowest completion %)
  const categoryStats = categories.map(c => {
    const all = c.patterns.flatMap(p => p.problems);
    const solved = all.filter(p => p.completed).length;
    return { name: c.name, percent: all.length ? Math.round((solved / all.length) * 100) : 0, accent: c.accent };
  }).sort((a, b) => a.percent - b.percent);

  const weakest = categoryStats[0];
  const strongest = categoryStats[categoryStats.length - 1];

  return (
    <section className="mt-10 grid gap-3 lg:grid-cols-3">
      {/* Difficulty Breakdown */}
      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Difficulty breakdown</p>
            <h2 className="mt-1 text-sm font-semibold font-display">{totalSolved} / {totalProblems} solved</h2>
          </div>
          <BarChart3 size={16} className="text-lime" />
        </div>
        <div className="space-y-3">
          <DifficultyRow label="Easy" solved={easySolved} total={easyTotal} color="text-emerald-400" barColor="bg-emerald-400" />
          <DifficultyRow label="Medium" solved={medSolved} total={medTotal} color="text-amber-400" barColor="bg-amber-400" />
          <DifficultyRow label="Hard" solved={hardSolved} total={hardTotal} color="text-rose-400" barColor="bg-rose-400" />
        </div>
      </Card>

      {/* Stat Grid */}
      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Quick stats</p>
            <h2 className="mt-1 text-sm font-semibold font-display">At a glance</h2>
          </div>
          <TrendingUp size={16} className="text-lime" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <StatCell label="This week" value={recentWeek} unit="solved" />
          <StatCell label="Patterns done" value={completedPats} unit={`/ ${totalPats}`} />
          <StatCell label="Completion" value={`${overallPercent}%`} unit="overall" />
          <StatCell label="Est. remaining" value={hoursRemaining} unit="hours" />
        </div>
      </Card>

      {/* Focus Areas */}
      <Card className="glass-highlight border-lime/10 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Focus areas</p>
            <h2 className="mt-1 text-sm font-semibold font-display">Strengths & gaps</h2>
          </div>
          <Brain size={16} className="text-lime" />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-white/[.06] bg-black/20 p-3">
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-zinc-600">
              <Zap size={10} className="text-rose-400" /> Needs work
            </div>
            <p className="mt-2 text-xs font-semibold">{weakest.name}</p>
            <div className="mt-2 flex items-center gap-2">
              <Progress value={weakest.percent} indicatorClassName="bg-current" style={{ color: weakest.accent }} className="flex-1" />
              <span className="text-[9px] text-zinc-600">{weakest.percent}%</span>
            </div>
          </div>
          <div className="rounded-xl border border-lime/10 bg-lime/[.02] p-3">
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-zinc-600">
              <Zap size={10} className="text-lime" /> Strongest
            </div>
            <p className="mt-2 text-xs font-semibold">{strongest.name}</p>
            <div className="mt-2 flex items-center gap-2">
              <Progress value={strongest.percent} indicatorClassName="bg-lime" className="flex-1" />
              <span className="text-[9px] text-zinc-600">{strongest.percent}%</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function DifficultyRow({ label, solved, total, color, barColor }: { label: string; solved: number; total: number; color: string; barColor: string }) {
  const percent = total ? Math.round((solved / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-[9px]">
        <span className={color}>{label}</span>
        <span className="text-zinc-600">{solved}/{total}</span>
      </div>
      <Progress value={percent} indicatorClassName={barColor} />
    </div>
  );
}

function StatCell({ label, value, unit }: { label: string; value: string | number; unit: string }) {
  return (
    <div className="rounded-xl border border-white/[.05] bg-white/[.01] p-3 text-center">
      <p className="text-lg font-bold tracking-tight">{value}</p>
      <p className="text-[8px] uppercase tracking-widest text-zinc-600">{unit}</p>
      <p className="mt-1 text-[8px] text-zinc-700">{label}</p>
    </div>
  );
}
