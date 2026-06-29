import { PatternCategorySeed } from "@/lib/pattern-types";

export const queueCategory: PatternCategorySeed = {
  id: "queue",
  name: "Queue",
  icon: "⇒",
  accent: "#38BDF8",
  description: "FIFO data structure from basics to monotonic deque applications",
  patterns: [
    {
      id: "q-basics",
      name: "Queue Basics",
      description: "Fundamental queue operations and BFS applications",
      theory: `
The Queue is a First-In, First-Out (FIFO) data structure. The primary intuition is to process elements in the exact order they arrived, ensuring fairness or level-by-level exploration.

You'll see this heavily in Breadth-First Search (BFS) for graphs and trees, moving averages in data streams, or simulating physical lines (like buying tickets).

In JavaScript/TypeScript, using an array \`push()\` and \`shift()\` acts like a queue, but \`shift()\` is O(N). For optimal performance in large datasets, use two pointers within an array or a linked list to achieve O(1) enqueue and dequeue operations.
`,
      skillsLearned: [
        "FIFO operations",
        "BFS",
        "Level-order processing",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Implement Stack using Queues", difficulty: "Easy", level: "Basic" },
        { name: "Number of Recent Calls", difficulty: "Easy", level: "Basic" },
        {
          name: "Moving Average from Data Stream",
          difficulty: "Easy",
          level: "Standard",
          slug: "moving-average-from-data-stream",
        },
        { name: "Time Needed to Buy Tickets", difficulty: "Easy", level: "Standard" },
        { name: "Design Circular Queue", difficulty: "Medium", level: "Pattern" },
      ],
    },
    {
      id: "q-monotonic",
      name: "Monotonic Queue / Deque",
      description:
        "Maintain a monotonic deque for sliding window optimization",
      theory: `
A Monotonic Deque (Double-Ended Queue) maintains elements in a strictly increasing or decreasing order. The intuition is similar to a monotonic stack, but because we also need to remove elements that fall out of a "sliding window", we must be able to pop from both ends.

This pattern is the optimal O(N) solution for finding the maximum or minimum in a sliding window, or solving DP optimization problems with window constraints (like Jump Game VI).

For a Sliding Window Maximum, store indices in the deque. As the window moves, remove indices from the front that are out of bounds. Then, remove elements from the back that are smaller than the current element (they will never be the maximum). Push the current index to the back.
`,
      skillsLearned: [
        "Sliding window maximum/minimum",
        "Deque optimization",
      ],
      prerequisites: ["Queue Basics"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
          difficulty: "Medium",
          level: "Standard",
        },
        { name: "Jump Game VI", difficulty: "Medium", level: "Pattern" },
        { name: "Sliding Window Maximum", difficulty: "Hard", level: "Pattern" },
        {
          name: "Shortest Subarray with Sum at Least K",
          difficulty: "Hard",
          level: "Mixed",
        },
        { name: "Constrained Subsequence Sum", difficulty: "Hard", level: "Interview" },
        { name: "Max Value of Equation", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
