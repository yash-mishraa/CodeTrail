import { PatternCategorySeed } from "@/lib/pattern-types";

export const mathCategory: PatternCategorySeed = {
  id: "math",
  name: "Math & Number Theory",
  icon: "π",
  accent: "#FF6B8A",
  description: "Mathematical reasoning from basic arithmetic to number theory",
  patterns: [
    {
      id: "math-basics",
      name: "Basic Math",
      description: "Fundamental math operations and number properties",
      theory: `### Intuition
Basic math problems revolve around integer manipulation, handling digit extraction, simulating arithmetic operations, or dealing with constraints like 32-bit integer overflow.

### How to Spot It
- The problem asks you to reverse an integer, check for a palindrome, or extract digits.
- You are adding/multiplying large numbers represented as strings or linked lists.

### Standard Approach
- **Digit Extraction**: Use \`% 10\` to get the last digit and \`/ 10\` (integer division) to remove the last digit. Keep iterating \`while (n > 0)\`.
- **Overflow Checks**: Before multiplying or adding to a result, ensure \`result < MAX / 10\` (or \`> MIN / 10\` for negative).
- **Simulated Arithmetic**: For strings or arrays, simulate grade-school addition/multiplication by carrying over values.`,
      skillsLearned: ["Integer operations", "Overflow handling", "Digit manipulation"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Fizz Buzz", difficulty: "Easy", level: "Basic" },
        { name: "Palindrome Number", difficulty: "Easy", level: "Standard" },
        { name: "Plus One", difficulty: "Easy", level: "Pattern" },
        { name: "Happy Number", difficulty: "Easy", level: "Mixed" },
        { name: "Add Binary", difficulty: "Easy", level: "Interview" },
        { name: "Reverse Integer", difficulty: "Medium", level: "Interview" },
        { name: "Multiply Strings", difficulty: "Medium", level: "Challenge" },
      ],
    },
    {
      id: "math-gcd",
      name: "GCD, LCM & Modular Arithmetic",
      description: "Greatest common divisor, least common multiple, and modular math",
      theory: `### Intuition
Greatest Common Divisor (GCD) and Least Common Multiple (LCM) are foundations of number theory. Modular arithmetic helps keep numbers within limits during operations (often modulo $10^9+7$).

### How to Spot It
- The problem involves dividing things equally, fractions, or repeating patterns.
- Fast exponentiation (\`Pow(x, n)\`) is required.

### Standard Approach
- **GCD (Euclidean Algorithm)**: \`gcd(a, b) = b === 0 ? a : gcd(b, a % b)\`.
- **LCM**: \`lcm(a, b) = (a * b) / gcd(a, b)\`.
- **Modular Exponentiation**: To compute $a^b \\pmod m$, use repeated squaring: square the base and halve the exponent iteratively to run in $O(\\log b)$ time.`,
      skillsLearned: ["Euclidean algorithm", "Modular exponentiation", "GCD/LCM properties"],
      prerequisites: ["Basic Math"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Greatest Common Divisor of Strings", difficulty: "Easy", level: "Basic" },
        { name: "Water Bottles", difficulty: "Easy", level: "Standard" },
        { name: "Ugly Number", difficulty: "Easy", level: "Pattern" },
        { name: "Count Primes", difficulty: "Medium", level: "Mixed" },
        { name: "Ugly Number II", difficulty: "Medium", level: "Interview" },
        { name: "Pow(x, n)", difficulty: "Medium", level: "Interview", slug: "powx-n" },
        { name: "Super Pow", difficulty: "Medium", level: "Challenge" },
      ],
    },
    {
      id: "math-primes",
      name: "Prime Numbers & Sieve",
      description: "Prime number algorithms and sieve methods",
      theory: `### Intuition
Identifying prime numbers or factorizing numbers is computationally heavy if done naively. Efficient prime generation relies on sieving techniques, which eliminate composite numbers in bulk.

### How to Spot It
- The problem asks for the number of primes up to $N$.
- You need the prime factorization of several numbers.

### Standard Approach
- **Primality Test**: For a single number $N$, check divisibility up to $\\sqrt{N}$. Time: $O(\\sqrt{N})$.
- **Sieve of Eratosthenes**: To find all primes up to $N$, create a boolean array of size $N+1$ (all true). Starting from $p=2$, if $p$ is prime, mark all multiples of $p$ ($p^2, p^2+p, \\dots$) as false. Time: $O(N \\log \\log N)$.`,
      skillsLearned: ["Sieve of Eratosthenes", "Primality testing", "Factorization"],
      prerequisites: ["GCD, LCM & Modular Arithmetic"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Perfect Number", difficulty: "Easy", level: "Basic" },
        { name: "Ugly Number", difficulty: "Easy", level: "Standard" },
        { name: "Count Primes", difficulty: "Medium", level: "Pattern" },
        { name: "Four Divisors", difficulty: "Medium", level: "Mixed" },
        { name: "Ugly Number II", difficulty: "Medium", level: "Interview" },
        { name: "Largest Component Size by Common Factor", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "math-combinatorics",
      name: "Combinatorics & Counting",
      description: "Counting problems and combinatorial math",
      theory: `### Intuition
Combinatorics deals with counting permutations, combinations, and structural arrangements. Many of these problems intersect with DP or Pascal's Triangle, utilizing factorial formulas or iterative states.

### How to Spot It
- The problem asks "how many ways" to arrange elements or form sets.
- Generating the $k$-th permutation or valid parenthesis (Catalan numbers).

### Standard Approach
- **Permutations/Combinations**: Know the formulas $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. Often computed iteratively to avoid overflow or via Pascal's Triangle (\`dp[i][j] = dp[i-1][j-1] + dp[i-1][j]\`).
- **Next Permutation**: To find the next lexicographical permutation, find the first decreasing element from the end, swap it with the next largest, and reverse the suffix.`,
      skillsLearned: ["Permutations", "Combinations", "Pascal's triangle", "Catalan numbers"],
      prerequisites: ["Basic Math"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Pascal's Triangle", difficulty: "Easy", level: "Basic" },
        { name: "Pascal's Triangle II", difficulty: "Easy", level: "Standard" },
        { name: "Unique Paths", difficulty: "Medium", level: "Pattern" },
        { name: "Combinations", difficulty: "Medium", level: "Mixed" },
        { name: "Next Permutation", difficulty: "Medium", level: "Interview" },
        { name: "Count Sorted Vowel Strings", difficulty: "Medium", level: "Interview" },
        { name: "Permutation Sequence", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "math-geometry",
      name: "Computational Geometry",
      description: "Geometric computations and spatial problems",
      theory: `### Intuition
Computational geometry focuses on points, lines, angles, and spatial arrangements in a 2D or 3D coordinate system. Problems often involve slopes, distances, or area calculations.

### How to Spot It
- The problem gives you an array of 2D coordinates \`(x, y)\`.
- You need to find rectangles, collinear points, intersections, or calculate distances.

### Standard Approach
- **Collinearity**: Instead of calculating division for slopes (which has floating-point precision issues), use cross-multiplication: $(y_2 - y_1) \\times (x_3 - x_2) === (y_3 - y_2) \\times (x_2 - x_1)$.
- **Distance**: Use squared distance $(x_2 - x_1)^2 + (y_2 - y_1)^2$ to avoid slow and imprecise square root operations.
- **Hash Maps**: When counting points forming lines/shapes, hash their properties (like the normalized slope fraction).`,
      skillsLearned: ["Distance calculation", "Convex hull intuition", "Line intersection"],
      prerequisites: ["Combinatorics & Counting"],
      difficulty: "Advanced",
      estimatedHours: 3,
      problems: [
        { name: "Rotate Image", difficulty: "Medium", level: "Basic" },
        { name: "Spiral Matrix", difficulty: "Medium", level: "Standard" },
        { name: "Set Matrix Zeroes", difficulty: "Medium", level: "Pattern" },
        { name: "Valid Square", difficulty: "Medium", level: "Mixed" },
        { name: "Detect Squares", difficulty: "Medium", level: "Interview" },
        { name: "Minimum Area Rectangle", difficulty: "Medium", level: "Interview", slug: "minimum-area-rectangle" },
        { name: "Max Points on a Line", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
