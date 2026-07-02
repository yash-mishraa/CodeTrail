"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, Terminal, Database, Rocket } from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { useTracker } from "@/hooks/use-tracker";
import { GitHubLinkPrompt } from "./github-link-prompt";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { state } = useTracker();
  const { userId } = useAuth();
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

  useEffect(() => {
    if (palette && inputRef.current) inputRef.current.focus();
  }, [palette]);

  const problems = state.phases.flatMap((phase) => phase.problems.map((problem) => ({ ...problem, phase })));
  const results = query ? problems.filter((p) => `${p.name} ${p.topic} ${p.phase.name}`.toLowerCase().includes(query.toLowerCase())).slice(0, 7) : problems.filter((p) => !p.completed).slice(0, 5);

  return <div className="min-h-screen">
    <main className="px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-12 xl:px-10">{children}</main>

    <Suspense fallback={null}>
      <TerminalBar setPalette={setPalette} userId={userId} />
    </Suspense>

    {palette && <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]" onMouseDown={() => setPalette(false)}>
      <div onMouseDown={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-lime/20 bg-[#0b100d] shadow-[0_0_80px_rgba(155,255,46,.08)]">
        <div className="flex items-center gap-3 border-b border-white/[.07] px-4"><Search size={17} className="text-lime" /><input ref={inputRef} autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a problem, topic, or phase..." className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-700 focus-visible:outline-none" /><button onClick={() => setPalette(false)} aria-label="Close search palette" className="rounded-md p-1 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime active:scale-95"><X size={16} className="text-zinc-600" /></button></div>
        <div className="p-2"><div className="px-3 py-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">{query ? "Search results" : "Up next"}</div>{results.map((item) => <a href={item.leetcodeUrl} target="_blank" onClick={() => setPalette(false)} key={item.id} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-white/[.04] active:scale-[0.99] focus-visible:outline-none focus-visible:bg-white/[.04] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset"><span className="grid size-7 place-items-center rounded-md bg-white/[.04] text-[10px] text-lime">{item.phase.id.toString().padStart(2, "0")}</span><span>{item.name}</span><span className="ml-auto text-[10px] text-zinc-600">{item.phase.name} · {item.difficulty}</span></a>)}</div>
        <div className="flex gap-4 border-t border-white/[.06] px-4 py-3 text-[9px] text-zinc-600"><span>↵ open</span><span>esc close</span><span>⌘K toggle</span></div>
      </div>
    </div>}
    <GitHubLinkPrompt />
  </div>;
}

function TerminalBar({ setPalette, userId }: { setPalette: (v: boolean) => void, userId: string | null | undefined }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "overview";
  const tabs = ["overview", "roadmap", "analytics", "achievements"];

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex h-[38px] items-center justify-between border-b border-zinc-800 bg-[#000000] font-mono text-[11px] shadow-sm select-none">
      
      <div className="flex items-center h-full overflow-x-auto scrollbar-hide">
        {/* Logo / App Name */}
        <div className="flex items-center gap-2 px-4 border-r border-zinc-800 h-full bg-[#0a0f0c]">
          <span className="font-brand font-bold text-lime tracking-widest text-[10px] uppercase">CodeTrail</span>
        </div>
        
        {/* Tabs (IDE Style) */}
        <div className="flex items-end h-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => router.push(`?tab=${tab}`)}
              className={`h-full px-4 border-r border-zinc-800 flex items-center gap-2 transition-all duration-200 group focus-visible:outline-none focus-visible:bg-[#0c100e] focus-visible:text-zinc-100 ${currentTab === tab ? "bg-[#0c100e] text-zinc-100 shadow-[inset_0_1px_0_0_#9BFF2E]" : "bg-black text-zinc-500 hover:bg-[#0c100e]"}`}
              aria-current={currentTab === tab ? "page" : undefined}
            >
              <span className={`${currentTab === tab ? "text-lime" : "text-zinc-600 group-hover:text-zinc-400"}`}>~</span>
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* IDE Status / Breadcrumb */}
      <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 text-zinc-500 text-[10px] gap-6 whitespace-nowrap pointer-events-none">
        <span className="flex items-center gap-1.5"><Terminal size={10} className="text-lime/70" /> workspace <span className="text-zinc-300">mastery_env</span></span>
        <span className="text-zinc-800">|</span>
        <span className="flex items-center gap-1.5"><Database size={10} className="text-cyan-500/70" /> sync <span className="text-zinc-300">live</span></span>
        <span className="text-zinc-800">|</span>
        <span className="flex items-center gap-1.5"><Rocket size={10} className="text-yellow-500/70" /> build <span className="text-zinc-300">stable</span></span>
      </div>
      
      {/* Right side tools */}
      <div className="flex items-center h-full shrink-0">
        <button onClick={() => setPalette(true)} aria-label="Open search palette" aria-keyshortcuts="Control+K" className="flex items-center gap-2 h-full px-4 border-l border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-[#0c100e] transition-colors focus-visible:outline-none focus-visible:bg-[#0c100e] focus-visible:text-zinc-300">
          <Search size={12} /> <span className="hidden sm:inline">Search (⌘K)</span>
        </button>
        <div className="flex items-center justify-center h-full px-4 border-l border-zinc-800 bg-[#0a0f0c]">
          {!userId ? (
            <SignInButton mode="modal">
              <button className="text-lime hover:text-lime/80 font-bold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:underline">Sign In</button>
            </SignInButton>
          ) : (
            <UserButton appearance={{ elements: { avatarBox: "w-5 h-5 rounded-sm border border-zinc-700" } }} />
          )}
        </div>
      </div>
    </div>
  );
}
