function isUnique(str) {
  let chars = {};
  for (char of str) {
    if (chars[char]) return false;
    else chars[char] = true;
  }
  return true;
}

//O(n) time where time is the length of the array
//O(m) space where m is the number of unique chars in the array. upper bound of O(n)

//Tests 

console.log(isUnique(""), true)
console.log(isUnique("abcdefghijklmnopqrstuvwxyz"), true)
console.log(isUnique("abdegc tuho plkm n "), false)
console.log(isUnique("aaaaaa   "), false)
