import { Metadata } from "next";
import { Mail, Github, Linkedin } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the CodeTrail support team.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">Contact</h1>
      
      <div className="space-y-8">
        <section>
          <p className="text-base text-zinc-300">
            Have a question, feedback, or just want to chat about DSA, GATE prep, or Artificial Intelligence? 
            Since I'm a solo developer currently focused on preparing for GATE 2027, I might take a little while to reply, 
            but I'd love to hear from you. Reach out through any of the channels below!
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          
          <div className="rounded-2xl border border-white/[.05] bg-black/50 p-8 flex flex-col items-center text-center hover:border-lime/30 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/10 text-lime mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Email Support</h3>
            <p className="text-xs text-zinc-500 mb-4">For account issues, data deletion requests, or general inquiries.</p>
            <a href="mailto:yashmishra1408@gmail.com" className="text-lime hover:underline mt-auto">
              yashmishra1408@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-white/[.05] bg-black/50 p-8 flex flex-col items-center text-center hover:border-lime/30 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/10 text-lime mb-4">
              <Github size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">GitHub Profile</h3>
            <p className="text-xs text-zinc-500 mb-4">Check out my other projects or follow my open-source work.</p>
            <a href="https://github.com/yash-mishraa" target="_blank" rel="noreferrer" className="text-lime hover:underline mt-auto">
              github.com/yash-mishraa
            </a>
          </div>

        </section>

        <section className="mt-12 pt-8 border-t border-white/[.05]">
          <h2 className="text-white font-bold mb-6 text-center">Follow our updates</h2>
          <div className="flex justify-center gap-8">
            <a href="https://x.com/andhabilla" className="flex flex-col items-center gap-2 text-zinc-500 hover:text-lime transition-colors">
              <XIcon size={24} />
              <span className="text-xs">X</span>
            </a>
            <a href="https://www.linkedin.com/in/yash-mishra-700b2333b/" className="flex flex-col items-center gap-2 text-zinc-500 hover:text-lime transition-colors">
              <Linkedin size={24} />
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
