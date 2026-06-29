"use client";

import { useState } from "react";
import { useTracker } from "@/hooks/use-tracker";
import { PatternFilters, PatternFiltersState } from "./pattern-filters";
import { PatternCategoryCard } from "./pattern-category-card";

export function PatternRoadmap() {
  const { state } = useTracker();
  const [filters, setFilters] = useState<PatternFiltersState>({
    category: "All",
    difficulty: "All",
    status: "All",
  });

  if (!state.patternCategories) return null;

  return (
    <section id="pattern-roadmap" className="scroll-mt-24 pt-4">
      <PatternFilters filters={filters} onChange={setFilters} />
      
      <div className="space-y-3">
        {state.patternCategories.map((category) => (
          <PatternCategoryCard
            key={category.id}
            category={category}
            filters={filters}
          />
        ))}
      </div>
    </section>
  );
}
