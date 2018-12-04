// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [[1, 2],[4, 3]];
  // const inner = new Array(n);
  // for(let i=0;i<n;i++){
  //   results.push(inner);
  // }

  let counter = 1;
  console.log(results[0][0]);
  //first row
  // for(let col=0;col<results[0].length;col++){
  //   console.log('test');
  //   results[0][col] = counter;
  //   // counter++;
  // }

  return results;
}

console.log(matrix(2));

module.exports = matrix;
