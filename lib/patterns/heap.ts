import { PatternCategorySeed } from "@/lib/pattern-types";

export const heapCategory: PatternCategorySeed = {
  id: "heap",
  name: "Heap / Priority Queue",
  icon: "△",
  accent: "#38BDF8",
  description: "Efficiently manage ordered access to elements using heaps",
  patterns: [
    {
      id: "hp-basics",
      name: "Basic Heap Operations",
      description: "Priority queue fundamentals and basic applications",
      theory: `
### Intuition
A heap (or priority queue) is a tree-based data structure that gives you $O(1)$ access to the "best" (minimum or maximum) element and $O(\\log N)$ time to insert or remove elements. It's the perfect tool when you don't need a fully sorted array, just constant access to the extremum.

### How to Spot It
- The problem asks for the "k-th largest", "k-th smallest", or "top k" elements.
- You need to frequently insert elements and retrieve the minimum or maximum element in a dynamic stream of data.

### General Approach
1. **Choose Heap Type:** Use a Min-Heap if you want the smallest element at the top, or a Max-Heap for the largest.
2. **Insert:** Add elements to the heap as you process them.
3. **Extract:** Continuously pop the top element to get the min/max as needed.
      `,
      skillsLearned: ["Min-heap", "Max-heap", "Heap insertion", "Extraction"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Kth Largest Element in a Stream", difficulty: "Easy", level: "Basic" },
        { name: "Last Stone Weight", difficulty: "Easy", level: "Standard" },
        { name: "Relative Ranks", difficulty: "Easy", level: "Pattern" },
        { name: "Kth Largest Element in an Array", difficulty: "Medium", level: "Interview" },
        { name: "Sort Characters By Frequency", difficulty: "Medium", level: "Interview" },
      ],
    },
    {
      id: "hp-top-k",
      name: "Top-K Pattern",
      description: "Find or maintain top K elements efficiently",
      theory: `
### Intuition
Instead of sorting an entire array in $O(N \\log N)$ to find the top $K$ elements, we can maintain a heap of size $K$. This reduces the time complexity to $O(N \\log K)$, which is significantly faster when $K$ is much smaller than $N$.

### How to Spot It
- The problem explicitly asks for the "Top K", "K most frequent", or "K closest" elements.
- You only care about a small subset of the extremum elements, not sorting the whole dataset.

### General Approach
1. **Heap of Size K:** To find the top $K$ largest elements, maintain a Min-Heap of size $K$. (Conversely, use a Max-Heap of size $K$ for the $K$ smallest).
2. **Push and Pop:** Iterate through the elements, pushing each into the heap. If the heap size exceeds $K$, pop the top (which removes the smallest among the largest seen so far).
3. **Result:** At the end, the heap contains exactly the top $K$ elements.
      `,
      skillsLearned: ["Top-K selection", "Frequency-based selection", "Bucket sort alternative"],
      prerequisites: ["Basic Heap Operations"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Top K Frequent Elements", difficulty: "Medium", level: "Standard" },
        { name: "K Closest Points to Origin", difficulty: "Medium", level: "Pattern" },
        { name: "Top K Frequent Words", difficulty: "Medium", level: "Mixed" },
        { name: "Kth Smallest Element in a Sorted Matrix", difficulty: "Medium", level: "Interview" },
        { name: "Find K Pairs with Smallest Sums", difficulty: "Medium", level: "Interview" },
        { name: "Reorganize String", difficulty: "Medium", level: "Challenge" },
      ],
    },
    {
      id: "hp-two-heaps",
      name: "Two Heaps",
      description: "Use two heaps to solve median and partition problems",
      theory: `
### Intuition
Sometimes you need to keep track of the median or a dynamic partition of data. By using two heaps—a Max-Heap for the smaller half of the numbers and a Min-Heap for the larger half—you can balance the data and find the median in $O(1)$ time.

### How to Spot It
- The problem asks to find the median in a data stream.
- You need to dynamically partition elements into a "smaller" half and a "larger" half.

### General Approach
1. **Two Heaps:** Create a Max-Heap (\`small\`) and a Min-Heap (\`large\`).
2. **Insert and Balance:** Push new elements into \`small\` first. Then move the largest element from \`small\` to \`large\`. If \`large\` now has more elements than \`small\`, move the smallest element from \`large\` back to \`small\`.
3. **Extract Median:** The median is the top of \`small\` (if sizes are unequal) or the average of the tops of both heaps.
      `,
      skillsLearned: ["Median tracking", "Balanced partition", "Sliding median"],
      prerequisites: ["Top-K Pattern"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Find Median from Data Stream", difficulty: "Hard", level: "Pattern" },
        { name: "Sliding Window Median", difficulty: "Hard", level: "Interview" },
        { name: "IPO", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "hp-merge-k",
      name: "Merge K Sorted",
      description: "Merge multiple sorted streams using a heap",
      theory: `
### Intuition
When you have multiple sorted arrays or linked lists and want to merge them into a single sorted list, comparing all elements at once is inefficient. A heap can keep track of the current smallest element among all the lists in $O(\\log K)$ time.

### How to Spot It
- You are given $K$ sorted arrays or linked lists and need to merge them.
- You need to find the $K$-th smallest element in a sorted matrix (which can be viewed as $K$ sorted rows).

### General Approach
1. **Initialize:** Push the first element of each of the $K$ lists into a Min-Heap, along with information about which list it came from and its index.
2. **Extract and Replace:** Pop the smallest element from the heap and add it to the merged result.
3. **Advance:** From the list that the popped element belonged to, push the next element into the heap. Repeat until the heap is empty.
      `,
      skillsLearned: ["K-way merge", "Lazy evaluation", "Iterator merging"],
      prerequisites: ["Two Heaps"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Kth Smallest Element in a Sorted Matrix", difficulty: "Medium", level: "Standard" },
        { name: "Find K Pairs with Smallest Sums", difficulty: "Medium", level: "Pattern" },
        { name: "Ugly Number II", difficulty: "Medium", level: "Mixed" },
        { name: "Merge k Sorted Lists", difficulty: "Hard", level: "Interview" },
        { name: "Smallest Range Covering Elements from K Lists", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "hp-scheduling",
      name: "Heap in Scheduling",
      description: "Use heaps for task and event scheduling",
      theory: `
### Intuition
Scheduling problems often involve tracking ongoing tasks, meetings, or server availability. A heap elegantly manages events sorted by time, such as "next available server time" or "end time of the earliest meeting".

### How to Spot It
- You need to assign tasks to servers that free up at different times.
- You need to find the maximum number of overlapping meetings.
- The problem involves executing tasks based on duration and availability.

### General Approach
1. **Sort Events:** Sort the incoming tasks or meetings by start time.
2. **Min-Heap for Active Events:** Use a Min-Heap to track the end times of ongoing events or availability times of resources.
3. **Process:** Iterate through sorted tasks. Pop from the heap to free up resources that finish before the current task starts, then push the current task's completion time to the heap.
      `,
      skillsLearned: ["Event-driven simulation", "Task scheduling", "Meeting rooms"],
      prerequisites: ["Top-K Pattern"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Meeting Rooms II", difficulty: "Medium", level: "Standard", slug: "meeting-rooms-ii" },
        { name: "Task Scheduler", difficulty: "Medium", level: "Pattern" },
        { name: "Process Tasks Using Servers", difficulty: "Medium", level: "Mixed" },
        { name: "Single-Threaded CPU", difficulty: "Medium", level: "Interview" },
        { name: "Maximum Performance of a Team", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
