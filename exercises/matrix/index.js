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
  let results = [];
  let counter = 0;

  for(let row=0; row<n;row++){
    results.push(new Array(n).fill(0));
  }

  results = results.map((row,i)=>{
    //first row
    if(i===0){
      return row.map(col=>{
        counter++;
        return counter;
      })
    }

    //last column of each row
    if(i>0){
      counter++;
      row[n-1] = counter;
    }

    //check last row
    if(i===row.length-1 && row[n-1]!=0){
      for(let j=row.length-2; j>=0;j--){
        counter++;
        row[j] = counter;       
      }
    }
    return row;
  })

  return results;
}

console.log(matrix(3));

module.exports = matrix;
