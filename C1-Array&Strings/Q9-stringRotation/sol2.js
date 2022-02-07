function isSubstring(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = i + 1; j <= b.length; j++) {
      if (a === b.substring(i, j)) return true;
    }
  }
  return false
}

//basically shifting all chars in a by some number 
//can use isSubstring method
function isRotation(a,b) {
  return(isSubstring(a, b + b))
}

console.log('-- substrings --')
console.log(isSubstring('abc', 'troabcde'), true)
console.log(isSubstring('abcde', 'abcd'), false)

console.log('-- rotations --')
console.log(isRotation('abcde', 'abcde'), true);
console.log(isRotation('abcde', 'deabc'), true);
console.log(isRotation('abcde', 'bcdea'), true);
console.log(isRotation('abcde', 'daebc'), false);
console.log(isRotation('abcde', 'daebc'), false);
console.log(isRotation('a', 'b'), false);
console.log(isRotation('ab', 'ba'), true);
console.log(isRotation('ab', 'bc'), false);