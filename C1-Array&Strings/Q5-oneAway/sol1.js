function oneAway(a, b) {
  let matrix = new Array(a.length + 1).fill();

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(b.length + 1).fill();
    let allGreaterThanOne = true;
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = Math.max(i, j);
        if (matrix[i][j] <= 1) allGreaterThanOne = false;
      } else if (a[i-1] === b[j-1]) {
        matrix[i][j] = matrix[i-1][j-1];
        if (matrix[i][j] <= 1) allGreaterThanOne = false;
      } else {
        matrix[i][j] = Math.min(matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j]) + 1;
        if (matrix[i][j] <= 1) allGreaterThanOne = false;
      }
    }
    if (allGreaterThanOne) return false;
    allGreaterThanOne = true;
  }

  return true;
}

console.log(oneAway('pile', 'mile'), true)
console.log(oneAway('pale', 'ale'), true);
console.log(oneAway(' ', ' i'), true);
console.log(oneAway('pale', 'pick'), false);
console.log(oneAway('p i c k', 'pick'), false)