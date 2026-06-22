import { Difficulty, Phase, Problem } from "@/lib/types";

type TopicSeed = {
  name: string;
  icon: string;
  accent: string;
  prerequisites?: string[];
  dependsOn?: string[];
  children?: string[];
  problems: string[];
};

const easy = new Set([
  "Contains Duplicate", "Valid Anagram", "Two Sum", "Valid Palindrome", "Valid Parentheses", "Binary Search",
  "Best Time to Buy And Sell Stock", "Reverse Linked List", "Merge Two Sorted Lists", "Linked List Cycle",
  "Invert Binary Tree", "Maximum Depth of Binary Tree", "Diameter of Binary Tree", "Balanced Binary Tree", "Same Tree",
  "Subtree of Another Tree", "Last Stone Weight", "Climbing Stairs", "Min Cost Climbing Stairs", "Meeting Rooms",
  "Maximum Subarray", "Single Number", "Number of 1 Bits", "Counting Bits", "Reverse Bits", "Missing Number",
  "Happy Number", "Plus One",
]);

const hard = new Set([
  "Trapping Rain Water", "Largest Rectangle In Histogram", "Median of Two Sorted Arrays", "Minimum Window Substring", "Sliding Window Maximum",
  "Merge K Sorted Lists", "Reverse Nodes In K Group", "Binary Tree Maximum Path Sum", "Serialize And Deserialize Binary Tree",
  "Word Search II", "N Queens", "Find Median From Data Stream", "Word Ladder", "Minimum Interval to Include Each Query",
  "Reconstruct Itinerary", "Swim In Rising Water", "Alien Dictionary", "Longest Increasing Path In a Matrix",
  "Distinct Subsequences", "Edit Distance", "Burst Balloons", "Regular Expression Matching",
]);

const difficultyFor = (name: string): Difficulty => easy.has(name) ? "Easy" : hard.has(name) ? "Hard" : "Medium";
const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const slugOverrides: Record<string, string> = { "Pow(x,n)": "powx-n" };

const topicSeeds: TopicSeed[] = [
  {
    name: "Arrays & Hashing", icon: "[]", accent: "#9BFF2E",
    prerequisites: ["Dynamic Arrays", "Hash Usage", "Hash Implementation", "Prefix Sums"],
    children: ["Two Pointers", "Stack"],
    problems: ["Contains Duplicate", "Valid Anagram", "Two Sum", "Group Anagrams", "Top K Frequent Elements", "Encode and Decode Strings", "Product of Array Except Self", "Valid Sudoku", "Longest Consecutive Sequence"],
  },
  {
    name: "Two Pointers", icon: "↔", accent: "#55D6FF", dependsOn: ["Arrays & Hashing"],
    prerequisites: ["Two Pointers"], children: ["Binary Search", "Sliding Window", "Linked List"],
    problems: ["Valid Palindrome", "Two Sum II Input Array Is Sorted", "3Sum", "Container With Most Water", "Trapping Rain Water"],
  },
  {
    name: "Stack", icon: "≡", accent: "#FF6B8A", dependsOn: ["Arrays & Hashing"],
    prerequisites: ["Stacks"],
    problems: ["Valid Parentheses", "Min Stack", "Evaluate Reverse Polish Notation", "Daily Temperatures", "Car Fleet", "Largest Rectangle In Histogram"],
  },
  {
    name: "Binary Search", icon: "⌕", accent: "#FFD166", dependsOn: ["Two Pointers"], children: ["Trees"],
    prerequisites: ["Search Array", "Search Range"],
    problems: ["Binary Search", "Search a 2D Matrix", "Koko Eating Bananas", "Find Minimum in Rotated Sorted Array", "Search in Rotated Sorted Array", "Time Based Key Value Store", "Median of Two Sorted Arrays"],
  },
  {
    name: "Sliding Window", icon: "⇥", accent: "#FFB454", dependsOn: ["Two Pointers"], children: ["Trees"],
    prerequisites: ["Sliding Window Fixed Size", "Sliding Window Variable Size"],
    problems: ["Best Time to Buy And Sell Stock", "Longest Substring Without Repeating Characters", "Longest Repeating Character Replacement", "Permutation In String", "Minimum Window Substring", "Sliding Window Maximum"],
  },
  {
    name: "Linked List", icon: "→", accent: "#FF6B8A", dependsOn: ["Two Pointers"], children: ["Trees"],
    prerequisites: ["Singly Linked Lists", "Doubly Linked Lists", "Fast and Slow Pointers"],
    problems: ["Reverse Linked List", "Merge Two Sorted Lists", "Linked List Cycle", "Reorder List", "Remove Nth Node From End of List", "Copy List With Random Pointer", "Add Two Numbers", "Find The Duplicate Number", "LRU Cache", "Merge K Sorted Lists", "Reverse Nodes In K Group"],
  },
  {
    name: "Trees", icon: "⌘", accent: "#34D399", dependsOn: ["Binary Search", "Sliding Window", "Linked List"],
    prerequisites: ["BST Sets and Maps", "Iterative DFS"], children: ["Tries", "Heap / Priority Queue", "Backtracking"],
    problems: ["Invert Binary Tree", "Maximum Depth of Binary Tree", "Diameter of Binary Tree", "Balanced Binary Tree", "Same Tree", "Subtree of Another Tree", "Lowest Common Ancestor of a Binary Search Tree", "Binary Tree Level Order Traversal", "Binary Tree Right Side View", "Count Good Nodes In Binary Tree", "Validate Binary Search Tree", "Kth Smallest Element In a BST", "Construct Binary Tree From Preorder And Inorder Traversal", "Binary Tree Maximum Path Sum", "Serialize And Deserialize Binary Tree"],
  },
  {
    name: "Tries", icon: "T", accent: "#C084FC", dependsOn: ["Trees"], prerequisites: ["Trie"],
    problems: ["Implement Trie Prefix Tree", "Design Add And Search Words Data Structure", "Word Search II"],
  },
  {
    name: "Backtracking", icon: "↶", accent: "#F472B6", dependsOn: ["Trees"], children: ["Graphs", "1D Dynamic Programming"],
    prerequisites: ["Tree Maze", "Subsets", "Combinations", "Permutations"],
    problems: ["Subsets", "Combination Sum", "Combination Sum II", "Permutations", "Subsets II", "Generate Parentheses", "Word Search", "Palindrome Partitioning", "Letter Combinations of a Phone Number", "N Queens"],
  },
  {
    name: "Heap / Priority Queue", icon: "△", accent: "#38BDF8", dependsOn: ["Trees"], children: ["Intervals", "Greedy", "Advanced Graphs"],
    prerequisites: ["Heap Properties", "Push and Pop", "Heapify", "Two Heaps"],
    problems: ["Kth Largest Element in a Stream", "Last Stone Weight", "K Closest Points to Origin", "Kth Largest Element In An Array", "Task Scheduler", "Design Twitter", "Find Median From Data Stream"],
  },
  {
    name: "Graphs", icon: "◇", accent: "#38BDF8", dependsOn: ["Backtracking"], children: ["2D Dynamic Programming"],
    prerequisites: ["Intro to Graphs", "Matrix DFS", "Matrix BFS", "Adjacency List"],
    problems: ["Number of Islands", "Max Area of Island", "Clone Graph", "Walls And Gates", "Rotting Oranges", "Pacific Atlantic Water Flow", "Surrounded Regions", "Course Schedule", "Course Schedule II", "Graph Valid Tree", "Number of Connected Components In An Undirected Graph", "Redundant Connection", "Word Ladder"],
  },
  {
    name: "1D Dynamic Programming", icon: "ƒ1", accent: "#F472B6", dependsOn: ["Backtracking"], children: ["2D Dynamic Programming"],
    prerequisites: ["1 Dimension DP", "Palindromes"],
    problems: ["Climbing Stairs", "Min Cost Climbing Stairs", "House Robber", "House Robber II", "Longest Palindromic Substring", "Palindromic Substrings", "Decode Ways", "Coin Change", "Maximum Product Subarray", "Word Break", "Longest Increasing Subsequence", "Partition Equal Subset Sum"],
  },
  {
    name: "Intervals", icon: "⇿", accent: "#FFB454", dependsOn: ["Heap / Priority Queue"],
    problems: ["Insert Interval", "Merge Intervals", "Non Overlapping Intervals", "Meeting Rooms", "Meeting Rooms II", "Minimum Interval to Include Each Query"],
  },
  {
    name: "Greedy", icon: "↗", accent: "#9BFF2E", dependsOn: ["Heap / Priority Queue"], prerequisites: ["Kadane Algorithm"],
    problems: ["Maximum Subarray", "Jump Game", "Jump Game II", "Gas Station", "Hand of Straights", "Merge Triplets to Form Target Triplet", "Partition Labels", "Valid Parenthesis String"],
  },
  {
    name: "Advanced Graphs", icon: "◆", accent: "#55D6FF", dependsOn: ["Heap / Priority Queue"],
    prerequisites: ["Dijkstra's", "Prim's", "Kruskal's", "Topological Sort"],
    problems: ["Network Delay Time", "Reconstruct Itinerary", "Min Cost to Connect All Points", "Swim In Rising Water", "Alien Dictionary", "Cheapest Flights Within K Stops"],
  },
  {
    name: "2D Dynamic Programming", icon: "ƒ2", accent: "#C084FC", dependsOn: ["Graphs", "1D Dynamic Programming"], children: ["Math & Geometry"],
    prerequisites: ["2 Dimension DP", "0/1 Knapsack", "Unbounded Knapsack", "LCS"],
    problems: ["Unique Paths", "Longest Common Subsequence", "Best Time to Buy And Sell Stock With Cooldown", "Coin Change II", "Target Sum", "Interleaving String", "Longest Increasing Path In a Matrix", "Distinct Subsequences", "Edit Distance", "Burst Balloons", "Regular Expression Matching"],
  },
  {
    name: "Bit Manipulation", icon: "01", accent: "#FFD166", children: ["Math & Geometry"], prerequisites: ["Bit Operations"],
    problems: ["Single Number", "Number of 1 Bits", "Counting Bits", "Reverse Bits", "Missing Number", "Sum of Two Integers", "Reverse Integer"],
  },
  {
    name: "Math & Geometry", icon: "π", accent: "#FF6B8A", dependsOn: ["2D Dynamic Programming", "Bit Manipulation"],
    problems: ["Rotate Image", "Spiral Matrix", "Set Matrix Zeroes", "Happy Number", "Plus One", "Pow(x,n)", "Multiply Strings", "Detect Squares"],
  },
];

const makeProblem = (name: string, topic: string): Problem => ({
  id: slug(name), name, topic, difficulty: difficultyFor(name),
  leetcodeUrl: `https://leetcode.com/problems/${slugOverrides[name] ?? slug(name)}/`,
  githubUrl: "", completed: false, notes: "", revisions: 0, favorite: false,
});

export const initialPhases: Phase[] = topicSeeds.map((seed, index) => ({
  id: index + 1,
  name: seed.name,
  target: seed.problems.length,
  icon: seed.icon,
  accent: seed.accent,
  topics: seed.prerequisites ?? [],
  prerequisites: seed.prerequisites ?? [],
  dependsOn: seed.dependsOn ?? [],
  children: seed.children ?? [],
  problems: seed.problems.map((name) => makeProblem(name, seed.name)),
}));

export const TOTAL_TARGET = initialPhases.reduce((sum, phase) => sum + phase.target, 0);

function validateRoadmap(phases: Phase[]) {
  if (phases.length !== 18) throw new Error(`Expected 18 roadmap nodes, received ${phases.length}.`);
  const topicNames = phases.map((phase) => phase.name);
  if (new Set(topicNames).size !== topicNames.length) throw new Error("Duplicate roadmap topic detected.");
  const problemNames = phases.flatMap((phase) => phase.problems.map((problem) => problem.name));
  if (new Set(problemNames).size !== problemNames.length) throw new Error("Duplicate roadmap problem detected.");
  phases.forEach((phase) => phase.problems.forEach((problem) => {
    if (problem.topic !== phase.name) throw new Error(`${problem.name} must belong only to ${phase.name}.`);
  }));
}

validateRoadmap(initialPhases);
