import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about CodeTrail features, syncing, and pricing.",
};

export default function FAQ() {
  const faqs = [
    {
      question: "Is CodeTrail affiliated with LeetCode?",
      answer: "No. CodeTrail is an independent tracking and analytics dashboard. It is not affiliated with, endorsed by, or sponsored by LeetCode. We provide a structured roadmap and progression system to help you track your own learning journey."
    },
    {
      question: "How does Cloud Synchronization work?",
      answer: "When you mark a problem as complete, we securely store that status in our Supabase database. Because your data is tied to your authenticated Clerk account, you can log in from your laptop, desktop, or mobile device and instantly see your updated progress."
    },
    {
      question: "Can I connect my GitHub account?",
      answer: "Yes! If you initially signed up with Google or Email, you can link your GitHub account by clicking on your user profile picture in the dashboard and selecting 'Manage Account'. This helps centralize your developer identity."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We do not store passwords. Authentication is handled entirely by Clerk. Your progression data is stored in Supabase with strict Row Level Security (RLS) policies, meaning nobody else can query or access your learning history."
    },
    {
      question: "How do the Structural Patterns work?",
      answer: "Instead of grinding random problems, CodeTrail groups problems by their underlying algorithmic pattern (e.g., Sliding Window, Fast & Slow Pointers, Topological Sort). By completing problems within a specific pattern, you build genuine algorithmic intuition."
    },
    {
      question: "Is CodeTrail free?",
      answer: "CodeTrail is currently completely free to use. Our goal is to provide the best possible learning experience for developers preparing for technical interviews."
    }
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-8 mt-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/[.05] pb-8">
            <h3 className="text-lime text-lg font-bold mb-4">{faq.question}</h3>
            <p className="text-zinc-400">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 rounded-2xl bg-lime/10 border border-lime/20 p-8 text-center">
        <h3 className="text-white font-bold mb-2">Still have questions?</h3>
        <p className="mb-6">Our support team is here to help you get the most out of CodeTrail.</p>
        <a href="/contact" className="inline-flex items-center justify-center bg-lime text-black font-bold px-6 py-3 hover:bg-lime/90 transition-colors">
          Contact Support
        </a>
      </div>
    </div>
  );
}
