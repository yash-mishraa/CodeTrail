"use client";

import { Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type PatternFiltersState = {
  category: string;
  difficulty: string;
  status: string;
};

export function PatternFilters({
  filters,
  onChange,
}: {
  filters: PatternFiltersState;
  onChange: (f: PatternFiltersState) => void;
}) {
  const update = (key: keyof PatternFiltersState, value: string) => {
    onChange({ ...filters, [key]: filters[key] === value ? "All" : value });
  };

  return (
    <Card className="mb-6 flex flex-wrap items-center gap-4 p-4 text-sm">
      <div className="flex items-center gap-2 text-zinc-500">
        <Filter size={14} />
        <span className="text-[10px] uppercase tracking-wider">Filters</span>
      </div>
      <div className="h-4 w-px bg-white/10" />
      <div className="flex flex-wrap gap-2">
        {(["Beginner", "Intermediate", "Advanced"] as const).map((diff) => (
          <button
            key={diff}
            onClick={() => update("difficulty", diff)}
            className="focus:outline-none"
          >
            <Badge
              className={cn(
                "transition-colors",
                filters.difficulty === diff
                  ? "border-lime/30 bg-lime/10 text-lime"
                  : "border-white/10 bg-transparent text-zinc-500 hover:border-white/20 hover:text-zinc-300"
              )}
            >
              {diff}
            </Badge>
          </button>
        ))}
      </div>
      <div className="h-4 w-px bg-white/10" />
      <div className="flex flex-wrap gap-2">
        {(["Solved", "Unsolved", "Bookmarked"] as const).map((status) => (
          <button
            key={status}
            onClick={() => update("status", status)}
            className="focus:outline-none"
          >
            <Badge
              className={cn(
                "transition-colors",
                filters.status === status
                  ? "border-lime/30 bg-lime/10 text-lime"
                  : "border-white/10 bg-transparent text-zinc-500 hover:border-white/20 hover:text-zinc-300"
              )}
            >
              {status}
            </Badge>
          </button>
        ))}
      </div>
    </Card>
  );
}
