"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useTracker } from "@/hooks/use-tracker";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { state } = useTracker();
  const [palette, setPalette] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPalette((v) => !v); }
      if (event.key === "Escape") setPalette(false);
    };
    window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler);
  }, []);

  const problems = state.phases.flatMap((phase) => phase.problems.map((problem) => ({ ...problem, phase })));
  const results = query ? problems.filter((p) => `${p.name} ${p.topic} ${p.phase.name}`.toLowerCase().includes(query.toLowerCase())).slice(0, 7) : problems.filter((p) => !p.completed).slice(0, 5);

  return <div className="min-h-screen">
    <main className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12 xl:px-10">{children}</main>

    <AnimatePresence>{palette && <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setPalette(false)}>
      <motion.div initial={{ opacity: 0, y: -14, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }} onMouseDown={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-lime/20 bg-[#0b100d] shadow-[0_0_80px_rgba(155,255,46,.08)]">
        <div className="flex items-center gap-3 border-b border-white/[.07] px-4"><Search size={17} className="text-lime" /><input ref={inputRef} autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a problem, topic, or phase..." className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-700" /><button onClick={() => setPalette(false)}><X size={16} className="text-zinc-600" /></button></div>
        <div className="p-2"><div className="px-3 py-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">{query ? "Search results" : "Up next"}</div>{results.map((item) => <a href={`#problem-${item.id}`} onClick={() => setPalette(false)} key={item.id} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white/[.04]"><span className="grid size-7 place-items-center rounded-md bg-white/[.04] text-[10px] text-lime">{item.phase.id.toString().padStart(2, "0")}</span><span>{item.name}</span><span className="ml-auto text-[10px] text-zinc-600">{item.phase.name} · {item.difficulty}</span></a>)}</div>
        <div className="flex gap-4 border-t border-white/[.06] px-4 py-3 text-[9px] text-zinc-600"><span>↵ open</span><span>esc close</span><span>⌘K toggle</span></div>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </div>;
}
