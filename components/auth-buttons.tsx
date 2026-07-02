"use client";

import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AuthButtons() {
  const { userId, isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return (
      <div className="h-[58px] w-[212px] animate-pulse rounded-lg bg-white/5 border border-white/[.08]"></div>
    );
  }

  return (
    <>
      {!userId ? (
        <SignInButton mode="modal">
          <button className="group relative inline-flex items-center justify-center gap-3 border border-zinc-800 bg-[#0a0f0c] px-8 py-4 font-mono text-sm tracking-wide text-zinc-300 transition-all hover:border-lime hover:text-lime shadow-[4px_4px_0px_rgba(155,255,46,0.2)] hover:shadow-[4px_4px_0px_rgba(155,255,46,0.8)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:scale-95">
            <span className="text-lime font-bold">{">_"}</span>
            <span>./init_system.sh</span>
          </button>
        </SignInButton>
      ) : (
        <Link href="/dashboard" className="group relative inline-flex items-center justify-center gap-3 border border-zinc-800 bg-[#0a0f0c] px-8 py-4 font-mono text-sm tracking-wide text-zinc-300 transition-all hover:border-lime hover:text-lime shadow-[4px_4px_0px_rgba(155,255,46,0.2)] hover:shadow-[4px_4px_0px_rgba(155,255,46,0.8)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:scale-95">
          <span className="text-lime font-bold">{">_"}</span>
          <span>~/access_dashboard</span>
        </Link>
      )}
    </>
  );
}
