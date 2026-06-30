import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Space_Grotesk, JetBrains_Mono, Orbitron } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CodeTrail — LeetCode Progress Tracker",
  description: "A premium, local-first LeetCode journey dashboard.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "CodeTrail — LeetCode Progress Tracker",
    description: "Master DSA with Precision. The ultimate, intelligence-driven LeetCode tracker.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CodeTrail" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
        <body className="font-mono antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

