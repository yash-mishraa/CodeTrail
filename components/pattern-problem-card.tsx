"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Check, ChevronDown, ExternalLink, Github, Minus, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PatternProblem } from "@/lib/pattern-types";
import { useTracker } from "@/hooks/use-tracker";
import { cn } from "@/lib/utils";

const difficultyStyle = {
  Easy: "border-emerald-400/20 bg-emerald-400/[.07] text-emerald-400",
  Medium: "border-amber-400/20 bg-amber-400/[.07] text-amber-400",
  Hard: "border-rose-400/20 bg-rose-400/[.07] text-rose-400",
};

export function PatternProblemCard({
  categoryId,
  patternId,
  problem,
  index,
  accent,
}: {
  categoryId: string;
  patternId: string;
  problem: PatternProblem;
  index: number;
  accent: string;
}) {
  const { togglePatternProblem, updatePatternProblem } = useTracker();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      id={`problem-${problem.id}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.035 }}
      className={cn(
        "rounded-xl border bg-white/[.018] transition-colors",
        problem.completed ? "border-lime/15 bg-lime/[.025]" : "border-white/[.06] hover:border-white/[.12]"
      )}
    >
      <div className="flex items-center gap-3 p-3 sm:p-4">
        <button
          aria-label={problem.completed ? "Mark incomplete" : "Mark complete"}
          onClick={() => togglePatternProblem(categoryId, patternId, problem.id)}
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-md border transition-all",
            problem.completed
              ? "border-lime bg-lime text-black shadow-[0_0_12px_rgba(155,255,46,.25)]"
              : "border-white/15 text-transparent hover:border-lime/50"
          )}
        >
          <Check size={14} strokeWidth={3} />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4
              className={cn(
                "truncate text-xs font-medium sm:text-sm",
                problem.completed && "text-zinc-500 line-through decoration-zinc-700"
              )}
            >
              {problem.name}
            </h4>
            {problem.favorite && <Star size={11} className="fill-amber-300 text-amber-300" />}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <Badge className={difficultyStyle[problem.difficulty]}>{problem.difficulty}</Badge>
            <Badge className="border-white/[.07] bg-white/[.025] text-zinc-600">{problem.level}</Badge>
            {problem.solvedDate && (
              <span className="hidden items-center gap-1 text-[9px] text-zinc-600 sm:flex">
                <Calendar size={10} />
                {problem.solvedDate}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            aria-label="Favorite"
            onClick={() => updatePatternProblem(categoryId, patternId, problem.id, { favorite: !problem.favorite })}
            className="grid size-8 place-items-center text-zinc-700 transition hover:text-amber-300"
          >
            <Star size={14} className={problem.favorite ? "fill-amber-300 text-amber-300" : ""} />
          </button>
          <a
            aria-label="Open LeetCode"
            href={problem.leetcodeUrl}
            target="_blank"
            className="grid size-8 place-items-center text-zinc-700 transition hover:text-lime"
          >
            <ExternalLink size={14} />
          </a>
          <button
            aria-label="Problem details"
            onClick={() => setExpanded(!expanded)}
            className="grid size-8 place-items-center text-zinc-700 hover:text-white"
          >
            <ChevronDown size={14} className={cn("transition-transform", expanded && "rotate-180")} />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid gap-3 border-t border-white/[.05] p-3 sm:grid-cols-[1fr_150px] sm:p-4">
              <label className="text-[9px] uppercase tracking-wider text-zinc-600">
                Notes
                <textarea
                  value={problem.notes}
                  onChange={(e) => updatePatternProblem(categoryId, patternId, problem.id, { notes: e.target.value })}
                  placeholder="Capture the pattern, not just the answer..."
                  className="mt-2 min-h-20 w-full resize-none rounded-lg border border-white/[.07] bg-black/20 p-3 text-xs normal-case tracking-normal text-zinc-300 outline-none focus:border-lime/30"
                />
              </label>
              <div className="space-y-3">
                <label className="block text-[9px] uppercase tracking-wider text-zinc-600">
                  Date solved
                  <input
                    type="date"
                    value={problem.solvedDate ?? ""}
                    onChange={(e) =>
                      updatePatternProblem(categoryId, patternId, problem.id, {
                        solvedDate: e.target.value,
                        completed: Boolean(e.target.value),
                      })
                    }
                    className="mt-2 h-9 w-full rounded-lg border border-white/[.07] bg-black/20 px-2 text-[10px] text-zinc-400 outline-none"
                  />
                </label>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-600">Revisions</span>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-8"
                      onClick={() =>
                        updatePatternProblem(categoryId, patternId, problem.id, {
                          revisions: Math.max(0, problem.revisions - 1),
                        })
                      }
                    >
                      <Minus size={12} />
                    </Button>
                    <span className="w-6 text-center text-xs" style={{ color: accent }}>
                      {problem.revisions}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-8"
                      onClick={() =>
                        updatePatternProblem(categoryId, patternId, problem.id, { revisions: problem.revisions + 1 })
                      }
                    >
                      <Plus size={12} />
                    </Button>
                  </div>
                </div>
              </div>
              <label className="text-[9px] uppercase tracking-wider text-zinc-600 sm:col-span-2">
                GitHub solution
                <div className="mt-2 flex gap-2">
                  <div className="relative flex-1">
                    <Github size={13} className="absolute left-3 top-3 text-zinc-700" />
                    <input
                      value={problem.githubUrl ?? ""}
                      onChange={(e) =>
                        updatePatternProblem(categoryId, patternId, problem.id, { githubUrl: e.target.value })
                      }
                      placeholder="https://github.com/you/leetcode/..."
                      className="h-9 w-full rounded-lg border border-white/[.07] bg-black/20 pl-9 pr-3 text-[10px] normal-case tracking-normal text-zinc-300 outline-none focus:border-lime/30"
                    />
                  </div>
                  {problem.githubUrl && (
                    <a href={problem.githubUrl} target="_blank">
                      <Button size="sm" variant="outline">
                        Open
                      </Button>
                    </a>
                  )}
                </div>
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
