"use client";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function Progress({ value = 0, className, indicatorClassName }: { value?: number; className?: string; indicatorClassName?: string }) {
  return <ProgressPrimitive.Root className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-white/[.06]", className)} value={value}>
    <ProgressPrimitive.Indicator className={cn("h-full rounded-full bg-lime transition-transform duration-700", indicatorClassName)} style={{ transform: `translateX(-${100 - value}%)` }} />
  </ProgressPrimitive.Root>;
}
