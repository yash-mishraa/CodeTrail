"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PatternCategory } from "@/lib/pattern-types";
import { patternCategoryProgress } from "@/lib/pattern-analytics";
import { PatternCard } from "./pattern-card";
import { cn } from "@/lib/utils";
import { PatternFiltersState } from "./pattern-filters";

export function PatternCategoryCard({
  category,
  filters,
}: {
  category: PatternCategory;
  filters: PatternFiltersState;
}) {
  const [open, setOpen] = useState(false);
  const percent = patternCategoryProgress(category);
  const allProblems = category.patterns.flatMap(p => p.problems);
  const solved = allProblems.filter((p) => p.completed).length;

  // Filter patterns based on the difficulty filter
  const filteredPatterns = category.patterns.filter((pattern) => {
    if (filters.difficulty !== "All" && pattern.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });

  // If no patterns match the difficulty filter, hide the category entirely (unless we are just filtering problems by status inside)
  // Actually, if we filter by status, we still show the pattern if it has matching problems. The PatternCard handles that.
  // We'll let PatternCard return null if empty, but we need to know if the Category is completely empty to hide it.
  
  const hasVisiblePatterns = filteredPatterns.some(pattern => {
    if (filters.status === "All") return true;
    return pattern.problems.some(p => {
      if (filters.status === "Solved" && !p.completed) return false;
      if (filters.status === "Unsolved" && p.completed) return false;
      if (filters.status === "Bookmarked" && !p.favorite) return false;
      return true;
    });
  });

  if (!hasVisiblePatterns) {
    return null;
  }

  return (
    <Card className={cn("overflow-hidden transition-all", open && "border-white/[.11] shadow-glow")}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
      >
        <div
          className="grid size-11 shrink-0 place-items-center rounded-xl border text-sm font-bold"
          style={{ color: category.accent, borderColor: `${category.accent}30`, background: `${category.accent}0d` }}
        >
          {category.icon ? category.icon : <Network size={18} />}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold sm:text-base">{category.name}</h3>
          <p className="mt-1 hidden text-xs text-zinc-500 sm:block">{category.description} • {filteredPatterns.length} patterns</p>
          <p className="mt-1 text-[10px] text-zinc-600 sm:hidden">{filteredPatterns.length} patterns</p>
        </div>
        <div className="hidden w-48 sm:block">
          <div className="mb-2 flex justify-between text-[9px] text-zinc-600">
            <span>{solved}/{allProblems.length} solved</span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} indicatorClassName="bg-current" style={{ color: category.accent }} />
        </div>
        <span className="w-10 text-right text-xs font-semibold" style={{ color: category.accent }}>
          {percent}%
        </span>
        <ChevronDown size={16} className={cn("text-zinc-600 transition-transform shrink-0", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[.05] bg-black/10 p-3 sm:p-4 space-y-3">
              {filteredPatterns.map((pattern) => (
                <PatternCard
                  key={pattern.id}
                  categoryId={category.id}
                  pattern={pattern}
                  accent={category.accent}
                  filters={filters}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
