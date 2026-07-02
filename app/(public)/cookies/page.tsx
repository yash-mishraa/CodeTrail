import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how CodeTrail uses cookies for authentication and analytics.",
};

export default function CookiePolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">Cookie Policy</h1>
      
      <div className="space-y-8">
        <section>
          <p>
            This Cookie Policy explains how CodeTrail uses cookies and similar technologies to recognize you when you 
            visit our application. It explains what these technologies are and why we use them, as well as your rights 
            to control our use of them.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
            as well as to provide reporting information.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">2. Essential Authentication Cookies (Clerk)</h2>
          <p>
            CodeTrail relies on essential cookies to maintain your authenticated session. We use <strong>Clerk</strong> to 
            manage user authentication securely. Clerk sets cookies that are strictly necessary for the platform to function 
            (e.g., verifying you are logged in, protecting against cross-site request forgery, and maintaining session state 
            across page reloads). Because these cookies are strictly necessary for the core functionality of the dashboard, 
            they cannot be refused.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">3. Local Storage</h2>
          <p>
            In addition to cookies, CodeTrail uses HTML5 Local Storage to save specific UI preferences (such as the 
            dismissal of one-time UI prompts and layout configurations) directly on your device. This data is not sent 
            to our servers and is used purely to enhance your local browsing experience.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">4. Analytics & Performance Cookies</h2>
          <p>
            We may use minimalistic, privacy-preserving analytics tools (such as Vercel Web Analytics) to collect aggregated, 
            anonymous data about page views and performance metrics. These tools help us understand which DSA patterns are 
            most popular and how the application performs globally. We do not use intrusive tracking cookies or cross-site 
            advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">5. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls 
            to accept or refuse cookies. If you choose to reject cookies, you may still use our website, but your access 
            to the core functionality of the platform (such as logging into the dashboard and saving progress) will be completely restricted.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">6. Contact</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at: <br/>
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
