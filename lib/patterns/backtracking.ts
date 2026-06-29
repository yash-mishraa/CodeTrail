import { PatternCategorySeed } from "@/lib/pattern-types";

export const backtrackingCategory: PatternCategorySeed = {
  id: "backtracking",
  name: "Backtracking",
  icon: "↶",
  accent: "#F472B6",
  description:
    "Systematic exploration of all possible solutions through recursive search",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. Subsets & Combinations
     * ────────────────────────────────────────────── */
    {
      id: "bt-subsets",
      name: "Subsets & Combinations",
      description:
        "Generate all subsets and combinations",
      theory: `
**Intuition:**
Backtracking is essentially a DFS on a state space tree. For subsets and combinations, we are building sets incrementally and deciding at each step whether to include an element or not.

**How to Spot:**
Keywords like "return all possible combinations", "find all subsets", "combination sum". The constraints are usually very small (e.g., $N \\le 20$) because the answer space grows exponentially ($O(2^N)$ or $O(N!)$).

**General Approach:**
Create a recursive function that maintains a \`current_path\` array and an \`index\` indicating the current position in the input. To prevent duplicate combinations, only iterate forward (from \`index\` to end of array). In the loop, append the element, recurse, and then pop the element (backtrack) to explore the next branch.
      `.trim(),
      skillsLearned: ["Subset generation", "Combination enumeration", "Pruning"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Subsets",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Subsets II",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Combinations",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Combination Sum",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Combination Sum II",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Combination Sum III",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Letter Combinations of a Phone Number",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. Permutations
     * ────────────────────────────────────────────── */
    {
      id: "bt-permutations",
      name: "Permutations",
      description:
        "Generate all permutations with various constraints",
      theory: `
**Intuition:**
Unlike combinations where order doesn't matter, permutations require generating all possible orderings of a set of elements. This means any element can appear at any position, as long as it hasn't been used yet.

**How to Spot:**
"Return all permutations", "distinct arrangements", or generating specific orderings. Again, constraints will be extremely small ($N \\le 10$).

**General Approach:**
Use a recursive backtracking function. Instead of starting the loop from the current \`index\`, start from 0 every time. Use a boolean \`visited\` array or set to keep track of which elements are already in the \`current_path\`. If an element is visited, skip it. If duplicates exist in the input, sort the input first and skip adjacent duplicates during the loop to avoid duplicate permutations.
      `.trim(),
      skillsLearned: ["Permutation generation", "Visited tracking", "Deduplication"],
      prerequisites: ["Subsets & Combinations"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Permutations",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Permutations II",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Next Permutation",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Palindrome Partitioning",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Grid Backtracking
     * ────────────────────────────────────────────── */
    {
      id: "bt-grid",
      name: "Grid Backtracking",
      description:
        "Search paths and patterns in 2D grids",
      theory: `
**Intuition:**
Grid backtracking explores paths on a 2D board. It acts like a robot trying every possible direction (up, down, left, right), marking its current spot as visited, moving forward, and then unmarking the spot when it hits a dead end.

**How to Spot:**
"Word Search", "N-Queens", "Sudoku Solver", or finding specific paths in a maze. The grid size is usually small (e.g., $9 \\times 9$ for Sudoku, or word search grids where the word length is short).

**General Approach:**
Iterate over the grid to find a starting point. Call a recursive DFS function from that cell. In the DFS, check bounds, check if the cell is already visited, and check if it meets the criteria. If valid, mark as visited (often by temporarily changing the cell character to \`#\`), recurse to all 4 neighbors, and then restore the original value (backtrack) before returning.
      `.trim(),
      skillsLearned: ["DFS on grids", "Path tracking", "Constraint checking"],
      prerequisites: ["Permutations"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Word Search",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Unique Paths III",
          difficulty: "Hard",
          level: "Standard",
        },
        {
          name: "Sudoku Solver",
          difficulty: "Hard",
          level: "Pattern",
        },
        {
          name: "N-Queens",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "N-Queens II",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Advanced Backtracking
     * ────────────────────────────────────────────── */
    {
      id: "bt-advanced",
      name: "Advanced Backtracking",
      description:
        "Complex constraint satisfaction and optimization",
      theory: `
**Intuition:**
Advanced backtracking problems often combine string manipulation, partitioning, or complex constraints where the branching factor is large but aggressively pruned.

**How to Spot:**
"Generate Parentheses", "Restore IP Addresses", "Expression Add Operators", or partitioning an array into $K$ equal sum subsets. The rules for valid paths are strictly defined and somewhat complex.

**General Approach:**
The core structure remains the same: choose, explore, un-choose. The challenge is entirely in writing the \`isValid\` check and pruning branches as early as possible. For instance, in partitioning into equal sums, if a running sum exceeds the target, immediately return \`false\` to prune that massive branch of the search tree. Sorting inputs descending can also drastically speed up failure detection.
      `.trim(),
      skillsLearned: [
        "Pruning strategies",
        "Constraint propagation",
        "State management",
      ],
      prerequisites: ["Grid Backtracking"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Generate Parentheses",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Restore IP Addresses",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Partition to K Equal Sum Subsets",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Word Search II",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Expression Add Operators",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
