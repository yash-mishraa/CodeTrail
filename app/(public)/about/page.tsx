import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission behind CodeTrail and our goal to revolutionize DSA learning.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 font-mono text-sm leading-relaxed text-zinc-400">
      <h1 className="font-display text-4xl font-bold text-white mb-8">About the Developer</h1>
      
      <div className="space-y-8">
        <section>
          <p className="text-base text-zinc-300">
            Hi, I'm Yash. CodeTrail didn't start out as a startup or a grand business plan—I originally built it as a personal 
            tool just to practice Data Structures and Algorithms for my own preparation. I wanted a way to intelligently track 
            structural patterns instead of grinding randomly. Somewhere along the way, I realized I had accidentally built a 
            genuinely good product that could help others too.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">The Current Status</h2>
          <p>
            Right now, I am entirely focused on preparing for the <strong>GATE 2027</strong> examinations, which means I'm a bit busy 
            and development on CodeTrail is currently in a steady, maintenance phase. I designed the platform to be completely free, 
            local-first, and self-sufficient so you can use it without interruption.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">The Future</h2>
          <p>
            Once I'm done with GATE 27, I plan to dive back into CodeTrail full-time. My goal is to polish it into a true 
            industry-level product, market it properly, and expand its capabilities. I have a deep interest in <strong>Artificial Intelligence 
            and Machine Learning</strong>, and I eventually want to integrate cutting-edge AI features into CodeTrail to make DSA mastery 
            even more intuitive.
          </p>
        </section>

        <section>
          <h2 className="text-lime text-lg font-bold mb-4">Built by One Person</h2>
          <p>
            Every line of code, the terminal aesthetic, the cloud sync integration, and this very website were built entirely by me. 
            If you're using the app and enjoying it, thank you for being an early part of the journey!
          </p>
        </section>
      </div>
    </div>
  );
}
