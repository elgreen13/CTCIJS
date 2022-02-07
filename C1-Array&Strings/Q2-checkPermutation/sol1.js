function arePerms(a, b) {
  if (a.length !== b.length) return false;
  return a.split("").sort((a,b) => a.localeCompare(b)).join("") === b.split("").sort((a,b) => a.localeCompare(b)).join("");
}

console.log(arePerms('hjskpoin sk', 'jjkldsjhi'), false);
console.log(arePerms('abcde', 'abcdd'), false);
console.log(arePerms('', ''), true);
console.log(arePerms('hi how aree you', 'hhay ioroweu  e'), true);
console.log(arePerms('aaaaaaaaabbbbb', 'bbaaaabbaaaaba'), true)