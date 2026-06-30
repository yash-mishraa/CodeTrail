"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Share2, Network, CheckCircle2, Flame, Loader2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTracker } from "@/hooks/use-tracker";
import { patternSolvedProblems, patternStreak, completedPatternsCount, totalPatternsCount } from "@/lib/pattern-analytics";

export function ShareStats() {
  const { state } = useTracker();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!state.patternCategories) return null;

  const solved = patternSolvedProblems(state.patternCategories).length;
  const streak = patternStreak(state.patternCategories);
  const patterns = completedPatternsCount(state.patternCategories);
  const totalPats = totalPatternsCount(state.patternCategories);

  const handleExport = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);
    
    try {
      // Temporarily unhide the component for html2canvas to render it
      cardRef.current.style.display = "block";
      
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0a0f0c",
        scale: 3, // High resolution
        logging: false,
        useCORS: true,
      });
      
      cardRef.current.style.display = "none";

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "CodeTrail-Stats.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <Button 
        onClick={handleExport} 
        disabled={isExporting}
        variant="outline" 
        className="gap-2 border-white/10 bg-white/[.02] text-xs font-bold text-zinc-300 transition-colors hover:bg-white/[.08] hover:text-white"
      >
        {isExporting ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
        Share Progress
      </Button>

      {/* Hidden styled card strictly used for html2canvas export */}
      <div 
        ref={cardRef} 
        style={{ display: "none" }}
        className="absolute left-[-9999px] top-0 w-[600px] overflow-hidden rounded-[32px] bg-[#0a0f0c] p-[2px]"
      >
        <div className="h-full w-full rounded-[30px] bg-gradient-to-b from-[#111814] to-[#0a0f0c] p-10 outline outline-1 outline-white/10">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Image src="/favicon.png" alt="CodeTrail Logo" width={56} height={56} className="rounded-xl shadow-[0_0_20px_rgba(155,255,46,0.2)]" />
              <div>
                <h1 className="font-brand text-2xl font-bold tracking-wide text-white">CodeTrail</h1>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">DSA Mastery Tracker</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-brand text-lg font-bold text-white">Rank: Top 1%</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/5 bg-white/[.02] p-5">
              <CheckCircle2 size={24} className="mb-3 text-lime" />
              <p className="text-4xl font-bold tracking-tight text-white">{solved}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Problems Solved</p>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-white/[.02] p-5">
              <Network size={24} className="mb-3 text-sky-400" />
              <p className="text-4xl font-bold tracking-tight text-white">{patterns}<span className="text-lg text-zinc-600">/{totalPats}</span></p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Patterns Mastered</p>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-white/[.02] p-5">
              <Flame size={24} className="mb-3 text-orange-400" />
              <p className="text-4xl font-bold tracking-tight text-white">{streak}<span className="text-lg text-zinc-600"> days</span></p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Current Streak</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
