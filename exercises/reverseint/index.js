// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  let array = (n.toString()).split('');
  if(array[0] === '-'){
    array.shift();
  }
  let str = array.reduce((prev,cur)=>{
    return cur + prev;
  },'');

  if(sign === -1){ 
    str = '-' + str;
  }
  //note that parseInt('-09') will return automatically as -9 
  return parseInt(str);
}

/*---------------------------------------
 * Solution 2 from other pple
-----------------------------------------*/
// function reverseInt(n) {
//   const isNegative = (n < 0);
//   if (isNegative) {
//       n = -n;
//   }
//   const myNumber = parseInt(n.toString().split('').reduce((rev, char) => char + rev, ''), 10);
//   return (isNegative) ? -myNumber : myNumber;
// }

console.log(reverseInt(-90));

module.exports = reverseInt;
