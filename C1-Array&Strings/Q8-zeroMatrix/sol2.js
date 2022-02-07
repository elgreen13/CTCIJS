function zeroMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let rowsAndColsToZero = {
    'rows': {},
    'cols': {}
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowsAndColsToZero['rows'][i] = true;
        rowsAndColsToZero['cols'][j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowsAndColsToZero['rows'][i] || rowsAndColsToZero['cols'][j]) matrix[i][j] = 0;
    }
  }

  return matrix;
}

const matrixA = [
  [0,2,3],
  [8,9,4],
  [7,6,5]
]

const matrixB = [
  [1]
]

const matrixC = [
  [10,2,3,4,5],
  [16,130,18,19,6],
  [15,24,25,10,0],
  [14,23,0,21,8],
  [0,12,11,10,9]
]

const matrixD = [
  [1,0,3,4,5,6,7],
  [24,0,26,27,0,29,8],
  [23,40,41,42,43,30,9],
  [22,39,0,49,10,31,10],
  [21,38,47,46,45,32,11],
  [20,37,36,35,34,33,12],
  [19,18,17,16,15,14,13]
]

console.log(zeroMatrix(matrixA));
console.log(zeroMatrix(matrixB));
console.log(zeroMatrix(matrixC));
console.log(zeroMatrix(matrixD));