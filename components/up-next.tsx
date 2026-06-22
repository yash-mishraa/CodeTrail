"use client";

import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTracker } from "@/hooks/use-tracker";

export function UpNext() {
  const { state } = useTracker();
  const queue = state.phases.flatMap((phase) => phase.problems.map((p) => ({ ...p, phase }))).filter((p) => !p.completed).slice(0, 4);
  return <section className="mt-10 grid gap-3 lg:grid-cols-[1fr_280px]">
    <Card className="p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Up next</p><h2 className="mt-1 text-sm font-semibold">Keep your momentum</h2></div><Clock3 size={16} className="text-lime" /></div><div className="grid gap-2 sm:grid-cols-2">{queue.map((item, i) => <a key={item.id} href={`#problem-${item.id}`} className="group flex items-center gap-3 rounded-xl border border-white/[.06] bg-black/10 p-3 transition hover:border-lime/20"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/[.03] text-[10px] text-zinc-600 group-hover:text-lime">0{i + 1}</span><div className="min-w-0"><p className="truncate text-xs">{item.name}</p><p className="mt-1 text-[9px] text-zinc-700">Phase {item.phase.id} · {item.topic}</p></div><ArrowRight size={13} className="ml-auto text-zinc-700 transition group-hover:translate-x-0.5 group-hover:text-lime" /></a>)}</div></Card>
    <Card className="glass-highlight flex items-center gap-4 border-lime/10 p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/[.07] text-lime"><Sparkles size={18} /></div><div><Badge className="border-lime/15 bg-lime/[.05] text-lime">daily goal</Badge><p className="mt-2 text-xs font-semibold">One problem today.</p><p className="mt-1 text-[9px] leading-4 text-zinc-600">That&apos;s the whole mission.</p></div></Card>
  </section>;
}
