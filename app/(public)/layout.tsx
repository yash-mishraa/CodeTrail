import Link from "next/link";
import { Terminal } from "lucide-react";
import { Footer } from "@/components/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f0c] text-zinc-300">
      
      {/* Minimal Header */}
      <header className="border-b border-white/[.05] bg-[#000000]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lime font-brand font-bold tracking-widest text-sm uppercase transition-opacity hover:opacity-80">
            <Terminal size={18} /> CodeTrail
          </Link>
          <Link href="/dashboard" className="text-xs font-mono text-zinc-400 hover:text-lime transition-colors">
            ~/dashboard
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
