import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0c] text-zinc-300 font-mono px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#0a0f0c] text-lime shadow-[0_0_40px_rgba(155,255,46,0.15)] border border-lime/20">
            <Terminal size={48} />
          </div>
        </div>
        
        <div>
          <h1 className="text-lime font-bold text-6xl mb-4">404</h1>
          <p className="text-xl text-white font-bold mb-2">Directory Not Found</p>
          <p className="text-zinc-500 text-sm">
            sys_err: The requested route does not exist in the current workspace.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-3 border border-zinc-800 bg-[#0a0f0c] px-8 py-4 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(155,255,46,1)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(155,255,46,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0c]"
            aria-label="Return to the home directory"
          >
            <span className="text-lime">{">_"}</span> ~/return_home
          </Link>
        </div>
      </div>
    </div>
  );
}
