"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { X, Github, Terminal } from "lucide-react";

export function GitHubLinkPrompt() {
  const { user, isLoaded } = useUser();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const hasGoogle = user.externalAccounts.some(acc => acc.provider === "oauth_google");
    const hasGithub = user.externalAccounts.some(acc => acc.provider === "oauth_github");
    
    // Check if the prompt has already been shown
    const hasSeenPrompt = localStorage.getItem("github_link_prompt_shown");

    // If they logged in with Google, don't have GitHub linked, and haven't seen the prompt yet
    if (hasGoogle && !hasGithub && !hasSeenPrompt) {
      // Delay slightly for effect
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("github_link_prompt_shown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, user]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-[slideIn_0.3s_ease-out]">
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px) translateY(10px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
      `}</style>
      <div className="relative overflow-hidden rounded-none border border-zinc-800 bg-[#0a0f0c] p-4 shadow-[4px_4px_0px_rgba(155,255,46,0.15)]">
        {/* Terminal Header */}
        <div className="mb-3 flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-mono text-lime">
            <Terminal size={14} />
            <span>sys_msg: auth_warning</span>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
        
        {/* Body */}
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-lime/10 p-2 text-lime border border-lime/20">
            <Github size={16} />
          </div>
          <div className="font-mono">
            <p className="text-[13px] font-bold text-zinc-200">GitHub Identity Missing</p>
            <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">
              Google auth detected. Connect your GitHub account via your profile menu (top right) to synchronize your developer identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
