function arePerms(a, b) {
  let charCounts = {};
  for (char of a) {
    if (charCounts[char]) charCounts[char]++;
    else charCounts[char] = 1
  }

  for (char of b) {
    if (!charCounts[char]) return false;
    charCounts[char]--;
  }

  return true;
}

console.log(arePerms('hjskpoin sk', 'jjkldsjhi'), false);
console.log(arePerms('abcde', 'abcdd'), false);
console.log(arePerms('', ''), true);
console.log(arePerms('hi how aree you', 'hhay ioroweu  e'), true);
console.log(arePerms('aaaaaaaaabbbbb', 'bbaaaabbaaaaba'), true)