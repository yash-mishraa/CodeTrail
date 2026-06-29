import { PatternCategorySeed } from "@/lib/pattern-types";

export const dpCategory: PatternCategorySeed = {
  id: "dp",
  name: "Dynamic Programming",
  icon: "f(n)",
  accent: "#C084FC",
  description:
    "Build intuition for DP from basic recurrences to advanced bitmask and tree DP",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. 1D Dynamic Programming
     * ────────────────────────────────────────────── */
    {
      id: "dp-1d",
      name: "1D Dynamic Programming",
      description:
        "Linear DP problems with single-dimensional state",
      theory: `
**Intuition:**
Dynamic Programming (DP) is essentially recursion with caching (memoization) or building solutions from the ground up (tabulation). 1D DP applies when the state of the subproblem can be captured by a single changing variable (like an index or a capacity).

**How to Spot:**
Problems asking for the "maximum", "minimum", or "number of ways" where making a decision at the current step only depends on a few previous steps in a linear sequence (e.g., arrays or strings).

**General Approach:**
Define your state variable, usually \`dp[i]\`, representing the answer for the subproblem ending at index \`i\`. Determine the base cases (e.g., \`dp[0]\`). Formulate the recurrence relation—how \`dp[i]\` relates to \`dp[i-1]\`, \`dp[i-2]\`, etc. Finally, decide on a top-down (memoized recursion) or bottom-up (iterative array) implementation.
      `.trim(),
      skillsLearned: ["Memoization", "Tabulation", "State definition"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Fibonacci Number",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "N-th Tribonacci Number",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Climbing Stairs",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Min Cost Climbing Stairs",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "House Robber",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "House Robber II",
          difficulty: "Medium",
          level: "Mixed",
          slug: "house-robber-ii",
        },
        {
          name: "Decode Ways",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. Fibonacci Pattern
     * ────────────────────────────────────────────── */
    {
      id: "dp-fibonacci",
      name: "Fibonacci Pattern",
      description:
        "Problems following the Fibonacci recurrence pattern",
      theory: `
**Intuition:**
The Fibonacci pattern is the simplest form of 1D DP where the current state explicitly depends only on the immediate two (or $k$) previous states. 

**How to Spot:**
Problems that feel like "Climbing Stairs" (you can take 1 or 2 steps). They often ask for the number of ways to reach a target or the minimum cost to reach the end of an array.

**General Approach:**
The recurrence is typically $dp[i] = dp[i-1] + dp[i-2]$ or $dp[i] = \\min(dp[i-1], dp[i-2]) + cost[i]$. Because you only need the last two values to compute the next, you can optimize space complexity from $O(N)$ down to $O(1)$ by using just two variables instead of a full DP array.
      `.trim(),
      skillsLearned: [
        "Fibonacci recurrence",
        "Space optimization",
        "Matrix exponentiation",
      ],
      prerequisites: ["1D DP"],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Fibonacci Number",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Climbing Stairs",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "N-th Tribonacci Number",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Delete and Earn",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Minimum Cost For Tickets",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Knapsack Pattern
     * ────────────────────────────────────────────── */
    {
      id: "dp-knapsack",
      name: "Knapsack Pattern",
      description: "0/1 and unbounded knapsack variants",
      theory: `
**Intuition:**
The Knapsack problem is a classic optimization problem. You have a limited capacity and a set of items, each with a weight and a value. You want to maximize the value without exceeding the capacity. In 0/1 Knapsack, you can either take an item or leave it. In Unbounded Knapsack, you can take an item multiple times.

**How to Spot:**
Problems giving you a target "sum", "capacity", or "budget", and asking you to find combinations, subsets, or max/min values using a given set of numbers or items.

**General Approach:**
For 0/1 Knapsack, the DP state is usually \`dp[i][w]\` (max value using first \`i\` items with capacity \`w\`). The recurrence is $dp[i][w] = \\max(dp[i-1][w], value[i] + dp[i-1][w - weight[i]])$. This can be space-optimized to a 1D array by iterating weights backwards. For unbounded knapsack, iterate weights forwards.
      `.trim(),
      skillsLearned: ["0/1 knapsack", "Unbounded knapsack", "Subset sum"],
      prerequisites: ["1D DP"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Partition Equal Subset Sum",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Target Sum",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Last Stone Weight II",
          difficulty: "Medium",
          level: "Pattern",
          slug: "last-stone-weight-ii",
        },
        {
          name: "Coin Change",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Coin Change II",
          difficulty: "Medium",
          level: "Mixed",
          slug: "coin-change-ii",
        },
        {
          name: "Ones and Zeroes",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Profitable Schemes",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Subsequence DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-subsequence",
      name: "Subsequence DP",
      description:
        "LIS, LCS, and edit distance family of problems",
      theory: `
**Intuition:**
A subsequence is derived from a sequence by deleting zero or more elements without changing the order of the remaining elements. DP is highly effective here because the optimal subsequence for a prefix of an array/string can be extended.

**How to Spot:**
Keywords like "longest common subsequence", "edit distance", or any string/array problem asking to form a target by deleting characters.

**General Approach:**
Use a 2D DP array where \`dp[i][j]\` represents the answer for the prefix of string $A$ up to $i$ and string $B$ up to $j$. If $A[i] == B[j]$, usually $dp[i][j] = 1 + dp[i-1][j-1]$. If they don't match, you take the optimal of skipping a character in $A$ or $B$, e.g., $\\max(dp[i-1][j], dp[i][j-1])$.
      `.trim(),
      skillsLearned: [
        "Longest common subsequence",
        "Edit distance",
        "Subsequence counting",
      ],
      prerequisites: ["Knapsack Pattern"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Longest Common Subsequence",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Longest Increasing Subsequence",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Delete Operation for Two Strings",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Minimum ASCII Delete Sum for Two Strings",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Edit Distance",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Interleaving String",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Distinct Subsequences",
          difficulty: "Hard",
          level: "Challenge",
        },
        {
          name: "Shortest Common Supersequence",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 5. Longest Increasing Subsequence Pattern
     * ────────────────────────────────────────────── */
    {
      id: "dp-lis",
      name: "Longest Increasing Subsequence Pattern",
      description:
        "LIS and patience sorting variations",
      theory: `
**Intuition:**
The Longest Increasing Subsequence (LIS) seeks the longest subsequence whose elements are strictly increasing. The standard DP approach builds the LIS ending at each specific index.

**How to Spot:**
Problems asking for the "longest increasing/decreasing subsequence", "maximum envelopes to nest", or "longest chain of pairs".

**General Approach:**
**$O(N^2)$ DP:** Let \`dp[i]\` be the length of the LIS ending at \`i\`. For every \`i\`, iterate through all \`j < i\`. If \`nums[i] > nums[j]\`, then $dp[i] = \\max(dp[i], dp[j] + 1)$.
**$O(N \\log N)$ Binary Search:** Maintain an array \`tails\` where \`tails[k]\` is the smallest tail of all increasing subsequences of length $k+1$. Iterate through the array and use binary search to update \`tails\`.
      `.trim(),
      skillsLearned: [
        "O(n²) LIS",
        "O(n log n) LIS",
        "LIS applications",
      ],
      prerequisites: ["Subsequence DP"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Longest Increasing Subsequence",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Number of Longest Increasing Subsequence",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Largest Divisible Subset",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Maximum Length of Pair Chain",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Longest String Chain",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Russian Doll Envelopes",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 6. Interval DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-interval",
      name: "Interval DP",
      description:
        "DP over intervals/ranges of the input",
      theory: `
**Intuition:**
Interval DP solves problems by calculating the optimal answer for small subarrays (intervals) and merging them to find answers for larger intervals. The state usually involves a left index \`i\` and a right index \`j\`.

**How to Spot:**
Problems where you make choices at the boundaries of an array (e.g., removing elements from the ends) or where merging two adjacent elements reduces the array size (e.g., Matrix Chain Multiplication, bursting balloons).

**General Approach:**
Let \`dp[i][j]\` be the optimal answer for the interval \`[i, j]\`. Iterate over the length of the interval \`len\` from 1 to $N$. Then, iterate the start index \`i\` from 0 to $N - len$. The right index is $j = i + len - 1$. For each interval, try all possible splitting points $k$ between $i$ and $j$ to find the optimal combination.
      `.trim(),
      skillsLearned: [
        "Range-based DP",
        "Optimal substructure on intervals",
        "Matrix chain",
      ],
      prerequisites: ["Subsequence DP"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "Stone Game",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Minimum Cost Tree From Leaf Values",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Minimum Score Triangulation of Polygon",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Burst Balloons",
          difficulty: "Hard",
          level: "Mixed",
        },
        {
          name: "Palindrome Partitioning II",
          difficulty: "Hard",
          level: "Interview",
          slug: "palindrome-partitioning-ii",
        },
        {
          name: "Strange Printer",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 7. 2D Dynamic Programming
     * ────────────────────────────────────────────── */
    {
      id: "dp-2d",
      name: "2D Dynamic Programming",
      description:
        "DP with two-dimensional state space",
      theory: `
**Intuition:**
2D DP is used when the state depends on two variables. This is extremely common for grid traversal problems, or problems involving two distinct sequences.

**How to Spot:**
Grid-based movement (e.g., "Unique Paths", "Minimum Path Sum"), string comparison problems, or when you need to track both an index and a specific state (like "Buy and Sell Stock with Cooldown").

**General Approach:**
Create a 2D array \`dp[i][j]\`. For grid problems, this usually maps directly to the grid coordinates, and the recurrence is something like $dp[i][j] = grid[i][j] + \\max(dp[i-1][j], dp[i][j-1])$. Be careful with edge cases at the boundaries of the 2D array (row 0 and column 0).
      `.trim(),
      skillsLearned: ["Grid DP", "Two-string DP", "Path counting"],
      prerequisites: ["1D DP"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Unique Paths",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Unique Paths II",
          difficulty: "Medium",
          level: "Standard",
          slug: "unique-paths-ii",
        },
        {
          name: "Minimum Path Sum",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Triangle",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Maximal Square",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Longest Common Subsequence",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Best Time to Buy and Sell Stock with Cooldown",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Best Time to Buy and Sell Stock with Transaction Fee",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 8. Bitmask DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-bitmask",
      name: "Bitmask DP",
      description:
        "DP with bitmask state representation for subset problems",
      theory: `
**Intuition:**
When you need to keep track of a set of visited/used items, and the number of items is very small (usually $\\le 20$), you can use an integer to represent a set. The $i$-th bit is 1 if the $i$-th item is in the set, and 0 otherwise.

**How to Spot:**
Constraints where $N \\le 20$. Problems asking for permutations, subset partitions, or "Traveling Salesman" variations where the exact combination of visited nodes matters.

**General Approach:**
The DP state is usually \`dp[mask]\` or \`dp[mask][last_node]\`. Iterate through all possible masks from 0 to $(2^N - 1)$. For a given mask, iterate through the bits. If a bit is set, try transitioning from a state where that bit was off: $dp[mask] = \\min(dp[mask], dp[mask \\oplus (1 \\ll i)] + cost)$.
      `.trim(),
      skillsLearned: [
        "Bitmask enumeration",
        "Subset DP",
        "Traveling salesman",
      ],
      prerequisites: ["2D DP"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "Can I Win",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Partition to K Equal Sum Subsets",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Find the Shortest Superstring",
          difficulty: "Hard",
          level: "Pattern",
        },
        {
          name: "Smallest Sufficient Team",
          difficulty: "Hard",
          level: "Mixed",
        },
        {
          name: "Maximum Students Taking Exam",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 9. Tree DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-tree",
      name: "Tree DP",
      description:
        "Dynamic programming on tree structures",
      theory: `
**Intuition:**
Tree DP applies dynamic programming concepts to trees. Since trees are naturally recursive graphs without cycles, we can compute answers for subtrees and combine them to form the answer for the parent node.

**How to Spot:**
Optimization problems on trees, like "maximum path sum", "minimum cameras to cover all nodes", or "longest zig-zag path".

**General Approach:**
Use a post-order DFS. The recursive function should calculate and return the DP states for the current subtree. For example, in "House Robber III", the function returns \`[max_if_robbed, max_if_not_robbed]\`. The parent uses these returned values from its left and right children to compute its own state, passing it further up the recursion stack.
      `.trim(),
      skillsLearned: [
        "Subtree DP",
        "Rerooting technique",
        "Diameter computation",
      ],
      prerequisites: ["2D DP"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "House Robber III",
          difficulty: "Medium",
          level: "Basic",
          slug: "house-robber-iii",
        },
        {
          name: "Longest ZigZag Path in a Binary Tree",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Distribute Coins in Binary Tree",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Binary Tree Maximum Path Sum",
          difficulty: "Hard",
          level: "Mixed",
        },
        {
          name: "Binary Tree Cameras",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Sum of Distances in Tree",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 10. Digit DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-digit",
      name: "Digit DP",
      description:
        "Count numbers with specific digit properties in a range",
      theory: `
**Intuition:**
Digit DP is a specialized technique used to count the number of integers in a range $[L, R]$ that satisfy a certain property related to their digits. Instead of iterating through all numbers (which is too slow), we build the numbers digit by digit.

**How to Spot:**
Problems asking to count numbers in a massive range, like $1$ to $10^{18}$, that contain certain digits, lack certain digits, or where the digits satisfy a mathematical property.

**General Approach:**
Instead of counting from $L$ to $R$, count from $0$ to $R$ and subtract $0$ to $L-1$. Build the number from the most significant digit to the least. The DP state typically looks like \`dp(index, tight, leading_zero, custom_state)\`, where \`tight\` is a boolean indicating if the digits chosen so far are exactly equal to the prefix of the upper bound $R$.
      `.trim(),
      skillsLearned: [
        "Digit-by-digit construction",
        "Tight constraint",
        "Leading zeros",
      ],
      prerequisites: ["Bitmask DP"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Count Numbers with Unique Digits",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Numbers At Most N Given Digit Set",
          difficulty: "Hard",
          level: "Standard",
        },
        {
          name: "Non-negative Integers without Consecutive Ones",
          difficulty: "Hard",
          level: "Pattern",
        },
        {
          name: "Number of Digit One",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 11. String DP
     * ────────────────────────────────────────────── */
    {
      id: "dp-string",
      name: "String DP",
      description:
        "DP on strings for matching, editing, and transformation",
      theory: `
**Intuition:**
String DP applies dynamic programming to string manipulation problems. It excels at finding patterns, minimum edit operations, and longest common sub-structures by comparing prefixes of strings.

**How to Spot:**
Problems asking for "Wildcard Matching", "Regular Expression Matching", "Word Break", or finding the minimum operations to convert one string into another.

**General Approach:**
For two strings, use a 2D array \`dp[i][j]\` where the state represents the solution for string $S$ up to index $i$ and string $T$ up to index $j$. For single strings, 1D DP is common, where \`dp[i]\` represents the property up to index $i$ (e.g., if the string prefix can be segmented into dictionary words).
      `.trim(),
      skillsLearned: [
        "Palindrome DP",
        "Regular expression matching",
        "Wildcard matching",
      ],
      prerequisites: ["Subsequence DP"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Longest Palindromic Substring",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Palindromic Substrings",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Longest Palindromic Subsequence",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Word Break",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Regular Expression Matching",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Wildcard Matching",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
