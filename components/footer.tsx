import Link from "next/link";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[.05] bg-[#0a0f0c] text-zinc-400 font-mono text-xs">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-lime font-brand font-bold tracking-widest text-[14px] uppercase">
              <Terminal size={16} /> CodeTrail
            </Link>
            <p className="text-sm leading-6 text-zinc-500 max-w-xs">
              Master Data Structures & Algorithms through a structured roadmap of 580+ curated problems across 97 learning patterns.
            </p>
            <div className="flex gap-x-5">
              <a href="https://github.com/yash-mishraa" className="text-zinc-500 hover:text-lime transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={18} />
              </a>
              <a href="https://x.com/andhabilla" className="text-zinc-500 hover:text-lime transition-colors">
                <span className="sr-only">X</span>
                <XIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/yash-mishra-700b2333b/" className="text-zinc-500 hover:text-lime transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold text-white tracking-wider uppercase mb-6 text-[10px]">Platform</h3>
                <ul role="list" className="space-y-4">
                  <li><Link href="/dashboard" className="hover:text-lime transition-colors">Dashboard</Link></li>
                  <li><Link href="/dashboard?tab=roadmap" className="hover:text-lime transition-colors">Roadmap</Link></li>
                  <li><Link href="/dashboard?tab=analytics" className="hover:text-lime transition-colors">Analytics</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-white tracking-wider uppercase mb-6 text-[10px]">Resources</h3>
                <ul role="list" className="space-y-4">
                  <li><Link href="/about" className="hover:text-lime transition-colors">About Us</Link></li>
                  <li><Link href="/faq" className="hover:text-lime transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-lime transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold text-white tracking-wider uppercase mb-6 text-[10px]">Legal</h3>
                <ul role="list" className="space-y-4">
                  <li><Link href="/privacy" className="hover:text-lime transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-lime transition-colors">Terms of Service</Link></li>
                  <li><Link href="/cookies" className="hover:text-lime transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-white tracking-wider uppercase mb-6 text-[10px]">System Status</h3>
                <ul role="list" className="space-y-4">
                  <li className="flex items-center gap-2 text-lime">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
                    </span>
                    All systems operational
                  </li>
                  <li className="flex items-center gap-2 text-zinc-500">
                    v1.0.0 (Launch Release)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/[.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px]">
            &copy; {currentYear} CodeTrail. All rights reserved. Not affiliated with LeetCode.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-zinc-600">
            <Mail size={12} /> yashmishra1408@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
