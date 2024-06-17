function searchMatrix(matrix: number[][], target: number): boolean {
  let rowLo = 0;
  let rowHi = matrix.length - 1;
  let rowMid = Math.floor(rowLo + (rowHi - rowLo) / 2);

  let colLo = 0;
  let colHi = matrix[0]!.length - 1;
  let colMid = Math.floor(colLo + (colHi - colLo) / 2);

  console.log("row: ", rowLo, rowMid, rowHi);
  while (rowLo <= rowHi) {
    if (matrix[rowMid]![0] === target) return true;
    if (target < matrix[rowMid]![0]!) rowHi = rowMid - 1;
    if (target > matrix[rowMid]![0]!) rowLo = rowMid + 1;
    rowMid = Math.trunc(rowLo + (rowHi - rowLo) / 2);
  }

  console.log("row: ", rowLo, rowMid, rowHi);
  console.log("col: ", colLo, colMid, colHi);

  console.log(matrix[rowMid]);

  if (matrix[rowMid]?.length) {
    while (colLo <= colHi) {
      if (matrix[rowMid]![colMid] === target) return true;
      if (target < matrix[rowMid]![colMid]!) colHi = colMid - 1;
      if (target > matrix[rowMid]![colMid]!) colLo = colMid + 1;
      colMid = Math.trunc(colLo + (colHi - colLo) / 2);
    }
  }

  return false;
}

const target = 0;
// const input = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];

const input = [[1]];

console.log(searchMatrix(input, target));
