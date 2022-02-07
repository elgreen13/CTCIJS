function isSubstring(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = i + 1; j <= b.length; j++) {
      if (a === b.substring(i, j)) return true;
    }
  }
  return false
}

//basically shifting all chars in a by some number 
function isRotation(a,b) {
  if (a.length !== b.length) return false;
  if (a.length === 1 && a[0] !== b[0]) return false;

  if (a === b) return true;

  const i = 0;

  for (let j = 1; j <= a.length; j++) {
    if (isSubstring(a.substring(i, j),b) && isSubstring(a.substring(j),b)) return true;
  }
  
  return false;
}
console.log('-- substrings --')
console.log(isSubstring('abc', 'troabcde'))
console.log(isSubstring('abcde', 'abcd'))

console.log('-- rotations --')
console.log(isRotation('abcde', 'abcde'), true);
console.log(isRotation('abcde', 'deabc'), true);
console.log(isRotation('abcde', 'bcdea'), true);
console.log(isRotation('abcde', 'daebc'), false);
console.log(isRotation('abcde', 'daebc'), false);
console.log(isRotation('a', 'b'), false);
console.log(isRotation('ab', 'ba'), true);
console.log(isRotation('ab', 'bc'), false);