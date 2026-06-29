import { PatternCategorySeed } from "@/lib/pattern-types";

export const stringsCategory: PatternCategorySeed = {
  id: "strings",
  name: "Strings",
  icon: "",
  accent: "#55D6FF",
  description:
    "From character counting to advanced pattern matching algorithms",
  patterns: [
    /* ──────────────────────────────────────────────
     *  1. Character Frequency
     * ────────────────────────────────────────────── */
    {
      id: "str-frequency",
      name: "Character Frequency",
      description:
        "Count and leverage character frequencies for string problems",
      theory: `
Character Frequency problems leverage the limited size of character sets (like 26 lowercase English letters) to achieve O(1) space and O(N) time complexity. The intuition is that counting the occurrence of each character provides a unique "fingerprint" for a string.

You can spot this pattern in questions asking about anagrams, palindromic permutations, or finding the first unique character.

The standard approach uses a hash map or a fixed-size integer array (e.g., \`new Array(26).fill(0)\`) to tally character counts. You then iterate over the array to compare frequencies or find specific counts.
`,
      skillsLearned: [
        "Frequency arrays",
        "Character counting",
        "Anagram detection",
      ],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        {
          name: "Valid Anagram",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "First Unique Character in a String",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "First Letter to Appear Twice",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Find All Anagrams in a String",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Group Anagrams",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Sort Characters By Frequency",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Reorganize String",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     *  2. Sliding Window on Strings
     * ────────────────────────────────────────────── */
    {
      id: "str-sliding-window",
      name: "Sliding Window on Strings",
      description: "Apply sliding window technique to string problems",
      theory: `
Sliding Window on Strings is used to find substrings that meet specific criteria without checking every possible substring (which would be O(N^2)). The intuition is to expand a window until a condition is violated, then shrink it from the left until it's valid again.

This is the go-to pattern for finding the "longest substring without repeating characters", "minimum window substring", or checking if a string contains a permutation of another.

Use two pointers (\`left\` and \`right\`) and a map or array to track character frequencies within the current window. Expand \`right\` and update the frequency map. If the window becomes invalid, advance \`left\` to shrink the window until it's valid again.
`,
      skillsLearned: ["Variable window", "Fixed window", "Character maps"],
      prerequisites: ["Character Frequency"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Minimum Size Subarray Sum",
          difficulty: "Medium",
          level: "Basic",
        },
        {
          name: "Longest Substring Without Repeating Characters",
          difficulty: "Medium",
          level: "Standard",
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
          name: "Minimum Window Substring",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Substring with Concatenation of All Words",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     *  3. Two Pointers on Strings
     * ────────────────────────────────────────────── */
    {
      id: "str-two-pointers",
      name: "Two Pointers on Strings",
      description:
        "Use two pointers for palindrome and comparison problems",
      theory: `
Two Pointers on Strings is highly effective for problems involving symmetry or matching characters from different ends of a string. The intuition is to compare characters symmetrically or sequentially without requiring extra memory.

Recognize this pattern in problems asking to reverse a string, check if it's a valid palindrome, or compare two strings (e.g., checking if one is a subsequence of another).

Place one pointer at the beginning (\`left = 0\`) and one at the end (\`right = s.length - 1\`). Compare \`s[left]\` and \`s[right]\`, moving them toward the center based on the problem's logic. For subsequence problems, use one pointer for each string, advancing them as characters match.
`,
      skillsLearned: [
        "Palindrome checking",
        "String comparison",
        "Reversal",
      ],
      prerequisites: ["Character Frequency"],
      difficulty: "Intermediate",
      estimatedHours: 2,
      problems: [
        {
          name: "Reverse String",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Valid Palindrome",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Valid Palindrome II",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Is Subsequence",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Reverse Words in a String",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "String Compression",
          difficulty: "Medium",
          level: "Interview",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     *  4. Palindrome Problems
     * ────────────────────────────────────────────── */
    {
      id: "str-palindrome",
      name: "Palindrome Problems",
      description:
        "Detect, construct, and optimize palindromic structures",
      theory: `
Palindrome Problems focus on strings that read the same forwards and backwards. The core intuition is that every palindrome has a center, which can be a single character (odd length) or between two characters (even length).

You'll see this in problems asking for the longest palindromic substring, counting palindromes, or breaking strings into palindromic partitions.

The most common approach is "Expand Around Center," where you iterate through each possible center (N for characters, N-1 for between characters) and expand outwards as long as the characters match. Advanced approaches might use DP or Manacher's Algorithm for O(N) time.
`,
      skillsLearned: [
        "Expand around center",
        "Manacher's intuition",
        "DP on palindromes",
      ],
      prerequisites: ["Two Pointers on Strings"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        {
          name: "Valid Palindrome",
          difficulty: "Easy",
          level: "Basic",
        },
        {
          name: "Longest Palindromic Substring",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Palindromic Substrings",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Palindrome Partitioning",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Longest Palindromic Subsequence",
          difficulty: "Medium",
          level: "Interview",
        },
        {
          name: "Shortest Palindrome",
          difficulty: "Hard",
          level: "Challenge",
        },
        {
          name: "Palindrome Pairs",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     *  5. Pattern Matching (KMP / Z / Rabin-Karp)
     * ────────────────────────────────────────────── */
    {
      id: "str-pattern-match",
      name: "Pattern Matching (KMP / Z / Rabin-Karp)",
      description: "Efficient string search using advanced algorithms",
      theory: `
Advanced Pattern Matching algorithms like KMP, Rabin-Karp, and Z-Algorithm are designed to find occurrences of a "pattern" (length M) within a "text" (length N) in O(N + M) time instead of the naive O(N * M).

Look for problems asking you to implement \`strStr()\`, find the shortest palindrome by adding characters, or check if a string is a repeated substring pattern.

- **KMP** uses an LPS (Longest Prefix Suffix) array to skip redundant comparisons.
- **Rabin-Karp** uses a rolling hash to compare strings in O(1) time.
- **Z-Algorithm** computes an array where \`Z[i]\` is the longest common prefix between the string and the suffix starting at \`i\`.
`,
      skillsLearned: [
        "KMP algorithm",
        "Z-function",
        "Rolling hash",
        "Rabin-Karp",
      ],
      prerequisites: ["Palindrome Problems"],
      difficulty: "Advanced",
      estimatedHours: 4,
      problems: [
        {
          name: "Find the Index of the First Occurrence in a String",
          difficulty: "Easy",
          level: "Basic",
          slug: "find-the-index-of-the-first-occurrence-in-a-string",
        },
        {
          name: "Repeated Substring Pattern",
          difficulty: "Easy",
          level: "Standard",
        },
        {
          name: "Repeated String Match",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Shortest Palindrome",
          difficulty: "Hard",
          level: "Mixed",
        },
        {
          name: "Longest Happy Prefix",
          difficulty: "Hard",
          level: "Interview",
        },
        {
          name: "Distinct Echo Substrings",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },

    /* ──────────────────────────────────────────────
     *  6. Trie-based String Problems
     * ────────────────────────────────────────────── */
    {
      id: "str-trie-based",
      name: "Trie-based String Problems",
      description:
        "Use trie data structure for prefix-based string problems",
      theory: `
A Trie (Prefix Tree) is a specialized tree used to store associative data structures. The intuition is to share common prefixes among multiple strings, reducing both space and lookup time for prefix-based operations.

Tries are the optimal choice for problems involving autocomplete, spell checkers, word searches on a grid, or finding the longest common prefix among a dynamic set of strings.

Nodes in a Trie typically contain a hash map (or array of 26 pointers) to their children and a boolean flag \`isEndOfWord\`. To insert or search, you iterate through the string's characters, creating or traversing nodes corresponding to each character.
`,
      skillsLearned: [
        "Trie construction",
        "Prefix matching",
        "Autocomplete",
      ],
      prerequisites: ["Pattern Matching (KMP / Z / Rabin-Karp)"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        {
          name: "Implement Trie (Prefix Tree)",
          difficulty: "Medium",
          level: "Basic",
          slug: "implement-trie-prefix-tree",
        },
        {
          name: "Longest Word in Dictionary",
          difficulty: "Medium",
          level: "Standard",
        },
        {
          name: "Replace Words",
          difficulty: "Medium",
          level: "Pattern",
        },
        {
          name: "Design Add and Search Words Data Structure",
          difficulty: "Medium",
          level: "Mixed",
        },
        {
          name: "Word Search II",
          difficulty: "Hard",
          level: "Challenge",
        },
      ],
    },
  ],
};
