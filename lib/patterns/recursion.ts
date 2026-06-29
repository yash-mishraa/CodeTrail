import { PatternCategorySeed } from "@/lib/pattern-types";

export const recursionCategory: PatternCategorySeed = {
  id: "recursion",
  name: "Recursion",
  icon: "∞",
  accent: "#A78BFA",
  description:
    "Build recursive thinking from basic patterns to divide and conquer",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. Basic Recursion
     * ────────────────────────────────────────────── */
    {
      id: "rec-basic",
      name: "Basic Recursion",
      description:
        "Foundation of recursive problem solving",
      theory: `
### Intuition
Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. The core idea is to define a "base case" that can be solved without further recursion, and a "recursive step" that moves the problem towards the base case.

### How to Spot It
- The problem can be naturally broken down into similar subproblems.
- You find yourself needing to perform the exact same operation repeatedly with slightly smaller inputs.
- The problem description inherently involves a recursive structure like a tree, linked list, or mathematical sequence (e.g., Fibonacci).

### General Approach
1. **Base Case:** Identify the simplest, smallest instance of the problem that can be answered immediately.
2. **Recursive Step:** Formulate the relationship between a problem and its subproblems.
3. **Trust the Recursion:** Assume your recursive call gives the correct answer for smaller inputs, and use it to construct the answer for the current input.
      `,
      skillsLearned: ["Base cases", "Recursive calls", "Call stack understanding"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Fibonacci Number",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Power of Two",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Power of Three",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Reverse String",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Swap Nodes in Pairs",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Pow(x, n)",
          difficulty: "Medium",
          level: "Interview",
          slug: "powx-n",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. Divide and Conquer
     * ────────────────────────────────────────────── */
    {
      id: "rec-divide-conquer",
      name: "Divide and Conquer",
      description:
        "Break problems into smaller subproblems",
      theory: `
### Intuition
Divide and Conquer is a specific recursive technique where you break a large problem into two or more independent subproblems of the same type, solve them recursively, and then merge their results to form the final answer.

### How to Spot It
- The problem asks to sort, search, or find an optimal element in a large dataset, and standard linear approaches are too slow.
- The input can be easily split into halves or partitions.
- You need to achieve $O(N \\log N)$ time complexity.

### General Approach
1. **Divide:** Split the input data into two (or more) disjoint subsets.
2. **Conquer:** Recursively solve the problem on each subset. Base cases are usually subsets of size 0 or 1.
3. **Combine:** Merge the solutions of the subproblems into a solution for the original problem. A classic example is the merge step in Merge Sort.
      `,
      skillsLearned: ["Merge sort", "Quick select", "Binary recursion"],
      prerequisites: ["Basic Recursion"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Maximum Subarray",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Merge Sort Array",
          difficulty: "Medium",
          level: "Standard",
          slug: "sort-an-array",
        },
        {
          name: "Sort List",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Kth Largest Element in an Array",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Count of Smaller Numbers After Self",
          difficulty: "Hard",
          level: "Challenge",
        },
        {
          name: "Median of Two Sorted Arrays",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Advanced Recursion
     * ────────────────────────────────────────────── */
    {
      id: "rec-advanced",
      name: "Advanced Recursion",
      description:
        "Complex recursive structures and memoization",
      theory: `
### Intuition
Advanced recursion often involves complex state management, backtracking, or memoization to optimize overlapping subproblems. When a recursive tree has many overlapping branches (solving the exact same subproblem multiple times), we store the results in a cache to prevent redundant work.

### How to Spot It
- The recursive solution explores a large search space with multiple branches (e.g., combinatorial search or game theory).
- There are identical recursive calls being made with the same parameters.
- Standard recursion results in a Time Limit Exceeded (TLE) error.

### General Approach
1. **Identify the State:** Determine exactly what parameters uniquely define a subproblem.
2. **Memoize:** Introduce a hash map or array (cache) to store the result of a subproblem once computed.
3. **Check Cache First:** At the very beginning of the recursive function, check if the current state exists in the cache. If so, return it immediately.
      `,
      skillsLearned: [
        "Multiple recursion branches",
        "Memoization",
        "State passing",
      ],
      prerequisites: ["Divide and Conquer"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Different Ways to Add Parentheses",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Predict the Winner",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Strobogrammatic Number II",
          difficulty: "Medium",
          level: "Pattern",
          slug: "strobogrammatic-number-ii",
        },
        {
          name: "Regular Expression Matching",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Scramble String",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
