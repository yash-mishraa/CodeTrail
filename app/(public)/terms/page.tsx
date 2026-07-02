import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using the CodeTrail platform.",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">Terms of Service</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-lime text-lg font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using CodeTrail (the "Service"), you agree to be bound by these Terms of Service. 
            If you disagree with any part of the terms, you may not access the Service. These terms apply to all visitors, 
            users, and others who access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">2. Description of Service</h2>
          <p>
            CodeTrail provides an interactive roadmap, progression tracker, and structural analytics for mastering 
            Data Structures and Algorithms (DSA). We provide curated lists of problems, learning patterns, and cloud synchronization. 
            CodeTrail is <strong>not affiliated with, endorsed by, or sponsored by LeetCode</strong>. All problem names and concepts 
            belong to their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">3. User Accounts & Security</h2>
          <p>
            You must provide accurate, complete, and current information when creating an account via our authentication provider (Clerk). 
            You are responsible for safeguarding the password or OAuth account that you use to access the Service and for any activities 
            or actions under your password. You agree not to disclose your password to any third party.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">4. Acceptable Use</h2>
          <p>
            You agree not to use the Service in any way that violates any applicable national or international law or regulation. 
            You agree not to attempt to exploit, harm, or disrupt the Service, its servers (including Supabase instances), or networks connected to the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of CodeTrail 
            and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">6. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. 
            If you wish to terminate your account, you may simply discontinue using the Service and request data deletion.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">7. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. CodeTrail makes no representations or warranties of any kind, 
            express or implied, as to the operation of their services, or the information, content or materials included therein. 
            In no event shall CodeTrail be liable for any indirect, incidental, special, consequential or punitive damages.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">8. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <br/>
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
