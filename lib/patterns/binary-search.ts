import { PatternCategorySeed } from "@/lib/pattern-types";

export const binarySearchCategory: PatternCategorySeed = {
  id: "binary-search",
  name: "Binary Search",
  icon: "⌕",
  accent: "#FFD166",
  description:
    "Master the art of halving the search space",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. Classic Binary Search
     * ────────────────────────────────────────────── */
    {
      id: "bs-classic",
      name: "Classic Binary Search",
      description:
        "Standard binary search on sorted arrays",
      theory: `
**Intuition:**
Binary search works by maintaining a search space \`[left, right]\` and repeatedly dividing it in half. Because the array is sorted, checking the middle element allows us to definitively discard half of the search space.

**How to Spot:**
Keywords like "sorted array", "sorted list", or an explicit requirement for $O(\\log N)$ time complexity.

**General Approach:**
Use a \`while (left <= right)\` loop. Calculate the midpoint as \`mid = left + Math.floor((right - left) / 2)\` to prevent integer overflow. Compare \`nums[mid]\` to the target and update \`left = mid + 1\` or \`right = mid - 1\` accordingly.
      `.trim(),
      skillsLearned: ["Basic binary search", "Boundary finding", "Template mastery"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Binary Search",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Search Insert Position",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Guess Number Higher or Lower",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "First Bad Version",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Find Smallest Letter Greater Than Target",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Sqrt(x)",
          difficulty: "Easy",
          level: "Pattern",
          slug: "sqrtx",
        },
        {
          name: "Valid Perfect Square",
          difficulty: "Easy",
          level: "Pattern",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. Search on Answer
     * ────────────────────────────────────────────── */
    {
      id: "bs-answer",
      name: "Search on Answer",
      description:
        "Binary search on the answer space instead of the input",
      theory: `
**Intuition:**
Sometimes the input isn't sorted, but the *range of possible answers* is monotonic. If a condition is valid for answer $X$, and it will definitely be valid for all answers $> X$, you can binary search the optimal $X$.

**How to Spot:**
Problems asking to "minimize the maximum", "maximize the minimum", or find the "minimum capacity/speed/time" to complete a task given constraints.

**General Approach:**
Determine the absolute minimum and maximum possible answers; these become your \`left\` and \`right\` pointers. Write a helper function \`isValid(mid)\` that checks if the candidate answer \`mid\` satisfies the problem conditions. Binary search the range using this helper function to hone in on the optimal boundary.
      `.trim(),
      skillsLearned: ["Monotonic predicate", "Minimize maximum", "Maximize minimum"],
      prerequisites: ["Classic Binary Search"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Koko Eating Bananas",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Capacity To Ship Packages Within D Days",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Minimum Number of Days to Make m Bouquets",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Magnetic Force Between Two Balls",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Split Array Largest Sum",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Aggressive Cows",
          difficulty: "Hard",
          level: "Challenge",
          slug: "aggressive-cows",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Binary Search on Matrix
     * ────────────────────────────────────────────── */
    {
      id: "bs-matrix",
      name: "Binary Search on Matrix",
      description:
        "Apply binary search to 2D sorted structures",
      theory: `
**Intuition:**
When a 2D matrix is sorted, you can either treat it as a flattened 1D sorted array or exploit its row/column sorted properties to eliminate entire rows or columns at a time.

**How to Spot:**
The input is a 2D grid/matrix where rows are sorted left-to-right and/or columns are sorted top-to-bottom.

**General Approach:**
If the entire matrix is strictly sorted (the last element of a row is less than the first of the next), treat it as a 1D array of length $M \\times N$ and map \`mid\` to \`[mid / N][mid % N]\`. If rows and columns are sorted independently, start at the top-right (or bottom-left) corner. If the target is smaller, move left; if larger, move down. This traverses the matrix in $O(M + N)$ time.
      `.trim(),
      skillsLearned: ["Row-column search", "Flattened matrix search"],
      prerequisites: ["Classic Binary Search"],
      difficulty: "Intermediate",
      estimatedHours: 2,
      problems: [
        {
          name: "Count Negative Numbers in a Sorted Matrix",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Search a 2D Matrix",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Search a 2D Matrix II",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Kth Smallest Element in a Sorted Matrix",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Advanced Binary Search
     * ────────────────────────────────────────────── */
    {
      id: "bs-advanced",
      name: "Advanced Binary Search",
      description:
        "Complex binary search applications",
      theory: `
**Intuition:**
Binary search can be applied even when an array isn't perfectly sorted, as long as you can reliably determine which half of the array contains the target or the inflection point.

**How to Spot:**
"Rotated sorted arrays", "finding a peak element", "median of two sorted arrays", or problems asking you to find an element in a partially sorted structure in $O(\\log N)$ time.

**General Approach:**
For rotated arrays, compare the middle element to the ends to determine which half is perfectly sorted. Check if your target falls within the bounds of that perfectly sorted half. If it does, discard the other half; otherwise, discard the sorted half.
      `.trim(),
      skillsLearned: ["Rotated array search", "Peak finding", "Median finding"],
      prerequisites: ["Search on Answer"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Find Minimum in Rotated Sorted Array",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Search in Rotated Sorted Array",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Find Peak Element",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Find First and Last Position of Element in Sorted Array",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Time Based Key-Value Store",
          difficulty: "Medium",
          level: "Interview",
          slug: "time-based-key-value-store",
        },
        {
          name: "Median of Two Sorted Arrays",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
