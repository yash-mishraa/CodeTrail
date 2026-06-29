export type ProblemLevel = "Basic" | "Standard" | "Pattern" | "Mixed" | "Interview" | "Challenge";
export type PatternDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type PatternProblem = {
  id: string;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  level: ProblemLevel;
  leetcodeUrl: string;
  githubUrl?: string;
  completed: boolean;
  solvedDate?: string;
  notes: string;
  revisions: number;
  favorite: boolean;
};

export type Pattern = {
  id: string;
  name: string;
  description: string;
  theory?: string;
  skillsLearned: string[];
  prerequisites: string[];
  difficulty: PatternDifficulty;
  estimatedHours: number;
  problems: PatternProblem[];
};

export type PatternCategory = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  description: string;
  patterns: Pattern[];
};

/* ── Seed helpers (used by lib/patterns/*.ts) ── */

export type PatternProblemSeed = {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  level: ProblemLevel;
  slug?: string; // override auto-generated slug when LeetCode URL differs from name
};

export type PatternSeed = {
  id: string;
  name: string;
  description: string;
  theory?: string;
  skillsLearned: string[];
  prerequisites: string[];
  difficulty: PatternDifficulty;
  estimatedHours: number;
  problems: PatternProblemSeed[];
};

export type PatternCategorySeed = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  description: string;
  patterns: PatternSeed[];
};

/* ── Builder ── */

const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function buildCategory(seed: PatternCategorySeed): PatternCategory {
  return {
    id: seed.id,
    name: seed.name,
    icon: seed.icon,
    accent: seed.accent,
    description: seed.description,
    patterns: seed.patterns.map((ps) => ({
      id: ps.id,
      name: ps.name,
      description: ps.description,
      theory: ps.theory,
      skillsLearned: ps.skillsLearned,
      prerequisites: ps.prerequisites,
      difficulty: ps.difficulty,
      estimatedHours: ps.estimatedHours,
      problems: ps.problems.map((p) => {
        const slug = p.slug ?? toSlug(p.name);
        return {
          id: `${ps.id}--${slug}`,
          name: p.name,
          difficulty: p.difficulty,
          level: p.level,
          leetcodeUrl: `https://leetcode.com/problems/${slug}/`,
          githubUrl: "",
          completed: false,
          solvedDate: undefined,
          notes: "",
          revisions: 0,
          favorite: false,
        };
      }),
    })),
  };
}
