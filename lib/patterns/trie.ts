import { PatternCategorySeed } from "@/lib/pattern-types";

export const trieCategory: PatternCategorySeed = {
  id: "trie",
  name: "Trie",
  icon: "T",
  accent: "#C084FC",
  description: "Efficient prefix-based search and storage",
  patterns: [
    {
      id: "trie-basic",
      name: "Basic Trie",
      description: "Build and search prefix trees",
      theory: `### Intuition
A Trie (or Prefix Tree) is a specialized tree used to store associative data structures. A node in a Trie represents a single character of a string. By tracing a path down the tree, you form a word. This structure heavily optimizes space for strings that share common prefixes and provides blazingly fast $O(L)$ (where $L$ is word length) lookups and insertions.

### How to Spot It
- The problem asks you to search for words in a dictionary or maintain a dynamic list of strings.
- You need to perform prefix matching (e.g., autocomplete, "does any word start with...").
- You are dealing with a large set of strings where character-by-character validation is necessary.

### Standard Approach
1. Define a \`TrieNode\` containing a map/array of children (e.g., \`children[26]\`) and a boolean \`isEndOfWord\`.
2. To **insert**, iterate over the characters of the string. For each character, if a child node doesn't exist, create it. Move to the child. At the end, set \`isEndOfWord = true\`.
3. To **search** (exact or prefix), iterate over the characters. If a child doesn't exist, return false. If you exhaust the characters, check \`isEndOfWord\` (for exact) or return true (for prefix).`,
      skillsLearned: ["Trie insertion", "Search", "Prefix matching"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Longest Common Prefix", difficulty: "Easy", level: "Basic" },
        { name: "Implement Trie (Prefix Tree)", difficulty: "Medium", level: "Standard", slug: "implement-trie-prefix-tree" },
        { name: "Design Add and Search Words Data Structure", difficulty: "Medium", level: "Pattern" },
        { name: "Search Suggestions System", difficulty: "Medium", level: "Interview" },
      ],
    },
    {
      id: "trie-advanced",
      name: "Advanced Trie",
      description: "Complex trie applications including XOR and word search",
      theory: `### Intuition
Beyond standard string storage, Tries can be adapted for bitwise operations (XOR Tries) or combined with backtracking (Word Search II). An XOR Trie stores numbers in their binary representation, enabling you to find maximum/minimum XOR pairs in an array in $O(32)$ time. Tries with backtracking allow you to instantly prune search branches if a prefix doesn't exist in the dictionary.

### How to Spot It
- The problem asks for the Maximum XOR of two numbers in an array.
- You are searching for a large list of words on a 2D board (Boggle-like).
- You need to optimize a process that repeatedly checks string prefixes during a DFS/BFS.

### Standard Approach
- **XOR Trie**: Insert the 32-bit binary representation of each number into a Trie. To find the max XOR for a number, traverse the Trie attempting to pick the bit opposite to the current bit of the number (since $1 \\oplus 0 = 1$).
- **Word Search**: Build a standard Trie from the target words. Perform DFS on the grid, passing the current Trie node. If the next character isn't a child of the current node, prune the search immediately.`,
      skillsLearned: ["XOR trie", "Word search with trie", "Autocomplete design"],
      prerequisites: ["Basic Trie"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Replace Words", difficulty: "Medium", level: "Basic" },
        { name: "Map Sum Pairs", difficulty: "Medium", level: "Standard" },
        { name: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", level: "Pattern" },
        { name: "Word Search II", difficulty: "Hard", level: "Interview" },
        { name: "Palindrome Pairs", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
