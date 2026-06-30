"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, X, LayoutDashboard, Code2 } from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { useTracker } from "@/hooks/use-tracker";
import Image from "next/image";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { state } = useTracker();
  const { userId } = useAuth();
  const pathname = usePathname();
  const [palette, setPalette] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const tabs = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "Templates", path: "/dashboard/templates", icon: Code2 }
  ];

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
    <header className="fixed top-6 left-1/2 z-40 flex w-[96%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#0a0f0c]/90 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0f0c]/60">
      <div className="flex items-center gap-3 pl-2">
        <Image src="/logo.png" alt="CodeTrail Logo" width={32} height={32} className="rounded-full" />
        <span className="font-brand font-bold text-sm tracking-wide text-white hidden sm:block">CodeTrail</span>
      </div>

      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        {/* Animated Segmented Control */}
        <div className="relative flex items-center rounded-full border border-white/[.05] bg-black/40 p-1">
          {tabs.map((tab) => {
            const active = pathname === tab.path;
            return (
              <Link key={tab.name} href={tab.path} className="relative z-10 flex items-center gap-2 px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors">
                {active && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-[-1] rounded-full border border-lime/30 bg-lime/10 shadow-[0_0_15px_rgba(155,255,46,0.2)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <tab.icon size={12} className={active ? "text-lime" : "text-zinc-500"} />
                <span className={active ? "text-white" : "text-zinc-500 hover:text-zinc-300"}>{tab.name}</span>
              </Link>
            );
          })}
        </div>

        <button 
          onClick={() => setPalette(true)}
          className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[.03] px-4 py-1.5 text-xs text-zinc-500 transition-colors hover:bg-white/[.08] hover:text-zinc-300"
        >
          <Search size={14} />
          <span>Search...</span>
        </button>
      </div>

      <div className="flex items-center gap-3 pr-1">
        {!userId ? (
          <SignInButton mode="modal">
            <button className="rounded-full bg-lime px-5 py-1.5 text-xs font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(155,255,46,0.3)]">Sign In</button>
          </SignInButton>
        ) : (
          <UserButton appearance={{ elements: { avatarBox: "w-8 h-8 rounded-full ring-1 ring-white/10" } }} />
        )}
      </div>
    </header>
    <main className="px-4 pb-10 pt-32 sm:px-6 lg:px-8 lg:pb-12 xl:px-10">{children}</main>

    {palette && <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]" onMouseDown={() => setPalette(false)}>
      <div onMouseDown={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-lime/20 bg-[#0b100d] shadow-[0_0_80px_rgba(155,255,46,.08)]">
        <div className="flex items-center gap-3 border-b border-white/[.07] px-4"><Search size={17} className="text-lime" /><input ref={inputRef} autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a problem, topic, or phase..." className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-700" /><button onClick={() => setPalette(false)}><X size={16} className="text-zinc-600" /></button></div>
        <div className="p-2"><div className="px-3 py-2 text-[9px] uppercase tracking-[.2em] text-zinc-600">{query ? "Search results" : "Up next"}</div>{results.map((item) => <a href={item.leetcodeUrl} target="_blank" onClick={() => setPalette(false)} key={item.id} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white/[.04]"><span className="grid size-7 place-items-center rounded-md bg-white/[.04] text-[10px] text-lime">{item.phase.id.toString().padStart(2, "0")}</span><span>{item.name}</span><span className="ml-auto text-[10px] text-zinc-600">{item.phase.name} · {item.difficulty}</span></a>)}</div>
        <div className="flex gap-4 border-t border-white/[.06] px-4 py-3 text-[9px] text-zinc-600"><span>↵ open</span><span>esc close</span><span>⌘K toggle</span></div>
      </div>
    </div>}
  </div>;
}
