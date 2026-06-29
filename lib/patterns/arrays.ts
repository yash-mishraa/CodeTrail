import { PatternCategorySeed } from "@/lib/pattern-types";

export const arraysCategory: PatternCategorySeed = {
  id: "arrays",
  name: "Arrays",
  icon: "[]",
  accent: "#9BFF2E",
  description:
    "Master array manipulation from traversal basics to advanced matrix techniques",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. Basics & Traversal
     * ────────────────────────────────────────────── */
    {
      id: "arr-basics",
      name: "Basics & Traversal",
      description:
        "Array fundamentals, iteration, and in-place operations",
      theory: `
Array traversal is the core foundation of algorithmic problem solving. The basic intuition revolves around iterating over elements systematically to aggregate data (like sums or counts) or apply simple transformations.

These problems are usually recognizable when the prompt asks you to compute a simple metric, transform an array directly, or check for a basic condition, often specifying O(1) extra space.

The general approach is a single or double \`for\` loop. For in-place modifications, use a write-pointer to overwrite elements directly as you scan, avoiding the overhead of secondary data structures.
`,
      skillsLearned: ["Array indexing", "Iteration", "In-place modification"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Running Sum of 1d Array",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Richest Customer Wealth",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Shuffle the Array",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Kids With the Greatest Number of Candies",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Number of Good Pairs",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "How Many Numbers Are Smaller Than the Current Number",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Create Target Array in the Given Order",
          difficulty: "Easy",
          level: "Pattern",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. Prefix Sum
     * ────────────────────────────────────────────── */
    {
      id: "arr-prefix-sum",
      name: "Prefix Sum",
      description:
        "Precompute cumulative sums for efficient range queries",
      theory: `
Prefix Sum is a technique that reduces the time complexity of answering range sum queries from O(N) to O(1) after an initial O(N) precomputation. It works by creating a new array where each index stores the sum of all elements up to that point.

You can spot this pattern when a problem asks you to calculate the sum, product, or a commutative property of subarrays multiple times, or to find a subarray that meets a certain condition (like summing to exactly K).

The general approach involves initializing a \`prefixSum\` array. The sum of any subarray from index \`i\` to \`j\` can then be found in O(1) time by calculating \`prefixSum[j] - prefixSum[i-1]\`. Hash maps are frequently paired with this technique to quickly look up previously seen prefix sums.
`,
      skillsLearned: [
        "Prefix sum array",
        "Range sum queries",
        "Difference arrays",
      ],
      prerequisites: ["Array Basics"],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Running Sum of 1d Array",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Find Pivot Index",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Range Sum Query - Immutable",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Subarray Sum Equals K",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Contiguous Array",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Product of Array Except Self",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Subarray Sums Divisible by K",
          difficulty: "Medium",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Sliding Window
     * ────────────────────────────────────────────── */
    {
      id: "arr-sliding-window",
      name: "Sliding Window",
      description:
        "Fixed and variable-size window techniques for subarray problems",
      theory: `
The Sliding Window pattern is used to reduce the use of nested loops and lower time complexity from O(N^2) to O(N). The intuition is to maintain a "window" of elements (represented by start and end pointers) that moves across the array, adding new elements from the right and removing old ones from the left.

Problems are typically phrased around finding the longest, shortest, or maximum/minimum subarray or substring that satisfies a specific condition (e.g., sum is less than K, or contains unique characters).

For a fixed window, both pointers move together. For a variable window, you expand the right pointer to include elements until a condition is violated, then shrink the left pointer until the condition is satisfied again.
`,
      skillsLearned: [
        "Fixed-size window",
        "Variable-size window",
        "Shrinkable window",
      ],
      prerequisites: ["Prefix Sum", "Two Pointers"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Maximum Average Subarray I",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Minimum Size Subarray Sum",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Longest Substring Without Repeating Characters",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Fruit Into Baskets",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Permutation in String",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Longest Repeating Character Replacement",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Max Consecutive Ones III",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Minimum Window Substring",
          difficulty: "Hard",
          level: "Challenge",
        },
        {
          name: "Sliding Window Maximum",
          difficulty: "Hard",
          level: "Challenge",
        },
        {
          name: "Subarrays with K Different Integers",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Two Pointers
     * ────────────────────────────────────────────── */
    {
      id: "arr-two-pointers",
      name: "Two Pointers",
      description:
        "Use two indices to efficiently traverse or partition arrays",
      theory: `
Two Pointers is a foundational technique that uses two indices to search an array concurrently, significantly reducing time complexity. The intuition is that by evaluating two elements simultaneously, we can make decisions about how to narrow our search space.

You can spot this pattern in problems dealing with sorted arrays (like finding a target sum), palindromes, or when you need to partition or reverse elements in-place.

The approach typically involves placing one pointer at the start and the other at the end of the array, moving them toward each other based on a condition (e.g., if the sum is too small, move the left pointer right). Alternatively, both pointers can start at the beginning, operating at different speeds (Fast & Slow pointers).
`,
      skillsLearned: [
        "Opposite-direction pointers",
        "Same-direction pointers",
        "Partitioning",
      ],
      prerequisites: ["Array Basics", "Sorting"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Remove Duplicates from Sorted Array",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Move Zeroes",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Squares of a Sorted Array",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Two Sum II - Input Array Is Sorted",
          difficulty: "Medium",
          level: "Pattern",
          slug: "two-sum-ii-input-array-is-sorted",
        },
        {
          name: "3Sum",
          difficulty: "Medium",
          level: "Pattern",
          slug: "3sum",
        },
        {
          name: "Container With Most Water",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Sort Colors",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Trapping Rain Water",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 5. Sorting Applications
     * ────────────────────────────────────────────── */
    {
      id: "arr-sorting",
      name: "Sorting Applications",
      description:
        "Leverage sorting for optimization and ordering problems",
      theory: `
Sorting applications take advantage of ordered data to simplify complex problems. The intuition is that once an array is sorted, elements with similar properties or values are placed contiguously, making it easier to group, merge, or find missing elements.

This pattern is easily recognizable when the problem involves intervals, finding the top K elements, or when the problem description explicitly mentions "ordering," "merging," or "largest/smallest."

The standard approach is to first sort the array (typically O(N log N)). Once sorted, you can apply an O(N) pass to merge intervals, find duplicates, or use Two Pointers to quickly locate elements.
`,
      skillsLearned: [
        "Custom comparators",
        "Merge sort applications",
        "Counting sort",
      ],
      prerequisites: ["Two Pointers"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Merge Sorted Array",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Sort Array by Parity",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Sort Colors",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Largest Number",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Merge Intervals",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Meeting Rooms II",
          difficulty: "Medium",
          level: "Interview",
          slug: "meeting-rooms-ii",
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
      ],
    },

    /* ──────────────────────────────────────────────
     * 6. Kadane's Algorithm Variations
     * ────────────────────────────────────────────── */
    {
      id: "arr-kadane",
      name: "Kadane's Algorithm Variations",
      description:
        "Maximum subarray problems using Kadane's technique and variations",
      theory: `
Kadane's Algorithm is an elegant Dynamic Programming technique designed to find the maximum contiguous subarray sum in O(N) time. The intuition relies on a simple premise: a maximum subarray ending at a specific position is either the current element itself, or the current element plus the maximum subarray ending at the previous position.

This pattern is a dead giveaway when you see questions asking for the "maximum subarray sum," "maximum product subarray," or localized contiguous maximums.

The approach involves keeping track of a \`currentMax\` and a \`globalMax\`. As you iterate through the array, you update \`currentMax = Math.max(nums[i], currentMax + nums[i])\`, and then update \`globalMax\` accordingly.
`,
      skillsLearned: [
        "Kadane's algorithm",
        "Circular arrays",
        "2D Kadane",
      ],
      prerequisites: ["Prefix Sum"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Maximum Subarray",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Maximum Product Subarray",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Maximum Sum Circular Subarray",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Longest Turbulent Subarray",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Maximum Absolute Sum of Any Subarray",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Max Sum of Rectangle No Larger Than K",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 7. Binary Search on Arrays
     * ────────────────────────────────────────────── */
    {
      id: "arr-binary-search",
      name: "Binary Search on Arrays",
      description:
        "Apply binary search to sorted or rotated arrays",
      theory: `
Binary Search is a classic divide-and-conquer algorithm that finds a target in a sorted array in O(log N) time. The core intuition is to repeatedly halve the search space by comparing the target value to the middle element.

You can recognize this pattern when the problem states the array is sorted (or rotated) and demands an O(log N) time complexity. It can also be applied to "Search Space" problems where the answer lies within a monotonic range (e.g., finding a minimum capacity).

Initialize \`left\` and \`right\` pointers. Calculate \`mid\` and evaluate your condition. If the target is smaller than the mid-value, search the left half (\`right = mid - 1\`); otherwise, search the right half (\`left = mid + 1\`).
`,
      skillsLearned: [
        "Classic binary search",
        "Rotated array search",
        "Search boundaries",
      ],
      prerequisites: ["Sorting Applications"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Binary Search",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Search Insert Position",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Find First and Last Position of Element in Sorted Array",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Search in Rotated Sorted Array",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Find Minimum in Rotated Sorted Array",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Search a 2D Matrix",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Median of Two Sorted Arrays",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 8. Matrix Problems
     * ────────────────────────────────────────────── */
    {
      id: "arr-matrix",
      name: "Matrix Problems",
      description:
        "2D array traversal, rotation, and spiral patterns",
      theory: `
Matrix problems involve manipulating or traversing 2D arrays (grids). The intuition usually revolves around carefully tracking boundaries, coordinate mapping, or systematically visiting cells in a specific pattern (like spirals or diagonals).

You'll spot these problems when asked to rotate an image, search a 2D grid, or traverse elements in a non-standard order.

Standard approaches involve using nested loops for coordinate mapping. For boundary problems (like Spiral Matrix), you maintain \`top\`, \`bottom\`, \`left\`, and \`right\` variables, shrinking the boundaries as you traverse. For in-place rotation, you often reverse the matrix rows and then transpose it.
`,
      skillsLearned: [
        "Matrix traversal",
        "Spiral order",
        "In-place rotation",
        "Search in matrix",
      ],
      prerequisites: ["Binary Search on Arrays"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "Reshape the Matrix",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Transpose Matrix",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Rotate Image",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Spiral Matrix",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Set Matrix Zeroes",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Search a 2D Matrix II",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Maximal Square",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Maximal Rectangle",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 9. Greedy on Arrays
     * ────────────────────────────────────────────── */
    {
      id: "arr-greedy",
      name: "Greedy on Arrays",
      description:
        "Make locally optimal choices on array problems",
      theory: `
The Greedy approach builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. The intuition is that local optimum choices will lead to a global optimum solution.

Greedy algorithms are often identifiable in optimization problems asking for the "minimum" or "maximum" (e.g., minimum jumps, maximum profit) where you can easily evaluate the "best" next step without needing to look back at previous choices.

The approach generally involves iterating through the array and keeping track of a metric (like max reach or current profit). If you can update your state to a better position based strictly on the current element, you make the greedy choice and proceed.
`,
      skillsLearned: [
        "Greedy selection",
        "Jump games",
        "Gas station",
      ],
      prerequisites: ["Kadane Variations"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Best Time to Buy and Sell Stock",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Best Time to Buy and Sell Stock II",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Jump Game",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Jump Game II",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Gas Station",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Task Scheduler",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Candy",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 10. Difference Array
     * ────────────────────────────────────────────── */
    {
      id: "arr-diff-array",
      name: "Difference Array",
      description:
        "Efficient range update operations using difference arrays",
      theory: `
The Difference Array pattern provides an elegant way to perform multiple range update operations in O(1) time each, rather than O(N). The intuition is to record the *change* at the boundaries of the range rather than updating every element.

Look for problems that ask you to apply a series of additions or subtractions to a range of indices \`[start, end]\` and then query the final state of the array.

Create an array initialized to zero. For each update of value \`V\` on range \`[L, R]\`, you add \`V\` to \`arr[L]\` and subtract \`V\` from \`arr[R + 1]\`. Finally, you compute the prefix sum of this difference array to reconstruct the actual modified array in a single O(N) pass.
`,
      skillsLearned: [
        "Range updates",
        "Offline queries",
        "Sweep line",
      ],
      prerequisites: ["Prefix Sum"],
      difficulty: "Intermediate",
      estimatedHours: 2,
      problems: [
        {
          name: "Range Addition",
          difficulty: "Medium",
          level: "Basic",
          slug: "range-addition",
        },
        {
          name: "Corporate Flight Bookings",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Car Pooling",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Minimum Number of Arrows to Burst Balloons",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "My Calendar I",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },
  ],
};
