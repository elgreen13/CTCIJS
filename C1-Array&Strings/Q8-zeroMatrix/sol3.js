function nullifyRow(matrix, row, cols) {
  for (let j = 0; j < cols; j++) matrix[row][j] = 0;
}

function nullifyCol(matrix, col, rows) {
  for (let i = 0; i < rows; i++) matrix[i][col] = 0;
}

function zeroMatrix(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let zeroInFirstRow = false, zeroInFirstCol = false;

  for (let j = 0; j < n; j++) if (matrix[0][j] === 0) zeroInFirstRow = true;

  for (let i = 0; i < m; i++) if (matrix[i][0] === 0) zeroInFirstCol = true;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let j = 0; j < n; j++) if (matrix[0][j] === 0) nullifyCol(matrix, j, m);

  for (let i = 0; i < m; i++) if (matrix[i][0] === 0) nullifyRow(matrix, i, n);

  if (zeroInFirstRow) nullifyRow(matrix, 0, n);

  if (zeroInFirstCol) nullifyCol(matrix, 0, m);

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

const matrixE = [
  [1,0,2,3,0],
  [2,1,0,5,6],
  [3,7,8,9,10]
]

console.log(zeroMatrix(matrixA));
console.log(zeroMatrix(matrixB));
console.log(zeroMatrix(matrixC));
console.log(zeroMatrix(matrixD));
console.log(zeroMatrix(matrixE));
