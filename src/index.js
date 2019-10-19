module.exports = function solveSudoku(matrix) {
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      if( matrix[j][i] == 0) {
        let imposNum = [];
        let posNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for( let i = 0; i < 9; i++) {
          if (matrix[j][i] != 0) imposNum.push(matrix[j][i]); // checking row;
        }
        for( let j = 0; j < 9; j++) {
          if (matrix[j][i] != 0) imposNum.push(matrix[j][i]); // checking col;
        }
        let iC = Math.trunc(i/3)*3; // ckecking every 3x3 digit
        let jC = Math.trunc(j/3)*3;
        let iCMax = iC + 2;
        let jCMax = jC + 2;
        for (jC = jCMax -2; jC <= jCMax; jC++){
          for (iC = iCMax -2; iC <= iCMax; iC++){
            if (matrix[jC][iC] != 0) imposNum.push(matrix[jC][iC]);
          }
        }
        posNum = posNum.filter( item => !imposNum.includes(item)); // filter posNum after all check parameters
        for (let p = 0; p < posNum.length; p++) {
          matrix[j][i] = posNum[p];
          let sudo = solveSudoku(matrix);
          if (sudo) return sudo;
        }
          matrix[j][i] = 0;
          return false;
      }
    }
  }
  return matrix;
}
