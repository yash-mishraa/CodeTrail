"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, Dumbbell, Target, BookOpen } from "lucide-react";
import dynamic from "next/dynamic";
const MarkdownRenderer = dynamic(() => import("./markdown-renderer"), { ssr: false });
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Pattern } from "@/lib/pattern-types";
import { patternProgress } from "@/lib/pattern-analytics";
import { PatternProblemCard } from "./pattern-problem-card";
import { cn } from "@/lib/utils";
import { PatternFiltersState } from "./pattern-filters";

export function PatternCard({
  categoryId,
  pattern,
  accent,
  filters,
}: {
  categoryId: string;
  pattern: Pattern;
  accent: string;
  filters: PatternFiltersState;
}) {
  const [open, setOpen] = useState(false);
  const percent = patternProgress(pattern.problems);
  const solved = pattern.problems.filter((p) => p.completed).length;

  const filteredProblems = pattern.problems.filter((p) => {
    if (filters.difficulty !== "All") {
      // For problems, map PatternDifficulty to Problem level/difficulty roughly,
      // but since the filter difficulty is at the Pattern level in our UI, we actually filter the Patterns themselves,
      // not individual problems here, unless we want to filter problems by difficulty (Easy/Medium/Hard).
      // Our PatternFilters currently sets `difficulty` to "Beginner", "Intermediate", or "Advanced".
      // Wait, the filter says it's for patterns. We will filter the PatternCard visibility in `pattern-roadmap.tsx`.
    }
    if (filters.status !== "All") {
      if (filters.status === "Solved" && !p.completed) return false;
      if (filters.status === "Unsolved" && p.completed) return false;
      if (filters.status === "Bookmarked" && !p.favorite) return false;
    }
    return true;
  });

  if (filteredProblems.length === 0 && filters.status !== "All") {
    return null; // Hide if no problems match the status filter
  }

  // Group problems by level
  const levels = ["Basic", "Standard", "Pattern", "Mixed", "Interview", "Challenge"] as const;
  const groupedProblems = levels.map(level => ({
    level,
    problems: filteredProblems.filter(p => p.level === level)
  })).filter(g => g.problems.length > 0);

  return (
    <Card className={cn("overflow-hidden transition-all", open && "border-white/[.11] shadow-glow")}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`pattern-content-${pattern.id}`}
        className="flex w-full flex-col gap-4 p-4 text-left sm:flex-row sm:items-center sm:p-5 focus-visible:outline-none focus-visible:bg-white/[.02] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-semibold">{pattern.name}</h4>
            <Badge className="border-white/[.07] bg-white/[.025] text-zinc-400">
              {pattern.difficulty}
            </Badge>
          </div>
          <p className="mt-1.5 text-xs text-zinc-500">{pattern.description}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-zinc-600">
            <span className="flex items-center gap-1.5"><Target size={11} /> {pattern.skillsLearned.length} skills</span>
            <span className="flex items-center gap-1.5"><Dumbbell size={11} /> {pattern.problems.length} problems</span>
            <span className="flex items-center gap-1.5"><Clock size={11} /> {pattern.estimatedHours}h est.</span>
          </div>
        </div>
        
        <div className="flex w-full items-center gap-4 sm:w-auto">
          <div className="flex-1 sm:w-32">
            <div className="mb-2 flex justify-between text-[9px] text-zinc-600">
              <span>{solved}/{pattern.problems.length} solved</span>
              <span>{percent}%</span>
            </div>
            <Progress value={percent} indicatorClassName="bg-current" style={{ color: accent }} />
          </div>
          <ChevronDown size={16} className={cn("text-zinc-600 transition-transform shrink-0", open && "rotate-180")} />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`pattern-content-${pattern.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[.05] bg-black/10 p-3 sm:p-4">
              {pattern.prerequisites.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Prerequisites:</span>
                  {pattern.prerequisites.map(prereq => (
                    <Badge key={prereq} className="border-white/[.07] bg-white/[.025] text-zinc-500">
                      {prereq}
                    </Badge>
                  ))}
                </div>
              )}
              
              {pattern.theory && (
                <div className="mb-6 rounded-xl border border-white/[.05] bg-white/[.01] p-5">
                  <h5 className="mb-3 flex items-center gap-2 text-xs font-semibold text-zinc-300">
                    <BookOpen size={14} className="text-sky-400" />
                    How to solve
                  </h5>
                  <div className="prose prose-invert prose-sm max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-a:text-sky-400 prose-pre:bg-white/[.03] prose-pre:border prose-pre:border-white/[.05] prose-code:text-sky-300">
                    <MarkdownRenderer content={pattern.theory} />
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {groupedProblems.map(({ level, problems }) => (
                  <div key={level}>
                    <h5 className="mb-3 text-[10px] uppercase tracking-widest text-zinc-500">{level}</h5>
                    <div className="grid gap-2 xl:grid-cols-2">
                      {problems.map((problem, idx) => (
                        <PatternProblemCard
                          key={problem.id}
                          categoryId={categoryId}
                          patternId={pattern.id}
                          problem={problem}
                          index={idx}
                          accent={accent}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
