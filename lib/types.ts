export type Difficulty = "Easy" | "Medium" | "Hard";

export type Problem = {
  id: string;
  name: string;
  difficulty: Difficulty;
  topic: string;
  leetcodeUrl: string;
  githubUrl?: string;
  completed: boolean;
  solvedDate?: string;
  notes: string;
  revisions: number;
  favorite: boolean;
};

export type Phase = {
  id: number;
  name: string;
  target: number;
  icon: string;
  accent: string;
  topics: string[];
  prerequisites: string[];
  dependsOn: string[];
  children: string[];
  problems: Problem[];
};

export type TrackerState = {
  phases: Phase[];
  patternCategories?: import("@/lib/pattern-types").PatternCategory[];
  createdAt: string;
};
