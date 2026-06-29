import { TrackerProvider } from "@/hooks/use-tracker";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <TrackerProvider>{children}</TrackerProvider>;
}
