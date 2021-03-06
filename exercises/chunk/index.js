// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*---------------------------------------
 * Solution 1
-----------------------------------------*/
// function chunk(array, size) {
//   let output = []; let temp = [];
//   array.forEach((x,i) => {
//     temp.push(x);
//     if(temp.length === size || i === array.length - 1){
//       output.push(temp);
//       temp = [];
//     }
//   });
//   console.log(output);
//   return output;
// }

/*---------------------------------------
 * Solution 2 using slice
-----------------------------------------*/
function chunk(array, size) {
  let output = []; let i = 0;
  while(i<array.length){
    output.push(array.slice(i,i+size));
    i+=size;
  }
  return output;
}

module.exports = chunk;
