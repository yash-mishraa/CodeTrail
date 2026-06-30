"use client";

import { motion } from "framer-motion";
import { Check, Clock, ExternalLink } from "lucide-react";
import { useTracker } from "@/hooks/use-tracker";
import { getProblemsForReview } from "@/lib/pattern-analytics";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const difficultyStyle = {
  Easy: "border-emerald-400/20 bg-emerald-400/[.07] text-emerald-400",
  Medium: "border-amber-400/20 bg-amber-400/[.07] text-amber-400",
  Hard: "border-rose-400/20 bg-rose-400/[.07] text-rose-400",
};

export function ReviewQueue() {
  const { state, updatePatternProblem } = useTracker();
  if (!state.patternCategories) return null;

  const reviewQueue = getProblemsForReview(state.patternCategories);
  
  if (reviewQueue.length === 0) return null;

  const handleMarkReviewed = (categoryId: string, patternId: string, problemId: string, currentRevisions: number) => {
    updatePatternProblem(categoryId, patternId, problemId, {
      revisions: (currentRevisions || 0) + 1,
      solvedDate: new Date().toISOString().slice(0, 10),
    });
    import("canvas-confetti").then((m) =>
      m.default({ particleCount: 50, spread: 60, origin: { y: 0.8 }, colors: ["#9BFF2E", "#55D6FF"] })
    );
  };

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <Clock size={16} className="text-lime" />
        <h2 className="text-sm font-semibold tracking-wide">Daily Review Queue</h2>
        <span className="ml-2 rounded-full bg-lime/10 px-2 py-0.5 text-[10px] font-bold text-lime">{reviewQueue.length} due</span>
      </div>
      
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {reviewQueue.map(({ categoryId, patternId, problem }, i) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="min-w-[280px] shrink-0 snap-start sm:min-w-[320px]"
          >
            <Card className="flex h-full flex-col justify-between p-4 transition-colors hover:border-white/10 glass-highlight">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="truncate font-medium text-sm text-zinc-200">{problem.name}</h3>
                  <Badge className={difficultyStyle[problem.difficulty]}>{problem.difficulty}</Badge>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-zinc-500">
                  <span>Revisions: {problem.revisions || 0}</span>
                  <span>•</span>
                  <span>Last solved: {problem.solvedDate}</span>
                </div>
              </div>
              
              <div className="mt-5 flex gap-2">
                <a
                  href={problem.leetcodeUrl}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/[.02] py-2 text-xs font-medium transition hover:bg-white/[.05] hover:text-white"
                >
                  Solve <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => handleMarkReviewed(categoryId, patternId, problem.id, problem.revisions)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-lime/10 py-2 text-xs font-medium text-lime transition hover:bg-lime/20"
                >
                  <Check size={12} /> Reviewed
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
