import { buildCategory } from "@/lib/pattern-types";
import { arraysCategory } from "./arrays";
import { stringsCategory } from "./strings";
import { linkedListCategory } from "./linked-list";
import { stackCategory } from "./stack";
import { queueCategory } from "./queue";
import { treesCategory } from "./trees";
import { graphsCategory } from "./graphs";
import { dpCategory } from "./dp";
import { binarySearchCategory } from "./binary-search";
import { backtrackingCategory } from "./backtracking";
import { recursionCategory } from "./recursion";
import { greedyCategory } from "./greedy";
import { heapCategory } from "./heap";
import { hashingCategory } from "./hashing";
import { bitManipulationCategory } from "./bit-manipulation";
import { trieCategory } from "./trie";
import { segmentTreeCategory } from "./segment-tree";
import { unionFindCategory } from "./union-find";
import { mathCategory } from "./math";
import { advancedDsCategory } from "./advanced";

export const initialPatternCategories = [
  arraysCategory,
  stringsCategory,
  linkedListCategory,
  stackCategory,
  queueCategory,
  treesCategory,
  graphsCategory,
  dpCategory,
  binarySearchCategory,
  backtrackingCategory,
  recursionCategory,
  greedyCategory,
  heapCategory,
  hashingCategory,
  bitManipulationCategory,
  trieCategory,
  segmentTreeCategory,
  unionFindCategory,
  mathCategory,
  advancedDsCategory,
].map(buildCategory);
