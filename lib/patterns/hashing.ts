import { PatternCategorySeed } from "@/lib/pattern-types";

export const hashingCategory: PatternCategorySeed = {
  id: "hashing",
  name: "Hashing",
  icon: "#",
  accent: "#FFB454",
  description: "Use hash maps and sets for O(1) lookups and frequency tracking",
  patterns: [
    {
      id: "hash-basics",
      name: "Hash Map Basics",
      description: "Fundamental hash map operations and lookups",
      theory: `
### Intuition
Hash maps and sets provide $O(1)$ average time complexity for insertions, deletions, and lookups. They are the fundamental data structures for finding duplicates, pairing elements, or mapping a key to a specific value without scanning the entire dataset.

### How to Spot It
- The problem involves finding pairs that satisfy a condition (like Two Sum).
- You need to quickly check if an element exists or has been seen before.
- You need to map one value to another (like tracking character mappings in Isomorphic Strings).

### General Approach
1. **Initialize:** Create a hash map (dictionary) or hash set.
2. **Iterate:** Loop through the array or string.
3. **Lookup and Store:** For each element, check if the required complementary value exists in the hash map. If it does, you've found your answer. If not, store the current element in the hash map for future checks.
      `,
      skillsLearned: ["Key-value storage", "Frequency counting", "Set operations"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Two Sum", difficulty: "Easy", level: "Basic" },
        { name: "Contains Duplicate", difficulty: "Easy", level: "Basic" },
        { name: "Valid Anagram", difficulty: "Easy", level: "Standard" },
        { name: "Ransom Note", difficulty: "Easy", level: "Standard" },
        { name: "Isomorphic Strings", difficulty: "Easy", level: "Pattern" },
        { name: "Word Pattern", difficulty: "Easy", level: "Pattern" },
        { name: "Contains Duplicate II", difficulty: "Easy", level: "Mixed" },
      ],
    },
    {
      id: "hash-frequency",
      name: "Frequency Counting",
      description: "Solve problems by tracking element frequencies",
      theory: `
### Intuition
Many problems require you to count how many times each element appears. A hash map is perfect for storing frequencies, allowing you to easily find the most common elements, unique elements, or group items based on a shared property (like anagrams).

### How to Spot It
- The problem asks for the "majority element", "single number", or "top K frequent elements".
- You need to group elements that share a common trait, such as identical character counts.

### General Approach
1. **Frequency Map:** Iterate through the data and build a hash map where keys are the elements (or a canonical representation of the element) and values are their frequencies or a list of items belonging to that group.
2. **Process Map:** Iterate through the values or keys of the hash map to find the answer (e.g., finding the key with the max value, or sorting elements based on frequencies).
      `,
      skillsLearned: ["Frequency maps", "Majority element", "Top-K frequent"],
      prerequisites: ["Hash Map Basics"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Majority Element", difficulty: "Easy", level: "Basic" },
        { name: "Single Number", difficulty: "Easy", level: "Standard" },
        { name: "First Unique Character in a String", difficulty: "Easy", level: "Pattern" },
        { name: "Top K Frequent Elements", difficulty: "Medium", level: "Mixed" },
        { name: "Group Anagrams", difficulty: "Medium", level: "Interview" },
        { name: "Sort Characters By Frequency", difficulty: "Medium", level: "Interview" },
        { name: "Encode and Decode Strings", difficulty: "Medium", level: "Challenge", slug: "encode-and-decode-strings" },
      ],
    },
    {
      id: "hash-subarray",
      name: "Subarray Sum Patterns",
      description: "Use prefix sums with hash maps for subarray problems",
      theory: `
### Intuition
Finding subarrays that meet a specific condition (like a target sum) is tricky because there are $O(N^2)$ possible subarrays. By keeping a running prefix sum and using a hash map to store previously seen prefix sums, we can find valid subarrays in $O(N)$ time.

### How to Spot It
- The problem asks for the number of contiguous subarrays with a specific sum.
- You need to find the longest subarray with an equal number of 0s and 1s.
- The input array contains negative numbers, which means a simple sliding window won't work.

### General Approach
1. **Prefix Sum:** Maintain a running \`current_sum\`.
2. **Hash Map:** Use a hash map to store \`{prefix_sum: count_or_index}\`. Initialize it with \`{0: 1}\` (or \`-1\` for index) to account for subarrays starting from index 0.
3. **Check:** At each step, check if \`current_sum - target\` exists in the hash map. If it does, you've found valid subarrays. Add the current sum to the hash map.
      `,
      skillsLearned: ["Prefix sum + hash", "Running sum", "Contiguous subarray"],
      prerequisites: ["Frequency Counting"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Subarray Sum Equals K", difficulty: "Medium", level: "Standard" },
        { name: "Contiguous Array", difficulty: "Medium", level: "Pattern" },
        { name: "Longest Consecutive Sequence", difficulty: "Medium", level: "Interview" },
        { name: "Continuous Subarray Sum", difficulty: "Medium", level: "Interview" },
        { name: "Maximum Size Subarray Sum Equals k", difficulty: "Medium", level: "Challenge", slug: "maximum-size-subarray-sum-equals-k" },
      ],
    },
    {
      id: "hash-design",
      name: "Hash Map Design",
      description: "Design data structures using hashing",
      theory: `
### Intuition
Sometimes you are asked to design a data structure that combines the $O(1)$ lookups of a hash map with the ordering or eviction policies of a linked list or array. This requires linking multiple data structures together.

### How to Spot It
- The problem explicitly asks you to design a class like LRU Cache, LFU Cache, or a randomized set.
- You need $O(1)$ time complexity for multiple operations like insert, delete, and get-random.

### General Approach
1. **Combine Structures:** Use a hash map for $O(1)$ access to elements. Combine it with a Doubly Linked List (for $O(1)$ ordering/eviction updates) or an Array (for $O(1)$ random access).
2. **Synchronize:** Ensure that any insertion, deletion, or update modifies *all* underlying data structures consistently. For example, if you remove an item from the array, remove it from the hash map too.
      `,
      skillsLearned: ["Hash map implementation", "Collision handling", "Custom hash"],
      prerequisites: ["Subarray Sum Patterns"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Design HashMap", difficulty: "Easy", level: "Basic" },
        { name: "Design HashSet", difficulty: "Easy", level: "Basic" },
        { name: "LRU Cache", difficulty: "Medium", level: "Standard" },
        { name: "Insert Delete GetRandom O(1)", difficulty: "Medium", level: "Interview", slug: "insert-delete-getrandom-o1" },
        { name: "Time Based Key-Value Store", difficulty: "Medium", level: "Interview", slug: "time-based-key-value-store" },
        { name: "LFU Cache", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
