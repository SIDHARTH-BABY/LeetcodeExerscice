// spend some time with this proble , got it after watching a utube video
// qstn 118
function pascalTriangle(numRows) {
  if (numRows < 1) return [];

  if (numRows === 1) return [[1]];

  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    const currRow = [];
    currRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      console.log(prevRow, "prev");
      console.log(currRow);

      currRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currRow.push(1);
    triangle.push(currRow);
  }
  return triangle;
}

const numRows = 5;
console.log(pascalTriangle(numRows));
