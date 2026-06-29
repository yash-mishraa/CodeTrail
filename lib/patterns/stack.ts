import { PatternCategorySeed } from "@/lib/pattern-types";

export const stackCategory: PatternCategorySeed = {
  id: "stack",
  name: "Stack",
  icon: "≡",
  accent: "#FF6B8A",
  description: "From basic LIFO operations to monotonic stack mastery",
  patterns: [
    {
      id: "stk-basics",
      name: "Basic Stack Operations",
      description: "Fundamental stack operations and classic applications",
      theory: `
The Stack is a Last-In, First-Out (LIFO) data structure. The intuition is to use it when you need to process elements in the reverse order of their arrival, or when you need to match or keep track of recent, unresolved states.

You'll recognize this pattern when the problem involves undo mechanisms, history tracking, simulating a recursive process iteratively, or removing adjacent duplicates.

In JavaScript/TypeScript, an array is used as a stack via \`push()\` and \`pop()\`. When iterating through a string or array, push elements onto the stack. If the current element matches or cancels out the top element, pop it; otherwise, continue pushing.
`,
      skillsLearned: ["Push/Pop", "Stack simulation", "Expression evaluation"],
      prerequisites: [],
      difficulty: "Beginner",
      estimatedHours: 2,
      problems: [
        { name: "Valid Parentheses", difficulty: "Easy", level: "Basic" },
        { name: "Implement Queue using Stacks", difficulty: "Easy", level: "Basic" },
        { name: "Baseball Game", difficulty: "Easy", level: "Standard" },
        { name: "Backspace String Compare", difficulty: "Easy", level: "Standard" },
        { name: "Remove All Adjacent Duplicates In String", difficulty: "Easy", level: "Pattern" },
        { name: "Min Stack", difficulty: "Medium", level: "Interview" },
      ],
    },
    {
      id: "stk-monotonic",
      name: "Monotonic Stack",
      description:
        "Use monotonically increasing/decreasing stacks for next greater/smaller element problems",
      theory: `
A Monotonic Stack maintains its elements in a strictly increasing or decreasing order. The intuition is to discard elements from the stack that are no longer useful for finding the "next greater" or "next smaller" element, optimizing an O(N^2) brute force down to O(N).

Spot this pattern instantly when the problem asks for the "next greater element," "previous smaller element," "stock span," or finding the maximum area in a histogram.

Iterate through the array. For a Next Greater Element problem (decreasing stack), while the current element is greater than the top of the stack, pop the stack and process the popped index (the current element is its next greater). Then push the current index.
`,
      skillsLearned: [
        "Next greater element",
        "Temperature tracking",
        "Stock span",
      ],
      prerequisites: ["Basic Stack Operations"],
      difficulty: "Intermediate",
      estimatedHours: 4,
      problems: [
        { name: "Next Greater Element I", difficulty: "Easy", level: "Basic" },
        { name: "Daily Temperatures", difficulty: "Medium", level: "Standard" },
        { name: "Next Greater Element II", difficulty: "Medium", level: "Pattern" },
        { name: "Online Stock Span", difficulty: "Medium", level: "Pattern" },
        { name: "Sum of Subarray Minimums", difficulty: "Medium", level: "Mixed" },
        { name: "Largest Rectangle in Histogram", difficulty: "Hard", level: "Interview" },
        { name: "Maximal Rectangle", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "stk-expression",
      name: "Expression Evaluation",
      description: "Parse and evaluate mathematical expressions",
      theory: `
Expression Evaluation uses stacks to handle operator precedence and nested contexts (like parentheses). The intuition is to delay computation until you have all the necessary operands, which the stack naturally facilitates.

Look for problems asking you to evaluate Reverse Polish Notation (RPN), implement a Basic Calculator, or decode nested strings like \`3[a2[c]]\`.

For RPN, push numbers; when you see an operator, pop two numbers, apply the operator, and push the result. For basic calculators with precedence, push numbers and operators onto a stack, resolving high-precedence operators (like \`*\` and \`/\`) immediately before pushing.
`,
      skillsLearned: [
        "Infix evaluation",
        "Postfix conversion",
        "Calculator implementation",
      ],
      prerequisites: ["Basic Stack Operations"],
      difficulty: "Intermediate",
      estimatedHours: 3,
      problems: [
        { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", level: "Basic" },
        { name: "Basic Calculator II", difficulty: "Medium", level: "Standard" },
        { name: "Decode String", difficulty: "Medium", level: "Pattern" },
        { name: "Remove K Digits", difficulty: "Medium", level: "Mixed" },
        { name: "Asteroid Collision", difficulty: "Medium", level: "Interview" },
        { name: "Basic Calculator", difficulty: "Hard", level: "Challenge" },
      ],
    },
    {
      id: "stk-parentheses",
      name: "Parentheses Problems",
      description: "Validate, generate, and optimize parentheses expressions",
      theory: `
Parentheses problems rely on stacks to match opening and closing brackets, as well as to determine the validity of nesting. The intuition is that every closing bracket must perfectly match the most recently opened, unmatched bracket.

You'll encounter this when checking for valid parentheses, finding the longest valid parentheses substring, or generating all valid combinations.

When you encounter an opening bracket, push it (or its corresponding closing bracket) onto the stack. When you encounter a closing bracket, check if it matches the top of the stack. If it doesn't, or the stack is empty, it's invalid. If it matches, pop it.
`,
      skillsLearned: [
        "Matching brackets",
        "Generation",
        "Minimum removal",
      ],
      prerequisites: ["Basic Stack Operations"],
      difficulty: "Intermediate",
      estimatedHours: 2,
      problems: [
        { name: "Valid Parentheses", difficulty: "Easy", level: "Basic" },
        { name: "Generate Parentheses", difficulty: "Medium", level: "Standard" },
        { name: "Minimum Remove to Make Valid Parentheses", difficulty: "Medium", level: "Pattern" },
        { name: "Valid Parenthesis String", difficulty: "Medium", level: "Mixed" },
        { name: "Score of Parentheses", difficulty: "Medium", level: "Interview" },
        { name: "Longest Valid Parentheses", difficulty: "Hard", level: "Challenge" },
      ],
    },
  ],
};
