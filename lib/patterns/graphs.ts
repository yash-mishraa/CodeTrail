import { PatternCategorySeed } from "@/lib/pattern-types";

export const graphsCategory: PatternCategorySeed = {
  id: "graphs",
  name: "Graphs",
  icon: "◇",
  accent: "#38BDF8",
  description:
    "Navigate graph algorithms from BFS/DFS fundamentals to advanced network flow",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. BFS on Graphs
     * ────────────────────────────────────────────── */
    {
      id: "g-bfs",
      name: "BFS on Graphs",
      description:
        "Breadth-first search for shortest path and level-order processing",
      theory: `
**Intuition:**
Breadth-First Search (BFS) explores the graph radially, expanding layer by layer from the starting nodes. This property guarantees that the first time a node is visited, the path taken is the shortest in an unweighted graph.

**How to Spot:**
Look for keywords like "shortest path", "fewest steps", "minimum operations", or scenarios simulating propagation (like rotting oranges or spreading water).

**General Approach:**
Use a queue to process nodes. Push the start node(s) and mark them as visited. Process the queue level by level by iterating over its current size, dequeuing each node, and enqueueing its unvisited neighbors.
      `.trim(),
      skillsLearned: [
        "Queue-based BFS",
        "Shortest path in unweighted graphs",
        "Multi-source BFS",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Number of Islands",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Rotting Oranges",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "01 Matrix",
          difficulty: "Medium",
          level: "Pattern",
          slug: "01-matrix",
        },
        {
          name: "Shortest Path in Binary Matrix",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Walls and Gates",
          difficulty: "Medium",
          level: "Mixed",
          slug: "walls-and-gates",
        },
        {
          name: "Open the Lock",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Word Ladder",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. DFS on Graphs
     * ────────────────────────────────────────────── */
    {
      id: "g-dfs",
      name: "DFS on Graphs",
      description:
        "Depth-first search for connectivity and cycle detection",
      theory: `
**Intuition:**
Depth-First Search (DFS) dives deeply into a graph along one path until it hits a dead end, then backtracks. It's excellent for exploring entire components, finding paths, and detecting cycles.

**How to Spot:**
Problems asking to count connected components (like "Number of Islands"), checking if a path exists, or finding cycles.

**General Approach:**
Use recursion or an explicit stack. Maintain a \`visited\` set or array to avoid infinite loops in cyclic graphs. Iterate through all nodes; if a node is unvisited, launch a DFS from it to explore its entire connected component.
      `.trim(),
      skillsLearned: [
        "Recursive DFS",
        "Iterative DFS",
        "Connected components",
        "Cycle detection",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Number of Islands",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Max Area of Island",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Clone Graph",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Pacific Atlantic Water Flow",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Surrounded Regions",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Number of Provinces",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Keys and Rooms",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. Topological Sort
     * ────────────────────────────────────────────── */
    {
      id: "g-topo",
      name: "Topological Sort",
      description:
        "Order tasks with dependencies using Kahn's algorithm and DFS",
      theory: `
**Intuition:**
Topological Sort creates a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge $U \\to V$, vertex $U$ comes before $V$. It is fundamentally about resolving dependencies.

**How to Spot:**
Keywords like "dependencies", "prerequisites", "scheduling tasks", "order of compilation", or determining if it's possible to finish all courses (cycle detection in a directed graph).

**General Approach:**
**Kahn's Algorithm (BFS):** Count the in-degree of all nodes. Add nodes with 0 in-degree to a queue. Process the queue by removing the node, adding it to the sorted list, and decreasing the in-degree of its neighbors. If a neighbor reaches 0 in-degree, push it to the queue.
**DFS Approach:** Do a post-order DFS and reverse the result. Use a 3-state visited array (unvisited, visiting, visited) to detect cycles.
      `.trim(),
      skillsLearned: [
        "Kahn's algorithm",
        "DFS-based topo sort",
        "Cycle detection in DAG",
      ],
      prerequisites: ["BFS on Graphs", "DFS on Graphs"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Course Schedule",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Course Schedule II",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Find All Possible Recipes from Given Supplies",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Sequence Reconstruction",
          difficulty: "Medium",
          level: "Mixed",
          slug: "sequence-reconstruction",
        },
        {
          name: "Parallel Courses",
          difficulty: "Medium",
          level: "Interview",
          slug: "parallel-courses",
        },
        {
          name: "Alien Dictionary",
          difficulty: "Hard",
          level: "Challenge",
          slug: "alien-dictionary",
        },
        {
          name: "Longest Increasing Path in a Matrix",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Union Find in Graphs
     * ────────────────────────────────────────────── */
    {
      id: "g-union-find",
      name: "Union Find in Graphs",
      description:
        "Disjoint set union for connectivity and component queries",
      theory: `
**Intuition:**
Union-Find (Disjoint Set) is a data structure that efficiently keeps track of elements partitioned into non-overlapping subsets. It can nearly instantly tell if two elements are in the same set and merge two sets together.

**How to Spot:**
Problems involving dynamic connectivity, merging groups, finding the number of connected components as edges are added, or finding redundant edges in a tree.

**General Approach:**
Implement two operations: \`find(x)\` (with path compression) to find the root representative of the set containing \`x\`, and \`union(x, y)\` (with union by rank/size) to merge the sets containing \`x\` and \`y\`.
      `.trim(),
      skillsLearned: [
        "Union by rank",
        "Path compression",
        "Component counting",
      ],
      prerequisites: ["DFS on Graphs"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Number of Connected Components in an Undirected Graph",
          difficulty: "Medium",
          level: "Basic",
          slug: "number-of-connected-components-in-an-undirected-graph",
        },
        {
          name: "Redundant Connection",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Graph Valid Tree",
          difficulty: "Medium",
          level: "Pattern",
          slug: "graph-valid-tree",
        },
        {
          name: "Accounts Merge",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Satisfiability of Equality Equations",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Smallest String With Swaps",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Number of Operations to Make Network Connected",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 5. Minimum Spanning Tree
     * ────────────────────────────────────────────── */
    {
      id: "g-mst",
      name: "Minimum Spanning Tree",
      description:
        "Find minimum-cost spanning trees using Kruskal's and Prim's",
      theory: `
**Intuition:**
A Minimum Spanning Tree (MST) connects all the vertices of a weighted, undirected graph together, without any cycles, using the minimum possible total edge weight.

**How to Spot:**
Keywords like "connect all points", "minimum cost to wire a network", or "spanning forest". 

**General Approach:**
**Kruskal's Algorithm:** Sort all edges by weight. Iterate through the sorted edges and use Union-Find to add edges to the MST if they don't form a cycle.
**Prim's Algorithm:** Start from an arbitrary node, use a min-heap (priority queue) to keep track of the minimum weight edge that connects an visited node to an unvisited node, and greedily add nodes to the MST.
      `.trim(),
      skillsLearned: [
        "Kruskal's algorithm",
        "Prim's algorithm",
        "MST properties",
      ],
      prerequisites: ["Union Find in Graphs"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Min Cost to Connect All Points",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Connecting Cities With Minimum Cost",
          difficulty: "Medium",
          level: "Standard",
          slug: "connecting-cities-with-minimum-cost",
        },
        {
          name: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Optimize Water Distribution in a Village",
          difficulty: "Hard",
          level: "Challenge",
          slug: "optimize-water-distribution-in-a-village",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 6. Dijkstra's Algorithm
     * ────────────────────────────────────────────── */
    {
      id: "g-dijkstra",
      name: "Dijkstra's Algorithm",
      description:
        "Shortest path in weighted graphs with non-negative edges",
      theory: `
**Intuition:**
Dijkstra's Algorithm finds the shortest path from a single source node to all other nodes in a graph with non-negative edge weights. It greedily expands the shortest known path.

**How to Spot:**
"Shortest path", "minimum time to reach", "cheapest flight", when edges have different, non-negative weights/costs.

**General Approach:**
Use a Min-Heap (Priority Queue) storing pairs of \`(current_distance, node)\`. Initialize the distance to the source as 0 and all others as infinity. While the heap is not empty, extract the node with the minimum distance. For each neighbor, if \`current_distance + edge_weight\` is less than the known distance to the neighbor, update the neighbor's distance and push it to the heap.
      `.trim(),
      skillsLearned: [
        "Priority queue BFS",
        "Shortest path",
        "Multi-destination shortest path",
      ],
      prerequisites: ["BFS on Graphs"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Network Delay Time",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Path with Maximum Probability",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Cheapest Flights Within K Stops",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Path With Minimum Effort",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Swim in Rising Water",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Shortest Path to Get All Keys",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 7. Bellman-Ford & Floyd-Warshall
     * ────────────────────────────────────────────── */
    {
      id: "g-bellman",
      name: "Bellman-Ford & Floyd-Warshall",
      description:
        "Handle negative weights and all-pairs shortest paths",
      theory: `
**Intuition:**
Dijkstra's algorithm fails with negative edge weights. **Bellman-Ford** finds single-source shortest paths in graphs with negative weights and can detect negative cycles. **Floyd-Warshall** finds the shortest paths between *all pairs* of vertices using dynamic programming.

**How to Spot:**
Graphs with negative edge weights, detecting arbitrage opportunities (negative cycles), or when you need the shortest path between every possible pair of nodes in a dense graph ($V \\le 400$).

**General Approach:**
**Bellman-Ford:** Relax all edges $V-1$ times. If relaxing all edges one more time changes any distance, a negative cycle exists. Time complexity is $O(V \\times E)$.
**Floyd-Warshall:** Use a 3D (optimized to 2D) DP table. For every intermediate vertex $k$, update the distance between all pairs $(i, j)$ as $dist[i][j] = \\min(dist[i][j], dist[i][k] + dist[k][j])$. Time complexity is $O(V^3)$.
      `.trim(),
      skillsLearned: [
        "Bellman-Ford",
        "Floyd-Warshall",
        "Negative cycle detection",
      ],
      prerequisites: ["Dijkstra's Algorithm"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Network Delay Time",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Cheapest Flights Within K Stops",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Shortest Path Visiting All Nodes",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 8. Advanced Graph Algorithms
     * ────────────────────────────────────────────── */
    {
      id: "g-advanced",
      name: "Advanced Graph Algorithms",
      description:
        "SCC, bridges, articulation points, and bipartite checking",
      theory: `
**Intuition:**
Advanced topics deal with deep structural properties of a graph. **Bridges and Articulation Points** identify critical edges/nodes whose removal disconnects the graph. **Strongly Connected Components (SCCs)** group nodes in directed graphs where every node can reach every other. **Bipartite Graphs** can be colored with two colors such that no adjacent nodes share a color.

**How to Spot:**
"Critical connections", "vulnerabilities in a network", "can divide into two independent sets".

**General Approach:**
**Tarjan's/Kosaraju's Algorithm:** Used for SCCs, Bridges, and Articulation points. It relies on DFS, maintaining \`discovery_time\` and \`lowest_reachable_time\`.
**Bipartite Checking:** Use BFS or DFS. Color the starting node 0, color its neighbors 1, their neighbors 0, and so on. If you ever find an edge between two nodes of the same color, the graph is not bipartite.
      `.trim(),
      skillsLearned: [
        "Tarjan's algorithm",
        "Bridge finding",
        "Bipartite check",
        "Euler path",
      ],
      prerequisites: ["Bellman-Ford & Floyd-Warshall"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "Is Graph Bipartite?",
          difficulty: "Medium",
          level: "Basic",
          slug: "is-graph-bipartite",
        },
        {
          name: "Find Eventual Safe States",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Possible Bipartition",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Reconstruct Itinerary",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Critical Connections in a Network",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
