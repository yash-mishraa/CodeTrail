"use client";

import { Terminal, Code2, Rocket, Database, LayoutDashboard } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const codeSnippet = `const CodeTrail = {
  status: "Optimized",
  problems: 501,
  patterns: 80,
  init: async () => {
    await compileSuccess();
    return masterDSA();
  }
};`;

export default function LandingPage() {
  const { userId } = useAuth();
  const [typedText, setTypedText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f0c] text-zinc-300">
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .anim-fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; }
        .anim-scale-in { animation: scaleIn 0.8s ease-out forwards; opacity: 0; }
        .anim-blink { animation: blink 0.8s infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
      `}</style>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-lime/20 blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8 text-center">
        
        <div className={mounted ? "anim-fade-up mb-8 flex items-center justify-center gap-3" : "opacity-0 mb-8"}>
          <div className="grid size-16 place-items-center rounded-2xl bg-[#0a0f0c] text-lime text-2xl font-black font-mono shadow-[0_0_30px_rgba(155,255,46,0.2)] border border-lime/20">
            {">_"}
          </div>
        </div>

        <h1 className={mounted ? "anim-fade-up delay-200 font-display max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl" : "opacity-0"}>
          Master DSA with <span className="text-lime">Precision</span>
        </h1>

        <p className={mounted ? "anim-fade-up delay-400 mt-6 max-w-2xl text-lg leading-8 text-zinc-400" : "opacity-0"}>
          The ultimate, intelligence-driven LeetCode tracker. 500+ problems, 80+ structural patterns, and real-time cloud synchronization.
        </p>

        {/* Animated Code Block */}
        <div className={mounted ? "anim-scale-in delay-600 mt-12 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[.08] bg-black/50 backdrop-blur-xl shadow-2xl text-left" : "opacity-0"}>
          <div className="flex items-center border-b border-white/[.08] px-4 py-3">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500/80"></div>
              <div className="size-3 rounded-full bg-yellow-500/80"></div>
              <div className="size-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-zinc-500">
              <Terminal size={14} /> system_init.ts
            </div>
          </div>
          <div className="p-6 font-mono text-sm text-lime/90 min-h-[160px]">
            <pre><code>{typedText}<span className="anim-blink">|</span></code></pre>
          </div>
        </div>

        <div className={mounted ? "anim-fade-up delay-1000 mt-12 flex items-center justify-center gap-x-6" : "opacity-0"}>
          {!userId ? (
            <SignInButton mode="modal">
              <button className="group relative inline-flex items-center justify-center gap-3 border border-zinc-800 bg-[#0a0f0c] px-8 py-4 font-mono text-sm tracking-wide text-zinc-300 transition-all hover:border-lime hover:text-lime shadow-[4px_4px_0px_rgba(155,255,46,0.2)] hover:shadow-[4px_4px_0px_rgba(155,255,46,0.8)] hover:-translate-y-[2px] hover:-translate-x-[2px]">
                <span className="text-lime font-bold">{">_"}</span>
                <span>./init_system.sh</span>
              </button>
            </SignInButton>
          ) : (
            <Link href="/dashboard" className="group relative inline-flex items-center justify-center gap-3 border border-zinc-800 bg-[#0a0f0c] px-8 py-4 font-mono text-sm tracking-wide text-zinc-300 transition-all hover:border-lime hover:text-lime shadow-[4px_4px_0px_rgba(155,255,46,0.2)] hover:shadow-[4px_4px_0px_rgba(155,255,46,0.8)] hover:-translate-y-[2px] hover:-translate-x-[2px]">
              <span className="text-lime font-bold">{">_"}</span>
              <span>~/access_dashboard</span>
            </Link>
          )}
        </div>

        <div className={mounted ? "anim-fade-up delay-1500 mt-16 flex justify-center gap-8 text-zinc-500 text-sm border-t border-white/[.05] pt-8 max-w-2xl w-full" : "opacity-0"}>
          <div className="flex items-center gap-2"><Database size={16} /> Real-time Cloud Sync</div>
          <div className="flex items-center gap-2"><Code2 size={16} /> Structural Patterns</div>
          <div className="flex items-center gap-2"><Terminal size={16} /> 100% Secure</div>
        </div>
      </div>
    </div>
  );
}
