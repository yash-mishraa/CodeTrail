"use client";

import { Award, Lock, Sparkles } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { patternDifficultyCounts, patternLongestStreak, patternMonthData, patternSolvedProblems, patternStreak, patternCategoryProgress, completedPatternsCount } from "@/lib/pattern-analytics";
import { useTracker } from "@/hooks/use-tracker";
import { SectionHeading } from "@/components/roadmap";

const palette = ["#34D399", "#FBBF24", "#FB7185"];
const tooltipStyle = { background: "#0b100d", border: "1px solid rgba(255,255,255,.09)", borderRadius: 8, fontSize: 10 };

export function AnalyticsPanel() {
  const { state } = useTracker();
  if (!state.patternCategories) return null;
  const categories = state.patternCategories;
  const solved = patternSolvedProblems(categories);
  const months = patternMonthData(categories);
  const diff = patternDifficultyCounts(categories);
  const topics = categories.map(c => ({
    name: c.name,
    value: c.patterns.reduce((sum, p) => sum + p.problems.filter(prob => prob.completed).length, 0)
  })).filter(t => t.value > 0).sort((a,b) => b.value - a.value).slice(0, 6);
  return <section id="analytics" className="scroll-mt-24 pt-20"><SectionHeading eyebrow="Signal analysis" title="See the shape of your work" copy="Trends reveal what motivation hides: where your practice compounds and where the next useful challenge lives." />
    <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
      <ChartCard title="Problems per month" subtitle="Last 6 months" className="xl:col-span-2"><ResponsiveContainer width="100%" height={220}><BarChart data={months}><CartesianGrid stroke="rgba(255,255,255,.04)" vertical={false} /><XAxis dataKey="month" tick={{ fill: "#58615c", fontSize: 9 }} axisLine={false} tickLine={false} /><YAxis allowDecimals={false} tick={{ fill: "#58615c", fontSize: 9 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(155,255,46,.03)" }} /><Bar dataKey="solved" fill="#9BFF2E" radius={[5,5,0,0]} maxBarSize={32} /></BarChart></ResponsiveContainer></ChartCard>

      <ChartCard title="Topic distribution" subtitle="Strongest patterns"><div className="space-y-3 pt-3">{topics.length ? topics.map((topic, i) => <div key={topic.name}><div className="mb-1.5 flex justify-between text-[9px]"><span className="text-zinc-500">{topic.name}</span><span className="text-zinc-600">{topic.value}</span></div><Progress value={(topic.value / Math.max(...topics.map(t => t.value))) * 100} indicatorClassName={i ? "bg-sky-400" : "bg-lime"} /></div>) : <EmptyState />}</div></ChartCard>
      <ChartCard title="Streak history" subtitle="Your consistency"><div className="grid h-[220px] place-items-center"><div className="text-center"><div className="text-5xl font-bold text-gradient">{patternStreak(categories)}</div><p className="mt-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">current streak</p><div className="mx-auto my-5 h-px w-20 bg-white/[.07]" /><p className="text-xs text-zinc-500">Best run <span className="text-white">{patternLongestStreak(categories)} days</span></p></div></div></ChartCard>
      <ChartCard title="Category completion" subtitle="Roadmap coverage"><div className="space-y-2.5 pt-2">{categories.map((cat, i) => { const percent = patternCategoryProgress(cat); return <div key={cat.id} className="grid grid-cols-[20px_1fr_32px] items-center gap-2"><span className="text-[9px] text-zinc-700">{(i+1).toString().padStart(2, "0")}</span><Progress value={percent} indicatorClassName="bg-current" style={{ color: cat.accent }} /><span className="text-right text-[9px] text-zinc-600">{percent}%</span></div>; })}</div></ChartCard>
    </div>
  </section>;
}

function ChartCard({ title, subtitle, className, children }: { title: string; subtitle: string; className?: string; children: React.ReactNode }) { return <Card className={className}><div className="flex items-start justify-between p-5 pb-1"><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-700">{subtitle}</p></div><span className="size-1.5 rounded-full bg-lime shadow-[0_0_7px_#9BFF2E]" /></div><div className="px-5 pb-5">{children}</div></Card>; }
function EmptyState() { return <div className="grid h-44 place-items-center text-center"><div><Sparkles size={18} className="mx-auto text-zinc-700" /><p className="mt-3 text-[10px] text-zinc-600">Solve your first problem<br />to light up this chart.</p></div></div>; }

const badges: readonly [string, string, number, "any" | "streak" | "category" | "pattern"][] = [
  ["First Blood", "Solve your first problem", 1, "any"],
  ["7 Day Streak", "Show up seven days straight", 7, "streak"],
  ["30 Day Streak", "Thirty days, unbroken", 30, "streak"],
  ["50 Problems", "Cross the fifty mark", 50, "any"],
  ["Century", "100 problems solved", 100, "any"],
  ["250 Club", "A quarter thousand solved", 250, "any"],
  ["500 Legend", "Complete every single problem", 500, "any"],
  ["Pattern Apprentice", "Complete 10 patterns", 10, "pattern"],
  ["Pattern Master", "Complete 40 patterns", 40, "pattern"],
  ["Pattern Grandmaster", "Complete all 80 patterns", 80, "pattern"],
  ["Category Clear", "Fully complete any 1 category", 1, "category"],
  ["Half Map", "Complete 10 categories", 10, "category"],
];

export function Achievements() {
  const { state } = useTracker();
  if (!state.patternCategories) return null;
  const categories = state.patternCategories;
  const solved = patternSolvedProblems(categories).length;
  const currentStreakVal = patternStreak(categories);
  const completedPats = completedPatternsCount(categories);
  const completedCats = categories.filter(c => {
    const all = c.patterns.flatMap(p => p.problems);
    return all.length > 0 && all.every(p => p.completed);
  }).length;

  return <section id="achievements" className="scroll-mt-24 pb-10 pt-20"><SectionHeading eyebrow="Milestones" title="Achievements" copy="Quiet evidence of the person you are becoming, one deliberate repetition at a time." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{badges.map(([name, description, threshold, type]) => {
    const unlocked = type === "streak" ? currentStreakVal >= threshold
      : type === "pattern" ? completedPats >= threshold
      : type === "category" ? completedCats >= threshold
      : solved >= threshold;
    return <Card key={name} className={`glass-highlight p-4 transition ${unlocked ? "border-lime/20 shadow-glow" : "opacity-55"}`}><div className="flex items-start gap-3"><div className={`grid size-10 shrink-0 place-items-center rounded-xl border ${unlocked ? "border-lime/25 bg-lime/10 text-lime" : "border-white/[.07] bg-white/[.025] text-zinc-700"}`}>{unlocked ? <Award size={18} /> : <Lock size={15} />}</div><div><p className="text-xs font-semibold">{name}</p><p className="mt-1 text-[9px] leading-4 text-zinc-600">{description}</p><p className={`mt-2 text-[8px] uppercase tracking-widest ${unlocked ? "text-lime" : "text-zinc-700"}`}>{unlocked ? "unlocked" : "locked"}</p></div></div></Card>;
  })}</div></section>;
}

