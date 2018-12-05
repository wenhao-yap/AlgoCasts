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
  let answer = {
    matrix:[],
    counter:0
  }

  for(let row=0; row<n;row++){
    answer.matrix.push(new Array(n).fill(0));
  }

  const noOfIterations = Math.ceil(n/2);

  for(let i=0;i<noOfIterations;i++){
    answer = fillExternal(answer.counter,answer.matrix,i,n-1-i,answer.matrix.length-1-i,i);
  }

  console.log(answer.matrix);

  return answer.matrix;
}

function fillExternal(counter,matrix,border_T,border_R,border_B,border_L){
  //fill in border top,border right,border bottom
  matrix = matrix.map((row,i)=>{
    //border top
    if(i===border_T){
      return row.map(col=>{
        if(col==0){
          counter++;
          return counter;          
        }
        return col;
      })
    }

    //border right
    if(i>0 && row[border_R]==0){
      counter++;
      row[border_R] = counter;
    }

    //border bottom
    if(i===border_B && row[border_R]!=0){
      //border_B-1 as the last row is already filled
      for(let j=border_B-1; j>=border_T;j--){
        counter++;
        row[j] = counter;       
      }
    }
    return row;
  })
  
  //fill in border left
  for(let i=matrix.length-1;i>=0;i--){
    if(matrix[i][border_L] === 0){
      counter++;
      matrix[i][border_L] = counter;
    }
  }
  return {matrix,counter};
}

module.exports = matrix;
