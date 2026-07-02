"use client";

import { useEffect } from "react";
import { AlertOctagon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0c] text-zinc-300 font-mono px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#0a0f0c] text-red-500 shadow-[0_0_40px_rgba(239,68,68,0.15)] border border-red-500/20">
            <AlertOctagon size={48} />
          </div>
        </div>
        
        <div>
          <h1 className="text-red-500 font-bold text-5xl mb-4">500</h1>
          <p className="text-xl text-white font-bold mb-2">sys_panic: exception</p>
          <p className="text-zinc-500 text-sm mb-4">
            An unhandled exception occurred during runtime execution. 
          </p>
          {error.message && (
            <div className="bg-black/50 border border-red-500/20 p-4 rounded-lg text-left overflow-x-auto text-xs text-red-400">
              <code>{error.message}</code>
            </div>
          )}
        </div>

        <div className="pt-8">
          <button 
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-3 border border-red-900 bg-[#0a0f0c] px-8 py-4 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(239,68,68,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0c]"
            aria-label="Attempt to recover and restart the process"
          >
            <span className="text-red-500">{">_"}</span> ./restart_process
          </button>
        </div>
      </div>
    </div>
  );
}
