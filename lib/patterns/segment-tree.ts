import { PatternCategorySeed } from "@/lib/pattern-types";

export const segmentTreeCategory: PatternCategorySeed = {
  id: "segment-tree",
  name: "Segment Tree & Fenwick Tree",
  icon: "│─",
  accent: "#FF6B8A",
  description: "Efficient range queries and point updates on arrays",
  patterns: [
    {
      id: "seg-basic",
      name: "Basic Segment Tree",
      description: "Build segment trees for range query problems",
      theory: `### Intuition
A Segment Tree is a binary tree where each node represents an interval (or segment) of an array, storing a cumulative value (e.g., sum, min, max) for that interval. It allows answering range queries and updating elements both in $O(\\log N)$ time, overcoming the slow updates of prefix sum arrays.

### How to Spot It
- The problem asks for range queries (sum, min, max, XOR) over an array.
- The array elements are subject to point updates during these queries.
- Operations need to be performed strictly in $O(\\log N)$ to avoid Time Limit Exceeded.

### Standard Approach
1. **Build**: Recursively divide the array into halves until leaves are single elements. Each node's value is computed from its children.
2. **Point Update**: Traverse down to the leaf representing the index, update it, and backtrack, recomputing parent nodes.
3. **Range Query**: Recursively search for the segments that completely fall within the query range. Combine the results of the segments to get the final answer.`,
      skillsLearned: ["Segment tree construction", "Range sum query", "Point update"],
      prerequisites: [],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Range Sum Query - Immutable", difficulty: "Easy", level: "Basic", slug: "range-sum-query-immutable" },
        { name: "Range Sum Query - Mutable", difficulty: "Medium", level: "Standard", slug: "range-sum-query-mutable" },
        { name: "Count of Smaller Numbers After Self", difficulty: "Hard", level: "Interview" },
        { name: "Count of Range Sum", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "seg-fenwick",
      name: "Fenwick Tree (BIT)",
      description: "Binary Indexed Tree for efficient prefix operations",
      theory: `### Intuition
A Fenwick Tree (or Binary Indexed Tree) achieves similar goals as a Segment Tree (point updates and range prefix queries in $O(\\log N)$) but uses vastly less code and space. It takes advantage of binary representation to store cumulative metrics.

### How to Spot It
- The problem involves dynamic prefix sums or prefix counts.
- It asks you to count inversions or find "smaller numbers after self".
- You only need to query prefixes and update points.

### Standard Approach
1. Use an array of size $N+1$ initialized to 0 (1-indexed).
2. **Update(i, delta)**: Add \`delta\` to index \`i\`, then repeatedly move to the next responsible node using \`i += i & (-i)\`.
3. **Query(i)**: Traverse backwards to sum the ranges by stripping the lowest set bit using \`i -= i & (-i)\`. To query a range \`[L, R]\`, compute \`Query(R) - Query(L-1)\`.`,
      skillsLearned: ["BIT construction", "Prefix sum updates", "2D BIT"],
      prerequisites: ["Basic Segment Tree"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Range Sum Query - Mutable", difficulty: "Medium", level: "Basic", slug: "range-sum-query-mutable" },
        { name: "Count of Smaller Numbers After Self", difficulty: "Hard", level: "Pattern" },
        { name: "Create Sorted Array through Instructions", difficulty: "Hard", level: "Interview" },
        { name: "Reverse Pairs", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "seg-lazy",
      name: "Lazy Propagation",
      description: "Deferred updates for range operations",
      theory: `### Intuition
When a Segment Tree needs to perform *range updates* (e.g., "add $X$ to all elements from index $L$ to $R$"), updating every individual leaf would take $O(N)$. Lazy Propagation delays updating the children until they are actually needed, keeping the range update strictly $O(\\log N)$.

### How to Spot It
- You need to update all elements within a range $[L, R]$ simultaneously.
- Queries are interspersed with these bulk updates.

### Standard Approach
- Maintain a separate \`lazy\` array alongside the segment tree.
- When doing an update/query, if the current node has a pending \`lazy\` value, apply it to the current node and push the lazy value down to its children.
- If the current node's segment is fully within the update range, update the node and mark its children as lazy, halting further recursion.`,
      skillsLearned: ["Lazy propagation", "Range updates", "Range queries with lazy"],
      prerequisites: ["Fenwick Tree (BIT)"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        { name: "Range Sum Query - Mutable", difficulty: "Medium", level: "Basic", slug: "range-sum-query-mutable" },
        { name: "My Calendar I", difficulty: "Medium", level: "Standard" },
        { name: "My Calendar II", difficulty: "Medium", level: "Interview" },
        { name: "My Calendar III", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
