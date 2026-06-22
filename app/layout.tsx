import type { Metadata } from "next";
import "./globals.css";
import { TrackerProvider } from "@/hooks/use-tracker";

export const metadata: Metadata = {
  title: "CodeTrail — LeetCode Progress Tracker",
  description: "A premium, local-first LeetCode journey dashboard.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className="font-mono antialiased"><TrackerProvider>{children}</TrackerProvider></body></html>;
}
