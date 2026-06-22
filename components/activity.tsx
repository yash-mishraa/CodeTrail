"use client";

import { useMemo, useState } from "react";
import { addMonths, eachDayOfInterval, endOfMonth, format, getDay, isSameDay, startOfMonth, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dailyCounts, heatmapDays } from "@/lib/analytics";
import { Phase } from "@/lib/types";
import { SectionHeading } from "@/components/roadmap";

export function Activity({ phases }: { phases: Phase[] }) {
  const counts = dailyCounts(phases); const days = heatmapDays(phases); const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return <section id="activity" className="scroll-mt-24 pt-20"><SectionHeading eyebrow="Activity log" title="Consistency, visualized" copy="Every glowing square is proof that you showed up. Empty days are invitations, not verdicts." />
    <div className="grid gap-3 xl:grid-cols-[1.35fr_.65fr]">
      <Card className="overflow-hidden p-5"><div className="mb-5 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Contribution matrix</p><p className="mt-1 text-sm font-semibold">{total} submissions logged</p></div><div className="flex items-center gap-1 text-[9px] text-zinc-700"><span>Less</span>{[0,1,2,3,4].map((i) => <span key={i} className={`size-2.5 rounded-[2px] heat-${i}`} />)}<span>More</span></div></div>
        <div className="overflow-x-auto pb-2"><div className="grid min-w-[690px] grid-flow-col grid-rows-7 gap-[4px]">{days.map((day) => <div key={day.date.toISOString()} title={`${format(day.date, "MMM d, yyyy")}: ${day.count} solved`} className={`aspect-square min-w-[9px] rounded-[2px] heat-${Math.min(day.count, 4)}`} />)}</div><div className="mt-3 flex min-w-[690px] justify-between text-[9px] text-zinc-700">{Array.from({ length: 6 }, (_, i) => <span key={i}>{format(subMonths(new Date(), 5 - i), "MMM")}</span>)}</div></div>
      </Card><MonthlyCalendar counts={counts} />
    </div>
  </section>;
}

function MonthlyCalendar({ counts }: { counts: Record<string, number> }) {
  const [month, setMonth] = useState(startOfMonth(new Date()));
  const days = useMemo(() => eachDayOfInterval({ start: startOfMonth(month), end: endOfMonth(month) }), [month]);
  const blanks = Array.from({ length: getDay(startOfMonth(month)) });
  return <Card className="p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-zinc-600">Solved calendar</p><p className="mt-1 text-sm font-semibold">{format(month, "MMMM yyyy")}</p></div><div className="flex gap-1"><Button variant="ghost" size="icon" onClick={() => setMonth((m) => subMonths(m, 1))}><ChevronLeft size={14} /></Button><Button variant="ghost" size="icon" onClick={() => setMonth((m) => addMonths(m, 1))}><ChevronRight size={14} /></Button></div></div><div className="grid grid-cols-7 gap-1 text-center">{["S","M","T","W","T","F","S"].map((d, i) => <span key={`${d}-${i}`} className="py-1 text-[9px] text-zinc-700">{d}</span>)}{blanks.map((_, i) => <span key={`blank-${i}`} />)}{days.map((date) => { const count = counts[format(date, "yyyy-MM-dd")] ?? 0; return <div key={date.toISOString()} className={`relative grid aspect-square place-items-center rounded-md text-[10px] ${count ? "bg-lime/15 text-lime" : isSameDay(date, new Date()) ? "border border-white/15 text-white" : "text-zinc-600"}`}>{format(date, "d")}{count > 0 && <span className="absolute bottom-1 size-1 rounded-full bg-lime" />}</div>; })}</div></Card>;
}
