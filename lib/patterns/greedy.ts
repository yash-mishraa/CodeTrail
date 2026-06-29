import { PatternCategorySeed } from "@/lib/pattern-types";

export const greedyCategory: PatternCategorySeed = {
  id: "greedy",
  name: "Greedy",
  icon: "↗",
  accent: "#9BFF2E",
  description: "Make locally optimal choices that lead to globally optimal solutions",
  patterns: [
    {
      id: "grd-interval",
      name: "Interval Scheduling",
      description: "Optimize selection and merging of intervals",
      theory: `
### Intuition
Interval scheduling problems involve finding an optimal way to process a set of time intervals. A greedy approach usually works by sorting the intervals by their start or end times and then making a locally optimal choice at each step, such as picking the interval that ends earliest to leave the most room for future intervals.

### How to Spot It
- The problem involves a list of intervals \`[start, end]\`, meetings, or events.
- You need to find the maximum number of non-overlapping intervals, merge overlapping intervals, or find the minimum number of resources (like meeting rooms) required.

### General Approach
1. **Sort:** Sort the intervals based on either their start time or end time, depending on the problem.
2. **Iterate and Compare:** Keep track of a "current" interval or end time. Iterate through the sorted list and compare the next interval's start time with the current end time.
3. **Greedy Choice:** If they overlap, apply the greedy logic (e.g., merge them, or pick the one ending earlier). If they don't, update the current interval.
      `,
      skillsLearned: ["Sorting by end time", "Greedy selection", "Interval merging"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 3,
      problems: [
        { name: "Meeting Rooms", difficulty: "Easy", level: "Basic", slug: "meeting-rooms" },
        { name: "Non-overlapping Intervals", difficulty: "Medium", level: "Standard" },
        { name: "Merge Intervals", difficulty: "Medium", level: "Standard" },
        { name: "Insert Interval", difficulty: "Medium", level: "Pattern" },
        { name: "Meeting Rooms II", difficulty: "Medium", level: "Interview", slug: "meeting-rooms-ii" },
        { name: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium", level: "Interview" },
        { name: "Minimum Interval to Include Each Query", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "grd-activity",
      name: "Activity Selection & Scheduling",
      description: "Maximize activities and schedule tasks optimally",
      theory: `
### Intuition
Activity Selection problems are closely related to interval scheduling but often focus on maximizing the number of activities performed by a single person or machine, or scheduling tasks with specific constraints or deadlines to maximize profit or minimize time.

### How to Spot It
- You are given a set of tasks with durations, deadlines, or profits.
- You need to select a subset of tasks that satisfy certain constraints while maximizing a specific value (like number of tasks completed).

### General Approach
1. **Define Priority:** Figure out the greedy criteria to prioritize tasks (e.g., earliest deadline, shortest duration, highest profit).
2. **Sort:** Sort the activities based on this priority.
3. **Schedule:** Iterate through the sorted activities and greedily "schedule" them if they fit into the available time slots without violating constraints.
      `,
      skillsLearned: ["Activity selection", "Task scheduling", "Deadline sorting"],
      prerequisites: ["Interval Scheduling"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Task Scheduler", difficulty: "Medium", level: "Standard" },
        { name: "Reorganize String", difficulty: "Medium", level: "Pattern" },
        { name: "Car Pooling", difficulty: "Medium", level: "Mixed" },
        { name: "Minimum Platforms", difficulty: "Medium", level: "Interview", slug: "minimum-platforms" },
        { name: "Course Schedule III", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "grd-arrays",
      name: "Greedy on Arrays",
      description: "Greedy strategies for array optimization",
      theory: `
### Intuition
Greedy approaches on arrays often involve making a sequence of choices to reach a goal or maximize a value without looking back. For example, in jump games, at each step, you calculate the furthest reachable index and greedily jump to the position that maximizes your next reach.

### How to Spot It
- The problem involves moving through an array from left to right to reach the end or achieve a maximum score.
- You need to partition an array into contiguous subarrays optimally.
- Choices made earlier do not restrict future choices in a way that requires backtracking.

### General Approach
1. **Track State:** Maintain variables to track the current optimal state (e.g., maximum reachable index, current fuel, or partition end).
2. **Iterate:** Go through the array elements one by one.
3. **Greedy Update:** At each element, update the state based on a locally optimal choice. If the state becomes invalid, handle it (e.g., return false or increment a jump counter).
      `,
      skillsLearned: ["Jump game strategies", "Gas station", "Partition labels"],
      prerequisites: [],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Best Time to Buy and Sell Stock II", difficulty: "Medium", level: "Basic", slug: "best-time-to-buy-and-sell-stock-ii" },
        { name: "Jump Game", difficulty: "Medium", level: "Standard" },
        { name: "Jump Game II", difficulty: "Medium", level: "Pattern" },
        { name: "Gas Station", difficulty: "Medium", level: "Interview" },
        { name: "Partition Labels", difficulty: "Medium", level: "Interview" },
        { name: "Hand of Straights", difficulty: "Medium", level: "Interview" },
        { name: "Candy", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "grd-string",
      name: "Greedy on Strings",
      description: "Greedy approaches for string construction and manipulation",
      theory: `
### Intuition
String problems can sometimes be solved greedily by building the optimal string character by character. Often, you want to maintain a specific property (like lexicographical order or distinct characters) and can use a stack or pointers to greedily keep the "best" characters and discard others.

### How to Spot It
- You need to build a string, subsequence, or permutation that is lexicographically smallest or largest.
- You need to remove or replace characters to satisfy a condition optimally.

### General Approach
1. **Monotonic Stack (often):** Use a stack to build the result.
2. **Greedy Pop/Push:** Iterate through the string. If the current character is "better" (e.g., smaller for lexicographically smallest) than the top of the stack, and the top of the stack can be discarded (e.g., it appears again later), pop the stack.
3. **Push:** Push the current character onto the stack. Finally, construct the string from the stack.
      `,
      skillsLearned: ["Lexicographic ordering", "Character selection", "Stack-based greedy"],
      prerequisites: [],
      difficulty: "Intermediate",
      estimatedHours: 2,
      problems: [
        { name: "Remove Duplicate Letters", difficulty: "Medium", level: "Standard" },
        { name: "Smallest Subsequence of Distinct Characters", difficulty: "Medium", level: "Pattern" },
        { name: "Largest Number", difficulty: "Medium", level: "Mixed" },
        { name: "Remove K Digits", difficulty: "Medium", level: "Interview" },
        { name: "Monotone Increasing Digits", difficulty: "Medium", level: "Challenge" },
      ],
    },
  ],
};
