import { PatternCategorySeed } from "@/lib/pattern-types";

export const linkedListCategory: PatternCategorySeed = {
  id: "linked-list",
  name: "Linked List",
  icon: "→",
  accent: "#FF6B8A",
  description:
    "Master pointer manipulation from basic traversal to advanced cache design",

  patterns: [
    /* ── 1. Basics & Traversal ── */
    {
      id: "ll-basics",
      name: "Basics & Traversal",
      description:
        "Linked list fundamentals and basic traversal operations",
      theory: `
Linked List traversal involves moving sequentially through nodes using their \`next\` pointers. The core intuition is that unlike arrays, you cannot access elements by index in O(1) time; you must walk the list from the \`head\`.

You'll see this pattern when asked to delete a node, find the length, or perform basic operations where you need to keep track of the \`current\` and sometimes \`previous\` nodes.

A standard approach uses a \`while (curr !== null)\` loop. A Dummy Node (or Sentinel Node) is frequently used to simplify edge cases, such as when the \`head\` itself might be deleted or modified.
`,
      skillsLearned: [
        "Node creation",
        "Traversal",
        "Insertion",
        "Deletion",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Reverse Linked List",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Middle of the Linked List",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Remove Linked List Elements",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Merge Two Sorted Lists",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Palindrome Linked List",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Delete Node in a Linked List",
          difficulty: "Medium",
          level: "Pattern",
        },
      ],
    },

    /* ── 2. Fast & Slow Pointer ── */
    {
      id: "ll-fast-slow",
      name: "Fast & Slow Pointer",
      description:
        "Floyd's cycle detection and related two-pointer techniques",
      theory: `
The Fast & Slow Pointer technique (Floyd's Cycle Finding Algorithm) uses two pointers moving at different speeds to determine cyclical properties or find specific positions within a Linked List.

This pattern is unmistakably useful for finding cycles, locating the middle of a list (for merging/splitting), or finding the Nth node from the end.

Initialize both \`slow\` and \`fast\` pointers at the \`head\`. Move \`slow\` one step at a time, and \`fast\` two steps. If there is a cycle, they will eventually meet. If finding the middle, when \`fast\` reaches the end, \`slow\` will be exactly at the midpoint.
`,
      skillsLearned: [
        "Cycle detection",
        "Finding middle",
        "Finding intersection",
      ],
      prerequisites: ["Basics & Traversal"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Linked List Cycle",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Happy Number",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Middle of the Linked List",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Palindrome Linked List",
          difficulty: "Easy",
          level: "Pattern",
        },
        {
          name: "Linked List Cycle II",
          difficulty: "Medium",
          level: "Pattern",
          slug: "linked-list-cycle-ii",
        },
        {
          name: "Find the Duplicate Number",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ── 3. Reversal Patterns ── */
    {
      id: "ll-reversal",
      name: "Reversal Patterns",
      description: "In-place reversal of linked lists and sublists",
      theory: `
Reversing a Linked List in-place is a classic interview pattern. The intuition relies on meticulously changing the \`next\` pointers of each node to point to the preceding node without losing the reference to the rest of the list.

Recognize this pattern when problems ask you to reverse the entire list, reverse a specific sublist (e.g., from position M to N), or reverse nodes in k-groups.

The standard iterative approach uses three pointers: \`prev\` (initially null), \`curr\` (initially head), and \`nextTemp\`. Within a loop, save \`curr.next\` into \`nextTemp\`, redirect \`curr.next\` to \`prev\`, and then advance both \`prev\` and \`curr\`.
`,
      skillsLearned: [
        "Full reversal",
        "Partial reversal",
        "K-group reversal",
      ],
      prerequisites: ["Fast & Slow Pointer"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Reverse Linked List",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Reverse Linked List II",
          difficulty: "Medium",
          level: "Standard",
          slug: "reverse-linked-list-ii",
        },
        {
          name: "Swap Nodes in Pairs",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Rotate List",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Reverse Nodes in k-Group",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ── 4. Merge Patterns ── */
    {
      id: "ll-merge",
      name: "Merge Patterns",
      description: "Merge and sort operations on linked lists",
      theory: `
Merging Linked Lists involves combining two or more sorted lists into a single sorted list by rearranging the pointers. The intuition is similar to the merge step in Merge Sort but done in-place by manipulating \`next\` references.

You'll spot this in problems asking to merge two lists, merge K sorted lists, add two numbers represented by lists, or sort a linked list in O(N log N) time.

Use a dummy node to hold the start of the merged list. Compare the values at the heads of the lists, attach the smaller node to your merged list, and advance the pointer in the chosen list. For K lists, a Min-Heap (Priority Queue) or Divide & Conquer approach is typically used.
`,
      skillsLearned: [
        "Two-list merge",
        "K-list merge",
        "Sort linked list",
      ],
      prerequisites: ["Reversal Patterns"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Merge Two Sorted Lists",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Add Two Numbers",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Insertion Sort List",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Sort List",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Merge k Sorted Lists",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ── 5. Advanced Linked List ── */
    {
      id: "ll-advanced",
      name: "Advanced Linked List",
      description:
        "Complex linked list problems involving random pointers and design",
      theory: `
Advanced Linked List problems often combine lists with other data structures or introduce non-standard pointers (like \`random\` pointers or doubly-linked nodes). The intuition is to creatively use Hash Maps or modify the list structure temporarily to keep track of complex relationships.

Look for problems involving deep copies, flattening multi-level lists, or designing caches (like LRU or LFU).

For deep copies with random pointers, a common trick is weaving the cloned nodes directly next to the original nodes (A -> A' -> B -> B') to copy random pointers, then unweaving them. For Cache design, a Doubly Linked List paired with a Hash Map provides O(1) insertion, deletion, and lookup.
`,
      skillsLearned: [
        "Deep copy",
        "Random pointer handling",
        "Cache design",
      ],
      prerequisites: ["Merge Patterns"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Remove Nth Node From End of List",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Reorder List",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Copy List with Random Pointer",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Flatten a Multilevel Doubly Linked List",
          difficulty: "Medium",
          level: "Pattern",
          slug: "flatten-a-multilevel-doubly-linked-list",
        },
        {
          name: "LRU Cache",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "LFU Cache",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
