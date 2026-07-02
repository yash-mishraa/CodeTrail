import { Terminal, Code2, Database } from "lucide-react";
import { Footer } from "@/components/footer";
import { HeroAnimation } from "@/components/hero-animation";
import { AuthButtons } from "@/components/auth-buttons";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f0c] text-zinc-300">
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-lime/20 blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8 text-center">
        
        <div className="anim-fade-up mb-8 flex items-center justify-center gap-3">
          <div className="grid size-16 place-items-center rounded-2xl bg-[#0a0f0c] text-lime text-2xl font-black font-mono shadow-[0_0_30px_rgba(155,255,46,0.2)] border border-lime/20">
            {">_"}
          </div>
        </div>

        <h1 className="anim-fade-up delay-200 font-display max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Master DSA with <span className="text-lime">Precision</span>
        </h1>

        <p className="anim-fade-up delay-400 mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          The ultimate, intelligence-driven LeetCode tracker. 500+ problems, 80+ structural patterns, and real-time cloud synchronization.
        </p>

        {/* Animated Code Block (Client Component) */}
        <HeroAnimation mounted={true} />

        <div className="anim-fade-up delay-1000 mt-12 flex items-center justify-center gap-x-6">
          {/* Auth Logic (Client Component) */}
          <AuthButtons />
        </div>

        <div className="anim-fade-up delay-1500 mt-16 flex justify-center gap-8 text-zinc-500 text-sm border-t border-white/[.05] pt-8 max-w-2xl w-full">
          <div className="flex items-center gap-2"><Database size={16} /> Real-time Cloud Sync</div>
          <div className="flex items-center gap-2"><Code2 size={16} /> Structural Patterns</div>
          <div className="flex items-center gap-2"><Terminal size={16} /> 100% Secure</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
