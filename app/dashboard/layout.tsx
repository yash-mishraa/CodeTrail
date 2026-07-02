import { TrackerProvider } from "@/hooks/use-tracker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your DSA progress and monitor your learning journey.",
  alternates: {
    canonical: "/dashboard",
  }
};

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <TrackerProvider>{children}</TrackerProvider>;
}
