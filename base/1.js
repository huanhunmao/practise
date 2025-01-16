import chalk from 'chalk'


// 定义高亮规则
const HIGHLIGHT_RULES = [
  { type: 'keyword', regex: /\b(function|return|const|let|var|if|else|for|while|switch|case|break|default)\b/g, color: chalk.blue },
  { type: 'string', regex: /(["'])(?:(?=(\\?))\2.)*?\1/g, color: chalk.green },
  { type: 'number', regex: /\b\d+(\.\d+)?\b/g, color: chalk.yellow },
  { type: 'comment', regex: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, color: chalk.gray },
  { type: 'operator', regex: /[=+\-*/<>!&|]/g, color: chalk.red },
];

// 代码高亮函数
function highlightCode(code) {
  let highlightedCode = code;

  // 应用高亮规则
  for (const rule of HIGHLIGHT_RULES) {
    highlightedCode = highlightedCode.replace(rule.regex, match => rule.color(match));
  }

  return highlightedCode;
}

// 测试代码
const rawCode = `
function sum(a, b) {
  const result = a + b; // Add two numbers
  return result;
}

console.log(sum(1, 2)); // Output: 3
`;

console.log(highlightCode(rawCode));
