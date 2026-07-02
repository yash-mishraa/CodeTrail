import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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

export const viewport: Viewport = {
  themeColor: '#0a0f0c',
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codetrailapp.site"),
  title: {
    default: "CodeTrail — Master DSA with Precision",
    template: "%s | CodeTrail",
  },
  description: "Master Data Structures & Algorithms through a structured roadmap of 580+ curated problems across 97 learning patterns.",
  keywords: ["DSA", "LeetCode", "Data Structures", "Algorithms", "Programming", "Coding", "Interview Prep"],
  authors: [{ name: "CodeTrail" }],
  creator: "CodeTrail",
  publisher: "CodeTrail",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codetrailapp.site",
    siteName: "CodeTrail",
    title: "CodeTrail — Master DSA with Precision",
    description: "Master Data Structures & Algorithms through a structured roadmap of 580+ curated problems across 97 learning patterns.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeTrail — Master DSA with Precision",
    description: "Master Data Structures & Algorithms through a structured roadmap of 580+ curated problems across 97 learning patterns.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://codetrailapp.site/#organization",
      "name": "CodeTrail",
      "url": "https://codetrailapp.site",
      "logo": "https://codetrailapp.site/logo.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://codetrailapp.site/#website",
      "url": "https://codetrailapp.site",
      "name": "CodeTrail",
      "publisher": {
        "@id": "https://codetrailapp.site/#organization"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://codetrailapp.site/#software",
      "name": "CodeTrail",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
        <body className="font-mono antialiased">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

