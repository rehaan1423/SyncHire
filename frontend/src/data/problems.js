export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n  \n}`,
      python: `def twoSum(nums, target):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Write your solution here\n    \n    return {};\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));\nconsole.log("---");\nconsole.log(JSON.stringify(twoSum([3, 2, 4], 6)));\nconsole.log("---");\nconsole.log(JSON.stringify(twoSum([3, 3], 6)));\nconsole.log("---");`,
      python: `\nprint(twoSum([2, 7, 11, 15], 9))\nprint("---")\nprint(twoSum([3, 2, 4], 6))\nprint("---")\nprint(twoSum([3, 3], 6))\nprint("---")`,
      "c++": `\nvoid printVector(const vector<int>& vec) {\n    cout << "[";\n    for (size_t i = 0; i < vec.size(); i++) {\n        cout << vec[i] << (i == vec.size() - 1 ? "" : ",");\n    }\n    cout << "]\\n";\n}\n\nint main() {\n    vector<int> nums1 = {2, 7, 11, 15};\n    printVector(twoSum(nums1, 9));\n    cout << "---" << endl;\n    vector<int> nums2 = {3, 2, 4};\n    printVector(twoSum(nums2, 6));\n    cout << "---" << endl;\n    vector<int> nums3 = {3, 3};\n    printVector(twoSum(nums3, 6));\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      "c++": "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {\n  // Write your solution here\n  \n}`,
      python: `def reverseString(s):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid reverseString(vector<char>& s) {\n    // Write your solution here\n    \n}`,
    },
    hiddenTestCode: {
      javascript: `\nlet t1 = ["h","e","l","l","o"];\nreverseString(t1);\nconsole.log(JSON.stringify(t1));\nconsole.log("---");\nlet t2 = ["H","a","n","n","a","h"];\nreverseString(t2);\nconsole.log(JSON.stringify(t2));\nconsole.log("---");`,
      python: `\nt1 = ["h","e","l","l","o"]\nreverseString(t1)\nprint(t1)\nprint("---")\nt2 = ["H","a","n","n","a","h"]\nreverseString(t2)\nprint(t2)\nprint("---")`,
      "c++": `\nvoid printVector(const vector<char>& vec) {\n    cout << "[";\n    for (size_t i = 0; i < vec.size(); i++) {\n        cout << vec[i] << (i == vec.size() - 1 ? "" : ", ");\n    }\n    cout << "]\\n";\n}\n\nint main() {\n    vector<char> test1 = {'h','e','l','l','o'};\n    reverseString(test1);\n    printVector(test1);\n    cout << "---" << endl;\n    vector<char> test2 = {'H','a','n','n','a','h'};\n    reverseString(test2);\n    printVector(test2);\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      "c++": "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  // Write your solution here\n  \n}`,
      python: `def isPalindrome(s):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <string>\n\nusing namespace std;\n\nbool isPalindrome(string s) {\n    // Write your solution here\n    \n    return false;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(isPalindrome("A man, a plan, a canal: Panama"));\nconsole.log("---");\nconsole.log(isPalindrome("race a car"));\nconsole.log("---");\nconsole.log(isPalindrome(" "));\nconsole.log("---");`,
      python: `\nprint(isPalindrome("A man, a plan, a canal: Panama"))\nprint("---")\nprint(isPalindrome("race a car"))\nprint("---")\nprint(isPalindrome(" "))\nprint("---")`,
      "c++": `\nint main() {\n    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;\n    cout << "---" << endl;\n    cout << (isPalindrome("race a car") ? "true" : "false") << endl;\n    cout << "---" << endl;\n    cout << (isPalindrome(" ") ? "true" : "false") << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      "c++": "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n  \n}`,
      python: `def maxSubArray(nums):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    // Write your solution here\n    \n    return 0;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log("---");\nconsole.log(maxSubArray([1]));\nconsole.log("---");\nconsole.log(maxSubArray([5,4,-1,7,8]));\nconsole.log("---");`,
      python: `\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))\nprint("---")\nprint(maxSubArray([1]))\nprint("---")\nprint(maxSubArray([5,4,-1,7,8]))\nprint("---")`,
      "c++": `\nint main() {\n    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};\n    cout << maxSubArray(nums1) << endl;\n    cout << "---" << endl;\n    vector<int> nums2 = {1};\n    cout << maxSubArray(nums2) << endl;\n    cout << "---" << endl;\n    vector<int> nums3 = {5,4,-1,7,8};\n    cout << maxSubArray(nums3) << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      "c++": "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n  \n}`,
      python: `def maxArea(height):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxArea(vector<int>& height) {\n    // Write your solution here\n    \n    return 0;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));\nconsole.log("---");\nconsole.log(maxArea([1,1]));\nconsole.log("---");`,
      python: `\nprint(maxArea([1,8,6,2,5,4,8,3,7]))\nprint("---")\nprint(maxArea([1,1]))\nprint("---")`,
      "c++": `\nint main() {\n    vector<int> h1 = {1,8,6,2,5,4,8,3,7};\n    cout << maxArea(h1) << endl;\n    cout << "---" << endl;\n    vector<int> h2 = {1,1};\n    cout << maxArea(h2) << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      "c++": "49\n1",
    },
  },

  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
      notes: [
        "A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
        "A common subsequence of two strings is a subsequence that is common to both strings."
      ],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: 'The longest common subsequence is "ace" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
        explanation: 'The longest common subsequence is "abc" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
        explanation: 'There is no such common subsequence, so the result is 0.',
      },
    ],
    constraints: [
      "1 ≤ text1.length, text2.length ≤ 1000",
      "text1 and text2 consist of only lowercase English characters."
    ],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {\n  // Write your solution here\n  \n}`,
      python: `def longestCommonSubsequence(text1, text2):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint longestCommonSubsequence(string text1, string text2) {\n    // Write your solution here\n    \n    return 0;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(longestCommonSubsequence("abcde", "ace"));\nconsole.log("---");\nconsole.log(longestCommonSubsequence("abc", "abc"));\nconsole.log("---");\nconsole.log(longestCommonSubsequence("abc", "def"));\nconsole.log("---");`,
      python: `\nprint(longestCommonSubsequence("abcde", "ace"))\nprint("---")\nprint(longestCommonSubsequence("abc", "abc"))\nprint("---")\nprint(longestCommonSubsequence("abc", "def"))\nprint("---")`,
      "c++": `\nint main() {\n    cout << longestCommonSubsequence("abcde", "ace") << endl;\n    cout << "---" << endl;\n    cout << longestCommonSubsequence("abc", "abc") << endl;\n    cout << "---" << endl;\n    cout << longestCommonSubsequence("abc", "def") << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "3\n3\n0",
      python: "3\n3\n0",
      "c++": "3\n3\n0",
    },
  },

  "next-greater-element": {
    id: "next-greater-element",
    title: "Next Greater Element I",
    difficulty: "Easy",
    category: "Array • Stack",
    description: {
      text: "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.",
      notes: [
        "You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.",
        "For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.",
        "If there is no next greater element, then the answer for this query is -1."
      ],
    },
    examples: [
      {
        input: "nums1 = [4,1,2], nums2 = [1,3,4,2]",
        output: "[-1,3,-1]",
        explanation: "For number 4 in nums1, there is no next greater number in nums2. For 1, the next greater is 3. For 2, there is no next greater number.",
      },
      {
        input: "nums1 = [2,4], nums2 = [1,2,3,4]",
        output: "[3,-1]",
        explanation: "For number 2 in nums1, the next greater is 3. For 4, there is no next greater number.",
      },
    ],
    constraints: [
      "1 ≤ nums1.length ≤ nums2.length ≤ 1000",
      "0 ≤ nums1[i], nums2[i] ≤ 10⁴",
      "All integers in nums1 and nums2 are unique.",
      "All the integers of nums1 also appear in nums2."
    ],
    starterCode: {
      javascript: `function nextGreaterElement(nums1, nums2) {\n  // Write your solution here\n  \n}`,
      python: `def nextGreaterElement(nums1, nums2):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n    // Write your solution here\n    \n    return {};\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(JSON.stringify(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])));\nconsole.log("---");\nconsole.log(JSON.stringify(nextGreaterElement([2, 4], [1, 2, 3, 4])));\nconsole.log("---");`,
      python: `\nprint(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))\nprint("---")\nprint(nextGreaterElement([2, 4], [1, 2, 3, 4]))\nprint("---")`,
      "c++": `\nvoid printVector(const vector<int>& vec) {\n    cout << "[";\n    for (size_t i = 0; i < vec.size(); i++) {\n        cout << vec[i] << (i == vec.size() - 1 ? "" : ",");\n    }\n    cout << "]\\n";\n}\n\nint main() {\n    vector<int> n1_1 = {4, 1, 2};\n    vector<int> n1_2 = {1, 3, 4, 2};\n    printVector(nextGreaterElement(n1_1, n1_2));\n    cout << "---" << endl;\n    vector<int> n2_1 = {2, 4};\n    vector<int> n2_2 = {1, 2, 3, 4};\n    printVector(nextGreaterElement(n2_1, n2_2));\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "[-1,3,-1]\n[3,-1]",
      python: "[-1, 3, -1]\n[3, -1]",
      "c++": "[-1,3,-1]\n[3,-1]",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
      notes: [
        "Return true if you can finish all courses. Otherwise, return false."
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "prerequisites[i].length == 2",
      "0 ≤ ai, bi < numCourses",
      "All the pairs prerequisites[i] are unique."
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n  \n}`,
      python: `def canFinish(numCourses, prerequisites):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nbool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n    // Write your solution here\n    \n    return false;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(canFinish(2, [[1, 0]]));\nconsole.log("---");\nconsole.log(canFinish(2, [[1, 0], [0, 1]]));\nconsole.log("---");`,
      python: `\nprint(canFinish(2, [[1, 0]]))\nprint("---")\nprint(canFinish(2, [[1, 0], [0, 1]]))\nprint("---")`,
      "c++": `\nint main() {\n    vector<vector<int>> p1 = {{1, 0}};\n    cout << (canFinish(2, p1) ? "true" : "false") << endl;\n    cout << "---" << endl;\n    vector<vector<int>> p2 = {{1, 0}, {0, 1}};\n    cout << (canFinish(2, p2) ? "true" : "false") << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      "c++": "true\nfalse",
    },
  },

  "range-sum-query-mutable": {
    id: "range-sum-query-mutable",
    title: "Dynamic Range Sum",
    difficulty: "Medium",
    category: "Design • Segment Tree",
    description: {
      text: "Given an integer array nums, handle multiple queries of the following types:",
      notes: [
        "1. Update the value of an element in nums.",
        "2. Calculate the sum of the elements of nums between indices left and right inclusive where left <= right."
      ],
    },
    examples: [
      {
        input: '["NumArray", "sumRange", "update", "sumRange"]\n[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]',
        output: "[null, 9, null, 8]",
        explanation: "NumArray numArray = new NumArray([1, 3, 5]);\nnumArray.sumRange(0, 2); // return 1 + 3 + 5 = 9\nnumArray.update(1, 2);  // nums = [1, 2, 5]\nnumArray.sumRange(0, 2); // return 1 + 2 + 5 = 8",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-100 ≤ nums[i] ≤ 100",
      "0 ≤ index < nums.length",
      "-100 ≤ val ≤ 100",
      "0 ≤ left ≤ right < nums.length",
      "At most 3 * 10⁴ calls will be made to update and sumRange."
    ],
    starterCode: {
      javascript: `class NumArray {\n  constructor(nums) {\n    // Initialize your data structure here\n  }\n\n  update(index, val) {\n    // Write your solution here\n  }\n\n  sumRange(left, right) {\n    // Write your solution here\n    return 0;\n  }\n}`,
      python: `class NumArray:\n    def __init__(self, nums):\n        # Initialize your data structure here\n        pass\n\n    def update(self, index, val):\n        # Write your solution here\n        pass\n\n    def sumRange(self, left, right):\n        # Write your solution here\n        return 0`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nclass NumArray {\npublic:\n    NumArray(vector<int>& nums) {\n        // Initialize your data structure here\n        \n    }\n    \n    void update(int index, int val) {\n        // Write your solution here\n        \n    }\n    \n    int sumRange(int left, int right) {\n        // Write your solution here\n        \n        return 0;\n    }\n};`,
    },
    hiddenTestCode: {
      javascript: `\nlet numArray = new NumArray([1, 3, 5]);\nconsole.log(numArray.sumRange(0, 2));\nconsole.log("---");\nnumArray.update(1, 2);\nconsole.log(numArray.sumRange(0, 2));\nconsole.log("---");`,
      python: `\nnumArray = NumArray([1, 3, 5])\nprint(numArray.sumRange(0, 2))\nprint("---")\nnumArray.update(1, 2)\nprint(numArray.sumRange(0, 2))\nprint("---")`,
      "c++": `\nint main() {\n    vector<int> nums = {1, 3, 5};\n    NumArray numArray(nums);\n    cout << numArray.sumRange(0, 2) << endl;\n    cout << "---" << endl;\n    numArray.update(1, 2);\n    cout << numArray.sumRange(0, 2) << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "9\n8",
      python: "9\n8",
      "c++": "9\n8",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: [
        "The overall run time complexity should be O(log (m+n))."
      ],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 ≤ m ≤ 1000",
      "0 ≤ n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n  \n}`,
      python: `def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass`,
      "c++": `#include <iostream>\n#include <vector>\n\nusing namespace std;\n\ndouble findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    // Write your solution here\n    \n    return 0.0;\n}`,
    },
    hiddenTestCode: {
      javascript: `\nconsole.log(findMedianSortedArrays([1, 3], [2]));\nconsole.log("---");\nconsole.log(findMedianSortedArrays([1, 2], [3, 4]));\nconsole.log("---");`,
      python: `\nprint(findMedianSortedArrays([1, 3], [2]))\nprint("---")\nprint(findMedianSortedArrays([1, 2], [3, 4]))\nprint("---")`,
      "c++": `\nint main() {\n    vector<int> n1_1 = {1, 3};\n    vector<int> n1_2 = {2};\n    cout << findMedianSortedArrays(n1_1, n1_2) << endl;\n    cout << "---" << endl;\n    vector<int> n2_1 = {1, 2};\n    vector<int> n2_2 = {3, 4};\n    cout << findMedianSortedArrays(n2_1, n2_2) << endl;\n    cout << "---" << endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      "c++": "2\n2.5",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  "c++": {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};