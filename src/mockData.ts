export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  questionCount: number;
  color: string;
}

export interface Question {
  id: string;
  topicId: string;
  title: string;
  preview: string;
  content: string;
  upvotes: number;
  downvotes: number;
  answerCount: number;
  createdAt: string;
  author: string;
}

export interface Answer {
  id: string;
  questionId: string;
  content: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  author: string;
}

export interface InterviewTip {
  id: string;
  title: string;
  content: string;
  category: string;
}

export const topics: Topic[] = [
  {
    id: '1',
    name: 'Data Structures & Algorithms',
    slug: 'dsa',
    description: 'Essential DS&A questions for coding interviews',
    icon: 'Code2',
    questionCount: 156,
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'React',
    slug: 'react',
    description: 'Common React interview questions and patterns',
    icon: 'Layers',
    questionCount: 89,
    color: 'bg-cyan-500',
  },
  {
    id: '3',
    name: 'Node.js',
    slug: 'nodejs',
    description: 'Backend development with Node.js',
    icon: 'Server',
    questionCount: 67,
    color: 'bg-green-500',
  },
  {
    id: '4',
    name: 'System Design',
    slug: 'system-design',
    description: 'Scalability, architecture, and system design patterns',
    icon: 'Network',
    questionCount: 43,
    color: 'bg-purple-500',
  },
  {
    id: '5',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'Core JavaScript concepts and best practices',
    icon: 'Braces',
    questionCount: 124,
    color: 'bg-yellow-500',
  },
  {
    id: '6',
    name: 'TypeScript',
    slug: 'typescript',
    description: 'Type system, generics, and TypeScript patterns',
    icon: 'FileType',
    questionCount: 52,
    color: 'bg-blue-600',
  },
];

export const questions: Question[] = [
  {
    id: '1',
    topicId: '1',
    title: 'Implement a function to reverse a linked list',
    preview: 'Given a singly linked list, reverse it in-place and return the new head...',
    content: 'Given a singly linked list, reverse it in-place and return the new head. You should do this in O(n) time and O(1) space complexity. Explain your approach and any edge cases you need to handle.',
    upvotes: 342,
    downvotes: 12,
    answerCount: 18,
    createdAt: '2024-03-10',
    author: 'alex_dev',
  },
  {
    id: '2',
    topicId: '1',
    title: 'Two Sum Problem - Find pairs that sum to target',
    preview: 'Given an array of integers and a target sum, find two numbers that add up to the target...',
    content: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    upvotes: 528,
    downvotes: 8,
    answerCount: 24,
    createdAt: '2024-03-12',
    author: 'coding_master',
  },
  {
    id: '3',
    topicId: '1',
    title: 'Find the longest palindromic substring',
    preview: 'Given a string s, return the longest palindromic substring in s...',
    content: 'Given a string s, return the longest palindromic substring in s. A palindrome is a string that reads the same backward as forward. What are the different approaches to solve this problem?',
    upvotes: 289,
    downvotes: 15,
    answerCount: 12,
    createdAt: '2024-03-08',
    author: 'algo_expert',
  },
  {
    id: '4',
    topicId: '2',
    title: 'Explain React Hooks and when to use them',
    preview: 'What are React Hooks? Explain useState, useEffect, and useContext with examples...',
    content: 'What are React Hooks and why were they introduced? Explain the most commonly used hooks (useState, useEffect, useContext, useRef) with practical examples. When should you create custom hooks?',
    upvotes: 445,
    downvotes: 9,
    answerCount: 22,
    createdAt: '2024-03-11',
    author: 'react_guru',
  },
  {
    id: '5',
    topicId: '2',
    title: 'Difference between useMemo and useCallback',
    preview: 'When should you use useMemo vs useCallback? Provide real-world examples...',
    content: 'Explain the difference between useMemo and useCallback hooks in React. When should each be used? Provide examples of performance optimization scenarios where these hooks are beneficial.',
    upvotes: 367,
    downvotes: 6,
    answerCount: 15,
    createdAt: '2024-03-09',
    author: 'performance_pro',
  },
  {
    id: '6',
    topicId: '3',
    title: 'How does the Node.js event loop work?',
    preview: 'Explain the event loop, call stack, and callback queue in Node.js...',
    content: 'Describe how the Node.js event loop works. Explain the relationship between the call stack, callback queue, and microtask queue. How does Node.js handle asynchronous operations?',
    upvotes: 512,
    downvotes: 11,
    answerCount: 19,
    createdAt: '2024-03-13',
    author: 'backend_dev',
  },
  {
    id: '7',
    topicId: '4',
    title: 'Design a URL shortening service like bit.ly',
    preview: 'How would you design a scalable URL shortener? Discuss database schema, API design...',
    content: 'Design a URL shortening service similar to bit.ly. Consider: database schema, API endpoints, how to generate short URLs, handling collisions, scalability concerns, and caching strategies. What would be your tech stack choices?',
    upvotes: 678,
    downvotes: 14,
    answerCount: 28,
    createdAt: '2024-03-14',
    author: 'system_architect',
  },
];

export const answers: Answer[] = [
  {
    id: '1',
    questionId: '1',
    content: `The key to reversing a linked list in-place is to use three pointers: prev, current, and next.

**Algorithm:**
1. Initialize prev = null, current = head
2. While current is not null:
   - Store next = current.next
   - Reverse the link: current.next = prev
   - Move pointers forward: prev = current, current = next
3. Return prev (new head)

**Time Complexity:** O(n) - single pass through the list
**Space Complexity:** O(1) - only using three pointers

**Edge cases to handle:**
- Empty list (head is null)
- Single node list
- Two node list`,
    upvotes: 124,
    downvotes: 3,
    createdAt: '2024-03-10',
    author: 'linked_list_pro',
  },
  {
    id: '2',
    questionId: '1',
    content: `Here's an alternative recursive approach, though it uses O(n) space due to the call stack:

\`\`\`javascript
function reverseList(head) {
  if (!head || !head.next) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
\`\`\`

The recursive solution is more elegant but less space-efficient for interviews where O(1) space is required.`,
    upvotes: 89,
    downvotes: 5,
    createdAt: '2024-03-11',
    author: 'recursive_thinker',
  },
  {
    id: '3',
    questionId: '2',
    content: `The optimal solution uses a hash map to achieve O(n) time complexity:

\`\`\`javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
\`\`\`

**Why this works:**
- We store each number and its index as we iterate
- For each number, we check if its complement exists in the map
- If found, we return both indices immediately

**Time:** O(n), **Space:** O(n)`,
    upvotes: 256,
    downvotes: 4,
    createdAt: '2024-03-12',
    author: 'hash_master',
  },
  {
    id: '4',
    questionId: '4',
    content: `React Hooks were introduced in React 16.8 to allow functional components to use state and lifecycle features previously only available in class components.

**useState:** Manages local state in functional components
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

**useEffect:** Handles side effects (data fetching, subscriptions, DOM manipulation)
\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

**useContext:** Consumes context values without nesting
\`\`\`javascript
const theme = useContext(ThemeContext);
\`\`\`

**When to create custom hooks:**
- When you have reusable stateful logic
- To extract complex logic from components
- Example: useLocalStorage, useFetch, useDebounce`,
    upvotes: 198,
    downvotes: 2,
    createdAt: '2024-03-11',
    author: 'hooks_enthusiast',
  },
];

export const interviewTips: InterviewTip[] = [
  {
    id: '1',
    title: 'Always clarify requirements first',
    content: 'Before jumping into coding, ask clarifying questions about edge cases, input constraints, and expected output. This shows thoughtful problem-solving.',
    category: 'General',
  },
  {
    id: '2',
    title: 'Think out loud during coding',
    content: 'Verbalize your thought process as you code. Interviewers want to understand your reasoning and approach to problem-solving.',
    category: 'Communication',
  },
  {
    id: '3',
    title: 'Start with a brute force solution',
    content: 'It\'s okay to start with a less optimal solution and then optimize. This shows you can solve the problem and understand trade-offs.',
    category: 'Problem Solving',
  },
  {
    id: '4',
    title: 'Test your code with examples',
    content: 'Walk through your code with the given examples and edge cases. Catch bugs before the interviewer does.',
    category: 'Testing',
  },
  {
    id: '5',
    title: 'Discuss time and space complexity',
    content: 'Always analyze and discuss the Big O complexity of your solution. Explain why certain approaches are more efficient.',
    category: 'Analysis',
  },
];

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return topics.find(topic => topic.slug === slug);
};

export const getQuestionsByTopicId = (topicId: string): Question[] => {
  return questions.filter(q => q.topicId === topicId);
};

export const getQuestionById = (id: string): Question | undefined => {
  return questions.find(q => q.id === id);
};

export const getAnswersByQuestionId = (questionId: string): Answer[] => {
  return answers.filter(a => a.questionId === questionId);
};
