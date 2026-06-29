import { PatternCategorySeed } from "@/lib/pattern-types";

export const advancedDsCategory: PatternCategorySeed = {
  id: "advanced-ds",
  name: "Advanced Data Structures",
  icon: "◆",
  accent: "#55D6FF",
  description: "Specialized data structures for complex competitive programming patterns",
  patterns: [
    {
      id: "adv-monotonic",
      name: "Monotonic Stack & Queue",
      description: "Maintain monotonic invariants for next greater/smaller problems",
      theory: `### Intuition
A Monotonic Stack (or Queue) maintains its elements in a strictly increasing or decreasing order. Whenever a new element breaks this order, you pop elements from the stack until the order is restored. This naturally pairs elements with their "next greater" or "next smaller" neighbor in $O(N)$ time.

### How to Spot It
- The problem asks for the "next greater element" or "next smaller element".
- You are looking for boundaries of subarrays (e.g., maximum area in a histogram, trapping rain water).
- You are sliding a window and need the maximum/minimum inside it (Monotonic Deque).

### Standard Approach
1. Initialize an empty stack.
2. Iterate through the array. For each element:
   - While the stack is not empty and the current element breaks the monotonic property (e.g., \`current > stack.top()\` for a decreasing stack):
     - The current element is the "next greater" for the popped element. Pop it.
   - Push the current element (or its index) onto the stack.`,
      skillsLearned: ["Monotonic stack", "Monotonic deque", "Next greater element"],
      prerequisites: [],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Next Greater Element I", difficulty: "Easy", level: "Basic" },
        { name: "Daily Temperatures", difficulty: "Medium", level: "Standard" },
        { name: "Next Greater Element II", difficulty: "Medium", level: "Pattern" },
        { name: "Sum of Subarray Minimums", difficulty: "Medium", level: "Interview" },
        { name: "Largest Rectangle in Histogram", difficulty: "Hard", level: "Interview" },
        { name: "Trapping Rain Water", difficulty: "Hard", level: "Challenge" },
        { name: "Sliding Window Maximum", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "adv-sparse",
      name: "Sparse Table & RMQ",
      description: "Static range minimum/maximum queries in O(1)",
      theory: `### Intuition
A Sparse Table is an advanced data structure used to answer static range queries (like minimum, maximum, or GCD) in strictly $O(1)$ time, after an $O(N \\log N)$ preprocessing step. It relies on the fact that any interval can be broken down into two overlapping intervals of lengths that are powers of 2.

### How to Spot It
- You are asked for Range Minimum Query (RMQ) or Range Maximum Query on an array that *does not change* (immutable).
- You have a massive number of queries where $O(\\log N)$ segment tree queries are too slow.

### Standard Approach
1. **Preprocessing**: Build a 2D array \`st[i][j]\` which stores the answer for the range \`[i, i + 2^j - 1]\`. Compute it dynamically: \`st[i][j] = min(st[i][j-1], st[i + 2^(j-1)][j-1])\`.
2. **Query**: For a range \`[L, R]\`, find the largest power of 2, $j$, such that $2^j \\le R - L + 1$. The answer is the overlap of two intervals: \`min(st[L][j], st[R - 2^j + 1][j])\`.`,
      skillsLearned: ["Sparse table construction", "Range queries", "Idempotent operations"],
      prerequisites: ["Monotonic Stack & Queue"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Range Sum Query - Immutable", difficulty: "Easy", level: "Basic", slug: "range-sum-query-immutable" },
        { name: "Range Sum Query 2D - Immutable", difficulty: "Medium", level: "Standard", slug: "range-sum-query-2d-immutable" },
        { name: "Longest Substring with At Least K Repeating Characters", difficulty: "Medium", level: "Pattern" },
        { name: "Count of Range Sum", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "adv-lca",
      name: "LCA Algorithms",
      description: "Lowest Common Ancestor with various techniques",
      theory: `### Intuition
Lowest Common Ancestor (LCA) algorithms find the deepest node in a tree that is an ancestor to two given nodes. Advanced approaches utilize Binary Lifting, Euler Tours with Sparse Tables, or Tarjan's Offline algorithm to answer queries rapidly.

### How to Spot It
- The problem explicitly asks for the common ancestor of two nodes.
- You need to find the shortest path or distance between two nodes in a tree (Distance = $dist(u) + dist(v) - 2 \\times dist(lca(u, v))$).

### Standard Approach
- **Binary Lifting ($O(\\log N)$)**: Precompute \`up[node][j]\` as the $2^j$-th ancestor of \`node\`. To find LCA(u, v), balance their depths, then lift both nodes simultaneously using the largest jumps possible without overshooting the LCA.
- **Euler Tour + RMQ ($O(1)$)**: Traverse the tree with DFS, logging the visit order and depths. The LCA of $u$ and $v$ corresponds to the node with the minimum depth in the tour between the first occurrences of $u$ and $v$.`,
      skillsLearned: ["Binary lifting", "Euler tour", "Tarjan's offline LCA"],
      prerequisites: ["Sparse Table & RMQ"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", level: "Basic", slug: "lowest-common-ancestor-of-a-binary-search-tree" },
        { name: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", level: "Standard" },
        { name: "Lowest Common Ancestor of Deepest Leaves", difficulty: "Medium", level: "Pattern" },
        { name: "Kth Ancestor of a Tree Node", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "adv-design",
      name: "Advanced Design Problems",
      description: "Design complex data structures combining multiple concepts",
      theory: `### Intuition
Advanced design problems require combining multiple fundamental data structures to achieve specific time complexity constraints. You must identify which operations are the bottleneck and select the right tool to optimize them (e.g., $O(1)$ lookups require Hash Maps; $O(1)$ ordered insertions/removals require Doubly Linked Lists).

### How to Spot It
- The problem asks you to "Design a data structure" implementing \`insert\`, \`delete\`, \`get\`, \`getRandom\`, \`getMax\`, etc.
- There are strict time complexity constraints (usually $O(1)$ or $O(\\log N)$ per operation).

### Standard Approach
- **LRU/LFU Caches**: Combine a Hash Map (for $O(1)$ key lookup) with a Doubly Linked List (for $O(1)$ eviction of the oldest/least used item).
- **Snapshot/History**: Use arrays of binary search trees or arrays of arrays with binary search (e.g., \`upper_bound\`) to track versions over time.
- Always analyze the required time complexity for each method independently to deduce the necessary composite structures.`,
      skillsLearned: ["Multi-structure design", "Amortized analysis", "Iterator design"],
      prerequisites: [],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        { name: "Design a Stack With Increment Operation", difficulty: "Medium", level: "Basic" },
        { name: "Online Stock Span", difficulty: "Medium", level: "Standard" },
        { name: "Snapshot Array", difficulty: "Medium", level: "Pattern" },
        { name: "Design Twitter", difficulty: "Medium", level: "Interview" },
        { name: "LRU Cache", difficulty: "Medium", level: "Interview" },
        { name: "LFU Cache", difficulty: "Hard", level: "Challenge" },
        { name: "All O`one Data Structure", difficulty: "Hard", level: "Challenge", slug: "all-oone-data-structure" },
      ],
    },
  ],
};
