"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { useTracker } from "@/hooks/use-tracker";
import Image from "next/image";

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
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/[.05]">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="CodeTrail Logo" width={32} height={32} className="rounded-lg" />
        <span className="font-semibold text-sm">CodeTrail</span>
      </div>
      <div className="flex items-center gap-4">
        {!userId ? (
          <SignInButton mode="modal">
            <button className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Sign In</button>
          </SignInButton>
        ) : (
          <UserButton appearance={{ elements: { avatarBox: "w-8 h-8 rounded-lg" } }} />
        )}
      </div>
    </header>
    <main className="px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-12 xl:px-10">{children}</main>

    {palette && <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]" onMouseDown={() => setPalette(false)}>
      <div onMouseDown={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-lime/20 bg-[#0b100d] shadow-[0_0_80px_rgba(155,255,46,.08)]">
        <div className="flex items-center gap-3 border-b border-white/[.07] px-4"><Search size={17} className="text-lime" /><input ref={inputRef} autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a problem, topic, or phase..." className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-700" /><button onClick={() => setPalette(false)}><X size={16} className="text-zinc-600" /></button></div>
        <div className="p-2"><div className="px-3 py-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">{query ? "Search results" : "Up next"}</div>{results.map((item) => <a href={`#problem-${item.id}`} onClick={() => setPalette(false)} key={item.id} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white/[.04]"><span className="grid size-7 place-items-center rounded-md bg-white/[.04] text-[10px] text-lime">{item.phase.id.toString().padStart(2, "0")}</span><span>{item.name}</span><span className="ml-auto text-[10px] text-zinc-600">{item.phase.name} · {item.difficulty}</span></a>)}</div>
        <div className="flex gap-4 border-t border-white/[.06] px-4 py-3 text-[9px] text-zinc-600"><span>↵ open</span><span>esc close</span><span>⌘K toggle</span></div>
      </div>
    </div>}
  </div>;
}
