import { PatternCategorySeed } from "@/lib/pattern-types";

export const bitManipulationCategory: PatternCategorySeed = {
  id: "bit-manipulation",
  name: "Bit Manipulation",
  icon: "01",
  accent: "#FFD166",
  description: "Harness binary operations for elegant and efficient solutions",
  patterns: [
    {
      id: "bit-basics",
      name: "Bit Operation Basics",
      description: "Fundamental bitwise operations and tricks",
      theory: `
### Intuition
Bit manipulation involves operating directly on the binary representation of numbers. These operations (AND, OR, XOR, NOT, shifts) are executed directly by the CPU, making them incredibly fast. Understanding how binary numbers work is the key to solving these efficiently.

### How to Spot It
- The problem asks to count the number of 1s in a binary representation.
- You need to multiply or divide by powers of two quickly.
- The constraints are very small (e.g., $N \\le 32$ or $N \\le 64$), suggesting each bit can represent a state.

### General Approach
1. **Understand Operators:** Know what \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, and \`>>\` do.
2. **Bit Tricks:** Learn common tricks, like \`n & (n - 1)\` to clear the lowest set bit, or \`n & (-n)\` to isolate the lowest set bit.
3. **Iterate Bits:** Use a loop and bit shifts to check or set individual bits one by one.
      `,
      skillsLearned: ["AND, OR, XOR, NOT", "Shift operations", "Bit counting"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Number of 1 Bits", difficulty: "Easy", level: "Basic" },
        { name: "Counting Bits", difficulty: "Easy", level: "Standard" },
        { name: "Reverse Bits", difficulty: "Easy", level: "Pattern" },
        { name: "Power of Two", difficulty: "Easy", level: "Mixed" },
        { name: "Missing Number", difficulty: "Easy", level: "Interview" },
        { name: "Single Number", difficulty: "Easy", level: "Interview" },
        { name: "Complement of Base 10 Integer", difficulty: "Easy", level: "Challenge", slug: "complement-of-base-10-integer" },
      ],
    },
    {
      id: "bit-xor",
      name: "XOR Tricks",
      description: "Leverage XOR properties for pairing and cancellation",
      theory: `
### Intuition
The XOR operation (\`^\`) has fascinating properties: $x \\oplus x = 0$ (self-inverses) and $x \\oplus 0 = x$ (identity). This makes it incredibly powerful for finding missing or duplicate numbers, as paired identical numbers will cancel each other out completely.

### How to Spot It
- You need to find a single number in an array where every other number appears exactly twice.
- The problem involves finding a missing number in a sequence.
- You are asked to decode an array that was constructed using XOR operations.

### General Approach
1. **Cancellation:** To find a single unique number among pairs, XOR all the numbers in the array together. The pairs will cancel out to 0, leaving only the unique number.
2. **Missing Numbers:** XOR the array elements with the expected full sequence of numbers. The missing number will be the only one that doesn't get canceled out.
3. **Prefix XOR:** Similar to prefix sums, you can maintain a running XOR to quickly calculate the XOR of a subarray.
      `,
      skillsLearned: ["XOR cancellation", "Pair finding", "Prefix XOR"],
      prerequisites: ["Bit Operation Basics"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Single Number", difficulty: "Easy", level: "Basic" },
        { name: "Missing Number", difficulty: "Easy", level: "Standard" },
        { name: "Decode XORed Array", difficulty: "Easy", level: "Pattern" },
        { name: "Single Number II", difficulty: "Medium", level: "Interview" },
        { name: "Single Number III", difficulty: "Medium", level: "Interview" },
        { name: "Find the Duplicate Number", difficulty: "Medium", level: "Challenge" },
      ],
    },
    {
      id: "bit-mask",
      name: "Bitmask Techniques",
      description: "Use bitmasks to represent sets and states",
      theory: `
### Intuition
A bitmask uses an integer to represent a subset or a state of boolean variables. Since an integer is just a sequence of bits (0s and 1s), a 32-bit integer can compactly represent $2^{32}$ different states (e.g., which items are selected in a subset, or which nodes have been visited).

### How to Spot It
- The problem asks you to generate all subsets or combinations.
- You need to track the state of a small number of items (usually $\\le 20$).
- The problem involves Traveling Salesperson (TSP) or dynamic programming on subsets (Bitmask DP).

### General Approach
1. **Representation:** Use an integer from $0$ to $2^N - 1$. If the $i$-th bit is $1$, it means the $i$-th item is included in the current subset/state.
2. **Bit Checking:** Use \`(mask & (1 << i))\` to check if the $i$-th item is included.
3. **State Transitions:** Use bitwise OR \`(mask | (1 << i))\` to add an item to the state, and use Bitmask DP to transition between states optimally.
      `,
      skillsLearned: ["Subset enumeration", "State compression", "Bitmask DP"],
      prerequisites: ["XOR Tricks"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Subsets", difficulty: "Medium", level: "Basic" },
        { name: "Sum of Two Integers", difficulty: "Medium", level: "Standard" },
        { name: "Reverse Integer", difficulty: "Medium", level: "Pattern" },
        { name: "Bitwise AND of Numbers Range", difficulty: "Medium", level: "Mixed" },
        { name: "Total Hamming Distance", difficulty: "Medium", level: "Interview" },
        { name: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", level: "Challenge" },
      ],
    },
  ],
};
