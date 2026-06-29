import { PatternCategory, PatternProblem } from "@/lib/pattern-types";
import { eachDayOfInterval, format, startOfDay, subDays, subMonths } from "date-fns";

/* ── Helpers ── */

export const patternAllProblems = (categories: PatternCategory[]) =>
  categories.flatMap((c) => c.patterns.flatMap((p) => p.problems));

export const patternSolvedProblems = (categories: PatternCategory[]) =>
  patternAllProblems(categories).filter((p) => p.completed);

/* ── Category / Pattern progress ── */

export function patternCategoryProgress(category: PatternCategory) {
  const all = category.patterns.flatMap((p) => p.problems);
  const solved = all.filter((p) => p.completed).length;
  return all.length ? Math.round((solved / all.length) * 100) : 0;
}

export function patternProgress(problems: PatternProblem[]) {
  const solved = problems.filter((p) => p.completed).length;
  return problems.length ? Math.round((solved / problems.length) * 100) : 0;
}

/* ── Difficulty counts ── */

export function patternDifficultyCounts(categories: PatternCategory[]) {
  const solved = patternSolvedProblems(categories);
  return (["Easy", "Medium", "Hard"] as const).map((d) => ({
    name: d,
    value: solved.filter((p) => p.difficulty === d).length,
  }));
}

/* ── Streak ── */

export function patternStreak(categories: PatternCategory[]) {
  const dates = new Set(
    patternSolvedProblems(categories)
      .map((p) => p.solvedDate)
      .filter(Boolean),
  );
  let value = 0;
  let cursor = startOfDay(new Date());
  if (!dates.has(format(cursor, "yyyy-MM-dd"))) cursor = subDays(cursor, 1);
  while (dates.has(format(cursor, "yyyy-MM-dd"))) {
    value += 1;
    cursor = subDays(cursor, 1);
  }
  return value;
}

export function patternLongestStreak(categories: PatternCategory[]) {
  const dates = Array.from(new Set(
    patternSolvedProblems(categories)
      .map((p) => p.solvedDate)
      .filter((d): d is string => Boolean(d))
  )).sort();
  if (dates.length === 0) return 0;
  let max = 1; let current = 1;
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);
    if (curr.getTime() - prev.getTime() === 86400000) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }
  return max;
}

/* ── Estimated remaining time ── */

export function patternEstimatedTimeRemaining(categories: PatternCategory[]) {
  return categories.reduce((total, cat) => {
    return (
      total +
      cat.patterns.reduce((pTotal, pat) => {
        const solved = pat.problems.filter((p) => p.completed).length;
        const ratio = pat.problems.length ? 1 - solved / pat.problems.length : 0;
        return pTotal + pat.estimatedHours * ratio;
      }, 0)
    );
  }, 0);
}

/* ── Recently practiced ── */

export function recentlyPracticed(categories: PatternCategory[], days = 7) {
  const cutoff = format(subDays(new Date(), days), "yyyy-MM-dd");
  return patternSolvedProblems(categories).filter(
    (p) => p.solvedDate && p.solvedDate >= cutoff,
  );
}

/* ── Completed patterns count ── */

export function completedPatternsCount(categories: PatternCategory[]) {
  return categories.reduce(
    (total, cat) =>
      total + cat.patterns.filter((p) => p.problems.length > 0 && p.problems.every((prob) => prob.completed)).length,
    0,
  );
}

export function totalPatternsCount(categories: PatternCategory[]) {
  return categories.reduce((total, cat) => total + cat.patterns.length, 0);
}

/* ── Daily counts (pattern view) ── */

export function patternDailyCounts(categories: PatternCategory[]) {
  return patternSolvedProblems(categories).reduce<Record<string, number>>((counts, p) => {
    if (p.solvedDate) counts[p.solvedDate] = (counts[p.solvedDate] ?? 0) + 1;
    return counts;
  }, {});
}

/* ── Heatmap data ── */

export function patternHeatmapDays(categories: PatternCategory[], days = 154) {
  const counts = patternDailyCounts(categories);
  const end = startOfDay(new Date());
  return eachDayOfInterval({ start: subDays(end, days - 1), end }).map((date) => ({
    date,
    count: counts[format(date, "yyyy-MM-dd")] ?? 0,
  }));
}

/* ── Current pattern (first incomplete) ── */

export function currentPattern(categories: PatternCategory[]) {
  for (const cat of categories) {
    for (const pat of cat.patterns) {
      if (pat.problems.some((p) => !p.completed)) {
        return { category: cat, pattern: pat };
      }
    }
  }
  const lastCat = categories[categories.length - 1];
  const lastPat = lastCat.patterns[lastCat.patterns.length - 1];
  return { category: lastCat, pattern: lastPat };
}

/* ── Month data (Analytics Panel) ── */

export function patternMonthData(categories: PatternCategory[]) {
  const counts = patternDailyCounts(categories);
  const result = [];
  for (let i = 5; i >= 0; i--) {
    const d = subMonths(new Date(), i);
    const monthStr = format(d, "MMM");
    const prefix = format(d, "yyyy-MM");
    const solved = Object.entries(counts)
      .filter(([date]) => date.startsWith(prefix))
      .reduce((sum, [, count]) => sum + count, 0);
    result.push({ month: monthStr, solved });
  }
  return result;
}

