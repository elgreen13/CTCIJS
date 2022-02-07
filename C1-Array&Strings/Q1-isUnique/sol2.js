function isUnique(str) {
  const sorted = str.split("").sort((a,b) => a.localeCompare(b)).join("");

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i-1]) return false;
  }

  return true;
}

//O(nlog(n)) time where time is the length of the array as we are sorting the array
//O(1) space as we sort in place

//Tests 

console.log(isUnique(""), true)
console.log(isUnique("abcdefghijklmnopqrstuvwxyz"), true)
console.log(isUnique("abdegc tuho plkm n "), false)
console.log(isUnique("aaaaaa   "), false)