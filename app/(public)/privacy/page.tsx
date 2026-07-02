import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how CodeTrail handles your data securely using Clerk and Supabase.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-lime text-lg font-bold mb-4">1. Introduction</h2>
          <p>
            At CodeTrail ("we", "our", or "us"), your privacy and data security are our highest priorities. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
            our application. By using CodeTrail, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">2. Data Collection & Authentication</h2>
          <p>
            We use <strong>Clerk</strong> to handle all user authentication securely. When you create an account, Clerk collects 
            essential information such as your email address, name, and profile picture. CodeTrail does not directly store passwords 
            or sensitive authentication secrets on our servers. You can learn more about how Clerk processes your data by reading 
            the <a href="https://clerk.com/privacy" target="_blank" rel="noreferrer" className="text-zinc-200 underline hover:text-lime">Clerk Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">3. Cloud Synchronization & Database</h2>
          <p>
            Your LeetCode progression data, solved problems, and structural pattern analytics are stored securely in <strong>Supabase</strong>, 
            a highly secure, enterprise-grade cloud database. We enforce strict Row Level Security (RLS) policies within Supabase to ensure 
            that your progression data is accessible <em>only</em> by your authenticated user ID. No other users can access your learning data.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">4. Cookies and Tracking</h2>
          <p>
            CodeTrail relies on essential session cookies strictly necessary to maintain your authenticated state (provided via Clerk). 
            We also utilize minimal, privacy-first analytics tools to understand aggregated usage patterns and improve the platform. 
            We do not sell your data to third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">5. Data Deletion</h2>
          <p>
            You have the right to request the complete deletion of your data at any time. If you wish to delete your account, 
            please contact us at the support email provided below. Upon request, we will immediately purge your identity from Clerk 
            and cascade delete all your associated progress records from our Supabase database.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page 
            and updating the "Last updated" date at the bottom of this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <br/>
            <span className="text-white mt-2 block">yashmishra1408@gmail.com</span>
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-white/[.05] text-xs text-zinc-600">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
}
