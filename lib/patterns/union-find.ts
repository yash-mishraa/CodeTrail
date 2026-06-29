import { PatternCategorySeed } from "@/lib/pattern-types";

export const unionFindCategory: PatternCategorySeed = {
  id: "union-find",
  name: "Union Find",
  icon: "∪",
  accent: "#34D399",
  description: "Efficient disjoint set operations for connectivity problems",
  patterns: [
    {
      id: "uf-basic",
      name: "Basic Union Find",
      description: "Disjoint set union fundamentals",
      theory: `### Intuition
Union Find (or Disjoint Set Union, DSU) is a data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets. It provides near-constant time $O(\\alpha(N))$ operations to add new sets, merge existing sets, and determine whether elements are in the same set. 

### How to Spot It
- The problem asks about "connected components", "number of provinces", or checking if a graph is a valid tree.
- You need to dynamically connect nodes and check if they belong to the same group.

### Standard Approach
1. Initialize an array \`parent\` where each element is its own parent (e.g., \`parent[i] = i\`).
2. **Find(x)**: Traverse \`parent\` pointers to find the root of \`x\`. Use *path compression* (\`parent[x] = find(parent[x])\`) to flatten the tree.
3. **Union(x, y)**: Find the roots of \`x\` and \`y\`. If they differ, attach one root to the other. Use *union by rank/size* to keep the tree shallow.`,
      skillsLearned: ["Union by rank", "Path compression", "Component counting"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Number of Provinces", difficulty: "Medium", level: "Basic" },
        { name: "Redundant Connection", difficulty: "Medium", level: "Standard" },
        { name: "Graph Valid Tree", difficulty: "Medium", level: "Pattern", slug: "graph-valid-tree" },
        { name: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", level: "Interview", slug: "number-of-connected-components-in-an-undirected-graph" },
      ],
    },
    {
      id: "uf-advanced",
      name: "Advanced Union Find",
      description: "Complex DSU applications with weighted edges and online queries",
      theory: `### Intuition
While basic DSU just tracks components, advanced DSU can maintain additional information per component (like size, sum, or bipartite status), process online queries (adding/removing edges dynamically, often solved by processing in reverse), or maintain weights on the edges relative to the root.

### How to Spot It
- You need to track the size or parity of groups as they merge.
- The graph edges are being removed dynamically (offline query processing reverse trick).
- You are dealing with relative relationships like "A is equal to B" and "C is not equal to B".

### Standard Approach
- **Weighted/Augmented DSU**: Alongside the \`parent\` array, maintain a \`weight\` array that tracks the distance or relationship to the parent node. Update weights carefully during \`Find\` (path compression) and \`Union\`.
- **Reverse Processing**: If edges are removed, process queries in reverse: start with the final graph, and *add* edges while answering queries backwards.`,
      skillsLearned: ["Weighted union", "Online connectivity", "MST applications"],
      prerequisites: ["Basic Union Find"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Longest Consecutive Sequence", difficulty: "Medium", level: "Basic" },
        { name: "Accounts Merge", difficulty: "Medium", level: "Standard" },
        { name: "Satisfiability of Equality Equations", difficulty: "Medium", level: "Pattern" },
        { name: "Smallest String With Swaps", difficulty: "Medium", level: "Mixed" },
        { name: "Number of Operations to Make Network Connected", difficulty: "Medium", level: "Interview" },
        { name: "Most Stones Removed with Same Row or Column", difficulty: "Medium", level: "Challenge" },
      ],
    },
    {
      id: "uf-mst",
      name: "Union Find for MST",
      description: "Use DSU in minimum spanning tree algorithms",
      theory: `### Intuition
A Minimum Spanning Tree (MST) connects all vertices in a weighted graph with the minimum possible total edge weight, without any cycles. Kruskal's algorithm perfectly leverages Union Find to build this tree iteratively by selecting the smallest available edges.

### How to Spot It
- The problem asks for the "minimum cost to connect all points".
- It involves finding a subset of edges that connects all nodes with minimal cost.

### Standard Approach
1. **Sort Edges**: Sort all edges in the graph in ascending order of their weights.
2. **Iterate**: Loop through the sorted edges. For each edge \`(u, v, weight)\`:
   - If \`Find(u) != Find(v)\`, they are in different components.
   - Include this edge in the MST (add its weight to the total cost).
   - \`Union(u, v)\`.
3. Stop when you have added $V-1$ edges (where $V$ is the number of vertices).`,
      skillsLearned: ["Kruskal's algorithm", "Edge sorting", "MST verification"],
      prerequisites: ["Advanced Union Find"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Min Cost to Connect All Points", difficulty: "Medium", level: "Standard" },
        { name: "Connecting Cities With Minimum Cost", difficulty: "Medium", level: "Pattern", slug: "connecting-cities-with-minimum-cost" },
        { name: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", difficulty: "Hard", level: "Interview" },
        { name: "Swim in Rising Water", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
