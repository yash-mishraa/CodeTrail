import { eachDayOfInterval, format, isSameDay, parseISO, startOfDay, subDays } from "date-fns";
import { Phase, Problem } from "@/lib/types";

export const allProblems = (phases: Phase[]) => phases.flatMap((phase) => phase.problems);
export const solvedProblems = (phases: Phase[]) => allProblems(phases).filter((problem) => problem.completed);

export function dailyCounts(phases: Phase[]) {
  return solvedProblems(phases).reduce<Record<string, number>>((counts, problem) => {
    if (problem.solvedDate) counts[problem.solvedDate] = (counts[problem.solvedDate] ?? 0) + 1;
    return counts;
  }, {});
}

export function streak(phases: Phase[]) {
  const dates = new Set(solvedProblems(phases).map((p) => p.solvedDate).filter(Boolean));
  let value = 0;
  let cursor = startOfDay(new Date());
  if (!dates.has(format(cursor, "yyyy-MM-dd"))) cursor = subDays(cursor, 1);
  while (dates.has(format(cursor, "yyyy-MM-dd"))) { value += 1; cursor = subDays(cursor, 1); }
  return value;
}

export function longestStreak(phases: Phase[]) {
  const dates = [...new Set(solvedProblems(phases).map((p) => p.solvedDate).filter(Boolean) as string[])].sort();
  let longest = 0; let current = 0; let previous: Date | null = null;
  dates.forEach((value) => {
    const date = parseISO(value);
    current = previous && isSameDay(date, new Date(previous.getTime() + 86400000)) ? current + 1 : 1;
    longest = Math.max(longest, current); previous = date;
  });
  return longest;
}

export function monthData(phases: Phase[]) {
  const counts = dailyCounts(phases);
  const now = new Date();
  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    const key = format(date, "yyyy-MM");
    return { month: format(date, "MMM"), solved: Object.entries(counts).filter(([day]) => day.startsWith(key)).reduce((sum, [, count]) => sum + count, 0) };
  });
}

export function lastSolved(phases: Phase[]) {
  return solvedProblems(phases).map((p) => p.solvedDate).filter(Boolean).sort().at(-1) as string | undefined;
}

export function heatmapDays(phases: Phase[], days = 154) {
  const counts = dailyCounts(phases);
  const end = startOfDay(new Date());
  return eachDayOfInterval({ start: subDays(end, days - 1), end }).map((date) => ({ date, count: counts[format(date, "yyyy-MM-dd")] ?? 0 }));
}

export function difficultyCounts(problems: Problem[]) {
  return ["Easy", "Medium", "Hard"].map((name) => ({ name, value: problems.filter((p) => p.completed && p.difficulty === name).length }));
}
