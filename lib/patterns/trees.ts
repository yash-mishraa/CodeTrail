import { PatternCategorySeed } from "@/lib/pattern-types";

export const treesCategory: PatternCategorySeed = {
  id: "trees",
  name: "Trees",
  icon: "⌘",
  accent: "#34D399",
  description:
    "Traverse, search, and optimize tree structures from basics to tree DP",
  patterns: [
    /* ──────────────────────────────────────────────
     * 1. Binary Tree Traversals
     * ────────────────────────────────────────────── */
    {
      id: "tree-traversal",
      name: "Binary Tree Traversals",
      description: "Master all tree traversal strategies",
      theory: `
**Intuition:**
Tree traversals define the order in which we visit the nodes of a tree. The three main depth-first search (DFS) traversals are in-order, pre-order, and post-order, which dictate whether a node is processed before, between, or after its children. Breadth-first search (BFS) or level-order traversal visits nodes level by level from the root. 

**How to Spot:**
Problems that ask you to return nodes in a specific order, flatten a tree, evaluate syntax trees, or simply explore every single node to collect data.

**General Approach:**
Use recursion for DFS traversals (or a stack for an iterative approach). For BFS level-order traversal, use a queue. Keep track of the current level if you need to group nodes by their depth.
      `.trim(),
      skillsLearned: [
        "Inorder",
        "Preorder",
        "Postorder",
        "Level-order",
        "Iterative traversal",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        {
          name: "Binary Tree Inorder Traversal",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Binary Tree Preorder Traversal",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Binary Tree Postorder Traversal",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Binary Tree Level Order Traversal",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Binary Tree Zigzag Level Order Traversal",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "N-ary Tree Level Order Traversal",
          difficulty: "Medium",
          level: "Interview",
          slug: "n-ary-tree-level-order-traversal",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 2. DFS on Trees
     * ────────────────────────────────────────────── */
    {
      id: "tree-dfs",
      name: "DFS on Trees",
      description: "Depth-first search patterns on binary trees",
      theory: `
**Intuition:**
Depth-First Search (DFS) dives as deep as possible into a tree before backtracking. It relies heavily on the call stack (via recursion) to remember parent nodes.

**How to Spot:**
Keywords like "root-to-leaf path", "maximum depth", "lowest common ancestor", or problems where decisions depend on knowing information about the leaves before processing the parent.

**General Approach:**
Write a recursive function that takes a node and any necessary accumulated state (like a running sum). Process the base case (null node), then recursively call the function on the left and right children. You can process information top-down (passing state to children) or bottom-up (returning values from children to the parent).
      `.trim(),
      skillsLearned: [
        "Recursive DFS",
        "Path sum",
        "Root-to-leaf paths",
      ],
      prerequisites: ["Binary Tree Traversals"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Maximum Depth of Binary Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Minimum Depth of Binary Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Path Sum",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Path Sum II",
          difficulty: "Medium",
          level: "Pattern",
          slug: "path-sum-ii",
        },
        {
          name: "Path Sum III",
          difficulty: "Medium",
          level: "Pattern",
          slug: "path-sum-iii",
        },
        {
          name: "Sum Root to Leaf Numbers",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Count Good Nodes in Binary Tree",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Binary Tree Maximum Path Sum",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 3. BFS on Trees
     * ────────────────────────────────────────────── */
    {
      id: "tree-bfs",
      name: "BFS on Trees",
      description:
        "Level-order processing and BFS-based tree problems",
      theory: `
**Intuition:**
Breadth-First Search (BFS) explores the tree horizontally, visiting all nodes at the current depth before moving deeper. This makes it perfect for finding the shortest path or exploring siblings.

**How to Spot:**
Problems asking for the "shortest path", "minimum depth", "right side view", "level averages", or anything that explicitly groups nodes by their distance from the root.

**General Approach:**
Initialize a queue with the root node. Use a loop that runs while the queue is not empty. To process level by level, take the current size of the queue at the start of the loop and process exactly that many nodes, pushing their children to the queue for the next level.
      `.trim(),
      skillsLearned: [
        "Level-by-level processing",
        "Right side view",
        "Cousins",
      ],
      prerequisites: ["Binary Tree Traversals"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Average of Levels in Binary Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Cousins in Binary Tree",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Binary Tree Right Side View",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Populating Next Right Pointers in Each Node",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Populating Next Right Pointers in Each Node II",
          difficulty: "Medium",
          level: "Mixed",
          slug: "populating-next-right-pointers-in-each-node-ii",
        },
        {
          name: "Minimum Number of Operations to Sort a Binary Tree by Level",
          difficulty: "Medium",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 4. Binary Search Tree
     * ────────────────────────────────────────────── */
    {
      id: "tree-bst",
      name: "Binary Search Tree",
      description:
        "Leverage BST ordering for search, insert, and validation",
      theory: `
**Intuition:**
A Binary Search Tree (BST) is structured so that for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. This property allows for $O(\\log N)$ search, insertion, and deletion on average.

**How to Spot:**
The problem specifically mentions a "Binary Search Tree", or you are asked to validate whether a tree is a BST, find the Kth smallest element, or find a predecessor/successor.

**General Approach:**
Leverage the in-order traversal property: an in-order traversal of a valid BST will yield a strictly increasing sequence of values. For searching or insertion, use the BST property to prune half of the tree at each step, similar to binary search.
      `.trim(),
      skillsLearned: [
        "BST search",
        "BST insert",
        "Validation",
        "Inorder property",
      ],
      prerequisites: ["DFS on Trees"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        {
          name: "Search in a Binary Search Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Convert Sorted Array to Binary Search Tree",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Insert into a Binary Search Tree",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Delete Node in a BST",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Validate Binary Search Tree",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Kth Smallest Element in a BST",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Lowest Common Ancestor of a Binary Search Tree",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Inorder Successor in BST",
          difficulty: "Medium",
          level: "Interview",
          slug: "inorder-successor-in-bst",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 5. Tree Construction
     * ────────────────────────────────────────────── */
    {
      id: "tree-construct",
      name: "Tree Construction",
      description:
        "Build trees from traversal sequences and serialize/deserialize",
      theory: `
**Intuition:**
A single traversal (like just in-order or just pre-order) is not enough to uniquely identify a tree's structure unless it includes null pointers (serialization). However, combining two traversals (like pre-order and in-order) provides enough information: one identifies the root, and the other partitions the left and right subtrees.

**How to Spot:**
Problems asking you to "build", "construct", "serialize", or "deserialize" a binary tree from arrays, strings, or linked lists.

**General Approach:**
For construction from arrays, use a recursive approach. Identify the root (usually the first or last element of one array), find that root in the in-order array to divide the problem into left and right subtrees, and recurse. For serialization, pre-order or level-order with explicitly marked nulls is commonly used.
      `.trim(),
      skillsLearned: [
        "Construct from traversals",
        "Serialization",
        "Codec design",
      ],
      prerequisites: ["Binary Search Tree"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Construct Binary Tree from Preorder and Inorder Traversal",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Construct Binary Tree from Inorder and Postorder Traversal",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Maximum Binary Tree",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Flatten Binary Tree to Linked List",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Convert Sorted List to Binary Search Tree",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Serialize and Deserialize Binary Tree",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 6. Tree Properties
     * ────────────────────────────────────────────── */
    {
      id: "tree-properties",
      name: "Tree Properties",
      description: "Calculate structural properties of trees",
      theory: `
**Intuition:**
Trees have intrinsic properties like height, diameter, symmetry, and balance. Calculating these usually requires traversing the tree and aggregating information from subtrees.

**How to Spot:**
Questions asking if two trees are identical, if a tree is balanced, finding the diameter (longest path between any two nodes), or checking for symmetry.

**General Approach:**
Use a bottom-up DFS. The recursive function should return the property of the subtree (like its height). At each node, use the returns from the left and right children to compute the property for the current node, and potentially update a global variable (e.g., maximum diameter seen so far).
      `.trim(),
      skillsLearned: [
        "Diameter",
        "Balance check",
        "Symmetry",
        "Subtree matching",
      ],
      prerequisites: ["DFS on Trees"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Same Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Symmetric Tree",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Invert Binary Tree",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Balanced Binary Tree",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Diameter of Binary Tree",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Subtree of Another Tree",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Lowest Common Ancestor of a Binary Tree",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Count Complete Tree Nodes",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     * 7. Tree DP
     * ────────────────────────────────────────────── */
    {
      id: "tree-dp",
      name: "Tree DP",
      description: "Dynamic programming on tree structures",
      theory: `
**Intuition:**
Tree DP (Dynamic Programming) involves making decisions at each node based on the optimal decisions made in its subtrees. Since trees don't have cycles, they naturally exhibit optimal substructure and overlapping subproblems can be resolved via bottom-up traversal.

**How to Spot:**
Optimization problems on trees, such as "maximum independent set", "minimum vertex cover", or problems like "House Robber III" where you have to choose nodes to maximize/minimize a value subject to constraints (like not picking adjacent nodes).

**General Approach:**
Write a recursive function that returns an array or tuple of values representing different states (e.g., \`[max_val_if_picked, max_val_if_not_picked]\`). Compute these states for the left and right children, then combine them to determine the states for the current node.
      `.trim(),
      skillsLearned: [
        "Bottom-up DP on trees",
        "Rerooting",
        "Tree diameter",
      ],
      prerequisites: ["Tree Properties"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "House Robber III",
          difficulty: "Medium",
          level: "Standard",
          slug: "house-robber-iii",
        },
        {
          name: "Longest ZigZag Path in a Binary Tree",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Distribute Coins in Binary Tree",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Binary Tree Maximum Path Sum",
          difficulty: "Hard",
          level: "Interview",
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
  ],
};
