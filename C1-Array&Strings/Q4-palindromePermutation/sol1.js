function isPalPerm(str) {
  let charCounts = {};
  for (char of str) {
    if (char === " ") continue;
    if (!charCounts[char]) charCounts[char] = 1;
    else charCounts[char] ++;
  }

  let singleCharFound = false;
  for (char in charCounts) {
    if (charCounts[char] % 2 === 1) {
      if (singleCharFound) return false;
      singleCharFound = true;
    }
  }
  
  return true;
}

console.log(isPalPerm('abbcdeeedcbba a'), false)
console.log(isPalPerm('ygciygciygci'), false);
console.log(isPalPerm(' i'), true)
console.log(isPalPerm('ygciygciygciycgi'), true);
console.log(isPalPerm(' ikiki aa'), true)
