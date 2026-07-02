"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const codeSnippet = `const CodeTrail = {
  status: "Optimized",
  problems: 501,
  patterns: 80,
  init: async () => {
    await compileSuccess();
    return masterDSA();
  }
};`;

export function HeroAnimation({ mounted }: { mounted: boolean }) {
  const [typedText, setTypedText] = useState("");

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
  );
}
