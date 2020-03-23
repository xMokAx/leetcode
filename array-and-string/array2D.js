/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = matrix => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  let index = 0;
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const result = new Array(rowCount * colCount);
  let directionUp = true;
  let row = 0;
  let col = 0;

  while (index < result.length) {
    if (directionUp) {
      while (row >= 0 && col < colCount) {
        result[index++] = matrix[row][col];
        row--;
        col++;
      }

      if (row < 0 && col < colCount) {
        row++;
      } else {
        row += 2;
        col--;
      }
    } else {
      while (col >= 0 && row < rowCount) {
        result[index++] = matrix[row][col];
        row++;
        col--;
      }

      if (col < 0 && row < rowCount) {
        col++;
      } else {
        col += 2;
        row--;
      }
    }

    directionUp = !directionUp;
  }

  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
);

/**
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const res = new Array(rowCount * colCount);

  let index = 0,
    inward = 0,
    row = 0,
    col = 0;

  while (index < res.length) {
    while (row === inward && index < res.length) {
      res[index++] = matrix[row][col];
      if (col < colCount - 1 - inward) {
        col++;
      } else {
        row++;
      }
    }

    while (col === colCount - 1 - inward && index < res.length) {
      res[index++] = matrix[row][col];
      if (row < rowCount - 1 - inward) {
        row++;
      } else {
        col--;
      }
    }

    while (row === rowCount - 1 - inward && index < res.length) {
      res[index++] = matrix[row][col];
      if (col > inward) {
        col--;
      } else {
        row--;
      }
    }

    while (col === inward && index < res.length) {
      res[index++] = matrix[row][col];
      if (row > inward + 1) {
        row--;
      } else {
        col++;
      }
    }
    inward++;
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);

console.log(spiralOrder([[1, 2, 3, 4]]));
console.log(spiralOrder([[1], [2], [3], [4]]));

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  if (numRows === 0) {
    return [];
  }
  const res = new Array(numRows);
  for (let i = 0; i < res.length; i++) {
    const row = new Array(i + 1);
    for (let j = 0; j < row.length; j++) {
      if (j === 0) {
        row[j] = 1;
      } else if (j === row.length - 1) {
        row[j] = 1;
      } else {
        row[j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
    res[i] = row;
  }

  return res;
};

console.log(generate(5));
