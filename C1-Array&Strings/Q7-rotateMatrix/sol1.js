function rotateMatrix(matrix) {
  if (matrix.length === 1) return matrix;
  const n = matrix.length;
  let rotated = new Array(n).fill();

  for (el in rotated) rotated[el] = new Array(n).fill();

  let level = 0;
  
  while (level < Math.ceil(n / 2)) {
    let mover = level;
    const max = n - 1 - level;


    if (level === max) {
      rotated[level][level] = matrix[level][level];
      return rotated;
    }

    // first row of original is last col of rotated
    while (mover < max) {
      rotated[mover][max] = matrix[level][mover];

      mover++;
    }

    // last col of original is bottom row of rotated
    while (mover > level) {
      rotated[max][mover] = matrix[max - mover + level][max];

      mover--;
    }

    // bottom row of original is first col of rotated
    while (mover < max) {
      rotated[max - mover + level][level] = matrix[max][max - mover + level];

      mover++;
    }

    // first col of original is first row of rotated
    while (mover > level) {
      rotated[level][max - mover + level] = matrix[mover][level];

      mover--;
    }

    level++;
  }

  return rotated;
}

const matrixA = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
]

const matrixB = [
  [1]
]

const matrixC = [
  [1,2,3,4,5],
  [16,17,18,19,6],
  [15,24,25,20,7],
  [14,23,22,21,8],
  [13,12,11,10,9]
]

const matrixD = [
  [1,2,3,4,5,6,7],
  [24,25,26,27,28,29,8],
  [23,40,41,42,43,30,9],
  [22,39,48,49,44,31,10],
  [21,38,47,46,45,32,11],
  [20,37,36,35,34,33,12],
  [19,18,17,16,15,14,13]
]

console.log(rotateMatrix(matrixA));
console.log(rotateMatrix(matrixB));
console.log(rotateMatrix(matrixC));
console.log(rotateMatrix(matrixD));