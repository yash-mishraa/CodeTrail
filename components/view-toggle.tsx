"use client";

import { motion } from "framer-motion";
import { Layers3, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ViewMode = "topics" | "patterns";

export function ViewToggle({ mode, onChange }: { mode: ViewMode; onChange: (mode: ViewMode) => void }) {
  return (
    <Card className="glass-highlight mx-auto mb-12 flex max-w-sm items-center rounded-2xl p-1.5 shadow-glow">
      <button
        onClick={() => onChange("topics")}
        className={cn("relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors", mode === "topics" ? "text-lime" : "text-zinc-500 hover:text-zinc-300")}
      >
        <Layers3 size={15} />
        Topics
        {mode === "topics" && <motion.div layoutId="viewToggle" className="absolute inset-0 rounded-xl bg-lime/[.08]" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
      </button>
      <button
        onClick={() => onChange("patterns")}
        className={cn("relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors", mode === "patterns" ? "text-lime" : "text-zinc-500 hover:text-zinc-300")}
      >
        <Network size={15} />
        Patterns
        {mode === "patterns" && <motion.div layoutId="viewToggle" className="absolute inset-0 rounded-xl bg-lime/[.08]" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
      </button>
    </Card>
  );
}
