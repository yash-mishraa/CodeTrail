import Link from "next/link";
import { WifiOff, Home } from "lucide-react";

export const metadata = {
  title: "Offline | CodeTrail",
};

export default function OfflinePage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0f0c] flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="max-w-md w-full space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
        
        <div className="flex justify-center">
          <div className="h-24 w-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
            <WifiOff size={40} className="text-red-500" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-brand font-bold tracking-wider text-white">
            CONNECTION LOST
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            You are currently offline. Please check your internet connection and try again.
          </p>
        </div>

        <div className="pt-6">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-lime text-[#0a0f0c] px-6 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-lime/90 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Home size={18} />
            Return Home
          </Link>
        </div>
        
      </div>
    </div>
  );
}
